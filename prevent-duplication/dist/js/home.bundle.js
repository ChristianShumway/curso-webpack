webpackJsonp([0],{

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

__webpack_require__(16);

var _message = __webpack_require__(17);

var _platzi = __webpack_require__(36);

var _platzi2 = _interopRequireDefault(_platzi);

var _teachers = __webpack_require__(18);

var _teachers2 = _interopRequireDefault(_teachers);

var _teachers3 = __webpack_require__(19);

var _teachers4 = _interopRequireDefault(_teachers3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactDom.render)(_react2.default.createElement(_teachers4.default, { data: _teachers2.default }), document.getElementById('container'));

document.write(_message.mensajeBienvenida);
var img = document.createElement('img');
img.setAttribute('src', _platzi2.default);
img.setAttribute('width', 100);
img.setAttribute('height', 100);
document.body.append(img);

_teachers2.default.teachers.forEach(function (teacher) {
  var element = document.createElement('li');
  element.textContent = teacher.name;
  document.body.append(element);
});

console.log('Hola Mundo desde Webpack desde react');

/***/ })

},[20]);