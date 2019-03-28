(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["wdb"] = factory();
	else
		root["wdb"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src sync recursive \\.js$":
/*!************************!*\
  !*** ./src sync \.js$ ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./getCookies/getCookies.js": "./src/getCookies/getCookies.js",
	"./getUrlParams/getUrlParams.js": "./src/getUrlParams/getUrlParams.js",
	"./index.js": "./src/index.js",
	"./say/say.js": "./src/say/say.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive \\.js$";

/***/ }),

/***/ "./src/getCookies/getCookies.js":
/*!**************************************!*\
  !*** ./src/getCookies/getCookies.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.getCookie = function (cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];

    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }

    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }

  return '';
};

/***/ }),

/***/ "./src/getUrlParams/getUrlParams.js":
/*!******************************************!*\
  !*** ./src/getUrlParams/getUrlParams.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 获取url的所有参数值
module.exports.getUrlParams = function () {
  let arr = location.search.substr(1).split('&');
  let arr2 = location.hash.slice(location.hash.search(/\?/) + 1).split('&');
  let obj = {};
  arr.concat(arr2).forEach(function (o, i) {
    let temp = o.split('=');
    if (temp[1]) obj[temp[0]] = decodeURI(temp[1]);
  });
  return obj;
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 打包所有的js文件
let moduleExports = {}; //存放解析出来的所有js文件

const r = __webpack_require__("./src sync recursive \\.js$");

r.keys().forEach(key => {
  let attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
  moduleExports[attr] = r(key);
});
module.exports = moduleExports;

/***/ }),

/***/ "./src/say/say.js":
/*!************************!*\
  !*** ./src/say/say.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports.say = function () {
  console.log('say-hello');
};

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZGIvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL3dkYi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZGIvLi9zcmMgc3luYyBcXC5qcyQiLCJ3ZWJwYWNrOi8vd2RiLy4vc3JjL2dldENvb2tpZXMvZ2V0Q29va2llcy5qcyIsIndlYnBhY2s6Ly93ZGIvLi9zcmMvZ2V0VXJsUGFyYW1zL2dldFVybFBhcmFtcy5qcyIsIndlYnBhY2s6Ly93ZGIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2RiLy4vc3JjL3NheS9zYXkuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImdldENvb2tpZSIsImNuYW1lIiwibmFtZSIsImNhIiwiZG9jdW1lbnQiLCJjb29raWUiLCJzcGxpdCIsImkiLCJsZW5ndGgiLCJjIiwiY2hhckF0Iiwic3Vic3RyaW5nIiwiaW5kZXhPZiIsImdldFVybFBhcmFtcyIsImFyciIsImxvY2F0aW9uIiwic2VhcmNoIiwic3Vic3RyIiwiYXJyMiIsImhhc2giLCJzbGljZSIsIm9iaiIsImNvbmNhdCIsImZvckVhY2giLCJvIiwidGVtcCIsImRlY29kZVVSSSIsIm1vZHVsZUV4cG9ydHMiLCJyIiwicmVxdWlyZSIsImtleXMiLCJrZXkiLCJhdHRyIiwibGFzdEluZGV4T2YiLCJzYXkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNB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QUFHRCxHQUFHLENBQUNwQixTQUFKLENBQWNvQixHQUFHLENBQUNFLFdBQUosQ0FBZ0IsR0FBaEIsSUFBdUIsQ0FBckMsRUFBd0NGLEdBQUcsQ0FBQ0UsV0FBSixDQUFnQixHQUFoQixDQUF4QyxDQUFYO0FBQ0FOLGVBQWEsQ0FBQ0ssSUFBRCxDQUFiLEdBQXNCSixDQUFDLENBQUNHLEdBQUQsQ0FBdkI7QUFDRCxDQUhEO0FBS0FqQyxNQUFNLENBQUNDLE9BQVAsR0FBaUI0QixhQUFqQixDOzs7Ozs7Ozs7OztBQ1JBN0IsTUFBTSxDQUFDQyxPQUFQLENBQWVtQyxHQUFmLEdBQXFCLFlBQVk7QUFDL0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFdBQVo7QUFDRCxDQUZELEMiLCJmaWxlIjoid2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wid2RiXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIndkYlwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vZ2V0Q29va2llcy9nZXRDb29raWVzLmpzXCI6IFwiLi9zcmMvZ2V0Q29va2llcy9nZXRDb29raWVzLmpzXCIsXG5cdFwiLi9nZXRVcmxQYXJhbXMvZ2V0VXJsUGFyYW1zLmpzXCI6IFwiLi9zcmMvZ2V0VXJsUGFyYW1zL2dldFVybFBhcmFtcy5qc1wiLFxuXHRcIi4vaW5kZXguanNcIjogXCIuL3NyYy9pbmRleC5qc1wiLFxuXHRcIi4vc2F5L3NheS5qc1wiOiBcIi4vc3JjL3NheS9zYXkuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0dmFyIGlkID0gbWFwW3JlcV07XG5cdGlmKCEoaWQgKyAxKSkgeyAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gaWQ7XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYyBzeW5jIHJlY3Vyc2l2ZSBcXFxcLmpzJFwiOyIsIm1vZHVsZS5leHBvcnRzLmdldENvb2tpZSA9IGZ1bmN0aW9uIChjbmFtZSkge1xyXG4gIHZhciBuYW1lID0gY25hbWUgKyAnPSdcclxuICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKVxyXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2EubGVuZ3RoOyBpKyspIHtcclxuICAgIHZhciBjID0gY2FbaV1cclxuICAgIHdoaWxlIChjLmNoYXJBdCgwKSA9PT0gJyAnKSB7XHJcbiAgICAgIGMgPSBjLnN1YnN0cmluZygxKVxyXG4gICAgfVxyXG4gICAgaWYgKGMuaW5kZXhPZihuYW1lKSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gYy5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGMubGVuZ3RoKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gJydcclxufSIsIi8vIOiOt+WPlnVybOeahOaJgOacieWPguaVsOWAvFxyXG5tb2R1bGUuZXhwb3J0cy5nZXRVcmxQYXJhbXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgbGV0IGFyciA9IGxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkuc3BsaXQoJyYnKVxyXG4gIGxldCBhcnIyID0gbG9jYXRpb24uaGFzaC5zbGljZShsb2NhdGlvbi5oYXNoLnNlYXJjaCgvXFw/LykgKyAxKS5zcGxpdCgnJicpXHJcbiAgbGV0IG9iaiA9IHt9XHJcbiAgYXJyLmNvbmNhdChhcnIyKS5mb3JFYWNoKGZ1bmN0aW9uIChvLCBpKSB7XHJcbiAgICBsZXQgdGVtcCA9IG8uc3BsaXQoJz0nKVxyXG4gICAgaWYgKHRlbXBbMV0pIG9ialt0ZW1wWzBdXSA9IGRlY29kZVVSSSh0ZW1wWzFdKVxyXG4gIH0pXHJcbiAgcmV0dXJuIG9ialxyXG59IiwiLy8g5omT5YyF5omA5pyJ55qEanPmlofku7ZcclxubGV0IG1vZHVsZUV4cG9ydHMgPSB7fSAvL+WtmOaUvuino+aekOWHuuadpeeahOaJgOaciWpz5paH5Lu2XHJcbmNvbnN0IHIgPSByZXF1aXJlLmNvbnRleHQoJy4vJywgdHJ1ZSwgL1xcLmpzJC8pXHJcbnIua2V5cygpLmZvckVhY2goa2V5ID0+IHtcclxuICBsZXQgYXR0ciA9IGtleS5zdWJzdHJpbmcoa2V5Lmxhc3RJbmRleE9mKCcvJykgKyAxLCBrZXkubGFzdEluZGV4T2YoJy4nKSlcclxuICBtb2R1bGVFeHBvcnRzW2F0dHJdID0gcihrZXkpXHJcbn0pXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IG1vZHVsZUV4cG9ydHMiLCJtb2R1bGUuZXhwb3J0cy5zYXkgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc29sZS5sb2coJ3NheS1oZWxsbycpXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9