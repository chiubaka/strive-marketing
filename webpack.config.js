const config = require("./webpack.config.dev.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Uglify = require("uglifyjs-webpack-plugin");

config.plugins.push(new ExtractTextPlugin({
  filename: "strive.css",
  allChunks: true
}));

config.plugins.push(new Uglify());

module.exports = config;
