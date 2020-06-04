"use strict";
const { path } = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./client/app.js"),
  output: {
    path: path.join(__dirname, "./static"),
    sourceMapFilename: "main.js.map",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-maps",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
