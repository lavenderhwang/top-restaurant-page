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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./assets/cheese.png":
/*!***************************!*\
  !*** ./assets/cheese.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/cheese.1d8fd7b305e0949f3f6d78c178683741.png\");\n\n//# sourceURL=webpack://restaurant-page/./assets/cheese.png?");

/***/ }),

/***/ "./assets/combo.png":
/*!**************************!*\
  !*** ./assets/combo.png ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/combo.313398a49380dad50e77835c17e2f3ef.png\");\n\n//# sourceURL=webpack://restaurant-page/./assets/combo.png?");

/***/ }),

/***/ "./assets/combo2.png":
/*!***************************!*\
  !*** ./assets/combo2.png ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/combo2.798f4416a67d3f328cae4815d41cb741.png\");\n\n//# sourceURL=webpack://restaurant-page/./assets/combo2.png?");

/***/ }),

/***/ "./assets/facebook.png":
/*!*****************************!*\
  !*** ./assets/facebook.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/facebook.19d62257314c39310b709b535bf6e576.png\");\n\n//# sourceURL=webpack://restaurant-page/./assets/facebook.png?");

/***/ }),

/***/ "./assets/hawaiian.png":
/*!*****************************!*\
  !*** ./assets/hawaiian.png ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/hawaiian.e213714a8848553acf1ba6155c8da49a.png\");\n\n//# sourceURL=webpack://restaurant-page/./assets/hawaiian.png?");

/***/ }),

/***/ "./assets/hero.png":
/*!*************************!*\
  !*** ./assets/hero.png ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/hero.106c99b10b2820ebe04c9bf7c07093ff.png\");\n\n//# sourceURL=webpack://restaurant-page/./assets/hero.png?");

/***/ }),

/***/ "./assets/instagram.png":
/*!******************************!*\
  !*** ./assets/instagram.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/instagram.56d3c2ef9b43e98875c0cef61e66f65e.png\");\n\n//# sourceURL=webpack://restaurant-page/./assets/instagram.png?");

/***/ }),

/***/ "./assets/margherita.png":
/*!*******************************!*\
  !*** ./assets/margherita.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/margherita.21855f8a04f3963ef02521aeac83d904.png\");\n\n//# sourceURL=webpack://restaurant-page/./assets/margherita.png?");

/***/ }),

/***/ "./assets/pepperoni.png":
/*!******************************!*\
  !*** ./assets/pepperoni.png ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/pepperoni.6c4bacff162bc6f27f9260d814837f6c.png\");\n\n//# sourceURL=webpack://restaurant-page/./assets/pepperoni.png?");

/***/ }),

/***/ "./assets/twitter.png":
/*!****************************!*\
  !*** ./assets/twitter.png ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/twitter.e4f83bef4191a65e9c7d85950765db5e.png\");\n\n//# sourceURL=webpack://restaurant-page/./assets/twitter.png?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadInitialPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadInitialPage */ \"./src/loadInitialPage.js\");\n/* harmony import */ var _tabs_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/menu */ \"./src/tabs/menu.js\");\n/* harmony import */ var _tabs_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/contact */ \"./src/tabs/contact.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n\tconst homeBtn = document.getElementById('home-btn');\n\tconst menuBtn = document.getElementById('menu-btn');\n\tconst contactBtn = document.getElementById('contact-btn');\n\n\tconst clearPage = () => {\n\t\tdocument.getElementById('content').innerHTML = '';\n\t};\n\n\thomeBtn.addEventListener('click', () => {\n\t\tclearPage();\n\t\t(0,_loadInitialPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\t});\n\n\tmenuBtn.addEventListener('click', () => {\n\t\tclearPage();\n\t\t(0,_tabs_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\t});\n\n\tcontactBtn.addEventListener('click', () => {\n\t\tclearPage();\n\t\t(0,_tabs_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\t});\n\n\t(0,_loadInitialPage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n});\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/loadInitialPage.js":
/*!********************************!*\
  !*** ./src/loadInitialPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_hero_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/hero.png */ \"./assets/hero.png\");\n\n\nfunction loadInitialPage() {\n\tconst content = document.getElementById('content');\n\n\t// Create and append main section\n\tconst main = document.createElement('main');\n\n\tconst heroHeader = document.createElement('h1');\n\theroHeader.textContent = \"Welcome to Papa's Pizzera!\";\n\tmain.appendChild(heroHeader);\n\n\tconst heroTagline = document.createElement('h3');\n\theroTagline.textContent = 'A Family Tradition of Pizza Perfection';\n\tmain.appendChild(heroTagline);\n\n\tconst heroImage = document.createElement('img');\n\theroImage.src = _assets_hero_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\theroImage.alt = 'man holding pizza';\n\tmain.appendChild(heroImage);\n\n\tconst heroDescription = document.createElement('p');\n\theroDescription.textContent =\n\t\t\"At Papa's Pizzeria, we craft every pizza with the same love and care that's been passed down through generations. From our hand-tossed dough to our farm-fresh toppings, each bite is a taste of tradition. Whether you're craving a classic Margherita or our signature Quattro Stragioni, we've got you covered.\";\n\tmain.appendChild(heroDescription);\n\n\tcontent.appendChild(main);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadInitialPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadInitialPage.js?");

/***/ }),

/***/ "./src/tabs/contact.js":
/*!*****************************!*\
  !*** ./src/tabs/contact.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_facebook_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/facebook.png */ \"./assets/facebook.png\");\n/* harmony import */ var _assets_twitter_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/twitter.png */ \"./assets/twitter.png\");\n/* harmony import */ var _assets_instagram_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/instagram.png */ \"./assets/instagram.png\");\n\n\n\n\nfunction renderContactPage() {\n\tconst content = document.getElementById('content');\n\n\t// Create and append main section\n\tconst main = document.createElement('main');\n\n\tconst header = document.createElement('h1');\n\theader.textContent = 'Get in Touch';\n\tmain.append(header);\n\n\tconst telephone = document.createElement('p');\n\ttelephone.textContent = '123-456-789';\n\tmain.append(telephone);\n\n\tconst website = document.createElement('p');\n\twebsite.textContent = 'papaspizzeria.com';\n\tmain.append(website);\n\n\tconst address = document.createElement('address');\n\tconst br = document.createElement('br');\n\taddress.innerHTML =\n\t\t\"Papa's Pizzeria <br> 1234 Dough Street <br> Pizzaville, CA 90210\";\n\tmain.appendChild(address);\n\n\tconst iconContainer = document.createElement('div');\n\tconst facebookIcon = document.createElement('img');\n\tfacebookIcon.src = _assets_facebook_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\tconst instagramIcon = document.createElement('img');\n\tinstagramIcon.src = _assets_instagram_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\tconst twitterIcon = document.createElement('img');\n\ttwitterIcon.src = _assets_twitter_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\ticonContainer.appendChild(facebookIcon);\n\ticonContainer.appendChild(instagramIcon);\n\ticonContainer.appendChild(twitterIcon);\n\tmain.appendChild(iconContainer);\n\n\tconst form = document.createElement('form');\n\tconst formName = document.createElement('input');\n\tformName.type = 'text';\n\tformName.placeholder = 'Name';\n\tformName.name = 'name';\n\tconst formEmail = document.createElement('input');\n\tformEmail.type = 'email';\n\tformEmail.placeholder = 'Email';\n\tformEmail.name = 'email';\n\tconst formMessage = document.createElement('input');\n\tformMessage.type = 'text';\n\tformMessage.placeholder = 'Type your message here...';\n\tformMessage.name = 'message';\n\tconst formSubmit = document.createElement('input');\n\tformSubmit.type = 'submit';\n\tformSubmit.value = 'Submit';\n\n\tform.appendChild(formName);\n\tform.appendChild(formEmail);\n\tform.appendChild(formMessage);\n\tform.appendChild(formSubmit);\n\tmain.appendChild(form);\n\n\tcontent.appendChild(main);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContactPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/tabs/contact.js?");

/***/ }),

/***/ "./src/tabs/menu.js":
/*!**************************!*\
  !*** ./src/tabs/menu.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_pepperoni_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/pepperoni.png */ \"./assets/pepperoni.png\");\n/* harmony import */ var _assets_cheese_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/cheese.png */ \"./assets/cheese.png\");\n/* harmony import */ var _assets_combo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/combo.png */ \"./assets/combo.png\");\n/* harmony import */ var _assets_combo2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/combo2.png */ \"./assets/combo2.png\");\n/* harmony import */ var _assets_margherita_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/margherita.png */ \"./assets/margherita.png\");\n/* harmony import */ var _assets_hawaiian_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/hawaiian.png */ \"./assets/hawaiian.png\");\n\n\n\n\n\n\n\nfunction renderMenuPage() {\n\tconst content = document.getElementById('content');\n\n\t// Create and append main section\n\tconst main = document.createElement('main');\n\n\tconst heroHeader = document.createElement('h1');\n\theroHeader.textContent = 'Menu';\n\tmain.appendChild(heroHeader);\n\n\t// Pepperoni Pizza\n\tconst pepperoniLabel = document.createElement('h3');\n\tpepperoniLabel.textContent = 'Pepperoni';\n\tmain.appendChild(pepperoniLabel);\n\n\tconst pepperoniImg = document.createElement('img');\n\tpepperoniImg.src = _assets_pepperoni_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\tpepperoniImg.alt = 'pepperoni pizza';\n\tmain.appendChild(pepperoniImg);\n\n\tconst pepperoniIngredients = document.createElement('p');\n\tpepperoniIngredients.textContent = 'Pepperoni';\n\tmain.appendChild(pepperoniIngredients);\n\n\t// Cheese Pizza\n\tconst cheeseLabel = document.createElement('h3');\n\tcheeseLabel.textContent = '3 Cheese';\n\tmain.appendChild(cheeseLabel);\n\n\tconst cheeseImg = document.createElement('img');\n\tcheeseImg.src = _assets_cheese_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\tcheeseImg.alt = 'cheese pizza';\n\tmain.appendChild(cheeseImg);\n\n\tconst cheeseIngredients = document.createElement('p');\n\tcheeseIngredients.textContent = 'Mozzarella, Parmesan, Gouda';\n\tmain.appendChild(cheeseIngredients);\n\n\t// Combo Pizza\n\tconst comboLabel = document.createElement('h3');\n\tcomboLabel.textContent = 'Combination';\n\tmain.appendChild(comboLabel);\n\n\tconst comboImg = document.createElement('img');\n\tcomboImg.src = _assets_combo_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n\tcomboImg.alt = 'combo pizza';\n\tmain.appendChild(comboImg);\n\n\tconst comboIngredients = document.createElement('p');\n\tcomboIngredients.textContent = 'Mushrooms, Bacon, Olives, Fresh Basil';\n\tmain.appendChild(comboIngredients);\n\n\t// Combo2 Pizza\n\tconst combo2Label = document.createElement('h3');\n\tcombo2Label.textContent = 'Combination 2';\n\tmain.appendChild(combo2Label);\n\n\tconst combo2Img = document.createElement('img');\n\tcombo2Img.src = _assets_combo2_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n\tcombo2Img.alt = 'combo 2 pizza';\n\tmain.appendChild(combo2Img);\n\n\tconst combo2Ingredients = document.createElement('p');\n\tcombo2Ingredients.textContent =\n\t\t'Bell Peppers, Mushrooms, Olives, Tomatoes, Oregano';\n\tmain.appendChild(combo2Ingredients);\n\n\t//Margherita Pizza\n\tconst margheritaLabel = document.createElement('h3');\n\tmargheritaLabel.textContent = 'Margherita';\n\tmain.appendChild(margheritaLabel);\n\n\tconst margheritaImg = document.createElement('img');\n\tmargheritaImg.src = _assets_margherita_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n\tmargheritaImg.alt = 'margheritapizza';\n\tmain.appendChild(margheritaImg);\n\n\tconst margheritaIngredients = document.createElement('p');\n\tmargheritaIngredients.textContent = 'Tomatoes, Mozzerella, Fresh Basil';\n\tmain.appendChild(margheritaIngredients);\n\n\t// Hawaiian Pizza\n\n\tconst hawaiianLabel = document.createElement('h3');\n\thawaiianLabel.textContent = 'Hawaiian';\n\tmain.appendChild(hawaiianLabel);\n\n\tconst hawaiianImg = document.createElement('img');\n\thawaiianImg.src = _assets_hawaiian_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"];\n\thawaiianImg.alt = 'hawaiian pizza';\n\tmain.appendChild(hawaiianImg);\n\n\tconst hawaiianIngredients = document.createElement('p');\n\thawaiianIngredients.textContent = 'Mozzerella, Ham, Pineapple';\n\tmain.appendChild(hawaiianIngredients);\n\n\tcontent.appendChild(main);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenuPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/tabs/menu.js?");

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
/******/ 			id: moduleId,
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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