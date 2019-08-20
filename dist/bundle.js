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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function initSmoothScroll() {
  console.log('smoothScroll.js');
  var html = document.documentElement,
      body = document.body,
      scroller = {
    target: document.querySelector('.wrapper-scroll'),
    ease: .05,
    endY: 0,
    y: 0,
    resizeRequest: 1,
    scrollRequest: 0
  },
      requestId = null;
  TweenLite.set(scroller.target, {
    rotation: .01,
    force3D: true
  });
  updateScroller();
  window.focus();
  window.addEventListener('resize', onResize);
  document.addEventListener('scroll', onScroll);

  function updateScroller() {
    var resized = scroller.resizeRequest > 0;

    if (resized) {
      var height = scroller.target.clientHeight;
      body.style.height = height + 'px';
      scroller.resizeRequest = 0;
    }

    var scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0; // something strange here

    scroller.endY = scrollY;
    scroller.y += (scrollY - scroller.y) * scroller.ease;

    if (Math.abs(scrollY - scroller.y) < .05 || resized) {
      scroller.y = scrollY;
      scroller.scrollRequest = 0;
    }

    TweenLite.set(scroller.target, {
      y: -scroller.y
    });
    requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
  }

  function onScroll() {
    scroller.scrollRequest++;
    if (!requestId) requestId = requestAnimationFrame(updateScroller);
  }

  function onResize() {
    scroller.resizeRequest++;
    if (!requestId) requestId = requestAnimationFrame(updateScroller);
  }
}

var _default = initSmoothScroll;
exports["default"] = _default;

},{}],3:[function(require,module,exports){
"use strict";

var _cursor = _interopRequireDefault(require("./components/cursor"));

var _smoothScroll = _interopRequireDefault(require("./components/smoothScroll"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

window.addEventListener('load', run);

function run() {
  console.log('index.js');
  (0, _smoothScroll["default"])();
  (0, _cursor["default"])();
}

},{"./components/cursor":1,"./components/smoothScroll":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9jdXJzb3IuanMiLCJzcmMvanMvY29tcG9uZW50cy9zbW9vdGhTY3JvbGwuanMiLCJzcmMvanMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUEsU0FBUyxVQUFULEdBQXNCO0FBQ2xCLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxXQUFaO0FBQ0g7O2VBRWMsVTs7Ozs7Ozs7Ozs7QUNKZixTQUFTLGdCQUFULEdBQTRCO0FBRXhCLEVBQUEsT0FBTyxDQUFDLEdBQVIsQ0FBWSxpQkFBWjtBQUVBLE1BQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxlQUFwQjtBQUFBLE1BQ0ksSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQURwQjtBQUFBLE1BRUksUUFBUSxHQUFHO0FBQ1AsSUFBQSxNQUFNLEVBQUUsUUFBUSxDQUFDLGFBQVQsQ0FBdUIsaUJBQXZCLENBREQ7QUFFUCxJQUFBLElBQUksRUFBRSxHQUZDO0FBR1AsSUFBQSxJQUFJLEVBQUUsQ0FIQztBQUlQLElBQUEsQ0FBQyxFQUFFLENBSkk7QUFLUCxJQUFBLGFBQWEsRUFBRSxDQUxSO0FBTVAsSUFBQSxhQUFhLEVBQUU7QUFOUixHQUZmO0FBQUEsTUFVSSxTQUFTLEdBQUcsSUFWaEI7QUFZQSxFQUFBLFNBQVMsQ0FBQyxHQUFWLENBQWMsUUFBUSxDQUFDLE1BQXZCLEVBQStCO0FBQzNCLElBQUEsUUFBUSxFQUFFLEdBRGlCO0FBRTNCLElBQUEsT0FBTyxFQUFFO0FBRmtCLEdBQS9CO0FBS0EsRUFBQSxjQUFjO0FBQ2QsRUFBQSxNQUFNLENBQUMsS0FBUDtBQUNBLEVBQUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFFBQWxDO0FBQ0EsRUFBQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsUUFBMUIsRUFBb0MsUUFBcEM7O0FBRUEsV0FBUyxjQUFULEdBQTBCO0FBQ3RCLFFBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFULEdBQXlCLENBQXZDOztBQUVBLFFBQUksT0FBSixFQUFhO0FBQ1QsVUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQVQsQ0FBZ0IsWUFBN0I7QUFDQSxNQUFBLElBQUksQ0FBQyxLQUFMLENBQVcsTUFBWCxHQUFvQixNQUFNLEdBQUcsSUFBN0I7QUFDQSxNQUFBLFFBQVEsQ0FBQyxhQUFULEdBQXlCLENBQXpCO0FBQ0g7O0FBRUQsUUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFdBQVAsSUFBc0IsSUFBSSxDQUFDLFNBQTNCLElBQXdDLElBQUksQ0FBQyxTQUE3QyxJQUEwRCxDQUF4RSxDQVRzQixDQVNxRDs7QUFFM0UsSUFBQSxRQUFRLENBQUMsSUFBVCxHQUFnQixPQUFoQjtBQUNBLElBQUEsUUFBUSxDQUFDLENBQVQsSUFBYyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsQ0FBcEIsSUFBeUIsUUFBUSxDQUFDLElBQWhEOztBQUVBLFFBQUksSUFBSSxDQUFDLEdBQUwsQ0FBUyxPQUFPLEdBQUcsUUFBUSxDQUFDLENBQTVCLElBQWlDLEdBQWpDLElBQXdDLE9BQTVDLEVBQXFEO0FBQ2pELE1BQUEsUUFBUSxDQUFDLENBQVQsR0FBYSxPQUFiO0FBQ0EsTUFBQSxRQUFRLENBQUMsYUFBVCxHQUF5QixDQUF6QjtBQUNIOztBQUVELElBQUEsU0FBUyxDQUFDLEdBQVYsQ0FBYyxRQUFRLENBQUMsTUFBdkIsRUFBK0I7QUFDM0IsTUFBQSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7QUFEYyxLQUEvQjtBQUlBLElBQUEsU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFULEdBQXlCLENBQXpCLEdBQTZCLHFCQUFxQixDQUFDLGNBQUQsQ0FBbEQsR0FBcUUsSUFBakY7QUFDSDs7QUFFRCxXQUFTLFFBQVQsR0FBb0I7QUFDaEIsSUFBQSxRQUFRLENBQUMsYUFBVDtBQUNBLFFBQUksQ0FBQyxTQUFMLEVBQWdCLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxjQUFELENBQWpDO0FBQ25COztBQUVELFdBQVMsUUFBVCxHQUFvQjtBQUNoQixJQUFBLFFBQVEsQ0FBQyxhQUFUO0FBQ0EsUUFBSSxDQUFDLFNBQUwsRUFBZ0IsU0FBUyxHQUFHLHFCQUFxQixDQUFDLGNBQUQsQ0FBakM7QUFDbkI7QUFDSjs7ZUFFYyxnQjs7Ozs7O0FDL0RmOztBQUNBOzs7O0FBSUEsTUFBTSxDQUFDLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLEdBQWhDOztBQUVBLFNBQVMsR0FBVCxHQUFlO0FBQ1gsRUFBQSxPQUFPLENBQUMsR0FBUixDQUFZLFVBQVo7QUFFQTtBQUNBO0FBQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJmdW5jdGlvbiBpbml0Q3Vyc29yKCkge1xuICAgIGNvbnNvbGUubG9nKCdjdXJzb3IuanMnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdEN1cnNvcjsiLCJmdW5jdGlvbiBpbml0U21vb3RoU2Nyb2xsKCkge1xuXG4gICAgY29uc29sZS5sb2coJ3Ntb290aFNjcm9sbC5qcycpO1xuXG4gICAgbGV0IGh0bWwgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG4gICAgICAgIGJvZHkgPSBkb2N1bWVudC5ib2R5LFxuICAgICAgICBzY3JvbGxlciA9IHtcbiAgICAgICAgICAgIHRhcmdldDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndyYXBwZXItc2Nyb2xsJyksXG4gICAgICAgICAgICBlYXNlOiAuMDUsXG4gICAgICAgICAgICBlbmRZOiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHJlc2l6ZVJlcXVlc3Q6IDEsXG4gICAgICAgICAgICBzY3JvbGxSZXF1ZXN0OiAwXG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVlc3RJZCA9IG51bGw7XG5cbiAgICBUd2VlbkxpdGUuc2V0KHNjcm9sbGVyLnRhcmdldCwge1xuICAgICAgICByb3RhdGlvbjogLjAxLFxuICAgICAgICBmb3JjZTNEOiB0cnVlXG4gICAgfSk7XG5cbiAgICB1cGRhdGVTY3JvbGxlcigpO1xuICAgIHdpbmRvdy5mb2N1cygpO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblJlc2l6ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xuXG4gICAgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsZXIoKSB7XG4gICAgICAgIGxldCByZXNpemVkID0gc2Nyb2xsZXIucmVzaXplUmVxdWVzdCA+IDA7XG5cbiAgICAgICAgaWYgKHJlc2l6ZWQpIHtcbiAgICAgICAgICAgIGxldCBoZWlnaHQgPSBzY3JvbGxlci50YXJnZXQuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgYm9keS5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xuICAgICAgICAgICAgc2Nyb2xsZXIucmVzaXplUmVxdWVzdCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc2Nyb2xsWSA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBodG1sLnNjcm9sbFRvcCB8fCBib2R5LnNjcm9sbFRvcCB8fCAwOyAvLyBzb21ldGhpbmcgc3RyYW5nZSBoZXJlXG5cbiAgICAgICAgc2Nyb2xsZXIuZW5kWSA9IHNjcm9sbFk7XG4gICAgICAgIHNjcm9sbGVyLnkgKz0gKHNjcm9sbFkgLSBzY3JvbGxlci55KSAqIHNjcm9sbGVyLmVhc2U7XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHNjcm9sbFkgLSBzY3JvbGxlci55KSA8IC4wNSB8fCByZXNpemVkKSB7XG4gICAgICAgICAgICBzY3JvbGxlci55ID0gc2Nyb2xsWTtcbiAgICAgICAgICAgIHNjcm9sbGVyLnNjcm9sbFJlcXVlc3QgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgVHdlZW5MaXRlLnNldChzY3JvbGxlci50YXJnZXQsIHtcbiAgICAgICAgICAgIHk6IC1zY3JvbGxlci55XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJlcXVlc3RJZCA9IHNjcm9sbGVyLnNjcm9sbFJlcXVlc3QgPiAwID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVNjcm9sbGVyKSA6IG51bGw7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25TY3JvbGwoKSB7XG4gICAgICAgIHNjcm9sbGVyLnNjcm9sbFJlcXVlc3QrKztcbiAgICAgICAgaWYgKCFyZXF1ZXN0SWQpIHJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVTY3JvbGxlcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gICAgICAgIHNjcm9sbGVyLnJlc2l6ZVJlcXVlc3QrKztcbiAgICAgICAgaWYgKCFyZXF1ZXN0SWQpIHJlcXVlc3RJZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVTY3JvbGxlcik7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0U21vb3RoU2Nyb2xsOyIsImltcG9ydCBpbml0Q3Vyc29yIGZyb20gXCIuL2NvbXBvbmVudHMvY3Vyc29yXCI7XG5pbXBvcnQgaW5pdFNtb290aFNjcm9sbCBmcm9tIFwiLi9jb21wb25lbnRzL3Ntb290aFNjcm9sbFwiO1xuXG5cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBydW4pO1xuXG5mdW5jdGlvbiBydW4oKSB7XG4gICAgY29uc29sZS5sb2coJ2luZGV4LmpzJyk7XG5cbiAgICBpbml0U21vb3RoU2Nyb2xsKCk7XG4gICAgaW5pdEN1cnNvcigpO1xufSJdfQ==
