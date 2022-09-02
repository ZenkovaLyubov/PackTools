/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/displayItems.js":
/*!****************************!*\
  !*** ./js/displayItems.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"itemDisplay\": () => (/* binding */ itemDisplay)\n/* harmony export */ });\n\r\n    function displayImg(el){\r\n        return `<div class=\"item\"><img src=\"${el.url}\" alt=\"img\" class=\"imgItem\">\r\n        <div class=\"itemName\">${el.resName}</div></div>`\r\n    }\r\n    function displayAudio(el){\r\n        return `<div class=\"item\"><audio class=\"audioItem\"\r\n            src=\"${el.url}\"\r\n            controls>\r\n            Ваш браузер не поддерживает элемент <code>audio</code>.\r\n            </audio>\r\n            <div class=\"itemName\">${el.resName}</div>\r\n            </div>`\r\n    }\r\n    function displayVideo(el){\r\n        return `<div class=\"item\"><video class=\"videoItem\"\r\n            controls>\r\n            <source src=\"${el.url}\" type=\"video/mp4\"/>\r\n            </video>\r\n            <div class=\"itemName\">${el.resName}</div>\r\n            </div>`\r\n    }\r\n    function itemDisplay(el) {\r\n       \r\n        switch(el.type){\r\n            \r\n            case 'img': return displayImg(el); break;\r\n            case 'audio': return displayAudio(el); break;\r\n            case 'video': return displayVideo(el); break;\r\n        }\r\n      \r\n    };\n\n//# sourceURL=webpack://lesson3/./js/displayItems.js?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.scss */ \"./css/style.scss\");\n/* harmony import */ var _displayItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayItems.js */ \"./js/displayItems.js\");\n/* harmony import */ var _listItems_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listItems.js */ \"./js/listItems.js\");\n\r\n\r\n\r\n\r\nconst galBox = document.querySelector('.gallaryBox');\r\n\r\n_listItems_js__WEBPACK_IMPORTED_MODULE_2__.ListItem.forEach(element => {\r\n    galBox.insertAdjacentHTML('beforeend', (0,_displayItems_js__WEBPACK_IMPORTED_MODULE_1__.itemDisplay)(element));\r\n});  \r\n\r\n\n\n//# sourceURL=webpack://lesson3/./js/index.js?");

/***/ }),

/***/ "./js/listItems.js":
/*!*************************!*\
  !*** ./js/listItems.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListItem\": () => (/* binding */ ListItem)\n/* harmony export */ });\n/* harmony import */ var _media_images_1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../media/images/1.jpg */ \"./media/images/1.jpg\");\n/* harmony import */ var _media_images_1_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_media_images_1_jpg__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _media_images_2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../media/images/2.jpg */ \"./media/images/2.jpg\");\n/* harmony import */ var _media_images_2_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_media_images_2_jpg__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _media_images_3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../media/images/3.jpg */ \"./media/images/3.jpg\");\n/* harmony import */ var _media_images_3_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_media_images_3_jpg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _media_images_4_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../media/images/4.gif */ \"./media/images/4.gif\");\n/* harmony import */ var _media_images_4_gif__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_media_images_4_gif__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _media_audio_1_mp3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../media/audio/1.mp3 */ \"./media/audio/1.mp3\");\n/* harmony import */ var _media_audio_2_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../media/audio/2.mp3 */ \"./media/audio/2.mp3\");\n/* harmony import */ var _media_audio_3_mp3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../media/audio/3.mp3 */ \"./media/audio/3.mp3\");\n/* harmony import */ var _media_video_1_mp4__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../media/video/1.mp4 */ \"./media/video/1.mp4\");\n/* harmony import */ var _media_video_2_mp4__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../media/video/2.mp4 */ \"./media/video/2.mp4\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst ListItem = [\r\n    {\r\n        type: \"img\",\r\n        url: (_media_images_1_jpg__WEBPACK_IMPORTED_MODULE_0___default()),\r\n        resName: \"Дом на реке\"\r\n    },\r\n    {\r\n        type: \"img\",\r\n        url: (_media_images_2_jpg__WEBPACK_IMPORTED_MODULE_1___default()),\r\n        resName: \"Озеро в горах\"\r\n    },\r\n    {\r\n        type: \"img\",\r\n        url: (_media_images_3_jpg__WEBPACK_IMPORTED_MODULE_2___default()),\r\n        resName: \"Пруд\"\r\n    },\r\n    {\r\n        type: \"img\",\r\n        url: (_media_images_4_gif__WEBPACK_IMPORTED_MODULE_3___default()),\r\n        resName: \"Белый кот\"\r\n    },\r\n    {\r\n        type: \"audio\",\r\n        url: _media_audio_1_mp3__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\r\n        resName: \"Птицы\"\r\n    },\r\n    {\r\n        type: \"audio\",\r\n        url: _media_audio_2_mp3__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\r\n        resName: \"Вода\"\r\n    },\r\n    {\r\n        type: \"audio\",\r\n        url: _media_audio_3_mp3__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\r\n        resName: \"Сверчки\"\r\n    },\r\n    {\r\n        type: \"video\",\r\n        url: _media_video_1_mp4__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\r\n        resName: \"Фейерверк\"\r\n    },\r\n    {\r\n        type: \"video\",\r\n        url: _media_video_2_mp4__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\r\n        resName: \"Горы\"\r\n    }\r\n]\n\n//# sourceURL=webpack://lesson3/./js/listItems.js?");

/***/ }),

/***/ "./media/audio/1.mp3":
/*!***************************!*\
  !*** ./media/audio/1.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/audio/1.mp3\");\n\n//# sourceURL=webpack://lesson3/./media/audio/1.mp3?");

/***/ }),

/***/ "./media/audio/2.mp3":
/*!***************************!*\
  !*** ./media/audio/2.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/audio/2.mp3\");\n\n//# sourceURL=webpack://lesson3/./media/audio/2.mp3?");

/***/ }),

/***/ "./media/audio/3.mp3":
/*!***************************!*\
  !*** ./media/audio/3.mp3 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/audio/3.mp3\");\n\n//# sourceURL=webpack://lesson3/./media/audio/3.mp3?");

/***/ }),

/***/ "./media/video/1.mp4":
/*!***************************!*\
  !*** ./media/video/1.mp4 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/video/1.mp4\");\n\n//# sourceURL=webpack://lesson3/./media/video/1.mp4?");

/***/ }),

/***/ "./media/video/2.mp4":
/*!***************************!*\
  !*** ./media/video/2.mp4 ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"media/video/2.mp4\");\n\n//# sourceURL=webpack://lesson3/./media/video/2.mp4?");

/***/ }),

/***/ "./media/images/1.jpg":
/*!****************************!*\
  !*** ./media/images/1.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"media/images/1.webp\";\n\n//# sourceURL=webpack://lesson3/./media/images/1.jpg?");

/***/ }),

/***/ "./media/images/2.jpg":
/*!****************************!*\
  !*** ./media/images/2.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"media/images/2.webp\";\n\n//# sourceURL=webpack://lesson3/./media/images/2.jpg?");

/***/ }),

/***/ "./media/images/3.jpg":
/*!****************************!*\
  !*** ./media/images/3.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"media/images/3.webp\";\n\n//# sourceURL=webpack://lesson3/./media/images/3.jpg?");

/***/ }),

/***/ "./media/images/4.gif":
/*!****************************!*\
  !*** ./media/images/4.gif ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"media/images/4.gif\";\n\n//# sourceURL=webpack://lesson3/./media/images/4.gif?");

/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lesson3/./css/style.scss?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;