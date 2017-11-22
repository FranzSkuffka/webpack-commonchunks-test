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
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      minChunks: 0,
      names: 'vendor',
      filename: 'vendor.js'
    })
  ]
}
