module.exports = {
  moduleNameMapper: {
    '\\.(css|less|scss|png)$': 'identity-obj-proxy',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': 'ts-jest',
  },
  // collectCoverage: true,
  collectCoverageFrom: ['!**/node_modules/**', './src/**/*.ts', './src/**/*.tsx'],
  coverageThreshold: {
    global: {
      lines: 70
    }
  },
  testEnvironment: 'jsdom',
};
