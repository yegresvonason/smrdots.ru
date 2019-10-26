(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function initCursor() {
  var cursor = document.getElementById('cursor'),
      cursorInner = document.getElementById('cursor-inner');
  document.addEventListener('mousemove', function (event) {
    console.log(event);
    var x = event.clientX,
        y = event.clientY;
    cursorInner.style.transform = 'matrix(1, 0, 0, 1, ' + x + ', ' + y + '';
    setTimeout(function () {
      cursor.style.transform = 'matrix(1, 0, 0, 1, ' + x + ', ' + y + '';
    }, 50);
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9jdXJzb3IuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUEsU0FBUyxVQUFULEdBQXNCO0FBRWxCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFBQSxNQUNJLFdBQVcsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixjQUF4QixDQURsQjtBQUdBLEVBQUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDLFVBQVMsS0FBVCxFQUFnQjtBQUNuRCxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksS0FBWjtBQUVBLFFBQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFoQjtBQUFBLFFBQ0ksQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQURkO0FBR0EsSUFBQSxXQUFXLENBQUMsS0FBWixDQUFrQixTQUFsQixHQUE4Qix3QkFBd0IsQ0FBeEIsR0FBNEIsSUFBNUIsR0FBbUMsQ0FBbkMsR0FBdUMsRUFBckU7QUFFQSxJQUFBLFVBQVUsQ0FBQyxZQUFNO0FBQ2IsTUFBQSxNQUFNLENBQUMsS0FBUCxDQUFhLFNBQWIsR0FBeUIsd0JBQXdCLENBQXhCLEdBQTRCLElBQTVCLEdBQW1DLENBQW5DLEdBQXVDLEVBQWhFO0FBQ0gsS0FGUyxFQUVQLEVBRk8sQ0FBVjtBQUlILEdBWkQ7QUFjSDs7ZUFFYyxVOzs7Ozs7QUNyQmY7Ozs7QUFDQTtBQUlBLE1BQU0sQ0FBQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxHQUFoQzs7QUFFQSxTQUFTLEdBQVQsR0FBZTtBQUNYLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxVQUFaLEVBRFcsQ0FHWDs7QUFDQTtBQUVIIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiZnVuY3Rpb24gaW5pdEN1cnNvcigpIHtcbiAgICBcbiAgICBjb25zdCBjdXJzb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3Vyc29yJyksXG4gICAgICAgIGN1cnNvcklubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnNvci1pbm5lcicpO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuXG4gICAgICAgIGNvbnN0IHggPSBldmVudC5jbGllbnRYLFxuICAgICAgICAgICAgeSA9IGV2ZW50LmNsaWVudFk7XG5cbiAgICAgICAgY3Vyc29ySW5uZXIuc3R5bGUudHJhbnNmb3JtID0gJ21hdHJpeCgxLCAwLCAwLCAxLCAnICsgeCArICcsICcgKyB5ICsgJyc7XG4gICAgICAgIFxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGN1cnNvci5zdHlsZS50cmFuc2Zvcm0gPSAnbWF0cml4KDEsIDAsIDAsIDEsICcgKyB4ICsgJywgJyArIHkgKyAnJztcbiAgICAgICAgfSwgNTApO1xuXG4gICAgfSk7XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEN1cnNvcjsiLCJpbXBvcnQgaW5pdEN1cnNvciBmcm9tIFwiLi9jb21wb25lbnRzL2N1cnNvclwiO1xuLy8gaW1wb3J0IGluaXRTbW9vdGhTY3JvbGwgZnJvbSBcIi4vY29tcG9uZW50cy9zbW9vdGhTY3JvbGxcIjtcblxuXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgcnVuKTtcblxuZnVuY3Rpb24gcnVuKCkge1xuICAgIGNvbnNvbGUubG9nKCdpbmRleC5qcycpO1xuXG4gICAgLy8gaW5pdFNtb290aFNjcm9sbCgpO1xuICAgIGluaXRDdXJzb3IoKTtcblxufSJdfQ==
