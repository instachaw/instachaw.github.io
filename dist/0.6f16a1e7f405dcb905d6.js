webpackJsonp([0],{"./js/components/UI/ecosystems/BaseFundingModal.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("../node_modules/react/index.js"),s=a(o),i=n("../node_modules/prop-types/index.js"),r=a(i),l=n("../node_modules/pcln-design-system/dist/index.js"),u=n("./js/components/UI/atoms/index.js"),d=n("./js/components/UI/atoms/StyledModal.js"),c=n("./js/components/UI/molecules/index.js"),m=n("./js/components/UI/organisms/index.js"),f=n("./js/util/util.js"),p=function(e){return s.default.createElement(l.Flex,{p:2,flexDirection:"column",justify:"center",alignItems:"center",style:{height:"100%"}},s.default.createElement(u.CloseButton,{onClick:function(t){return e.onClose(t)}}),s.default.createElement(l.Flex,{justify:"center",alignItems:"center"},e.isAttemptingFunding?s.default.createElement(c.FundingConfirmationDisplay,null):s.default.createElement(m.BaseFundingForm,{paymentButtonText:"Pay Securely with "+("naira"===e.fundingMethod?"Paystack":"Steemconnect"),onFundingSubmit:function(t){return e.onFundingSubmit(t)},fundingMethod:e.fundingMethod,fundingMethodDisplayName:(0,f.toTitleCase)(e.fundingMethod),onSetFundingAmount:function(t){return e.onSetFundingAmount(t)},onSetFundingMethod:function(t){return e.onSetFundingMethod(t)},value:e.fundingAmount,isFundingInputFocused:e.isFundingModalOpen})))},y=function(e){return e.isFullscreenModal?s.default.createElement(d.StyledFullscreenModal,{pose:e.isFundingModalOpen?"fullscreen":"idle",style:{display:e.isFundingModalOpen?"block":"none"}},s.default.createElement(p,e)):s.default.createElement(u.StyledModal,{pose:e.isFundingModalOpen?"fullscreen":"idle",style:{display:e.isFundingModalOpen?"block":"none"}},s.default.createElement(p,e))};y.propTypes={isFundingModalOpen:r.default.bool,isFullscreenModal:r.default.bool},y.defaultProps={isFundingModalOpen:!1,isFullscreenModal:!1},t.default=y},"./js/components/UI/ecosystems/CartModal.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("../node_modules/react/index.js"),s=a(o),i=n("../node_modules/prop-types/index.js"),r=a(i),l=n("../node_modules/pcln-design-system/dist/index.js"),u=n("./js/components/UI/atoms/index.js"),d=n("./js/containers/feed/index.js"),c=a(d),m=function(e){return s.default.createElement(u.StyledModal,{pose:e.isCartModalOpen?"fullscreen":"idle",style:{display:e.isCartModalOpen?"block":"none"}},s.default.createElement(l.Flex,{alignItems:"center",justify:"center"},s.default.createElement(l.Flex,{p:2,flexDirection:"column",width:[1,.9,.7,.7]},s.default.createElement(l.Flex,{mb:2},s.default.createElement(l.Text,{fontSize:3,bold:!0,style:{flex:.999}},e.cartItems.length-1+" More",e.cartItems.length-1==1?" Treat":" Treats"),s.default.createElement(l.IconButton,{size:32,color:"#999",borderColor:"transparent",name:"close",onClick:function(t){return e.onSetCartModalStatus(!1)}})),s.default.createElement(l.Flex,{flexDirection:"column"},s.default.createElement(c.default,{items:e.cartItems,highlightSelectedItem:!1})))))};m.propTypes={isCartModalOpen:r.default.bool,cartItems:r.default.array},m.defaultProps={isCartModalOpen:!1,cartItems:[]},t.default=m},"./js/components/UI/ecosystems/CheckoutInfo.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=n("../node_modules/react/index.js"),s=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n("./js/components/UI/organisms/index.js"),r=n("../node_modules/pcln-design-system/dist/index.js"),l=function(e){return s.default.createElement(r.Flex,a({flexDirection:"column"},e),s.default.createElement(r.Text,{fontSize:2,mb:3,bold:!0},"Complete Checkout"),s.default.createElement(r.Box,{mb:3},s.default.createElement(i.AddressInputCard,e)),e.isUserAuthenticated?s.default.createElement(r.Box,null,s.default.createElement(r.Box,{mb:3},s.default.createElement(i.PaymentCard,e)),s.default.createElement(r.Box,{mb:3},s.default.createElement(i.PaymentModeCard,e))):s.default.createElement(r.Box,{mb:3},s.default.createElement(i.AuthCard,e)))};t.default=l},"./js/components/UI/ecosystems/PaystackFundingModal.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("../node_modules/react/index.js"),s=a(o),i=n("../node_modules/prop-types/index.js"),r=a(i),l=n("../node_modules/pcln-design-system/dist/index.js"),u=n("./js/components/UI/atoms/index.js"),d=n("./js/components/UI/atoms/StyledModal.js"),c=n("./js/components/UI/organisms/index.js"),m=n("./js/util/util.js"),f=function(e){return s.default.createElement(l.Flex,{p:2,flexDirection:"column",justify:"center",alignItems:"center",style:{height:"100%"}},s.default.createElement(u.CloseButton,{onClick:function(t){return e.onClose(t)}}),s.default.createElement(l.Flex,{justify:"center",alignItems:"center"},s.default.createElement(c.BaseFundingForm,{onFundingSubmit:function(t){return e.onFundingSubmit(t)},fundingMethod:e.fundingMethod,fundingMethodDisplayName:(0,m.toTitleCase)(e.fundingMethod),paymentButtonText:"Pay securely with Paystack",onSetFundingAmount:function(t){return e.onSetFundingAmount(t)},onSetFundingMethod:function(t){return e.onSetFundingMethod(t)},value:e.fundingAmount,isFundingInputFocused:e.isFundingModalOpen,isAttemptingFunding:e.isAttemptingFunding})))},p=function(e){return e.isFullscreenModal?s.default.createElement(d.StyledFullscreenModal,{pose:e.isFundingModalOpen?"fullscreen":"idle",style:{display:e.isFundingModalOpen?"block":"none"}},s.default.createElement(f,e)):s.default.createElement(u.StyledModal,{pose:e.isFundingModalOpen?"fullscreen":"idle",style:{display:e.isFundingModalOpen?"block":"none"}},s.default.createElement(f,e))};p.propTypes={isFundingModalOpen:r.default.bool,isFullscreenModal:r.default.bool},p.defaultProps={isFundingModalOpen:!1,isFullscreenModal:!1},t.default=p},"./js/components/UI/ecosystems/Summary.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=n("../node_modules/react/index.js"),i=a(s),r=n("../node_modules/prop-types/index.js"),l=a(r),u=n("../node_modules/pcln-design-system/dist/index.js"),d=n("./js/components/UI/molecules/index.js"),c=n("./js/util/util.js"),m=function(e){return i.default.createElement(u.Flex,o({flexDirection:"column"},e),i.default.createElement(d.CardHeading,{title:"Summary",onToggleClick:e.onSummaryToggleClick,isMinimized:e.isMinimized,expandLabel:"More Details",shrinkLabel:"Less Details"}),i.default.createElement(u.Flex,{flexDirection:"column",style:{height:e.isMinimized?0:"60px",overflowY:"hidden",transition:"height 0.3s ease-in-out"}},i.default.createElement(u.Flex,{mb:2},i.default.createElement(u.Text,{fontSize:1,regular:!0},"Subtotal"),i.default.createElement(u.Text,{color:"gray",ml:"auto",fontSize:1,regular:!0},e.subtotal)),i.default.createElement(u.Flex,{mb:3},i.default.createElement(u.Text,{fontSize:1,regular:!0},"VAT"),i.default.createElement(u.Text,{color:"gray",ml:"auto",fontSize:1,regular:!0},e.vat))),i.default.createElement(u.Flex,null,i.default.createElement(u.Text,{color:"gray",fontSize:1,bold:!0},"Total"),i.default.createElement(u.Text,{ml:"auto",fontSize:1,bold:!0},"naira"===e.paymentMethod&&"N",(0,c.roundToDecimalPlaces)(e.total),"naira"!==e.paymentMethod&&" "+e.paymentMethod)))};m.propTypes={isMinimized:l.default.bool,onSummaryToggleClick:l.default.func},m.defaultProps={isMinimized:!0},t.default=m},"./js/components/UI/ecosystems/index.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Summary=t.BaseFundingModal=t.CheckoutInfo=t.CartModal=void 0;var o=n("./js/components/UI/ecosystems/CartModal.js"),s=a(o),i=n("./js/components/UI/ecosystems/CheckoutInfo.js"),r=a(i),l=n("./js/components/UI/ecosystems/PaystackFundingModal.js"),u=(a(l),n("./js/components/UI/ecosystems/BaseFundingModal.js")),d=a(u),c=n("./js/components/UI/ecosystems/Summary.js"),m=a(c);t.CartModal=s.default,t.CheckoutInfo=r.default,t.BaseFundingModal=d.default,t.Summary=m.default},"./js/components/UI/organisms/AddressInputCard.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("../node_modules/react/index.js"),o=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n("../node_modules/pcln-design-system/dist/index.js"),i=n("./js/components/UI/atoms/index.js"),r=n("./js/components/UI/molecules/index.js"),l=function(e){return o.default.createElement(s.Card,{bg:"lightGray"},o.default.createElement(s.Box,{pt:2,pb:3,px:3},o.default.createElement(s.Flex,null,o.default.createElement(s.Flex,{style:{flex:4}},o.default.createElement(s.Text,{fontSize:2,bold:!0},"Add an Address"))),o.default.createElement(s.Flex,{mb:2},o.default.createElement(s.Text,{color:"gray",fontSize:0},"A correct address means faster delivery.")),o.default.createElement(s.Box,null,void 0!==e.userAddresses&&e.userAddresses.length>0?o.default.createElement(r.AutocompleteAddressInput,e):o.default.createElement(i.Input,{id:"address",style:{background:"#fff"},onFocus:function(e){return e.target.select()},autoFocus:!0,autocomplete:"on",placeholder:"Example: Room 2, Cali Villa, Alaska",value:e.currentDeliveryAddress,onChange:function(t){e.onSetDeliveryAddress(t.target.value)}}))))};t.default=l},"./js/components/UI/organisms/AuthCard.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("../node_modules/react/index.js"),o=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n("../node_modules/pcln-design-system/dist/index.js"),i=n("./js/components/UI/atoms/index.js"),r=(n("./js/components/UI/molecules/index.js"),function(e){return o.default.createElement(s.Card,{bg:"white",py:5},o.default.createElement(s.Flex,{flexDirection:"column"},o.default.createElement(s.Flex,{justify:"center",alignItems:"center"},o.default.createElement(s.Heading,{fontSize:2,bold:!0},"Login or Register to finish this.")),o.default.createElement(s.Flex,{py:2,justify:"center",alignItems:"center"},o.default.createElement(i.OutlineButton,{onClick:function(t){return e.history.push("/login")}},"Login to your account"))))});t.default=r},"./js/components/UI/organisms/BaseFundingForm.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("../node_modules/react/index.js"),o=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n("../node_modules/pcln-design-system/dist/index.js"),i=n("../node_modules/react-spinners/index.js"),r=n("./js/components/UI/atoms/index.js"),l=function(e){return o.default.createElement(s.Box,{width:[.8,.6,.5]},o.default.createElement("form",{method:"get",onSubmit:function(t){t.preventDefault(),e.onFundingSubmit(t)}},o.default.createElement(s.Flex,{flexDirection:"column",justify:"center",alignItems:"center"},o.default.createElement(s.Text,{fontSize:4,mb:3,style:{textAlign:"center"}},"Fund ",o.default.createElement("strong",null,e.fundingMethodDisplayName)," ",o.default.createElement("em",null,"Without Stress"),"."),o.default.createElement(s.Box,{mb:3},o.default.createElement(r.Label,{mb:1,fontSize:0},"Amount"),o.default.createElement(r.Input,{onChange:function(t){e.onSetFundingAmount({fundingAmount:Number(t.target.value)})},value:e.value,type:"number",id:"amount",min:0,step:"any",onFocus:function(e){return e.target.select()},autoFocus:e.isFundingInputFocused,style:{background:"#fff"}})),o.default.createElement(s.Box,{mb:3},o.default.createElement(s.Button,{disabled:e.isAttemptingFunding,type:"submit",fullWidth:!0,mb:1},e.isAttemptingFunding?o.default.createElement(i.SyncLoader,{color:"#f1f1f1",size:10,loading:!0}):o.default.createElement(s.Text,null,e.paymentButtonText)),e.isAttemptingFunding&&o.default.createElement(s.Text,{color:"gray",fontSize:0},"Going to PayStack's secure payment portal within 10s...")),"naira"!==e.fundingMethod&&o.default.createElement(s.Box,null,"STEEM"===e.fundingMethod?o.default.createElement(s.OutlineButton,{type:"button",onClick:function(t){return e.onSetFundingMethod({fundingMethod:"SBD"})},fullWidth:!0},"I'd rather add SBD"):o.default.createElement(s.OutlineButton,{type:"button",onClick:function(t){t.preventDefault(),e.onSetFundingMethod({fundingMethod:"STEEM"})},fullWidth:!0},"I'd rather add STEEM")))))};l.defaultProps={paymentButtonText:"Pay Securely with SteemConnect"},t.default=l},"./js/components/UI/organisms/CartEmptyState.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n("../node_modules/react/index.js"),s=a(o),i=n("../node_modules/prop-types/index.js"),r=(a(i),n("../node_modules/pcln-design-system/dist/index.js")),l=n("./js/components/UI/atoms/index.js"),u=function(e){return s.default.createElement(r.Flex,{px:3,flexDirection:"column",justify:"center",style:{height:"80%",position:"absolute",width:"100%"}},s.default.createElement(r.Flex,{flexDirection:"column",justify:"center",alignItems:"center",style:{textAlign:"center"}},s.default.createElement(r.Text,{fontSize:4,mb:3,bold:!0},"Please fill me."),s.default.createElement(r.Text,{mb:3},"Add tons of delightful treats to your cart below."),s.default.createElement(r.Flex,{justify:"center",alignItems:"center"},s.default.createElement(l.OutlineButton,{onClick:function(t){return e.onShowTreatsButtonClick(t)}},"See treats for your cart"))))};t.default=u},"./js/components/UI/organisms/PaymentCard.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("../node_modules/react/index.js"),o=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n("../node_modules/pcln-design-system/dist/index.js"),i=n("./js/components/UI/molecules/index.js"),r=n("./js/util/util.js"),l=function(e){var t=(0,r.roundToDecimalPlaces)(e.getWalletBalance("STEEM"),3),n=(0,r.roundToDecimalPlaces)(e.getWalletBalance("SBD"),3),a=(0,r.roundToDecimalPlaces)(e.getWalletBalance("naira"),3),l=e.rates.STEEM,u=e.rates.SBD,d=a>0,c=t>0,m=n>0;return o.default.createElement(s.Card,{bg:"lightGray"},o.default.createElement(s.Flex,{flexDirection:"column",pt:2,pb:3,px:3},o.default.createElement(i.CardHeading,{title:"Change Pay Method",onToggleClick:e.onPaymentToggleClick,isMinimized:e.isPaymentMinimized}),o.default.createElement(s.Box,{style:{height:e.isPaymentMinimized?"45px":"110px",overflowY:"hidden",transition:"height 0.3s ease-in-out"}},o.default.createElement(i.PaymentChoice,{choice:"naira",isActivePaymentMethod:"naira"===e.activePaymentMethod,message:"Pay N"+(0,r.roundToDecimalPlaces)(e.amount,3)+" Cash",onSetActivePaymentMethod:function(t){return e.onSetActivePaymentMethod("naira")}}),o.default.createElement(s.Text,{fontSize:0,color:"gray",mb:1,align:"center"},"or"),o.default.createElement(i.PaymentChoice,{choice:"STEEM",isActivePaymentMethod:"STEEM"===e.activePaymentMethod||"SBD"===e.activePaymentMethod,message:"Pay "+(0,r.roundToDecimalPlaces)(e.amount/l,3)+" STEEM or "+(0,r.roundToDecimalPlaces)(e.amount/u,3)+" SBD",onSetActivePaymentMethod:function(t){return e.onSetActivePaymentMethod("STEEM")}})),(c||m)&&o.default.createElement(s.Text,{color:"gray",fontSize:0,mb:1},o.default.createElement("b",null,c&&t+" STEEM "),c&&m&&"& ",o.default.createElement("b",null,m&&n+" SBD "),"available in wallet"),d&&o.default.createElement(s.Text,{color:"gray",fontSize:0},"You have ",o.default.createElement("b",null,d&&"NGN "+a," "),"available.")))};t.default=l},"./js/components/UI/organisms/PaymentModeCard.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("../node_modules/react/index.js"),o=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n("../node_modules/pcln-design-system/dist/index.js"),i=n("./js/components/UI/molecules/index.js"),r=n("./js/components/UI/atoms/index.js"),l=function(e){return o.default.createElement(s.Card,{bg:"lightGray"},o.default.createElement(s.Box,{pt:2,pb:3,px:3},o.default.createElement(i.CardHeading,{title:"Mode of Payment",onToggleClick:e.onPaymentModeToggleClick,isMinimized:e.isPaymentModeMinimized}),o.default.createElement(s.Box,{style:{height:e.isPaymentModeMinimized?"23px":"46px",overflow:"hidden",transition:"height 0.3s ease-in-out"}},o.default.createElement(r.Label,{regular:!0,fontSize:2},o.default.createElement(s.Flex,null,o.default.createElement(r.Radio,{value:"on-demand",id:"on-demand",name:"payment-mode",onChange:function(t){return e.onSetActivePaymentMode(t.target.value)},checked:"on-demand"===e.activePaymentMode}),o.default.createElement(s.Text,{ml:2},"Pay immediately (on demand)"))),o.default.createElement(r.Label,{htmlFor:"on-delivery",regular:!0,fontSize:2},o.default.createElement(s.Flex,null,o.default.createElement(r.Radio,{value:"on-delivery",id:"on-delivery",name:"payment-mode",onChange:function(t){return e.onSetActivePaymentMode(t.target.value)},checked:"on-delivery"===e.activePaymentMode}),o.default.createElement(s.Text,{ml:2},"Pay later (on delivery)")))),o.default.createElement(s.Flex,null)))};t.default=l},"./js/components/UI/organisms/index.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.BaseFundingForm=t.PaymentModeCard=t.PaymentCard=t.CartEmptyState=t.AddressInputCard=t.AuthCard=void 0;var o=n("./js/components/UI/organisms/AddressInputCard.js"),s=a(o),i=n("./js/components/UI/organisms/AuthCard.js"),r=a(i),l=n("./js/components/UI/organisms/CartEmptyState.js"),u=a(l),d=n("./js/components/UI/organisms/PaymentCard.js"),c=a(d),m=n("./js/components/UI/organisms/PaymentModeCard.js"),f=a(m),p=n("./js/components/UI/organisms/BaseFundingForm.js"),y=a(p);t.AuthCard=r.default,t.AddressInputCard=s.default,t.CartEmptyState=u.default,t.PaymentCard=c.default,t.PaymentModeCard=f.default,t.BaseFundingForm=y.default},"./js/screens/cart/index.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n("../node_modules/react/index.js"),u=a(l),d=n("../node_modules/prop-types/index.js"),c=(a(d),n("../node_modules/react-redux/es/index.js")),m=n("../node_modules/react-router-dom/es/index.js"),f=n("./js/redux/reducerInjector.js"),p=a(f),y=n("../node_modules/pcln-design-system/dist/index.js"),g=n("./js/components/UI/atoms/index.js"),h=(n("./js/components/UI/molecules/index.js"),n("./js/components/UI/organisms/index.js")),M=n("./js/components/UI/ecosystems/index.js"),j=n("./js/screens/cart/constants.js"),S=n("./js/screens/cart/actions.js"),E=n("./js/screens/account/actions.js"),v=n("./js/screens/checkout/actions.js"),x=n("./js/containers/header/actions.js"),F=n("./js/containers/footer/actions.js"),b=n("./js/containers/feed/index.js"),P=a(b),C=n("./js/containers/app/reducer.js"),T=n("./js/screens/cart/reducer.js"),A=n("./js/screens/account/reducer.js"),_=n("./js/screens/checkout/reducer.js"),I=n("./js/screens/store/reducer.js"),k=n("./js/services/AccountService/index.js"),O=a(k),D=n("./js/util/util.js"),B=function(e){function t(e){o(this,t);var n=s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isModalOpen:!1,isSummaryMinimized:!0,paymentMethod:"STEEM",paymentStatusInterval:null,isPaymentMinimized:!0,isPaymentModeMinimized:!0},n.setActivePaymentMethod=n.setActivePaymentMethod.bind(n),n.setActivePaymentMode=n.setActivePaymentMode.bind(n),n.setCurrentDeliveryAddress=n.setCurrentDeliveryAddress.bind(n),n.onFundingSubmit=n.onFundingSubmit.bind(n),n.onCartSubmit=n.onCartSubmit.bind(n),n}return i(t,e),r(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setHeaderVisibility,n=e.setFooterVisibility,a=e.onLoadCart,o=e.match,s=e.app;setTimeout(function(){t({isHeaderVisible:!1}),n({isFooterVisible:!1})},200),s.url!==o.url&&a(o.path)}},{key:"componentWillUnmount",value:function(){this.setActivePaymentMethod=null,this.setActivePaymentMode=null,this.setCurrentDeliveryAddress=null,this.paymentStatusInterval=clearInterval(this.paymentStatusInterval),this.onFundingSubmit=null,this.onCartSubmit=null}},{key:"render",value:function(){var e=this,t=this.getPaymentSubtotal(),n=this.props,a=n.account,o=n.cart,s=n.checkout,i=n.history,r=n.setFundingAmount,l=n.setFundingMethod,d=(n.setFundingModalStatus,s.paymentMethod),c=s.paymentMode,m=s.deliveryAddress,f=o.items,p=o.isCartModalOpen,j=a.fundingAmount,S=a.fundingMethod,E=a.isAttemptingFunding,v=a.isFundingModalOpen,x=a.user,F=isNaN(this.getPaymentVat())?0:this.getPaymentVat(),b=this.getTotal(d);return f.length?u.default.createElement(y.Flex,{flexDirection:"column"},u.default.createElement(M.CartModal,{isCartModalOpen:p,cartItems:f,onSetCartModalStatus:function(t){return e.props.setCartModalStatus(t)}}),v&&u.default.createElement(M.BaseFundingModal,{fundingAmount:j,fundingMethod:S,isAttemptingFunding:E,isFundingModalOpen:v,onFundingSubmit:function(t){return e.onFundingSubmit(t)},onSetFundingAmount:function(e){return r(e)},onSetFundingMethod:function(t){r({fundingAmount:e.getPaymentAmount(S)}),l(t)},onClose:function(t){e.props.setFundingModalStatus({isFundingModalOpen:!1}),e.props.setFundingAttemptingStatus({isAttemptingFunding:!1}),e.paymentStatusInterval&&(e.paymentStatusInterval=clearInterval(e.paymentStatusInterval))}}),u.default.createElement(y.Flex,{mt:3,px:3,flexDirection:"column"},u.default.createElement(y.Flex,{alignItems:"center",justify:"center"},u.default.createElement(y.Flex,{style:{display:p||v?"none":"block"},width:[1,.9,.7,.7]},u.default.createElement(y.Flex,{mb:3},u.default.createElement(y.Flex,{style:{flex:2}},u.default.createElement(y.Text,{fontSize:3,mr:2,bold:!0},"My Order"),u.default.createElement(y.Text,{regular:!0,color:"gray",mt:2,fontSize:0},"( ",f.length," ",1==f.length?"Item":"Items"," )")),u.default.createElement(y.Flex,{alignItems:"flex-end",mt:2},u.default.createElement(y.Link,{onClick:function(t){return confirm("Take this action?")&&e.props.clearCart()}},u.default.createElement(y.Text,{fontSize:0},"Clear Order")))),u.default.createElement(P.default,{items:[f[0]]}),f.length>1&&u.default.createElement(y.Flex,{mb:3},u.default.createElement(g.OutlineButton,{py:2,onClick:function(t){return e.props.setCartModalStatus(!0)},fullWidth:!0},"See ",f.length-1," more  ",2==f.length?"treat":"treats",".")),u.default.createElement(M.CheckoutInfo,{rates:this.props.app.rates,amount:this.getPaymentTotal(),history:i,isUserAuthenticated:null!==x,getWalletBalance:function(t){return e.getWalletBalance(t)},onSetDeliveryAddress:this.setCurrentDeliveryAddress,currentDeliveryAddress:m,onPaymentToggleClick:function(t){return e.setState({isPaymentMinimized:!e.state.isPaymentMinimized})},onPaymentModeToggleClick:function(t){return e.setState({isPaymentModeMinimized:!e.state.isPaymentModeMinimized})},isPaymentMinimized:this.state.isPaymentMinimized,isPaymentModeMinimized:this.state.isPaymentModeMinimized,onSetActivePaymentMethod:this.setActivePaymentMethod,onSetActivePaymentMode:this.setActivePaymentMode,activePaymentMethod:d,activePaymentMode:c,userAddresses:null!==x?x.addresses:[]}),u.default.createElement(M.Summary,{onSummaryToggleClick:function(t){return e.setState({isSummaryMinimized:!e.state.isSummaryMinimized})},isMinimized:this.state.isSummaryMinimized,total:b,subtotal:t,paymentMethod:d,vat:F,mb:2}),u.default.createElement(y.GreenButton,{disabled:!this.isValidForm(),onClick:function(t){return e.onCartSubmit(t)},mb:4,fullWidth:!0},"Complete Checkout"))))):u.default.createElement(h.CartEmptyState,{onShowTreatsButtonClick:function(t){i.push(void 0===e.props.store.activeStore.id?"/store/1":"/store/"+e.props.store.activeStore.id)}})}},{key:"setCurrentDeliveryAddress",value:function(e){this.props.setDeliveryAddress({deliveryAddress:e})}},{key:"setActivePaymentMethod",value:function(e){this.props.setPaymentMethod({paymentMethod:e}),this.selectPaymentMethodAction()}},{key:"setActivePaymentMode",value:function(e){this.props.setPaymentMode({paymentMode:e})}},{key:"getValidWallet",value:function(){return this.getWalletBalance("SBD")<this.getPaymentAmount("SBD")?"STEEM":"SBD"}},{key:"getTotal",value:function(e){var t=this.getPaymentTotal();return"naira"===e?t:this.getPaymentAmount(e)}},{key:"getWallet",value:function(e){return null!==this.props.account.user?this.props.account.user.wallets.filter(function(t){return t.title===e})[0]:null}},{key:"getWalletBalance",value:function(e){return null!==this.props.account.user?this.props.account.user.wallets.filter(function(t){return t.title===e})[0].balance:0}},{key:"getPaymentSubtotal",value:function(){return(0,D.roundToDecimalPlaces)(this.props.cart.items.reduce(function(e,t){return e+parseFloat(t.price)*parseInt(t.qty,10)},0))}},{key:"getPaymentVat",value:function(){return(0,D.roundToDecimalPlaces)(this.props.cart.items.reduce(function(e,t){return e+parseFloat(t.vat)*parseInt(t.qty,10)},0))}},{key:"getPaymentTotal",value:function(){var e=parseFloat(this.getPaymentVat(),10);return e=isNaN(e)?0:e,(0,D.roundToDecimalPlaces)(parseFloat(this.getPaymentSubtotal(),10)+e)}},{key:"getPaymentAmount",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"SBD",t=this.getPaymentTotal();return"SBD"===e?(0,D.roundToDecimalPlaces)(t/this.props.app.rates.SBD,3):(0,D.roundToDecimalPlaces)(t/this.props.app.rates.STEEM,3)}},{key:"selectPaymentMethodAction",value:function(){var e=this.getTotal();if("on-demand"===this.props.checkout.paymentMode)if("naira"===this.props.checkout.paymentMethod){if(this.getWalletBalance("naira")<this.getTotal("naira"))return this.props.setFundingAmount({fundingAmount:this.getTotal("naira")}),this.props.setFundingModalStatus({isFundingModalOpen:!0});alert("You're doing great so far. Just tap the checkout button.")}else if("STEEM"===this.props.checkout.paymentMethod){if(this.getWalletBalance("STEEM")<e&&(this.props.setPaymentMethod({paymentMethod:"SBD"}),this.getWalletBalance("SBD")<e))return this.props.setFundingAmount({fundingAmount:e}),this.props.setFundingModalStatus({isFundingModalOpen:!0})}else if(this.getWalletBalance("SBD")<e&&(this.props.setPaymentMethod({paymentMethod:"STEEM"}),this.getWalletBalance("STEEM")<e))return this.props.setFundingAmount({fundingAmount:e}),this.props.setFundingModalStatus({isFundingModalOpen:!0})}},{key:"onCartSubmit",value:function(e){this.selectPaymentMethodAction(),this.props.history.push("/checkout")}},{key:"onFundingSubmit",value:function(e){var t=this;e.preventDefault(),O.default.processFundingRequest({account:this.props.account,handleFetchTransactionToken:this.props.fetchTransactionToken,handleSetFundingAttemptingStatus:function(e){return t.props.setFundingAttemptingStatus(e)},handleSetTransactionsCount:function(e){return t.props.setTransactionsCount(e)},handleFetchTransactionsCount:function(e,n){return t.props.fetchTransactionsCount(e,n)},handlesSetUser:function(e){return t.props.setUser(e)},handleSetFundingModalStatus:function(e){return t.props.setFundingModalStatus(e)},handleSetupPaymentStatusInterval:function(e){t.state.paymentStatusInterval=setInterval(function(){e()},1e4)},handleTeardownPaymentStatusInterval:function(){t.state.paymentStatusInterval=clearInterval(t.state.paymentStatusInterval)}})}},{key:"getWalletBalance",value:function(e){return null!==this.props.account.user?this.props.account.user.wallets.filter(function(t){return t.title===e})[0].balance:0}},{key:"isValidForm",value:function(){return this.props.checkout.deliveryAddress.length>1&&null!==this.props.account.user}}],[{key:"fetchData",value:function(e,t){var n=t.path;return e.dispatch((0,S.fetchCart)(n))}},{key:"getReducer",value:function(){return{key:j.REDUCER_NAME,reducer:T.cartReducer}}}]),t}(u.default.PureComponent),U=function(e){var t=(0,A.getAccountState)(e).toJS();return{app:(0,C.getAppState)(e).toJS(),cart:(0,T.getCartState)(e).toJS(),store:(0,I.getStoreState)(e).toJS(),checkout:(0,_.getCheckoutState)(e).toJS(),account:t}},w=function(e){return{setHeaderVisibility:function(t){return e((0,x.setHeaderVisibility)(t))},setFooterVisibility:function(t){return e((0,F.setFooterVisibility)(t))},onLoadCart:function(t){return e((0,S.fetchCart)(t))},setCartModalStatus:function(t){return e((0,S.setCartModalStatus)(t))},setFundingModalStatus:function(t){return e((0,E.setFundingModalStatus)(t))},setFundingAmount:function(t){return e((0,E.setFundingAmount)(t))},setFundingMethod:function(t){return e((0,E.setFundingMethod)(t))},setPaymentMethod:function(t){return e((0,v.setPaymentMethod)(t))},setPaymentMode:function(t){return e((0,v.setPaymentMode)(t))},setFundingAttemptingStatus:function(t){return e((0,E.setFundingAttemptingStatus)(t))},fetchTransactionsCount:function(t,n){return e((0,E.fetchTransactionsCount)(t,n))},fetchTransactionToken:function(t){return e((0,E.fetchTransactionToken)(t))},setUser:function(t){return e((0,E.setUser)(t))},setTransactionsCount:function(t){return e((0,E.setTransactionsCount)(t))},setDeliveryAddress:function(t){return e((0,v.setDeliveryAddress)(t))},clearCart:function(t){return e((0,S.clearCart)())}}},z=(0,p.default)(j.REDUCER_NAME,T.cartReducer)(B);t.default=(0,m.withRouter)((0,c.connect)(U,w)(z))},"./js/screens/checkout/actions.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchCheckout=t.setCheckoutStatusModalVisibility=t.setCheckoutAttemptingStatus=t.setDeliveryAddress=t.setPaymentMode=t.setPaymentMethod=t.attemptOrderPlacement=void 0;var a=n("./js/screens/checkout/constants.js"),o=n("../service/service.js"),s=n("./js/services/ApiService/index.js"),i=n("./js/containers/app/actions.js"),r=n("./js/screens/account/actions.js"),l="https://instachaw.com"===window.location.origin?"https://api.instachaw.com":"http://localhost:3333",u=(t.attemptOrderPlacement=function(e,t){return function(n){n(d({isAttemptingCheckout:!0})),(0,s.sendRequest)({endpoint:l+"/api/v1/orders",method:"POST",payload:JSON.stringify(e)}).then(function(e){void 0!==e&&null!==e?(n((0,r.addUserOrder)({order:e})),n(d({isAttemptingCheckout:!1})),t(e)):setTimeout(function(){n(d({isAttemptingCheckout:!1}))},1e3)}).catch(function(e){return console.log(e)})}},function(e){return{type:a.SET_CHECKOUT,data:e}}),d=(t.setPaymentMethod=function(e){return{type:a.SET_PAYMENT_METHOD,data:e}},t.setPaymentMode=function(e){return{type:a.SET_PAYMENT_MODE,data:e}},t.setDeliveryAddress=function(e){return{type:a.SET_DELIVERY_ADDRESS,data:e}},t.setCheckoutAttemptingStatus=function(e){return{type:a.SET_CHECKOUT_ATTEMPTING_STATUS,data:e}});t.setCheckoutStatusModalVisibility=function(e){return{type:a.SET_CHECKOUT_STATUS,data:e}},t.fetchCheckout=function(e){return function(t){return t((0,i.isLoading)(!0)),(0,o.getPageData)(e).then(function(e){return t((0,i.setMeta)(e.meta)),t((0,i.setUrl)(e.url)),t((0,i.setTitle)(e.title)),e}).then(function(e){t((0,i.isLoading)(!1)),t(u(e))}).catch(function(e){throw console.error(e),e})}}},"./js/services/AccountService/index.js":function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("./js/util/util.js"),l="https://instachaw.com"===window.location.origin?"https://api.instachaw.com":"http://localhost:3333",u=function(){function e(){o(this,e)}return i(e,null,[{key:"processFundingRequest",value:function(e){var t=e.account,n=(e.onFetchTransactionToken,e.handleFetchTransactionToken),o=e.handleSetFundingAttemptingStatus,i=e.handleSetTransactionsCount,u=e.handleFetchTransactionsCount,d=e.handlesSetUser,c=e.handleSetFundingModalStatus,m=e.handleSetupPaymentStatusInterval,f=e.handleTeardownPaymentStatusInterval,p=t.fundingMethod,y=t.user,g=(t.transactionsCount,t.fundingAmount),h="https://steemconnect.com/sign/transfer?",M=g+" "+p;"naira"===p&&(h=l+"/initializeTransaction",M=g);var j=window.open("");return n(function(e,t){var n="Add "+g+" "+p+" to the account of "+y.username,S="amt="+g+"&wlt="+p+"&uid="+y.id+"&type=topup&memo="+n+"&tkn="+e,E=l+"/processTransaction?"+S,v="to=instachaw&amount="+M+"&memo="+n+"&redirect_uri="+E;"naira"===p&&(v="?ref="+(0,r.generateTransactionRef)()+"&"+S+"&email="+y.email),j.location=encodeURI((""+h+v).trim()),o({isAttemptingFunding:!0}),i({transactionsCount:t});var x=t;return setTimeout(function(){var e=0;console.log(g),m(function(){e+=1,e>9&&f(),u({userID:y.id},function(e){if(Number(x)<Number(e)){var t=y.wallets.filter(function(e){return e.title!==p}),n=y.wallets.filter(function(e){return e.title===p})[0];n.balance=n.balance+g,t=[].concat(a(t),[n]),localStorage.setItem("user",JSON.stringify(s({},y,{wallets:t}))),d({user:s({},y,{wallets:t})}),c({isFundingModalOpen:!1}),o({isAttemptingFunding:!1}),f()}})})},3e3)})}}]),e}();t.default=u}});