(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(A,e,t){},26:function(A,e,t){},27:function(A,e,t){},28:function(A,e,t){},40:function(A,e,t){},41:function(A,e,t){},42:function(A,e,t){},43:function(A,e,t){},44:function(A,e,t){},46:function(A,e,t){"use strict";t.r(e);var i=t(2),s=t(8),c=t.n(s),r=(t(26),t(4)),n=(t(27),t(28),t(1));var a=function(){return Object(n.jsx)("div",{className:"nav-menu",children:Object(n.jsxs)("ul",{className:"nav-menu-links",children:[Object(n.jsx)("li",{className:"nav-menu-link",children:"Home"}),Object(n.jsx)("li",{className:"nav-menu-link",children:"Services"}),Object(n.jsx)("li",{className:"nav-menu-link",children:"Gallery"}),Object(n.jsx)("li",{className:"nav-menu-link",children:"Contact"})]})})},l=t(3),o=t(15);var g=function(){var A=Object(i.useState)(!1),e=Object(r.a)(A,2),t=e[0],s=e[1],c=Object(i.useState)(!1),g=Object(r.a)(c,2),u=g[0],m=g[1];function d(A){document.querySelectorAll(".active-link").forEach((function(A){A.classList.remove("active-link")})),A.target.className="nav-link active-link",m(!1)}function Q(A){m(!u),"Service One"===A.target.innerHTML?(document.querySelector("#service-one").classList.add("active"),document.querySelector("#service-two").classList.remove("active"),document.querySelector("#service-three").classList.remove("active")):"Service Two"===A.target.innerHTML?(document.querySelector("#service-two").classList.add("active"),document.querySelector("#service-one").classList.remove("active"),document.querySelector("#service-three").classList.remove("active")):"Service Three"===A.target.innerHTML&&(document.querySelector("#service-three").classList.add("active"),document.querySelector("#service-two").classList.remove("active"),document.querySelector("#service-one").classList.remove("active"))}return Object(n.jsxs)("div",{className:"navbar-container",children:[Object(n.jsxs)(l.Link,{to:"hero",smooth:!0,className:"navbar-logo",children:[Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:"error"}),"EXAMPLE"]}),Object(n.jsxs)("ul",{className:"nav-links",children:[Object(n.jsx)(l.Link,{to:"hero",smooth:!0,spy:!0,children:Object(n.jsxs)("li",{className:"nav-link active-link",onClick:d,children:[" ","Home"]})}),Object(n.jsxs)("li",{className:"nav-link drop",onClick:Q,children:[Object(n.jsx)("h3",{className:"service-title",children:"Services"}),u?Object(n.jsx)(l.Link,{to:"services",spy:!0,smooth:!0,children:Object(n.jsx)("div",{className:"dropdown",children:Object(n.jsxs)("ul",{className:"dropdown-list",children:[Object(n.jsx)("li",{className:"dropdown-link",onClick:Q,children:"Service One"}),Object(n.jsx)("li",{className:"dropdown-link",onClick:Q,children:"Service Two"}),Object(n.jsx)("li",{className:"dropdown-link",onClick:Q,children:"Service Three"})]})})}):""]}),Object(n.jsx)(l.Link,{to:"gallery-section-container",smooth:!0,children:Object(n.jsx)("li",{className:"nav-link",onClick:d,children:"Gallery"})}),Object(n.jsxs)(l.Link,{to:"contact",smooth:!0,spy:!0,children:[" ",Object(n.jsx)("li",{className:"nav-link",onClick:d,children:"Contact"})]})]}),t?Object(n.jsx)("div",{className:"burger-menu",onClick:function(){return s(!t)},children:Object(n.jsx)(o.b,{size:30})}):Object(n.jsx)("div",{className:"burger-menu",onClick:function(){return s(!t)},children:Object(n.jsx)(o.a,{size:30})}),t?Object(n.jsx)(a,{}):""]})};t(40),t(41);var u=function(A){var e=A.children;return Object(n.jsx)("button",{children:e})},m=t.p+"static/media/undraw_website_setup_re_d4y9.50a1fa1e.svg";var d=function(){var A=Object(i.useState)(0),e=Object(r.a)(A,2),t=e[0],s=e[1],c=function(){return s(window.pageYOffset)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}}),[]),Object(n.jsxs)("div",{id:"hero",className:"hero-container",children:[Object(n.jsx)("div",{alt:"",className:"hero-bg",style:{transform:"translateY(".concat(.6*t,"px)")}}),Object(n.jsxs)("div",{className:"hero-text-container",children:[Object(n.jsxs)("h1",{children:["Welcome to",Object(n.jsx)("br",{}),Object(n.jsx)("b",{children:"EXAMPLE"}),"."]}),Object(n.jsxs)("p",{children:[Object(n.jsx)("b",{children:"Lorem ipsum"})," is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts."]}),Object(n.jsx)(u,{children:Object(n.jsx)(l.Link,{to:"gallery-section-container",smooth:!0,spy:!0,children:"Learn More"})})]}),Object(n.jsx)("img",{alt:"Placeholder illustration next to the text",style:{transform:"translateY(".concat(.4*t,"px)")},className:"hero-img",src:m})]})},Q=(t(42),t(43),t.p+"static/media/undraw_co-working_re_w93t.0e205810.svg"),I=t.p+"static/media/undraw_conversation_re_c26v.3005b40e.svg",j=t.p+"static/media/undraw_programmer_re_owql.8579d0e3.svg";var B=function(A){var e=A.title,t=A.image,i=A.description,s=A.id;return Object(n.jsxs)("div",{id:s,onClick:function(A){document.querySelectorAll(".active").forEach((function(A){A.classList.remove("active")})),A.target.closest(".card").className="card active"},className:"Service Two"===e?"card active":"card",children:["image-one"===t?Object(n.jsx)("img",{src:Q,className:"ml-10",alt:"Placeholder illustration for service card"}):"image-two"===t?Object(n.jsx)("img",{src:I,alt:"Placeholder illustration for service card"}):Object(n.jsx)("img",{src:j,alt:"Placeholder illustration for service card"}),Object(n.jsx)("h2",{children:e}),Object(n.jsx)("p",{className:"service-description",children:i}),Object(n.jsx)(u,{children:"View"})]})},C=t(21);var b=function(){return Object(n.jsxs)("div",{className:"services-container",id:"services",children:[Object(n.jsx)(l.Link,{to:"services",smooth:!0,children:Object(n.jsx)(C.a,{className:"chevron-down",color:"white",size:"35"})}),Object(n.jsxs)("div",{className:"cards-container",children:[Object(n.jsx)(B,{title:"Service One",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a rutrum urna. Donec non nunc vel lorem congue consectetur eget ac nunc.",image:"image-one",id:"service-one"}),Object(n.jsx)(B,{active:"active",title:"Service Two",description:"Consectetur adipiscing elit. Nulla a rutrum urna. Donec non nunc vel lorem congue consectetur eget ac nunc.",image:"image-two",id:"service-two"}),Object(n.jsx)(B,{title:"Service Three",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper faucibus dictum. In hac habitasse platea dictumst. Aliquam pretium.",image:"image-three",id:"service-three"})]})]})},v=[{image:"./images/undraw_Launching_re_tomg.png",title:"Slide Title One",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut libero urna. Integer rutrum magna imperdiet enim sodales aliquam eu non nisl. Praesent ac massa tortor. Integer a felis nibh. Nullam fermentum purus massa. "},{image:"./images/undraw_Collaborators_re_hont.png",title:"Slide Title Two",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies mauris eget tellus congue varius. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris eget risus et est viverra viverra. Ut."},{image:"./images/undraw_Interview_re_e5jn.png",title:"Slide Title Three",desc:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut libero urna. Integer rutrum magna imperdiet enim sodales aliquam eu non nisl. Praesent ac massa tortor."},{image:"./images/undraw_Campfire_re_9chj.png",title:"Slide Title Four",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies mauris eget tellus congue varius. Integer a felis nibh. Nullam fermentum purus massa, et tincidunt mauris pellentesque dapibus fermentum purus massa. "},{image:"./images/undraw_Organizing_projects_re_9p1k.png",title:"Slide Title Five",desc:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies mauris eget tellus congue varius. Integer a felis nibh. Nullam fermentum purus massa."}],E=t(16);t(44);var h=function(A){var e=A.slides,t=Object(i.useState)(0),s=Object(r.a)(t,2),c=s[0],a=s[1],l=e.length,o=Object(i.useState)(0),g=Object(r.a)(o,2),u=g[0],m=g[1],d=function(){return m(window.pageYOffset)};return Object(i.useEffect)((function(){return window.addEventListener("scroll",d),function(){return window.removeEventListener("scroll",d)}}),[]),!Array.isArray(e)||e.length<=0?null:Object(n.jsx)("div",{className:"gallery-section-container",children:Object(n.jsxs)("div",{className:"slider-wrapper",children:[Object(n.jsx)(E.a,{className:"left-arrow",onClick:function(){a(0===c?l-1:c-1)}}),Object(n.jsx)(E.b,{className:"right-arrow",onClick:function(){a(c===l-1?0:c+1)}}),v.map((function(A,e){return Object(n.jsx)("div",{className:e===c?"slide active":"slide",children:e===c&&Object(n.jsxs)("div",{className:"slide-wrapper",children:[Object(n.jsxs)("div",{className:"slide-text-wrapper",children:[Object(n.jsx)("h2",{children:A.title}),Object(n.jsx)("p",{children:A.desc}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("button",{children:["Button ",e+1]}),Object(n.jsxs)("button",{className:"button-inverted",children:["Button ",e+1]})]})]}),Object(n.jsx)("div",{className:"slider",children:Object(n.jsx)("img",{alt:"Placeholder for carousel",style:{transform:"translateY(".concat(.3*u-500,"px)")},src:A.image,className:"slider-image"})})]})},e)}))]})})};t(20);var O=function(A){var e=A.linkList,t=A.title;return Object(n.jsxs)("div",{className:"footer-links-wrapper",children:[Object(n.jsx)("h5",{className:"footer-links-title",children:t}),Object(n.jsx)("ul",{className:"footer-links",children:e.map((function(A,t){return Object(n.jsx)("li",{children:e[t]},t)}))})]})},x=t(9);var p=function(){return Object(n.jsxs)("div",{className:"footer-container",id:"contact",children:[Object(n.jsx)(O,{title:"About",linkList:["Example","Subscribe to Example","Contact Example","Example Gallery","Information"]}),Object(n.jsx)(O,{title:"Contact",linkList:["Information","Subscribe","Contact Example","Community Guidelines","Pricing"]}),Object(n.jsx)(O,{title:"Visit us",linkList:["Pricing","Contact Example","Subscribe to Example","Example Gallery","Example"]}),Object(n.jsxs)("div",{className:"media-links",children:[Object(n.jsx)(x.a,{size:"35"}),Object(n.jsx)(x.c,{size:"35"}),Object(n.jsx)(x.b,{size:"35"}),Object(n.jsxs)("p",{children:["Created by ",Object(n.jsx)("a",{className:"github-link",href:"https://github.com/Baskerus",children:"Baskerus"})]})]})]})};t(45);var k=function(){return Object(n.jsxs)("main",{className:"container",children:[Object(n.jsx)(g,{}),Object(n.jsx)(d,{}),Object(n.jsx)(b,{}),Object(n.jsx)(h,{slides:v}),Object(n.jsx)(p,{})]})};c.a.render(Object(n.jsx)(k,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.4c1e6275.chunk.js.map