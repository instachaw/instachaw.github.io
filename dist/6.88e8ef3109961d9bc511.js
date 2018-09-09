webpackJsonp([6],{"./js/screens/register/actions.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setRegistrationAttemptingStatus=t.fetchRegister=t.attemptRegistration=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n("./js/containers/app/actions.js"),a=n("../service/service.js"),o=n("./js/screens/register/constants.js"),s=n("./js/screens/account/actions.js"),l=n("./js/screens/login/actions.js"),u=n("./js/services/ApiService/index.js"),c="https://instachaw.com"===window.location.origin?"https://api.instachaw.com":"http://localhost:3333",f=(t.attemptRegistration=function(e,t){return function(n){return n(f({isAttemptingRegistration:!0})),(0,u.sendRequest)({endpoint:c+"/api/v1/users",method:"POST",payload:JSON.stringify(e)}).then(function(e){if(void 0!==e&&null!==typeof e)if(void 0!==e.user){var i=e.user,a=e.token,o=r({},i,{token:a});n((0,s.setUser)({user:o})),localStorage.setItem("user",JSON.stringify(o)),n((0,l.setLoginStatus)({isLoggedIn:!0})),n(f({isAttemptingRegistration:!1}))}else setTimeout(function(){n(f({isAttemptingRegistration:!1}))},1e3);else setTimeout(function(){n(f({isAttemptingRegistration:!1}))},1e3);return t(e)}).catch(function(e){return console.log(e)})}},t.fetchRegister=function(e){return function(t){return t((0,i.isLoading)(!0)),(0,a.getPageData)(e).then(function(e){return t((0,i.setMeta)(e.meta)),t((0,i.setUrl)(e.url)),t((0,i.setTitle)(e.title)),e}).then(function(e){t((0,i.isLoading)(!1)),t(d(e))}).catch(function(e){throw console.error(e),e})}},t.setRegistrationAttemptingStatus=function(e){return{type:o.SET_REGISTRATION_ATTEMPTING_STATUS,data:e}}),d=function(e){return{type:o.SET_REGISTER,data:e}}},"./js/screens/register/index.js":function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n("../node_modules/react/index.js"),u=r(l),c=n("../node_modules/prop-types/index.js"),f=(r(c),n("../node_modules/react-redux/es/index.js")),d=n("../node_modules/react-spinners/index.js"),p=n("./js/redux/reducerInjector.js"),m=r(p),g=n("../node_modules/react-router-dom/es/index.js"),h=n("./js/containers/app/actions.js"),y=(n("./js/containers/app/reducer.js"),n("./js/containers/header/actions.js")),b=n("./js/containers/footer/actions.js"),j=n("./js/screens/register/actions.js"),E=n("./js/screens/register/constants.js"),v=n("./js/screens/register/reducer.js"),x=n("../node_modules/pcln-design-system/dist/index.js"),S=n("./js/components/UI/atoms/index.js"),R=n("../node_modules/styled-components/dist/styled-components.browser.es.js"),T=(r(R),function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={email:"",username:"",name:"",password:"",phone:"",registrationNotice:""},n.handleRegistrationSubmit=n.handleRegistrationSubmit.bind(n),n.navigateToLocation=n.navigateToLocation.bind(n),n}return o(t,e),s(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setHeaderVisibility,n=e.setFooterVisibility,r=e.onLoadRegister,i=e.match;setTimeout(function(){t({isHeaderVisible:!1}),n({isFooterVisible:!1})},200),r(i.path)}},{key:"render",value:function(){var e=this;return u.default.createElement(x.Flex,{px:3,py:4,flexDirection:"column",justify:"center",style:{position:"absolute",left:"50%",transform:"translateX(-50%)"},width:[1,.9,.7]},u.default.createElement("form",{method:"get",onSubmit:this.handleRegistrationSubmit},u.default.createElement(x.Flex,{flexDirection:"column",justify:"center",alignItems:"center"},u.default.createElement(x.Flex,{mb:3,alignItems:"center",justify:"center"},u.default.createElement(g.Link,{to:"/"},u.default.createElement(S.BrandLogo,{height:"45px",color:"red"}))),u.default.createElement(x.Box,{mb:3},u.default.createElement(S.Label,{mb:1,fontSize:0,style:{textTransform:"uppercase"}},"Email",u.default.createElement("sup",{style:{color:"red",fontSize:"14px"}},"*")),u.default.createElement(S.Input,{onChange:function(t){return e.setState({email:t.target.value})},value:this.state.email,id:"email",type:"email"})),u.default.createElement(x.Box,{mb:3},u.default.createElement(S.Label,{mb:1,fontSize:0,style:{textTransform:"uppercase"}},"Username",u.default.createElement("sup",{style:{color:"red",fontSize:"14px"}},"*")),u.default.createElement(S.Input,{type:"text",onChange:function(t){return e.setState({username:t.target.value})},value:this.state.username,id:"username"})),u.default.createElement(x.Box,{mb:3},u.default.createElement(S.Label,{mb:1,fontSize:0,style:{textTransform:"uppercase"}},"Full name"," ",u.default.createElement("sup",{style:{color:"red",fontSize:"14px"}},"*")),u.default.createElement(S.Input,{type:"text",onChange:function(t){return e.setState({name:t.target.value})},value:this.state.name,id:"name",mb:1}),u.default.createElement(x.Text,{fontSize:0},"Example: ",u.default.createElement("b",null,"John Doe"),".")),u.default.createElement(x.Box,{mb:3},u.default.createElement(S.Label,{mb:1,fontSize:0,style:{textTransform:"uppercase"}},"Phone",u.default.createElement("sup",{style:{color:"red",fontSize:"14px"}},"*")),u.default.createElement(S.Input,{onChange:function(t){return e.setState({phone:t.target.value})},value:this.state.phone,id:"phone",type:"tel"})),u.default.createElement(x.Box,{mb:this.state.registrationNotice.length>1?1:3},u.default.createElement(S.Label,{mb:1,fontSize:0,style:{textTransform:"uppercase"}},"Password",u.default.createElement("sup",{style:{color:"red",fontSize:"18px"}},"*")),u.default.createElement(S.Input,{onChange:function(t){return e.setState({password:t.target.value})},value:this.state.password,type:"password",id:"password"})),this.state.registrationNotice.length>0&&u.default.createElement(x.Box,{mb:3},u.default.createElement(x.Text,{align:"right",fontSize:0,color:"red"},this.state.registrationNotice)),u.default.createElement(x.Box,null,u.default.createElement(S.Button,{disabled:this.props.register.isAttemptingRegistration||!this.isValidForm(),fullWidth:!0},this.props.register.isAttemptingRegistration?u.default.createElement(d.SyncLoader,{color:"#f1f1f1",size:10,loading:!0}):u.default.createElement(x.Text,null,"Create account instantly")),u.default.createElement(x.Text,{my:1,align:"center"},"or"),u.default.createElement(x.BlockLink,{style:{textAlign:"center"},color:"gray",onClick:function(t){return e.navigateToLocation("/login")}},u.default.createElement(x.Text,{color:"blue",style:{textDecoration:"underline"}},"Proceed to Login"))))))}},{key:"handleRegistrationSubmit",value:function(e){var t=this;e.preventDefault();var n=this.state,r=n.username,i=n.name,a=n.email,o=n.password,s=n.phone,l=this.props,u=l.attemptRegistration,c=l.addAppNotification,f=l.deleteAppNotification;u({username:r,name:i,email:a,password:o,phone:s},function(e){void 0!==e&&(void 0===e.user?t.setState({registrationNotice:e[0].message}):(t.navigateToLocation("/"),c({message:"Successfully created account."}),setTimeout(function(){f({message:"Successfully created account."})},5e3)))})}},{key:"navigateToLocation",value:function(e){this.props.history.push(e)}},{key:"isValidForm",value:function(){var e=["username","name","email","password","phone"];return this.state[e[0]].length&&this.state[e[1]].length&&this.state[e[2]].length&&this.state[e[3]].length&&this.state[e[4]].length}}]),t}(u.default.PureComponent)),w=function(e){return{register:(0,v.getRegisterState)(e).toJS()}},_=function(e){return{onLoadRegister:function(t){return e((0,j.fetchRegister)(t))},attemptRegistration:function(t,n){return e((0,j.attemptRegistration)(t,n))},addAppNotification:function(t){return e((0,h.addAppNotification)(t))},deleteAppNotification:function(t){return e((0,h.deleteAppNotification)(t))},setHeaderVisibility:function(t){return e((0,y.setHeaderVisibility)(t))},setFooterVisibility:function(t){return e((0,b.setFooterVisibility)(t))}}},L=(0,m.default)(E.REDUCER_NAME,v.registerReducer)(T);t.default=(0,g.withRouter)((0,f.connect)(w,_)(L))}});