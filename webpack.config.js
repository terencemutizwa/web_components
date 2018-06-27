const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        todo_list: './src/web_components/todo_list.js',
        app: './src/app.js',
        vendor: './src/vendor.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'raw-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/,
                query: {
                    presets: ['es2017', 'react', 'stage-2'],
                    plugins: ['transform-decorators-legacy', 'transform-class-properties']
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'sass-loader', // compiles Sass to CSS
                    options: {
                        includePaths: ['./src/']
                    }
                }]
            },
            {
                test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/,
                loaders: [{
                    loader: 'url-loader',
                    options: {
                        query: {
                            limit: '1024',
                            name: '[name]-[hash:8].[ext]'
                        }
                    }
                },
                    {
                        loader: 'image-webpack-loader'
                    }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Web Component',
            template: './www/index.html'
        })
    ],
    devServer: {
        historyApiFallback: true,
        hot: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    }
}