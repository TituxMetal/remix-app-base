/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  ignorePatterns: ['!**/.server', '!**/.client'],

  // Base config
  extends: ['eslint:recommended'],
  plugins: ['prefer-arrow-functions'],
  rules: {
    'no-empty-pattern': 'off',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { prefer: 'type-imports', disallowTypeAnnotations: true, fixStyle: 'inline-type-imports' }
    ],
    'prefer-arrow-functions/prefer-arrow-functions': [
      'warn',
      {
        allowNamedFunctions: false,
        classPropertiesAllowed: false,
        disallowPrototype: false,
        returnStyle: 'unchanged',
        singleReturnOnly: false
      }
    ],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
        caughtErrors: 'none',
        destructuredArrayIgnorePattern: '^_*',
        argsIgnorePattern: '^_*'
      }
    ],
    'import/no-duplicates': ['warn', { 'prefer-inline': true }],
    'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
    'import/order': [
      'error',
      {
        'alphabetize': { order: 'asc', caseInsensitive: true },
        'groups': [['builtin'], ['external'], 'internal', 'parent', 'sibling'],
        'newlines-between': 'always'
      }
    ]
  },
  overrides: [
    // React
    {
      files: ['**/*.{js,jsx,ts,tsx}'],
      plugins: ['react', 'jsx-a11y'],
      extends: [
        'plugin:react/recommended',
        'plugin:react/jsx-runtime',
        'plugin:react-hooks/recommended',
        'plugin:jsx-a11y/recommended'
      ],
      settings: {
        'react': {
          version: 'detect'
        },
        'formComponents': ['Form'],
        'linkComponents': [
          { name: 'Link', linkAttribute: 'to' },
          { name: 'NavLink', linkAttribute: 'to' }
        ],
        'import/resolver': {
          typescript: {}
        }
      }
    },

    // Typescript
    {
      files: ['**/*.{ts,tsx}'],
      plugins: ['@typescript-eslint', 'import'],
      parser: '@typescript-eslint/parser',
      settings: {
        'import/internal-regex': '^~/',
        'import/resolver': {
          node: {
            extensions: ['.ts', '.tsx']
          },
          typescript: {
            alwaysTryTypes: true
          }
        }
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript'
      ]
    },

    // Node
    {
      files: ['.eslintrc.cjs'],
      env: {
        node: true
      }
    }
  ]
}
