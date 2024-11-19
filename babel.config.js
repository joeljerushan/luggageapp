module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'], // Optional: This defines the root folder
        alias: {
          // '@': './src', // Aliasing for simpler imports
          '@components': './src/components',
          '@utils': './src/utils',
          '@screen': './src/screen',
          '@navigation': './src/navigation',
          '@feature': './src/feature',
        },
      },
    ],
  ],
};
