module.exports = {
  extends: ['@bjerk/eslint-config', 'plugin:jest/recommended'],
  plugins: ['jest'],
  ignorePatterns: ['dist', 'node_modules'],
  overrides: [
    {
      files: 'jest.config.*',
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],
  parserOptions: {
    project: './tsconfig.eslint.json',

    tsconfigRootDir: __dirname,
  },
};
