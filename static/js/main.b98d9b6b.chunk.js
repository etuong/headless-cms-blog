(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{56:function(e,t,a){},74:function(e,t){},76:function(e,t,a){var c={"./my-rating-component.entry.js":[78,4]};function s(e){if(!a.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],s=t[0];return a.e(t[1]).then((function(){return a(s)}))}s.keys=function(){return Object.keys(c)},s.id=76,e.exports=s},77:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),r=a(41),n=a.n(r),i=(a(56),a(13)),o=a(4),j=Object({NODE_ENV:"production",PUBLIC_URL:"/headless-cms-blog",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_STRAPI_URL,d=a(0),l=function(e){return Object(d.jsx)("div",{className:"container",children:e.data.map((function(e){return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card__header",children:Object(d.jsx)("img",{src:"".concat(j).concat(e.attributes.image.data.attributes.url)})}),Object(d.jsxs)("div",{className:"card__body",children:[Object(d.jsx)("div",{children:e.attributes.categories.data.map((function(e,t){return Object(d.jsx)("span",{className:"tag tag-red",children:e.attributes.name},t)}))}),Object(d.jsx)("h4",{children:e.attributes.title}),Object(d.jsxs)("p",{children:[e.attributes.body.substring(0,200),"..."]}),Object(d.jsx)(i.b,{to:"/details/".concat(e.id),children:"Read more"})]}),Object(d.jsx)("div",{className:"card__footer",children:Object(d.jsxs)("div",{className:"user",children:[Object(d.jsx)("img",{src:"".concat(j).concat(e.attributes.avatar.data.attributes.url),className:"user__image",width:"40",height:"40"}),Object(d.jsxs)("div",{className:"user__info",children:[Object(d.jsx)("h5",{children:e.attributes.author}),Object(d.jsx)("small",{children:(t=e.attributes.updatedAt,new Date(t).toLocaleString().split(",")[0])})]})]})})]},e.id);var t}))})},b=a(12),u=a(16),m=a(9),O=function(e){var t=Object(c.useState)(null),a=Object(m.a)(t,2),s=a[0],r=a[1],n=Object(c.useState)(null),i=Object(m.a)(n,2),o=i[0],j=i[1],d=Object(c.useState)(!0),l=Object(m.a)(d,2),O=l[0],h=l[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(u.a)(Object(b.a)().mark((function t(){var a,c;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.prev=1,t.next=4,fetch(e);case 4:return a=t.sent,t.next=7,a.json();case 7:c=t.sent,r(c.data),h(!1),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),j(t.t0),h(!1);case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),{loading:O,error:o,data:s}};function h(){var e=O("".concat(j,"/api/reviews?populate=*")),t=e.loading,a=e.error,c=e.data;return t?Object(d.jsx)("p",{children:"Loading..."}):a?Object(d.jsx)("p",{children:"Error :("}):Object(d.jsx)(l,{data:c})}var x=a(3),p=a(48);function f(){var e=Object(c.useState)([]),t=Object(m.a)(e,2),a=t[0],s=t[1],r=Object(o.f)().id,n=O("".concat(j,"/api/reviews/").concat(r,"?populate=*")),i=n.loading,l=n.error,h=n.data;if(Object(c.useEffect)((function(){h&&h.attributes.comments&&s(h.attributes.comments.data)}),[h]),i)return Object(d.jsx)("p",{children:"Loading..."});if(l)return Object(d.jsx)("p",{children:"Error :("});var f=function(){var e=Object(u.a)(Object(b.a)().mark((function e(t){var c,n,i,o;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c=t.currentTarget,n=c.elements,e.next=6,fetch("".concat(j,"/api/comments"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{author:n.name.value,message:n.message.value,review:r}})});case 6:if(200!==(i=e.sent).status){e.next=13;break}return e.next=10,i.json();case 10:o=e.sent,s([].concat(Object(x.a)(a),[o.data])),c.reset();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"content-area",children:[Object(d.jsx)("div",{className:"blog-post-main-image",children:Object(d.jsx)("img",{className:"post-image img-responsive",src:"".concat(j).concat(h.attributes.image.data.attributes.url)})}),Object(d.jsxs)("div",{className:"blog-post-content",children:[Object(d.jsx)("h1",{children:h.attributes.title}),Object(d.jsxs)("div",{className:"entry-meta",children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("i",{className:"fa fa-fw fa-clock"}),"".concat(new Date(h.attributes.updatedAt))]}),Object(d.jsx)("span",{className:"divider",children:"|"}),Object(d.jsxs)("span",{children:[Object(d.jsx)("i",{className:"fa fa-fw fa-user"}),h.attributes.author]})]}),Object(d.jsxs)("div",{className:"entry-meta",children:["Rating: ",Object(d.jsx)("my-rating-component",{maxstars:"10",rating:h.attributes.rating,color:"red",class:"ratings"})]}),Object(d.jsx)(p.a,{children:h.attributes.body}),Object(d.jsxs)("div",{className:"post-comments",children:[Object(d.jsx)("div",{className:"block-title",children:Object(d.jsxs)("h3",{children:["Comments (",a.length,")"]})}),a.map((function(e,t){return Object(d.jsx)("div",{className:"media",children:Object(d.jsxs)("div",{className:"media-body",children:[Object(d.jsxs)("div",{className:"media-heading",children:[e.attributes.author,Object(d.jsx)("span",{className:"divider",children:"|"})," ",Object(d.jsx)("span",{className:"light-gray",children:"".concat(new Date(e.attributes.updatedAt).toString().split(" ").slice(0,5).join(" "))})]}),Object(d.jsx)("p",{children:e.attributes.message})]})},t)}))]}),Object(d.jsxs)("div",{className:"post-comment-add",children:[Object(d.jsx)("div",{className:"block-title",children:Object(d.jsx)("h3",{children:"Leave a Comment"})}),Object(d.jsxs)("form",{className:"form-add-comment",onSubmit:f,children:[Object(d.jsxs)("div",{className:"form-group form-group-with-icon",children:[Object(d.jsx)("i",{className:"fa fa-user"}),Object(d.jsx)("input",{className:"form-control",placeholder:"Your Name",name:"name",required:!0}),Object(d.jsx)("div",{className:"form-control-border"})]}),Object(d.jsxs)("div",{className:"form-group form-group-with-icon",children:[Object(d.jsx)("i",{className:"fa fa-comment"}),Object(d.jsx)("textarea",{className:"form-control",placeholder:"Message",name:"message",required:!0}),Object(d.jsx)("div",{className:"form-control-border"})]}),Object(d.jsx)("button",{className:"button",type:"submit",children:"Add comment"})]})]})]})]})}function v(){var e=a(64).stringify({populate:{reviews:{populate:"*"}}},{encodeValuesOnly:!0}),t=Object(o.f)().id,c=O("http://localhost:1337/api/categories/".concat(t,"?").concat(e)),s=c.loading,r=c.error,n=c.data;return s?Object(d.jsx)("p",{children:"Loading..."}):r?Object(d.jsx)("p",{children:"Error :("}):Object(d.jsx)(l,{data:n.attributes.reviews.data})}var g=function(){var e=O("http://localhost:1337/api/categories"),t=e.loading,a=e.error,c=e.data;return t?Object(d.jsx)("p",{children:"Loading..."}):a?Object(d.jsx)("p",{children:"Error :("}):Object(d.jsxs)("div",{className:"site-header",children:[Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("h1",{children:"Learn Strapi With Ethan"})}),Object(d.jsxs)("nav",{className:"categories",children:[Object(d.jsx)("span",{children:"Filter reviews by category:"}),c.map((function(e){return Object(d.jsx)(i.b,{to:"/category/".concat(e.id),children:e.attributes.name},e.id)}))]})]})};var N=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(g,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(h,{})}),Object(d.jsx)(o.a,{path:"/details/:id",children:Object(d.jsx)(f,{})}),Object(d.jsx)(o.a,{path:"/category/:id",children:Object(d.jsx)(v,{})})]})]})})},y=a(38);n.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),Object(y.a)().then((function(){Object(y.b)(window)}))}},[[77,2,3]]]);
//# sourceMappingURL=main.b98d9b6b.chunk.js.map