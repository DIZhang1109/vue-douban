module.exports = {
  devServer: {
    proxy: {
      '/movie/in_theaters': {
        target: 'https://api.douban.com/v2',
        ws: true,
        changeOrigin: true
      },
      '/movie/subject': {
        target: 'https://api.douban.com/v2',
        ws: true,
        changeOrigin: true
      }
    }
  }
}