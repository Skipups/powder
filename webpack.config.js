"use strict";
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./client/app.js"),
  output: {
    path: path.join(__dirname, "./static"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-maps",
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
};
