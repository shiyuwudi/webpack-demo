const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// __dirname: 项目根目录 '/Users/shiyu/Desktop/webpack-demo'
// path.resolve 拼接路径

module.exports = {
    // 多入口
    entry: {
        app: './src/index.js'
        // print: './src/print.js'
    },
    // for调试only！
    // 官方教程是inline-source-map,
    // source map 是支持webstorm debug的配置
    devtool: 'source-map',
    // 告诉webpack dev server代码所在的位置
    devServer: {
        contentBase: './dist',
        hot: true, // hmr
        stats: "errors-only",
        // compress: false, gzip
        // clientLogLevel: "none", // 禁用log
        // port: 9000
        // https: true,
        // proxy: {
        //     "/douban": {
        //         target: "https://api.douban.com",
        //         secure: false
        //     }
        // }
        // quiet: true, 啥都不打印了。。。。
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'HMR'
        }),
        new UglifyJSPlugin(),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
        // publicPath: path.resolve(__dirname, 'dist/myPath'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};