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

/***/ "./src/client/App.js":
/*!***************************!*\
  !*** ./src/client/App.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Header = __webpack_require__(/*! ./components/Header */ \"./src/client/components/Header.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/client/actions/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// check which route has been pased into App\n// load that routes components under the header component\nvar App = function App(_ref) {\n\tvar route = _ref.route;\n\n\treturn _react2.default.createElement(\n\t\t'div',\n\t\tnull,\n\t\t_react2.default.createElement(_Header2.default, null),\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\t(0, _reactRouterConfig.renderRoutes)(route.routes)\n\t\t)\n\t);\n};\n// load current user from actions\nexports.default = {\n\tcomponent: App,\n\tloadData: function loadData(_ref2) {\n\t\tvar dispatch = _ref2.dispatch;\n\t\treturn dispatch((0, _actions.fetchCurrentUser)());\n\t}\n};\n\n//# sourceURL=webpack:///./src/client/App.js?");

/***/ }),

/***/ "./src/client/actions/index.js":
/*!*************************************!*\
  !*** ./src/client/actions/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\n// stored data of fetchUsers\nvar FETCH_USERS = exports.FETCH_USERS = 'fetch_users';\n// action creator\nvar fetchUsers = exports.fetchUsers = function fetchUsers() {\n\treturn function () {\n\t\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, api) {\n\t\t\tvar res;\n\t\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\t\twhile (1) {\n\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t_context.next = 2;\n\t\t\t\t\t\t\treturn api.get('/users');\n\n\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\tres = _context.sent;\n\n\n\t\t\t\t\t\t\t// dispatch action creator\n\t\t\t\t\t\t\tdispatch({\n\t\t\t\t\t\t\t\ttype: FETCH_USERS,\n\t\t\t\t\t\t\t\tpayload: res\n\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\tcase 4:\n\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, _callee, undefined);\n\t\t}));\n\n\t\treturn function (_x, _x2, _x3) {\n\t\t\treturn _ref.apply(this, arguments);\n\t\t};\n\t}();\n};\n// stored data of fetchUsers\nvar FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch_current_user';\n// action creator\nvar fetchCurrentUser = exports.fetchCurrentUser = function fetchCurrentUser() {\n\treturn function () {\n\t\tvar _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, getState, api) {\n\t\t\tvar res;\n\t\t\treturn regeneratorRuntime.wrap(function _callee2$(_context2) {\n\t\t\t\twhile (1) {\n\t\t\t\t\tswitch (_context2.prev = _context2.next) {\n\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t_context2.next = 2;\n\t\t\t\t\t\t\treturn api.get('/current_user');\n\n\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\t\tres = _context2.sent;\n\n\n\t\t\t\t\t\t\t// dispatch action creator\n\t\t\t\t\t\t\tdispatch({\n\t\t\t\t\t\t\t\ttype: FETCH_CURRENT_USER,\n\t\t\t\t\t\t\t\tpayload: res\n\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\tcase 4:\n\t\t\t\t\t\tcase 'end':\n\t\t\t\t\t\t\treturn _context2.stop();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, _callee2, undefined);\n\t\t}));\n\n\t\treturn function (_x4, _x5, _x6) {\n\t\t\treturn _ref2.apply(this, arguments);\n\t\t};\n\t}();\n};\n\n//# sourceURL=webpack:///./src/client/actions/index.js?");

/***/ }),

/***/ "./src/client/components/Header.js":
/*!*****************************************!*\
  !*** ./src/client/components/Header.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(_ref) {\n\tvar auth = _ref.auth;\n\n\t// if auth button = logged in then display log out\n\t// else allow log in\n\tvar authButton = auth ? _react2.default.createElement(\n\t\t'a',\n\t\t{ href: '/api/logout' },\n\t\t'Logout'\n\t) : _react2.default.createElement(\n\t\t'a',\n\t\t{ href: '/api/auth/google' },\n\t\t'Login'\n\t);\n\n\treturn _react2.default.createElement(\n\t\t'nav',\n\t\tnull,\n\t\t_react2.default.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\t_react2.default.createElement(\n\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t{ to: '/' },\n\t\t\t\t'React SSR'\n\t\t\t),\n\t\t\t_react2.default.createElement(\n\t\t\t\t'ul',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t\t\t{ to: '/users' },\n\t\t\t\t\t\t'Users'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t_reactRouterDom.Link,\n\t\t\t\t\t\t{ to: '/admins' },\n\t\t\t\t\t\t'Admins'\n\t\t\t\t\t)\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\tnull,\n\t\t\t\t\tauthButton\n\t\t\t\t)\n\t\t\t)\n\t\t)\n\t);\n};\n\nfunction mapStateToProps(_ref2) {\n\tvar auth = _ref2.auth;\n\n\treturn { auth: auth };\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);\n\n//# sourceURL=webpack:///./src/client/components/Header.js?");

/***/ }),

/***/ "./src/client/pages/HomePage.js":
/*!**************************************!*\
  !*** ./src/client/pages/HomePage.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'h3',\n          null,\n          ' Home page '\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          ' Built in ssr React and Redux '\n        )\n      );\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\n;\n\nexports.default = {\n  component: Home\n};\n\n//# sourceURL=webpack:///./src/client/pages/HomePage.js?");

/***/ }),

/***/ "./src/client/pages/UsersListPage.js":
/*!*******************************************!*\
  !*** ./src/client/pages/UsersListPage.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.loadData = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar UsersList = function (_Component) {\n\t_inherits(UsersList, _Component);\n\n\tfunction UsersList() {\n\t\t_classCallCheck(this, UsersList);\n\n\t\treturn _possibleConstructorReturn(this, (UsersList.__proto__ || Object.getPrototypeOf(UsersList)).apply(this, arguments));\n\t}\n\n\t_createClass(UsersList, [{\n\t\tkey: 'render',\n\n\t\t// return the following html\n\t\tvalue: function render() {\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'div',\n\t\t\t\t\tnull,\n\t\t\t\t\t' Here is a list of users: '\n\t\t\t\t),\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t'ul',\n\t\t\t\t\tnull,\n\t\t\t\t\tthis.renderUsers()\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}, {\n\t\tkey: 'componentDidMount',\n\t\tvalue: function componentDidMount() {\n\t\t\t// once component is rendered it will attempt to use the fetch users via the action creator\n\t\t\tthis.props.fetchUsers();\n\t\t}\n\t}, {\n\t\tkey: 'renderUsers',\n\t\tvalue: function renderUsers() {\n\t\t\treturn this.props.users.map(function (user) {\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t'li',\n\t\t\t\t\t{ key: user.id },\n\t\t\t\t\tuser.name\n\t\t\t\t);\n\t\t\t});\n\t\t}\n\t}]);\n\n\treturn UsersList;\n}(_react.Component);\n\n// map the state of data called from fetchUsers to users[state.users]\n\n\nfunction mapStateToProps(state) {\n\treturn { users: state.users };\n}\n\nfunction loadData(store) {\n\t// fetchUsers will return a promise representing the req\n\treturn store.dispatch((0, _actions.fetchUsers)());\n}\n\nexports.loadData = loadData;\n// Pass the state of fetchUsers into UsersList React Component\n\nexports.default = {\n\tloadData: loadData,\n\tcomponent: (0, _reactRedux.connect)(mapStateToProps, { fetchUsers: _actions.fetchUsers })(UsersList)\n};\n\n//# sourceURL=webpack:///./src/client/pages/UsersListPage.js?");

/***/ }),

/***/ "./src/client/reducers/authReducer.js":
/*!********************************************!*\
  !*** ./src/client/reducers/authReducer.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n// export a reducer with state with list of users and FETCH_USERS action \nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\tvar action = arguments[1];\n\n\t// if actions.type\n\tswitch (action.type) {\n\t\t//if actions.type is FETCH_USERS\n\t\tcase _actions.FETCH_CURRENT_USER:\n\t\t\t// if action has data attached to it, then store the data\n\t\t\treturn action.payload.data || false;\n\t\tdefault:\n\t\t\t// else return state\n\t\t\treturn state;\n\t}\n}; // import fetch users action\n\n//# sourceURL=webpack:///./src/client/reducers/authReducer.js?");

/***/ }),

/***/ "./src/client/reducers/index.js":
/*!**************************************!*\
  !*** ./src/client/reducers/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _usersReducer = __webpack_require__(/*! ./usersReducer */ \"./src/client/reducers/usersReducer.js\");\n\nvar _usersReducer2 = _interopRequireDefault(_usersReducer);\n\nvar _authReducer = __webpack_require__(/*! ./authReducer */ \"./src/client/reducers/authReducer.js\");\n\nvar _authReducer2 = _interopRequireDefault(_authReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// combine all existing reducers\n\n// import usersReducer\nexports.default = (0, _redux.combineReducers)({\n\tusers: _usersReducer2.default,\n\tauth: _authReducer2.default\n});\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?");

/***/ }),

/***/ "./src/client/reducers/usersReducer.js":
/*!*********************************************!*\
  !*** ./src/client/reducers/usersReducer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _actions = __webpack_require__(/*! ../actions */ \"./src/client/actions/index.js\");\n\n// export a reducer with state with list of users and FETCH_USERS action \nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\tvar action = arguments[1];\n\n\t// if actions.type\n\tswitch (action.type) {\n\t\t//if actions.type is FETCH_USERS\n\t\tcase _actions.FETCH_USERS:\n\t\t\t// if action has data attached to it, then store the data\n\t\t\treturn action.payload.data;\n\t\tdefault:\n\t\t\t// else return state\n\t\t\treturn state;\n\t}\n}; // import fetch users action\n\n//# sourceURL=webpack:///./src/client/reducers/usersReducer.js?");

/***/ }),

/***/ "./src/client/routes/Routes.js":
/*!*************************************!*\
  !*** ./src/client/routes/Routes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _App = __webpack_require__(/*! ./../App */ \"./src/client/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _HomePage = __webpack_require__(/*! ./../pages/HomePage */ \"./src/client/pages/HomePage.js\");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _UsersListPage = __webpack_require__(/*! ./../pages/UsersListPage */ \"./src/client/pages/UsersListPage.js\");\n\nvar _UsersListPage2 = _interopRequireDefault(_UsersListPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _App2.default, {\n\troutes: [_extends({}, _HomePage2.default, {\n\t\tpath: '/',\n\t\texact: true\n\t}), _extends({}, _UsersListPage2.default, {\n\t\tpath: '/users'\n\t})]\n})];\n\n//# sourceURL=webpack:///./src/client/routes/Routes.js?");

/***/ }),

/***/ "./src/server/helpers/createStore.js":
/*!*******************************************!*\
  !*** ./src/server/helpers/createStore.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reducers = __webpack_require__(/*! ../../client/reducers */ \"./src/client/reducers/index.js\");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n\tvar axiosInstance = _axios2.default.create({\n\t\tbaseURL: 'http://react-ssr-api.herokuapp.com',\n\t\theaders: { cookie: req.get('cookie') || '' }\n\t});\n\n\t// create store with imported data from reducers and an empty state\n\tvar store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(axiosInstance)));\n\treturn store;\n};\n// import reducers from client\n\n// handle asynchronous acion creators\n\n//# sourceURL=webpack:///./src/server/helpers/createStore.js?");

/***/ }),

/***/ "./src/server/helpers/renderer.js":
/*!****************************************!*\
  !*** ./src/server/helpers/renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _Routes = __webpack_require__(/*! ./../../client/routes/Routes */ \"./src/client/routes/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import ServerRouter from './../../client/components/root/ServerRouter';\nexports.default = function (req, store) {\n\t// load react components\n\tvar content = (0, _server.renderToString)(\n\t// connect the redux store to the react application\n\t// send the route req and redux store to the react router\n\t_react2.default.createElement(\n\t\t_reactRedux.Provider,\n\t\t{ store: store },\n\t\t_react2.default.createElement(\n\t\t\t_reactRouterDom.StaticRouter,\n\t\t\t{ location: req.path, context: {} },\n\t\t\t_react2.default.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\t(0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n\t\t\t)\n\t\t)\n\t));\n\t// load front end js\n\treturn '\\n\\t\\t<html>\\n\\t\\t\\t<head> </head>\\n\\t\\t\\t<body> \\n\\t\\t\\t\\t<div id =\"root\">' + content + '</div>\\n\\t\\t\\t\\t<script> \\n\\t\\t\\t\\t\\twindow.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '\\n\\t\\t\\t\\t</script>\\n\\t\\t\\t\\t<script src =\"bundle.js\"></script>\\n\\t\\t\\t</body>\\n\\t\\t</html>\\n\\t';\n};\n\n//# sourceURL=webpack:///./src/server/helpers/renderer.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! babel-polyfill */ \"babel-polyfill\");\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//** Declare express app **//\n//** NODEJS IMPORTS **//\nvar app = (0, _express2.default)();\n//** SET MIDDLEWARES **//\n__webpack_require__(/*! ./middlewares/apiProxy */ \"./src/server/middlewares/apiProxy.js\")(app);\n//** SET CLIENT ASSETS **//\napp.use(_express2.default.static('./build/client'));\n//** SET HOME ROUTE **//\n__webpack_require__(/*! ./routes/routes */ \"./src/server/routes/routes.js\")(app);\n//** Initialise express app on port 3000 **//\napp.listen(3000, function () {\n\tconsole.log('Listening on port 3000');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/middlewares/apiProxy.js":
/*!********************************************!*\
  !*** ./src/server/middlewares/apiProxy.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = function (app) {\n\t// redirect api requests to api server\n\tapp.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {\n\t\t// oauth demo options\n\t\tproxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n\t\t\topts.headers['x-forwarded-host'] = 'localhost:3000';\n\t\t\treturn opts;\n\t\t}\n\t}));\n};\n\n//# sourceURL=webpack:///./src/server/middlewares/apiProxy.js?");

/***/ }),

/***/ "./src/server/routes/routes.js":
/*!*************************************!*\
  !*** ./src/server/routes/routes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ./../../client/routes/Routes */ \"./src/client/routes/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _renderer = __webpack_require__(/*! ./../helpers/renderer */ \"./src/server/helpers/renderer.js\");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./../helpers/createStore */ \"./src/server/helpers/createStore.js\");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import routes\nmodule.exports = function (app) {\n\n\tapp.get('*', function (req, res) {\n\t\t// set up the redux store on the server side\n\t\tvar store = (0, _createStore2.default)(req);\n\t\t// check all react routes vs req path and return a list of components to be rendered\n\t\tvar promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n\t\t\tvar route = _ref.route;\n\n\t\t\t// if route.loadData exists then call loadData(), else do nothing\n\t\t\treturn route.loadData ? route.loadData(store) : null;\n\t\t});\n\t\t// once all our data requests have been completed\n\t\tPromise.all(promises).then(function () {\n\t\t\t// console.log(renderer(req, store));\n\t\t\t// send initialised store to the renderer\n\t\t\tres.send((0, _renderer2.default)(req, store));\n\t\t});\n\t});\n};\n\n//# sourceURL=webpack:///./src/server/routes/routes.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"babel-polyfill\");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

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

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

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

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });