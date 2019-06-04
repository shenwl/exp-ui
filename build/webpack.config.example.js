const baseConfig = require('./webpack.config.base');
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = Object.assign({}, baseConfig, {
  mode: 'production',
  entry: {
    ...baseConfig.entry,
    example: resolve(__dirname, '../example/index.tsx')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../example.html'),
      filename: 'example.html',
    }),
  ]
})