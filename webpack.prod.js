const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true, // enable source maps to map errors (stack traces) to modules
            output: {
                comments: false, // remove all comments
            },
        })
    ]
});