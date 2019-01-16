const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: './dist/',
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
            presets: ['es2015','react']
          }
        }, 
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: 'css-loader'
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
    new ExtractTextPlugin('css/styles.css')
  ]
}