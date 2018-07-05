// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add additional webpack configurations.
// For more information refer the docs: https://storybook.js.org/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.
const autoprefixer = require('autoprefixer');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  plugins: [
    // your custom plugins
  ],
  module: {
    // add your custom rules.
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            forceEnv: 'development:client'
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]--[local]--[hash:base64:5]',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins: [
                autoprefixer()
              ]
            }
          },
        ],
      },
    ],
  },
};
