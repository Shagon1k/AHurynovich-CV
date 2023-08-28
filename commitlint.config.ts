import type { UserConfig } from '@commitlint/types';

const Configuration: UserConfig = {
    parserPreset: {
        parserOpts: {
            headerPattern: /^\[AH-(.+)] (.+)/,
            headerCorrespondence: ['scope', 'subject'],
        },
    },
    plugins: [
        {
            rules: {
                'header-match-pattern': (parsed) => {
                    const { scope, subject } = parsed;
                    if (scope === null && subject === null) {
                        return [false, "Commit header must be in format: '[AH-X] Commit message'"];
                    }
                    return [true, ''];
                },
            },
        },
    ],
    rules: {
        'header-match-pattern': [2, 'always'],
    },
};

module.exports = Configuration;
