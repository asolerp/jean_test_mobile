module.exports = {
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
  modulePathIgnorePatterns: ['<rootDir>/build'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
    '^@src/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|expo(nent)?|@expo(nent)?/.*|react-native-reanimated|@react-native)',
  ],
}
