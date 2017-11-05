const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// __dirname: 项目根目录 '/Users/shiyu/Desktop/webpack-demo'
// path.resolve 拼接路径

module.exports = {
    // 多入口
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '多个output'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};