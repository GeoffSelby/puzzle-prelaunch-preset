/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/_assets/js/main.js":
/*!***********************************!*\
  !*** ./source/_assets/js/main.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var navMenu = {\n  toggle: function toggle() {\n    var menu = document.getElementById('js-nav-menu');\n    menu.classList.toggle('hidden');\n    menu.classList.toggle('lg:block');\n    document.getElementById('js-nav-menu-hide').classList.toggle('hidden');\n    document.getElementById('js-nav-menu-show').classList.toggle('hidden');\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2Fzc2V0cy9qcy9tYWluLmpzPzA1MjMiXSwibmFtZXMiOlsibmF2TWVudSIsInRvZ2dsZSIsIm1lbnUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xhc3NMaXN0Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxPQUFPLEdBQUc7QUFDZEMsUUFEYyxvQkFDTDtBQUNQLFFBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQWI7QUFDQUYsUUFBSSxDQUFDRyxTQUFMLENBQWVKLE1BQWYsQ0FBc0IsUUFBdEI7QUFDQUMsUUFBSSxDQUFDRyxTQUFMLENBQWVKLE1BQWYsQ0FBc0IsVUFBdEI7QUFDQUUsWUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixFQUE0Q0MsU0FBNUMsQ0FBc0RKLE1BQXRELENBQTZELFFBQTdEO0FBQ0FFLFlBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsRUFBNENDLFNBQTVDLENBQXNESixNQUF0RCxDQUE2RCxRQUE3RDtBQUNEO0FBUGEsQ0FBaEIiLCJmaWxlIjoiLi9zb3VyY2UvX2Fzc2V0cy9qcy9tYWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbmF2TWVudSA9IHtcbiAgdG9nZ2xlKCkge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbmF2LW1lbnUnKTtcbiAgICBtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnbGc6YmxvY2snKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnanMtbmF2LW1lbnUtaGlkZScpLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdqcy1uYXYtbWVudS1zaG93JykuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gIH0sXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./source/_assets/js/main.js\n");

/***/ }),

/***/ "./source/_assets/sass/main.scss":
/*!***************************************!*\
  !*** ./source/_assets/sass/main.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zb3VyY2UvX2Fzc2V0cy9zYXNzL21haW4uc2Nzcz80MDdkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Ii4vc291cmNlL19hc3NldHMvc2Fzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./source/_assets/sass/main.scss\n");

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./source/_assets/js/main.js ./source/_assets/sass/main.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/geoffselby/code/puzzle-prelaunch-preset/source/_assets/js/main.js */"./source/_assets/js/main.js");
module.exports = __webpack_require__(/*! /Users/geoffselby/code/puzzle-prelaunch-preset/source/_assets/sass/main.scss */"./source/_assets/sass/main.scss");


/***/ })

/******/ });