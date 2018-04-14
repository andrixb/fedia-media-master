const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// const htmlIndex = new HtmlWebpackPlugin({ title: 'Index', filename: 'index.html', template: './src/index.html' });

module.exports = merge(common, {
    devtool: 'inline-source-map',
    // plugins: [
    //     htmlIndex 
    // ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        open: true,
    }
});
