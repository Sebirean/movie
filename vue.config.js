module.exports = {
  css: {
    loaderOptions: {
      less: {
        additionalData: `@import "~@/assets/global.less";`
      }
    }
  },
  devServer: {
    port: process.env.VUE_APP_LOCALHOST
  },
};
