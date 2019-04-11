const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');

const { resolve } = path;

module.exports = Object.assign({}, baseConfig, {
  mode: 'development',
  entry: {
    example: './example.tsx',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../example.html'),
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
})
