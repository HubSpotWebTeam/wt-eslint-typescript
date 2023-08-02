module.exports = {
  overrides: [
    {
      files: [
        '**/*.ts',
        '**/*.tsx'
      ],
      rules: {
        'import/extensions': 'off',
        'no-console': ['error', { allow: ['warn', 'error'] }],
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": "error"
      },
      'parser': '@typescript-eslint/parser',
      'plugins': [
        '@typescript-eslint'
      ],
      'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended'
      ],
    },
  ],
}
