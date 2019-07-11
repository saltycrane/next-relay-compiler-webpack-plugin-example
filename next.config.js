const path = require("path");
const RelayCompilerWebpackPlugin = require("relay-compiler-webpack-plugin");

module.exports = {
  webpack: config => {
    config.plugins.push(
      new RelayCompilerWebpackPlugin({
        exclude: [
          "**/.next/**",
          "**/__generated__/**",
          "**/__tests__/**",
          "**/node_modules/**",
        ],
        schema: path.resolve(__dirname, "./schema.graphql"),
        src: path.resolve(__dirname, "./"),
      }),
    );
    return config;
  },
};
