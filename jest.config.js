module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'json', 'vue', 'ts'],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  transform: {
    '.*\\.(vue)$': '@vue/vue3-jest',
    '^.+\\.js$': 'babel-jest',
    '^.+\\.ts$': [
      'ts-jest',
      { useESM: true, isolatedModules: true },
    ],
    '^.+\\.tsx?$': [
      'ts-jest',
      { useESM: true, isolatedModules: true },
    ]
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/components/**/*.vue',
    '<rootDir>/pages/**/*.vue',
  ],
};