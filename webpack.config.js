const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './tsFiles/index.ts', 
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './jsFiles'), 
    clean: true,
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'index.html',
    // }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './jsFiles'),
    },
    compress: true,
    port: 9000,
  },
};