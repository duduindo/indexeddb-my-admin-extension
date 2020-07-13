'use strict'

const path = require('path')
const dotenv = require('dotenv')
const { resolve } = require('path')
const sveltePreprocess = require('svelte-preprocess');

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

  // Fonts
  config.module.rules.push({
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: [
      {
        loader: 'file-loader'
      },
    ],
  })

  // CSS
  config.module.rules.push({
    test: /\.css$/,
    use: [
      {
        loader: 'css-loader'
      },
    ],
  })

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
            indentedSyntax: true, // optional
            // includePaths: ['node_modules/foundation-sites/scss'],
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

  // Svelte
  config.module.rules.push({
    test: /\.(html|svelte)$/,
    // exclude: /node_modules/,
    use: {
      loader: 'svelte-loader',
      options: {
        preprocess: sveltePreprocess({})
      },
    }
  })

  // Server
  config.devServer = {
    contentBase: resolve('dist/browser/'),
    compress: false,
    port: process.env.SERVER_PORT || 9000
  }

  // Resolve
  config.resolve.extensions = ['.mjs', '.js', '.vue', '.ts', '.tsx', '.svelte']
  config.resolve.mainFields = ['svelte', 'vue', 'browser', 'module', 'main']
  config.resolve.alias = {
    svelte: path.resolve('node_modules', 'svelte'),
    vue: resolve('node_modules', 'vue'),
    '@': resolve('src'),
    'views': resolve('src/views'),
    // 'common': resolve('src/js/common'),
    // 'css': resolve('src/css'),
  }

  // Plugin
  config.plugins = []

  return config
}
