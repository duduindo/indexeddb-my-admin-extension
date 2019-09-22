const path = require('path')

module.exports = {
  title: 'Devtools\' Components from IndexedDBMyAdmin - Style Guide',
  components: './src/devtools/components/**/*.vue',
  copyCodeButton: true,
  webpackConfig: require('./config/common.js'),
  getExampleFilename(componentPath) {
    const path = componentPath.replace(`${__dirname}/src/devtools/components/`, `${__dirname}/docs/`)
    const pathFull = path.replace(/\.vue?$/, '.md')

    return pathFull
  },
  require: [
    path.join(__dirname, 'styleguide/global.requires.js'),
    path.join(__dirname, 'src/devtools/sass/index.sass'),
    path.join(__dirname, 'src/devtools/stylus/index.styl')
   ]
};
