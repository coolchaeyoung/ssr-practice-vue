const nodeExternals = require("webpack-node-externals");
const webpack = require("webpack");

module.exports = {
  // chainWebpack: webpack 내부 설정을 섬세하게 다룰 수 있다.
  chainWebpack: (webpackConfig) => {
    if (!process.env.VUE_APP_SSR) {
      webpackConfig.entry("app").clear().add("./src/entry-client.js");
      return;
    }

    webpackConfig.entry("app").clear().add("./src/entry-server.js");

    webpackConfig.target("node");
    webpackConfig.output.libraryTarget("commonjs2");

    webpackConfig.externals(nodeExternals({ allowlist: [/\.(css|vue)$/] }));

    webpackConfig.optimization.splitChunks(false).minimize(false);

    webpackConfig.plugins.delete("hmr");
    webpackConfig.plugins.delete("preload");
    webpackConfig.plugins.delete("prefetch");
    webpackConfig.plugins.delete("progress");
    webpackConfig.plugins.delete("friendly-errors");
    webpackConfig.plugin("limit").use(
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      })
    );
  },
};
