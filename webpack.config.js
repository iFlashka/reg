const { join, resolve } = require('path');

const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const CssLoader = require('css-loader');
const HtmlTemplatePlugin = require('html-webpack-template');
const VuePlugin = require('vue-loader/lib/plugin');

module.exports = {
  context: __dirname,

  entry: join(__dirname, 'src/index.js'),

  output: {
    publicPath: '/',
    path: join(__dirname, 'public'),
    filename: 'bundle.js'
  },

  resolve: {
    modules: [
      resolve('./src/'),
      resolve('./node_modules'),
    ],
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]      
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      }
    ],
  },

  plugins: [
    new VuePlugin(),
    
    new HtmlPlugin({
      filename: 'index.html',
      template: HtmlTemplatePlugin,
      inject: false,
      mobile: true,
      appMountId: 'app',
    }),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `"${process.env.NODE_ENV}"`,
      },
    }),
  ],

  devServer: {
    historyApiFallback: true,
    contentBase: './public/',
    hot: true,
    host: '127.0.0.1',
    port: 9000,
    https: true,
    proxy: {
      '/company/news/rss': {
        target: 'https://www.reg.ru/',
        changeOrigin: true
      }
    }
  },
};
