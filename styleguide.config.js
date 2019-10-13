const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  title: 'Components Vue from IndexedDBMyAdmin - Style Guide',
  components: path.join(__dirname, 'src/common/vue/components/[A-Z]*/index.vue'),
  copyCodeButton: true,
  webpackConfig: require('./config/common.js'),
  serverPort: process.env.SERVER_PORT || 9000,
  getExampleFilename: componentPath => componentPath.replace(/.*([A-Z].*)\/.*/, `${__dirname}/docs/$1.md`),
  require: [
    path.join(__dirname, 'src/styleguide/global.requires.js'),
    path.join(__dirname, 'src/common/stylus/index.styl')
  ],
  sections: [
    {
      name: 'Common components',
      content: path.join(__dirname, 'docs/Common.md'),
      components: path.join(__dirname, 'src/common/vue/components/**/*.vue'),
    }
  ]
};
