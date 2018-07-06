const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const htmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config()

const mode = process.env.NODE_ENV || 'development'
const isProduction = mode === 'production'
const outputFilename = isProduction ? 'bundle.[chunkhash].js' : '[name].js'

module.exports = {
  mode: mode,
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: outputFilename
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.html']
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN),
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'awesome-typescript-loader',
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'source-map-loader',
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
    ]
  }
}
