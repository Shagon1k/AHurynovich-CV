module.exports = {
    ci: {
        collect: {
            staticDistDir: './dist/client',
            numberOfRuns: 3,
            url: ['/'], // Enables LightHouse to run in default route instead of index.html file
            headful: true,
            settings: {
                chromeFlags: '--no-sandbox --headless',
            },
        },
        assert: {
            preset: 'lighthouse:no-pwa',
            assertions: {
                'categories:performance': ['error', { minScore: 0.85, aggregationMethod: 'median-run' }],
                'categories:accessibility': ['error', { minScore: 0.8, aggregationMethod: 'pessimistic' }],
                'categories:best-practices': ['error', { minScore: 1, aggregationMethod: 'pessimistic' }],
                'categories:seo': ['error', { minScore: 1, aggregationMethod: 'pessimistic' }],
                'csp-xss': 'warn',
                'unused-javascript': 'off', // Turned OFF cause for some reason some packages (e.g. helmet, react-dom) are not tree-shaked
                // Note: Generally it is a bad practice to have a lot of different fonts in Application (performance, design and A11y reasons) - limited to 2.
                'resource-summary:font:count': ['warn', { maxNumericValue: 2 }],
            },
        },
        upload: {
            target: 'temporary-public-storage',
            uploadUrlMap: true, // Enables historical comparison of reports
        },
    },
};
