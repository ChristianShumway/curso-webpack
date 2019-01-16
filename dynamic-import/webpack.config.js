const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//webpack nos permite si tenemos dependencias duplicadas nos permita guardarlas en un solo archivo
const webpack = require('webpack');

module.exports = {
  entry:{
    home: path.resolve(__dirname, './src/js/index.js'),
    contact: path.resolve(__dirname, './src/js/contact.js')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: path.resolve(__dirname, 'dist')+"/",
    chunkFilename: 'js/[id].[chunkhash].js',
  },
  module: {
    rules: [
      //aquí van los loaders, los loaders nos van a permitir soportar otro tipo de archivos en nuestros archivos javascript
      {
        //test: que tipo de archivo quiero reconocer,
        //use: que loader se va a encargar del archivo, css-loader nos permite cargar archivos dentro de js e interpretarlos y style-loader imprimirlos
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015','react'],
            plugins: ['syntax-dynamic-import'],
          }
        }, 
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        }), 
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader','sass-loader']
        }), 
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      }
    ]
  },
  plugins: [
    //aquí van los plugins
    new ExtractTextPlugin('css/[name].css'),
    new webpack.DllReferencePlugin({
      manifest: require('./modules-manifest.json')
    })
  ]
}