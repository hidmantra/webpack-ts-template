const merge = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.config.common.js');

module.exports = merge(common, {
    entry: '.src/',
    mode: 'production',
    devtool: 'source-map',
    output: {
        publicPath: './dist',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './src/'), 
      },
    plugins: 
    [
     
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      }),
      new HtmlWebpackPlugin (
        {
            title: 'Thought Render',
            template: './src/template.html',
            
        })
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
                    { loader: 'css-loader', options: { importLoader : 1 } },'postcss-loader'
                  ]
              },
                
            ]
        }
  });
  