const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = (env, options) => {
  const isProduction = options.mode === 'production';
  const isDevelopment = !isProduction;

  return {
    // ### Devtool
    devtool: 'cheap-source-map',

    // ### Watch
    watchOptions: {
      ignored: ['node_modules', 'dist', 'config', 'build', '.*']
    },

    // ### Dev
    devServer: {
      contentBase: resolve('dist'),
      compress: false,
      port: 8443,
      openPage: 'pages/index.html'
    },

    // ### Resolve
    resolve: {
      extensions: ['.js', '.ts', '.svelte', '.pug', '.sass', '.scss'],
      mainFields: ['svelte', 'browser', 'module', 'main'],
      alias: {
        '@': resolve('src'),
        models: resolve('src/models'),
      }
    },

    // ### Loaders
    module: {
      rules: [
        // #### Sass
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'sass-loader',
          ]
        },

        // #### Pug
        {
          test: /\.pug?$/,
          loader: 'pug-loader',
        },

        // #### Svelte
        {
          test: /\.(svelte)$/,
          loader: 'svelte-loader'
        },

        // // #### Babel
        // {
        //   test: /\.[tj]s?$/,
        //   loader: 'babel-loader',
        //   exclude: /node_modules/,
        // },

        // #### TypeScript
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        },
      ]
    },

    // ### Plugins
    plugins: [
      new webpack.ProgressPlugin(),
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),

      // #### Pug - Pages
      new HtmlWebpackPlugin({
        inject: isDevelopment,
        cache: false,
        template: resolve('src/resources/views/pages/index.pug'),
        filename: 'pages/index.html',
        templateParameters: {
          title: 'IndexedDB My Admin Extension',
          isProduction,
          isDevelopment,
        }
      }),

      // #### Pug - Popup
      new HtmlWebpackPlugin({
        inject: isDevelopment,
        cache: false,
        template: resolve('src/resources/views/popup.pug'),
        filename: 'popup.html',
      }),
    ],

    // ### Entry
    entry: {
      content: resolve('src/resources/assets/content.ts'),
      'pages/static/build': [resolve('src/resources/assets/pages.ts'), resolve('src/resources/assets/pages.sass')],
      popup: resolve('src/resources/assets/popup.ts'),
    }
  };
};
