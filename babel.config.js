module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin', // Reanimated plugin must be last
    [
      'module-resolver',
      {
        root: ['./src'], // Root folder
        extensions: [".js", ".json", ".ts", ".tsx", ".jsx"], // Extensions to resolve
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
