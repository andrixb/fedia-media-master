const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlIndex = new HtmlWebpackPlugin({
    title: 'Home',
    filename: 'index.html',
    template: './src/views/pages/home.pug'
});

const htmlAbout = new HtmlWebpackPlugin({
    title: 'About',
    filename: 'about.html',
    template: './src/views/pages/about.pug'
});

module.exports = merge(common, {
    devtool: 'source-map',
    plugins: [
        htmlIndex,
        htmlAbout 
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        open: true,
    }
});
