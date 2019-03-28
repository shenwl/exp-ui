const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');
const webpack = require('webpack');

const { resolve } = path;

module.exports = Object.assign({}, baseConfig, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../index.html'),
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
})
