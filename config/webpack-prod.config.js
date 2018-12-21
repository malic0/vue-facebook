const path = require('path');
let webpackConfig = require("./webpack.config");

module.exports = {

  mode: "production",

  output: {
    filename: 'vue-facebook.min.js',
    path: path.resolve(__dirname, '../dist')
  },

  ...webpackConfig
};
