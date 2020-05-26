var webpack = require('webpack');
const path = require('path');
const devMode = process.env.NODE_ENV !== 'production';
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // which files should webpack watch and transpile ['./src/main.ts', './src/template.html', './src/styles/style.scss']
  entry:
  {
    main: ['/src/main.ts','./src/styles/style.scss', './src/tmp.html'],
    //vendor: './src/vendor.js'
  },
  module: {
    // rules webpack should follow when watching...
    rules: [
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
      // */
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
              outputPath: 'images/'
            },
          }
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin(
        {
          title: 'Thought Render',
          template: './src/tmp.html',
        }),
   

    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ContextReplacementPlugin(/typedjson-npm/, 'typed-json.js')
  ]
};