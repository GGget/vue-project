
const path = require('path')

function resolve(url) {
  return path.resolve(__dirname, url)
}


module.exports = {
    // devServer: {
    //   port: 8000
    // },
    devServer: {
      // port: 8000,
      proxy: {
        '/yxhj': {
          target: 'https://m.uhomes.com/',
          changeOrigin: true,
          pathRewrite: {
            '^/yxhj': ''
          }
        },
        
      }
    },
    chainWebpack  (config)  {
       config
            .resolve
            .alias
            .set('@styles', resolve('src/stylesheets'))
            .set('@libs', resolve('src/libs'))
            .set('@c', resolve('src/components'))
            .set('@pages', resolve('src/pages'))
            .set('@util', resolve('src/util'))
            
    }
}