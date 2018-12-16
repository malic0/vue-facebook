const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {

  entry: './src/index.js',

  resolve: {
    alias: {
      '@': path.resolve(__dirname + 'src')
    }
  },

  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }],
  },

  plugins: [
    new VueLoaderPlugin()
  ]

};
