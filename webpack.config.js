var path = require('path');
var webpack = require('webpack');
 
module.exports = {
  entry: './resources/assets/js/app.js',
  output: { path: path.resolve(__dirname, 'public/js/'), filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
};