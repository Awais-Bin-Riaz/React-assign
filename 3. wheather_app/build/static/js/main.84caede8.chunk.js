(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{20:function(e,t,n){},40:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(2),i=n.n(c),a=n(15),s=n.n(a),o=(n(20),n(3)),r=n(6),d=n.n(r),l=(n(40),n.p+"static/media/sun.fe34120f.png"),j=n.p+"static/media/moon.9591331a.png",u=n(0);var h=function(){var e,t,n=Object(c.useState)(!0),i=Object(o.a)(n,2),a=i[0],s=i[1],r=Object(c.useState)(null),h=Object(o.a)(r,2),b=h[0],m=h[1],p=Object(c.useState)(null),O=Object(o.a)(p,2),g=O[0],x=O[1],f=Object(c.useState)(!0),y=Object(o.a)(f,2),v=y[0],C=y[1],w=(new Date).getHours();function k(){var e=document.getElementById("icon"),t=document.querySelector("body");e.src=v?l:j,t.className=v?"Dark":"Light",e.alt=v?"Sun":"Moon",C(!v)}return Object(c.useEffect)((function(){var n=document.getElementById("icon"),c=document.querySelector("body");if(w>=19||w<6?(c.className="Dark",n.src=l,n.alt="Sun",C(!1)):(c.className="Light",n.src=j,n.alt="Moon",C(!0)),null!=g)d.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(g,"&appid=e1c32dd0eb29cd3b266f3b06ff7c70b4&units=metric")).then((function(e){var t=e.data;m(t)})).catch((function(e){alert("Something went wrong!\n".concat(e))}));else{navigator.geolocation?navigator.geolocation.getCurrentPosition((function(n){e=n.coords.latitude,t=n.coords.longitude,d.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=e1c32dd0eb29cd3b266f3b06ff7c70b4&units=metric")).then((function(e){var t=e.data;m(t)})).catch((function(e){alert("Something went wrong!\n".concat(e))}))})):alert("Geolocation is not supported by this browser.")}}),[a,g,e,t]),null!=b?Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:"div2",children:[Object(u.jsx)("h1",{children:"City Weather App"}),Object(u.jsx)("input",{placeholder:" city name",id:"city"}),Object(u.jsx)("button",{onClick:function(){x(document.getElementById("city").value),s(!a)},children:"Check"}),Object(u.jsx)("img",{src:j,alt:"Moon",onClick:k,id:"icon"})]}),Object(u.jsxs)("div",{className:"div1",children:[Object(u.jsx)("h1",{children:b.name}),Object(u.jsx)("p",{id:"desc",children:b.weather[0].description}),Object(u.jsxs)("h1",{id:"temp",children:[b.main.temp,"'C"]}),Object(u.jsxs)("p",{children:[Object(u.jsxs)("span",{children:["Latitude: ",b.coord.lat]}),"\xa0\xa0\xa0\xa0\xa0",Object(u.jsxs)("span",{children:["Longitude: ",b.coord.lon]})]})]}),Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:["Country : ",b.sys.country]}),Object(u.jsxs)("li",{children:["Feels Like : ",b.main.feels_like,"'C"]}),Object(u.jsxs)("li",{children:["Humidity : ",b.main.humidity,"g/kg"]}),Object(u.jsxs)("li",{children:["Pressure : ",b.main.pressure," Pa"]}),Object(u.jsxs)("li",{children:["Max Temperature : ",b.main.temp_max,"'C"]}),Object(u.jsxs)("li",{children:["Min Temperature : ",b.main.temp_min,"'C"]}),Object(u.jsxs)("li",{children:["Wind Direction : ",b.wind.deg," degree"]}),Object(u.jsxs)("li",{children:["Wind Speed : ",b.wind.speed,"m/s"]})]})]}):Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:"div2",children:[Object(u.jsx)("h1",{children:"City Weather App"}),Object(u.jsx)("input",{placeholder:" city name",id:"city"}),Object(u.jsx)("button",{onClick:function(){x(document.getElementById("city").value),s(!a)},children:"check"}),Object(u.jsx)("img",{src:j,alt:"Moon",onClick:k,id:"icon"})]})})},b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(h,{})}),document.getElementById("root")),b()}},[[42,1,2]]]);
//# sourceMappingURL=main.84caede8.chunk.js.map