const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const autoprefixer = require('autoprefixer');

const config = {
  entry: ['./src/index.jsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.[hash:6].js'
  },
  resolve: {
    extensions: ['jsx', '.js', '.scss', '.css']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: '[name]-[local]-[hash:base64:6]',
              minimaze: true,
              camelCase: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                autoprefixer({
                  browsers: ['last 2 version']
                })
              ]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
        loader: 'url-loader?limit=10000&name=[name]-[hash].[ext]',
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        include: path.join(__dirname, 'src')
      }
    ]
  },
  plugins: [
    new MinifyPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: 'React App title',
      favicon: path.join('./src/favicon.ico'),
      template: path.join('./src/index.ejs'),
      version: require('./package.json').version,
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      hash: true
    })
  ]
};

module.exports = config;
