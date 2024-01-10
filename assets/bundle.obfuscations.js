/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./_dev/js/components/obfuscations.js":
/*!********************************************!*\
  !*** ./_dev/js/components/obfuscations.js ***!
  \********************************************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', function (_) {\n  var obfLinks = document.querySelectorAll('[data-obflink]');\n  obfLinks.forEach(function (link) {\n    var handleNavigation = function handleNavigation(event) {\n      var obflink = link.dataset.obflink;\n      var decodedLink = decodeURIComponent(escape(window.atob(obflink)));\n      if (event.type === 'click' || event.type === 'keydown' && event.key === 'Enter') {\n        if (event.ctrlKey || event.type === \"keydown\" && event.shiftKey) {\n          event.preventDefault();\n          var newWindow = window.open(decodedLink, '_blank');\n          newWindow.focus();\n        } else {\n          event.preventDefault();\n          document.location.href = decodedLink;\n        }\n      }\n    };\n    link.addEventListener('click', handleNavigation);\n    link.addEventListener('keydown', handleNavigation);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9fZGV2L2pzL2NvbXBvbmVudHMvb2JmdXNjYXRpb25zLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F4b21lLy4vX2Rldi9qcy9jb21wb25lbnRzL29iZnVzY2F0aW9ucy5qcz82NmQ5Il0sInNvdXJjZXNDb250ZW50IjpbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoXykge1xuICB2YXIgb2JmTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1vYmZsaW5rXScpO1xuICBvYmZMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rKSB7XG4gICAgdmFyIGhhbmRsZU5hdmlnYXRpb24gPSBmdW5jdGlvbiBoYW5kbGVOYXZpZ2F0aW9uKGV2ZW50KSB7XG4gICAgICB2YXIgb2JmbGluayA9IGxpbmsuZGF0YXNldC5vYmZsaW5rO1xuICAgICAgdmFyIGRlY29kZWRMaW5rID0gZGVjb2RlVVJJQ29tcG9uZW50KGVzY2FwZSh3aW5kb3cuYXRvYihvYmZsaW5rKSkpO1xuICAgICAgaWYgKGV2ZW50LnR5cGUgPT09ICdjbGljaycgfHwgZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmIGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSB8fCBldmVudC50eXBlID09PSBcImtleWRvd25cIiAmJiBldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdmFyIG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKGRlY29kZWRMaW5rLCAnX2JsYW5rJyk7XG4gICAgICAgICAgbmV3V2luZG93LmZvY3VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gZGVjb2RlZExpbms7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVOYXZpZ2F0aW9uKTtcbiAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVOYXZpZ2F0aW9uKTtcbiAgfSk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./_dev/js/components/obfuscations.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./_dev/js/components/obfuscations.js"]();
/******/ 	
/******/ })()
;