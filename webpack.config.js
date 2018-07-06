const path = require('path')
const webpack = require('webpack')
const autoprefixer = require('autoprefixer')
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const mode = process.env.NODE_ENV || 'development'
const isProduction = mode === 'production'
const outputFilename = isProduction ? 'bundle.[chunkhash].js' : '[name].js'
const outputCssFilename = isProduction ? 'bundle.[chunkhash].css' : '[name].css'

require('dotenv').config()
const constants = {
  'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  'SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN),
}

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
    new ExtractTextPlugin({
      filename: outputCssFilename,
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env': constants
    }),
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
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules,importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                plugins: [
                  autoprefixer()
                ]
              }
            }
          ]
        })
      },
    ]
  }
}
