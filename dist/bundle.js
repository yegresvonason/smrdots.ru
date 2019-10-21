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

// import initSmoothScroll from "./components/smoothScroll";
window.addEventListener('load', run);

function run() {
  console.log('index.js'); // initSmoothScroll();

  (0, _cursor["default"])();
}

},{"./components/cursor":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9jdXJzb3IuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUEsU0FBUyxVQUFULEdBQXNCO0FBQ2xCLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0g7O2VBRWMsVTs7Ozs7O0FDSmY7Ozs7QUFDQTtBQUlBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxHQUFoQzs7QUFFQSxTQUFTLEdBQVQsR0FBZTtBQUNYLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxVQUFaLEVBRFcsQ0FHWDs7QUFDQTtBQUVIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gaW5pdEN1cnNvcigpIHtcbiAgICBjb25zb2xlLmxvZygnY3Vyc29yLmpzJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRDdXJzb3I7IiwiaW1wb3J0IGluaXRDdXJzb3IgZnJvbSBcIi4vY29tcG9uZW50cy9jdXJzb3JcIjtcbi8vIGltcG9ydCBpbml0U21vb3RoU2Nyb2xsIGZyb20gXCIuL2NvbXBvbmVudHMvc21vb3RoU2Nyb2xsXCI7XG5cblxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHJ1bik7XG5cbmZ1bmN0aW9uIHJ1bigpIHtcbiAgICBjb25zb2xlLmxvZygnaW5kZXguanMnKTtcblxuICAgIC8vIGluaXRTbW9vdGhTY3JvbGwoKTtcbiAgICBpbml0Q3Vyc29yKCk7XG5cbn0iXX0=
