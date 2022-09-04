module.exports = {
    ci: {
        collect: {
            staticDistDir: './dist/client',
            numberOfRuns: 3,
            url: ['/'],
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
                'unused-javascript': 'off',
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
