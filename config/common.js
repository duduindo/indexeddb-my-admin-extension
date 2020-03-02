'use strict'

const path = require('path')
const dotenv = require('dotenv')
const { resolve } = require('path')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')


dotenv.config()

module.exports = (options = {config: {}}) => {
  const config = {
    devtool: null,
    watchOptions: null,
    module: {
      rules: []
    },
    plugins: [],
    resolve: {
      extensions: [],
      alias: {},
      mainFields: [],
    },
    entry: {},
    output: {},
    devServer: {},
    mode: process.env.MODE || 'production',
    ...options.config
  }

  config.devtool = 'cheap-source-map';
  config.watchOptions = {
    ignored: ['node_modules', 'dist', 'config', 'build', '.*']
  };

  // Stylus
  config.module.rules.push({
    test: /\.styl(us)?$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'stylus-loader'
      },
    ],
  })

  // Sass
  config.module.rules.push({
    test: /\.s(c|a)ss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        // Requires sass-loader@^7.0.0
        options: {
          implementation: require('sass'),
          fiber: require('fibers'),
          indentedSyntax: true // optional
        },
        // Requires sass-loader@^8.0.0
        options: {
          implementation: require('sass'),
          sassOptions: {
            fiber: require('fibers'),
            indentedSyntax: true // optional
          },
        },
      },
    ],
  })

  // Vue
  config.module.rules.push({
    test: /\.(html|vue)$/,
    use: {
      loader: 'vue-loader',
    }
  })

  // TypeScript
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    options: {
      appendTsSuffixTo: [/\.vue$/],
    }
  })

  // Server
  config.devServer = {
    contentBase: resolve('dist/browser/'),
    compress: false,
    port: process.env.SERVER_PORT || 9000
  }

  // Resolve
  config.resolve.extensions = ['.mjs', '.js', '.vue', '.ts', '.tsx']
  config.resolve.mainFields = ['vue', 'browser', 'module', 'main']
  config.resolve.alias = {
    vue: resolve('node_modules', 'vue'),
    '@': resolve('src'),
    // 'common': resolve('src/js/common'),
    // 'css': resolve('src/css'),
  }

  // Plugin
  config.plugins = [
    new VuetifyLoaderPlugin({
      /**
       * This function will be called for every tag used in each vue component
       * It should return an array, the first element will be inserted into the
       * components array, the second should be a corresponding import
       *
       * originalTag - the tag as it was originally used in the template
       * kebabTag    - the tag normalised to kebab-case
       * camelTag    - the tag normalised to PascalCase
       * path        - a relative path to the current .vue file
       * component   - a parsed representation of the current component
       */
      match (originalTag, { kebabTag, camelTag, path, component }) {
        if (kebabTag.startsWith('core-')) {
          return [camelTag, `import ${camelTag} from '@/components/core/${camelTag.substring(4)}.vue'`]
        }
      }
    })
  ]

  return config
}
