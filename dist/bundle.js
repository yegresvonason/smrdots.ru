(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function initCursor() {
  console.log('cursor.js');
}

var _default = initCursor;
exports["default"] = _default;

},{}],2:[function(require,module,exports){
"use strict";

var _cursor = _interopRequireDefault(require("./components/cursor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.addEventListener('load', run);

function run() {
  console.log('index.js');
  (0, _cursor["default"])();
}

},{"./components/cursor":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9jdXJzb3IuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUEsU0FBUyxVQUFULEdBQXNCO0FBQ2xCLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0g7O2VBRWMsVTs7Ozs7O0FDSmY7Ozs7QUFJQSxNQUFNLENBQUMsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsR0FBaEM7O0FBRUEsU0FBUyxHQUFULEdBQWU7QUFDWCxFQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksVUFBWjtBQUVBO0FBQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBpbml0Q3Vyc29yKCkge1xuICAgIGNvbnNvbGUubG9nKCdjdXJzb3IuanMnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEN1cnNvcjsiLCJpbXBvcnQgaW5pdEN1cnNvciBmcm9tIFwiLi9jb21wb25lbnRzL2N1cnNvclwiO1xuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBydW4pO1xuXG5mdW5jdGlvbiBydW4oKSB7XG4gICAgY29uc29sZS5sb2coJ2luZGV4LmpzJyk7XG5cbiAgICBpbml0Q3Vyc29yKCk7XG59Il19
