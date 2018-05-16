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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

window.runner = mocha.run();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _primeFactors = __webpack_require__(4);

describe('primeFactors', function () {
  var expectations = {
    1: [],
    2: [2],
    3: [3],
    4: [2, 2],
    5: [5],
    6: [2, 3],
    7: [7],
    8: [2, 2, 2],
    9: [3, 3],
    10: [2, 5],
    27: [3, 3, 3],
    125: [5, 5, 5]
  };

  Object.keys(expectations).forEach(function (numberStr) {
    var expectation = expectations[numberStr];
    var number = parseInt(numberStr, 10);
    it('finds prime factors of ' + number, function () {
      expect((0, _primeFactors.primeFactors)(number)).to.deep.equal(expectation);
    });
  });

  it('finds prime factors of a really large number', function () {
    expect((0, _primeFactors.primeFactors)(2 * 2 * 3 * 5 * 7 * 7 * 11 * 11 * 13 * 13)).to.deep.equal([2, 2, 3, 5, 7, 7, 11, 11, 13, 13]);
  });
});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.primeFactors = primeFactors;
function primeFactors(num) {
  var factors = [];
  var number = num;
  for (var divisor = 2; divisor <= num; divisor++) {
    for (; number % divisor === 0; number /= divisor) {
      factors.push(divisor);
    }
  }
  return factors;
};

/***/ })
/******/ ]);