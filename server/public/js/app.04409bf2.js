(function(t){function e(e){for(var a,s,i=e[0],u=e[1],l=e[2],m=0,d=[];m<i.length;m++)s=i[m],o[s]&&d.push(o[s][0]),o[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var c=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("navbar",{attrs:{loggedd:t.isLoggedIn,useer:t.getU},on:{exit:t.logout}}),n("div",{attrs:{id:"app"}},[n("router-view")],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"dark"}},[n("b-navbar-brand",{attrs:{to:"/"}},[t._v("Profundizacion3/APP")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",[n("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),n("b-nav-item",{attrs:{to:"/about"}},[t._v("About")]),t.loggedd?n("b-nav-item",{attrs:{to:"/notes"}},[t._v("Notes")]):t._e()],1),t.loggedd?n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("div",{staticClass:"text-center text-white mr-5"},[t._v("\n            Bienvenido:\n            "),n("b-badge",{attrs:{variant:"success"}},[t._v(t._s(t.useer.nombre))])],1),t._v(" \n          "),n("b-button",{attrs:{variant:"outline-danger",to:"/"},on:{click:t.logout}},[t._v("Logout")])],1)],1):t._e(),t.loggedd?t._e():n("b-navbar-nav",{staticClass:"ml-auto"},[n("b-nav-form",[n("b-button",{attrs:{variant:"outline-success",to:"/login"}},[t._v("Login")]),t._v("\n           \n          "),n("b-button",{attrs:{variant:"outline-success",to:"/register"}},[t._v("Register")])],1)],1)],1)],1)],1)},i=[],u={props:["useer","loggedd"],computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn}},methods:{logout:function(){this.$emit("exit")}}},l=u,c=n("2877"),m=Object(c["a"])(l,s,i,!1,null,null,null),d=m.exports,f={name:"app",data:function(){return{}},components:{navbar:d},mounted:function(){this.$store.dispatch("updateUser")},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn},getU:function(){return this.$store.getters.getUs}},created:function(){this.$http.interceptors.response.use(void 0,function(t){return new Promise(function(e,n){throw 401===t.status&&t.config&&!t.config.__isRetryRequest&&this.$store.dispatch("logout"),t})})},methods:{logout:function(){var t=this;this.$store.dispatch("logout").then(function(){t.$router.push("/login")})}}},p=f,v=(n("034f"),Object(c["a"])(p,o,r,!1,null,null,null)),h=v.exports,b=n("bc3a"),g=n.n(b),_=n("2f62");a["default"].use(_["a"]);var w={headers:{"Content-type":"application/json; charset=utf-8","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"*","Access-Control-Allow-Headers":"*","cache-control":"no-cache"}},y=new _["a"].Store({state:{status:"",token:localStorage.getItem("token")||"",user:JSON.parse(localStorage.getItem("user"))||{}},mutations:{auth_request:function(t){t.status="loading"},auth_success:function(t,e){var n=e.user,a=e.token;t.status="success",t.token=a,t.user=n},auth_error:function(t){t.status="error"},logout:function(t){t.status="",t.token="",t.user={}}},actions:{login:function(t,e){var n=t.commit;return new Promise(function(t,a){n("auth_request"),g()({url:"http://localhost:3000/login",data:e,method:"POST"},w).then(function(e){var a=e.data.token,o=e.data.user;localStorage.setItem("token",a),localStorage.setItem("user",JSON.stringify(o)),g.a.defaults.headers.common["token"]=a,n("auth_success",{user:o,token:a}),t(e)}).catch(function(t){n("auth_error"),localStorage.removeItem("token"),a(t)})})},register:function(t,e){var n=t.commit;return new Promise(function(t,a){n("auth_request"),g()({url:"http://localhost:3000/usuario",data:e,method:"POST"}).then(function(e){var a=e.data.token,o=e.data.usuario;localStorage.setItem("token",a),localStorage.setItem("user",JSON.stringify(o)),g.a.defaults.headers.common["token"]=a;var r={token:a,user:o};n("auth_success",r),t(e)}).catch(function(t){n("auth_error",t),localStorage.removeItem("token"),a(t)})})},logout:function(t){var e=t.commit;return new Promise(function(t,n){e("logout"),localStorage.removeItem("token"),localStorage.removeItem("user"),delete g.a.defaults.headers.common["token"],t()})},getUser:function(t,e){var n=t.commit;return new Promise(function(t,a){n("auth_request"),g()({url:"http://localhost:3000/usuario/"+e._id,data:e,method:"GET"}).then(function(e){var a=e.data.token,o=e.data.user;localStorage.setItem("token",a),g.a.defaults.headers.common["token"]=a,n("auth_success",a,o),t(e)}).catch(function(t){n("auth_error",t),localStorage.removeItem("token"),a(t)})})},updateUser:function(t){t.commit;console.log("Vuex updateUSer")}},getters:{isLoggedIn:function(t){return!!t.token},authStatus:function(t){return t.status},getUs:function(t){return t.user}}}),k=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("b-jumbotron",{staticClass:"mx-5",attrs:{header:"Pro3/APP",lead:"A website created to pass the class"}},[n("p",[t._v("For more information visit the about section")]),n("b-button",{attrs:{variant:"primary",to:"/about"}},[t._v("About section")])],1)],1)},C=[],S={name:"Home",data:function(){return{}}},$=S,I=Object(c["a"])($,x,C,!1,null,"59fec2f0",null),P=I.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-jumbotron",{staticClass:"mx-5"},[n("template",{slot:"header"},[t._v("About this project")]),n("p",{staticClass:"mt-5"},[t._v("In total are two parts of project, this is the first part, which is for front-end and are developed whit the next tecnologies and libraries:")]),n("ul",[n("li",[t._v("Vuejs")]),n("li",[t._v("VueCLI")]),n("li",[t._v("Axios")]),n("li",[t._v("Vuex")]),n("li",[t._v("Vue-Router")]),n("li",[t._v("Bootstrap4")]),n("li",[t._v("Bootstrap-vue")]),n("li",[t._v("localStorage API HTML5")])]),n("p",[t._v("\n\n      This app manage it´s state whit Vuex and also save this data in the localStorage for futures sessions logins, make calls to api Rest with axios, and integred a structure SPA using vueRouter,\n      for the desing a bootstrap libray was used and was bootstrap-vue.\n      "),n("br"),t._v("\n      At the moment this app dont have a strategy offline.\n    ")]),n("p",{staticClass:"text-muted"},[t._v("\n      SPA builded by:\n      "),n("a",{staticClass:"text-reset",attrs:{href:"https://github.com/monsa12",target:"__blank"}},[t._v("Diego Monsalve")]),t._v(".\n    ")]),n("div",{staticClass:"mt-5"},[n("b-button",{attrs:{variant:"primary",to:"/login"}},[t._v("Login")]),t._v(" \n      "),n("b-button",{attrs:{variant:"primary",to:"/register"}},[t._v("Register")])],1)],2)],1)},O=[],A={name:"About"},E=A,L=Object(c["a"])(E,j,O,!1,null,"971c3c20",null),q=L.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("b-container",{staticClass:"bv-example-row"},[n("b-row",{staticClass:"justify-content-md-center"},[n("b-col",{attrs:{cols:"12",md:"auto"}},[n("b-form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-name"}},[t._v("Email")]),n("b-input",{staticClass:"mt-3 mb-2 mr-sm-2 mb-sm-0",attrs:{required:"",id:"inline-form-input-name",placeholder:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-username"}},[t._v("Password")]),n("b-input",{staticClass:"mt-3",attrs:{required:"",id:"inline-form-input-username",type:"password",placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("b-button",{staticClass:"mt-3",attrs:{variant:"primary",type:"submit"}},[t._v("Login")])],1)],1)],1)],1)],1)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-white"},[n("h1",[t._v("LOGIN")])])}],N={data:function(){return{email:"",password:""}},methods:{login:function(){var t=this,e=this.email,n=this.password;this.$store.dispatch("login",{email:e,password:n}).then(function(){return t.$router.push("/")}).catch(function(t){return console.log(t)})}}},U=N,M=Object(c["a"])(U,R,T,!1,null,null,null),V=M.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("This page is protected by auth")])])}],B={},D=Object(c["a"])(B,J,H,!1,null,null,null),G=D.exports,z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),n("b-container",{staticClass:"bv-example-row"},[n("b-row",{staticClass:"justify-content-md-center"},[n("b-col",{attrs:{cols:"12",md:"auto"}},[n("b-form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[n("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-name"}},[t._v("Name")]),n("b-input",{staticClass:"mt-3 mb-2 mr-sm-2 mb-sm-0",attrs:{required:"",id:"inline-form-input-name",placeholder:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-name"}},[t._v("Email")]),n("b-input",{staticClass:"mt-3 mb-2 mr-sm-2 mb-sm-0",attrs:{required:"",id:"inline-form-input-name",placeholder:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-name"}},[t._v("Password")]),n("b-input",{staticClass:"mt-3 mb-2 mr-sm-2 mb-sm-0",attrs:{required:"",id:"inline-form-input-name",placeholder:"Password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),n("label",{staticClass:"sr-only",attrs:{for:"inline-form-input-name"}},[t._v("Repeat password")]),n("b-input",{staticClass:"mt-3 mb-2 mr-sm-2 mb-sm-0",attrs:{required:"",id:"inline-form-input-name",placeholder:"Repeat pasword"},model:{value:t.password_confirmation,callback:function(e){t.password_confirmation=e},expression:"password_confirmation"}}),n("b-button",{staticClass:"mt-3",attrs:{variant:"primary",type:"submit"}},[t._v("Continue")])],1)],1)],1)],1)],1)},F=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-white"},[n("h1",[t._v("REGISTER")])])}],K=(n("7f7f"),{data:function(){return{name:"",email:"",password:"",password_confirmation:""}},methods:{register:function(){var t=this,e={nombre:this.name,email:this.email,password:this.password};this.$store.dispatch("register",e).then(function(){return t.$router.push("/")}).catch(function(t){return console.log(t)})}}}),Q=K,W=Object(c["a"])(Q,z,F,!1,null,null,null),X=W.exports,Y=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Notes")])])}],tt={name:"Notes"},et=tt,nt=Object(c["a"])(et,Y,Z,!1,null,null,null),at=nt.exports;a["default"].use(k["a"]);var ot=new k["a"]({mode:"history",routes:[{path:"/",name:"home",component:P},{path:"/about",name:"about",component:q},{path:"/login",name:"login",component:V,meta:{guest:!0}},{path:"/register",name:"register",component:X,meta:{guest:!0}},{path:"/notes",name:"notes",component:at,meta:{}},{path:"/secure",name:"secure",component:G,meta:{requiresAuth:!0}}]});ot.beforeEach(function(t,e,n){if(t.matched.some(function(t){return t.meta.requiresAuth})){if(y.getters.isLoggedIn)return void n();n("/login")}if(t.matched.some(function(t){return t.meta.guest})){if(y.getters.isLoggedIn)return void n({name:"about"});n()}else n()});var rt=ot,st=n("5f5b");n("ab8b"),n("2dd8");a["default"].use(st["a"]),a["default"].use(k["a"]),a["default"].prototype.$http=g.a;var it=localStorage.getItem("token");it&&(a["default"].prototype.$http.defaults.headers.common["token"]=it),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(h)},store:y,router:rt}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.04409bf2.js.map