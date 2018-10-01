webpackJsonp([2],{"./js/components/UI/ecosystems/BaseFundingModal.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("../node_modules/react/index.js"),r=a(l),o=n("../node_modules/prop-types/index.js"),u=a(o),s=n("../node_modules/pcln-design-system/dist/index.js"),i=n("./js/components/UI/atoms/index.js"),c=n("./js/components/UI/atoms/StyledModal.js"),d=n("./js/components/UI/molecules/index.js"),m=n("./js/components/UI/organisms/index.js"),f=n("./js/util/util.js"),p=function(e){return r.default.createElement(s.Flex,{p:2,flexDirection:"column",justify:"center",alignItems:"center",style:{height:"100%"}},r.default.createElement(i.CloseButton,{onClick:function(t){return e.onClose(t)}}),r.default.createElement(s.Flex,{justify:"center",alignItems:"center"},e.isAttemptingFunding?r.default.createElement(d.FundingConfirmationDisplay,null):r.default.createElement(m.BaseFundingForm,{paymentButtonText:"Pay Securely with "+("naira"===e.fundingMethod?"Paystack":"Steemconnect"),onFundingSubmit:function(t){return e.onFundingSubmit(t)},fundingMethod:e.fundingMethod,fundingMethodDisplayName:(0,f.toTitleCase)(e.fundingMethod),onSetFundingAmount:function(t){return e.onSetFundingAmount(t)},onSetFundingMethod:function(t){return e.onSetFundingMethod(t)},value:e.fundingAmount,isFundingInputFocused:e.isFundingModalOpen})))},g=function(e){return e.isFullscreenModal?r.default.createElement(c.StyledFullscreenModal,{pose:e.isFundingModalOpen?"fullscreen":"idle",style:{display:e.isFundingModalOpen?"block":"none"}},r.default.createElement(p,e)):r.default.createElement(i.StyledModal,{pose:e.isFundingModalOpen?"fullscreen":"idle",style:{display:e.isFundingModalOpen?"block":"none"}},r.default.createElement(p,e))};g.propTypes={isFundingModalOpen:u.default.bool,isFullscreenModal:u.default.bool},g.defaultProps={isFundingModalOpen:!1,isFullscreenModal:!1},t.default=g},"./js/components/UI/ecosystems/CartModal.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("../node_modules/react/index.js"),r=a(l),o=n("../node_modules/prop-types/index.js"),u=a(o),s=n("../node_modules/pcln-design-system/dist/index.js"),i=n("./js/components/UI/atoms/index.js"),c=n("./js/containers/feed/index.js"),d=a(c),m=function(e){return r.default.createElement(i.StyledModal,{pose:e.isCartModalOpen?"fullscreen":"idle",style:{display:e.isCartModalOpen?"block":"none"}},r.default.createElement(s.Flex,{alignItems:"center",justify:"center"},r.default.createElement(s.Flex,{p:2,flexDirection:"column",width:[1,.9,.7,.7]},r.default.createElement(s.Flex,{mb:2},r.default.createElement(s.Text,{fontSize:3,bold:!0,style:{flex:.999}},e.cartItems.length-1+" More",e.cartItems.length-1==1?" Treat":" Treats"),r.default.createElement(s.IconButton,{size:32,color:"#999",borderColor:"transparent",name:"close",onClick:function(t){return e.onSetCartModalStatus(!1)}})),r.default.createElement(s.Flex,{flexDirection:"column"},r.default.createElement(d.default,{items:e.cartItems,highlightSelectedItem:!1})))))};m.propTypes={isCartModalOpen:u.default.bool,cartItems:u.default.array},m.defaultProps={isCartModalOpen:!1,cartItems:[]},t.default=m},"./js/components/UI/ecosystems/CheckoutInfo.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=n("../node_modules/react/index.js"),r=function(e){return e&&e.__esModule?e:{default:e}}(l),o=n("./js/components/UI/organisms/index.js"),u=n("../node_modules/pcln-design-system/dist/index.js"),s=function(e){return r.default.createElement(u.Flex,a({flexDirection:"column"},e),r.default.createElement(u.Heading,{fontSize:2,mb:1,bold:!0},"Complete Checkout"),r.default.createElement(u.Text,{fontSize:1,mb:3,color:"gray"},"Your last step. We promise."),r.default.createElement(u.Box,{mb:3},r.default.createElement(o.AddressInputCard,{userAddresses:e.userAddresses,address:e.address,isAddressEditable:e.isAddressEditable,isAddressInputDisabled:e.isAddressInputDisabled,onSetAddress:e.onSetAddress,onSetAddressInputDisabled:function(t){return e.onSetAddressInputDisabled(t)}})),e.isUserAuthenticated?r.default.createElement(u.Box,null,r.default.createElement(u.Box,{mb:3},r.default.createElement(o.PaymentCard,e)),r.default.createElement(u.Box,{mb:3},r.default.createElement(o.PaymentModeCard,e))):r.default.createElement(u.Box,{mb:3},r.default.createElement(o.AuthCard,e)))};t.default=s},"./js/components/UI/ecosystems/OrderSuccessModal.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("../node_modules/react/index.js"),r=a(l),o=n("../node_modules/prop-types/index.js"),u=(a(o),n("../node_modules/pcln-design-system/dist/index.js")),s=n("./js/components/UI/atoms/StyledModal.js"),i=a(s),c=function(e){return r.default.createElement(i.default,{pose:e.isModalOpen?"fullscreen":"idle",style:{display:e.isModalOpen?"block":"none"}},r.default.createElement(u.Flex,{p:2,flexDirection:"column",justify:"center",alignItems:"center",style:{height:"100%"}},r.default.createElement(u.Box,{mb:2},r.default.createElement(u.Text,{align:"center",fontSize:3,bold:!0},"Order Placed Successfully."),r.default.createElement(u.Text.p,{align:"center",fontSize:3},"You successfully placed an order with code  ",r.default.createElement("b",null,e.placementCode),".")),r.default.createElement(u.Flex,{justify:"center"},r.default.createElement(u.Button,{onClick:function(t){return e.onViewActiveOrders(t)}},"View Active Orders"))))};t.default=c},"./js/components/UI/ecosystems/Summary.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n("../node_modules/react/index.js"),o=a(r),u=n("../node_modules/prop-types/index.js"),s=a(u),i=n("../node_modules/pcln-design-system/dist/index.js"),c=n("./js/components/UI/molecules/index.js"),d=n("./js/util/util.js"),m=function(e){return o.default.createElement(i.Flex,l({flexDirection:"column"},e),o.default.createElement(c.CardHeading,{title:"Summary",onToggleClick:e.onSummaryToggleClick,isMinimized:e.isMinimized,expandLabel:"More Details",shrinkLabel:"Less Details"}),o.default.createElement(i.Flex,{flexDirection:"column",style:{height:e.isMinimized?0:"80px",overflowY:"hidden",transition:"height 0.3s ease-in-out"}},o.default.createElement(i.Flex,{mb:2},o.default.createElement(i.Text,{fontSize:1,regular:!0},"Subtotal"),o.default.createElement(i.Text,{color:"gray",ml:"auto",fontSize:1,regular:!0},e.subtotal)),o.default.createElement(i.Flex,{mb:2},o.default.createElement(i.Text,{fontSize:1,regular:!0},"VAT"),o.default.createElement(i.Text,{color:"gray",ml:"auto",fontSize:1,regular:!0},e.vat)),o.default.createElement(i.Flex,{mb:3},o.default.createElement(i.Text,{fontSize:1,regular:!0},"Service fee"),o.default.createElement(i.Text,{color:"gray",ml:"auto",fontSize:1,regular:!0},e.charge))),o.default.createElement(i.Flex,null,o.default.createElement(i.Text,{color:"gray",fontSize:1,bold:!0},"Total"),o.default.createElement(i.Text,{ml:"auto",fontSize:1,bold:!0},"naira"===e.paymentMethod&&"N",(0,d.roundToDecimalPlaces)(e.total),"naira"!==e.paymentMethod&&" "+e.paymentMethod)))};m.propTypes={isMinimized:s.default.bool,onSummaryToggleClick:s.default.func},m.defaultProps={isMinimized:!0},t.default=m},"./js/components/UI/ecosystems/index.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Summary=t.OrderSuccessModal=t.CheckoutInfo=t.CartModal=t.BaseFundingModal=void 0;var l=n("./js/components/UI/ecosystems/BaseFundingModal.js"),r=a(l),o=n("./js/components/UI/ecosystems/CartModal.js"),u=a(o),s=n("./js/components/UI/ecosystems/CheckoutInfo.js"),i=a(s),c=n("./js/components/UI/ecosystems/OrderSuccessModal.js"),d=a(c),m=n("./js/components/UI/ecosystems/Summary.js"),f=a(m);t.BaseFundingModal=r.default,t.CartModal=u.default,t.CheckoutInfo=i.default,t.OrderSuccessModal=d.default,t.Summary=f.default},"./js/components/UI/organisms/AddressInputCard.js":function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var l=n("../node_modules/react/index.js"),r=function(e){return e&&e.__esModule?e:{default:e}}(l),o=n("../node_modules/pcln-design-system/dist/index.js"),u=n("./js/components/UI/atoms/index.js"),s=n("./js/components/UI/molecules/index.js"),i=function(e){var t;return r.default.createElement(o.Card,{bg:"lightGray"},r.default.createElement(o.Box,{pt:2,pb:3,px:3},r.default.createElement(o.Flex,null,r.default.createElement(o.Flex,{style:{flex:4}},r.default.createElement(o.Text,{fontSize:2,bold:!0},e.cardTitle)),e.isAddressEditable&&r.default.createElement(o.Flex,{onClick:e.onSummaryToggleClick},r.default.createElement(o.Flex,{flexDirection:"column",justify:"center"},r.default.createElement(o.Icon,{mr:1,size:12,name:"modeEdit",color:"blue"})),r.default.createElement(o.Flex,{flexDirection:"column",justify:"center"},r.default.createElement(o.Link,{onClick:function(t){t.preventDefault(),e.onSetAddressInputDisabled(!1)},mr:1,color:"blue",fontSize:0},r.default.createElement(o.Text,{fontSize:0},"Change Address"))))),e.hasHint&&r.default.createElement(o.Flex,{mb:2},r.default.createElement(o.Text,{color:"gray",fontSize:0},"A correct address means faster delivery.")),e.userAddresses&&e.userAddresses.length>0?r.default.createElement(o.Box,null,r.default.createElement(s.AutocompleteAddressInput,e)):r.default.createElement(o.Box,null,r.default.createElement(u.Input,(t={id:"address",style:{background:"#fff"},onFocus:function(e){return e.target.select()},autoFocus:!0,autocomplete:"on",placeholder:"Example: Room 2, Cali Villa, Alaska",value:e.address,onChange:function(t){e.onSetAddress(t.target.value)}},a(t,"style",{backgroundColor:e.isAddressInputDisabled?"#eee":"#fff",color:"#999"}),a(t,"disabled",e.isAddressInputDisabled),a(t,"onBlur",function(t){return e.onSetAddressInputDisabled(!0)}),t)))))};i.defaultProps={hasHint:!0,isAddressEditable:!0,cardTitle:"Add an address"},t.default=i},"./js/components/UI/organisms/AuthCard.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("../node_modules/react/index.js"),l=function(e){return e&&e.__esModule?e:{default:e}}(a),r=n("../node_modules/pcln-design-system/dist/index.js"),o=n("./js/components/UI/atoms/index.js"),u=(n("./js/components/UI/molecules/index.js"),function(e){return l.default.createElement(r.Card,{bg:"white",py:5},l.default.createElement(r.Flex,{flexDirection:"column"},l.default.createElement(r.Flex,{justify:"center",alignItems:"center"},l.default.createElement(r.Heading,{fontSize:2,bold:!0},"Login or Register to finish this.")),l.default.createElement(r.Flex,{py:2,justify:"center",alignItems:"center"},l.default.createElement(o.OutlineButton,{onClick:function(t){return e.history.push("/login")}},"Login to your account"))))});t.default=u},"./js/components/UI/organisms/BaseFundingForm.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("../node_modules/react/index.js"),l=function(e){return e&&e.__esModule?e:{default:e}}(a),r=n("../node_modules/pcln-design-system/dist/index.js"),o=n("../node_modules/react-spinners/index.js"),u=n("./js/components/UI/atoms/index.js"),s=function(e){return l.default.createElement(r.Box,{width:[.8,.6,.5]},l.default.createElement("form",{method:"get",onSubmit:function(t){t.preventDefault(),e.onFundingSubmit(t)}},l.default.createElement(r.Flex,{flexDirection:"column",justify:"center",alignItems:"center"},l.default.createElement(r.Text,{fontSize:4,mb:3,style:{textAlign:"center"}},"Fund ",l.default.createElement("strong",null,e.fundingMethodDisplayName)," ",l.default.createElement("em",null,"Without Stress"),"."),l.default.createElement(r.Box,{mb:3},l.default.createElement(u.Label,{mb:1,fontSize:0},"Amount"),l.default.createElement(u.Input,{onChange:function(t){e.onSetFundingAmount({fundingAmount:Number(t.target.value)})},value:e.value,type:"number",id:"amount",min:0,step:"any",onFocus:function(e){return e.target.select()},autoFocus:e.isFundingInputFocused,style:{background:"#fff"}})),l.default.createElement(r.Box,{mb:3},l.default.createElement(r.Button,{disabled:e.isAttemptingFunding,type:"submit",fullWidth:!0,mb:1},e.isAttemptingFunding?l.default.createElement(o.SyncLoader,{color:"#f1f1f1",size:10,loading:!0}):l.default.createElement(r.Text,null,e.paymentButtonText)),e.isAttemptingFunding&&l.default.createElement(r.Text,{color:"gray",fontSize:0},"Going to PayStack's secure payment portal within 10s...")))))};s.defaultProps={paymentButtonText:"Pay Securely with SteemConnect"},t.default=s},"./js/components/UI/organisms/CartEmptyState.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=n("../node_modules/react/index.js"),r=a(l),o=n("../node_modules/prop-types/index.js"),u=(a(o),n("../node_modules/pcln-design-system/dist/index.js")),s=n("./js/components/UI/atoms/index.js"),i=function(e){return r.default.createElement(u.Flex,{px:3,flexDirection:"column",justify:"center",style:{height:"80%",position:"absolute",width:"100%"}},r.default.createElement(u.Flex,{flexDirection:"column",justify:"center",alignItems:"center",style:{textAlign:"center"}},r.default.createElement(u.Text,{fontSize:4,mb:3,bold:!0},"Please fill me."),r.default.createElement(u.Text,{mb:3},"Add tons of delightful treats to your cart below."),r.default.createElement(u.Flex,{justify:"center",alignItems:"center"},r.default.createElement(s.OutlineButton,{onClick:function(t){return e.onShowTreatsButtonClick(t)}},"See treats for your cart"))))};t.default=i},"./js/components/UI/organisms/PaymentCard.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("../node_modules/react/index.js"),l=function(e){return e&&e.__esModule?e:{default:e}}(a),r=n("../node_modules/pcln-design-system/dist/index.js"),o=n("./js/components/UI/molecules/index.js"),u=n("./js/util/util.js"),s=function(e){var t=(0,u.roundToDecimalPlaces)(e.getWalletBalance("STEEM"),3),n=(0,u.roundToDecimalPlaces)(e.getWalletBalance("SBD"),3),a=(0,u.roundToDecimalPlaces)(e.getWalletBalance("naira"),3),s=e.rates.STEEM,i=e.rates.SBD,c=a>0,d=t>0,m=n>0;return l.default.createElement(r.Card,{bg:"lightGray"},l.default.createElement(r.Flex,{flexDirection:"column",pt:2,pb:3,px:3},l.default.createElement(o.CardHeading,{title:"Change Pay Method",onToggleClick:e.onPaymentToggleClick,isMinimized:e.isPaymentMinimized}),l.default.createElement(r.Box,{style:{height:e.isPaymentMinimized?"45px":"140px",overflowY:"hidden",transition:"height 0.3s ease-in-out"}},l.default.createElement(o.PaymentChoice,{choice:"naira",isActivePaymentMethod:"naira"===e.activePaymentMethod,message:"Pay N"+(0,u.roundToDecimalPlaces)(e.amount,3)+" "+("on-demand"===e.activePaymentMode?"online":"cash"),onSetActivePaymentMethod:function(t){return e.onSetActivePaymentMethod("naira")}}),l.default.createElement(o.PaymentChoice,{choice:"STEEM",isActivePaymentMethod:"STEEM"===e.activePaymentMethod,message:"Pay "+(0,u.roundToDecimalPlaces)(e.amount/s,3)+" STEEM",onSetActivePaymentMethod:function(t){return e.onSetActivePaymentMethod("STEEM")}}),l.default.createElement(o.PaymentChoice,{choice:"SBD",isActivePaymentMethod:"SBD"===e.activePaymentMethod,message:"Pay "+(0,u.roundToDecimalPlaces)(e.amount/i,3)+" SBD",onSetActivePaymentMethod:function(t){return e.onSetActivePaymentMethod("SBD")}})),(d||m)&&l.default.createElement(r.Text,{color:"gray",fontSize:0,mb:1},l.default.createElement("b",null,d&&t+" STEEM "),d&&m&&"& ",l.default.createElement("b",null,m&&n+" SBD "),"available in wallet"),c&&l.default.createElement(r.Text,{color:"gray",fontSize:0},"You have ",l.default.createElement("b",null,c&&"NGN "+a," "),"available.")))};t.default=s},"./js/components/UI/organisms/PaymentModeCard.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("../node_modules/react/index.js"),l=function(e){return e&&e.__esModule?e:{default:e}}(a),r=n("../node_modules/pcln-design-system/dist/index.js"),o=n("./js/components/UI/molecules/index.js"),u=n("./js/components/UI/atoms/index.js"),s=function(e){return l.default.createElement(r.Card,{bg:"lightGray"},l.default.createElement(r.Box,{pt:2,pb:3,px:3},l.default.createElement(o.CardHeading,{title:"Payment Mode",onToggleClick:e.onPaymentModeToggleClick,isMinimized:e.isPaymentModeMinimized}),l.default.createElement(r.Box,{style:{height:e.isPaymentModeMinimized?"23px":"65px",overflow:"hidden",transition:"height 0.3s ease-in-out"}},l.default.createElement(u.Label,{regular:!0,fontSize:2},l.default.createElement(r.Flex,null,l.default.createElement(u.Radio,{value:"on-demand",id:"on-demand",name:"payment-mode",onChange:function(t){return e.onSetActivePaymentMode(t.target.value)},checked:"on-demand"===e.activePaymentMode}),l.default.createElement(r.Text,{ml:2},"Pay immediately (on demand)"))),l.default.createElement(u.Label,{htmlFor:"on-delivery",regular:!0,fontSize:2},l.default.createElement(r.Flex,null,l.default.createElement(u.Radio,{value:"on-delivery",id:"on-delivery",name:"payment-mode",onChange:function(t){return e.onSetActivePaymentMode(t.target.value)},checked:"on-delivery"===e.activePaymentMode}),l.default.createElement(r.Text,{ml:2},"Pay later (on delivery)")))),l.default.createElement(r.Flex,null)))};t.default=s},"./js/components/UI/organisms/PlacesList.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=n("../node_modules/react/index.js"),r=function(e){return e&&e.__esModule?e:{default:e}}(l),o=n("../node_modules/pcln-design-system/dist/index.js"),u=n("./js/components/UI/molecules/index.js"),s=function(e){var t=e.places.filter(function(t){return t.toLowerCase().includes(e.value.toLowerCase())});return e.onPlacesListSuggestionUpdate(1===t.length?t[0]:""),r.default.createElement(o.Card,a({bg:"white"},e),r.default.createElement(o.Box,null,t.length>0&&t.map(function(n,a){return r.default.createElement(o.Box,{key:a},r.default.createElement(u.ActionStrip,{bg:1===t.length?"blue":"white",color:1!==t.length?"blue":"white",boxShadowSize:"sm",icon:"mapPin",iconSize:16,message:n,actionIcon:"chevronRight",actionIconSize:14,style:{boxShadow:0},onClick:function(t){return e.onPlacesListSelect(n)}}))})))};s.defaultProps={places:[]},t.default=s},"./js/components/UI/organisms/index.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.BaseFundingForm=t.PaymentModeCard=t.PlacesList=t.PaymentCard=t.CartEmptyState=t.AddressInputCard=t.AuthCard=void 0;var l=n("./js/components/UI/organisms/AddressInputCard.js"),r=a(l),o=n("./js/components/UI/organisms/AuthCard.js"),u=a(o),s=n("./js/components/UI/organisms/CartEmptyState.js"),i=a(s),c=n("./js/components/UI/organisms/PaymentCard.js"),d=a(c),m=n("./js/components/UI/organisms/PaymentModeCard.js"),f=a(m),p=n("./js/components/UI/organisms/PlacesList.js"),g=a(p),y=n("./js/components/UI/organisms/BaseFundingForm.js"),h=a(y);t.AuthCard=u.default,t.AddressInputCard=r.default,t.CartEmptyState=i.default,t.PaymentCard=d.default,t.PlacesList=g.default,t.PaymentModeCard=f.default,t.BaseFundingForm=h.default},"./js/screens/account/index.js":function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n("../node_modules/react/index.js"),c=a(i),d=n("../node_modules/react-redux/es/index.js"),m=n("../node_modules/react-router/es/index.js"),f=n("./js/redux/reducerInjector.js"),p=a(f),g=n("../node_modules/react-router-dom/es/index.js"),y=n("./js/screens/account/constants.js"),h=n("./js/screens/account/actions.js"),x=n("./js/screens/account/reducer.js"),j=(n("./js/containers/app/reducer.js"),n("./js/containers/app/actions.js")),E=n("./js/screens/account/reducer.js"),b=n("../node_modules/pcln-design-system/dist/index.js"),v=n("./js/containers/feed/index.js"),S=(a(v),n("./js/components/UI/molecules/index.js")),M=n("./js/components/UI/ecosystems/index.js"),F=n("./js/services/AccountService/index.js"),I=a(F),C=n("./js/services/UserService/index.js"),T=a(C),P=n("./js/util/util.js"),_=[{id:1,title:"Delighted to see you!",body:"Hi, we are delighted to serve you.\n      Make a selection of your favorite meals and we'll hand them over within 15 minutes.",isUnread:!0}],A=function(e){return c.default.createElement(b.Flex,{flexDirection:"column",width:"100%"},c.default.createElement(b.Flex,{flexDirection:"column",width:"100%",py:3,px:4,style:{display:e.account.isFundingModalOpen?"none":"block"}},c.default.createElement(b.Flex,{alignItems:"center",justify:"center"},c.default.createElement(b.Box,{width:[1,.9,.7,.7]},c.default.createElement(b.Heading.h3,{mb:2,bold:!0},"My Account."),c.default.createElement(b.Flex,{justify:"center",alignItems:"center"},c.default.createElement(b.Flex,null,c.default.createElement(b.Flex,{flexDirection:"column",mb:1,mr:4},c.default.createElement(b.Text,{align:"center",fontSize:4,color:"blue"},(0,P.roundToDecimalPlaces)(e.getWalletBalance("STEEM"),3)),c.default.createElement(b.Text,{style:{textAlign:"center"},color:"gray",fontSize:1},"STEEM")),c.default.createElement(b.Flex,{flexDirection:"column",mb:1,mr:4},c.default.createElement(b.Text,{align:"center",fontSize:4,color:"blue"},(0,P.roundToDecimalPlaces)(e.getWalletBalance("SBD"),3)),c.default.createElement(b.Text,{style:{textAlign:"center"},color:"gray",fontSize:1},"SBD")),c.default.createElement(b.Flex,{flexDirection:"column",mb:1,mr:4},c.default.createElement(b.Text,{align:"center",fontSize:4,color:"green"},(0,P.roundToDecimalPlaces)(e.getWalletBalance("naira"),3)),c.default.createElement(b.Text,{style:{textAlign:"center"},color:"gray",fontSize:1},"Naira")),c.default.createElement(b.Flex,{flexDirection:"column",mb:1},c.default.createElement(b.Text,{align:"center",fontSize:4,color:"gray"},e.account.orders.length),c.default.createElement(b.Text,{style:{textAlign:"center"},color:"gray",fontSize:1},"Orders")))),c.default.createElement(b.Flex,{flexDirection:"column",mt:2,mb:3},c.default.createElement(b.Text,{mb:3},c.default.createElement(b.Flex,{justify:"center"},c.default.createElement(b.Text,null,"Running low on "),c.default.createElement(b.Text,{color:"blue",bold:!0},"STEEM"),c.default.createElement(b.Text,null,"?"))),c.default.createElement(b.Button,{onClick:function(t){e.setFundingMethod({fundingMethod:"naira"}),e.setFundingModalStatus({isFundingModalOpen:!0})},mb:2},"Add cash (NGN) easily"),c.default.createElement(b.OutlineButton,{onClick:function(t){e.setFundingMethod({fundingMethod:"naira"===e.account.fundingMethod?"SBD":e.account.fundingMethod}),e.setFundingModalStatus({isFundingModalOpen:!0})}},"Add SBD/STEEM painlessly"))))),e.account.isFundingModalOpen&&c.default.createElement(M.BaseFundingModal,{fundingAmount:e.account.fundingAmount,fundingMethod:e.account.fundingMethod,isAttemptingFunding:e.account.isAttemptingFunding,isFundingModalOpen:e.account.isFundingModalOpen,isFullscreenModal:!0,onFundingSubmit:function(t){return e.onFundingSubmit(t)},onSetFundingAmount:function(t){return e.setFundingAmount(t)},onSetFundingMethod:function(t){e.setFundingAmount({fundingAmount:(void 0).getPaymentAmount(fundingMethod)}),e.setFundingMethod(t)},onClose:function(t){e.setFundingModalStatus({isFundingModalOpen:!1}),e.setFundingAttemptingStatus({isAttemptingFunding:!1}),e.clearPaymentInterval}}))},O=function(){return c.default.createElement(b.Flex,{width:1,alignItems:"center",justify:"center"},c.default.createElement(b.Box,{width:[1,.9,.7]},c.default.createElement(b.Box,{py:3,px:4},c.default.createElement(b.Heading.h3,{bold:!0,mb:4},"Just In."),c.default.createElement(S.NotificationFeed,{notifications:_}))))},w=function(e){var t=e.account.orders.length>0?e.account.orders:[],n=t.filter(function(e){return null===e.deleted_at&&null===e.confirmed_at}),a=t.filter(function(e){return null===e.deleted_at&&null!==e.confirmed_at}),l=t.filter(function(e){return null!==e.deleted_at&&null===e.confirmed_at});return c.default.createElement(b.Flex,{width:1,alignItems:"center",justify:"center"},c.default.createElement(b.Box,{width:[1,.9,.7]},n.length>0&&c.default.createElement(b.Box,{mb:3,py:3,px:4},c.default.createElement(b.Heading.h3,{mb:2,bold:!0},"Orders On the Way."),c.default.createElement(S.OrdersFeed,{onCancelOrder:e.onCancelOrder,orders:n,isOrderCancellable:!0})),a.length>0&&c.default.createElement(b.Box,{mb:3,py:3,px:4},c.default.createElement(b.Heading.h4,{mb:2,bold:!0},"Orders You Received."),c.default.createElement(S.OrdersFeed,{onCancelOrder:e.onCancelOrder,orders:a,isOrderCancellable:!1})),l.length>0&&c.default.createElement(b.Box,{py:1,px:4},c.default.createElement(b.Heading.h5,{mb:2,bold:!0},"Orders You Cancelled."),c.default.createElement(S.OrdersFeed,{onCancelOrder:e.onCancelOrder,orders:l,isOrderCancellable:!1}))))},k=[{name:"account",label:"Account",path:"/account",component:function(e){return c.default.createElement(A,e)}},{name:"notifications",label:"Notifications",path:"/account/notifications",component:function(e){return c.default.createElement(O,e)}},{name:"orders",label:"Orders",path:"/account/orders",component:function(e){return c.default.createElement(w,e)}}],B=function(e,t){return k.filter(function(t){return t.path===e})[0].component(t)},D=function(e){function t(e){l(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isModalOpen:!1,paymentStatusInterval:null},n.onFundingSubmit=n.onFundingSubmit.bind(n),n.onCancelOrder=n.onCancelOrder.bind(n),n.paymentStatusInterval="",n}return o(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.props,t=(e.onLoadAccount,e.match),n=(e.app,e.account,e.setTitle),a=e.history;e.fetchTransactionsCount;(0,e.fetchOrders)();var l=t.url.split("/"),r=(0,P.toTitleCase)(l[l.length-1]);n({title:r}),a.listen(function(e){var t=e.pathname.split("/"),a=(0,P.toTitleCase)(t[t.length-1]);n({title:a})})}},{key:"componentWillUnmount",value:function(){this.onPaymentSubmit=null,this.onCancelOrder=null,this.state.paymentStatusInterval&&(this.state.paymentStatusInterval=clearInterval(this.state.paymentStatusInterval))}},{key:"render",value:function(){var e=this;return c.default.createElement(b.Flex,{mt:4,mb:5,flexDirection:"column"},c.default.createElement(b.Flex,{bg:"darkGray",flexDirection:"column",style:{minHeight:"27vh"},align:"center",justify:"center"},c.default.createElement(b.Heading.h4,{color:"lightGray"},"Hello, ",this.props.account.user.username,".")),c.default.createElement(b.Flex,{justify:"center",alignItems:"center"},c.default.createElement(b.Flex,{p:2,flexDirection:"row",width:[1,.9,.7,.7]},c.default.createElement(S.TabBar,{activeTabPath:this.props.match.url,bg:"lightGray",tabItems:k}))),c.default.createElement(b.Flex,null,c.default.createElement(m.Route,{path:this.props.match.path+"/:tab?",render:function(t){return B(e.props.match.url,u({},e.props,{onFundingSubmit:e.onFundingSubmit,onCancelOrder:e.onCancelOrder,clearPaymentInterval:e.clearPaymentInterval,payWithPayStack:e.payWithPayStack}))}})))}},{key:"onFundingSubmit",value:function(e){var t=this;e.preventDefault();var n=this.props,a=n.account,l=n.fetchTransactionToken,r=n.setFundingAttemptingStatus,o=n.setTransactionsCount,u=n.fetchTransactionsCount,s=n.setUser,i=n.setFundingModalStatus;"naira"===a.fundingMethod?I.default.processFundingRequest({account:a,handleFetchTransactionToken:l,handleSetFundingAttemptingStatus:function(e){return r(e)},handleSetTransactionsCount:function(e){return o(e)},handleFetchTransactionsCount:function(e,t){return u(e,t)},handlesSetUser:function(e){return s(e)},handleSetFundingModalStatus:function(e){return i(e)},handleSetupPaymentStatusInterval:function(e){t.state.paymentStatusInterval=setInterval(function(){e()},2e4)},handleTeardownPaymentStatusInterval:function(){return t.clearPaymentInterval()}}):I.default.processFundingRequest({account:a,handleFetchTransactionToken:l,handleSetFundingAttemptingStatus:function(e){return r(e)},handleSetTransactionsCount:function(e){return o(e)},handleFetchTransactionsCount:function(e,t){return u(e,t)},handlesSetUser:function(e){return s(e)},handleSetFundingModalStatus:function(e){return i(e)},handleSetupPaymentStatusInterval:function(e){t.state.paymentStatusInterval=setInterval(function(){e()},1e4)},handleTeardownPaymentStatusInterval:function(){return t.clearPaymentInterval()}})}},{key:"clearPaymentInterval",value:function(){this.state.paymentStatusInterval&&(this.state.paymentStatusInterval=clearInterval(this.state.paymentStatusInterval))}},{key:"onCancelOrder",value:function(e){this.props.cancelOrder({orderID:e})}}],[{key:"fetchData",value:function(e,t){var n=t.path;return e.dispatch(fetchProfile(n))}},{key:"getReducer",value:function(){return{key:y.REDUCER_NAME,reducer:x.accountReducer}}}]),t}(c.default.PureComponent),U=function(e){var t=(0,E.getAccountState)(e).toJS(),n=new T.default(t.user);return{account:t,getWalletBalance:function(e){return n.retrieveWalletBalance(e)}}},z=function(e){return{setTitle:function(t){e((0,j.setMeta)(t)),e((0,j.setTitle)(t.title))},onLoadAccount:function(t){return e((0,h.fetchAccount)("/account"))},fetchOrders:function(t){return e((0,h.fetchOrders)())},fetchTransactionsCount:function(t,n){return e((0,h.fetchTransactionsCount)(t,n))},fetchTransactionToken:function(t){return e((0,h.fetchTransactionToken)(t))},cancelOrder:function(t){return e((0,h.cancelOrder)(t))},setFundingAmount:function(t){return e((0,h.setFundingAmount)(t))},setFundingAttemptingStatus:function(t){return e((0,h.setFundingAttemptingStatus)(t))},setFundingModalStatus:function(t){return e((0,h.setFundingModalStatus)(t))},setFundingMethod:function(t){return e((0,h.setFundingMethod)(t))},setTransactionsCount:function(t){return e((0,h.setTransactionsCount)(t))},setUser:function(t){return e((0,h.setUser)(t))}}},N=(0,p.default)(y.REDUCER_NAME,x.accountReducer)(D);t.default=(0,g.withRouter)((0,d.connect)(U,z)(N))},"./js/services/AccountService/index.js":function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n("./js/util/util.js"),s="https://instachaw.com"===window.location.origin?"https://api.instachaw.com":"http://localhost:3333",i=function(){function e(){l(this,e)}return o(e,null,[{key:"processFundingRequest",value:function(e){var t=e.account,n=(e.onFetchTransactionToken,e.handleFetchTransactionToken),l=e.handleSetFundingAttemptingStatus,o=e.handleSetTransactionsCount,i=e.handleFetchTransactionsCount,c=e.handlesSetUser,d=e.handleSetFundingModalStatus,m=e.handleSetupPaymentStatusInterval,f=e.handleTeardownPaymentStatusInterval,p=t.fundingMethod,g=t.user,y=(t.transactionsCount,t.fundingAmount),h="https://steemconnect.com/sign/transfer?",x=y+" "+p;"naira"===p&&(h=s+"/initializeTransaction",x=y);var j=window.open("");return n(function(e,t){var n="Add "+y+" "+p+" to the account of "+g.username,E="amt="+y+"&wlt="+p+"&uid="+g.id+"&type=topup&memo="+n+"&tkn="+e,b=s+"/processTransaction?"+E,v="to=instachaw&amount="+x+"&memo="+n+"&redirect_uri="+b;"naira"===p&&(v="?ref="+(0,u.generateTransactionRef)()+"&"+E+"&email="+g.email),j.location=encodeURI((""+h+v).trim()),l({isAttemptingFunding:!0}),o({transactionsCount:t});var S=t;return setTimeout(function(){var e=0;console.log(y),m(function(){e+=1,e>14&&f(),i({userID:g.id},function(e){if(Number(S)<Number(e)){var t=g.wallets.filter(function(e){return e.title!==p}),n=g.wallets.filter(function(e){return e.title===p})[0];n.balance=n.balance+y,t=[].concat(a(t),[n]),localStorage.setItem("user",JSON.stringify(r({},g,{wallets:t}))),c({user:r({},g,{wallets:t})}),d({isFundingModalOpen:!1}),l({isAttemptingFunding:!1}),f()}})})},3e3)})}}]),e}();t.default=i},"./js/services/UserService/index.js":function(e,t,n){"use strict";function a(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n("./js/util/util.js"),s=function(){function e(t){l(this,e),this.user=t}return o(e,[{key:"retrieveWallet",value:function(e){return null!==this.user?this.user.wallets.filter(function(t){return t.title===e})[0]:{}}},{key:"retrieveWalletBalance",value:function(e){var t=this.retrieveWallet(e).balance;return(0,u.isANumber)(t)?t:0}},{key:"debitAmountFromWallet",value:function(e,t,n){var l=this.retrieveWallet(e),o=Number(l.balance)-Number(t);l=r({},l,{balance:o});var u=this.user.wallets.filter(function(e){return e.title!==l.title}),s=[].concat(a(u),[l]);localStorage.setItem("user",JSON.stringify(r({},this.user,{wallets:s}))),n(s)}},{key:"hasEmptyAddressBook",value:function(){return 0===this.user.addresses.length}},{key:"hasAddress",value:function(e){return 0!==this.user.addresses.filter(function(t){return t.body===e}).length}},{key:"addToAddressBook",value:function(e,t){var n=this.user.addresses.reduce(function(e,t){return Math.max(e,t.id)+1}),l={id:n,body:e,user_id:this.user.id},o=[].concat(a(this.user.addresses),[l]);localStorage.setItem("user",JSON.stringify(r({},user,{addresses:o}))),t()}}]),e}();t.default=s}});