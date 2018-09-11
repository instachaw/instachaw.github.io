webpackJsonp([4],{"./js/screens/store/actions.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.attemptSearchQuery=t.fetchStore=t.setSearchResultsLoadingState=t.fetchStores=t.setFetchedStoreFeedState=t.toggleSearchFocus=t.setStoreTitle=t.setActiveStore=t.setSearch=void 0;var r=n("./js/screens/store/constants.js"),a=n("./js/containers/app/actions.js"),o=n("../service/service.js"),s=n("./js/services/ApiService/index.js"),i="https://instachaw.com"===window.location.origin?"https://api.instachaw.com":"http://localhost:3333",c=(t.setSearch=function(e){return{type:r.SET_SEARCH,data:e}},t.setActiveStore=function(e){arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.STORES_ENDPOINT;return function(t){var n=parseInt(e.id,10),a=e.stores.filter(function(e){return e.id===n})[0];a?(t({type:r.SET_ACTIVE_STORE,data:{store:a}}),t(c(a.name))):t(d({id:n}))}},t.setStoreTitle=function(e){return e="Meals from "+e+" available on Instachaw",function(t){t((0,a.setMeta)({title:e}))}}),u=(t.toggleSearchFocus=function(e){return{type:r.SET_SEARCH_FOCUS,data:e}},function(e){return{type:r.SET_STORE,data:e}}),l=function(e){return{type:r.SET_SEARCH_RESULTS,data:e}},d=(t.setFetchedStoreFeedState=function(e){return{type:r.SET_FETCHED_STORE_FEED_STATE,data:e}},t.fetchStores=function(e){r.STORES_ENDPOINT;return f({isLoadingStores:!0}),function(t){var n=e.id?"/"+e.id:"?page="+e.page,a="api/v1/stores"+n;(0,s.sendRequest)({endpoint:i+"/"+a,method:"GET"}).then(function(n){void 0!==n&&null!==typeof n&&(e.id?(t(p(n)),t({type:r.SET_ACTIVE_STORE,data:{store:n}}),t(c(n.name))):(t(T(void 0!==e.activeStore?n.stores.filter(function(t){return t.id!==e.activeStore.id}):n.stores)),t(g({storesCount:n.storesCount})),t(h({currentStorePage:e.page+1}))),t(f({isLoadingStores:!1})))}).catch(function(e){return console.log(e)})}}),h=function(e){return{type:r.SET_CURRENT_STORES_PAGE,data:e}},f=function(e){return{type:r.SET_STORES_LOADING_STATUS,data:e}},S=t.setSearchResultsLoadingState=function(e){return{type:r.SET_SEARCH_RESULTS_LOADING_STATE,data:e}},p=(t.fetchStore=function(e){return function(t){return t((0,a.isLoading)(!0)),(0,o.getPageData)(e).then(function(e){return t((0,a.setMeta)(e.meta)),t((0,a.setUrl)(e.url)),t((0,a.setTitle)(e.title)),e}).then(function(e){t((0,a.isLoading)(!1)),t(u(e))}).catch(function(e){throw console.error(e),e})}},function(e){return{type:r.SET_STORE,data:e}}),T=function(e){return{type:r.SET_STORES,data:e}},g=function(e){return{type:r.SET_STORES_COUNT,data:e}};t.attemptSearchQuery=function(e){var t="api/v1/items?search="+e.search;return function(e){(0,s.sendRequest)({endpoint:i+"/"+t,method:"GET"}).then(function(t){void 0!==t&&null!==typeof t&&(e(l({results:t})),e(S({isLoadingSearchResults:!1})))}).catch(function(e){return console.log(e)})}}},"./js/screens/store/index.jsx":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=function(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  z-index: 9999;\n  background: #fff;\n"],["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  z-index: 9999;\n  background: #fff;\n"]),u=n("../node_modules/react/index.js"),l=r(u),d=n("../node_modules/react-redux/es/index.js"),h=n("./js/redux/reducerInjector.js"),f=r(h),S=n("./js/screens/treat/actions.js"),p=n("./js/screens/store/constants.js"),T=n("./js/screens/store/actions.js"),g=n("./js/screens/store/reducer.js"),m=n("./js/containers/app/reducer.js"),E=n("./js/screens/treat/reducer.js"),y=n("./js/screens/cart/reducer.js"),_=n("./js/util/util.js"),v=n("../node_modules/pcln-design-system/dist/index.js"),j=n("../node_modules/react-lazyload/lib/index.js"),R=(r(j),n("../node_modules/react-spinners/index.js"),n("./js/components/UI/molecules/index.js")),b=n("./js/containers/feed/index.js"),C=r(b),x=n("../node_modules/styled-components/dist/styled-components.browser.es.js"),F=r(x),A=(0,F.default)("div")(c),L=function(e){return l.default.createElement(v.Flex,{px:3,py:4,style:{position:"relative",zIndex:1e3,overflowY:"hidden"},flexDirection:"column"},l.default.createElement(v.Flex,{justify:"center",alignItems:"center"},l.default.createElement(v.Box,{width:[1,.9,.7]},l.default.createElement(v.Flex,{style:{width:"100%"}},l.default.createElement(v.Heading.h2,{fontSize:4,bold:!0,style:{flex:.999}},"Find Tasty Treats."),l.default.createElement(v.Flex,{style:{height:"40px"}},l.default.createElement(v.IconButton,{size:32,style:{marginTop:"-5px"},color:"#ccc",borderColor:"transparent",name:"close",onClick:e.onCloseButtonClick}))),l.default.createElement(v.Box,null,l.default.createElement(R.SearchBar,{id:"search",isSearchBarFocused:!0,onSearchBarChange:function(t){return e.onSearchBarChange(t)},style:{background:"#fff"},value:e.searchValue,hasSearchIcon:!1,mb:3,autoFocus:!0})),e.isLoadingSearchResults?l.default.createElement(v.Flex,{px:3,flexDirection:"column",justify:"center"},l.default.createElement(v.Flex,{flexDirection:"column",justify:"center",alignItems:"center"},l.default.createElement(v.Text,{align:"center",color:"gray",fontSize:2,mb:3,bold:!0},"Loading Search Results..."))):l.default.createElement(v.Flex,{flexDirection:"column",bg:"white"},l.default.createElement(v.Heading.h3,{mb:3,fontSize:2},"Results (",e.searchResults.length," found)"),l.default.createElement(C.default,{items:e.searchResults,showStore:!0})))),l.default.createElement(R.CheckoutBanner,{isVisible:e.isSearchBarFocused&&e.cartItems.length>0,onClick:function(t){return e.onCheckoutBannerClick(t)},bottom:"20px"}))},O=function(e){function t(e){a(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleSearchStateChange=n.handleSearchStateChange.bind(n),n.runSearchQuery=(0,_.debounce)(n.runSearchQuery.bind(n),2e3),n.onSearchBarChange=n.onSearchBarChange.bind(n),n.state={search:""},n}return s(t,e),i(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.onLoadStore,n=e.fetchTreats,r=e.setActiveStore,a=(e.setStoreTitle,e.setFetchedStoreFeedState),o=e.store,s=e.treat,i=e.match,c=e.app,u=i.params.id,l=s.currentTreatPage,d=s.activeTreat,h=o.stores;this.props.store.activeStore.id!==u&&r({id:u,stores:h}),c.url===i.url&&t(i.path),o.hasFetchedStoreFeed[u]||(n({page:void 0===l[u]?1:l[u],store_id:u,activeTreat:d}),a({store_id:u,hasFetchedStoreFeed:!0}))}},{key:"render",value:function(){var e=this,t=this.props.store,n=(t.title,t.html,t.buttons,t.search),r=t.activeStore,a=t.searchResults,o=t.isSearchFocused,s=t.isLoadingSearchResults,i=this.props.treat,c=i.treats,u=i.treatsCount,d=i.currentTreatPage,h=i.isLoadingTreats;return!this.props.app.isLoading&&l.default.createElement(v.Flex,{style:{minHeight:"100vh",marginBottom:this.props.cart.items.length>0?"140px":"70px"},my:4,className:"transition-item",flexDirection:"column",bg:"lightGray"},o&&l.default.createElement(A,null,l.default.createElement(L,{onCloseButtonClick:function(t){return e.props.onToggleSearchFocus({isSearchFocused:!o})},onCheckoutBannerClick:function(t){return e.props.history.push("/cart")},cartItems:this.props.cart.items,isSearchBarFocused:o,onSearchBarChange:this.onSearchBarChange,isLoadingSearchResults:s,searchResults:a,searchValue:n})),l.default.createElement(v.Flex,{justify:"center",alignItems:"center"},l.default.createElement(v.Box,{mt:3,px:3,width:[1,.9,.7,.7]},l.default.createElement(R.SearchBar,{id:"search",isSearchBarFocused:o,onSearchBarChange:function(t){return e.onSearchBarChange(t)},style:{background:"#fcfcfc"},value:n,onFocus:this.handleSearchStateChange}))),l.default.createElement(v.Flex,{justify:"center",alignItems:"center"},l.default.createElement(v.Box,{px:3,width:[1,.9,.7,.7]},l.default.createElement(v.Text,{bold:!0,color:"darkGray",fontSize:4,my:3},"Make your choices."),l.default.createElement(v.Box,null,l.default.createElement(v.Box,{mb:4},l.default.createElement(C.default,{items:void 0!==c&&c.length>0?this.getActiveStoreItems(c,Number(r.id)):[],itemsCount:u,isLoading:h,onFetchNextItems:function(){o||(e.props.setTreatsLoadingStatus({isLoadingTreats:!0}),e.props.fetchTreats({page:void 0===d[r.id]?1:d[r.id],store_id:r.id}))}}))))),l.default.createElement(R.CheckoutBanner,{isVisible:this.props.cart.items.length>0&&!o,onClick:function(t){return e.props.history.push("/cart")}}))}},{key:"getActiveStoreItems",value:function(e,t){var n=e.filter(function(e){return Number(e.store_id)===t})[0];return void 0!==n?n.items:[]}},{key:"handleSearchStateChange",value:function(){this.props.onToggleSearchFocus({isSearchFocused:!0})}},{key:"onSearchBarChange",value:function(e){this.props.store.isLoadingSearchResults||this.props.setSearchResultsLoadingState({isLoadingSearchResults:!0}),this.props.setSearch({search:e}),this.runSearchQuery(e)}},{key:"runSearchQuery",value:function(e){var t=e.trim();t.length>1?this.props.attemptSearchQuery({search:t}):this.props.setSearchResultsLoadingState({isLoadingSearchResults:!1})}}],[{key:"fetchData",value:function(e,t){var n=t.path;return e.dispatch((0,T.fetchStore)(n))}},{key:"getReducer",value:function(){return{key:p.REDUCER_NAME,reducer:g.storeReducer}}}]),t}(l.default.PureComponent),w=function(e){return{store:(0,g.getStoreState)(e).toJS(),app:(0,m.getAppState)(e).toJS(),cart:(0,y.getCartState)(e).toJS(),treat:(0,E.getTreatState)(e).toJS()}},B=function(e){return{onLoadStore:function(t){return e((0,T.fetchStore)(t))},onToggleSearchFocus:function(t){return e((0,T.toggleSearchFocus)(t))},fetchTreats:function(t){return e((0,S.fetchTreats)(t))},setTreatsLoadingStatus:function(t){return e((0,S.setTreatsLoadingStatus)(t))},attemptSearchQuery:function(t){return e((0,T.attemptSearchQuery)(t))},setSearch:function(t){return e((0,T.setSearch)(t))},setActiveStore:function(t){return e((0,T.setActiveStore)(t))},setStoreTitle:function(t){return e((0,T.setStoreTitle)(t))},setFetchedStoreFeedState:function(t){return e((0,T.setFetchedStoreFeedState)(t))},setSearchResultsLoadingState:function(t){return e((0,T.setSearchResultsLoadingState)(t))}}},k=(0,f.default)(p.REDUCER_NAME,g.storeReducer)(O);t.default=(0,d.connect)(w,B)(k)},"./js/screens/treat/actions.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setActiveTreat=t.onLoadTreat=t.setTreatsLoadingStatus=t.setTreats=t.setTreatTitle=t.fetchTreats=void 0;var r=n("./js/screens/treat/constants.js"),a=n("./js/containers/app/actions.js"),o=n("../service/service.js"),s=n("./js/services/ApiService/index.js"),i="https://instachaw.com"===window.location.origin?"https://api.instachaw.com":"http://localhost:3333",c=function(e){r.TREATS_ENDPOINT;return function(t){t(h({isLoadingTreats:!0}));var n=e.id?"/"+e.id:"?page="+e.page+"&store_id="+e.store_id,a="api/v1/items"+n;(0,s.sendRequest)({endpoint:i+"/"+a,method:"GET"}).then(function(n){void 0!==n&&null!==n&&(e.id?(t(f(n)),t(p(n.title)),t({type:r.SET_ACTIVE_TREAT,data:{treat:n}}),t(h({isLoadingTreats:!1}))):(t(S(void 0!==e.activeTreat?n.items.filter(function(t){return t.id!==e.activeTreat.id}):n.items,e.store_id)),t(d({treatsCount:n.itemsCount})),t(l({store_id:e.store_id,currentTreatPage:e.page+1}))),t(h({isLoadingTreats:!1})))}).catch(function(e){return console.log(e)})}},u=function(e){arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.TREATS_ENDPOINT;return function(t){var n=parseInt(e.id,10),a=e.treats.filter(function(e){return e.id===n})[0];t(p("Treat")),a?(t(p(a.title)),t({type:r.SET_ACTIVE_TREAT,data:{treat:a}})):t(c({id:n}))}},l=function(e){return{type:r.SET_CURRENT_TREATS_PAGE,data:e}},d=function(e){return{type:r.SET_TREATS_COUNT,data:e}},h=function(e){return{type:r.SET_TREATS_LOADING_STATUS,data:e}},f=function(e){return{type:r.SET_TREAT,data:e}},S=function(e,t){return{type:r.SET_TREATS,data:e,store_id:t}},p=function(e){return function(t){t((0,a.setMeta)({title:e})),t((0,a.setTitle)(e))}},T=function(e){return{type:r.SET_TREAT_PAGE,data:e}},g=function(e){return function(t){return t((0,a.isLoading)(!0)),(0,o.getPageData)(e).then(function(e){return t((0,a.setMeta)(e.meta)),t((0,a.setUrl)(e.url)),t((0,a.setTitle)(e.title)),e}).then(function(e){t((0,a.isLoading)(!1)),t(T(e))}).catch(function(e){throw console.error(e),e})}};t.fetchTreats=c,t.setTreatTitle=p,t.setTreats=S,t.setTreatsLoadingStatus=h,t.onLoadTreat=g,t.setActiveTreat=u}});