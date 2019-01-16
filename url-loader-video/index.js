import './src/css/estilos.css';
import {mensajeBienvenida} from './src/js/message'
import imagePlatzi from './src/images/platzi.png'
import videoPlatzi from './src/video/que-es-core.mp4'

document.write(mensajeBienvenida);
const img = document.createElement('img');
img.setAttribute('src', imagePlatzi);
img.setAttribute('width', 100);
img.setAttribute('height', 100);
document.body.append(img);

const video = document.createElement('video');
video.setAttribute('src', videoPlatzi);
video.setAttribute('width', 480);
video.setAttribute('autoplay', true);
video.setAttribute('controls', true);
document.body.append(video);

console.log('Hola Mundo desde Webpack desde webpack.config externo');