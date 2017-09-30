const { resolve }        = require('path');
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin  = require("extract-text-webpack-plugin");
const OfflinePlugin      = require('offline-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');

const webpack            = require('webpack');

module.exports = {

    context: resolve(__dirname, '../src'),
    entry: {
        app: './index.js',
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:6].js',
        publicPath:'/'
    },
    module:{
        rules:[{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modlues/,
            query: {
              presets: ['es2015']
            }
        },
        {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallbackLoader: 'style-loader',
                loader: 'css-loader?modules,localIdentName=[hash:base64:6]-[name]-[local],camelCase',
            }),
            exclude: /node_modlues/
        }]
    },
    resolve: {
        alias: {
            'react': 'preact-compat',
            'react-dom': 'preact-compat'
        }
    },
    devtool: 'source-map',
    performance:{
        hints: 'error'
    },
    plugins:[
        new CleanWebpackPlugin(['dist'], {
            root: resolve(__dirname, '..')
        }),
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new ExtractTextPlugin('styles.[chunkhash:6].css'),
        new webpack.optimize.CommonsChunkPlugin('vendor'),
        new OfflinePlugin(),
        new CopyWebpackPlugin([{
            from: resolve(__dirname, '../src/icons/'),
            to:  resolve(__dirname, '../dist/')
        }])
    ]

}