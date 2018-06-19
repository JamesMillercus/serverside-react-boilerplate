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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./components/Home */ \"./src/client/components/Home.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function () {\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\tnull,\n\t\t_react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default })\n\t);\n};\n\n//# sourceURL=webpack:///./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.fetchUsers = exports.FETCH_USERS = undefined;\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n// stored data of fetchUsers\nvar FETCH_USERS = exports.FETCH_USERS = 'fetch_users';\n// action creator\nvar fetchUsers = exports.fetchUsers = function fetchUsers() {\n\treturn function () {\n\t\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {\n\t\t\tvar res;\n\t\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\t\twhile (1) {\n\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t_context.next = 2;\n\t\t\t\t\t\t\treturn _axios2.default.get('http://react-ssr-api.herokuapp.com/users');\n\n\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\tres = _context.sent;\n\n\t\t\t\t\t\t\t// dispatch action creator\n\t\t\t\t\t\t\tdispatch({\n\t\t\t\t\t\t\t\ttype: FETCH_USERS,\n\t\t\t\t\t\t\t\tpayload: res\n\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\tcase 4:\n\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, _callee, undefined);\n\t\t}));\n\n\t\treturn function (_x) {\n\t\t\treturn _ref.apply(this, arguments);\n\t\t};\n\t}();\n};\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/components/Home.js":
/*!***************************************!*\
  !*** ./src/client/components/Home.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Home = function Home() {\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\tnull,\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\t' I\\'m the best home component '\n\t\t),\n\t\t_react2.default.createElement(\n\t\t\t'button',\n\t\t\t{ onClick: function onClick() {\n\t\t\t\t\treturn console.log('Hi there!');\n\t\t\t\t} },\n\t\t\t'Press me!'\n\t\t)\n\t);\n};\n\nexports.default = Home;\n\n//# sourceURL=webpack:///./src/client/components/Home.js?");

/***/ }),

/***/ "./src/client/components/root/ServerRouter.js":
/*!****************************************************!*\
  !*** ./src/client/components/root/ServerRouter.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Routes = __webpack_require__(/*! ./../../Routes */ \"./src/client/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar ServerRouter = function ServerRouter(req, store) {\n\treturn (\n\t\t// load in the url from express req and an empty object into context\n\t\t_react2.default.createElement(\n\t\t\t_reactRouterDom.StaticRouter,\n\t\t\t{ location: req.path, context: {} },\n\t\t\t_react2.default.createElement(_Routes2.default, null)\n\t\t)\n\t);\n};\n\nexports.default = ServerRouter;\n\n//# sourceURL=webpack:///./src/client/components/root/ServerRouter.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _usersReducer = __webpack_require__(/*! ./usersReducer */ \"./src/client/reducers/usersReducer.js\");\n\nvar _usersReducer2 = _interopRequireDefault(_usersReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// combine all existing reducers\nexports.default = (0, _redux.combineReducers)({\n\tusers: _usersReducer2.default\n});\n// import usersReducer\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/usersReducer.js":
/*!*********************************************!*\
  !*** ./src/client/reducers/usersReducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n// export a reducer with state with list of users and FETCH_USERS action \nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\tvar action = arguments[1];\n\n\t// if actions.type\n\tswitch (action.type) {\n\t\t//if actions.type is FETCH_USERS\n\t\tcase _actions.FETCH_USERS:\n\t\t\t// give it data\n\t\t\treturn action.payload.data;\n\t\tdefault:\n\t\t\t// else return state\n\t\t\treturn state;\n\t}\n}; // import fetch users action\n\n//# sourceURL=webpack:///./src/client/reducers/usersReducer.js?");

/***/ }),

/***/ "./src/server/helpers/createStore.js":
/*!*******************************************!*\
  !*** ./src/server/helpers/createStore.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reducers = __webpack_require__(/*! ../../client/reducers */ \"./src/client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// handle asynchronous acion creators\nexports.default = function () {\n\tvar store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));\n\treturn store;\n};\n// import reducers from client\n\n//# sourceURL=webpack:///./src/server/helpers/createStore.js?");

/***/ }),

/***/ "./src/server/helpers/renderer.js":
/*!****************************************!*\
  !*** ./src/server/helpers/renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _ServerRouter = __webpack_require__(/*! ./../../client/components/root/ServerRouter */ \"./src/client/components/root/ServerRouter.js\");\n\nvar _ServerRouter2 = _interopRequireDefault(_ServerRouter);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store) {\n\t// load react components\n\tvar content = (0, _server.renderToString)(\n\t// connect the redux store to the react application\n\t// send the route req and redux store to the react router\n\t_react2.default.createElement(\n\t\t_reactRedux.Provider,\n\t\t{ store: store },\n\t\t_react2.default.createElement(_ServerRouter2.default, { req: req, store: store })\n\t));\n\t// load front end js\n\treturn '\\n\\t\\t<html>\\n\\t\\t\\t<head> </head>\\n\\t\\t\\t<body> \\n\\t\\t\\t\\t<div id =\"root\">' + content + '</div>\\n\\t\\t\\t\\t<script src =\"bundle.js\"></script>\\n\\t\\t\\t</body>\\n\\t\\t</html>\\n\\t';\n};\n\n//# sourceURL=webpack:///./src/server/helpers/renderer.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _renderer = __webpack_require__(/*! ./helpers/renderer */ \"./src/server/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./helpers/createStore */ \"./src/server/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static('./build/client'));\n\napp.get('*', function (req, res) {\n\t// set up the redux store on the server side\n\tvar store = (0, _createStore2.default)();\n\t// send initialised store to the renderer\n\tres.send((0, _renderer2.default)(req, store));\n});\n\napp.listen(3000, function () {\n\tconsole.log('Listening on port 3000');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });