const webpack = require('webpack');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const copyFiles = new CopyWebpackPlugin([{
    from: 'src/assets/fonts',
    to: 'assets/fonts',
}, {
    from: 'src/assets/images',
    to: 'assets/images',
}]);
const extractCss = new ExtractTextPlugin({
    filename: 'assets/styles/main.min.css',
    allChunks: true,
});


const htmlHome = new HtmlWebpackPlugin({
    title: 'Home',
    hash: true,
    filename: 'index.html',
    template: './src/views/pages/home.pug',
});
const htmlAbout = new HtmlWebpackPlugin({
    title: 'About us',
    hash: true,
    filename: 'about.html',
    template: './src/views/pages/about.pug',
});
const htmlContact = new HtmlWebpackPlugin({
    title: 'Contact',
    hash: true,
    filename: 'contact.html',
    template: './src/views/pages/contact.pug',
});


const writeFiles = new WriteFilePlugin();
const spriteLoader = new SpriteLoaderPlugin();
const hmr = new webpack.HotModuleReplacementPlugin();
const namedModules = new webpack.NamedModulesPlugin();
const clean = new CleanWebpackPlugin(['dist']);

module.exports = {
    entry: {
        app: './src/ts/app.ts'
    },
    module: {
        rules: [{
                test: /\.json$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'json-loader'
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'ts-loader',
            },
            {
                test: /\.pug$/,
                use: [{
                    loader: 'raw-loader',
                }, {
                    loader: 'pug-html-loader',
                }],
            },
            {
                test: /\.s(a|c)ss$/,
                use: extractCss.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                    }, {
                        loader: 'postcss-loader',
                    }, {
                        loader: 'sass-loader',
                    }],
                }),
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: path.resolve('./src/assets/svg/sprite'),
                options: {
                    extract: true,
                    spriteFilename: './assets/svg/sprite.svg',
                },
            }, 
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                loader: 'url-loader?limit=100000',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    plugins: [
        clean, 
        hmr,
        namedModules,
        extractCss,
        copyFiles,
        writeFiles,
        spriteLoader,

        htmlHome,
        htmlAbout,
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
