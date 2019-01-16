const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      //aquí van los loaders, los loaders nos van a permitir soportar otro tipo de archivos en nuestros archivos javascript
      {
        //test: que tipo de archivo quiero reconocer,
        //use: que loader se va a encargar del archivo, css-loader nos permite cargar archivos dentro de js e interpretarlos y style-loader imprimirlos
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          //fallback: 'style-loader', // no es necesario cuando se cargan con plugin extract
          use: 'css-loader'
        }), 
      }
    ]
  },
  plugins: [
    //aquí van los plugins
    new ExtractTextPlugin('css/styles.css')
  ]
}