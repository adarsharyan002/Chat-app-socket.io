(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{210:function(e,t,n){},211:function(e,t,n){},212:function(e,t,n){},221:function(e,t,n){},259:function(e,t,n){},416:function(e,t,n){},417:function(e,t,n){},418:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n.n(c),r=n(187),i=n.n(r),j=(n(210),n(211),n(75)),o=n(6),l=n(30),u=(n(212),n(1)),m=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(l.a)(a,2),i=r[0],o=r[1];return Object(u.jsx)("div",{className:"joinOuterContainer",children:Object(u.jsxs)("div",{className:"joinInnerContainer",children:[Object(u.jsx)("h1",{className:"heading",children:"Join"}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{placeholder:"Name",type:"text",className:"joinInput",onChange:function(e){return s(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsx)("input",{placeholder:"Room",type:"text",className:"joinInput mt-20",onChange:function(e){return o(e.target.value)}})}),Object(u.jsx)(j.b,{onClick:function(e){return n&&i?null:e.preventDefault()},to:"/chat?name=".concat(n,"&room=").concat(i),children:Object(u.jsx)("button",{className:"button mt-20",type:"submit",children:"Sign In"})})]})})},b=n(205),d=(n(221),function(e){var t=e.users;return Object(u.jsx)("div",{className:"textContainer",children:t?Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"People currently chatting:"}),Object(u.jsx)("div",{className:"activeContainer",children:Object(u.jsx)("h2",{children:t.map((function(e){var t=e.name;return Object(u.jsx)("div",{className:"activeItem",children:t},t)}))})})]}):null})}),O=function(e){var t=e.setMessage,n=e.sendMessage,s=e.message;return Object(u.jsxs)("form",{className:"form",children:[Object(u.jsx)("input",{className:"message-input",type:"text",placeholder:"Type a message...",value:s,onChange:function(e){var n=e.target.value;return t(n)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),Object(u.jsx)("button",{className:"send-btn",onClick:function(e){return n(e)},children:"Send"})]})},h=n(190),x=n.n(h),f=n(191),p=n.n(f),v=(n(259),n(204)),g=(n(416),n(123)),N=n.n(g),y=function(e){var t=e.message,n=t.text,s=t.user,c=!1,a=e.name.trim().toLowerCase();return s===a&&(c=!0),c?Object(u.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(u.jsx)("p",{className:"sentText pr-10",children:a}),Object(u.jsx)("div",{className:"messageBox backgroundBlue",children:Object(u.jsx)("p",{className:"messageText colorWhite",children:N.a.emojify(n)})})]}):Object(u.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(u.jsx)("div",{className:"messageBox backgroundLight",children:Object(u.jsx)("p",{className:"messageText colorDark",children:N.a.emojify(n)})}),Object(u.jsx)("p",{className:"sentText pl-10 ",children:s})]})},C=(n(417),function(e){var t=e.messages,n=e.name;return Object(u.jsx)(v.a,{className:"messages",children:t.map((function(e,t){return Object(u.jsx)("div",{children:Object(u.jsx)(y,{message:e,name:n})},t)}))})}),S="localhost:5000",k=function(e){var t=e.location,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],i=a[1],j=Object(c.useState)(""),o=Object(l.a)(j,2),m=(o[0],o[1]),h=Object(c.useState)(""),f=Object(l.a)(h,2),v=f[0],g=f[1],N=Object(c.useState)([]),y=Object(l.a)(N,2),k=y[0],I=y[1],M=Object(c.useState)([]),E=Object(l.a)(M,2),T=E[0],B=E[1];Object(c.useEffect)((function(){var e=x.a.parse(t.search),n=e.name,c=e.room;s=p()(S),i(n),m(c),s.emit("join",{name:n,room:c},(function(e){e&&alert(e)}))}),[S,t.search]),Object(c.useEffect)((function(){s.on("message",(function(e){B((function(t){return[].concat(Object(b.a)(t),[e])}))})),s.on("roomData",(function(e){var t=e.users;I(t)}))}),[]);return Object(u.jsxs)("div",{className:"h1",children:[Object(u.jsx)("h1",{className:"title",children:"Welcome to Let's chat"}),Object(u.jsxs)("div",{className:"outerContainer",children:[Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(C,{messages:T,name:r}),Object(u.jsx)("div",{className:"input",children:Object(u.jsx)(O,{message:v,setMessage:g,sendMessage:function(e){e.preventDefault(),v&&s.emit("sendMessage",v,(function(){return g("")}))}})})]}),Object(u.jsx)(d,{users:k})]})]})},I=function(){return Object(u.jsxs)(j.a,{children:[Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{path:"/",exact:!0,component:m}),Object(u.jsx)(o.a,{path:"/chat",component:k})]})}),")"]})};i.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(I,{})}),document.getElementById("root"))}},[[418,1,2]]]);
//# sourceMappingURL=main.9241e877.chunk.js.map