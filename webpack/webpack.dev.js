const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = webpackMerge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: '[name].js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
  },
  devServer: {
    host: 'localhost',
    port: 8999,
    publicPath: '/',
    contentBase: path.resolve('.'),
    compress: true,
    hot: true,
    inline: true,
    overlay: {
        errors: true
    }
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.join(__dirname, '../dist'),
      verbose: true
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
  ]
});
