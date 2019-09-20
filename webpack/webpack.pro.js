const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = webpackMerge(baseConfig, {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.join(__dirname, '../build'),
    publicPath: '/'
  },
  devtool: 'source-map',
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    minimize: true,
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }],
        exclude: /node_moduels/,
      }, {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            modules: true
          }
        }, 'sass-loader'],
        exclude: /node_moduels/,
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
      root: path.join(__dirname, '../build'),
      verbose: true
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
  ],
});
