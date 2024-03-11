module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@src': './src',
          '@api': './src/api',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@state': './src/state',
          '@utils': './src/utils',
        },
      },
    ],
  ],
}
