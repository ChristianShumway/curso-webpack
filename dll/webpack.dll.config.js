const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
//webpack nos permite si tenemos dependencias duplicadas nos permita guardarlas en un solo archivo
const webpack = require('webpack');

module.exports = {
  entry:{
    modules: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    library: '[name]', // esto nos permitira crear una variable global para que en el index puedan comunicarse con el js del modulo
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, '[name]-manifest.json') //donde va a exportar el archivo json que ayudara al archivo de configuración inicial
    })
  ]
}