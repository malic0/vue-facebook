const path = require('path');

module.exports = {

  entry: './src/index.js',

  resolve: {
    alias: {
      '@': path.resolve(__dirname + 'src')
    }
  }

};
