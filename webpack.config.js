const path = require('path');

const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: './client/src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  devtool: 'source-map',
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader",
              options: { minimize: true }
            }
          ]
      }
    ]
  },
  plugins: [
      new HtmlWebPackPlugin({
        template: "./client/src/index.html",
        filename: "./index.html"
      })
  ],
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080,
    proxy: {
        '/api': {
            target: 'http://localhost:1337',
            secure: false
        }
    }
  }
};