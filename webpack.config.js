const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: {
    app: './src/index.js',
    tests: './src/tests/index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                'env',
                {
                  targets: {
                    browsers: 'last 2 versions'
                  }
                }
              ]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: 'node_modules/mocha/mocha.{css,js}',
        to: path.resolve(__dirname, 'lib')
      },
      {
        from: 'node_modules/chai/*.js',
        to: path.resolve(__dirname, 'lib')
      }
    ])
  ],
  output: {
    path: path.resolve(__dirname, 'lib', 'bundled'),
    filename: '[name].bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, 'lib'),
    // compress: true,
    port: 9000
  }
};

module.exports = config;
