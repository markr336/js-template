const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',

  // Required for aligning error messages in the debugger to the lines where
  // the error occured
  devtool: 'eval-source-map',
  devServer: {
    watchFiles: ['./src/template.html'],
  },
});
