(this.webpackJsonpapp_weather=this.webpackJsonpapp_weather||[]).push([[3],{138:function(e,t,a){e.exports={wrapper:"SearchWeather_wrapper__2hxdS",title:"SearchWeather_title__xrtm_",padding:"SearchWeather_padding__3UcKZ",days:"SearchWeather_days__1Tw83",navLink2:"SearchWeather_navLink2__z_1uw",dayWrapper:"SearchWeather_dayWrapper__3AOu-",padding2:"SearchWeather_padding2__2NSjJ",dayTitle:"SearchWeather_dayTitle__2u9IB",active2:"SearchWeather_active2__1T0NE"}},141:function(e,t,a){},142:function(e,t,a){e.exports={title:"GeolocationWeather_title__uEqoL",wrapper:"GeolocationWeather_wrapper__wzFCP",left:"GeolocationWeather_left__3XLwZ",left_box:"GeolocationWeather_left_box__aV8XE",img:"GeolocationWeather_img__33RHQ",temp:"GeolocationWeather_temp__38xRu",description:"GeolocationWeather_description__1xgkW",right:"GeolocationWeather_right__Qsd_D"}},169:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var r=a(2),c=a(144),n=a(0),i=a.n(n),s=a(64),d=a(63);a(141);function o(){return Object(r.jsx)("div",{className:"wrapp",children:Object(r.jsxs)("div",{className:"lds-spinner",children:[Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{}),Object(r.jsx)("div",{})]})})}var l=a(142),j=a.n(l),u=i.a.memo((function(e){var t=e.city,a=e.country,c=e.weather,n=e.dates;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:j.a.title,children:[Object(r.jsxs)("h1",{children:[t,", ",a.toUpperCase()]}),Object(r.jsx)("h2",{children:n})]}),"{}"!==JSON.stringify(c)&&Object(r.jsxs)("div",{className:j.a.wrapper,children:[Object(r.jsx)("div",{className:j.a.left,children:Object(r.jsxs)("div",{className:j.a.left_box,children:[Object(r.jsx)("img",{className:j.a.img,src:"https://openweathermap.org/img/wn/".concat(c.weather[0].icon,"@4x.png"),alt:"img"}),Object(r.jsxs)("div",{className:j.a.temp,children:[Math.trunc(c.main.temp),"\xb0C"]}),Object(r.jsx)("div",{className:j.a.description,children:c.weather[0].description})]})}),Object(r.jsxs)("div",{className:j.a.right,children:[Object(r.jsxs)("div",{children:["Atmospheric pressure: ",Object(r.jsxs)("span",{children:[c.main.pressure,"hPa"]})]}),Object(r.jsxs)("div",{children:["Humidity: ",Object(r.jsxs)("span",{children:[c.main.humidity,"%"]})]}),Object(r.jsxs)("div",{children:["Wind speed: ",Object(r.jsxs)("span",{children:[c.wind.speed,"m/s"]})]}),Object(r.jsxs)("div",{children:["Cloudiness: ",Object(r.jsxs)("span",{children:[c.clouds.all,"%"]})]})]})]})]})})),h=a(36),b=a(138),p=a.n(b),O=a(23),x=a(5);function m(e){var t=e.dayTitle,a=void 0===t?null:t,c=e.padding,n=void 0===c?null:c,i=e.padding2,s=void 0===i?null:i,d=e.newDays,o=void 0===d?null:d,l=e.index,j=void 0===l?null:l,u=e.el,h=void 0===u?null:u,b=e.el2,p=void 0===b?null:b;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:a,children:"".concat(o?o[0][j]:p.dt_txt)}),Object(r.jsxs)("div",{className:a,children:["".concat(h?Math.trunc(h[0].main.temp):Math.trunc(p.main.temp)),"\xb0C"]}),Object(r.jsx)("img",{src:"https://openweathermap.org/img/wn/".concat(h?h[0].weather[0].icon:p.weather[0].icon,"@4x.png"),alt:"img"}),p&&Object(r.jsx)("div",{className:n,children:p.weather[0].description}),p&&Object(r.jsxs)("div",{className:n,children:["Atmospheric pressure: ",p.main.pressure,"hPa"]}),Object(r.jsxs)("div",{className:n,children:["Humidity: ","".concat(h?h[0].main.humidity:p.main.humidity),"%"]}),Object(r.jsxs)("div",{className:n,children:["Cloudiness: ","".concat(h?h[0].clouds.all:p.clouds.all),"%"]}),Object(r.jsxs)("div",{className:s,children:["Wind speed: ","".concat(h?h[0].wind.speed:p.wind.speed),"m/s"]})]})}var v=i.a.memo((function(e){var t=e.searchArr,a=e.newDays,c=Object(x.g)().id,n=a[0].indexOf(c);return Object(r.jsx)("div",{className:p.a.days,children:t[n].map((function(e,t){return Object(r.jsx)("div",{className:p.a.dayWrapper,children:Object(r.jsx)(m,{dayTitle:p.a.dayTitle,el2:e,padding:p.a.padding,padding2:p.a.padding2})},String(t))}))})})),f=i.a.memo((function(e){var t=e.searchArr,a=e.searchCity,c=e.searchCountry,n=e.newDays;return Object(r.jsxs)("div",{className:p.a.wrapper,children:[Object(r.jsxs)("h2",{className:p.a.title,children:[a,", ",c]}),Object(r.jsx)("div",{className:p.a.days,children:t.map((function(e,t){return Object(r.jsx)(O.b,{to:"/React_Weather_API/".concat(n[0][t]),activeClassName:p.a.active2,className:p.a.navLink2,children:Object(r.jsx)(m,{dayTitle:p.a.dayTitle,newDays:n,index:t,el:e,padding:p.a.padding,padding2:p.a.padding2})},String(t))}))}),Object(r.jsx)("div",{className:p.a.day,children:Object(r.jsx)(x.d,{children:Object(r.jsx)(x.b,{exact:!0,path:"/React_Weather_API/:id",children:Object(r.jsx)(v,{searchArr:t,newDays:n})})})})]})})),g=a(4),y=a(168),_=a(164),w=Object(_.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}})),N=function(e){return Object(r.jsx)(y.a,Object(g.a)({elevation:6,variant:"filled"},e))},W=function(e){var t=e.mess;w();return Object(r.jsxs)(N,{severity:"error",children:["Your ",t," in weather database"]})},S=a(15),C=a(167),M=Object(S.a)({root:{"& label.Mui-focused":{color:"blue",fontWeight:"bold",textShadow:"0 0 2px rgba(0, 0, 0, .3)",fontSize:"22px"},"& .MuiInput-underline:after":{borderBottomColor:"#fff"},"& .MuiOutlinedInput-root":{"& fieldset":{border:"3px solid blue",borderRadius:"5px",color:"blue"},"&:hover fieldset":{borderColor:"#fff"},"&.Mui-focused fieldset":{borderColor:"#fff"}}}})(C.a),T=Object(_.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"center"},margin:{margin:e.spacing(1),width:"320px",backgroundColor:"rgba(255,255,255,.6)"}}})),D=i.a.memo((function(e){var t=e.onChange,a=e.onClick,c=e.value,n=T();return Object(r.jsx)("form",{className:n.root,noValidate:!0,children:Object(r.jsx)(M,{className:n.margin,label:"Search weather...",variant:"outlined",id:"custom-css-outlined-input",autoFocus:!0,onChange:function(e){return t(e)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),a())},value:c})})})),A=a(129);function k(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],i=t[1],l=Object(n.useState)(""),j=Object(c.a)(l,2),b=j[0],p=j[1],O=Object(s.c)((function(e){return e.geolocation.city})),x=Object(s.c)((function(e){return e.geolocation.country})),m=Object(s.c)((function(e){return e.weather.weather})),v=Object(s.c)((function(e){return e.weather.weatherSearch})),g=Object(s.c)((function(e){return e.weather.city})),y=Object(s.c)((function(e){return e.weather.country})),_=Object(s.c)((function(e){return e.errorMess.isLoading})),w=Object(s.c)((function(e){return e.errorMess.isLoading2})),N=Object(s.c)((function(e){return e.errorMess.error})),S=Object(s.c)((function(e){return e.errorMess.errorSearch})),C=Object(s.b)();Object(n.useEffect)((function(){0===O.length&&C(Object(d.b)())}),[]);var M=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],T=new Date,k="".concat(M[T.getDay()],", ").concat(T.getDate()," ").concat(["January","February","March","April","May","June","July","August","September","October","Nocvember","December"][T.getMonth()]),F=T.getDay(),G=F+v.length+1,J=[];return J.push(M.slice(F,G)),Object(r.jsx)("div",{children:_?Object(r.jsx)(o,{}):Object(r.jsxs)(r.Fragment,{children:[0!==O.length&&Object(r.jsx)(u,{city:O,country:x,weather:m,dates:k}),N&&Object(r.jsx)(W,{mess:N}),Object(r.jsx)("hr",{}),Object(r.jsx)(D,{onChange:function(e){i(e.target.value)},onClick:function(){b!==a&&(p(a),C(Object(h.b)(a)))},value:a}),w&&Object(r.jsx)(A.a,{}),S&&Object(r.jsx)(W,{mess:S}),0!==v.length&&Object(r.jsx)(f,{searchArr:v,searchCity:g,searchCountry:y,newDays:J})]})})}}}]);
//# sourceMappingURL=3.9a61a157.chunk.js.map