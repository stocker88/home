(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{31:function(e,t,a){e.exports=a(56)},44:function(e,t,a){e.exports=a.p+"static/media/stocker.86ddba37.png"},45:function(e,t,a){e.exports=a.p+"static/media/main.af0d5e1c.png"},46:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},47:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},48:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},49:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},50:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},51:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},52:function(e,t,a){e.exports=a.p+"static/media/analytics.402ec6dd.png"},53:function(e,t,a){e.exports=a.p+"static/media/screening.3c547fdb.png"},54:function(e,t,a){e.exports=a.p+"static/media/social.397d0cb3.png"},55:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(24),r=a.n(l),o=a(61),s=a(10),c=a(3),m=function(e){var t=e.component,a=e.layout,n=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return i.a.createElement(i.a.Fragment,null,e.children)}:a,i.a.createElement(o.a,Object.assign({},n,{render:function(e){return i.a.createElement(a,null,i.a.createElement(t,e))}}))},d=a(6),u=a(1),v=a.n(u),h=a(19),p=i.a.forwardRef((function(e,t){var a=Object(n.useState)(window.innerHeight),l=Object(d.a)(a,2),r=l[0],o=l[1],s=Object(n.useState)([]),c=Object(d.a)(s,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),n=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=r-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,n)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(n.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(n.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",f),window.addEventListener("resize",g)),p())}),[m]);var b=function(){v()&&(window.removeEventListener("scroll",f),window.removeEventListener("resize",g))},f=Object(h.throttle)((function(){b(),p()}),30),g=Object(h.throttle)((function(){o(window.innerHeight)}),30);return Object(n.useEffect)((function(){b(),p()}),[r]),i.a.createElement(i.a.Fragment,null,e.children())}));p.propTypes={children:v.a.func.isRequired};var b=p,f=a(15),g=a(2),E=a.n(g),N=function(e){var t=e.className,a=e.src,l=e.width,r=e.height,o=e.alt,s=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(n.useState)(!1),u=Object(d.a)(m,2),v=u[0],h=u[1],p=Object(n.useRef)(null);Object(n.useEffect)((function(){b(p.current)}),[]);var b=function(e){var t,a,n=document.createElement("img");v||(e.style.display="none",e.before(n),n.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),n.width=e.getAttribute("width"),n.height=e.getAttribute("height"),n.style.opacity="0",e.className&&n.classList.add(e.className),n.remove(),e.style.display="")};return i.a.createElement("img",Object.assign({},s,{ref:p,className:t,src:a,width:l,height:r,alt:o,onLoad:function(){h(!0)}}))};N.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var y=N,O=function(e){var t=e.className,a=(e.navPosition,e.hideNav,e.hideSignin,e.bottomOuterDivider),l=e.bottomDivider,r=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),o=Object(n.useState)(!1),s=Object(d.a)(o,2),m=s[0],u=s[1],v=Object(n.useRef)(null),h=Object(n.useRef)(null);Object(n.useEffect)((function(){return m&&p(),document.addEventListener("keydown",f),document.addEventListener("click",g),function(){document.removeEventListener("keydown",f),document.removeEventListener("click",g),b()}}));var p=function(){document.body.classList.add("off-nav-is-active"),v.current.style.maxHeight=v.current.scrollHeight+"px",u(!0)},b=function(){document.body.classList.remove("off-nav-is-active"),v.current&&(v.current.style.maxHeight=null),u(!1)},f=function(e){m&&27===e.keyCode&&b()},g=function(e){v.current&&m&&!v.current.contains(e.target)&&e.target!==h.current&&b()},N=E()("site-header",a&&"has-bottom-divider",t);return i.a.createElement("header",Object.assign({},r,{className:N}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:E()("site-header-inner",l&&"has-bottom-divider")})))};O.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var w=O,j=function(e){var t=e.className,a=Object(c.a)(e,["className"]),n=E()("footer-nav",t);return i.a.createElement("nav",Object.assign({},a,{className:n}))},x=function(e){var t=e.className,a=e.tag,n=e.color,l=e.size,r=e.loading,o=e.wide,s=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=E()("button",n&&"button-".concat(n),l&&"button-".concat(l),r&&"is-loading",o&&"button-block",s&&"button-wide-mobile",t),v=a;return i.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};x.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var D=x,C=function(e){var t=e.className,a=Object(c.a)(e,["className"]),n=E()("footer-social",t),l=function(e){return i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Facebook"),i.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z",fill:"white"}))};return i.a.createElement("div",Object.assign({},a,{className:n}),i.a.createElement("ul",{className:"list-reset"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://ai.facebook.com"},i.a.createElement(l,null))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://twitter.com/HelloStocker"},i.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("title",null,"Twitter"),i.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z",fill:"white"}))))))},k=function(e){var t=e.className,a=e.topOuterDivider,n=e.topDivider,l=Object(c.a)(e,["className","topOuterDivider","topDivider"]),r=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return i.a.createElement("footer",Object.assign({},l,{className:r}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:E()("site-footer-inner",n&&"has-top-divider")},i.a.createElement("div",{className:"footer-top space-between text-xxs"},i.a.createElement(C,null)),i.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},i.a.createElement(j,null),i.a.createElement("div",{className:"footer-copyright",style:{color:"white"}},"Made by Stocker, for you.",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("a",{href:"mailto:aness.hussein.ali@gmail.com,ulyanats@gmail.com"},i.a.createElement("p",{style:{color:"white"}}," Contact Us ")))))))};k.defaultProps={topOuterDivider:!1,topDivider:!1};var S=k,F=function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(w,{navPosition:"right",className:"reveal-from-bottom"}),i.a.createElement("main",{className:"site-content"},t),i.a.createElement(S,{style:{backgroundColor:"#01CAFF"}}))},B=a(5),T={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},L={types:Object(B.a)({},T.types),defaults:Object(B.a)({},T.defaults)},A={types:Object(B.a)({},T.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(B.a)({},T.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},P={types:Object(B.a)({},T.types,{pushLeft:v.a.bool}),defaults:Object(B.a)({},T.defaults,{pushLeft:!1})},z=function(e){var t=e.className,a=Object(c.a)(e,["className"]),n=E()("button-group",t);return i.a.createElement("div",Object.assign({},a,{className:n}))},M=a(14),H=a(27),W=a(28),R=a(29),I=a(30),_=a(16),q=a(58),U=a(59),V=a(60),G=function(e){Object(I.a)(a,e);var t=Object(R.a)(a);function a(){var e;Object(H.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={name:"",email:"",phoneNumber:"",message:"Please send me the invite link for the beta version of Stocker."},e.handleChange=function(t,a){e.setState(Object(M.a)({},t,a.target.value))},e}return Object(W.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=(t.name,{from_name:t.email,to_name:"aness.hussein.ali@gmail.com",phoneNumber:t.phoneNumber,message_html:t.message});_.send("service_h0q75wd","template_egp9ldh",a,"user_QuG1TIbvzRN8kheqkRwUr"),this.resetForm()}},{key:"resetForm",value:function(){this.setState({name:"",email:"",subject:"",message:""})}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(q.a,{onSubmit:this.handleSubmit.bind(this),target:"my_iframe",style:{alignitems:"right"}},i.a.createElement("ul",null,i.a.createElement(U.a,{className:"text-muted",style:{color:"white"}},i.a.createElement("b",null,"Email")),i.a.createElement(V.a,{type:"email",name:"email",value:this.state.email,className:"text-primary",onChange:this.handleChange.bind(this,"email"),placeholder:"Email",style:{alignItems:"right",flex:1,width:"100%",padding:"8px"}})),i.a.createElement("ul",null,i.a.createElement(U.a,{className:"text-muted",style:{textAlign:"center",color:"white"}},i.a.createElement("b",null,"Name")),i.a.createElement(V.a,{type:"text",name:"name",value:this.state.name,className:"text-primary",onChange:this.handleChange.bind(this,"name"),placeholder:"Name",style:{flex:1,width:"100%",padding:"8px"}})),i.a.createElement("ul",null,i.a.createElement(U.a,{className:"text-muted",style:{textAlign:"center",color:"white"}},i.a.createElement("b",null,"Phone Number")),i.a.createElement(V.a,{type:"number",name:"phoneNumber",className:"text-primary",value:this.state.phoneNumber,onChange:this.handleChange.bind(this,"phoneNumber"),placeholder:"Phone Number",style:{width:"100%",padding:"8px"}})),i.a.createElement("ul",null,i.a.createElement(U.a,{className:"text-muted",style:{textAlign:"center",color:"white"}},i.a.createElement("b",null,"Message")),i.a.createElement(V.a,{type:"textarea",name:"message",className:"text-primary",value:this.state.message,onChange:this.handleChange.bind(this,"message"),style:{flex:11,alignItems:"center",width:"100%",margin:"8px 0",height:"100px"}})),i.a.createElement("ul",null,i.a.createElement("center",null,i.a.createElement(D,{color:"cyan",variant:"primary",type:"submit"},"Submit")))))}}]),a}(n.Component),J=function(e){var t=e.className,a=(e.children,e.handleClose),l=e.show,r=e.closeHidden,o=e.video,s=(e.videoTag,Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]));Object(n.useEffect)((function(){return document.addEventListener("keydown",d),document.addEventListener("click",u),function(){document.removeEventListener("keydown",d),document.removeEventListener("click",u)}})),Object(n.useEffect)((function(){m()}),[s.show]);var m=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},d=function(e){27===e.keyCode&&a(e)},u=function(e){e.stopPropagation()},v=E()("modal",l&&"is-active",o&&"modal-video",t);return i.a.createElement(i.a.Fragment,null,l&&i.a.createElement("div",Object.assign({},s,{className:v,onClick:a}),i.a.createElement("div",{className:"modal-inner",onClick:u},o?i.a.createElement("div",{className:"responsive-video"},i.a.createElement("iframe",{title:"video",srcdoc:"<p>hello<p/>",frameBorder:"0",allowFullScreen:!0})):i.a.createElement(i.a.Fragment,null,!r&&i.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:a}),i.a.createElement("div",{className:"modal-content"},i.a.createElement(G,null))))))};J.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var Q=J,$=Object(B.a)({},L.defaults),K=function(e){var t=e.className,l=e.topOuterDivider,r=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),h=Object(n.useState)(!1),p=Object(d.a)(h,2),b=p[0],f=p[1],g=Object(n.useState)(!1),N=Object(d.a)(g,2),O=N[0],w=N[1],j=(Object(n.useState)(!1),E()("hero section center-content",l&&"has-top-divider",r&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t)),x=E()("hero-inner section-inner",o&&"has-top-divider",s&&"has-bottom-divider");return i.a.createElement("section",Object.assign({},v,{className:j}),i.a.createElement("div",{className:"container-sm"},i.a.createElement("div",{className:x},i.a.createElement("div",{className:"hero-content"},i.a.createElement(y,{src:a(44),alt:"Features split 01",width:600,height:50}),i.a.createElement("div",{className:"container-xs"},i.a.createElement("br",null),i.a.createElement("p",{style:{color:"white",fontSize:"25px"},className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"600"},"The first social and commission free trading app",i.a.createElement("br",null),"that empowers people with cutting edge analytics"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"1200"},i.a.createElement(z,null,i.a.createElement(D,{color:"primary",type:"button",onClick:function(e){e.preventDefault(),f(!0)}},i.a.createElement("span",{className:"btn-inner--icon mr-1"},i.a.createElement("i",{className:"ni ni-cloud-download-95"})),i.a.createElement("p",{style:{fontFamily:"Arial"}},"SUBSCRIBE TO BETA")))),i.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"1600"}))),i.a.createElement(Q,{id:"video-modal",show:b,handleClose:function(e){e.preventDefault(),f(!1)},form:i.a.createElement(G,null),videoTag:"iframe"}),i.a.createElement(Q,{id:"video-modal",show:O,handleClose:function(e){e.preventDefault(),w(!1)},form:i.a.createElement(G,null),videoTag:"iframe"}))))};K.defaultProps=$;var X=K,Y=function(e){var t=e.className,a=e.data,n=e.children,l=e.tag,r=Object(c.a)(e,["className","data","children","tag"]),o=E()(t),s=l;return i.a.createElement(i.a.Fragment,null,(a.title||a.paragraph)&&i.a.createElement("div",Object.assign({},r,{className:o}),i.a.createElement("div",{className:"container"},n,a.title&&i.a.createElement(s,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0","text-color-dark"),style:{fontSize:"35px",fontWeight:"normal"}},a.title),a.paragraph&&i.a.createElement("p",{className:"m-0"},a.paragraph))))};Y.defaultProps={children:null,tag:"h2"};var Z=Y,ee=Object(B.a)({},P.defaults),te=function(e){var t=e.className,n=e.topOuterDivider,l=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=E()("features-tiles section",n&&"has-top-divider",l&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),h=E()("features-tiles-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider"),p=E()("tiles-wrap center-content",d&&"push-left");return i.a.createElement("section",Object.assign({},u,{className:v}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:h},i.a.createElement(Z,{data:{title:"Hot investment opportunities at your fingertips",paragraph:""},className:"center-content"}),i.a.createElement("br",null),i.a.createElement("center",null,i.a.createElement(y,{src:a(45),alt:"Features split 03",width:600,height:400})),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:p},i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(y,{src:a(46),alt:"Features tile icon 01",width:50,height:50}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8",style:{color:"grey",fontWeight:"200",fontSize:"20px"}},"CEOs and company 360 overviews with Earnings, Balance Sheet, Revenues and more")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(y,{src:a(47),alt:"Features tile icon 05",width:50,height:50}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8",style:{color:"grey",fontWeight:"200",fontSize:"20px"}},"Commission free trading")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(y,{src:a(48),alt:"Features tile icon 02",width:50,height:50}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8",style:{color:"grey",fontWeight:"200",fontSize:"20px"}},"Innovative screening: sort and filter on Social and Financial Metrics")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(y,{src:a(49),alt:"Features tile icon 03",width:50,height:50}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8",style:{color:"grey",fontWeight:"200",fontSize:"20px"}},"Interact with the community through our social platform: exchange and monetize trade ideas")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(y,{src:a(50),alt:"Features tile icon 04",width:50,height:50}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8",style:{color:"grey",fontWeight:"200",fontSize:"20px"}},"Educate yourself with our investment tips, educate the community and help us empower the people!")))),i.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},i.a.createElement("div",{className:"tiles-item-inner"},i.a.createElement("div",{className:"features-tiles-item-header"},i.a.createElement("div",{className:"features-tiles-item-image mb-16"},i.a.createElement(y,{src:a(51),alt:"Features tile icon 06",width:50,height:50}))),i.a.createElement("div",{className:"features-tiles-item-content"},i.a.createElement("h4",{className:"mt-0 mb-8",style:{color:"grey",fontWeight:"200",fontSize:"20px"}},"Receive direct support from Investment Banking Traders and Machine Learning experts"))))))))};te.defaultProps=ee;var ae=te,ne=function(e){var t=e.className,a=e.data,n=(e.children,e.tag),l=Object(c.a)(e,["className","data","children","tag"]),r=E()(t),o=n;return i.a.createElement(i.a.Fragment,null,(a.title||a.paragraph)&&i.a.createElement("div",Object.assign({},l,{className:r}),i.a.createElement("div",{className:"container"},i.a.createElement(o,{className:E()("mt-0","mb-0","text-color-light"),style:{fontSize:"40px",fontWeight:"normal"}},a.title))))};ne.defaultProps={children:null,tag:"h2"};var ie=ne,le=Object(B.a)({},A.defaults),re=(E()("hero-inner section-inner"),function(e){var t=e.className,l=e.topOuterDivider,r=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=e.invertMobile,h=e.invertDesktop,p=e.alignTop,b=e.imageFill,f=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),g=Object(n.useState)(!1),N=Object(d.a)(g,2),O=N[0],w=N[1],j=Object(n.useState)(!1),x=Object(d.a)(j,2),C=x[0],k=x[1],S=(Object(n.useState)(!1),E()("features-split section",l&&"has-top-divider",r&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t)),F=E()("features-split-inner section-inner",o&&"has-top-divider",s&&"has-bottom-divider"),B=E()("split-wrap",v&&"invert-mobile",h&&"invert-desktop",p&&"align-top");return i.a.createElement("section",Object.assign({},f,{className:S}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:F},i.a.createElement("div",{className:B},i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-cyan center-content-mobile fw-600 tt-u mb-8 bold",style:{fontWeight:"bold"}},"Beautiful and Insightful Analytics"),i.a.createElement("h3",{className:"mt-0 mb-12 center-content-mobile ",style:{color:"black"}},"All in one \ud83d\udd25"),i.a.createElement("p",{className:"m-0 ",style:{color:"grey",fontSize:"max(15px,1vw)",fontWeight:"normal"}},i.a.createElement("ul",null,i.a.createElement("li",null," Fundamentals and Economics (Cash Flows, Balance Sheet, Earnings)"),i.a.createElement("li",null," Technical Analysis (patterns and volumes driving offer/demand)"),i.a.createElement("li",null," CEO and company prospects "),i.a.createElement("li",null," Competition and industry prospects "),i.a.createElement("li",null," Macroeconomics and opportunity costs introduced by other asset classes (rates, commodities, cryptos...)")))),i.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",b&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(y,{src:a(52),alt:"Features split 01",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content reveal-from-right","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-cyan center-content-mobile fw-600 tt-u mb-8",style:{fontWeight:"bold"}},"Hot investment opportunities"),i.a.createElement("h3",{className:"mt-0 mb-12 center-content-mobile",style:{color:"black"}},"Find the one \ud83d\udcb8"),i.a.createElement("p",{className:"m-0 ",style:{color:"grey",fontSize:"max(15px,1vw)",fontWeight:"normal"}},i.a.createElement("ul",null,i.a.createElement("li",null,"Hot investments are accessible via our screener: Stocker incorporates filtering and sorting capabilities for you to easily shop and navigate through a huge universe of stocks and cryptos"),i.a.createElement("li",null,"We leverage Social as well as Fundamental and Technical metrics: we give you full transparency for optimal decision making"),i.a.createElement("li",null," Find the next TSLA, the next GME, the next Cryptocurrency, start the journey")))),i.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",b&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(y,{src:a(53),alt:"Features split 02",width:528,height:396}))),i.a.createElement("div",{className:"split-item"},i.a.createElement("div",{className:"split-item-content reveal-from-left","data-reveal-container":".split-item"},i.a.createElement("div",{className:"text-xxs text-color-cyan fw-600 tt-u mb-8 center-content-mobile",style:{fontWeight:"bold"}},"Innovative Social Platform"),i.a.createElement("h3",{className:"mt-0 mb-12 center-content-mobile",style:{color:"black"}},"Be the one \ud83d\ude80"),i.a.createElement("p",{className:"m-0 ",style:{color:"grey",fontSize:"max(15px,1vw)",fontWeight:"normal"}},i.a.createElement("ul",null,i.a.createElement("li",null," Follow your favorite CEOs, investment advisers, friends, and many more "),i.a.createElement("li",null," Discuss investment ideas, company prospects, and monitor the community's activity to find out what is hot and trending"),i.a.createElement("li",null," Educate yourself and others through our built in TIPS and influencers' channels ")))),i.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",b&&"split-item-image-fill"),"data-reveal-container":".split-item"},i.a.createElement(y,{src:a(54),alt:"Features split 03",width:528,height:396})))))),i.a.createElement("div",{className:"container-sm"},i.a.createElement("center",null,i.a.createElement(D,{color:"cyan",type:"button",onClick:function(e){e.preventDefault(),w(!0)}},i.a.createElement("span",{className:"btn-inner--icon mr-1"},i.a.createElement("i",{className:"ni ni-cloud-download-95"})),i.a.createElement("p",{style:{fontFamily:"Arial"}},"SUBSCRIBE TO BETA"))),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(Q,{id:"video-modal",show:O,handleClose:function(e){e.preventDefault(),w(!1)},form:i.a.createElement(G,null),videoTag:"iframe"}),i.a.createElement(Q,{id:"video-modal",show:C,handleClose:function(e){e.preventDefault(),k(!1)},form:i.a.createElement(G,null),videoTag:"iframe"})))});re.defaultProps=le;var oe=re,se=Object(B.a)({},A.defaults),ce=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,r=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.invertMobile,d=e.invertDesktop,u=e.alignTop,v=(e.imageFill,Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"])),h=E()("features-split section",a&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),p=E()("features-split-inner section-inner",l&&"has-top-divider",r&&"has-bottom-divider");E()("split-wrap",m&&"invert-mobile",d&&"invert-desktop",u&&"align-top");return i.a.createElement("section",Object.assign({},v,{className:h}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:p},i.a.createElement(ie,{data:{title:"Let's empower people together",paragraph:""},className:"center-content"}))))};ce.defaultProps=se;var me=ce,de=Object(B.a)({},A.defaults),ue=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,r=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.invertMobile,d=e.invertDesktop,u=e.alignTop,v=(e.imageFill,Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"])),h=E()("features-split section",a&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),p=E()("features-split-inner section-inner",l&&"has-top-divider",r&&"has-bottom-divider");E()("split-wrap",m&&"invert-mobile",d&&"invert-desktop",u&&"align-top");return i.a.createElement("section",Object.assign({},v,{className:h}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:p},i.a.createElement(ie,{data:{title:"FROM THE STREET WE ARE WALL STREET",paragraph:""},className:"center-content"}))))};ue.defaultProps=de;var ve=Object(B.a)({},P.defaults),he=function(e){var t=e.className,a=e.topOuterDivider,n=e.bottomOuterDivider,l=e.topDivider,r=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("testimonial section",a&&"has-top-divider",n&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=E()("testimonial-inner section-inner",l&&"has-top-divider",r&&"has-bottom-divider"),h=E()("tiles-wrap",m&&"push-left");return i.a.createElement("section",Object.assign({},d,{className:u}),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:v},i.a.createElement(Z,{data:{title:"Testimonial",paragraph:"Please reach out for recommandation letters"},className:"center-content"}),i.a.createElement("div",{className:h}))))};he.defaultProps=ve;var pe=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(X,{className:"illustration-section-01"}),i.a.createElement(ae,{hasBgColor:!0}),i.a.createElement("topDivider",{hasBgColor:!0}),i.a.createElement(me,null),i.a.createElement(oe,{hasBgColor:!0,invertMobile:!0,imageFill:!0,className:"illustration-section-02"}))};f.a.initialize("UA-189834135-1");var be=function(){var e=Object(n.useRef)(),t=Object(o.d)();return Object(n.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){f.a.set({page:e}),f.a.pageview(e)}(a)}),[t]),i.a.createElement(b,{ref:e,children:function(){return i.a.createElement(o.c,null,i.a.createElement(m,{exact:!0,path:"/",component:pe,layout:F}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(55);var fe=Object(s.a)();r.a.render(i.a.createElement(o.b,{history:fe},i.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.eb709139.chunk.js.map