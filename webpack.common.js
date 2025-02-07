const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // Where webpack picks the main js file to bundle modules in & build
  entry: "./src/index.js",

  // Where webpack outputs the bundled files in
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },

  // Plugins installed
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
    }),
  ],

  // Modules installed or rules set
  module: {
    rules: [
      {
        // Module installed
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        // Module installed
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        // Rule defined
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
