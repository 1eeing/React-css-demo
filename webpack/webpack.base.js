const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname, '../src/index'),
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@commonStyle': path.join(__dirname, '../src/commonStyle/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_moduels/,
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, '../public/index.html'),
      filename: 'index.html',
      inject: true
    })
  ]
}
