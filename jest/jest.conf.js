const path = require('path')

module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
    'ts'
  ],
  // moduleNameMapper: {
  //   '^@/(.*)$': '<rootDir>/src/$1'
  // },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.[jt]s?(x)'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.vue$': 'vue-jest'
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  setupFiles: [
    '<rootDir>/jest/setup',
    '<rootDir>/jest/jest.globals.js'
  ],
  coverageDirectory: '<rootDir>/jest/coverage',
  collectCoverageFrom: [
    'src/**/*.{js,ts,vue}',
    '!src/content/app.js',
    '!src/devtools/app.js',
    '!src/devtools/router-config.js',
    '!**/node_modules/**'
  ]
}
