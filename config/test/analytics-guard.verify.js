const assert = require('assert'); // eslint-disable-line no-undef
const crypto = require('crypto'); // eslint-disable-line no-undef
const fs = require('fs'); // eslint-disable-line no-undef
const path = require('path'); // eslint-disable-line no-undef
const vm = require('vm'); // eslint-disable-line no-undef

const DIST_INDEX_PATH = path.resolve(process.cwd(), 'dist/index.html');
const GTM_ID = 'GTM-KVCRCDTF';
const PRODUCTION_HOSTS = ['ahurynovich.com', 'www.ahurynovich.com'];
const NON_PRODUCTION_HOSTS = [
    'localhost',
    '127.0.0.1',
    'preview-42.shagon1k.win',
    'example.com',
    'ahurynovich.com.example.com',
];

assert(fs.existsSync(DIST_INDEX_PATH), 'dist/index.html is missing. Run npm run preview:build first.');

const html = fs.readFileSync(DIST_INDEX_PATH, 'utf8');
const analyticsScriptMatch = html.match(/<script[^>]*data-production-analytics[^>]*>([\s\S]*?)<\/script>/i);

assert(analyticsScriptMatch, 'The generated production analytics bootstrap is missing.');
assert(
    !/<noscript[^>]*>[\s\S]*?googletagmanager/i.test(html),
    'An unconditional GTM noscript block remains.'
);
assert(!/googletagmanager\.com\/ns\.html/i.test(html), 'An unconditional GTM iframe remains.');
assert(!/<link[^>]+googletagmanager\.com/i.test(html), 'An unconditional GTM preconnect remains.');

const analyticsScript = analyticsScriptMatch[1];
const analyticsScriptHash = crypto.createHash('sha256').update(analyticsScript).digest('base64');

assert(
    html.includes(`'sha256-${analyticsScriptHash}'`),
    `CSP hash mismatch for the generated analytics bootstrap. Expected sha256-${analyticsScriptHash}.`
);

const executeAnalyticsBootstrap = (hostname) => {
    const insertedScripts = [];
    const firstScript = {
        parentNode: {
            insertBefore(node) {
                insertedScripts.push(node);
            },
        },
    };
    const document = {
        createElement(tagName) {
            return { tagName };
        },
        getElementsByTagName(tagName) {
            assert.strictEqual(tagName, 'script');
            return [firstScript];
        },
    };
    const window = { location: { hostname } };

    vm.runInNewContext(analyticsScript, { Date, document, window });

    return { insertedScripts, window };
};

for (const hostname of NON_PRODUCTION_HOSTS) {
    const result = executeAnalyticsBootstrap(hostname);

    assert.strictEqual(result.insertedScripts.length, 0, `${hostname} injected a GTM script.`);
    assert.strictEqual(result.window.dataLayer, undefined, `${hostname} initialized dataLayer.`);
}

for (const hostname of PRODUCTION_HOSTS) {
    const result = executeAnalyticsBootstrap(hostname);

    assert.strictEqual(
        result.insertedScripts.length,
        1,
        `${hostname} did not inject exactly one GTM script.`
    );
    assert.strictEqual(
        result.insertedScripts[0].async,
        true,
        `${hostname} did not create an async GTM script.`
    );
    assert.strictEqual(
        result.insertedScripts[0].src,
        `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`,
        `${hostname} created an unexpected GTM URL.`
    );
    assert.strictEqual(result.window.dataLayer.length, 1, `${hostname} did not initialize dataLayer once.`);
    assert.strictEqual(
        result.window.dataLayer[0].event,
        'gtm.js',
        `${hostname} initialized an unexpected event.`
    );
}

process.stdout.write('Built analytics guard verified for production and non-production hostnames.\n');
