const webpack = require('webpack')

module.exports = {
  entry: {
    app: './app',
    widget: './widget'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    rules: [
      { test: /\.elm$/, loaders: ['elm-webpack-loader']}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: 2,
      names: 'vendor',
      filename: 'vendor.js'
    })
  ]
}
