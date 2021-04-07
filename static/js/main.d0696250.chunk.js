(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{33:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(24),a=n.n(i),o=(n(33),n(12)),s=n(14),j=n(11),d=n(5),l=n(3),b={increment:"increment",decrement:"decrement",set:"set",remove:"remove"},h=r.a.createContext({}),O=n(2);function u(){return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{children:"Home"})})}var x,p={"9owJZnxf5J":{title:"Ball Bearings (Bag of 1,000)",category:["Adventuring gear"],price:100,weight:2},"5gMwSTWXgS":{title:"Battleaxe",category:["Martial weapon","melee weapon"],price:1e3,weight:4},"6EKYYaFobP":{title:"Drow Poison",category:["Adventuring gear","Poison"],price:2e4},"9XKcPV2CVl":{title:"Hempen Rope (50 ft)",category:["Adventuring gear"],price:100,weight:10},"3Jk6vansY2":{title:"Lute",category:["Instrument"],price:3500,weight:2}},g=function(e){return"$".concat((e/100).toFixed(2))},v=n(8),m=n(9),f={btnBg:"palevioletred"},y=m.a.button(x||(x=Object(v.a)(["\n  --font-size: 1.2rem;\n  font-size: var(--font-size);\n  border: none;\n  border: "," 2px solid;\n  border-radius: 10px;\n  padding: 0.5em 1em;\n  margin: 0.5em;\n  font-weight: bold;\n  background: ",";\n  transition: 0.2s ease-in-out;\n  overflow: visible;\n\n  &:hover {\n    background: ",";\n    color: white;\n    > * {\n      transform: scale(1.5);\n    }\n  }\n\n  &:focus,\n  &:active {\n    outline: none;\n    border: 2px solid gold;\n  }\n\n  /* I want to transform:scale contents on hover, so they need transition */\n  > * {\n    transition: 0.1s ease-in-out;\n  }\n\n  /* in lieu of margin collapsing */\n  + Button {\n    margin-left: 0;\n  }\n\n  /* otherwise, react-icons disappear */\n  svg {\n    overflow: visible;\n  }\n"])),f.btnBg,(function(e){return e.primary?f.btnBg:"none"}),f.btnBg);function w(e){var t=e.id,n=Object(c.useContext)(h).cartDispatch;return Object(O.jsx)(y,{onClick:function(){return n({type:b.increment,id:t})},children:"Add to cart"})}function S(e){var t=e.id,n=e.product;return Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:n.title}),Object(O.jsx)("p",{children:g(n.price)}),Object(O.jsx)("ul",{children:n.category.map((function(e){return Object(O.jsx)("li",{children:e},e)}))}),Object(O.jsx)(d.b,{to:"/shop/".concat(t),children:"Learn more"}),Object(O.jsx)(w,{id:t})]})}function k(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Shop"}),Object(O.jsx)("ul",{children:Object.entries(p).map((function(e){var t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(O.jsx)(S,{id:n,product:c},n)}))})]})}var C,B,z,A=n(28),I=Object(m.a)(y)(C||(C=Object(v.a)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 50%;\n  color: ",";\n  font-weight: bold;\n  width: 2em;\n  height: 2em;\n  overflow: hidden;\n"])),f.btnBg),J=m.a.div(B||(B=Object(v.a)(["\n  display: flex;\n  align-items: center;\n"]))),P=m.a.input(z||(z=Object(v.a)(["\n  font-size: 1.4rem;\n  border-radius: 15px;\n  border: 2px solid grey;\n  padding: 0.2rem 0;\n  padding-left: 1.2rem;\n  width: 4rem;\n  display: flex;\n  align-items: center;\n"])));function D(e){var t,n=e.id,r=Object(c.useContext)(h),i=r.cartState,a=r.cartDispatch,o=null!==(t=i[n])&&void 0!==t?t:0;return Object(O.jsxs)(J,{children:[Object(O.jsx)(I,{onClick:function(){a({type:b.remove,id:n})},children:Object(O.jsx)(A.a,{})}),Object(O.jsx)(I,{onClick:function(){o<=0||a({type:b.decrement,id:n})},children:Object(O.jsx)("span",{children:" - "})}),Object(O.jsx)(P,{type:"number",value:o,onChange:function(e){a({type:b.set,id:n,quantity:Math.floor(Math.abs(e.target.value))})}}),Object(O.jsx)(I,{onClick:function(){a({type:b.increment,id:n})},children:Object(O.jsx)("span",{children:" + "})})]})}function E(){var e=Object(c.useContext)(h).cartState;if(0===Object.entries(e).length)return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Cart"}),Object(O.jsx)("h2",{children:"Hmmm... There doesn't seem to be anything here!"}),Object(O.jsxs)("p",{children:["Head over to the ",Object(O.jsx)(d.b,{to:"/shop",children:"Shop"})," page to start adding items to your cart!"]})]});var t=Object.entries(e).reduce((function(e,t){var n=Object(o.a)(t,2),c=n[0],r=n[1];return e+p[c].price*r}),0);return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Cart"}),Object(O.jsx)("ul",{children:Object.entries(e).map((function(e){var t=Object(o.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("li",{children:[Object(O.jsx)("b",{children:p[n].title})," - ",c," -"," ",g(p[n].price*c),Object(O.jsx)(D,{id:n})]},n)}))}),Object(O.jsxs)("div",{children:["Total: ",g(t)]}),Object(O.jsx)(y,{children:"Proceed to checkout"})]})}function H(){var e=Object(l.g)().productId,t=p[e];return t?Object(O.jsxs)("div",{children:[Object(O.jsx)(d.b,{to:"/shop",children:"Back to shop"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:t.title}),Object(O.jsx)("p",{children:e}),Object(O.jsx)("p",{children:g(t.price)}),t.weight&&Object(O.jsxs)("p",{children:[t.weight," lb"]}),Object(O.jsx)("ul",{children:t.category.map((function(e){return Object(O.jsx)("li",{children:e},e)}))}),Object(O.jsx)(D,{id:e})]})]}):Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Oops! Sorry about that..."}),Object(O.jsxs)("p",{children:["Could not find product id ",e]}),Object(O.jsx)(d.b,{to:"/shop",children:"Back to shop"})]})}var M,N=n(22);function T(e){var t=e.to,n=e.activeStyle,r=Object(l.f)(),i=Object(c.useContext)(h).cartState;return Object(O.jsxs)(d.c,{to:t,activeStyle:n,children:["/cart"===r.pathname?Object(O.jsx)(N.a,{}):Object(O.jsx)(N.b,{}),"(",Object.entries(i).length,")"]})}var Y,q=m.a.nav(M||(M=Object(v.a)(["\n  /* position: sticky;  how does this work again??*/\n  box-sizing: border-box;\n  background: black;\n  color: white;\n  padding: 0.2rem 0;\n  font-size: 1.2rem;\n\n  ul {\n    display: flex;\n    justify-content: space-around;\n    padding: 0;\n  }\n\n  li {\n    list-style: none;\n  }\n\n  a {\n    color: white;\n    text-decoration: none;\n    text-align: center;\n  }\n"]))),F=m.a.main(Y||(Y=Object(v.a)(["\n  padding: 0 2rem;\n  margin: auto;\n  max-width: 40rem;\n  font-size: 1.2rem;\n"]))),K=function(e,t){var n=t.type,c=t.id,r=t.quantity,i=t.data;e[c]||(e[c]=0);var a=n;switch(n===b.decrement&&e[c]<=1&&(a=b.remove),a){case b.increment:return Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},c,e[c]+1));case b.decrement:if(e[c]>1)return Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},c,e[c]-1));var o=Object(j.a)({},e);return delete o[c],o;case b.set:return Object(j.a)(Object(j.a)({},e),{},Object(s.a)({},c,r));case b.setAll:return i;case b.remove:var d=Object(j.a)({},e);return delete d[c],d;default:throw new Error("Unhandled cart action type ".concat(n))}};var L=function(){var e=Object(c.useReducer)(K,{}),t=Object(o.a)(e,2),n=t[0],r=t[1];Object(c.useEffect)((function(){var e=localStorage.getItem("cart");e&&r({type:b.setAll,data:JSON.parse(e)})}),[]),Object(c.useEffect)((function(){localStorage.setItem("cart",JSON.stringify(n))}),[n]);var i={textDecoration:"underline",fontWeight:"bold"};return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(d.a,{basename:"shopping-cart",children:Object(O.jsxs)(h.Provider,{value:{cartState:n,cartDispatch:r},children:[Object(O.jsx)(q,{children:Object(O.jsxs)("ul",{className:"nav",children:[Object(O.jsx)("li",{children:Object(O.jsx)(d.c,{to:"/",activeStyle:i,exact:!0,children:"Home"})}),Object(O.jsx)("li",{children:Object(O.jsx)(d.c,{to:"/shop",activeStyle:i,children:"Shop"})}),Object(O.jsx)("li",{children:Object(O.jsx)(T,{to:"/cart",activeStyle:i,children:"Cart"})})]})}),Object(O.jsx)(F,{children:Object(O.jsxs)(l.c,{children:[Object(O.jsx)(l.a,{path:"/",exact:!0,children:Object(O.jsx)(u,{})}),Object(O.jsx)(l.a,{path:"/shop",exact:!0,children:Object(O.jsx)(k,{})}),Object(O.jsx)(l.a,{path:"/shop/:productId",children:Object(O.jsx)(H,{})}),Object(O.jsx)(l.a,{path:"/cart",children:Object(O.jsx)(E,{})})]})})]})})})};a.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.d0696250.chunk.js.map