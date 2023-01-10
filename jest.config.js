module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss|png)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  // maxWorkers: 1,
  // testPathIgnorePatterns: ['/node_modules/(?!my-package)(.*)'],
  collectCoverage: true,
  collectCoverageFrom: [
    // './src/**/*.tsx',
    // '!./src/**/index.ts',
    // '!./src/common',
    // '!./node_modules',
    // '**/src/**/*.{tsx}',
    './src/components/**/**',
    './src/store/**',
    './src/hooks/**',
    './src/helpers/**',
    './src/pages/**',
    // './src/components/MovieCard/**',
    // './src/components/MovieDetails/**',
    '!./src/**/index.ts',
    // '!**/*.test.{js,jsx,ts,tsx}',
    '!./src/**/__snapshots__/**',
    // '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      lines: 70,
    },
  },
  testEnvironment: 'jsdom',
};
