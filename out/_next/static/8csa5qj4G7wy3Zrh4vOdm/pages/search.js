(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{302:function(e,t,n){__NEXT_REGISTER_PAGE("/search",function(){return e.exports=n(325),{page:e.exports.default}})},325:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n(24),c=n(10),u=n(53),a=n.n(u),s=n(1),i=n(4),l=n(19),f=n(2),h=n(3),p=n(14),b=n.n(p),y=n(11),S=n(27),g=n(18);function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){m(e,t,n[t])})}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function d(e,t,n,r,o,c,u){try{var a=e[c](u),s=a.value}catch(e){return void n(e)}a.done?t(s):Promise.resolve(s).then(r,o)}var w={Map:function(e){return{payload:e,type:i.a.Search.SetReducer}},Reset:function(){return{type:i.a.Search.ResetReducer}},toggleSearchResultsFetchingStatus:function(e){return w.Map({isFetchingSearchResults:!e})},fetchSearchResults:function(e){return function(){var t,n=(t=b.a.mark(function t(n,r,o){return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return R(r),n(w.toggleSearchResultsFetchingStatus(!1)),t.abrupt("return",o.fetchSearchResults(e).then(o.checkStatus).then(o.toJSON).then(function(e){var t=Object(y.b)(e,[g.b]).entities;if(e.length){var r=Object(y.b)(t.stores,[g.c]);n(S.a.Map({stores:r.entities.stores}))}n(S.a.Map({searchResults:v({},t.searchResults)})),n(w.toggleSearchResultsFetchingStatus(!0))}).catch(function(e){return w.toggleSearchResultsFetchingStatus(!0),o.errorHandler(n,e)}));case 3:case"end":return t.stop()}},t,this)}),function(){var e=this,n=arguments;return new Promise(function(r,o){var c=t.apply(e,n);function u(e){d(c,r,o,u,a,"next",e)}function a(e){d(c,r,o,u,a,"throw",e)}u(void 0)})});return function(e,t,r){return n.apply(this,arguments)}}()}},O=n(20),j=n(30),E=function(e){return e.search.isFetchingSearchResults};function P(e){return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function F(e,t){return!t||"object"!==P(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function k(e){return(k=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"SearchPage",function(){return H});var T=f.a.space,x=f.a.palette.grayscale,H=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=F(this,k(t).call(this,e))).state={searchQuery:""},n}var n,o,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(t,r["Component"]),n=t,(o=[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.fetchSearchResults,r=t.router,o=window.location.search.split("?q=")[1];this.setState({searchQuery:o}),n(o),r.events.on("beforeHistoryChange",function(t){var r=t.split("?q=");r[0]===i.c.SEARCH_ROUTE&&(e.setState({searchQuery:r[1]}),n(r[1]))})}},{key:"componentWillUnmount",value:function(){this.props.router.events.off("beforeHistoryChange")}},{key:"render",value:function(){var e=this.state.searchQuery,t=this.props,n=t.getSearchResults,o=t.stores,c=t.isFetchingSearchResults,u=n();return r.createElement(r.Fragment,null,r.createElement(a.a,null,r.createElement("title",null,"Results for ",Object(h.p)(e)," | Instachaw")),r.createElement(l.e,null,r.createElement(l.e.Row,null,r.createElement(l.e.Col,null,r.createElement(s.Heading,{"data-testid":"search-screen-title",margin:"".concat(T[1]," 0"),color:x[2],fontSize:3},"".concat(c?"Fetching":"",' Search Results for "').concat(Object(h.p)(e),'".')),r.createElement(l.l,{isFetchingSearchResults:c,searchResults:u,stores:o()})))))}}])&&_(n.prototype,o),c&&_(n,c),t}();t.default=Object(o.b)(function(e){return{getSearchResults:function(){return Object(O.a)([j.a],function(e){var t=e.searchResults;return Object.keys(t).map(function(e){return t[e]})})(e)},stores:function(){return e.entities.stores},isFetchingSearchResults:E(e)}},function(e){return{fetchSearchResults:Object(c.bindActionCreators)(w.fetchSearchResults,e)}})(H)}},[[302,1,0]]]);