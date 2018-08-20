webpackJsonp([7],{"./js/screens/checkout/actions.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchCheckout=t.setCheckoutStatusModalVisibility=t.setCheckoutAttemptingStatus=t.setDeliveryAddress=t.setPaymentMode=t.setPaymentMethod=t.attemptOrderPlacement=void 0;var a=n("./js/screens/checkout/constants.js"),o=n("../service/service.js"),r=n("./js/services/ApiService/index.js"),l=n("./js/containers/app/actions.js"),i=n("./js/screens/account/actions.js"),c=(t.attemptOrderPlacement=function(e,t){return function(n){n(s({isAttemptingCheckout:!0})),(0,r.sendRequest)({endpoint:"http://localhost:3333/api/v1/orders",method:"POST",payload:JSON.stringify(e)}).then(function(e){void 0!==e&&null!==e?(n((0,i.addUserOrder)({order:e})),n(s({isAttemptingCheckout:!1})),t(e)):setTimeout(function(){n(s({isAttemptingCheckout:!1}))},1e3)}).catch(function(e){return console.log(e)})}},function(e){return{type:a.SET_CHECKOUT,data:e}}),s=(t.setPaymentMethod=function(e){return{type:a.SET_PAYMENT_METHOD,data:e}},t.setPaymentMode=function(e){return{type:a.SET_PAYMENT_MODE,data:e}},t.setDeliveryAddress=function(e){return{type:a.SET_DELIVERY_ADDRESS,data:e}},t.setCheckoutAttemptingStatus=function(e){return{type:a.SET_CHECKOUT_ATTEMPTING_STATUS,data:e}});t.setCheckoutStatusModalVisibility=function(e){return{type:a.SET_CHECKOUT_STATUS,data:e}},t.fetchCheckout=function(e){return function(t){return t((0,l.isLoading)(!0)),(0,o.getPageData)(e).then(function(e){return t((0,l.setMeta)(e.meta)),t((0,l.setUrl)(e.url)),t((0,l.setTitle)(e.title)),e}).then(function(e){t((0,l.isLoading)(!1)),t(c(e))}).catch(function(e){throw console.error(e),e})}}},"./js/screens/checkout/index.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d=c([""],[""]),m=c(["\n  background: #f5f5f5;\n  width: 100%;\n  height: 90vh;\n  border-radius: 4px;\n  display: flex;\n"],["\n  background: #f5f5f5;\n  width: 100%;\n  height: 90vh;\n  border-radius: 4px;\n  display: flex;\n"]),f=n("../node_modules/react/index.js"),p=a(f),h=n("../node_modules/prop-types/index.js"),y=a(h),E=n("../node_modules/react-redux/es/index.js"),b=n("../node_modules/react-spinners/index.js"),v=n("../node_modules/react-router-dom/es/index.js"),g=n("./js/redux/reducerInjector.js"),S=a(g),x=n("./js/screens/checkout/constants.js"),M=n("./js/screens/checkout/actions.js"),k=n("./js/screens/checkout/reducer.js"),P=n("./js/containers/app/reducer.js"),j=n("./js/containers/header/actions.js"),C=n("./js/containers/footer/actions.js"),T=n("./js/screens/cart/reducer.js"),D=n("./js/screens/account/actions.js"),A=n("./js/screens/account/reducer.js"),_=n("./js/screens/cart/actions.js"),w=n("../node_modules/pcln-design-system/dist/index.js"),F=n("./js/components/UI/atoms/index.js"),O=n("./js/containers/feed/index.js"),B=(a(O),n("../node_modules/styled-components/dist/styled-components.browser.es.js")),I=a(B),V=n("../node_modules/react-pose/lib/index.js"),z=a(V),L=(n("../node_modules/popmotion/dist/popmotion.es.js"),n("./js/util/util.js")),U=(0,I.default)(w.Card)(d),R=function(e){return p.default.createElement(w.Card,{borderWidth:1,bg:"white"},p.default.createElement(w.Box,{pt:2,pb:3,px:3},p.default.createElement(w.Flex,{mb:1},p.default.createElement(w.Flex,{style:{flex:4}},p.default.createElement(w.Text,{fontSize:1,bold:!0},"Address")),p.default.createElement(w.Flex,{onClick:e.onSummaryToggleClick},p.default.createElement(w.Flex,{flexDirection:"column",justify:"center"},p.default.createElement(w.Icon,{mr:1,size:12,name:"modeEdit",color:"blue"})),p.default.createElement(w.Flex,{flexDirection:"column",justify:"center"},p.default.createElement(w.Link,{onClick:function(t){t.preventDefault(),e.onSetLocationInputDisabled(!1)},mr:1,color:"blue",fontSize:0},p.default.createElement(w.Text,{fontSize:0},"Change Address"))))),p.default.createElement(w.Flex,null,p.default.createElement(w.Input,{id:"location",value:e.location,style:{backgroundColor:e.isLocationInputDisabled?"#eee":"#fff",color:"#999"},onFocus:function(e){return e.target.select()},onChange:function(t){return e.onLocationChange(t.target.value)},onBlur:function(t){return e.onSetLocationInputDisabled(!0)},color:"lightGray",disabled:e.isLocationInputDisabled}))))};R.propTypes={location:y.default.string,isLocationInputDisabled:y.default.bool},R.defaultProps={isLocationInputDisabled:!1};var W=function(e){return p.default.createElement(U,u({boxShadowSize:"md",bg:e.bg,px:1,py:2},e),p.default.createElement(w.Flex,{flexDirection:"column"},p.default.createElement(w.Flex,{justify:"center"},p.default.createElement(w.Icon,{color:e.color,size:20,name:e.icon})),p.default.createElement(w.Flex,{justify:"center"},p.default.createElement(w.Text,{fontSize:0,color:e.color},e.message))))};W.propTypes={actionIcon:y.default.string,color:y.default.string},W.defaultProps={actionIcon:"arrowRight",color:"gray",bg:"white"};var J=function(e){return p.default.createElement(w.Card,{bg:"lightGray"},p.default.createElement(w.Box,{pt:2,pb:3,px:3},p.default.createElement(w.Flex,{mb:1},p.default.createElement(w.Flex,{style:{flex:4}},p.default.createElement(w.Text,{fontSize:1,bold:!0},"Payment Method")),p.default.createElement(w.Flex,{onClick:e.onSummaryToggleClick},p.default.createElement(w.Flex,{flexDirection:"column",justify:"center"},p.default.createElement(w.Icon,{size:12,name:"swap",color:"blue"})),p.default.createElement(w.Flex,{flexDirection:"column",justify:"center"},p.default.createElement(w.Link,{onClick:function(t){t.preventDefault(),e.onSetActivePaymentMethod("naira"===e.activePaymentMethod?e.getValidWallet():"naira")},mr:1,color:"blue",fontSize:0},p.default.createElement(w.Text,{fontSize:0},"Switch Payment"))))),p.default.createElement(w.Flex,null,p.default.createElement(w.Flex,{width:.5,mb:1},p.default.createElement("label",{style:{width:"100%"}},p.default.createElement(W,{bg:"STEEM"===e.activePaymentMethod||"SBD"===e.activePaymentMethod?"blue":"white",icon:"STEEM"===e.activePaymentMethod||"SBD"===e.activePaymentMethod?"check":"creditCard",color:"STEEM"!==e.activePaymentMethod&&"SBD"!==e.activePaymentMethod?"blue":"white",message:("STEEM"===e.activePaymentMethod||"SBD"===e.activePaymentMethod?"Paying":"Pay")+" with STEEM/SBD",onClick:function(t){return e.onSetActivePaymentMethod(e.getValidWallet())}}),p.default.createElement("input",{type:"radio",name:"payment-method",value:"STEEM",style:{display:"none"}}))),p.default.createElement(w.Flex,{width:.5,mb:1},p.default.createElement("label",{style:{width:"100%"}},p.default.createElement(W,{bg:"naira"===e.activePaymentMethod?"blue":"white",icon:"naira"===e.activePaymentMethod?"check":"creditCard",color:"naira"!==e.activePaymentMethod?"blue":"white",onClick:function(t){return e.onSetActivePaymentMethod("naira")},message:("naira"===e.activePaymentMethod?"Paying":"Pay")+" with Cash"}),p.default.createElement("input",{type:"radio",name:"payment-method",value:"naira",style:{display:"none"}}))))))},N=function(e){return p.default.createElement(w.Card,{bg:"lightGray"},p.default.createElement(w.Box,{pt:2,pb:3,px:3},p.default.createElement(w.Box,{mb:1},p.default.createElement(w.Flex,{style:{flex:4}},p.default.createElement(w.Text,{fontSize:1,bold:!0},"Mode of Payment"))),p.default.createElement(w.Box,null,p.default.createElement(w.Label,{regular:!0,fontSize:"13px"},p.default.createElement(w.Flex,null,p.default.createElement(F.Radio,{value:"on-demand",id:"on-demand",name:"payment-mode",onChange:function(t){if("naira"===e.activePaymentMethod)return alert("Sorry, we only accept cash for pay on delivery at the moment.");e.onSetActivePaymentMode(t.target.value)},checked:"on-demand"===e.activePaymentMode}),p.default.createElement(w.Text,{ml:2},"Pay on demand (immediately)"))),p.default.createElement(w.Label,{htmlFor:"on-delivery",regular:!0,fontSize:"13px"},p.default.createElement(w.Flex,null,p.default.createElement(F.Radio,{value:"on-delivery",id:"on-delivery",name:"payment-mode",onChange:function(t){return e.onSetActivePaymentMode(t.target.value)},checked:"on-delivery"===e.activePaymentMode}),p.default.createElement(w.Text,{ml:2},"Pay on delivery (later)")))),p.default.createElement(w.Flex,null)))},H=function(e){return p.default.createElement(w.Flex,u({flexDirection:"column"},e),p.default.createElement(w.Text,{fontSize:2,bold:!0},"Complete Checkout"),p.default.createElement(w.Text,{fontSize:0,color:"gray",mb:3},"Just a last look at your info"),p.default.createElement(w.Box,{mb:3},p.default.createElement(R,e)),p.default.createElement(w.Box,{mb:3},p.default.createElement(J,e)),p.default.createElement(w.Box,{mb:3},p.default.createElement(N,e)))},q=z.default.div({fullscreen:{scale:1,transition:"tween"},idle:{scale:0,transition:"tween"}}),G=(0,I.default)(q)(m),Y=function(e){function t(e){r(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isSummaryMinimized:!0,paymentMethod:"STEEM",paymentMode:"on-demand",location:"Room 3, Vanessa Suite, Alaska",isLocationInputDisabled:!0,latestPlacementCode:""},n.setActivePaymentMethod=n.setActivePaymentMethod.bind(n),n.setActivePaymentMode=n.setActivePaymentMode.bind(n),n.handleCheckoutSubmit=n.handleCheckoutSubmit.bind(n),n}return i(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setHeaderVisibility,n=e.setFooterVisibility,a=e.onLoadCheckout,o=e.match;e.app.url!==o.url&&a(o.path),setTimeout(function(){t({isHeaderVisible:!1}),n({isFooterVisible:!1})},200)}},{key:"componentWillUnmount",value:function(){this.setActivePaymentMethod=null,this.setActivePaymentMode=null,this.handleCheckoutSubmit=null,this.props.setCheckoutStatusModalVisibility({isCheckoutStatusModalOpen:!1})}},{key:"render",value:function(){var e=this,t=this.props,n=t.cart,a=t.checkout;return n.items.length>0||a.isCheckoutStatusModalOpen?p.default.createElement(w.Flex,{mt:3,px:3,flexDirection:"column"},p.default.createElement(G,{pose:a.isCheckoutStatusModalOpen?"fullscreen":"idle",style:{display:a.isCheckoutStatusModalOpen?"block":"none"}},p.default.createElement(w.Flex,{p:2,flexDirection:"column",justify:"center",alignItems:"center",style:{height:"100%"}},p.default.createElement(w.Box,{mb:2},p.default.createElement(w.Text,{align:"center",fontSize:3,bold:!0},"Order Placed Successfully."),p.default.createElement(w.Text.p,{align:"center",fontSize:3},"You successfully placed an order with code  ",p.default.createElement("b",null,this.state.latestPlacementCode),".")),p.default.createElement(w.Flex,{justify:"center"},p.default.createElement(w.Button,{onClick:function(t){return e.props.history.push("/account/orders")}},"View Active Orders")))),p.default.createElement(w.Flex,{justify:"center",alignItems:"center"},p.default.createElement(w.Box,{width:[1,.9,.7,.7]},p.default.createElement(w.Flex,{style:{display:a.isCheckoutStatusModalOpen?"none":"block"}},p.default.createElement(H,{getValidWallet:function(){return e.getValidWallet()},location:this.props.checkout.deliveryAddress,onLocationChange:function(t){return e.props.setDeliveryAddress({deliveryAddress:t})},onSetLocationInputDisabled:function(t){return e.setState({isLocationInputDisabled:t})},isLocationInputDisabled:this.state.isLocationInputDisabled,onSetActivePaymentMethod:this.setActivePaymentMethod,onSetActivePaymentMode:this.setActivePaymentMode,activePaymentMethod:this.props.checkout.paymentMethod,activePaymentMode:this.props.checkout.paymentMode}),p.default.createElement(w.GreenButton,{disabled:this.props.checkout.isAttemptingCheckout||!this.isValidForm(),onClick:function(t){return e.handleCheckoutSubmit(t)},mb:4,fullWidth:!0},this.props.checkout.isAttemptingCheckout?p.default.createElement(b.SyncLoader,{color:"#f1f1f1",size:10,loading:!0}):p.default.createElement(w.Text,null,"Place Order")))))):p.default.createElement(w.Flex,{px:3,flexDirection:"column",justify:"center",style:{height:"80%",position:"absolute",width:"100%"}},p.default.createElement(w.Flex,{flexDirection:"column",justify:"center",alignItems:"center",style:{textAlign:"center"}},p.default.createElement(w.Text,{fontSize:4,mb:3,bold:!0},"Please fill me."),p.default.createElement(w.Text,{mb:3},"Add tons of delightful treats to your cart below."),p.default.createElement(w.Flex,{justify:"center",alignItems:"center"},p.default.createElement(F.OutlineButton,{onClick:function(t){return e.props.history.push("/")}},"See treats for your cart"))))}},{key:"isValidForm",value:function(){return this.props.checkout.deliveryAddress.length>1}},{key:"setActivePaymentMode",value:function(e){this.props.setPaymentMode({paymentMode:e})}},{key:"setActivePaymentMethod",value:function(e){this.props.setPaymentMethod({paymentMethod:e})}},{key:"getPaymentAmount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SBD",t=this.getPaymentTotal();return"SBD"===e?(0,L.roundToDecimalPlaces)(t/this.props.app.rates.SBD,3):(0,L.roundToDecimalPlaces)(t/this.props.app.rates.STEEM,3)}},{key:"getValidWallet",value:function(){return this.getWalletBalance("SBD")<this.getPaymentAmount("SBD")?"STEEM":"SBD"}},{key:"getWallet",value:function(e){return null!==this.props.account.user?this.props.account.user.wallets.filter(function(t){return t.title===e})[0]:null}},{key:"getWalletBalance",value:function(e){return null!==this.props.account.user?this.props.account.user.wallets.filter(function(t){return t.title===e})[0].balance:0}},{key:"getPaymentSubtotal",value:function(){return(0,L.roundToDecimalPlaces)(this.props.cart.items.reduce(function(e,t){return e+parseFloat(t.price)*parseInt(t.qty,10)},0))}},{key:"getPaymentVat",value:function(){return(0,L.roundToDecimalPlaces)(this.props.cart.items.reduce(function(e,t){return e+parseFloat(t.vat)*parseInt(t.qty,10)},0))}},{key:"getPaymentTotal",value:function(){return(0,L.roundToDecimalPlaces)(parseFloat(this.getPaymentSubtotal(),10)+parseFloat(this.getPaymentVat(),10))}},{key:"handleCheckoutSubmit",value:function(e){e.preventDefault();var t=this.getPaymentTotal(),n=1,a=this.props.checkout.paymentMethod;if("naira"!==a)switch(this.getValidWallet()){case"SBD":n=this.props.app.rates.SBD,a="SBD";break;case"STEEM":n=this.props.app.rates.STEEM,a="STEEM"}var r=Math.random().toFixed(36).replace(/[^0-9]+/g,"").substr(1,3)+"-"+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,3).toUpperCase(),l={user_id:this.props.account.user.id,total_amount:(0,L.roundToDecimalPlaces)(t/n,3),placement_code:r,delivery_address:this.props.checkout.deliveryAddress,payment_mode:this.props.checkout.paymentMode,rate:n,payment_method:a,items:this.props.cart.items.map(function(e){return{description:e.description,photo:e.photo,price:e.price,qty:e.qty,title:e.title,vat:e.vat,origin:e.origin,locale:e.locale,classification:e.classification,item_id:e.id}})},i=this.props.setCheckoutStatusModalVisibility,c=this;this.props.attemptOrderPlacement(l,function(e){var t=c.props.account.user,n=c.props.checkout,a=t.addresses,r=t.wallets,l=n.deliveryAddress;if(c.setState({latestPlacementCode:e.placement_code}),"on-demand"===c.props.checkout.paymentMode){var s=c.getWalletBalance(n.paymentMethod),d=s-Number(e.total_amount),m=u({},c.getWallet(n.paymentMethod),{balance:d});r=r.filter(function(e){return e.title!==m.title}),r=[].concat(o(r),[m]),localStorage.setItem("user",JSON.stringify(u({},t,{wallets:r}))),c.props.setUser({user:u({},t,{wallets:r})})}if(a.length>0){if(0===a.filter(function(e){return e.body===l}).length){var f={id:a.reduce(function(e,t){return Math.max(e,t.id)+1}),body:l,user_id:t.id};a=[].concat(o(a),[f]),localStorage.setItem("user",JSON.stringify(u({},t,{addresses:a}))),c.props.setUser({user:u({},t,{addresses:a})})}}else{var f={id:1,body:l,user_id:t.id};a=[].concat(o(a),[f]),localStorage.setItem("user",JSON.stringify(u({},t,{addresses:a}))),c.props.setUser({user:u({},t,{addresses:a})})}i({isCheckoutStatusModalOpen:!0}),c.props.clearCart()})}}],[{key:"fetchData",value:function(e,t){var n=t.path;return e.dispatch((0,M.fetchCheckout)(n))}},{key:"getReducer",value:function(){return{key:x.REDUCER_NAME,reducer:k.checkoutReducer}}}]),t}(p.default.PureComponent),K=function(e){return{app:(0,P.getAppState)(e).toJS(),cart:(0,T.getCartState)(e).toJS(),checkout:(0,k.getCheckoutState)(e).toJS(),account:(0,A.getAccountState)(e).toJS()}},Q=function(e){return{onLoadCheckout:function(t){return e((0,M.fetchCheckout)(t))},clearCart:function(t){return e((0,_.clearCart)())},setPaymentMethod:function(t){return e((0,M.setPaymentMethod)(t))},setPaymentMode:function(t){return e((0,M.setPaymentMode)(t))},setUser:function(t){return e((0,D.setUser)(t))},setDeliveryAddress:function(t){return e((0,M.setDeliveryAddress)(t))},setHeaderVisibility:function(t){return e((0,j.setHeaderVisibility)(t))},setFooterVisibility:function(t){return e((0,C.setFooterVisibility)(t))},attemptOrderPlacement:function(t,n){return e((0,M.attemptOrderPlacement)(t,n))},setCheckoutStatusModalVisibility:function(t){return e((0,M.setCheckoutStatusModalVisibility)(t))}}},X=(0,S.default)(x.REDUCER_NAME,k.checkoutReducer)(Y);t.default=(0,v.withRouter)((0,E.connect)(K,Q)(X))}});