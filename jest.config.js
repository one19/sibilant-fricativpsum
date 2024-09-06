module.exports = {
  fakeTimers: {
    enableGlobally: true,
  },
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts', 'tsx', 'json'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '.+\\.(css|png|jpg|svg|eot|ttf|woff|woff2)$': 'identity-obj-proxy',
    'test/(.*)': '<rootDir>/test/$1',
    'src/(.*)': '<rootDir>/src/$1',
  },
  coverageDirectory: './coverage',
  coverageReporters: ['lcov'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,ts,tsx}'],
};
