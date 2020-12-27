module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    '.*.utils.ts',
    '.*/fixtures.ts',
    '.*/*.fixtures.ts',
    '.*/dist/.*',
    '.*dist.*',
  ],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
