/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n\r\n\r\n\r\nconst userForm = document.querySelector('.user-form');\r\nuserForm.addEventListener('submit', (event) => {\r\n    event.preventDefault();\r\n\r\n    const inputUserName = document.querySelector('.first-name');\r\n    if (inputUserName.value.trim() !=='') {\r\n    inputUserName.classList.add('valid');\r\n    inputUserName.classList.remove('error');\r\n    inputUserName.nextElementSibling.style.display = 'none'; \r\n    } else {\r\n        inputUserName.nextElementSibling.style.display = '';\r\n        inputUserName.classList.add('error');\r\n        inputUserName.classList.remove('valid');\r\n    }\r\n\r\n    const userMessage = document.querySelector('.user-message');\r\n    if (userMessage.value.trim() !=='') {\r\n        userMessage.classList.add('valid'); \r\n        userMessage.classList.remove('error');\r\n        userMessage.nextElementSibling.style.display = 'none';\r\n    } else {\r\n        userMessage.nextElementSibling.style.display = '';\r\n        userMessage.classList.add('error');\r\n        userMessage.classList.remove('valid');\r\n    }\r\n\r\n    const userPhone = document.querySelector('.user-phone');\r\n    const userPhoneMatch = userPhone.value.match(/^\\+380/);\r\n    if (userPhoneMatch !== null) {\r\n        userPhone.classList.add('valid');\r\n        userPhone.classList.remove('error');\r\n        userPhone.nextElementSibling.style.display = 'none';\r\n    } else {\r\n        userPhone.nextElementSibling.style.display = '';\r\n        userPhone.classList.add('error');\r\n        userPhone.classList.remove('valid');\r\n    }\r\n\r\n    const userEmail = document.querySelector('.user-email');\r\n    const userEmailMatch = userEmail.value.match(/^[^@\\s]+@[^@\\s]+\\.[^@\\s]+$/);\r\n    if (userEmailMatch !== null) {\r\n        userEmail.classList.add('valid');\r\n        userEmail.classList.remove('error');\r\n        userEmail.nextElementSibling.style.display = 'none';\r\n    } else {\r\n        userEmail.nextElementSibling.style.display = '';\r\n        userEmail.classList.add('error');\r\n        userEmail.classList.remove('valid');\r\n    }\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;