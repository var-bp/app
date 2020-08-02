module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ts', '.tsx', '.jsx', '.js', '.json'],
        alias: {
          helpers: './src/helpers',
          screens: './src/screens',
          services: './src/services',
          shared: './src/shared',
          static: './src/static',
          store: './src/store',
          utils: './src/utils',
          storybook: './storybook',
          env: './env.json',
        },
      },
    ],
  ],
};
