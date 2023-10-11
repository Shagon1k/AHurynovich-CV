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
                /**
                 * Note: CSR increase LCP time (which has a huge weight on overall performance).
                 * Thus, it is very hard to achieve high level (80%+) of performance metric w/o SSR.
                 * 70% was chosen as optimal realistic goal.
                 */
                'categories:performance': ['error', { minScore: 0.7, aggregationMethod: 'median-run' }],
                /**
                 * TEMPORARY: Turned off because works incorrectly with "low-contrast" for the issue related with AXE:
                 * https://github.com/GoogleChrome/lighthouse/issues/15002
                 */
                'categories:accessibility': ['off', { minScore: 0.8, aggregationMethod: 'pessimistic' }],
                'categories:best-practices': ['error', { minScore: 1, aggregationMethod: 'pessimistic' }],
                'categories:seo': ['error', { minScore: 0.9, aggregationMethod: 'pessimistic' }],
                'csp-xss': 'warn',
                // Turned OFF cause for some reason some packages (e.g. helmet, react-dom) are not tree-shaked
                'unused-javascript': 'off',
                // TEMPORARY: LightHouse has some issue related with "axe" which is used. Should be reconsidered to turn ON in future.
                'color-contrast': 'off',
                'tap-targets': 'warn',
                'bf-cache': 'warn',
                // As application has SPA architecture, LCP images pre-loading was setup only for Main Page as most general one.
                // See src/assets/preload.config.js for more details.
                'prioritize-lcp-image': 'warn',
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
