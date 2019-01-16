import '../css/estilos.css';
import {mensajeBienvenida} from './message'
import imagePlatzi from '../images/platzi.png'
import data from './teachers.json'

console.log(data);

document.write(mensajeBienvenida);
const img = document.createElement('img');
img.setAttribute('src', imagePlatzi);
img.setAttribute('width', 100);
img.setAttribute('height', 100);
document.body.append(img);

data.teachers.forEach(teacher => {
  const element = document.createElement('li');
  element.textContent = teacher.name;
  document.body.append(element);
});


console.log('Hola Mundo desde Webpack desde json');