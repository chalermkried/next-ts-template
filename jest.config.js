module.exports = {
  collectCoverageFrom: ['{src,pages}/**/*.{ts,tsx,js,jsx}'],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  moduleNameMapper: {
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js',
    'components/(.*)': '<rootDir>/src/components/$1',
    'pages/(.*)': '<rootDir>/pages/$1',
    'test/(.*)': '<rootDir>/test/$1',
  },
  roots: ['<rootDir>'],
  setupFilesAfterEnv: ['<rootDir>/test/setup.ts'],
  testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next|out)[/\\\\]'],
  transform: {
    '^.+\\.(ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
};