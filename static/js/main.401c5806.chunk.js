(this.webpackJsonpapp_weather=this.webpackJsonpapp_weather||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),i=a(18),o=a.n(i),s=(a(82),a(25)),u=a.n(s),d=a(23),j=a(121),b=a(122),l=a(125),p=a(126),O=a(127),h=function(e){var t=e.window,a=Object(j.a)({target:t?t():void 0});return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a,{}),Object(n.jsx)(l.a,{appear:!1,direction:"down",in:!a,children:Object(n.jsx)(p.a,{children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(d.b,{to:"/React_Weather_API",activeClassName:u.a.active,className:u.a.navLink,children:"Home"}),Object(n.jsx)(d.b,{to:"/About",activeClassName:u.a.active,className:u.a.navLink,children:"About"}),Object(n.jsx)(d.b,{to:"/React_Weather_API",className:"".concat(u.a.navLink," ").concat(u.a.logo),children:Object(n.jsx)("img",{src:"http://openweathermap.org/img/wn/10d.png"})})]})})}),Object(n.jsx)(O.a,{})]})},f=a(128),v=a(131),y=a(129),g=a(5),x=r.a.lazy((function(){return Promise.all([a.e(4),a.e(3)]).then(a.bind(null,169))})),_=r.a.lazy((function(){return a.e(5).then(a.bind(null,165))}));function w(){return Object(n.jsx)(f.a,{children:Object(n.jsx)(v.a,{my:2,children:Object(n.jsx)(r.a.Suspense,{fallback:Object(n.jsx)("div",{children:Object(n.jsx)(y.a,{})}),children:Object(n.jsxs)(g.d,{children:[Object(n.jsx)(g.b,{path:"/React_Weather_API",children:Object(n.jsx)(x,{})}),Object(n.jsx)(g.b,{exact:!0,path:"/About",children:Object(n.jsx)(_,{})}),Object(n.jsx)(g.b,{path:"*",children:Object(n.jsx)(g.a,{to:"/React_Weather_API"})})]})})})})}var m=a(68),E=a.n(m);function S(){return Object(n.jsx)("div",{className:E.a.wrapper,children:Object(n.jsxs)("div",{children:["Copyright \xa9 ",(new Date).getFullYear()]})})}var R=function(e){return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(h,{}),Object(n.jsx)(w,{}),Object(n.jsx)(S,{})]})},T=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,166)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))},L=a(64),A=a(36),k=a(63),I=a(28),N=a(70),C=a(8),F=Object(I.c)({geolocation:k.a,weather:A.a,errorMess:C.a}),P=Object(I.d)(F,Object(I.a)(N.a));window.store=P,o.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(d.a,{children:Object(n.jsx)(L.a,{store:P,children:Object(n.jsx)(R,{})})})}),document.getElementById("root")),T()},25:function(e,t,a){e.exports={navLink:"NavBar_navLink__3S7wn",active:"NavBar_active__OV_2w",logo:"NavBar_logo__3EX69"}},33:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return s}));a(0);var n=a(49),c=a.n(n),r="b13ada3c632cd930a45a1a6b7d6bde3e",i=c.a.create({baseURL:"https://api.openweathermap.org/data/2.5/"}),o=function(){return c.a.get("https://ipapi.co/json")},s={geolocation:function(e){return i.get("weather?q=".concat(e,"&units=metric&appid=").concat(r))},search:function(e){return i.get("forecast?q=".concat(e,"&units=metric&appid=").concat(r))}}},36:function(e,t,a){"use strict";a.d(t,"c",(function(){return f})),a.d(t,"b",(function(){return v}));var n=a(22),c=a.n(n),r=a(32),i=a(4),o=(a(0),a(33)),s=a(8),u="SET_WEATHER",d="SET_WEATHER_SEARCH",j="SET_WEATHER_CITY",b="SET_WEATHER_COUNTRY",l={weather:{},weatherSearch:[],city:null,country:null};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{weather:t.payload});case d:return Object(i.a)(Object(i.a)({},e),{},{weatherSearch:t.payload});case j:return Object(i.a)(Object(i.a)({},e),{},{city:t.payload});case b:return Object(i.a)(Object(i.a)({},e),{},{country:t.payload});default:return e}};var p=function(e){return{type:u,payload:e}},O=function(e){return{type:d,payload:e}},h=function(e){return{type:b,payload:e}},f=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.replace(/\s/g,"-"),a(Object(s.d)()),t.prev=2,t.next=5,o.b.geolocation(n);case 5:200===(r=t.sent).data.cod?(a(p(r.data)),a(Object(s.c)(null))):(a(p({})),a(Object(s.c)(r.data.message))),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),a(p({})),a(Object(s.c)(t.t0.response.data.message));case 13:a(Object(s.d)());case 14:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(r.a)(c.a.mark((function t(a){var n,r,i,u,d;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.replace(/\s/g,"-"),a(Object(s.d)()),t.prev=2,t.next=5,o.b.search(n);case 5:if("200"===(r=t.sent).data.cod){for(i=r.data.list,u=i.findIndex((function(e){return"00:00:00"===e.dt_txt.split(" ")[1]})),d=[],u>0&&d.push(i.splice(0,u));i.length>0;)d.push(i.splice(0,8));a(O(d)),a((c=r.data.city.name,{type:j,payload:c})),a(h(r.data.city.country)),a(Object(s.b)(null))}else a(O([])),a(Object(s.b)(r.data.message));t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),a(O([])),a(Object(s.b)(t.t0.response.data.message));case 13:a(Object(s.d)());case 14:case"end":return t.stop()}var c}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()}},63:function(e,t,a){"use strict";a.d(t,"b",(function(){return p}));var n=a(22),c=a.n(n),r=a(32),i=a(4),o=(a(0),a(33)),s=a(8),u=a(36),d="SET_CITY",j="SET_COUNTRY",b={city:"",country:""};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(i.a)(Object(i.a)({},e),{},{city:t.payload});case j:return Object(i.a)(Object(i.a)({},e),{},{country:t.payload});default:return e}};var l=function(e){return{type:j,payload:e}},p=function(){return function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Object(s.e)()),e.prev=1,e.next=4,Object(o.a)();case 4:200===(a=e.sent).status?(t(Object(u.c)(a.data.city)),t((n=a.data.city,{type:d,payload:n})),t(l(a.data.country_name)),t(Object(s.c)(null))):t(Object(s.c)(a.data.message)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t(Object(s.c)(e.t0.response.data.message));case 11:t(Object(s.e)());case 12:case"end":return e.stop()}var n}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()}},68:function(e,t,a){e.exports={wrapper:"Footer_wrapper__34RP-"}},8:function(e,t,a){"use strict";a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return d})),a.d(t,"c",(function(){return j})),a.d(t,"b",(function(){return b}));var n=a(4),c=(a(0),"SET_IS_LOADING"),r="SET_IS_LOADING2",i="SET_ERROR_MESS",o="SET_ERROR_MESS_SEARCH",s={isLoading:!1,isLoading2:!1,error:null,errorSearch:null};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:return Object(n.a)(Object(n.a)({},e),{},{isLoading:!e.isLoading});case r:return Object(n.a)(Object(n.a)({},e),{},{isLoading2:!e.isLoading2});case i:return Object(n.a)(Object(n.a)({},e),{},{error:t.payload});case o:return Object(n.a)(Object(n.a)({},e),{},{errorSearch:t.payload});default:return e}};var u=function(){return{type:c}},d=function(){return{type:r}},j=function(e){return{type:i,payload:e}},b=function(e){return{type:o,payload:e}}},82:function(e,t,a){}},[[107,1,2]]]);
//# sourceMappingURL=main.401c5806.chunk.js.map