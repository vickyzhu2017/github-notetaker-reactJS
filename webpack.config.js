var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');
var openBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: path.join(__dirname,'./src/app.js'),
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename : 'bundle.js'
    },
    "devtool": 'cheap-module-eval-source-map',
    devServer: {
        contentBase:  'dist',
        inline: true,
        port: 8080,
        stats: { colors: true}
    },
    module:{
        loaders:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.(eot|svg|ttf|woff|woff2)/,
                loader:'url-loader'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html')
        }),
        // 自动打开浏览器
        new openBrowserPlugin({url: 'http://localhost:8080'})
    ]


}