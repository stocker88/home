(this["webpackJsonpopen-react-template"]=this["webpackJsonpopen-react-template"]||[]).push([[0],{31:function(e,t,a){e.exports=a(55)},44:function(e,t,a){e.exports=a.p+"static/media/stocker.86ddba37.png"},45:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-01.0f9928d7.svg"},46:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-02.bd39f304.svg"},47:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-05.fa9ba00b.svg"},48:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-03.66f37ba5.svg"},49:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-04.836acd10.svg"},50:function(e,t,a){e.exports=a.p+"static/media/feature-tile-icon-06.6a177696.svg"},51:function(e,t,a){e.exports=a.p+"static/media/features-split-image-01.cf853b80.png"},52:function(e,t,a){e.exports=a.p+"static/media/features-split-image-02.48006761.png"},53:function(e,t,a){e.exports=a.p+"static/media/features-split-image-03.e6b5de8e.png"},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(24),l=a.n(r),s=a(60),o=a(10),c=a(3),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return n.a.createElement(n.a.Fragment,null,e.children)}:a,n.a.createElement(s.a,Object.assign({},i,{render:function(e){return n.a.createElement(a,null,n.a.createElement(t,e))}}))},d=a(8),u=a(1),v=a.n(u),h=a(19),p=n.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),r=Object(d.a)(a,2),l=r[0],s=r[1],o=Object(i.useState)([]),c=Object(d.a)(o,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},p=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=l-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",b),window.addEventListener("resize",g)),p())}),[m]);var f=function(){v()&&(window.removeEventListener("scroll",b),window.removeEventListener("resize",g))},b=Object(h.throttle)((function(){f(),p()}),30),g=Object(h.throttle)((function(){s(window.innerHeight)}),30);return Object(i.useEffect)((function(){f(),p()}),[l]),n.a.createElement(n.a.Fragment,null,e.children())}));p.propTypes={children:v.a.func.isRequired};var f=p,b=a(15),g=a(2),E=a.n(g),N=function(e){var t=e.className,a=e.src,r=e.width,l=e.height,s=e.alt,o=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],h=u[1],p=Object(i.useRef)(null);Object(i.useEffect)((function(){f(p.current)}),[]);var f=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return n.a.createElement("img",Object.assign({},o,{ref:p,className:t,src:a,width:r,height:l,alt:s,onLoad:function(){h(!0)}}))};N.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var y=N,w=function(e){var t=e.className,a=(e.navPosition,e.hideNav,e.hideSignin,e.bottomOuterDivider),r=e.bottomDivider,l=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),s=Object(i.useState)(!1),o=Object(d.a)(s,2),m=o[0],u=o[1],v=Object(i.useRef)(null),h=Object(i.useRef)(null);Object(i.useEffect)((function(){return m&&p(),document.addEventListener("keydown",b),document.addEventListener("click",g),function(){document.removeEventListener("keydown",b),document.removeEventListener("click",g),f()}}));var p=function(){document.body.classList.add("off-nav-is-active"),v.current.style.maxHeight=v.current.scrollHeight+"px",u(!0)},f=function(){document.body.classList.remove("off-nav-is-active"),v.current&&(v.current.style.maxHeight=null),u(!1)},b=function(e){m&&27===e.keyCode&&f()},g=function(e){v.current&&m&&!v.current.contains(e.target)&&e.target!==h.current&&f()},N=E()("site-header",a&&"has-bottom-divider",t);return n.a.createElement("header",Object.assign({},l,{className:N}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:E()("site-header-inner",r&&"has-bottom-divider")})))};w.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var O=w,x=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=E()("footer-nav",t);return n.a.createElement("nav",Object.assign({},a,{className:i}))},j=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=E()("footer-social",t),r=function(e){return n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Facebook"),n.a.createElement("path",{d:"M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z",fill:"white"}))};return n.a.createElement("div",Object.assign({},a,{className:i}),n.a.createElement("ul",{className:"list-reset"},n.a.createElement("li",null,n.a.createElement("a",{href:"https://ai.facebook.com"},n.a.createElement(r,null))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://twitter.com/AnessHusseinAli"},n.a.createElement("svg",{width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},n.a.createElement("title",null,"Twitter"),n.a.createElement("path",{d:"M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z",fill:"white"}))))))},D=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,r=Object(c.a)(e,["className","topOuterDivider","topDivider"]),l=E()("site-footer center-content-mobile",a&&"has-top-divider",t);return n.a.createElement("footer",Object.assign({},r,{className:l}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:E()("site-footer-inner",i&&"has-top-divider")},n.a.createElement("div",{className:"footer-top space-between text-xxs"},n.a.createElement(j,null)),n.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},n.a.createElement(x,null),n.a.createElement("div",{className:"footer-copyright",style:{color:"white"}},"Made by Stocker, for you.")))))};D.defaultProps={topOuterDivider:!1,topDivider:!1};var C=D,k=function(e){var t=e.children;return n.a.createElement(n.a.Fragment,null,n.a.createElement(O,{navPosition:"right",className:"reveal-from-bottom"}),n.a.createElement("main",{className:"site-content"},t),n.a.createElement(C,{style:{backgroundColor:"#01CAFF"}}))},F=a(5),S={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},L={types:Object(F.a)({},S.types),defaults:Object(F.a)({},S.defaults)},A={types:Object(F.a)({},S.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(F.a)({},S.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},B={types:Object(F.a)({},S.types,{pushLeft:v.a.bool}),defaults:Object(F.a)({},S.defaults,{pushLeft:!1})},H=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=E()("button-group",t);return n.a.createElement("div",Object.assign({},a,{className:i}))},T=function(e){var t=e.className,a=e.tag,i=e.color,r=e.size,l=e.loading,s=e.wide,o=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=E()("button",i&&"button-".concat(i),r&&"button-".concat(r),l&&"is-loading",s&&"button-block",o&&"button-wide-mobile",t),v=a;return n.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};T.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var z=T,P=a(14),M=a(27),R=a(28),I=a(29),W=a(30),q=a(16),_=a(57),U=a(58),V=a(59),G=function(e){Object(W.a)(a,e);var t=Object(I.a)(a);function a(){var e;Object(M.a)(this,a);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={name:"",email:"",phoneNumber:"",message:"I would like to subscribe to the beta."},e.handleChange=function(t,a){e.setState(Object(P.a)({},t,a.target.value))},e}return Object(R.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,a=(t.name,{from_name:t.email,to_name:"aness.hussein.ali@gmail.com",phoneNumber:t.phoneNumber,message_html:t.message});q.send("service_h0q75wd","template_egp9ldh",a,"user_QuG1TIbvzRN8kheqkRwUr"),this.resetForm()}},{key:"resetForm",value:function(){this.setState({name:"",email:"",subject:"",message:""})}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(_.a,{onSubmit:this.handleSubmit.bind(this),target:"my_iframe",style:{alignitems:"right"}},n.a.createElement("ul",null,n.a.createElement(U.a,{className:"text-muted",style:{color:"#01CAFF"}},n.a.createElement("b",null,"Email")),n.a.createElement(V.a,{type:"email",name:"email",value:this.state.email,className:"text-primary",onChange:this.handleChange.bind(this,"email"),placeholder:"Enter email",style:{alignItems:"right",flex:1,width:"100%",padding:"8px"}})),n.a.createElement("ul",null,n.a.createElement(U.a,{className:"text-muted",style:{textAlign:"center",color:"#01CAFF"}},n.a.createElement("b",null,"Name")),n.a.createElement(V.a,{type:"text",name:"name",value:this.state.name,className:"text-primary",onChange:this.handleChange.bind(this,"name"),placeholder:"Name",style:{flex:1,width:"100%",padding:"8px"}})),n.a.createElement("ul",null,n.a.createElement(U.a,{className:"text-muted",style:{textAlign:"center",color:"#01CAFF"}},n.a.createElement("b",null,"Phone Number")),n.a.createElement(V.a,{type:"number",name:"phoneNumber",className:"text-primary",value:this.state.phoneNumber,onChange:this.handleChange.bind(this,"phoneNumber"),placeholder:"Phone Number",style:{width:"100%",padding:"8px"}})),n.a.createElement("ul",null,n.a.createElement(U.a,{className:"text-muted",style:{textAlign:"center",color:"#01CAFF"}},n.a.createElement("b",null,"Message")),n.a.createElement(V.a,{type:"textarea",name:"message",className:"text-primary",value:this.state.message,onChange:this.handleChange.bind(this,"message"),style:{flex:11,alignItems:"center",width:"100%",margin:"8px 0",height:"100px"}})),n.a.createElement("ul",null,n.a.createElement(z,{color:"cyan",variant:"primary",type:"submit"},"Submit"))))}}]),a}(i.Component),J=function(e){var t=e.className,a=(e.children,e.handleClose),r=e.show,l=e.closeHidden,s=e.video,o=(e.videoTag,Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]));Object(i.useEffect)((function(){return document.addEventListener("keydown",d),document.addEventListener("click",u),function(){document.removeEventListener("keydown",d),document.removeEventListener("click",u)}})),Object(i.useEffect)((function(){m()}),[o.show]);var m=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},d=function(e){27===e.keyCode&&a(e)},u=function(e){e.stopPropagation()},v=E()("modal",r&&"is-active",s&&"modal-video",t);return n.a.createElement(n.a.Fragment,null,r&&n.a.createElement("div",Object.assign({},o,{className:v,onClick:a}),n.a.createElement("div",{className:"modal-inner",onClick:u},s?n.a.createElement("div",{className:"responsive-video"},n.a.createElement("iframe",{title:"video",srcdoc:"<p>hello<p/>",frameBorder:"0",allowFullScreen:!0})):n.a.createElement(n.a.Fragment,null,!l&&n.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:a}),n.a.createElement("div",{className:"modal-content"},n.a.createElement(G,null))))))};J.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var Q=J,$=Object(F.a)({},L.defaults),K=function(e){var t=e.className,r=e.topOuterDivider,l=e.bottomOuterDivider,s=e.topDivider,o=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),h=Object(i.useState)(!1),p=Object(d.a)(h,2),f=p[0],b=p[1],g=Object(i.useState)(!1),N=Object(d.a)(g,2),w=N[0],O=N[1],x=(Object(i.useState)(!1),E()("hero section center-content",r&&"has-top-divider",l&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t)),j=E()("hero-inner section-inner",s&&"has-top-divider",o&&"has-bottom-divider");return n.a.createElement("section",Object.assign({},v,{className:x}),n.a.createElement("div",{className:"container-sm"},n.a.createElement("div",{className:j},n.a.createElement("div",{className:"hero-content"},n.a.createElement(y,{src:a(44),alt:"Features split 01",width:500,height:50}),n.a.createElement("div",{className:"container-xs"},n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{style:{color:"white",fontSize:"25px"},className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"600"},"The first social and commission free trading app",n.a.createElement("br",null),"that empowers people with cutting edge analytics"),n.a.createElement("br",null),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"1200"},n.a.createElement(H,null,n.a.createElement(z,{color:"dark",type:"button",onClick:function(e){e.preventDefault(),b(!0)}},n.a.createElement("span",{className:"btn-inner--icon mr-1"},n.a.createElement("i",{className:"ni ni-cloud-download-95"})),"SUBSCRIBE TO BETA"),n.a.createElement("a",{href:"mailto:aness.hussein.ali@gmail.com,ulyanats@gmail.com"},n.a.createElement(z,{size:"lg",color:"primary"},"EMAIL US")))),n.a.createElement("div",{className:"reveal-from-bottom","data-reveal-delay":"1600"},n.a.createElement("br",null)))),n.a.createElement(Q,{id:"video-modal",show:f,handleClose:function(e){e.preventDefault(),b(!1)},form:n.a.createElement(G,null),videoTag:"iframe"}),n.a.createElement(Q,{id:"video-modal",show:w,handleClose:function(e){e.preventDefault(),O(!1)},form:n.a.createElement(G,null),videoTag:"iframe"}))))};K.defaultProps=$;var X=K,Y=function(e){var t=e.className,a=e.data,i=e.children,r=e.tag,l=Object(c.a)(e,["className","data","children","tag"]),s=E()("section-header",t),o=r;return n.a.createElement(n.a.Fragment,null,(a.title||a.paragraph)&&n.a.createElement("div",Object.assign({},l,{className:s}),n.a.createElement("div",{className:"container-xs"},i,a.title&&n.a.createElement(o,{className:E()("mt-0",a.paragraph?"mb-16":"mb-0","text-color-dark"),style:{fontSize:"40px",fontWeight:"normal"}},a.title),a.paragraph&&n.a.createElement("p",{className:"m-0"},a.paragraph))))};Y.defaultProps={children:null,tag:"h2"};var Z=Y,ee=Object(F.a)({},B.defaults),te=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.pushLeft,u=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),v=E()("features-tiles section",i&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),h=E()("features-tiles-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider"),p=E()("tiles-wrap center-content",d&&"push-left");return n.a.createElement("section",Object.assign({},u,{className:v}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:h},n.a.createElement(Z,{data:{title:"Hot investment opportunities at your fingertips",paragraph:""},className:"center-content"}),n.a.createElement("div",{className:p},n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(45),alt:"Features tile icon 01",width:50,height:50}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8",style:{color:"grey",fontWeight:"200",fontSize:"20px"}},"Follow CEOs and Access company 360 overviews with Earnings, Balance Sheet, Revenues and more")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(46),alt:"Features tile icon 02",width:50,height:50}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8",style:{color:"grey",fontWeight:"200",fontSize:"20px"}},"Leverage our stock screener: sort and filter on Social and Financial Metrics to target new investment ideas")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"200"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(47),alt:"Features tile icon 05",width:50,height:50}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8",style:{color:"grey",fontWeight:"200",fontSize:"20px"}},"Commission free trading")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(48),alt:"Features tile icon 03",width:50,height:50}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8",style:{color:"grey",fontWeight:"200",fontSize:"20px"}},"Interact with the community through our social platform: exchange and monetize trade ideas")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(49),alt:"Features tile icon 04",width:50,height:50}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8",style:{color:"grey",fontWeight:"200",fontSize:"20px"}},"Educate yourself with our investment tips, educate the community and help us empower the people!")))),n.a.createElement("div",{className:"tiles-item reveal-from-bottom","data-reveal-delay":"400"},n.a.createElement("div",{className:"tiles-item-inner"},n.a.createElement("div",{className:"features-tiles-item-header"},n.a.createElement("div",{className:"features-tiles-item-image mb-16"},n.a.createElement(y,{src:a(50),alt:"Features tile icon 06",width:50,height:50}))),n.a.createElement("div",{className:"features-tiles-item-content"},n.a.createElement("h4",{className:"mt-0 mb-8",style:{color:"grey",fontWeight:"200",fontSize:"20px"}},"Receive direct support from Investment Banking Traders and Machine Learning experts"))))))))};te.defaultProps=ee;var ae=te,ie=Object(F.a)({},A.defaults),ne=function(e){var t=e.className,i=e.topOuterDivider,r=e.bottomOuterDivider,l=e.topDivider,s=e.bottomDivider,o=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,h=e.imageFill,p=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),f=E()("features-split section",i&&"has-top-divider",r&&"has-bottom-divider",o&&"has-bg-color",m&&"invert-color",t),b=E()("features-split-inner section-inner",l&&"has-top-divider",s&&"has-bottom-divider"),g=E()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return n.a.createElement("section",Object.assign({},p,{className:f}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:b},n.a.createElement(Z,{data:{title:"Hot investment opportunities at your fingertips",paragraph:""},className:"center-content"}),n.a.createElement(Z,{data:{title:"Empower the people with cutting edge analytics",paragraph:""},className:"center-content"}),n.a.createElement("div",{className:g},n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Economics"),n.a.createElement("h3",{className:"mt-0 mb-12",style:{color:"cyan"}},"Financial Expertise"),n.a.createElement("p",{className:"m-0"},"His expertise in trading, asset management, and risk analysis helps him understand your needs in a concrete manner. The solutions he delivers leverage Macro Economics expertise, quantitative methods, and latest available technologies. Aness also enjoys building and running trading strategies using prop funds, feel free to reach out for performance and risk related metrics.")),n.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(y,{src:a(51),alt:"Features split 01",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Data Science"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),n.a.createElement("p",{className:"m-0"},"Aness brings business actionable insights leveraging metrics and analytics based on both structured and unstructured data. He has a strong expertise in Statistical Methods, Data Science, with concrete projects and experience in both the Financial and the adTech eMarketing business.")),n.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(y,{src:a(52),alt:"Features split 02",width:528,height:396}))),n.a.createElement("div",{className:"split-item"},n.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},n.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Software Development"),n.a.createElement("h3",{className:"mt-0 mb-12"},"Seamless workflow"),n.a.createElement("p",{className:"m-0"},"Aness has a strong interest in using latest cutting hedge technologies to provide elegant analytics and solutions to your needs. He has deployed back end data bases on Google Cloud Platform, and linked the front fo the back end using Django. Aness has also experience in building front end applications using React and Flutter for Web and App development. He leveraged Machine Learning models and schedulers to run computations and cache the output metrics relevant for the front end user and/or model.")),n.a.createElement("div",{className:E()("split-item-image center-content-mobile reveal-from-bottom",h&&"split-item-image-fill"),"data-reveal-container":".split-item"},n.a.createElement(y,{src:a(53),alt:"Features split 03",width:528,height:396})))))))};ne.defaultProps=ie;var re=Object(F.a)({},B.defaults),le=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,r=e.topDivider,l=e.bottomDivider,s=e.hasBgColor,o=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=E()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",s&&"has-bg-color",o&&"invert-color",t),v=E()("testimonial-inner section-inner",r&&"has-top-divider",l&&"has-bottom-divider"),h=E()("tiles-wrap",m&&"push-left");return n.a.createElement("section",Object.assign({},d,{className:u}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:v},n.a.createElement(Z,{data:{title:"Testimonial",paragraph:"Please reach out for recommandation letters"},className:"center-content"}),n.a.createElement("div",{className:h}))))};le.defaultProps=re;var se=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(X,{className:"illustration-section-01"}),n.a.createElement(ae,{hasBgColor:!0}),n.a.createElement("topDivider",{hasBgColor:!0}))};b.a.initialize("UA-189834135-1");var oe=function(){var e=Object(i.useRef)(),t=Object(s.d)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){b.a.set({page:e}),b.a.pageview(e)}(a)}),[t]),n.a.createElement(f,{ref:e,children:function(){return n.a.createElement(s.c,null,n.a.createElement(m,{exact:!0,path:"/",component:se,layout:k}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(54);var ce=Object(o.a)();l.a.render(n.a.createElement(s.b,{history:ce},n.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.5fc11a18.chunk.js.map