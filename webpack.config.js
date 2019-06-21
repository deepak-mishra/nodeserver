'use strict'
const path = require('path')
var BUILD_DIR = path.resolve(__dirname, 'dist')
var SERVER_DIR = path.resolve(__dirname, 'server')

const NodemonPlugin = require('nodemon-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: SERVER_DIR + '/index.ts',
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: path.resolve(__dirname, "node_modules"),
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  target: 'node',
  externals: [nodeExternals()],
  plugins: [
    new NodemonPlugin()
  ]
}
