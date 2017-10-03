const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "strive.js",
    path: __dirname + "/dist",
    publicPath: "/"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      { test: /\.html$/, loader: "html-loader" },
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'
      { test: /\.tsx?$/, loaders: ["react-hot-loader/webpack", "awesome-typescript-loader"] },
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      // Compile all '.scss' files through 'sass-loader'.
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: function () {
                return [
                  require("autoprefixer")
                ]
              }
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      {
        test: /\.(woff|woff2)$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[hash].[ext]"
        }
      },
      {
        test: /\.(eot|ttf|otf)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[hash].[ext]"
        }
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000,
            name: "images/[name].[hash].[ext]"
          }
        }
      },
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      Popper: ["popper.js", "default"],
    })
  ]
};
