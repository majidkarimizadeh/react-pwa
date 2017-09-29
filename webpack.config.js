const { resolve }       = require('path');
const DashboardPlugin     = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const srcDir = resolve(__dirname, 'src')

module.exports = {

    entry: `${srcDir}/index.js`,
    output: {
        filename: 'bundle.js'
    },
    devServer:{
        historyApiFallback:true,
        publicPath:'/'
    },
    module:{
        rules:[{
            enforce: 'pre',
            test: /\.js$/,
            loader: 'standard-loader',
            exclude: /node_modlues/
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modlues/
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
    plugins:[
        new HtmlWebpackPlugin({
            template:`${srcDir}/index.html`
        }),
        new DashboardPlugin(),
        new ExtractTextPlugin({filename: '[name].css', allChunks: true})
    ]

}