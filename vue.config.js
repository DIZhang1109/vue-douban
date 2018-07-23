module.exports = {
  devServer: {
    proxy: {
      '/movie': {
        target: 'https://api.douban.com/v2',
        ws: true,
        changeOrigin: true
      }
    }
  }
}