const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ExtractRootCss = new ExtractTextPlugin('styles/root.css');
const ExtractVueCss = new ExtractTextPlugin('styles/style.css');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'js/[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            { test: /\.vue$/, use: 'vue-loader' },
            { test: /\.css$/, use: ['vue-style-loader', 'style-loader', 'css-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2|svgz)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: 'assets/images/[name].[ext]?[hash]'
                    }
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        port: 9001,
        hot: true,
        inline: true,
        open: true
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',// 'vue/dist/vue.common.js' for webpack 1
            '@': path.resolve(__dirname, './src')
        }
    },
    externals: {
        'jquery': 'window.jQuery'
    }
};
//
// /**
//  * 生成生产代码的时候才触发
//  * 1.压缩应用代码；
//  * 2.使用 Vue.js 指南中描述的部署方式去除 Vue.js 中的警告。
//  * 3.抽取公共模块到vender.js
//  */
// if (process.env.NODE_ENV === 'production') {
//     module.exports.devtool = '#source-map';
//     // http://vue-loader.vuejs.org/en/workflow/production.html
//     module.exports.plugins = (module.exports.plugins || []).concat([
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: '"production"'
//             }
//         }),
//         new webpack.optimize.UglifyJsPlugin({
//             sourceMap: true,
//             compress: {
//                 warnings: false
//             }
//         }),
//         new webpack.LoaderOptionsPlugin({
//             minimize: true
//         }),
//         //抽取从node_modules引入的模块，如vue
//         new webpack.optimize.CommonsChunkPlugin({
//             name: 'vender',
//             minChunks: function (module, count) {
//                 var sPath = module.resource;
//                 // console.log(sPath,count);
//                 return sPath &&
//                     /\.js$/.test(sPath) &&
//                     sPath.indexOf(
//                         path.join(__dirname, 'node_modules')
//                     ) === 0;
//             }
//         })
//     ]);
// }