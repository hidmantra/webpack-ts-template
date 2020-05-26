const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config.common.js');

module.exports = merge(common,
  {
    mode: 'production',
    devtool: 'source-map',
    output: {
      publicPath: './dist',
      filename: '[name].[contentHash].bundle.js',
      path: path.resolve(__dirname, './src/'),

    },
    plugins:
      [

        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin(
          {
            filename: '[name].[hash].css',
            chunkFilename: '[id].[hash].css'
          }),
      ],
    module:
    {
      rules:
        [
          {
            test: /\.css$/,
            use:
              [
                'style-loader',
                MiniCssExtractPlugin.loader,
                { loader: 'css-loader', options: { importLoader: 1 } }, 'postcss-loader'
              ]
          },
          {
            // html files will be copied to the dist folder
            test: /.htm(l*)/,
            use:
            {
              loader: 'file-loader',
              options: {
                name: '[name][id].[ext]'
              }
            }
          },

        ]
    }
  });
