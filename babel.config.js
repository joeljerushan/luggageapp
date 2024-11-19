module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',  // Reanimated plugin must be last
    [
      'module-resolver',
      {
        root: ['./src'], // This is the root folder of your source code
        alias: {
          "@": "./src",
        },
      },
    ],
  ],
};
