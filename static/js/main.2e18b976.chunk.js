(this["webpackJsonpmyfood-app"]=this["webpackJsonpmyfood-app"]||[]).push([[0],{66:function(e,n,t){},94:function(e,n,t){"use strict";t.r(n);var c,a,r,i,s,o,d=t(0),j=t.n(d),l=t(10),b=t.n(l),x=(t(66),t(6)),p=t(36),u=t.n(p),O=t(50),h=t(21),g=t(7),f=t(54),m=t.n(f),v=t(2),y=g.a.div(c||(c=Object(x.a)(["\nbackground-color:lightgreen;\ndisplay:flex;\nflex-direction:row;\npadding:10px 0px;\nheight:50px;\njustify-content:center;\nalin-items:center\n"]))),w=(g.a.img(a||(a=Object(x.a)(["\nwidth:30px;\nheight:30px\n"]))),g.a.div(r||(r=Object(x.a)(["\ndisplay:flex;\nalign-items:center;\ncolor:red;\n"])))),k=g.a.div(i||(i=Object(x.a)(["\nbackground-color:#fff;\ndisplay:flex;\nalign-items:center;\npadding:0px 10px;\nmargin:5px;\ncolor:gray;\nborder-radius:5px;\n"]))),C=(g.a.span(s||(s=Object(x.a)(["\n  color:black\n"]))),g.a.input(o||(o=Object(x.a)(["\n\n"]))));var S,F,I,H,J,M,T,W=function(e){return Object(v.jsxs)(y,{children:[Object(v.jsx)("img",{src:"./favicon.ico"}),Object(v.jsx)(w,{children:"Food Finder"}),Object(v.jsxs)(k,{children:[Object(v.jsx)(m.a,{}),Object(v.jsx)(C,{type:"text",name:"search",value:e.value,onChange:e.textChangeHandler})]})]})},_=t(59),q=t.n(_),B=t(120),D=t(119),E=t(117),N=t(118),z=(g.a.div(S||(S=Object(x.a)(["\ndisplay:flex;\nflex-direction:row;\n"]))),g.a.div(F||(F=Object(x.a)(["\nwidth:220px;\nbox-shadow:0px 4px 5px #ccc;\nborder:1px solid gray;\nmargin-bottom:20px;\npadding:5px\n"])))),A=g.a.img(I||(I=Object(x.a)(["\nheight:220px;\nobject-fit:cover;\n"]))),G=g.a.h4(H||(H=Object(x.a)(["\n\npadding-right:12px"]))),K=g.a.p(J||(J=Object(x.a)(["\nborder-radius:5px;\nborder:1px solid gray;\npadding:8px;\nmargin:10px;\ndisplay:flex;\njustify-content:center;\nalign-items:center;\ntext-transform: uppercase\n"]))),L=g.a.button(M||(M=Object(x.a)(["\nborder:1px solid gree;\n"]))),P=g.a.button(T||(T=Object(x.a)(["\nborder:1px solid red;\n"])));var Q,R=function(e){var n=Object(d.useState)(!1),t=Object(h.a)(n,2),c=t[0],a=t[1],r=e.data.ingredients;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)(D.a,{open:c,onClose:function(){return a(!1)},children:[Object(v.jsx)(B.a,{id:"alert-dialog-title",children:"Ingredients"}),Object(v.jsx)(E.a,{children:Object(v.jsxs)("table",{border:"1",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Ingredients"}),Object(v.jsx)("th",{children:"Weight"})]})}),Object(v.jsx)("tbody",{children:r.map((function(e,n){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.text}),Object(v.jsx)("td",{children:e.weight})]},n)}))})]})}),Object(v.jsxs)(N.a,{children:[Object(v.jsx)(L,{onClick:function(){return window.open(e.data.url)},color:"primary",children:"See More"}),Object(v.jsx)(P,{onClick:function(){return a("")},color:"primary",autoFocus:!0,children:"Close"})]})]}),Object(v.jsxs)(z,{children:[Object(v.jsx)(A,{src:e.data.image}),Object(v.jsx)(G,{children:e.data.label}),Object(v.jsx)(K,{onClick:function(){return a(!0)},children:"Ingredients"})]})]})};var U=function(){var e=Object(d.useState)(""),n=Object(h.a)(e,2),t=n[0],c=n[1],a=Object(d.useState)([]),r=Object(h.a)(a,2),i=r[0],s=r[1],o=Object(d.useState)([]),j=Object(h.a)(o,2),l=j[0],b=j[1],p=function(){var e=Object(O.a)(u.a.mark((function e(n){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.get("https://api.edamam.com/search?q=".concat(n,"&app_id=").concat("6a49485d","&app_key=").concat("f326ba4cce3d5ae2fe9fe42c81b29022"));case 2:t=e.sent,s(t.data.hits),console.log(t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=g.a.img(Q||(Q=Object(x.a)(["\n\n"])));return Object(v.jsxs)("div",{children:[Object(v.jsx)(W,{textChangeHandler:function(e){clearTimeout(l),c(e.target.value);var n=setTimeout((function(){return p(e.target.value)}),500);b(n)}}),Object(v.jsx)("div",{className:"main",style:{margin:"30px",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"},children:i.length>0?i.map((function(e,n){return Object(v.jsx)(R,{data:e.recipe,value:t},n)})):Object(v.jsx)(f,{src:"./favicon.ico"})})]})};b.a.render(Object(v.jsx)(j.a.StrictMode,{children:Object(v.jsx)(U,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.2e18b976.chunk.js.map