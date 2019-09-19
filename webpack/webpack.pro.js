const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = webpackMerge(baseConfig, {
    mode: 'production',
    output: {
        filename: '[name].[chunkhash].js',
        path: path.join(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin({
            root: path.join(__dirname, '../dist'),
            verbose: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ],
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
});
