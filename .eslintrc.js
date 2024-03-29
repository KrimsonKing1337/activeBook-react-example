module.exports = {
  'parser': '@typescript-eslint/parser',
  'plugins': ['import', '@typescript-eslint', '@typescript-eslint/tslint', 'react', 'jest'],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parserOptions': {
    'project': './tsconfig.json',
    'ecmaVersion': 2020,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
  'rules': {
    'eol-last': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'semi': ['error', 'always'],
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'object-curly-spacing': ['error', 'always'],
    'max-len': ['error', { 'code': 120 }],
    'max-lines': ['warn', { 'max': 150, 'skipBlankLines': true, 'skipComments': true }],
    'import/no-default-export': 'warn',
    'no-negated-in-lhs': 0,
    'no-native-reassign': 0,
    'jsx-a11y/anchor-is-valid': 0,

    'react/jsx-max-props-per-line': [2, { 'maximum': { 'single': 3, 'multi': 1 } }],
    'react/jsx-closing-bracket-location': [2, { 'nonEmpty': 'tag-aligned', 'selfClosing': 'line-aligned' }],
    'react/jsx-closing-tag-location': 1,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/self-closing-comp': 'error',

    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-explicit-any': ['warn', { 'ignoreRestArgs': false }],

    '@typescript-eslint/tslint/config': [
      'error',
      {
        'rules': {
          'ordered-imports': [
            true,
            {
              'module-source-path': 'full',
              'grouped-imports': true,
              'import-sources-order': 'any',
              'named-imports-order': 'any',
              'groups': [
                {
                  'match': '^react',
                  'order': 1
                },
                {
                  'match': '^@redux',
                  'order': 2
                },
                {
                  'match': '^redux',
                  'order': 3
                },
                {
                  'name': 'Global types',
                  'match': '@types',
                  'order': 6
                },
                {
                  'name': 'Store',
                  'match': '^store',
                  'order': 7
                },
                {
                  'name': 'Assets',
                  'match': '^assets',
                  'order': 10
                },
                {
                  'name': 'Pages',
                  'match': '^pages',
                  'order': 20
                },
                {
                  'name': 'Components',
                  'match': '^components',
                  'order': 30
                },
                {
                  'name': 'Hooks',
                  'match': '^hooks',
                  'order': 40
                },
                {
                  'name': 'Utils',
                  'match': '^utils',
                  'order': 70
                },
                {
                  'name': 'Parent directory',
                  'match': '^[.][.]',
                  'order': 80
                },
                {
                  'name': 'Styles',
                  'match': '^.+(scss|css)',
                  'order': 100
                },
                {
                  'name': 'Current directory types',
                  'match': './@types',
                  'order': 80
                },
                {
                  'name': 'Current directory',
                  'match': '^[.]',
                  'order': 90
                },
                {
                  'name': 'Vendors & Packages',
                  'match': '.*',
                  'order': 5
                },
              ]
            }
          ]
        }
      }
    ],

    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  },
};
