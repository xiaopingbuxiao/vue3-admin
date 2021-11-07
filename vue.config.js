const path = require('path')
const childProcess = require('child_process')

module.exports = {
  chainWebpack (config) {
    config.module
      .rule('svg')
      .exclude.add(path.resolve('src/icons'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.resolve('src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },

  devServer: {
    before: function (app, server) {
      // TODO: 是否可以使用 webpack-dev-server app 同时实现mock 的热更新
      const mockWorker = childProcess.exec('nodemon ./mock/app.js')
      mockWorker.stdout.on('data', function (error, data) {
        if (error) {
          console.log(error)
        } else {
          console.log(data)
        }
      })
    },
  },
}
