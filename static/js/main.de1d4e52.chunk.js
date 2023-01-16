(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,t,a){},61:function(e,t){},63:function(e,t,a){var c={"./my-rating-component.entry.js":[65,4]};function r(e){if(!a.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],r=t[0];return a.e(t[1]).then((function(){return a(r)}))}r.keys=function(){return Object.keys(c)},r.id=63,e.exports=r},64:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),s=a(30),n=a.n(s),i=(a(38),a(9)),o=a(2),d=a(0);function l(){return Object(d.jsxs)("div",{className:"home",children:[Object(d.jsx)("p",{children:Object(d.jsx)("b",{children:"This web app works in conjunction with Strapi to create a full stack blogging website."})}),Object(d.jsx)("p",{children:"Strapi is a headless CMS (Content Management System). It is useful to rapidly create artifacts and assets in a content registry that can easily be pulled using RESTful API or GraphQL."}),Object(d.jsx)("p",{children:"Traditionally, we have CMS like Wordpress that requires a database to store content and there's also a presentation layer of template files that mix HTML with template tags."}),Object(d.jsx)("p",{children:"In this type of architecture, the frontend and backend are tighly coupled. Both the content and how it's presented are part of the same code base (aka monolithic architecture)."}),Object(d.jsxs)("p",{children:["You can create blogging contents on my \xa0",Object(d.jsx)("a",{href:"https://strapi-blogging-server.onrender.com/admin/",target:"_blank",rel:"noreferrer",children:"Strapi server"})," ","\xa0and use my dummy credentials to log in"]}),Object(d.jsx)("pre",{children:Object(d.jsxs)("code",{children:["Email: email@email.com",Object(d.jsx)("br",{}),"Password: Password1"]})}),Object(d.jsx)("p",{children:"To consume data from Strapi and blog here on this client, you'll need to create contents in the admin panel under Content Manager."})]})}var j=a(8),b=a(17),u=a(11),h=a(7),m=function(e){var t=Object(c.useState)(null),a=Object(h.a)(t,2),r=a[0],s=a[1],n=Object(c.useState)(null),i=Object(h.a)(n,2),o=i[0],d=i[1],l=Object(c.useState)(!0),b=Object(h.a)(l,2),m=b[0],O=b[1];return Object(c.useEffect)((function(){var t=function(){var t=Object(u.a)(Object(j.a)().mark((function t(){var a,c;return Object(j.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return O(!0),t.prev=1,t.next=4,fetch(e);case 4:return a=t.sent,t.next=7,a.json();case 7:c=t.sent,s(c.data),O(!1),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(1),d(t.t0),O(!1);case 16:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(){return t.apply(this,arguments)}}();t()}),[e]),{loading:m,error:o,data:r}};a(40).config({path:".env.".concat("production")});var O="https://strapi-blogging-server.onrender.com";function p(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),a=t[0],r=t[1],s=Object(o.f)().id,n=m("".concat(O,"/api/reviews/").concat(s,"?populate=*")),i=n.loading,l=n.error,p=n.data;if(Object(c.useEffect)((function(){p&&p.attributes.comments&&r(p.attributes.comments.data)}),[p]),i)return Object(d.jsx)("p",{children:"Loading..."});if(l)return Object(d.jsx)("p",{children:"Error :("});var x=function(){var e=Object(u.a)(Object(j.a)().mark((function e(t){var c,n,i,o;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,c=t.currentTarget,n=c.elements,e.next=6,fetch("".concat(O,"/api/comments"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:{author:n.name.value,message:n.message.value,review:s}})});case 6:if(200!==(i=e.sent).status){e.next=13;break}return e.next=10,i.json();case 10:o=e.sent,r([].concat(Object(b.a)(a),[o.data])),c.reset();case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"content-area",children:[Object(d.jsx)("div",{className:"blog-post-main-image",children:Object(d.jsx)("img",{className:"post-image img-responsive",src:"".concat(p.attributes.image.data.attributes.url),alt:""})}),Object(d.jsxs)("div",{className:"blog-post-content",children:[Object(d.jsx)("h1",{children:p.attributes.title}),Object(d.jsxs)("div",{className:"entry-meta",children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("i",{className:"fa fa-fw fa-clock"}),"".concat(new Date(p.attributes.updatedAt))]}),Object(d.jsx)("span",{className:"divider",children:"|"}),Object(d.jsxs)("span",{children:[Object(d.jsx)("i",{className:"fa fa-fw fa-user"}),p.attributes.author]})]}),Object(d.jsxs)("div",{className:"entry-meta",children:["Rating:"," ",Object(d.jsx)("my-rating-component",{maxstars:"10",rating:p.attributes.rating,color:"red",class:"ratings"})]}),Object(d.jsx)("div",{dangerouslySetInnerHTML:{__html:p.attributes.body}}),Object(d.jsxs)("div",{className:"post-comments",children:[Object(d.jsx)("div",{className:"block-title",children:Object(d.jsxs)("h3",{children:["Comments (",a.length,")"]})}),null===a||void 0===a?void 0:a.map((function(e,t){return Object(d.jsx)("div",{className:"media",children:Object(d.jsxs)("div",{className:"media-body",children:[Object(d.jsxs)("div",{className:"media-heading",children:[e.attributes.author,Object(d.jsx)("span",{className:"divider",children:"|"})," ",Object(d.jsx)("span",{className:"light-gray",children:"".concat(new Date(e.attributes.updatedAt).toString().split(" ").slice(0,5).join(" "))})]}),Object(d.jsx)("p",{children:e.attributes.message})]})},t)}))]}),Object(d.jsxs)("div",{className:"post-comment-add",children:[Object(d.jsx)("div",{className:"block-title",children:Object(d.jsx)("h3",{children:"Leave a Comment"})}),Object(d.jsxs)("form",{className:"form-add-comment",onSubmit:x,children:[Object(d.jsxs)("div",{className:"form-group form-group-with-icon",children:[Object(d.jsx)("i",{className:"fa fa-user"}),Object(d.jsx)("input",{className:"form-control",placeholder:"Your Name",name:"name",required:!0}),Object(d.jsx)("div",{className:"form-control-border"})]}),Object(d.jsxs)("div",{className:"form-group form-group-with-icon",children:[Object(d.jsx)("i",{className:"fa fa-comment"}),Object(d.jsx)("textarea",{className:"form-control",placeholder:"Message",name:"message",required:!0}),Object(d.jsx)("div",{className:"form-control-border"})]}),Object(d.jsx)("button",{className:"button",type:"submit",children:"Add comment"})]})]})]})]})}var x=function(e){var t;return Object(d.jsx)("div",{className:"container",children:e.data&&(null===(t=e.data)||void 0===t?void 0:t.map((function(e){var t,a;return Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("div",{className:"card__header",children:Object(d.jsx)("img",{src:"".concat(e.attributes.image.data.attributes.url),alt:""})}),Object(d.jsxs)("div",{className:"card__body",children:[Object(d.jsx)("div",{children:null===(t=e.attributes.categories.data)||void 0===t?void 0:t.map((function(e,t){return Object(d.jsx)("span",{className:"tag tag-red",children:e.attributes.name},t)}))}),Object(d.jsx)("h4",{children:e.attributes.title}),Object(d.jsxs)("p",{children:[e.attributes.body.substring(0,200),"..."]}),Object(d.jsx)(i.b,{to:"/details/".concat(e.id),children:"Read more"})]}),Object(d.jsx)("div",{className:"card__footer",children:Object(d.jsxs)("div",{className:"user",children:[Object(d.jsx)("img",{src:"".concat(e.attributes.avatar.data.attributes.url),className:"user__image",width:"40",height:"40",alt:""}),Object(d.jsxs)("div",{className:"user__info",children:[Object(d.jsx)("h5",{children:e.attributes.author}),Object(d.jsx)("small",{children:(a=e.attributes.updatedAt,new Date(a).toLocaleString().split(",")[0])})]})]})})]},e.id)})))})};function f(){var e=a(51).stringify({populate:{reviews:{populate:"*"}}},{encodeValuesOnly:!0}),t=Object(o.f)().id,c=m("".concat(O,"/api/categories/").concat(t,"?").concat(e)),r=c.loading,s=c.error,n=c.data;return r?Object(d.jsx)("p",{children:"Loading..."}):s?Object(d.jsx)("p",{children:"Error :("}):Object(d.jsx)(x,{data:n.attributes.reviews.data})}var v=function(){var e=m("".concat(O,"/api/categories")),t=e.loading,a=e.error,c=e.data;return t?Object(d.jsx)("p",{children:"Loading..."}):a?Object(d.jsx)("p",{children:"Error :("}):Object(d.jsxs)("div",{className:"site-header",children:[Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("h1",{children:"Strapi Blogging"})}),Object(d.jsxs)("nav",{className:"categories",children:[Object(d.jsx)(i.b,{to:"/dashboard",className:"dashboard",children:"Dashboard"}),Object(d.jsx)("span",{children:"Filter reviews by category:"}),null===c||void 0===c?void 0:c.map((function(e){return Object(d.jsx)(i.b,{to:"/category/".concat(e.id),children:e.attributes.name},e.id)}))]})]})};function g(){var e=m("".concat(O,"/api/reviews?populate=*")),t=e.loading,a=e.error,c=e.data;return t?Object(d.jsx)("p",{children:"Loading..."}):a?Object(d.jsx)("p",{children:"Error :("}):Object(d.jsx)(x,{data:c})}var N=function(){return Object(d.jsx)(i.a,{basename:"/headless-cms-blog",children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(v,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(l,{})}),Object(d.jsx)(o.a,{path:"/dashboard",children:Object(d.jsx)(g,{})}),Object(d.jsx)(o.a,{path:"/details/:id",children:Object(d.jsx)(p,{})}),Object(d.jsx)(o.a,{path:"/category/:id",children:Object(d.jsx)(f,{})})]})]})})},y=a(25);n.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),Object(y.a)().then((function(){Object(y.b)(window)}))}},[[64,2,3]]]);
//# sourceMappingURL=main.de1d4e52.chunk.js.map