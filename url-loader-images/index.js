import './src/css/estilos.css';
import {mensajeBienvenida} from './message'
import imagePlatzi from './src/images/platzi.png'

document.write(mensajeBienvenida);
const img = document.createElement('img');
img.setAttribute('src', imagePlatzi);
img.setAttribute('width', 100);
img.setAttribute('height', 100);
document.body.append(img);
console.log('Hola Mundo desde Webpack desde webpack.config externo');