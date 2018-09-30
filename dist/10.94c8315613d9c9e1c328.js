webpackJsonp([10],{"./js/screens/login/index.js":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n("../node_modules/react/index.js"),u=o(l),c=n("../node_modules/prop-types/index.js"),d=(o(c),n("../node_modules/react-redux/es/index.js")),f=n("../node_modules/react-spinners/index.js"),p=n("../node_modules/react-router-dom/es/index.js"),m=n("./js/redux/reducerInjector.js"),g=o(m),h=n("./js/containers/app/actions.js"),b=(n("./js/containers/app/reducer.js"),n("./js/containers/header/actions.js")),y=n("./js/containers/footer/actions.js"),j=n("./js/screens/login/actions.js"),x=n("./js/screens/login/constants.js"),E=n("./js/screens/login/reducer.js"),v=n("../node_modules/pcln-design-system/dist/index.js"),L=n("../node_modules/styled-components/dist/styled-components.browser.es.js"),w=(o(L),n("./js/components/UI/atoms/index.js")),_=function(e){function t(e){i(this,t);var n=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={uid:"",password:"",loginNotice:""},n.handleLoginSubmit=n.handleLoginSubmit.bind(n),n.navigateToLocation=n.navigateToLocation.bind(n),n}return a(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setHeaderVisibility,n=e.setFooterVisibility,o=e.onLoadLogin,i=e.match;setTimeout(function(){t({isHeaderVisible:!1}),n({isFooterVisible:!1})},200),o(i.path)}},{key:"render",value:function(){var e=this;return u.default.createElement(v.Flex,{px:3,flexDirection:"column",justify:"center",style:{height:"80%",position:"absolute",left:"50%",transform:"translateX(-50%)"},width:[1,.9,.7]},u.default.createElement("form",{method:"get",onSubmit:this.handleLoginSubmit},u.default.createElement(v.Flex,{mb:3,alignItems:"center",justify:"center"},u.default.createElement(p.Link,{to:"/"},u.default.createElement(w.BrandLogo,{height:"45px",color:"red"}))),u.default.createElement(v.Flex,{flexDirection:"column",justify:"center",alignItems:"center"},u.default.createElement(v.Box,{mb:3},u.default.createElement(w.Label,{mb:1,fontSize:0,style:{textTransform:"uppercase"}},"Email or Username"),u.default.createElement(w.Input,{onChange:function(t){return e.setState({uid:t.target.value})},value:this.state.uid,required:!0,id:"username"})),u.default.createElement(v.Box,{mb:this.state.loginNotice.length>0?1:3},u.default.createElement(v.Flex,null,u.default.createElement(w.Label,{style:{flex:1,textTransform:"uppercase"},mb:1,fontSize:0},"Password"),u.default.createElement(v.Flex,{flexDirection:"flex-end"},u.default.createElement(v.Link,{onClick:function(t){t.preventDefault(),e.navigateToLocation("/resetPassword")},mb:1,style:{flex:3}},u.default.createElement(v.Text,{fontSize:0},"Forgot Password?")))),u.default.createElement(w.Input,{onChange:function(t){return e.setState({password:t.target.value})},value:this.state.password,type:"password",id:"password",required:!0})),this.state.loginNotice.length>0&&u.default.createElement(v.Box,{mb:3},u.default.createElement(v.Text,{align:"right",fontSize:0,color:"darkRed"},this.state.loginNotice)),u.default.createElement(v.Box,null,u.default.createElement(w.Button,{disabled:this.props.login.isAttemptingLogin||!this.isValidForm(),fullWidth:!0},this.props.login.isAttemptingLogin?u.default.createElement(f.SyncLoader,{color:"#f1f1f1",size:10,loading:!0}):u.default.createElement(v.Text,null,"Login")),u.default.createElement(v.Text,{my:2,align:"center"},"or"),u.default.createElement(v.BlockLink,{style:{textAlign:"center"},color:"gray",onClick:function(t){return e.navigateToLocation("/register")}},u.default.createElement(v.Text,{color:"blue",style:{textDecoration:"underline"}},"Create an account"))))))}},{key:"handleLoginSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state,o=n.uid,i=n.password,r=this.props.deleteAppNotification;this.props.attemptLogin({uid:o,password:i},function(e){void 0!==e&&(void 0===e.user?t.setState({loginNotice:e[0].message}):(t.props.addAppNotification({message:"Successfully logged in!"}),setTimeout(function(){r({message:"Successfully logged in!"})},5e3),t.navigateToLocation("/")))})}},{key:"navigateToLocation",value:function(e){this.props.history.push(e)}},{key:"isValidForm",value:function(){return this.state.uid.length&&this.state.password.length}}]),t}(u.default.PureComponent),S=function(e){return{login:(0,E.getLoginState)(e).toJS()}},T=function(e){return{onLoadLogin:function(t){return e((0,j.fetchLogin)(t))},attemptLogin:function(t,n){return e((0,j.attemptLogin)(t,n))},setHeaderVisibility:function(t){return e((0,b.setHeaderVisibility)(t))},setFooterVisibility:function(t){return e((0,y.setFooterVisibility)(t))},addAppNotification:function(t){return e((0,h.addAppNotification)(t))},deleteAppNotification:function(t){return e((0,h.deleteAppNotification)(t))}}},k=(0,g.default)(x.REDUCER_NAME,E.loginReducer)(_);t.default=(0,p.withRouter)((0,d.connect)(S,T)(k))}});