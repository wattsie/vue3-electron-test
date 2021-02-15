
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        publish: ['github'],
      }
    },
    moment: {
      locales: [
        'en'
      ]
    }
  },
  publicPath: process.env.NODE_ENV  ===  'production'  ?  './'  :  '/',
}
