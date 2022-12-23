module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)?', '!src/**/*.stories.tsx'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
  },
  moduleNameMapper: {
    'react-markdown':
      '<rootDir>/node_modules/react-markdown/react-markdown.min.js'
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-markdown/)',
    'node_modules/(?!remark-gfm/)'
  ]
}
