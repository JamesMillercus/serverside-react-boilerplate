/*! For license information please see bundle.js.LICENSE */
!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="./src/server/index.js")}({"./src/client/actions/index.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }\n\n// stored data of fetchUsers\nvar FETCH_USER_AGENT = exports.FETCH_USER_AGENT = \'fetch_user_agent\';\n// action creator\nvar fetchUserAgent = exports.fetchUserAgent = function fetchUserAgent() {\n\treturn function () {\n\t\tvar _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, getState, userAgent) {\n\t\t\tvar res;\n\t\t\treturn regeneratorRuntime.wrap(function _callee$(_context) {\n\t\t\t\twhile (1) {\n\t\t\t\t\tswitch (_context.prev = _context.next) {\n\t\t\t\t\t\tcase 0:\n\t\t\t\t\t\t\t// once response is received from http req\n\t\t\t\t\t\t\tres = userAgent;\n\n\t\t\t\t\t\t\tdispatch({\n\t\t\t\t\t\t\t\ttype: FETCH_USER_AGENT,\n\t\t\t\t\t\t\t\tpayload: res\n\t\t\t\t\t\t\t});\n\n\t\t\t\t\t\tcase 2:\n\t\t\t\t\t\tcase \'end\':\n\t\t\t\t\t\t\treturn _context.stop();\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}, _callee, undefined);\n\t\t}));\n\n\t\treturn function (_x, _x2, _x3) {\n\t\t\treturn _ref.apply(this, arguments);\n\t\t};\n\t}();\n};\n\n//# sourceURL=webpack:///./src/client/actions/index.js?')},"./src/client/components/hocs/getBrowser.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ "react");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");\n\nvar _BadBrowserPage = __webpack_require__(/*! ./../../pages/bad-browser/BadBrowserPage */ "./src/client/pages/bad-browser/BadBrowserPage.js");\n\nvar _BadBrowserPage2 = _interopRequireDefault(_BadBrowserPage);\n\nvar _NotFoundPage = __webpack_require__(/*! ./../../pages/not-found/NotFoundPage */ "./src/client/pages/not-found/NotFoundPage.js");\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nvar _reactUseragent = __webpack_require__(/*! @quentin-sommer/react-useragent */ "@quentin-sommer/react-useragent");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nexports.default = function (ChildComponent) {\n\tvar GetBrowser = function (_Component) {\n\t\t_inherits(GetBrowser, _Component);\n\n\t\tfunction GetBrowser() {\n\t\t\t_classCallCheck(this, GetBrowser);\n\n\t\t\treturn _possibleConstructorReturn(this, (GetBrowser.__proto__ || Object.getPrototypeOf(GetBrowser)).apply(this, arguments));\n\t\t}\n\n\t\t_createClass(GetBrowser, [{\n\t\t\tkey: \'browserComponent\',\n\t\t\tvalue: function browserComponent() {\n\t\t\t\tvar _this2 = this;\n\n\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t_reactUseragent.UserAgent,\n\t\t\t\t\t{ returnfullParser: true },\n\t\t\t\t\tfunction (parser) {\n\t\t\t\t\t\treturn _react2.default.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t{ className: \'class\' },\n\t\t\t\t\t\t\t\' \',\n\t\t\t\t\t\t\t_this2.content(parser.getBrowser().name),\n\t\t\t\t\t\t\t\' \'\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t);\n\t\t\t}\n\t\t}, {\n\t\t\tkey: \'content\',\n\t\t\tvalue: function content(browserName) {\n\t\t\t\tswitch (this.allowedBrowser(browserName)) {\n\t\t\t\t\t// browser not authorised\n\t\t\t\t\tcase false:\n\t\t\t\t\t\treturn _react2.default.createElement(_BadBrowserPage2.default, null);\n\t\t\t\t\t// if is authorised, then load child component and load props from render page into child\n\t\t\t\t\tdefault:\n\t\t\t\t\t\treturn _react2.default.createElement(ChildComponent, this.props);\n\t\t\t\t}\n\t\t\t}\n\t\t}, {\n\t\t\tkey: \'allowedBrowser\',\n\t\t\tvalue: function allowedBrowser(browserName) {\n\t\t\t\tvar allowedBrowsers = ["Chrome", "Safari", "Firefox", "Edge", "Chromium"];\n\t\t\t\tfor (var x = 0; x < allowedBrowsers.length; x++) {\n\t\t\t\t\tif (browserName == allowedBrowsers[x]) return true;else if (browserName != allowedBrowsers[x] && x == allowedBrowsers.length - 1) return false;\n\t\t\t\t}\n\t\t\t}\n\t\t}, {\n\t\t\tkey: \'render\',\n\t\t\tvalue: function render() {\n\t\t\t\treturn this.browserComponent();\n\t\t\t}\n\t\t}]);\n\n\t\treturn GetBrowser;\n\t}(_react.Component);\n\n\treturn GetBrowser;\n};\n\n//# sourceURL=webpack:///./src/client/components/hocs/getBrowser.js?')},"./src/client/containers/App.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ "react");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");\n\nvar _reactUseragent = __webpack_require__(/*! @quentin-sommer/react-useragent */ "@quentin-sommer/react-useragent");\n\nvar _actions = __webpack_require__(/*! ./../actions */ "./src/client/actions/index.js");\n\n__webpack_require__(/*! ./App.scss */ "./src/client/containers/App.scss");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar App = function (_Component) {\n\t_inherits(App, _Component);\n\n\tfunction App() {\n\t\t_classCallCheck(this, App);\n\n\t\treturn _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));\n\t}\n\n\t_createClass(App, [{\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar route = this.props.route;\n\t\t\tvar userAgent = this.props.userAgent;\n\n\t\t\treturn _react2.default.createElement(\n\t\t\t\t_reactUseragent.UserAgentProvider,\n\t\t\t\t{ ua: userAgent },\n\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\'div\',\n\t\t\t\t\tnull,\n\t\t\t\t\t_react2.default.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\t(0, _reactRouterConfig.renderRoutes)(route.routes)\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t);\n\t\t}\n\t}, {\n\t\tkey: \'componentDidMount\',\n\t\tvalue: function componentDidMount() {\n\t\t\t// once component loads, call the fetchUserAgent action creator\n\t\t\tthis.props.fetchUserAgent();\n\t\t}\n\t}]);\n\n\treturn App;\n}(_react.Component);\n\n// map the data from the state of fetchUserAgent, to a prop called userAgent \n\n\nfunction mapStateToProps(state) {\n\treturn { userAgent: state.userAgent };\n}\n\n// load this component with the data that is requires from redux - mapped as props from state\nexports.default = {\n\tcomponent: (0, _reactRedux.connect)(mapStateToProps, { fetchUserAgent: _actions.fetchUserAgent })(App),\n\t// allow us to accessthe data from the dispatch function of fetchUserAgent in this component\n\tloadData: function loadData(_ref) {\n\t\tvar dispatch = _ref.dispatch;\n\t\treturn dispatch((0, _actions.fetchUserAgent)());\n\t}\n};\n\n//# sourceURL=webpack:///./src/client/containers/App.js?')},"./src/client/containers/App.scss":function(module,exports){eval("\n\n//# sourceURL=webpack:///./src/client/containers/App.scss?")},"./src/client/pages/bad-browser/BadBrowserPage.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ "react");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar BadBrowser = function (_Component) {\n  _inherits(BadBrowser, _Component);\n\n  function BadBrowser() {\n    _classCallCheck(this, BadBrowser);\n\n    return _possibleConstructorReturn(this, (BadBrowser.__proto__ || Object.getPrototypeOf(BadBrowser)).apply(this, arguments));\n  }\n\n  _createClass(BadBrowser, [{\n    key: "render",\n    value: function render() {\n      /** LOGIC FOR DISPLAYING CONTENT CORRECLTY ON DEVICE + BROWSER **/\n      return _react2.default.createElement(\n        "div",\n        { className: "class" },\n        _react2.default.createElement(\n          "h3",\n          null,\n          " Bad Browser hahaa "\n        )\n      );\n    }\n  }]);\n\n  return BadBrowser;\n}(_react.Component);\n\n;\n\n// take props from admins and pass them into require Auth\nexports.default = BadBrowser;\n\n//# sourceURL=webpack:///./src/client/pages/bad-browser/BadBrowserPage.js?')},"./src/client/pages/home/HomePage.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ "react");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _getBrowser = __webpack_require__(/*! ./../../components/hocs/getBrowser */ "./src/client/components/hocs/getBrowser.js");\n\nvar _getBrowser2 = _interopRequireDefault(_getBrowser);\n\nvar _reactUseragent = __webpack_require__(/*! @quentin-sommer/react-useragent */ "@quentin-sommer/react-useragent");\n\nvar _Desktop = __webpack_require__(/*! ./../../pages/home/desktop/Desktop */ "./src/client/pages/home/desktop/Desktop.js");\n\nvar _Desktop2 = _interopRequireDefault(_Desktop);\n\nvar _redux = __webpack_require__(/*! redux */ "redux");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n// import getDevice from \'./../../components/hocs/getDevice\';\n\n\nvar Home = function (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));\n  }\n\n  _createClass(Home, [{\n    key: \'render\',\n    value: function render() {\n      /** LOGIC FOR DISPLAYING CONTENT CORRECLTY ON DEVICE + BROWSER **/\n      return _react2.default.createElement(\n        \'div\',\n        null,\n        _react2.default.createElement(\n          _reactUseragent.UserAgent,\n          { computer: true },\n          _react2.default.createElement(_Desktop2.default, null)\n        ),\n        _react2.default.createElement(\n          _reactUseragent.UserAgent,\n          { tablet: true },\n          _react2.default.createElement(\n            \'div\',\n            null,\n            \' Tablet view \'\n          )\n        ),\n        _react2.default.createElement(\n          _reactUseragent.UserAgent,\n          { mobile: true },\n          _react2.default.createElement(\n            \'div\',\n            null,\n            \' Mobile view \'\n          )\n        )\n      );\n    }\n  }]);\n\n  return Home;\n}(_react.Component);\n\n;\n\nexports.default = {\n  // take props from admins and pass them into require Auth\n  component: (0, _getBrowser2.default)(Home)\n};\n\n//# sourceURL=webpack:///./src/client/pages/home/HomePage.js?')},"./src/client/pages/home/assets/react.png":function(module,exports){eval("\n\n//# sourceURL=webpack:///./src/client/pages/home/assets/react.png?")},"./src/client/pages/home/desktop/Desktop.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ "react");\n\nvar _react2 = _interopRequireDefault(_react);\n\n__webpack_require__(/*! ./Desktop.scss */ "./src/client/pages/home/desktop/Desktop.scss");\n\n__webpack_require__(/*! ./../assets/react.png */ "./src/client/pages/home/assets/react.png");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Desktop = function (_Component) {\n  _inherits(Desktop, _Component);\n\n  function Desktop() {\n    _classCallCheck(this, Desktop);\n\n    return _possibleConstructorReturn(this, (Desktop.__proto__ || Object.getPrototypeOf(Desktop)).apply(this, arguments));\n  }\n\n  _createClass(Desktop, [{\n    key: \'render\',\n    value: function render() {\n      /** LOGIC FOR DISPLAYING CONTENT CORRECLTY ON DEVICE + BROWSER **/\n      return _react2.default.createElement(\n        \'div\',\n        { className: \'class\' },\n        _react2.default.createElement(\n          \'h3\',\n          null,\n          \' Home page Desktop \'\n        ),\n        _react2.default.createElement(\n          \'p\',\n          null,\n          \' Built in ssr React and Redux \'\n        ),\n        _react2.default.createElement(\'img\', { src: \'/assets/images/react.png\' })\n      );\n    }\n  }]);\n\n  return Desktop;\n}(_react.Component);\n\n;\n\n// take props from admins and pass them into require Auth\nexports.default = Desktop;\n\n//# sourceURL=webpack:///./src/client/pages/home/desktop/Desktop.js?')},"./src/client/pages/home/desktop/Desktop.scss":function(module,exports){eval("\n\n//# sourceURL=webpack:///./src/client/pages/home/desktop/Desktop.scss?")},"./src/client/pages/not-found/NotFoundPage.js":function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar NotFoundPage = function NotFoundPage(_ref) {\n\tvar _ref$staticContext = _ref.staticContext,\n\t    staticContext = _ref$staticContext === undefined ? {} : _ref$staticContext;\n\n\tstaticContext.notFound = true;\n\treturn _react2.default.createElement(\n\t\t'h1',\n\t\tnull,\n\t\t'Oops, page not found.'\n\t);\n};\n\nexports.default = {\n\tcomponent: NotFoundPage\n};\n\n//# sourceURL=webpack:///./src/client/pages/not-found/NotFoundPage.js?")},"./src/client/reducers/index.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ "redux");\n\nvar _userAgentReducer = __webpack_require__(/*! ./userAgentReducer */ "./src/client/reducers/userAgentReducer.js");\n\nvar _userAgentReducer2 = _interopRequireDefault(_userAgentReducer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// combine all existing reducers\nexports.default = (0, _redux.combineReducers)({\n\tuserAgent: _userAgentReducer2.default\n});\n// import usersReducer\n\n//# sourceURL=webpack:///./src/client/reducers/index.js?')},"./src/client/reducers/userAgentReducer.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nexports.default = function () {\n\tvar state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n\tvar action = arguments[1];\n\n\t// if actions.type\n\tswitch (action.type) {\n\t\t//if actions.type is FETCH_USERS\n\t\tcase _actions.FETCH_USER_AGENT:\n\t\t\t// if action has data attached to it, then store the data\n\t\t\treturn action.payload;\n\t\tdefault:\n\t\t\t// else return state\n\t\t\treturn state;\n\t};\n};\n\nvar _actions = __webpack_require__(/*! ../actions */ "./src/client/actions/index.js");\n\n//# sourceURL=webpack:///./src/client/reducers/userAgentReducer.js?')},"./src/client/routes/Routes.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _App = __webpack_require__(/*! ./../containers/App */ "./src/client/containers/App.js");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _HomePage = __webpack_require__(/*! ./../pages/home/HomePage */ "./src/client/pages/home/HomePage.js");\n\nvar _HomePage2 = _interopRequireDefault(_HomePage);\n\nvar _NotFoundPage = __webpack_require__(/*! ./../pages/not-found/NotFoundPage */ "./src/client/pages/not-found/NotFoundPage.js");\n\nvar _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = [_extends({}, _App2.default, {\n\troutes: [_extends({}, _HomePage2.default, {\n\t\tpath: \'/\',\n\t\texact: true\n\t}), _extends({}, _NotFoundPage2.default)]\n})];\n\n//# sourceURL=webpack:///./src/client/routes/Routes.js?')},"./src/server/helpers/contentRes.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");\n\nvar _Routes = __webpack_require__(/*! ./../../client/routes/Routes */ "./src/client/routes/Routes.js");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _renderer = __webpack_require__(/*! ./renderer */ "./src/server/helpers/renderer.js");\n\nvar _renderer2 = _interopRequireDefault(_renderer);\n\nvar _createStore = __webpack_require__(/*! ./createStore */ "./src/server/helpers/createStore.js");\n\nvar _createStore2 = _interopRequireDefault(_createStore);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import routes\nmodule.exports = function (app, req, res) {\n\t// set up the redux store on the server side\n\tvar store = (0, _createStore2.default)(req);\n\t// check all react routes vs req path and return a list of components to be rendered\n\tvar promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {\n\t\tvar route = _ref.route;\n\n\t\t// if route.loadData exists then call loadData(), else do nothing\n\t\treturn route.loadData ? route.loadData(store) : null;\n\t}).map(function (promise) {\n\t\t// if null value from promise (something went wrong)\n\t\tif (promise) {\n\t\t\treturn new Promise(function (resolve, reject) {\n\t\t\t\t// return a resolved promise\n\t\t\t\tpromise.then(resolve).catch(resolve);\n\t\t\t});\n\t\t}\n\t});\n\t// once all our data requests have been completed\n\tPromise.all(promises).then(function () {\n\t\tvar context = {\n\t\t\tuserAgent: req.headers[\'user-agent\']\n\t\t};\n\t\tvar content = (0, _renderer2.default)(req, store, context);\n\t\t// if a url is loaded into the context then redirect to the url in the context\n\t\tif (context.url) return res.redirect(301, context.url);\n\t\t// if context has not found stored then respond with 404 error\n\t\tif (context.notFound) res.status(404);\n\t\t// send initialised store to the renderer\n\t\tres.send(content);\n\t});\n};\n\n//# sourceURL=webpack:///./src/server/helpers/contentRes.js?')},"./src/server/helpers/createStore.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _redux = __webpack_require__(/*! redux */ "redux");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ "redux-thunk");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _axios = __webpack_require__(/*! axios */ "axios");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nvar _reducers = __webpack_require__(/*! ../../client/reducers */ "./src/client/reducers/index.js");\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req) {\n\tvar userAgent = req.headers[\'user-agent\'];\n\t// create store with imported data from reducers and an empty state\n\tvar store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(userAgent)));\n\treturn store;\n};\n// import reducers from client\n\n// handle asynchronous acion creators\n\n//# sourceURL=webpack:///./src/server/helpers/createStore.js?')},"./src/server/helpers/renderer.js":function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _react = __webpack_require__(/*! react */ "react");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ "react-dom/server");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ "react-redux");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ "react-router-dom");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ "react-router-config");\n\nvar _serializeJavascript = __webpack_require__(/*! serialize-javascript */ "serialize-javascript");\n\nvar _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");\n\nvar _Routes = __webpack_require__(/*! ./../../client/routes/Routes */ "./src/client/routes/Routes.js");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = function (req, store, context) {\n\t// load react components\n\tvar content = (0, _server.renderToString)(\n\t// connect the redux store to the react application\n\t// send the route req and redux store to the react router\n\t_react2.default.createElement(\n\t\t_reactRedux.Provider,\n\t\t{ store: store },\n\t\t_react2.default.createElement(\n\t\t\t_reactRouterDom.StaticRouter,\n\t\t\t{ location: req.path, context: context },\n\t\t\t_react2.default.createElement(\n\t\t\t\t\'div\',\n\t\t\t\tnull,\n\t\t\t\t(0, _reactRouterConfig.renderRoutes)(_Routes2.default)\n\t\t\t)\n\t\t)\n\t));\n\t// returns an object that contains tags from loaded components\n\tvar helmet = _reactHelmet.Helmet.renderStatic();\n\n\t// load front end js\n\treturn \'\\n\\t\\t<html>\\n\\t\\t\\t<head> \\n\\t\\t\\t\\t\' + helmet.title.toString() + \'\\n\\t\\t\\t\\t\' + helmet.meta.toString() + \'\\n\\t\\t\\t    <link rel="stylesheet" type="text/css" href="/css/bundle.css">\\n\\t\\t\\t</head>\\n\\t\\t\\t<body> \\n\\t\\t\\t\\t<div id ="root">\' + content + \'</div>\\n\\t\\t\\t\\t<script> \\n\\t\\t\\t\\t\\twindow.INITIAL_STATE = \' + (0, _serializeJavascript2.default)(store.getState()) + \'\\n\\t\\t\\t\\t<\/script>\\n\\t\\t\\t\\t<script src ="/js/bundle.js"><\/script>\\n\\t\\t\\t</body>\\n\\t\\t</html>\\n\\t\';\n};\n\n//# sourceURL=webpack:///./src/server/helpers/renderer.js?')},"./src/server/index.js":function(module,exports,__webpack_require__){"use strict";eval('\n\n__webpack_require__(/*! babel-polyfill */ "babel-polyfill");\n\nvar _express = __webpack_require__(/*! express */ "express");\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//** Declare express app **//\n//** NODEJS IMPORTS **//\nvar app = (0, _express2.default)();\n//** SET MIDDLEWARES **//\n__webpack_require__(/*! ./middlewares/apiProxy */ "./src/server/middlewares/apiProxy.js")(app);\n// //** SET CLIENT ASSETS **//\n//** Declare Gzipped content to serve **//\nvar expressStaticGzip = __webpack_require__(/*! express-static-gzip */ "express-static-gzip");\n//** SET CLIENT ASSETS **//\napp.use(expressStaticGzip(\'./build/client\', {\n\tindexFromEmptyFile: false,\n\tenableBrotli: true\n}));\n//** SET HOME ROUTE **//\n__webpack_require__(/*! ./routes/routes */ "./src/server/routes/routes.js")(app);\n//** Initialise express app on port 3000 **//\napp.listen(3000, function () {\n\tconsole.log(\'Listening on port 3000\');\n});\n\n//# sourceURL=webpack:///./src/server/index.js?')},"./src/server/middlewares/apiProxy.js":function(module,exports,__webpack_require__){"use strict";eval("\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nmodule.exports = function (app) {\n\t// redirect api requests to api server\n\tapp.use('/api', (0, _expressHttpProxy2.default)('http://react-ssr-api.herokuapp.com', {\n\t\t// oauth demo options\n\t\tproxyReqOptDecorator: function proxyReqOptDecorator(opts) {\n\t\t\topts.headers['x-forwarded-host'] = 'localhost:3000';\n\t\t\treturn opts;\n\t\t}\n\t}));\n};\n\n//# sourceURL=webpack:///./src/server/middlewares/apiProxy.js?")},"./src/server/routes/routes.js":function(module,exports,__webpack_require__){"use strict";eval("\n\nmodule.exports = function (app) {\n\tapp.get('*', function (req, res) {\n\t\t// load content\n\t\t__webpack_require__(/*! ./../helpers/contentRes */ \"./src/server/helpers/contentRes.js\")(app, req, res);\n\t});\n};\n\n//# sourceURL=webpack:///./src/server/routes/routes.js?")},"@quentin-sommer/react-useragent":function(module,exports){eval('module.exports = require("@quentin-sommer/react-useragent");\n\n//# sourceURL=webpack:///external_%22@quentin-sommer/react-useragent%22?')},axios:function(module,exports){eval('module.exports = require("axios");\n\n//# sourceURL=webpack:///external_%22axios%22?')},"babel-polyfill":function(module,exports){eval('module.exports = require("babel-polyfill");\n\n//# sourceURL=webpack:///external_%22babel-polyfill%22?')},express:function(module,exports){eval('module.exports = require("express");\n\n//# sourceURL=webpack:///external_%22express%22?')},"express-http-proxy":function(module,exports){eval('module.exports = require("express-http-proxy");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?')},"express-static-gzip":function(module,exports){eval('module.exports = require("express-static-gzip");\n\n//# sourceURL=webpack:///external_%22express-static-gzip%22?')},react:function(module,exports){eval('module.exports = require("react");\n\n//# sourceURL=webpack:///external_%22react%22?')},"react-dom/server":function(module,exports){eval('module.exports = require("react-dom/server");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?')},"react-helmet":function(module,exports){eval('module.exports = require("react-helmet");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?')},"react-redux":function(module,exports){eval('module.exports = require("react-redux");\n\n//# sourceURL=webpack:///external_%22react-redux%22?')},"react-router-config":function(module,exports){eval('module.exports = require("react-router-config");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?')},"react-router-dom":function(module,exports){eval('module.exports = require("react-router-dom");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?')},redux:function(module,exports){eval('module.exports = require("redux");\n\n//# sourceURL=webpack:///external_%22redux%22?')},"redux-thunk":function(module,exports){eval('module.exports = require("redux-thunk");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?')},"serialize-javascript":function(module,exports){eval('module.exports = require("serialize-javascript");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?')}});