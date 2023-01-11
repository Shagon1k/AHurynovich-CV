module.exports = {
    ci: {
        collect: {
            staticDistDir: './dist',
            numberOfRuns: 3,
            isSinglePageApplication: true,
            url: ['/', '/experience', '/passions'], // Enables LightHouse to run in specific urls instead of index.html
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
                /**
                 * Some of images have a bit larger size that in fact used.
                 * That size is not dramatically higher but provides more flexibility in image usage until designs are not final.
                 */
                'uses-responsive-images': 'warn',
                // Turned OFF cause for some reason some packages (e.g. helmet, react-dom) are not tree-shaked
                'unused-javascript': 'off',
                // Note: Generally it is a bad practice to have a lot of different fonts in Application (performance, design and A11y reasons) - limited to 4.
                'resource-summary:font:count': ['warn', { maxNumericValue: 4 }],
            },
        },
        upload: {
            target: 'temporary-public-storage',
            uploadUrlMap: true, // Enables historical comparison of reports
        },
    },
};
