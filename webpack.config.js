const path = require('path');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
  // which files should webpack watch and transpile
  entry: [ './src/template.html', './src/main.scss', './src/main.ts'],
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
      test: /\.s[ac]ss$/i,
      use:[
        'style-loader', {loader :'file-loader', options: {name: 'bundle.css'}}, 'extract-loader', 'css-loader', 'sass-loader', 'postcss-loader']
    },

    /*
    {
        //(s)css files wil be handled by the scss-loader and then send to the css-loader and finally saved as a bundle
        test:/\.(s*)css$/,
        use:[{loader :'file-loader', options: {name: 'bundle.css'}}, 'extract-loader', 'css-loader', 'sass-loader']
    },
    */
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
            disable:false,                                                                                                                                                                                                                                                           
          },
        }
      ],
    },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.scss' ]
  },
  output: {
    publicPath: '/dist/',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/')
  },
  devtool: 'source-map',
  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      host: 'localhost',
      reload: true,
      port: 3000,
      files: ["*.htm", "*.html","scss/*.*"],
      /*files: ["*.htm", "*.html", "scss/*.*"],*/
      index: 'template.html',
      server: { baseDir: ['dist'] }
    }),
    new HtmlWebpackPlugin (
      {
          title: 'Thought Render',
          template: './src/template.html'
      }),
  ]
};