(this["webpackJsonpequinox-final-react"]=this["webpackJsonpequinox-final-react"]||[]).push([[0],{101:function(e,t,s){},102:function(e,t,s){},105:function(e,t,s){},106:function(e,t,s){},142:function(e,t,s){},143:function(e,t,s){},144:function(e,t,s){},145:function(e,t,s){},146:function(e,t,s){},147:function(e,t,s){},148:function(e,t,s){},149:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s.n(a),i=s(91),r=s.n(i),o=(s(101),s(2)),l=(s(102),s(10)),d=s(11),j=s.p+"static/media/earth.4d579416.svg";function m(){var e=Object(l.a)(["\n\twidth: 40vw;\n\theight: auto;\n\tanimation: "," 6s ease-in-out infinite;\n\ttransition: transform 0.3s;\n\n\t@media screen and (max-width: 720px) {\n\t\twidth: 80vw;\n\t}\n"]);return m=function(){return e},e}function b(){var e=Object(l.a)(["\n\tposition: absolute;\n\ttop: 100%;\n\tleft: 0;\n\twidth: 100px;\n\ttransform: translate(-23vw, -50%);\n\t@media screen and (max-width: 720px) {\n\t\ttop: 100%;\n\t\tleft: 0vw;\n\t\ttransform: translate(35%, -50%);\n\t\ttransition: transform 1s linear;\n\t}\n"]);return b=function(){return e},e}function h(){var e=Object(l.a)(["\n\t0% {\n\t\ttransform: translate(0, -1%) rotate(","deg);\n\t}\n\t50% {\n\t\ttransform: translate(0, 1%) rotate(","deg);\n\t}\n\t100% {\n\t\ttransform: translate(0, -1%) rotate(","deg);\n\t}\n"]);return h=function(){return e},e}var u=d.a.div(b()),f=d.a.img.attrs({src:"".concat(j)})(m(),(function(e){return t=e.angle,Object(d.b)(h(),t,t,t);var t})),g=function(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),s=t[0],c=t[1],n=function(){var e=window.pageYOffset,t=window.innerHeight,s=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-t,a=Math.floor(e/s*100);c(a)};return Object(a.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}})),s},O=function(){var e=g();return Object(c.jsx)(u,{children:Object(c.jsx)(f,{angle:-360*e/100})})},x=Object(a.memo)(O),p=(s(105),s.p+"static/media/Equinox_Logo.64c122cb.png"),v=s.p+"static/media/Discord.87b52b41.svg",w=s.p+"static/media/Facebook.1345f73a.svg",N=s.p+"static/media/Insta.c3541115.svg",k=s.p+"static/media/@.f866be5b.svg",y=s.p+"static/media/Phone.bf04923c.svg",I=s.p+"static/media/Apply.eae5405b.svg",_=s(57),S=(s(106),function(){var e=Object(a.useState)({d:"00",h:"00",m:"00",s:"00"}),t=Object(o.a)(e,2),s=t[0],n=t[1];return Object(a.useEffect)((function(){var e=setInterval((function(){var e=Date.parse("April 30, 2021 21:00:00")-new Date,t=Math.floor(e/864e5),s=Math.floor(e/36e5),c=Math.floor(e/6e4),a=Math.floor(e/1e3),i=t,r=s-24*t,o=c-60*s,l=a-60*c;l<10&&(l="0"+l),o<10&&(o="0"+o),r<10&&(r="0"+r),i<10&&(i="0"+i),n((function(e){return Object(_.a)(Object(_.a)({},e),{},{d:i,m:o,s:l,h:r})}))}),1e3);return function(){clearInterval(e,1e3)}}),[]),Object(c.jsx)("div",{className:"tim",children:Object(c.jsx)("p",{className:"timer",children:"".concat(s.d," : ").concat(s.h," : ").concat(s.m," : ").concat(s.s)})})}),C=Object(a.memo)(S),q=function(e){var t=e.fadeIn,s=Object(a.useState)(!1),n=Object(o.a)(s,2),i=n[0],r=n[1];return Object(c.jsx)("div",{className:"page1bg",children:Object(c.jsxs)("div",{className:"Page1Content ".concat(t?"fadeIn":""," "),children:[Object(c.jsx)("div",{className:"left",children:Object(c.jsx)("img",{src:p,alt:"Equinox Logo",className:"equinoxlogo"})}),Object(c.jsxs)("div",{className:"right",children:[Object(c.jsx)("p",{className:"dates",children:"30 April - 2 May"}),Object(c.jsx)(C,{}),Object(c.jsx)("img",{src:I,className:"applyimg",onClick:function(){return window.open("https://di6oe3ych67.typeform.com/to/DKsjL0Il","_blank")}}),Object(c.jsxs)("div",{className:"links",children:[Object(c.jsx)("img",{src:y,className:"linklogos at",onClick:function(){r((function(e){return!e}))}}),Object(c.jsx)("img",{src:k,className:"linklogos at",onClick:function(){window.open("mailto: equinox.robovitics@gmail.com","_blank")}}),Object(c.jsx)("img",{src:N,className:"linklogos",onClick:function(){window.open("https://www.instagram.com/equinox_robovitics/","_blank")}}),Object(c.jsx)("img",{src:w,className:"linklogos",onClick:function(){window.open("https://www.facebook.com/Equinox-Robovitics-110054387359678","_blank")}}),Object(c.jsx)("img",{src:v,className:"linklogos",onClick:function(){window.open("https://discord.gg/EfV4kK3Bgu","_blank")}})]}),Object(c.jsx)("p",{className:"contact ".concat(i?"showContact":""),children:"Contact: +91 98980 56388"})]})]})})},E=Object(a.memo)(q),A=s(15),H=s.p+"static/media/moon.a7de7362.svg";function L(){var e=Object(l.a)(["\n\tposition: absolute;\n\twidth: 50vw;\n\tleft: 100%;\n\ttransform: translate(-50%, -50%);\n\tz-index: 1;\n"]);return L=function(){return e},e}var T=d.a.img.attrs({src:"".concat(H)})(L()),W=function(){return Object(c.jsx)(T,{})},z=Object(a.memo)(W),M=s.p+"static/media/sun.1fc1b9fb.svg";function D(){var e=Object(l.a)(["\n\tposition: absolute;\n\twidth: 50vw;\n\tleft: 0;\n\ttransform: translate(-50%, -50%);\n\tz-index: 1;\n"]);return D=function(){return e},e}var P=d.a.img.attrs({src:"".concat(M)})(D()),R=function(){return Object(c.jsx)(P,{})},J=Object(a.memo)(R);function Y(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function B(){var e=Object(a.useState)(Y()),t=Object(o.a)(e,2),s=t[0],c=t[1];return Object(a.useEffect)((function(){function e(){c(Y())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),s}function F(){var e=Object(l.a)(["\n\tposition: fixed;\n\ttop: 100%;\n\twidth: ","px;\n\ttransform: translateX(-50%) rotate(-","deg);\n\tz-index: 0;\n\tbackground: #ffffff;\n\ttransition: transform 0.3s;\n\t@media screen and (max-width: 720px) {\n\t\twidth: 185vh;\n\t\ttransform: translateX(-25%) rotate(-","deg);\n\t}\n"]);return F=function(){return e},e}var G=d.a.div(F(),(function(e){return e.radius}),(function(e){return e.scroll}),(function(e){return e.scroll+60})),U=function(){var e=g(),t=Object(a.useState)(0),s=Object(o.a)(t,2),n=s[0],i=s[1],r=B(),l=r.height,d=r.width;return Object(a.useEffect)((function(){i(2*Math.sqrt(l*l+d*d))}),[l,d]),Object(c.jsxs)(G,{scroll:3.6*e+30,radius:n,children:[Object(c.jsx)(z,{}),Object(c.jsx)(J,{})]})},K=Object(a.memo)(U),X=(s(142),function(e){var t=e.fadeIn;return Object(c.jsx)("div",{className:"page2bg",children:Object(c.jsxs)("div",{className:"Page2Content ".concat(t?"fadeIn":""," "),children:[Object(c.jsx)("h1",{children:"ABOUT EQUINOX"}),Object(c.jsx)("div",{className:"aboutStuff",children:Object(c.jsx)("p",{className:"aboutCont",children:"Equinox is a 36-Hour hackathon in which the participants\u2019 ideas will not just be limited to problem statements based on Web development, hardware, Artificial Intelligence etc. The hack aims to crank the creative cogs of the participants. You have the opportunity and the resources to express your creativity, ingenuity and determination to explore anything you want. Whether you\u2019re new to hacks or a seasoned pro, there\u2019s something for everyone! You\u2019re welcome with or without a team. We will provide resources and mentors for your aid. Also, did we mention exciting goodies and takeaways? The domains of the hack include Robotics, Industrial Automation, Healthcare, Financial-Technology and open innovation. Let us make you an offer you can\u2019t refuse: Timely and precise reviews for each participant and ample time with the judges. So, what are you waiting for? Come build using hardware, software, or anything you want with other hackers! You don\u2019t have to know how to code to be a hacker. Hackers can be students, designers, or just any tech-lover out there!"})})]})})}),Q=Object(a.memo)(X),V=(s(143),function(e){var t=e.fadeIn;return Object(c.jsx)("div",{className:"page3bg",children:Object(c.jsxs)("div",{className:"Page3Content ".concat(t?"fadeIn":""," "),children:[Object(c.jsx)("br",{}),Object(c.jsx)("h1",{children:"PRIZES"}),Object(c.jsx)("div",{className:"prizesC",children:Object(c.jsx)("p",{children:"To Be Announced"})})]})})}),Z=Object(a.memo)(V),$=(s(144),function(e){var t=e.fadeIn;return Object(c.jsx)("div",{className:"page4bg",children:Object(c.jsxs)("div",{className:"Page4Content ".concat(t?"fadeIn":""," "),children:[Object(c.jsx)("h1",{children:"JUDGES"}),Object(c.jsxs)("div",{className:"judges",children:[Object(c.jsx)("div",{className:"cardJ cardJ1",children:Object(c.jsx)("p",{children:"To Be Announced"})}),Object(c.jsx)("div",{className:"cardJ cardJ2",children:Object(c.jsx)("p",{children:"To Be Announced"})}),Object(c.jsx)("div",{className:"cardJ cardJ3",children:Object(c.jsx)("p",{children:"To Be Announced"})})]})]})})}),ee=Object(a.memo)($),te=s(18),se=(s(145),s.p+"static/media/Arrow.96b8725b.svg"),ce=function(e){var t,s=e.fadeIn,n=B(),i=n.width,r=(n.height,Object(a.useState)(!1)),l=Object(o.a)(r,2),d=l[0],j=l[1],m=Object(a.useState)(!1),b=Object(o.a)(m,2),h=b[0],u=b[1],f=Object(a.useState)(!1),g=Object(o.a)(f,2),O=g[0],x=g[1],p=Object(a.useState)(!1),v=Object(o.a)(p,2),w=v[0],N=v[1],k=Object(a.useState)(!1),y=Object(o.a)(k,2),I=y[0],_=y[1],S=Object(a.useState)(!1),C=Object(o.a)(S,2),q=C[0],E=C[1],A=Object(a.useState)(1),H=Object(o.a)(A,2),L=H[0],T=H[1];return Object(c.jsx)("div",{className:"page5bg",children:Object(c.jsxs)("div",{className:"Page5Content ".concat(s?"fadeIn":""," "),children:[Object(c.jsx)("h1",{children:"FAQs"}),Object(c.jsxs)("div",{className:"faqs",children:[Object(c.jsxs)("div",{className:"leftfaq ".concat(1==L?"pageReveal":""),children:[Object(c.jsxs)("div",{className:"faq ".concat(d?"show":""),onClick:function(){j((function(e){return!e})),u(!1),x(!1),N(!1),_(!1),E(!1)},children:[Object(c.jsx)("div",{className:"question",children:" What are the rules?"}),Object(c.jsxs)("div",{className:"answer",children:["We want our Hack to be fun and fair to everyone. Your project should be started from scratch and worked on only during the 36 hours, and you may only incorporate outside resources (code, graphics, sound, etc) that are freely licensed and accessible to all participants equally. Of course, maintain a positive, respectful attitude toward your fellow hackers throughout the event. We ask that all attendees follow the"," ",Object(c.jsx)("a",{href:"https://static.mlh.io/docs/mlh-code-of-conduct.pdf",target:"_blank",className:"anchor",children:"MLH Code of Conduct."})]})]}),Object(c.jsxs)("div",(t={className:"faq"},Object(te.a)(t,"className","faq ".concat(h?"show":"")),Object(te.a)(t,"onClick",(function(){u((function(e){return!e})),j(!1),x(!1),N(!1),_(!1),E(!1)})),Object(te.a)(t,"children",[Object(c.jsx)("div",{className:"question",children:" What can I build?"}),Object(c.jsx)("div",{className:"answer",children:"You can build whatever your heart desires, whether it\u2019s a web app, mobile app, hardware hack, or an open source tool. Our main focus is to bring you a learning experience where you can have fun, ask questions, and experiment with technology."})]),t)),Object(c.jsxs)("div",{className:"faq ".concat(O?"show":""),onClick:function(){x((function(e){return!e})),u(!1),j(!1),N(!1),_(!1),E(!1)},children:[Object(c.jsxs)("div",{className:"question",children:[" ","Are hardware hacks allowed?"]}),Object(c.jsx)("div",{className:"answer",children:"Yes, of course!"})]})]}),Object(c.jsxs)("div",{className:"rightfaq ".concat(2==L?"pageReveal":""),children:[Object(c.jsxs)("div",{className:"faq ".concat(w?"show":""),onClick:function(){N((function(e){return!e})),u(!1),x(!1),j(!1),_(!1),E(!1)},children:[Object(c.jsxs)("div",{className:"question",children:[" ","How much does it cost?"]}),Object(c.jsx)("div",{className:"answer",children:"Thanks to the generosity of our sponsors, we\u2019re able to put up events like these for free."})]}),Object(c.jsxs)("div",{className:"faq ".concat(I?"show":""),onClick:function(){_((function(e){return!e})),u(!1),x(!1),N(!1),j(!1),E(!1)},children:[Object(c.jsxs)("div",{className:"question",children:[" ","How many people in a team?"]}),Object(c.jsx)("div",{className:"answer",children:"Two to Five members per team."})]}),Object(c.jsxs)("div",{className:"faq ".concat(q?"show":""),onClick:function(){E((function(e){return!e})),u(!1),x(!1),N(!1),_(!1),j(!1)},children:[Object(c.jsx)("div",{className:"question",children:"I still have a question..."}),Object(c.jsx)("div",{className:"answer",children:"We\u2019d be happy to help! Send the inquiry over to robovitics@vit.ac.in and we\u2019ll get back to you as soon as possible or call +91 98673 48865."})]})]}),i<720?Object(c.jsxs)("div",{className:"btnBt",children:[Object(c.jsx)("img",{src:se,style:{transform:"rotate(180deg)"},className:"btn ".concat(1==L?"dis":""),onClick:function(){return T(1)}}),Object(c.jsx)("img",{src:se,className:"btn ".concat(2==L?"dis":""),onClick:function(){return T(2)}})]}):null]})]})})},ae=Object(a.memo)(ce),ne=(s(146),s.p+"static/media/ad.bc7f3cf4.svg"),ie=s.p+"static/media/an.ed65e3f2.svg",re=s.p+"static/media/v.2f6d262a.svg",oe=function(e){var t=e.fadeIn;return Object(c.jsx)("div",{className:"page6bg",children:Object(c.jsxs)("div",{className:"Page6Content ".concat(t?"fadeIn":""," "),children:[Object(c.jsx)("h1",{children:"ORGANISERS"}),Object(c.jsxs)("div",{className:"organizers",children:[Object(c.jsxs)("div",{className:"card card1",children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("img",{src:ne}),Object(c.jsx)("p",{children:"ADITI CHOWDHURI"})]}),Object(c.jsxs)("div",{className:"card card2",children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("img",{src:ie}),Object(c.jsx)("p",{children:"ANIRUDH RAMESH"})]}),Object(c.jsxs)("div",{className:"card card3",children:[Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("img",{src:re}),Object(c.jsx)("p",{children:"AJAY VENKATESH"})]})]})]})})},le=Object(a.memo)(oe),de=(s(147),s.p+"static/media/Amulya.b2dcd567.svg"),je=(s.p,s.p+"static/media/cn.968a64fc.svg"),me=(s.p,s.p,s.p,s.p+"static/media/do.04bcc6ea.svg"),be=s.p+"static/media/fr.83e06b36.svg",he=s.p+"static/media/wo.31f890f4.svg",ue=s.p+"static/media/bg.c3aa72c4.svg",fe=s.p+"static/media/task.0f1da1c0.svg",ge=s.p+"static/media/sashi.963227ef.svg",Oe=s.p+"static/media/bal.bfa57f3b.svg",xe=s.p+"static/media/voice.da5977b6.svg",pe=s.p+"static/media/jetbrains.ec887f6f.svg",ve=s.p+"static/media/GFG LOGO-1.bb33a0b1.png",we=s.p+"static/media/logo1.ab1ef977.png",Ne=s.p+"static/media/codex.fd11d75a.svg",ke=s.p+"static/media/text-logo.73f55bd9.svg",ye=s.p+"static/media/wic_long_white.9fa642a8.png",Ie=s.p+"static/media/GsLogo_White.4b9b7fd0.png",_e=s.p+"static/media/sketch-logo-light.81ecdf9f.svg",Se=s.p+"static/media/YAY_Logo1.220766ad.png",Ce=s.p+"static/media/iba.3aef0dd4.webp",qe=function(e){var t=e.fadeIn,s=Object(a.useState)(1),n=Object(o.a)(s,2),i=n[0],r=n[1],l=["","https://www.codingninjas.com/","https://www.digitalocean.com/","https://www.framer.com/","https://www.wolframalpha.com/","https://www.bugsee.com/","https://www.jetbrains.com/","https://www.voiceflow.com/","https://www.taskade.com/","https://www.sashido.io/en/","https://balsamiq.com/","https://www.geeksforgeeks.org/","https://interviewbuddy.in/","https://thecodex.me/","https://testmail.app/","","https://www.girlscript.tech/home","https://www.sketch.com/","","https://indiablockchainalliance.org/"];return Object(c.jsx)("div",{className:"page7bg",children:Object(c.jsxs)("div",{className:"Page7Content ".concat(t?"fadeIn":""," "),children:[Object(c.jsx)("h1",{children:"SPONSORS"}),Object(c.jsxs)("div",{className:"sponsors ",children:[Object(c.jsx)("div",{className:"page ".concat(1==i?"show":""),children:Object(c.jsxs)("div",{className:"line1",style:{zIndex:1e3},children:[Object(c.jsx)("a",{href:l[0],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:de,className:"imgs"})}),Object(c.jsx)("a",{href:l[1],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:je,className:"imgs"})}),Object(c.jsx)("a",{href:l[2],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:me,className:"imgs"})}),Object(c.jsx)("a",{href:l[3],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:be,className:"imgs"})}),Object(c.jsx)("a",{href:l[4],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:he,className:"imgs"})}),Object(c.jsx)("a",{href:l[5],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:ue,className:"imgs"})}),Object(c.jsx)("a",{href:l[6],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:pe,className:"imgs jb"})}),Object(c.jsx)("a",{href:l[7],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:xe,className:"imgs"})}),Object(c.jsx)("a",{href:l[8],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:fe,className:"imgs"})}),Object(c.jsx)("a",{href:l[9],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:ge,className:"imgs"})}),Object(c.jsx)("a",{href:l[10],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:Oe,className:"imgs"})}),Object(c.jsx)("a",{href:l[11],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:ve,className:"imgs"})}),Object(c.jsx)("a",{href:l[12],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:we,className:"imgs"})}),Object(c.jsx)("a",{href:l[13],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:Ne,className:"imgs"})})]})}),Object(c.jsx)("div",{className:"page".concat(2==i?" show":""),children:Object(c.jsxs)("div",{className:"line1",children:[Object(c.jsx)("a",{href:l[14],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:ke,className:"imgs"})}),Object(c.jsx)("a",{href:l[15],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:ye,className:"imgs jb"})}),Object(c.jsx)("a",{href:l[16],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:Ie,className:"imgs"})}),Object(c.jsx)("a",{href:l[17],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:_e,className:"imgs"})}),Object(c.jsx)("a",{href:l[18],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:Se,className:"imgs"})}),Object(c.jsx)("a",{href:l[19],className:"imgs",target:"_blank",children:Object(c.jsx)("img",{src:Ce,className:"imgs"})})]})})]}),Object(c.jsxs)("div",{className:"arrows",children:[Object(c.jsx)("img",{src:se,className:"al arrow ".concat(1==i?"dis":""),onClick:function(){return r(1)}}),Object(c.jsx)("img",{src:se,className:"arrow ".concat(2==i?"dis":""),onClick:function(){return r(2)}})]})]})})},Ee=Object(a.memo)(qe),Ae=function(){return Object(c.jsx)("div",{style:{position:"fixed",top:0,zIndex:"100000000"},children:Object(c.jsx)("a",{id:"mlh-trust-badge",style:{display:"block",maxWidth:"100px",minWidth:"60px",position:"fixed",right:"50px",top:"0",width:"10%",zIndex:"10000"},href:"https://mlh.io/seasons/2021/events?utm_source=apac-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white",target:"_blank",children:Object(c.jsx)("img",{src:"https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg",alt:"Major League Hacking 2021 Hackathon Season",style:{width:"100%"}})})})};s.p,s.p,s.p,s.p,s.p,s.p,s(95),s(148);function He(){console.log("rerender");var e=Object(a.useState)(!1),t=Object(o.a)(e,2),s=t[0],n=t[1],i=Object(a.useState)(1),r=Object(o.a)(i,2),l=r[0],d=r[1];return Object(a.useEffect)((function(){return window.addEventListener("keydown",(function(e){[32,37,38,39,40].indexOf(e.keyCode)>-1&&e.preventDefault()}),!1),setTimeout((function(){return n(!1)}),2e3),function(){window.removeEventListener("keydown",(function(e){[32,37,38,39,40].indexOf(e.keyCode)>-1&&e.preventDefault()}),!1)}}),[]),Object(c.jsx)(c.Fragment,{children:s?Object(c.jsx)(c.Fragment,{children:"Loading..."}):Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(Ae,{}),Object(c.jsx)("div",{className:"mainDiv",children:Object(c.jsxs)(A.FullPage,{beforeChange:function(e){e.from;var t=e.to;d(t)},duration:1e3,children:[Object(c.jsx)(A.Slide,{children:Object(c.jsx)(E,{fadeIn:0===l})}),Object(c.jsx)(A.Slide,{children:Object(c.jsx)(Q,{fadeIn:1===l})}),Object(c.jsx)(A.Slide,{children:Object(c.jsx)(Z,{fadeIn:2===l})}),Object(c.jsx)(A.Slide,{children:Object(c.jsx)(ee,{fadeIn:3===l})}),Object(c.jsx)(A.Slide,{children:Object(c.jsx)(ae,{fadeIn:4===l})}),Object(c.jsx)(A.Slide,{children:Object(c.jsx)(le,{fadeIn:5===l})}),Object(c.jsx)(A.Slide,{children:Object(c.jsx)(Ee,{fadeIn:6===l})})]})}),Object(c.jsxs)("div",{style:{position:"fixed",width:"100vw",height:"100vh",zIndex:"10",top:0},children:[Object(c.jsx)(x,{}),Object(c.jsx)(K,{})]})]})})}var Le=Object(a.memo)(He);r.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(Le,{})}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.8c937319.chunk.js.map