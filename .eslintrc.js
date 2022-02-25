module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    'import',
    'simple-import-sort',
    'react-hooks'
  ],
  rules: {
    'react-hooks/rules-of-hooks': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'func-names': 'off',
    'quote-props': ['off', 'consistent-as-needed'],
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-filename-extension': ['off', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/require-extension': 'off',
    'sort-imports': 'off',
    'import/export': 'off',
    'import/named': 'off',
    'import/order': 'off',
    'import/first': 'off',
    'import/newline-after-import': 'off',
    'import/no-duplicates': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': [
      'off',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'simple-import-sort/sort': [
      'off',
      {
        // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/master/examples/.eslintrc.js#L71
        groups: [
          ['^.+\\.s?css$'],
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          ['^react', '^@?\\w'],
          ['^\\u0000'],
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ],
      },
    ],
    'import/no-cycle': 'off',
    'no-unused-vars': 'off',
    'no-restricted-syntax': 'off',
    'consistent-return': 'off',
    'no-unused-expressions': 'off',
    'react/no-array-index-key': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'default-case': 'off',
    'jsx-a11y/label-has-associated-control': [
      'off',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'off',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
};
