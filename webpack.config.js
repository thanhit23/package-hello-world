import {resolve} from ('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: resolve(__dirname, 'src/index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'hello-world.js',
    library: 'hello'
  },
  plugins: [
    new UglifyJsPlugin({
        exclude: [/\.min\.js$/gi] // skip pre-minified libs
    })
  ]
}