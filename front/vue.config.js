module.exports = {
  lintOnSave: true,
  configureWebpack: {
      output: {
          path: __dirname + "/cool-build"
      }
  },
  devServer: {
      disableHostCheck: true
  }
};