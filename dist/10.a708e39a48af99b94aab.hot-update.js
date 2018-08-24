webpackHotUpdate(10,{

/***/ "./js/containers/feed/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(\"../node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _propTypes = __webpack_require__(\"../node_modules/prop-types/index.js\");\n\nvar _propTypes2 = _interopRequireDefault(_propTypes);\n\nvar _reactRouterDom = __webpack_require__(\"../node_modules/react-router-dom/es/index.js\");\n\nvar _reactRedux = __webpack_require__(\"../node_modules/react-redux/es/index.js\");\n\nvar _reactInfiniteScrollComponent = __webpack_require__(\"../node_modules/react-infinite-scroll-component/lib/index.js\");\n\nvar _reactInfiniteScrollComponent2 = _interopRequireDefault(_reactInfiniteScrollComponent);\n\nvar _reactLazyload = __webpack_require__(\"../node_modules/react-lazyload/lib/index.js\");\n\nvar _reactLazyload2 = _interopRequireDefault(_reactLazyload);\n\nvar _reactSpinners = __webpack_require__(\"../node_modules/react-spinners/index.js\");\n\nvar _reactLoadingSkeleton = __webpack_require__(\"../node_modules/react-loading-skeleton/dist/bundle.js\");\n\nvar _reactLoadingSkeleton2 = _interopRequireDefault(_reactLoadingSkeleton);\n\nvar _pclnDesignSystem = __webpack_require__(\"../node_modules/pcln-design-system/dist/index.js\");\n\nvar _atoms = __webpack_require__(\"./js/components/UI/atoms/index.js\");\n\nvar _constants = __webpack_require__(\"./js/containers/feed/constants.js\");\n\nvar _reducer = __webpack_require__(\"./js/containers/app/reducer.js\");\n\nvar _reducer2 = __webpack_require__(\"./js/screens/cart/reducer.js\");\n\nvar _actions = __webpack_require__(\"./js/screens/cart/actions.js\");\n\nvar _util = __webpack_require__(\"./js/util/util.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar FeedItemCard = function FeedItemCard(props) {\n  return _react2.default.createElement(\n    _pclnDesignSystem.Box,\n    null,\n    _react2.default.createElement(\n      _pclnDesignSystem.Card,\n      {\n        width: 1,\n        mb: props.verticalSpacing,\n        px: 2,\n        py: 1,\n        style: { borderRadius: \"4px\" },\n        boxShadowSize: \"md\",\n        borderColor: \"white\",\n        bg: (0, _util.getCartItemFromFeed)(props.item, props.cartItems) && props.highlightSelectedItem ? \"lightYellow\" : \"white\"\n      },\n      _react2.default.createElement(\n        _pclnDesignSystem.Flex,\n        null,\n        _react2.default.createElement(FeedItemThumbnail, { item: props.item }),\n        _react2.default.createElement(FeedItemArticle, {\n          item: props.item,\n          isOptionsOpen: function isOptionsOpen(id) {\n            return props.isOptionsOpen(id);\n          },\n          onPricesOptionsExpansion: function onPricesOptionsExpansion(id) {\n            return props.onPricesOptionsExpansion(id);\n          },\n          priceInSTEEM: props.getSTEEMEquivalent(props.item.price),\n          priceInSBD: props.getSBDEquivalent(props.item.price)\n        }),\n        props.showControls && _react2.default.createElement(FeedItemControls, {\n          cartItems: props.cartItems,\n          item: props.item,\n          onDecrementCartItemQty: props.onDecrementCartItemQty,\n          onAddCartItem: props.onAddCartItem,\n          onIncrementCartItemQty: props.onIncrementCartItemQty,\n          onRemoveCartItem: props.onRemoveCartItem\n        })\n      )\n    )\n  );\n};\n\nvar FeedItemThumbnail = function FeedItemThumbnail(props) {\n  var THUMB_URL = \"https://res.cloudinary.com/instachaw/image/upload/c_scale,w_150/v1534208541/store-1\";\n  return _react2.default.createElement(\n    _pclnDesignSystem.Box,\n    { width: 1 / 4, mr: 3 },\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: \"/treat/\" + props.item.id },\n      _react2.default.createElement(\n        _pclnDesignSystem.Box,\n        null,\n        _react2.default.createElement(\n          _reactLazyload2.default,\n          {\n            height: 300,\n            placeholder: _react2.default.createElement(\n              _pclnDesignSystem.Flex,\n              { flexDirection: \"column\", justify: \"center\", alignItems: \"center\" },\n              _react2.default.createElement(_reactSpinners.ClipLoader, { width: 12, loading: true, color: \"#c3c3c3\" })\n            )\n          },\n          _react2.default.createElement(_pclnDesignSystem.Image, {\n            style: { borderRadius: \"4px\" },\n            src: THUMB_URL + \"/\" + props.item.photo\n          })\n        )\n      )\n    )\n  );\n};\n\nvar FeedItemArticle = function FeedItemArticle(props) {\n  return _react2.default.createElement(\n    _pclnDesignSystem.Box,\n    null,\n    _react2.default.createElement(\n      _pclnDesignSystem.Flex,\n      null,\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        {\n          to: \"/treat/\" + props.item.id,\n          style: {\n            textDecoration: \"none\"\n          }\n        },\n        _react2.default.createElement(\n          _pclnDesignSystem.Heading,\n          { color: \"gray\", fontSize: 2 },\n          props.item.title\n        )\n      )\n    ),\n    _react2.default.createElement(\n      _pclnDesignSystem.Flex,\n      { mb: 2 },\n      _react2.default.createElement(\n        _pclnDesignSystem.Text,\n        { bold: true, color: \"green\", mr: 1, fontSize: 1 },\n        \"N\",\n        props.item.price\n      ),\n      _react2.default.createElement(\n        _pclnDesignSystem.Link,\n        {\n          p: 0,\n          onClick: function onClick(e) {\n            return props.onPricesOptionsExpansion(props.item.id);\n          }\n        },\n        _react2.default.createElement(\n          _pclnDesignSystem.Flex,\n          null,\n          _react2.default.createElement(\n            _pclnDesignSystem.Text,\n            { fontSize: 1, mr: 1 },\n            !props.isOptionsOpen(props.item.id) ? \"More\" : \"Less\"\n          ),\n          _react2.default.createElement(\n            _pclnDesignSystem.Flex,\n            { flexDirection: \"column\", alignItems: \"center\", justify: \"center\" },\n            _react2.default.createElement(_pclnDesignSystem.Icon, {\n              size: 12,\n              name: \"chevronDown\",\n              style: {\n                transition: \"transform 0.5s ease\",\n                transform: !props.isOptionsOpen(props.item.id) ? \"rotate(0deg)\" : \"rotate(180deg)\"\n              }\n            })\n          )\n        )\n      )\n    ),\n    _react2.default.createElement(\n      _pclnDesignSystem.Flex,\n      {\n        flexDirection: \"column\",\n        style: {\n          height: !props.isOptionsOpen(props.item.id) ? 0 : \"35px\",\n          overflowY: \"hidden\"\n        }\n      },\n      _react2.default.createElement(\n        _pclnDesignSystem.Text,\n        { color: \"blue\", mb: 1, fontSize: 0 },\n        _react2.default.createElement(\n          \"b\",\n          null,\n          !isNaN(props.priceInSTEEM) && props.priceInSTEEM\n        ),\n        \" STEEM\"\n      ),\n      _react2.default.createElement(\n        _pclnDesignSystem.Text,\n        { color: \"gray\", fontSize: 0 },\n        _react2.default.createElement(\n          \"b\",\n          null,\n          !isNaN(props.priceInSBD) && props.priceInSBD\n        ),\n        \" SBD\"\n      )\n    )\n  );\n};\n\nvar FeedItemControls = function FeedItemControls(props) {\n  var isActiveCartItem = (0, _util.getCartItemFromFeed)(props.item, props.cartItems);\n  return _react2.default.createElement(\n    _pclnDesignSystem.Box,\n    { ml: \"auto\" },\n    _react2.default.createElement(\n      _pclnDesignSystem.Flex,\n      { flexDirection: \"column\" },\n      _react2.default.createElement(\n        _atoms.TransparentButton,\n        {\n          py: 0,\n          style: {\n            display: isActiveCartItem ? \"block\" : \"none\",\n            animation: isActiveCartItem && \"fadeInUp 0.5s ease\"\n          },\n          onClick: function onClick(e) {\n            return props.onIncrementCartItemQty(props.item);\n          }\n        },\n        _react2.default.createElement(_pclnDesignSystem.Icon, { size: 28, color: \"#999\", name: \"circlePlus\", mb: 1 })\n      ),\n      _react2.default.createElement(\n        _pclnDesignSystem.Text,\n        {\n          color: \"gray\",\n          fontSize: 0,\n          bold: true,\n          style: {\n            display: isActiveCartItem ? \"block\" : \"none\",\n            animation: isActiveCartItem && \"fadeInUp 0.5s ease\",\n            textAlign: \"center\"\n          }\n        },\n        isActiveCartItem && isActiveCartItem.qty\n      ),\n      _react2.default.createElement(\n        _atoms.TransparentButton,\n        {\n          py: 0,\n          style: {\n            display: isActiveCartItem && isActiveCartItem.qty !== 1 ? \"block\" : \"none\",\n            animation: isActiveCartItem && isActiveCartItem.qty !== 1 && \"fadeInUp 0.5s ease\",\n            transition: \"0.4s opacity ease\"\n          },\n          onClick: function onClick(e) {\n            return props.onDecrementCartItemQty(props.item);\n          }\n        },\n        _react2.default.createElement(_pclnDesignSystem.Icon, { size: 24, color: \"#999\", name: \"circleMinus\", mt: 1 })\n      ),\n      _react2.default.createElement(\n        _atoms.TransparentButton,\n        {\n          py: 0,\n          onClick: function onClick(e) {\n            return props.onRemoveCartItem(props.item);\n          },\n          style: {\n            display: isActiveCartItem && isActiveCartItem.qty === 1 ? \"block\" : \"none\",\n            animation: isActiveCartItem && isActiveCartItem.qty === 1 && \"fadeInUp 0.5s ease\",\n            transition: \"0.4s opacity ease\"\n          }\n        },\n        _react2.default.createElement(_pclnDesignSystem.Icon, {\n          size: 30,\n          color: \"#999\",\n          style: { transform: \"rotate(45deg)\" },\n          name: \"circlePlus\",\n          mt: 1\n        })\n      )\n    ),\n    _react2.default.createElement(\n      _pclnDesignSystem.Flex,\n      _defineProperty({\n        flexDirection: \"column\",\n        alignItems: \"center\",\n        justify: \"center\",\n        style: {\n          height: \"100%\"\n        }\n      }, \"style\", {\n        display: !isActiveCartItem ? \"block\" : \"none\",\n        animation: !isActiveCartItem && \"fadeInUp 0.5s ease\"\n      }),\n      _react2.default.createElement(\n        _atoms.TransparentButton,\n        { onClick: function onClick(e) {\n            return props.onAddCartItem(props.item);\n          } },\n        _react2.default.createElement(_pclnDesignSystem.Icon, { size: 32, color: \"#999\", name: \"circlePlus\" })\n      )\n    )\n  );\n};\n\nvar Feed = function (_React$PureComponent) {\n  _inherits(Feed, _React$PureComponent);\n\n  function Feed(props) {\n    _classCallCheck(this, Feed);\n\n    var _this = _possibleConstructorReturn(this, (Feed.__proto__ || Object.getPrototypeOf(Feed)).call(this, props));\n\n    _this.onAddCartItem = _this.onAddCartItem.bind(_this);\n    _this.onRemoveCartItem = _this.onRemoveCartItem.bind(_this);\n    _this.onIncrementCartItemQty = _this.onIncrementCartItemQty.bind(_this);\n    _this.onDecrementCartItemQty = _this.onDecrementCartItemQty.bind(_this);\n    _this.renderItems = _this.renderItems.bind(_this);\n    _this.getSTEEMEquivalent = _this.getSTEEMEquivalent.bind(_this);\n    _this.getSBDEquivalent = _this.getSBDEquivalent.bind(_this);\n    _this.handlePricesOptionsExpansion = _this.handlePricesOptionsExpansion.bind(_this);\n\n    _this.state = {\n      itemsExpanded: []\n    };\n    return _this;\n  }\n\n  _createClass(Feed, [{\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      this.onAddCartItem = null;\n      this.onRemoveCartItem = null;\n      this.onIncrementCartItemQty = null;\n      this.onDecrementCartItemQty = null;\n      this.renderItems = null;\n      this.getSTEEMEquivalent = null;\n      this.getSBDEquivalent = null;\n      this.handlePricesOptionsExpansion = null;\n    }\n  }, {\n    key: \"renderItems\",\n    value: function renderItems() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        _pclnDesignSystem.Box,\n        null,\n        this.props.items.map(function (item, index) {\n          return _react2.default.createElement(FeedItemCard, {\n            key: index,\n            item: item,\n            isOptionsOpen: function isOptionsOpen(id) {\n              return _this2.state.itemsExpanded.includes(id);\n            },\n            onPricesOptionsExpansion: function onPricesOptionsExpansion(id) {\n              return _this2.handlePricesOptionsExpansion(id);\n            },\n            isLoading: _this2.props.isLoading,\n            getSTEEMEquivalent: _this2.getSTEEMEquivalent,\n            getSBDEquivalent: _this2.getSBDEquivalent,\n            cartItems: _this2.props.cart.items,\n            highlightSelectedItem: _this2.props.highlightSelectedItem,\n            verticalSpacing: _this2.props.verticalSpacing,\n            onDecrementCartItemQty: _this2.onDecrementCartItemQty,\n            onAddCartItem: _this2.onAddCartItem,\n            onIncrementCartItemQty: _this2.onIncrementCartItemQty,\n            onRemoveCartItem: _this2.onRemoveCartItem,\n            showControls: _this2.props.showControls\n          });\n        }),\n        this.props.isLoading && Array.from(\"12345\").map(function (num, i) {\n          return _react2.default.createElement(\n            _pclnDesignSystem.Flex,\n            { key: i, mb: 3 },\n            _react2.default.createElement(\n              _pclnDesignSystem.Flex,\n              {\n                style: {\n                  height: \"50px\"\n                },\n                mr: 3,\n                ml: 2\n              },\n              _react2.default.createElement(_reactLoadingSkeleton2.default, { width: 70 })\n            ),\n            _react2.default.createElement(\n              _pclnDesignSystem.Flex,\n              { style: { flex: 3 } },\n              _react2.default.createElement(\n                _pclnDesignSystem.Flex,\n                { style: { flex: 3 }, flexDirection: \"column\" },\n                _react2.default.createElement(\n                  _pclnDesignSystem.Box,\n                  null,\n                  _react2.default.createElement(\n                    _pclnDesignSystem.Box,\n                    { mb: 1 },\n                    _react2.default.createElement(_reactLoadingSkeleton2.default, { width: \"80%\" })\n                  ),\n                  _react2.default.createElement(\n                    _pclnDesignSystem.Box,\n                    { style: { height: \"10px\" } },\n                    _react2.default.createElement(_reactLoadingSkeleton2.default, { width: \"50%\" })\n                  )\n                )\n              ),\n              _react2.default.createElement(\n                _pclnDesignSystem.Flex,\n                null,\n                _react2.default.createElement(\n                  _pclnDesignSystem.Box,\n                  { style: { height: \"25px\" }, mr: 2 },\n                  _react2.default.createElement(_reactLoadingSkeleton2.default, { width: 35 })\n                )\n              )\n            )\n          );\n        })\n      );\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return _react2.default.createElement(\n        _pclnDesignSystem.Flex,\n        { width: 1, flexDirection: \"column\" },\n        _react2.default.createElement(\n          _reactInfiniteScrollComponent2.default,\n          {\n            dataLength: this.props.items.length //This is important field to render the next data\n            , next: this.props.onFetchNextItems,\n            style: {\n              height: \"inherit !important\",\n              overflow: \"hidden !important\"\n            },\n            hasMore: this.props.items.length < this.props.itemsCount,\n            loader: _react2.default.createElement(\n              _pclnDesignSystem.Flex,\n              { justify: \"center\", alignItems: \"center\" },\n              _react2.default.createElement(_reactSpinners.SyncLoader, { color: \"#a1a1a1\", size: 8, loading: true })\n            )\n          },\n          this.renderItems()\n        )\n      );\n    }\n  }, {\n    key: \"handlePricesOptionsExpansion\",\n    value: function handlePricesOptionsExpansion(id) {\n      if (!this.state.itemsExpanded.includes(id)) {\n        this.setState({\n          itemsExpanded: [].concat(_toConsumableArray(this.state.itemsExpanded), [id])\n        });\n      } else {\n        this.setState({\n          itemsExpanded: this.state.itemsExpanded.filter(function (itemID) {\n            return itemID !== id;\n          })\n        });\n      }\n    }\n  }, {\n    key: \"getSTEEMEquivalent\",\n    value: function getSTEEMEquivalent(naira) {\n      var STEEM_PRICE = this.props.app.rates[\"STEEM\"];\n\n      return (0, _util.roundToDecimalPlaces)(naira / STEEM_PRICE, 3);\n    }\n  }, {\n    key: \"getSBDEquivalent\",\n    value: function getSBDEquivalent(naira) {\n      var SBD_PRICE = this.props.app.rates[\"SBD\"];\n\n      return (0, _util.roundToDecimalPlaces)(naira / SBD_PRICE, 3);\n    }\n  }, {\n    key: \"onAddCartItem\",\n    value: function onAddCartItem(item) {\n      this.props.addCartItem(item);\n    }\n  }, {\n    key: \"onRemoveCartItem\",\n    value: function onRemoveCartItem(item) {\n      this.props.removeCartItem(item);\n    }\n  }, {\n    key: \"onIncrementCartItemQty\",\n    value: function onIncrementCartItemQty(item) {\n      this.props.incrementCartItemQty(item);\n    }\n  }, {\n    key: \"onDecrementCartItemQty\",\n    value: function onDecrementCartItemQty(item) {\n      this.props.decrementCartItemQty(item);\n    }\n  }]);\n\n  return Feed;\n}(_react2.default.PureComponent);\n\nFeed.propTypes = {\n  items: _propTypes2.default.array,\n  highlightSelectedItem: _propTypes2.default.bool,\n  onFetchNextItems: _propTypes2.default.func,\n  isLoading: _propTypes2.default.bool,\n  showControls: _propTypes2.default.bool,\n  useMiniFeedCard: _propTypes2.default.bool\n};\n\nFeed.defaultProps = {\n  items: [],\n  itemsCount: 0,\n  isLoading: false,\n  onFetchNextItems: function onFetchNextItems() {},\n  verticalSpacing: 3,\n  highlightSelectedItem: true,\n  showControls: true,\n  useMiniFeedCard: false\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    cart: (0, _reducer2.getCartState)(state).toJS(),\n    app: (0, _reducer.getAppState)(state).toJS()\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return {\n    addCartItem: function addCartItem(item) {\n      return dispatch((0, _actions.addCartItem)(item));\n    },\n    removeCartItem: function removeCartItem(item) {\n      return dispatch((0, _actions.removeCartItem)(item));\n    },\n    incrementCartItemQty: function incrementCartItemQty(item) {\n      return dispatch((0, _actions.incrementCartItemQty)(item));\n    },\n    decrementCartItemQty: function decrementCartItemQty(item) {\n      return dispatch((0, _actions.decrementCartItemQty)(item));\n    }\n  };\n};\n\nexports.default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Feed));\n\n//////////////////\n// WEBPACK FOOTER\n// ./js/containers/feed/index.js\n// module id = ./js/containers/feed/index.js\n// module chunks = 9 10\n\n//# sourceURL=webpack:///./js/containers/feed/index.js?");

/***/ })

})