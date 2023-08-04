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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --main-font-family: 'Inter', sans-serif;\r\n  --outer-left-right-padding: 40px;\r\n  --flex-gap: 20px;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  width: 100%;\r\n  height: 100%;\r\n  font-family: var(--main-font-family);\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: var(--flex-gap);\r\n  justify-content: space-between;\r\n}\r\n\r\nnav,\r\nheader {\r\n  padding: 0 var(--outer-left-right-padding);\r\n}\r\n\r\nnav {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  border-bottom: 1px solid #000;\r\n}\r\n\r\n.logo {\r\n  width: 100px;\r\n  height: auto;\r\n}\r\n\r\n.logo-img {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.nav-link a {\r\n  text-decoration: none;\r\n  color: #000;\r\n  font-size: 18px;\r\n}\r\n\r\nheader {\r\n  display: flex;\r\n  flex-direction: column;\r\n  text-align: center;\r\n  gap: var(--flex-gap);\r\n  background: linear-gradient(90deg, rgba(168, 184, 76, 0.608), rgba(78, 164, 145, 0.542));\r\n  min-height: 300px;\r\n  justify-content: center;\r\n}\r\n\r\nheader p span {\r\n  color: rgb(104, 37, 191);\r\n}\r\n\r\nmain {\r\n  max-width: 100%;\r\n  margin: 5px auto;\r\n  background-color: rgb(127, 255, 212);\r\n}\r\n\r\n.close-div {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  padding: 20px;\r\n}\r\n\r\nbutton.close-popup {\r\n  background: none;\r\n  outline: none;\r\n  border: none;\r\n  font-size: 20px;\r\n}\r\n\r\n.popups {\r\n  display: none;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 99;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  -webkit-backdrop-filter: blur(10px);\r\n  backdrop-filter: blur(10px);\r\n}\r\n\r\n.inner-popups {\r\n  width: 86vw;\r\n  height: 86vh;\r\n  background-color: rgb(224, 240, 235);\r\n  overflow-y: auto;\r\n  border-radius: 7px;\r\n}\r\n\r\n.no {\r\n  display: flex;\r\n}\r\n\r\n.popup-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  align-items: center;\r\n  margin: 0 auto;\r\n}\r\n\r\n.popup-img {\r\n  width: 96%;\r\n  height: auto;\r\n}\r\n\r\nli.recipe-tags,\r\nli.recipe-area,\r\nli.recipe-catogery {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 20px;\r\n  line-height: 1.6em;\r\n}\r\n\r\nli.recipe-ingredients,\r\nli.recipe-instructions {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  line-height: 1.6em;\r\n}\r\n\r\ntr.table-row {\r\n  display: flex;\r\n  width: 40%;\r\n  justify-content: space-between;\r\n  border: 1px solid black;\r\n  padding: 10px;\r\n}\r\n\r\nul.recipe-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n  list-style: none;\r\n  padding: 4%;\r\n}\r\n\r\n.comments-section {\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 48% 48%;\r\n  gap: 4%;\r\n  padding: 4%;\r\n  background: #d3d3d3;\r\n}\r\n\r\n.head-comments,\r\nform.add-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\nform.add-comment {\r\n  align-items: center;\r\n}\r\n\r\n.comment-display,\r\nli.each-comment {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n}\r\n\r\n.comment-display {\r\n  height: 200px;\r\n  overflow-y: auto;\r\n}\r\n\r\nli.each-comment {\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.user-name {\r\n  display: flex;\r\n  gap: 20px;\r\n  align-items: center;\r\n}\r\n\r\n.person {\r\n  font-size: 22px;\r\n  color: rgb(60, 63, 64);\r\n}\r\n\r\n.creation-date {\r\n  color: rgba(105, 99, 99, 0.5);\r\n}\r\n\r\n.input {\r\n  width: 60%;\r\n  padding: 12px;\r\n  border: none;\r\n  border-bottom: 1px solid black;\r\n  border-radius: 4px;\r\n}\r\n\r\n.comment-date {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  background: rgb(242, 242, 233);\r\n  border-radius: 4px;\r\n  padding: 12px;\r\n}\r\n\r\n.recipe-popup {\r\n  padding: 12px;\r\n  background-color: aquamarine;\r\n  outline: none;\r\n  border: 1px solid black;\r\n  border-radius: 4px;\r\n}\r\n\r\n#content {\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 20px;\r\n  max-width: 100%;\r\n  margin: 5px auto;\r\n  padding: var(--outer-left-right-padding);\r\n}\r\n\r\n.container {\r\n  background-color: rgb(209, 209, 209);\r\n  transition: all ease 0.95s;\r\n}\r\n\r\n.container:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\n.container img {\r\n  width: 100%;\r\n}\r\n\r\n.mealInfo {\r\n  text-align: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  justify-content: center;\r\n}\r\n\r\n.mealInfo button {\r\n  padding: 10px 26px;\r\n  background-color: rgb(121, 193, 121);\r\n  border: none;\r\n  border-radius: 5px;\r\n  margin: 5px;\r\n}\r\n\r\n.newdiv {\r\n  padding: 5px;\r\n  display: flex;\r\n  justify-content: center;\r\n  gap: 10px;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\nfooter {\r\n  padding: 10px var(--outer-left-right-padding);\r\n  border-top: 1px solid #000;\r\n  background: linear-gradient(90deg, rgba(67, 67, 238, 0.608), rgba(228, 75, 75, 0.542), rgb(117, 8, 249));\r\n}\r\n\r\n.copyright p {\r\n  text-align: center;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://group-capstone-javascript/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://group-capstone-javascript/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://group-capstone-javascript/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://group-capstone-javascript/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://group-capstone-javascript/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://group-capstone-javascript/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://group-capstone-javascript/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://group-capstone-javascript/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://group-capstone-javascript/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://group-capstone-javascript/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_getDishes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/getDishes.js */ \"./src/modules/getDishes.js\");\n/* harmony import */ var _media_FoodHoodieslogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./media/FoodHoodieslogo.png */ \"./src/media/FoodHoodieslogo.png\");\n\n\n\n\nconst LOGO = document.querySelector('.logo');\nconst limg = new Image();\nlimg.src = _media_FoodHoodieslogo_png__WEBPACK_IMPORTED_MODULE_2__;\nlimg.className = 'logo-img';\nlimg.setAttribute('alt', 'FOOD-HOODIES logo');\nLOGO.appendChild(limg);\n(0,_modules_getDishes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst pops = document.querySelector('.popups');\nconst clo = document.querySelector('.close-popup');\nclo.addEventListener('click', () => {\n  pops.classList.toggle('no');\n});\n\n//# sourceURL=webpack://group-capstone-javascript/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments-counter.js":
/*!*****************************************!*\
  !*** ./src/modules/comments-counter.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countComments = () => {\n  const comments = document.querySelectorAll('.each-comment');\n  return comments.length;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countComments);\n\n//# sourceURL=webpack://group-capstone-javascript/./src/modules/comments-counter.js?");

/***/ }),

/***/ "./src/modules/comments-interaction.js":
/*!*********************************************!*\
  !*** ./src/modules/comments-interaction.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addComment: () => (/* binding */ addComment),\n/* harmony export */   getComments: () => (/* binding */ getComments)\n/* harmony export */ });\nconst appId = 'yVAEqw33gzsdx8sGwaR1';\nconst addComment = async (id, user, comment) => {\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`, {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json; charset=UTF-8' },\n    body: JSON.stringify({\n      item_id: id,\n      username: user,\n      comment,\n    }),\n  });\n  const data = await response.text();\n  return data.result;\n};\n\nconst getComments = async (id) => {\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${id}`);\n  const data = await response.json();\n  return data;\n};\n\n\n\n//# sourceURL=webpack://group-capstone-javascript/./src/modules/comments-interaction.js?");

/***/ }),

/***/ "./src/modules/display-popup.js":
/*!**************************************!*\
  !*** ./src/modules/display-popup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comments_interaction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments-interaction.js */ \"./src/modules/comments-interaction.js\");\n/* harmony import */ var _update_comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-comments.js */ \"./src/modules/update-comments.js\");\n/* harmony import */ var _comments_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments-counter.js */ \"./src/modules/comments-counter.js\");\n\n\n\n\nconst displayPopup = async (id) => {\n  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);\n  const data = await response.json();\n  const content = data.meals[0];\n  const popupcontainer = document.querySelector('.popup-container');\n  const pops = document.querySelector('.popups');\n  pops.classList.toggle('no');\n  const ingredientsArray = [];\n  const measuresArray = [];\n  for (let i = 1; i <= 20; i += 1) {\n    const ingredient = content[`strIngredient${i}`];\n    const measure = content[`strMeasure${i}`];\n    if (ingredient && measure) {\n      ingredientsArray.push(ingredient);\n      measuresArray.push(measure);\n    } else {\n      break;\n    }\n  }\n  let tableHTML = '<table>';\n  for (let i = 0; i < ingredientsArray.length; i += 1) {\n    tableHTML += `\n          <tr class='table-row'>\n            <td class='table-col'>${ingredientsArray[i]}</td>\n            <td class='table-col'>${measuresArray[i]}</td>\n          </tr>\n        `;\n  }\n  tableHTML += '</table>';\n  popupcontainer.innerHTML = `\n      <h2 class='popup-title'>${content.strMeal}</h2>\n      <img class='popup-img' src='${content.strMealThumb}'>\n        <ul class='recipe-info'>\n            <li class='recipe-area'><h3>Area: </h3><span>${content.strArea}</span></li>\n            <li class='recipe-catogery'><h3>Category: </h3><span>${content.strCategory}</span></li>\n            <li class='recipe-tags'><h3>Tags: </h3><span>${content.strTags}</span></li>\n            <li class='recipe-ingredients'>\n                <h3>Ingredients:</h3>\n                ${tableHTML}\n            </li>\n            <li class='recipe-instructions'><h3>Recipe to make</h3>${content.strInstructions}</li>\n        </ul>\n        <div class='comments-section'>\n            <div class='head-comments'>\n                <h3>Comments (<span class='comments-count'></span>)</h3>\n                <hr class='comment-head-hr'>\n                <div class='comment-display'></div>\n            </div>\n            <div class='comments-form'>\n                <form class='add-comment'>\n                    <label for='user'></label>\n                    <input class='input' type='text' id='user' placeholder='Your Name' required>\n                    <label for='commen'></label>\n                    <input class='input' type='text' id='commen' placeholder='Comment' required>\n                    <button class='recipe-popup' id='${id}' type='button'>Comment</button>\n                </form>\n            </div>\n        </div>\n    `;\n\n  const btns = document.querySelectorAll('.recipe-popup');\n  const username = document.getElementById('user');\n  const usercomment = document.getElementById('commen');\n  const commentsdisplay = document.querySelector('.comment-display');\n  const cc = document.querySelector('.comments-count');\n  btns.forEach((btn) => {\n    btn.addEventListener('click', async (e) => {\n      if (username.value !== '' && usercomment.value !== '') {\n        await (0,_comments_interaction_js__WEBPACK_IMPORTED_MODULE_0__.addComment)(e.target.id, username.value, usercomment.value);\n        (0,_update_comments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(e.target.id, commentsdisplay);\n        username.value = '';\n        usercomment.value = '';\n      }\n    });\n  });\n\n  // Update comments display for the initial popup\n  await (0,_update_comments_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(id, commentsdisplay);\n  const initialCount = (0,_comments_counter_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  cc.textContent = initialCount;\n  return content;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayPopup);\n\n//# sourceURL=webpack://group-capstone-javascript/./src/modules/display-popup.js?");

/***/ }),

/***/ "./src/modules/getDishes.js":
/*!**********************************!*\
  !*** ./src/modules/getDishes.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _display_popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display-popup.js */ \"./src/modules/display-popup.js\");\n\n\nconst getDish = async () => {\n  const dishCounts = document.getElementById('mealCounts');\n  const dishSection = document.getElementById('content');\n  const feedback = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=British');\n  const display = await feedback.json();\n  dishCounts.innerHTML += ` (${display.meals.length})`;\n  const appId = 'yVAEqw33gzsdx8sGwaR1';\n  let likeData;\n\n  const getLikes = async () => {\n    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`)\n      .then((res) => res.json())\n      .then((data) => {\n        likeData = data;\n      })\n      .catch((err) => console.log(err));\n  };\n  getLikes();\n\n  const like = async (id, p) => {\n    await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`, {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json',\n      },\n      body: JSON.stringify({ item_id: id }),\n    }).then((res) => res.json())\n      .then((data) => console.log({ 'data is ': data }))\n      .catch((err) => console.log(err));\n\n    p.innerHTML = Number(p.innerHTML) + 1;\n\n    getLikes();\n  };\n\n  const displayData = () => {\n    display.meals.forEach((element) => {\n      const data = document.createElement('div');\n      data.className = 'container';\n\n      const img = document.createElement('img');\n      img.src = element.strMealThumb;\n      data.appendChild(img);\n\n      const datainfo = document.createElement('div');\n      datainfo.className = 'mealInfo';\n      data.appendChild(datainfo);\n\n      const h3 = document.createElement('h3');\n      h3.textContent = element.strMeal;\n      datainfo.appendChild(h3);\n\n      const div = document.createElement('div');\n      datainfo.appendChild(div);\n      div.className = 'newdiv';\n\n      const p1 = document.createElement('p');\n      p1.innerHTML = '❤';\n      div.appendChild(p1);\n\n      const p = document.createElement('p');\n      likeData.forEach((it) => {\n        if (element.idMeal === it.item_id) {\n          p.innerHTML = it.likes;\n        }\n        div.appendChild(p);\n      });\n\n      const p2 = document.createElement('p');\n      p2.innerHTML = 'Likes';\n      div.appendChild(p2);\n\n      const button = document.createElement('button');\n      button.className = 'recipe-popup';\n      button.setAttribute('type', 'button');\n      button.setAttribute('id', element.idMeal);\n      button.textContent = 'comment';\n      datainfo.appendChild(button);\n\n      p1.addEventListener('click', () => {\n        like(element.idMeal, p);\n      });\n\n      dishSection.appendChild(data);\n    });\n\n    // click event listener for comment popup\n    const btns = document.querySelectorAll('.recipe-popup');\n    btns.forEach((btn) => {\n      btn.addEventListener('click', (e) => {\n        (0,_display_popup_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(e.target.id);\n      });\n    });\n  };\n\n  getLikes().then(() => {\n    displayData();\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDish);\n\n//# sourceURL=webpack://group-capstone-javascript/./src/modules/getDishes.js?");

/***/ }),

/***/ "./src/modules/update-comments.js":
/*!****************************************!*\
  !*** ./src/modules/update-comments.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _comments_interaction_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments-interaction.js */ \"./src/modules/comments-interaction.js\");\n/* harmony import */ var _comments_counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments-counter.js */ \"./src/modules/comments-counter.js\");\n\n\n\nconst updateComments = async (id, commentsdisplay) => {\n  const comments = await (0,_comments_interaction_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\n  if (comments.length > 0) {\n    commentsdisplay.innerHTML = '';\n    comments.forEach((c) => {\n      commentsdisplay.innerHTML += `\n                <li class='each-comment'>\n                    <p class='user-name'><ion-icon class='person' name=\"person-circle-outline\"></ion-icon>${c.username}</p>\n                    <div class = 'comment-date'>\n                      <p class='user-comment'>${c.comment}</p>\n                      <p class='creation-date'>${c.creation_date}</p>\n                    </div>\n                </li>\n            `;\n    });\n  } else {\n    commentsdisplay.innerHTML = 'No comments yet!';\n  }\n  const cc = document.querySelector('.comments-count');\n  const updatedCommentCount = (0,_comments_counter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  cc.textContent = updatedCommentCount;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateComments);\n\n//# sourceURL=webpack://group-capstone-javascript/./src/modules/update-comments.js?");

/***/ }),

/***/ "./src/media/FoodHoodieslogo.png":
/*!***************************************!*\
  !*** ./src/media/FoodHoodieslogo.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e60e95c78f769faabaea.png\";\n\n//# sourceURL=webpack://group-capstone-javascript/./src/media/FoodHoodieslogo.png?");

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
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
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