const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CssPlugin = require('mini-css-extract-plugin');
const historyApiFallback = require('connect-history-api-fallback');
const CssMinimizer = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'build[fullhash].js',
        clean: true,
        // publicPath: './'
    },
    plugins: [
        new HtmlPlugin({
            template: './src/index.html'
        }),
        new CssPlugin({
            filename: 'style[fullhash].css'
        })
    ],
    devServer: {
        port: 5500,
        static: {
            directory: path.join(__dirname, 'build')
        },
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    CssPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizer()
        ]
    }
}


