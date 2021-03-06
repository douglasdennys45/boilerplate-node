
module.exports = {
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '!<rootDir>/src/**/index.ts',
    '!<rootDir>/src/main.ts',
    '!<rootDir>/src/infrastructure/api/config/env.ts',
    '!<rootDir>/src/infrastructure/api/config/module-alias.ts'
  ],
  coverageDirectory: 'coverage',
  coverageProvider: 'babel',
  testEnvironment: 'node',
  moduleNameMapper: {
    '@/test/(.+)': '<rootDir>/test/$1',
    '@/(.+)': '<rootDir>/src/$1'
  },
  preset: '@shelf/jest-mongodb',
  testMatch: ['**/*.test.ts'],
  roots: [
    '<rootDir>/src',
    '<rootDir>/test'
  ],
  transform: {
    '\\.ts$': 'ts-jest'
  },
  clearMocks: true
}
