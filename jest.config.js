const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^@api/(.*)$': '<rootDir>/src/api/$1',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@navigation/(.*)$': '<rootDir>/src/navigation/$1',
    '^@screens/(.*)$': '<rootDir>/src/screens/$1',
    '^@state/(.*)$': '<rootDir>/src/state/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|expo(nent)?|@expo(nent)?/.*|react-native-reanimated|@react-native)',
  ],
}
