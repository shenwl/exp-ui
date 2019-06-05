const baseConfig = require('./webpack.config.base');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  entry: {
    example: resolve(__dirname, '../example/index.tsx')
  },
  output: {
    path: resolve(__dirname, '../doc'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../example.html'),
      filename: 'index.html',
    }),
  ]
})