module.exports = {
    mode: "development",
    devtool: "source-map",
    module: {
        rules: [
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
        ],
    }
};