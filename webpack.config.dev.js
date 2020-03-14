var webpack = require('webpack');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

module.exports = merge(common,
    {
        "module": {
            // rules webpack should follow when watching...
            "rules": [
                {
                    //TypeScipt files will be handled (transpiled) by the typescript-loader
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {

                    test: /\.(sass|scss)$/,
                    use:
                        [
                            {
                                loader: MiniCssExtractPlugin.loader,

                                options:
                                {
                                    includePaths: ["./src/styles/style.scss"],
                                    //sourceMap: true,
                                    importLoader: 2,
                                    // only enable hot in development
                                    hmr: process.env.NODE_ENV === 'development',
                                    // if hmr does not work, this is a forceful method.
                                    reloadAll: true,
                                }
                            },
                            "css-loader",
                            //"postcss-loader",
                            "sass-loader"
                        ]

                },

                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    // html files will be copied to the dist folder
                    test: /.htm(l*)/,
                    use:
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }

                },

                {
                    //all fonts are copied to the fonts folder
                    test: /.(ttf|otf|eot|otf|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/',    // where the fonts will go
                            publicPath: './fonts/'       // override the default path
                        }
                    }],
                },
                {
                    test: /\.(gif|png|jpe?g|svg)$/i,
                    use: [
                        'file-loader',
                        {
                            loader: 'image-webpack-loader',
                            options: {
                                disable: false,
                            },
                        }
                    ],
                },
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.scss']
        },
        output: {
            publicPath: '',
            path: path.resolve(__dirname, 'dist')
        },
        devtool: 'source-map',
        plugins: [
            new HtmlWebpackPlugin(
                {
                    title: 'Thought Render',
                    template: './src/template.html'
                }),
            new BrowserSyncPlugin({
                // browse to http://localhost:3000/ during development,
                // ./public directory is being served
                host: 'localhost',
                reload: true,
                port: 3000,
                files: ["*.htm", "*.html", "scss/*.*"],
                /*files: ["*.htm", "*.html", "scss/*.*"],*/
                index: 'template.html',
                server: { baseDir: ['dist'] }
            })
        ]
    });