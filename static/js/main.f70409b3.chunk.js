(this["webpackJsonpfashion-website"]=this["webpackJsonpfashion-website"]||[]).push([[0],{37:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),i=c(8),s=c.n(i),a=(c(37),c(9)),l=c(10),d=c(15),o=c(14),j=c(4),u=c(7),b=c.n(u),h=c(3),O=c(22),p=c.n(O),x=c(29),f="FETCH_DATA_SUCCESS",m="FILTER_PRODUCTS_BY_SIZE",v="ORDER_PRODUCTS_BY_PRICE",g=function(e){return{type:f,payload:e.products}},y="ADD_TO_CART",C="REMOVE_FROM_CART",N=c(11),S=c.n(N),P=c(12),_=c.n(P),T=c(0),A=function(e){Object(d.a)(c,e);var t=Object(o.a)(c);function c(){return Object(a.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return Object(T.jsx)(S.a,{isOpen:!0,onRequestClose:this.props.closeModal,children:Object(T.jsxs)(_.a,{children:[Object(T.jsx)("button",{className:"close-modal",onClick:this.props.closeModal,children:"X"}),Object(T.jsxs)("div",{className:"product-details",children:[Object(T.jsx)("img",{src:this.props.product.image,alt:this.props.product.title}),Object(T.jsxs)("div",{className:"product-details-description",children:[Object(T.jsx)("p",{children:Object(T.jsx)("strong",{children:this.props.product.title})}),Object(T.jsx)("p",{children:this.props.product.description}),Object(T.jsxs)("p",{children:["Available Sizes: ",this.props.product.availableSizes.map((function(e){return Object(T.jsx)("button",{className:"button",children:e})}))]}),Object(T.jsxs)("div",{className:"product-price",children:[Object(T.jsx)("div",{children:"$ "+this.props.product.price}),Object(T.jsx)("button",{className:"button primary",onClick:this.props.addToCart,children:"Add to Cart"})]})]})]})]})})}}]),c}(r.Component),R=Object(h.b)((function(e){return{products:e.product.filteredProducts}}),(function(e){return{fetchProduct:function(){return e(function(){var e=Object(x.a)(p.a.mark((function e(t){var c,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./data.json");case 2:return c=e.sent,e.next=5,c.json();case 5:r=e.sent,t(g(r));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},AddToCart:function(t,c){return e(function(e,t){return{type:y,payload:{item:e,product:t}}}(t,c))}}}))((function(e){var t=e.fetchProduct,c=e.products,i=e.AddToCart,s=Object(r.useState)({}),a=Object(j.a)(s,2),l=a[0],d=a[1],o=Object(r.useState)(!1),u=Object(j.a)(o,2),h=u[0],O=u[1];Object(r.useEffect)((function(){t()}),[]);var p=function(){O(!1)};return Object(T.jsxs)(n.a.Fragment,{children:[h&&Object(T.jsx)(A,{product:l,closeModal:p,addToCart:function(){i(l,c),p()}}),Object(T.jsx)(b.a,{bottom:!0,cascade:!0,children:Object(T.jsx)("ul",{className:"products",children:c.map((function(e){return Object(T.jsx)("li",{children:Object(T.jsxs)("div",{className:"product",children:[Object(T.jsxs)("a",{href:"#"+e._id,onClick:function(){return function(e){O(!0),d(e)}(e)},children:[Object(T.jsx)("img",{src:"/fashiom-website"+e.image,alt:e.title}),Object(T.jsx)("p",{children:e.title})]}),Object(T.jsxs)("div",{className:"product-price",children:[Object(T.jsx)("div",{children:"$"+e.price}),Object(T.jsx)("button",{onClick:function(){return i(e,c)},className:"button primary",children:"Add To Cart"})]})]})},e._id)}))})})]})})),k=Object(h.b)((function(e){return{sort:e.product.sort,size:e.product.size,filterProducts:e.product.filteredProducts,products:e.product.product}}),(function(e){return{FilterProduct:function(t,c){return e(function(e,t){return{type:m,payload:{size:t,item:""===t?e:e.filter((function(e){return e.availableSizes.indexOf(t)>=0}))}}}(t,c))},sortProduct:function(t,c){return e(function(e,t){var c=e.slice();return"latest"===t?c.sort((function(e,t){return e._id>t._id?1:-1})):c.sort((function(e,c){return"lowest"===t?e.price>c.price?1:-1:e.price>c.price?-1:1})),{type:v,payload:{sort:t,products:c}}}(t,c))}}}))((function(e){return Object(T.jsxs)("div",{className:"filter",children:[Object(T.jsxs)("div",{className:"filter-result",children:[e.filterProducts.length," Products"]}),Object(T.jsxs)("div",{className:"filter-sort",children:["Order  "," ",Object(T.jsxs)("select",{value:e.sort,onChange:function(t){return e.sortProduct(e.filterProducts,t.target.value)},children:[Object(T.jsx)("option",{value:"letest",children:"Latest"}),Object(T.jsx)("option",{value:"lowest",children:"lowest"}),Object(T.jsx)("option",{value:"highest",children:"highest"})]})]}),Object(T.jsxs)("div",{className:"filter-size",children:["Filter "," ",Object(T.jsxs)("select",{value:e.filter,onChange:function(t){return e.FilterProduct(e.products,t.target.value)},children:[Object(T.jsx)("option",{value:"",children:"All"}),Object(T.jsx)("option",{value:"XS",children:"XS"}),Object(T.jsx)("option",{value:"S",children:"S"}),Object(T.jsx)("option",{value:"M",children:"M"}),Object(T.jsx)("option",{value:"L",children:"L"}),Object(T.jsx)("option",{value:"XL",children:"XL"}),Object(T.jsx)("option",{value:"XXL",children:"XXL"})]})]})]})})),w=c(13),E=c(2),F=Object(h.b)((function(e){return{cart:e.cart.cart}}))((function(e){var t=e.cart,c=Object(r.useState)(""),n=Object(j.a)(c,2),i=n[0],s=n[1],a=Object(r.useState)([]),l=Object(j.a)(a,2),d=l[0],o=l[1],u=Object(r.useState)(!1),h=Object(j.a)(u,2),O=h[0],p=h[1],x=function(e){s((function(t){return Object(E.a)(Object(E.a)({},t),{},Object(w.a)({},e.target.name,e.target.value))}))};return O?Object(T.jsx)(S.a,{isOpen:!0,onRequestClose:function(){return p(!1)},children:Object(T.jsxs)(_.a,{children:[Object(T.jsx)("button",{className:"close-modal",onClick:function(){return p(!1)},children:"x"}),Object(T.jsxs)("div",{className:"order-details",children:[Object(T.jsx)("h3",{className:"success-message",children:"Your order has been placed."}),Object(T.jsxs)("h2",{children:["Order ",d._id]}),Object(T.jsxs)("ul",{children:[Object(T.jsxs)("li",{children:[Object(T.jsx)("div",{children:"Name:"}),Object(T.jsx)("div",{children:d.name})]}),Object(T.jsxs)("li",{children:[Object(T.jsx)("div",{children:"Email:"}),Object(T.jsx)("div",{children:d.email})]}),Object(T.jsxs)("li",{children:[Object(T.jsx)("div",{children:"Address:"}),Object(T.jsx)("div",{children:d.address})]}),Object(T.jsxs)("li",{children:[Object(T.jsx)("div",{children:"Date:"}),Object(T.jsx)("div",{children:d.createdAt})]}),Object(T.jsxs)("li",{children:[Object(T.jsx)("div",{children:"Total:"}),Object(T.jsx)("div",{children:"$ "+t.reduce((function(e,t){return e+t.price*t.count}),0)})]}),Object(T.jsxs)("li",{children:[Object(T.jsx)("div",{children:"Cart Items:"}),Object(T.jsx)("div",{children:t.map((function(e){return Object(T.jsxs)("div",{children:[e.count," "," x "," ",e.title]})}))})]})]})]})]})}):Object(T.jsx)(b.a,{right:!0,cascade:!0,children:Object(T.jsx)("div",{className:"cart",children:Object(T.jsx)("form",{onSubmit:function(e){return function(e){e.preventDefault(),o(i),p(!0)}(e)},children:Object(T.jsxs)("ul",{className:"form-container",children:[Object(T.jsxs)("li",{children:[Object(T.jsx)("label",{children:"Email"}),Object(T.jsx)("input",{name:"email",type:"email",required:!0,onChange:function(e){return x(e)}})]}),Object(T.jsxs)("li",{children:[Object(T.jsx)("label",{children:"Name"}),Object(T.jsx)("input",{name:"name",type:"text",required:!0,onChange:function(e){return x(e)}})]}),Object(T.jsxs)("li",{children:[Object(T.jsx)("label",{children:"Address"}),Object(T.jsx)("input",{name:"address",type:"text",required:!0,onChange:function(e){return x(e)}})]}),Object(T.jsx)("li",{children:Object(T.jsx)("button",{type:"submit",className:"button primary",children:"Check out"})})]})})})})})),z=Object(h.b)((function(e){return{cart:e.cart.cart}}),(function(e){return{removeItem:function(t){return e(function(e){return{type:C,payload:e}}(t))}}}))((function(e){var t=Object(r.useState)(!1),c=Object(j.a)(t,2),n=c[0],i=c[1];return Object(T.jsxs)("div",{children:[0===e.cart.length?Object(T.jsx)("div",{className:"cart cart-header",children:"Cart is empty"}):Object(T.jsxs)("div",{className:"cart cart-header",children:[" you have ",e.cart.length," in the cart "]}),Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{className:"cart",children:Object(T.jsx)(b.a,{left:!0,cascade:!0,children:Object(T.jsx)("ul",{className:"cart-items",children:e.cart.map((function(t){return Object(T.jsxs)("li",{children:[Object(T.jsx)("div",{children:Object(T.jsx)("img",{src:t.image,alt:t.title})}),Object(T.jsxs)("div",{children:[Object(T.jsx)("div",{children:t.title}),Object(T.jsxs)("div",{className:"right",children:["$ "+t.price+"x"+t.count+" ",Object(T.jsx)("button",{className:"button",onClick:function(){return e.removeItem(t)},children:"Remove"})]})]})]},t._id)}))})})}),0!==e.cart.length&&Object(T.jsxs)("div",{className:"checkout",children:[Object(T.jsxs)("div",{className:"total",children:[Object(T.jsxs)("div",{children:["Total : ","$ "+e.cart.reduce((function(e,t){return e+t.price*t.count}),0)]}),Object(T.jsx)("button",{className:"button primary",onClick:function(){i(!0)},children:"Proceed"})]}),n&&Object(T.jsx)(F,{})]})]})]})})),D=c(5),L=c(30),I=c(31),X=c.n(I),M=c(32),q={cart:[]},$={product:[],size:"",sort:"",filteredProducts:[]},B=Object(D.combineReducers)({product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(E.a)(Object(E.a)({},e),{},{product:t.payload,filteredProducts:t.payload});case m:return Object(E.a)(Object(E.a)({},e),{},{filteredProducts:t.payload.item,size:t.payload.size});case v:return Object(E.a)(Object(E.a)({},e),{},{filteredProducts:t.payload.products,sort:t.payload.sort});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var c=!1,r=e.cart.slice();return r.forEach((function(e){e._id===t.payload.item._id&&(c=!0,e.count++)})),c||r.push(Object(E.a)(Object(E.a)({},t.payload.item),{},{count:1})),{cart:r};case C:return{cart:e.cart.filter((function(e){return e._id!==t.payload._id}))};default:return e}}}),U=Object(D.createStore)(B,Object(L.composeWithDevTools)(Object(D.applyMiddleware)(X.a,M.a))),Y=function(e){Object(d.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(a.a)(this,c);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={products:[],cartItem:[],size:"",sort:""},e}return Object(l.a)(c,[{key:"render",value:function(){return Object(T.jsx)(h.a,{store:U,children:Object(T.jsxs)("div",{className:"grid-container",children:[Object(T.jsx)("header",{children:Object(T.jsx)("a",{href:"/",children:"React Shopping Cart "})}),Object(T.jsx)("main",{children:Object(T.jsxs)("div",{className:"content",children:[Object(T.jsxs)("div",{className:"main",children:[Object(T.jsx)(k,{}),Object(T.jsx)(R,{})]}),Object(T.jsx)("div",{className:"sidebar",children:Object(T.jsx)(z,{})})]})}),Object(T.jsx)("footer",{children:"All right is reserved"})]})})}}]),c}(r.Component),J=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,55)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),i(e),s(e)}))};s.a.render(Object(T.jsx)(n.a.Fragment,{children:Object(T.jsx)(Y,{})}),document.getElementById("root")),J()}},[[54,1,2]]]);
//# sourceMappingURL=main.f70409b3.chunk.js.map