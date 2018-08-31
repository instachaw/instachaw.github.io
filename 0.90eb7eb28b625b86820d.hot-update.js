exports.id = 0;
exports.modules = {
  /***/ /***/ "./src/js/containers/header/index.jsx": function(
    module,
    exports,
    __webpack_require__
  ) {
    "use strict";
    eval(
      '\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__("react");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__("react-redux");\n\nvar _reactRouterDom = __webpack_require__("react-router-dom");\n\nvar _immutable = __webpack_require__("immutable");\n\nvar _reducerInjector = __webpack_require__("./src/js/util/reducerInjector.js");\n\nvar _reducerInjector2 = _interopRequireDefault(_reducerInjector);\n\nvar _nav = __webpack_require__("./src/js/components/nav/nav.jsx");\n\nvar _nav2 = _interopRequireDefault(_nav);\n\nvar _actions = __webpack_require__("./src/js/containers/header/actions.js");\n\nvar _constants = __webpack_require__("./src/js/containers/header/constants.js");\n\nvar _reducer = __webpack_require__("./src/js/containers/app/reducer.js");\n\nvar _reducer2 = __webpack_require__("./src/js/containers/header/reducer.js");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Header = function (_React$PureComponent) {\n  _inherits(Header, _React$PureComponent);\n\n  function Header() {\n    _classCallCheck(this, Header);\n\n    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));\n  }\n\n  _createClass(Header, [{\n    key: "componentDidMount",\n    value: function componentDidMount() {\n      var _props = this.props,\n          onLoadHeader = _props.onLoadHeader,\n          onSetNavItemActive = _props.onSetNavItemActive;\n\n      // set initial navigation item\n\n      onSetNavItemActive({\n        href: location.pathname\n      });\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var _props2 = this.props,\n          header = _props2.header,\n          title = _props2.title,\n          onSetNavItemActive = _props2.onSetNavItemActive;\n\n      return _react2.default.createElement(\n        "div",\n        null,\n        _react2.default.createElement(\n          "header",\n          { className: "fcds-navbar fcds-navbar--default fcds-navbar--fixed-top" },\n          _react2.default.createElement(\n            "section",\n            { className: "container fcds-navbar__container" },\n            _react2.default.createElement(\n              "section",\n              { className: "fcds-navbar__section hidden visible-xs" },\n              _react2.default.createElement(\n                "a",\n                {\n                  href: "#",\n                  className: "fcds-navbar__link fcds-navbar__link--trigger"\n                },\n                _react2.default.createElement(\n                  "span",\n                  { className: "icon icon--hamburger icon--md u-mr-xs" },\n                  _react2.default.createElement("span", { className: "hamburger" })\n                ),\n                _react2.default.createElement(\n                  "span",\n                  { className: "icon-label sr-only" },\n                  "Menu"\n                )\n              )\n            ),\n            _react2.default.createElement(\n              "section",\n              { className: "fcds-navbar__brand fcds-navbar__brand--center-bmd" },\n              _react2.default.createElement(\n                "a",\n                {\n                  href: "http://localhost:8000/#top",\n                  className: "fcds-navbar__brand-link"\n                },\n                _react2.default.createElement(\n                  "span",\n                  { className: "fcds-navbar__brand-wordmark hidden-xs" },\n                  "Delight"\n                )\n              )\n            ),\n            _react2.default.createElement(\n              "section",\n              { className: "fcds-navbar__section" },\n              _react2.default.createElement(\n                "li",\n                { className: "fcds-navbar__item" },\n                _react2.default.createElement(\n                  "a",\n                  {\n                    href: "http://localhost:8000/entry",\n                    className: "fcds-navbar__link"\n                  },\n                  "Cart"\n                )\n              )\n            )\n          )\n        )\n      );\n    }\n  }], [{\n    key: "fetchData",\n    value: function fetchData(store, _ref) {\n      var path = _ref.path;\n\n      return store.dispatch((0, _actions.fetchHeader)(path));\n    }\n  }, {\n    key: "getReducer",\n    value: function getReducer() {\n      return { key: _constants.REDUCER_NAME, reducer: _reducer2.headerReducer };\n    }\n  }]);\n\n  return Header;\n}(_react2.default.PureComponent);\n\n// maps the redux store state to the props related to the data from the store\n\n\nvar mapStateToProps = function mapStateToProps(state) {\n  var header = (0, _reducer2.getHeaderState)(state).toJS();\n\n  var _getAppState$toJS = (0, _reducer.getAppState)(state).toJS(),\n      title = _getAppState$toJS.title;\n\n  return {\n    header: header,\n    title: title\n  };\n};\n\n// specifies the behaviour, which callback prop dispatches which action\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    onSetNavItemActive: function onSetNavItemActive(data) {\n      return dispatch((0, _actions.setNavItemActive)(data));\n    }\n  };\n};\n\n// inject a new reducer for this component\nvar withReducer = (0, _reducerInjector2.default)(_constants.REDUCER_NAME, _reducer2.headerReducer)(Header);\n\nexports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(withReducer));\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/js/containers/header/index.jsx\n// module id = ./src/js/containers/header/index.jsx\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/js/containers/header/index.jsx?'
    );

    /***/
  }
};