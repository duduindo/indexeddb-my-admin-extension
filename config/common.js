'use strict'

const path = require('path')
const dotenv = require('dotenv')
const { resolve } = require('path')
const sveltePreprocess = require('svelte-preprocess');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


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
    optimization: {
      splitChunks: {
        cacheGroups: {}
      }
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

  // // Optimization
  // config.optimization.splitChunks.cacheGroups.styles = {
  //   name: 'styles',
  //   test: /index\.s(c|a)ss$/,
  //   chunks: 'all',
  //   enforce: true,
  // }

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
    test: /\.(sa|sc|c)ss$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].build.css',
          context: './',
          outputPath: '/',
          publicPath: '/pages'
        }
      },
      {
        loader: 'extract-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true
        }
      },
    ],
  })

  // // CSS
  // config.module.rules.push({
  //   test: /\.(sa|sc|c)ss$/,
  //   use: [
  //     'css-loader',
  //     'sass-loader',
  //   ],
  // })

  // Sass
  // config.module.rules.push({
  //   test: /\.s(c|a)ss$/,
  //   use: [
  //     MiniCssExtractPlugin.loader,
  //     'css-loader',
  //     'sass-loader',
  //   ],
  // })

  // // CSS
  // config.module.rules.push({
  //   test: /\.css$/,
  //   use: [
  //     {
  //       loader: 'css-loader'
  //     },
  //   ],
  // })

  // // Sass
  // config.module.rules.push({
  //   test: /\.s(c|a)ss$/,
  //   use: [
  //     'css-loader',
  //     {
  //       loader: 'sass-loader',
  //       // Requires sass-loader@^7.0.0
  //       options: {
  //         implementation: require('sass'),
  //         fiber: require('fibers'),
  //         indentedSyntax: true // optional
  //       },
  //       // Requires sass-loader@^8.0.0
  //       options: {
  //         implementation: require('sass'),
  //         sassOptions: {
  //           fiber: require('fibers'),
  //           indentedSyntax: true, // optional
  //           // includePaths: ['node_modules/foundation-sites/scss'],
  //         },
  //       },
  //     },
  //   ],
  // })

  // TypeScript
  config.module.rules.push({
    test: /\.tsx?$/,
    loader: 'ts-loader',
    exclude: /node_modules/,
    // options: {
    //   appendTsSuffixTo: [/\.vue$/],
    // }
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

  // PUG
  config.module.rules.push({
    test: /\.pug?$/,
    loader: 'pug-loader',
  })

  // Server
  config.devServer = {
    contentBase: resolve('dist/browser/'),
    compress: false,
    port: process.env.SERVER_PORT || 9000
  }

  // Resolve
  config.resolve.extensions = ['.mjs', '.js', '.ts', '.tsx', '.svelte']
  config.resolve.mainFields = ['svelte', 'browser', 'module', 'main']
  config.resolve.alias = {
    svelte: path.resolve('node_modules', 'svelte'),
    '@': resolve('src'),
    'views': resolve('src/views'),
    // 'common': resolve('src/js/common'),
    // 'css': resolve('src/css'),
  }

  // Plugins
  config.plugins.push(new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // both options are optional
    filename: 'style.css',
    chunkFilename: '[id].css',
  }));

  config.plugins.push(new HtmlWebpackPlugin({
    inject: true,
    cache: false,
    template: resolve('src/views/pug/pages/index.pug'),
    filename: 'pages/index.html',
    // favicon: 'favicon.ico',
    templateParameters: {
      title: 'IndexedDB My Admin Extension'
    }
  }))

  // config.plugins = [
  //   new HtmlWebpackPlugin({
  //     inject: true,
  //     cache: false,
  //     template: resolve('src/views/pug/pages/index.pug'),
  //     filename: resolve('dist/pages/index.html'),
  //     // favicon: 'favicon.ico',
  //     templateParameters: {
  //       title: 'IndexedDB My Admin Extension'
  //     }
  //   }),
  // ]

  return config
}
