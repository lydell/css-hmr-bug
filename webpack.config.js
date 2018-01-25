const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./index.js",
  },

  devServer: {
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              // Set to `false` to see how well CSS HMR works when css-modules
              // is disabled.
              modules: true,
            }
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
};
