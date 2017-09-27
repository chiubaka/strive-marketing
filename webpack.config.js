const config = require("./webpack.config.dev.js");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

config.plugins.push(new ExtractTextPlugin({
  filename: "strive.css",
  allChunks: true
}));

module.exports = config;
