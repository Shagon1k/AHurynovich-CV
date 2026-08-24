import type { UserConfig } from '@commitlint/types';

const COMMIT_TYPES = ['feat', 'fix', 'docs', 'test', 'refactor', 'perf', 'build', 'ci', 'chore', 'style'];

const Configuration: UserConfig = {
    parserPreset: {
        parserOpts: {
            headerPattern: /^(\w+)(?:\(([^)]+)\))?(!)?: (.+)$/,
            headerCorrespondence: ['type', 'scope', 'breaking', 'subject'],
        },
    },
    rules: {
        'type-empty': [2, 'never'],
        'type-enum': [2, 'always', COMMIT_TYPES],
        'subject-empty': [2, 'never'],
        'subject-full-stop': [2, 'never', '.'],
    },
};

module.exports = Configuration;
