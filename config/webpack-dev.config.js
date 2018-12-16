const path = require('path');

let webpackConfig = require("./webpack.config");

module.exports = {

  ...webpackConfig,

  mode: "development",

  output: {
    filename: 'vue-facebook.js',
    path: path.resolve(__dirname, '../dist')
  },

};
