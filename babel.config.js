module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',  // Reanimated plugin must be last
    [
      'module-resolver',
      {
        root: ['./src'], // This is the root folder of your source code
        extensions: [".js", ".json", ".ts", ".tsx", ".jsx"],
        alias: {
          "@": "./src",
          '@components': './src/components',
          '@features': './src/features',
          '@screens': './src/screens',
          '@navigation': './src/navigation',
          '@assets': './src/assets',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
