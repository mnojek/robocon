(function(e){function t(t){for(var o,r,i=t[0],l=t[1],s=t[2],b=0,p=[];b<i.length;b++)r=i[b],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&p.push(c[r][0]),c[r]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);d&&d(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==c[l]&&(o=!1)}o&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var o={},c={app:0},a=[];function r(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="dist/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d7c":function(e,t,n){},"26db":function(e,t,n){"use strict";n("1d7c")},"2d0e":function(e,t,n){"use strict";n("e018")},"338e":function(e,t,n){"use strict";n("cea3")},3418:function(e,t,n){"use strict";n("df05")},"35e4":function(e,t,n){},"3ebb":function(e,t,n){"use strict";n("891e")},"56d7":function(e,t,n){"use strict";n.r(t);var o=n("5530"),c=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("7a23"));function a(e,t,n,o,a,r){var i=Object(c["resolveComponent"])("router-view");return Object(c["openBlock"])(),Object(c["createBlock"])(i)}var r={created:function(){var e=this;document.documentElement.lang=this.$i18n.locale,this.$store.commit("SET_IS_MOBILE",window.innerWidth<700),this.$store.commit("SET_IS_DESKTOP",window.innerWidth>1399),window.addEventListener("resize",(function(){e.$store.commit("SET_IS_MOBILE",window.innerWidth<700),e.$store.commit("SET_IS_DESKTOP",window.innerWidth>1399)})),window.addEventListener("click",(function(){return document.body.classList.remove("accessible")})),window.addEventListener("keydown",(function(e){var t=e.key;"Tab"===t&&document.body.classList.add("accessible")}))},watch:{"$i18n.locale":function(){document.documentElement.lang=this.$i18n.locale}}},i=n("d959"),l=n.n(i);const s=l()(r,[["render",a]]);var d=s,b=n("6c02"),p=Object(c["withScopeId"])("data-v-34895f6f");Object(c["pushScopeId"])("data-v-34895f6f");var u={key:1,class:"mb-xlarge"},m={class:"container mb-xlarge"};Object(c["popScopeId"])();var f=p((function(e,t,n,o,a,r){var i=Object(c["resolveComponent"])("nav-mobile"),l=Object(c["resolveComponent"])("banner"),s=Object(c["resolveComponent"])("navbar"),d=Object(c["resolveComponent"])("news-banner"),b=Object(c["resolveComponent"])("tab-box"),f=Object(c["resolveComponent"])("page-section"),O=Object(c["resolveComponent"])("page-footer");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(i),Object(c["createVNode"])(l),Object(c["createVNode"])(s,{class:"nav-desktop"}),e.$te("newsBanner")&&""!==e.$t("newsBanner")?(Object(c["openBlock"])(),Object(c["createBlock"])(d,{key:0,class:"mb-small mt-small"})):(Object(c["openBlock"])(),Object(c["createBlock"])("div",u)),Object(c["createVNode"])("div",m,[Object(c["createVNode"])(f,{"title-id":"intro",title:e.$t("intro.title"),body:e.$t("intro.body")},{default:p((function(){return[Object(c["createVNode"])(b,{class:"col-sm-12 col-lg-9 col-lg-offset-3","section-id":"intro",tabs:e.$tm("intro.tabs")},null,8,["tabs"])]})),_:1},8,["title","body"]),Object(c["createVNode"])(f,{"title-id":"cfp",title:e.$t("cfp.title"),body:e.$t("cfp.body")},null,8,["title","body"]),Object(c["createVNode"])(f,{"title-id":"covid",title:e.$t("covid.title"),body:e.$t("covid.body")},null,8,["title","body"])]),Object(c["createVNode"])(O)],64)}));function O(e,t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:"container type-center pl-small pr-small color-white",innerHTML:e.$t("newsBanner")},null,8,["innerHTML"])}const v={},h=l()(v,[["render",O]]);var j=h,w={class:"row middle bg-black"},g=Object(c["createVNode"])("div",{class:"mr-large",style:{"transition-delay":"1.25s"}},[Object(c["createTextVNode"])(" THE 5th ANNUAL"),Object(c["createVNode"])("br"),Object(c["createTextVNode"])(" ROBOT FRAMEWORK"),Object(c["createVNode"])("br"),Object(c["createTextVNode"])(" CONFERENCE ")],-1),k=Object(c["createTextVNode"])(" A GLOBAL HYBRID"),y=Object(c["createVNode"])("br",null,null,-1),N=Object(c["createTextVNode"])(" SOFTWARE AUTOMATION"),V=Object(c["createVNode"])("br",null,null,-1),B=Object(c["createTextVNode"])(" EVENT "),T={key:0,style:{"transition-delay":"2.25s"}},I=Object(c["createTextVNode"])(" 18-21st"),S=Object(c["createVNode"])("br",null,null,-1),x=Object(c["createTextVNode"])(" JAN 2022"),C=Object(c["createVNode"])("br",null,null,-1),_=Object(c["createTextVNode"])(" UTC+2 "),$={class:"col-sm-12 type-center mt-large mb-medium",style:{"transition-delay":"0.5s"}},M={key:0,class:"col-sm-12 type-center font-title mb-small",style:{"transition-delay":"2.25s"}};function E(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createBlock"])("div",w,[Object(c["createVNode"])("div",{class:["font-title slogans",[e.doTheBling?"bling":"",e.$store.state.isMobile?"flex between ml-small mt-small":"col-sm-12 row center mt-large"]]},[Object(c["createVNode"])(c["Transition"],{appear:"",name:"fade-right"},{default:Object(c["withCtx"])((function(){return[g]})),_:1}),Object(c["createVNode"])(c["Transition"],{appear:"",name:"fade-right"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("div",{class:e.$store.state.isMobile?"type-right":"mr-large",style:{"transition-delay":"1.75s"}},[k,y,N,V,B],2)]})),_:1}),Object(c["createVNode"])(c["Transition"],{appear:"",name:"fade-right"},{default:Object(c["withCtx"])((function(){return[e.$store.state.isMobile?Object(c["createCommentVNode"])("",!0):(Object(c["openBlock"])(),Object(c["createBlock"])("div",T,[I,S,x,C,_]))]})),_:1})],2),Object(c["createVNode"])(c["Transition"],{appear:"",name:"opacity-slow"},{default:Object(c["withCtx"])((function(){return[Object(c["createVNode"])("div",$,[Object(c["createVNode"])("img",{src:"./img/RBCN22.svg",alt:"ROBOCON 2022",class:"rbcn-logo"},null,8,["src"])])]})),_:1}),Object(c["createVNode"])(c["Transition"],{appear:"",name:"fade-right"},{default:Object(c["withCtx"])((function(){return[e.$store.state.isMobile?(Object(c["openBlock"])(),Object(c["createBlock"])("div",M," 18-21st JAN 2022 UTC+2 ")):Object(c["createCommentVNode"])("",!0)]})),_:1})])}n("4795");var L={name:"Banner",data:function(){return{doTheBling:!1}},mounted:function(){var e=this,t=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);t||setTimeout((function(){e.doTheBling=!0}),3100)}};n("3ebb");const D=l()(L,[["render",E]]);var F=D,P=Object(c["withScopeId"])("data-v-57197fb8");Object(c["pushScopeId"])("data-v-57197fb8");var R={class:"row bg-black color-white p-small pt-large pb-large"},H={class:"container",style:{"line-height":"2"}},A={class:"row"},z=Object(c["createVNode"])("div",{class:"col-sm-6 col-md-3"},[Object(c["createVNode"])("h3",{class:"mb-small"},[Object(c["createVNode"])("a",{href:"https://robotframework.org/foundation/"},"Foundation")]),Object(c["createVNode"])("div",null," Robot Framework ry "),Object(c["createVNode"])("div",null," Kampinkuja 2 "),Object(c["createVNode"])("div",null," 00100 Helsinki "),Object(c["createVNode"])("div",null," Finland "),Object(c["createVNode"])("a",{href:"mailto:robotframework-foundation@googlegroups.com"}," Contact ")],-1),U=Object(c["createStaticVNode"])('<h3 class="mb-small" data-v-57197fb8> Community </h3><div data-v-57197fb8><a href="https://github.com/robotframework/robotframework" data-v-57197fb8> GitHub </a></div><div data-v-57197fb8><a href="https://forum.robotframework.org/" data-v-57197fb8> Forum </a></div><div data-v-57197fb8><a href="https://www.facebook.com/robotframeworkofficial" data-v-57197fb8> Facebook </a></div><div data-v-57197fb8><a href="https://twitter.com/robotframework" data-v-57197fb8> Twitter </a></div><div data-v-57197fb8><a href="https://www.linkedin.com/groups/3710899/" data-v-57197fb8> LinkedIn </a></div>',6),W={key:0,class:"col-sm-12 mb-large"},K=Object(c["createVNode"])("div",{class:"col-sm-6 col-md-3"},null,-1),q={class:"col-sm-6 col-md-3 flex flex-col between"},J=Object(c["createVNode"])("div",null,null,-1),G=Object(c["createVNode"])("div",null,[Object(c["createVNode"])("a",{href:"https://robotframework.org"}," Robot Framework ")],-1),Y=Object(c["createVNode"])("div",null,[Object(c["createVNode"])("a",{href:"https://robotframework.org/privacy-policy"}," Privacy Policy ")],-1);Object(c["popScopeId"])();var Q=P((function(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createBlock"])("div",R,[Object(c["createVNode"])("div",H,[Object(c["createVNode"])("div",A,[z,Object(c["createVNode"])("div",{class:["col-sm-6 col-md-3",e.$store.state.isMobile?"type-right":""]},[U],2),e.$store.state.isMobile?(Object(c["openBlock"])(),Object(c["createBlock"])("div",W)):Object(c["createCommentVNode"])("",!0),K,Object(c["createVNode"])("div",q,[J,Object(c["createVNode"])("div",{class:e.$store.state.isMobile?"type-right":""},[G,Y],2)])])])])})),X=(n("4de4"),n("d81d"),n("b64b"),n("b0c0"),{name:"PageFooter",components:{},data:function(){return{langDropdownOpen:!1}},computed:{langNames:function(){var e=this;return Object.keys(this.$i18n.messages).map((function(t){return{lang:t,name:e.$i18n.messages[t].langName}})).filter((function(e){var t=e.name;return"translation"!==t}))}},methods:{setLang:function(e){this.$i18n.locale=e,window.localStorage.setItem("lang",e)}}});n("5a0d");const Z=l()(X,[["render",Q],["__scopeId","data-v-57197fb8"]]);var ee=Z,te=Object(c["withScopeId"])("data-v-2bdd60d6");Object(c["pushScopeId"])("data-v-2bdd60d6");var ne={ref:"nav",class:"navbar row center bg-black color-white p-2xsmall pt-xsmall pb-xsmall"},oe={class:"flex",style:{"transition-delay":"0.5s"}},ce={key:0,class:"tiny-logo-container"};Object(c["popScopeId"])();var ae=te((function(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createBlock"])("div",ne,[Object(c["createVNode"])(c["Transition"],{appear:"",name:"opacity-slow"},{default:te((function(){return[Object(c["createVNode"])("div",oe,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.$tm("navbar.items"),(function(t,n){return Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:t.name,name:"go-to-".concat(t.name),class:["pl-small pr-small color-white font-title type-uppercase type-no-underline",n!==e.$tm("navbar.items").length-1?"dot-right-white":""],onClick:function(e){return r.itemClick(t.id)}}," {  "+Object(c["toDisplayString"])(t.name)+"  } ",11,["name","onClick"])})),128))])]})),_:1}),Object(c["createVNode"])(c["Transition"],{name:"opacity"},{default:te((function(){return[e.navSticky?(Object(c["openBlock"])(),Object(c["createBlock"])("div",ce,[Object(c["createVNode"])("img",{src:"".concat(e.publicPath,"img/RF-white.svg")},null,8,["src"])])):Object(c["createCommentVNode"])("",!0)]})),_:1})],512)})),re=(n("99af"),n("ac1f"),n("1276"),{name:"Navbar",data:function(){return{navSticky:!1,publicPath:"dist/",linkDropdownOpen:!1,langDropdownOpen:!1}},computed:{langNames:function(){var e=this;return Object.keys(this.$i18n.messages).map((function(t){return{lang:t,name:e.$i18n.messages[t].langName}}))}},methods:{itemClick:function(e){var t=document.getElementById(e);t&&(history.replaceState(null,null,"".concat(location.href.split("?")[0].split("#")[0],"#").concat(e)),window.scrollTo({top:t.offsetTop,behavior:"smooth"}),window.plausible("Nav click",{props:{section:e}}))},setLang:function(e){this.$i18n.locale=e,window.localStorage.setItem("lang",e)},onClick:function(e){this.linkDropdownOpen&&this.$refs.dropdown&&!this.$refs.dropdown.contains(e.target)&&(this.linkDropdownOpen=!1)}},mounted:function(){var e=this,t=new IntersectionObserver((function(t){e.navSticky=!t[0].isIntersecting}),{threshold:1});t.observe(this.$refs.nav),document.addEventListener("click",this.onClick)},beforeUnmount:function(){document.removeEventListener("click",this.onClick)},watch:{linkDropdownOpen:function(){this.linkDropdownOpen&&(this.langDropdownOpen=!1)},langDropdownOpen:function(){this.langDropdownOpen&&(this.linkDropdownOpen=!1)}}});n("2d0e");const ie=l()(re,[["render",ae],["__scopeId","data-v-2bdd60d6"]]);var le=ie,se=Object(c["withScopeId"])("data-v-1f8cc5e0");Object(c["pushScopeId"])("data-v-1f8cc5e0");var de={key:0,class:"menu bg-black pt-xlarge pb-large pl-small pr-small"},be={class:"flex middle pl-xsmall"},pe={class:"logo-container"},ue=Object(c["createVNode"])("div",{class:"font-title mr-2xsmall"}," ROBOCON 2022 ",-1),me=Object(c["createVNode"])("span",null,null,-1),fe=Object(c["createVNode"])("span",null,null,-1),Oe=Object(c["createVNode"])("span",null,null,-1),ve=Object(c["createVNode"])("span",null,null,-1);Object(c["popScopeId"])();var he=se((function(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[Object(c["createVNode"])(c["Transition"],{name:"fade"},{default:se((function(){return[e.isOpen?(Object(c["openBlock"])(),Object(c["createBlock"])("div",de,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(e.$tm("navbar.items"),(function(t){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:t.name},[Object(c["createVNode"])("button",{name:"go-to-".concat(t.name),class:"mb-small mt-xsmall color-white font-title type-uppercase",onClick:function(n){r.scrollTo(t.id,400),e.isOpen=!1}},Object(c["toDisplayString"])(t.name),9,["name","onClick"])])})),128))])):Object(c["createCommentVNode"])("",!0)]})),_:1}),Object(c["createVNode"])("div",{class:["navbar row between bg-black color-white",e.isOpen?"open":""]},[Object(c["createVNode"])("div",be,[Object(c["createVNode"])("div",pe,[Object(c["createVNode"])("img",{src:"".concat(e.publicPath,"img/RF-white.svg")},null,8,["src"])]),ue]),Object(c["createVNode"])("button",{class:["hamburger",e.isOpen?"open":""],onClick:t[1]||(t[1]=function(t){e.isOpen=!e.isOpen,e.linksOpen=!1})},[me,fe,Oe,ve],2)],2),Object(c["createVNode"])(c["Transition"],{name:"opacity"},{default:se((function(){return[e.isOpen?(Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:0,class:"menu-background",onClick:t[2]||(t[2]=function(t){return e.isOpen=!1})})):Object(c["createCommentVNode"])("",!0)]})),_:1})],64)})),je=(n("0d03"),n("e25e"),Object(c["withScopeId"])("data-v-82156096")),we=je((function(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createBlock"])("svg",{height:"".concat(n.size,"px"),viewBox:"0 0 24 24",width:"".concat(n.size,"px"),fill:r.fillColor},[Object(c["createVNode"])("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z",transform:r.transform},null,8,["transform"])],8,["height","width","fill"])})),ge=(n("a9e3"),{name:"Chevron",props:{direction:{type:String,default:"left"},size:{type:Number,default:16},color:{type:String,default:"black"}},computed:{transform:function(){return"right"===this.direction?"rotate(180 12 12)":"up"===this.direction?"rotate(90 12 12)":"down"===this.direction?"rotate(270 12 12)":""},fillColor:function(){return"white"===this.color?"#f5f5f5":"#1d1d1d"}}});n("3418");const ke=l()(ge,[["render",we],["__scopeId","data-v-82156096"]]);var ye=ke,Ne=n("ade3"),Ve=Object(c["withScopeId"])("data-v-0776438e");Object(c["pushScopeId"])("data-v-0776438e");var Be=Object(c["createVNode"])("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Te=Object(c["createVNode"])("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"},null,-1);Object(c["popScopeId"])();var Ie=Ve((function(e,t,n,o,a,r){var i;return Object(c["openBlock"])(),Object(c["createBlock"])("svg",{xmlns:"http://www.w3.org/2000/svg",height:"16px",viewBox:"0 0 24 24",width:"16px",class:(i={},Object(Ne["a"])(i,"fill-white","white"===n.color),Object(Ne["a"])(i,"fill-theme","theme"===n.color),i)},[Be,Te],2)})),Se={name:"NewTabIcon",props:{color:{type:String,default:"white"}}};n("338e");const xe=l()(Se,[["render",Ie],["__scopeId","data-v-0776438e"]]);var Ce=xe,_e={name:"NavMobile",components:{ChevronIcon:ye,NewTabIcon:Ce},data:function(){return{isOpen:!1,linksOpen:!1,publicPath:"dist/"}},methods:{scrollTo:function(e,t){var n=function(e,t,n,o){var c=e/(o/2);return c<1?n/2*c*c+t:(c-=1,-n/2*(c*(c-2)-1)+t)},o=document.getElementById(e).offsetTop-80,c=document.scrollingElement||document.documentElement,a=c.scrollTop,r=o-a,i=+new Date,l=function e(){var l=+new Date,s=l-i;c.scrollTop=parseInt(n(s,a,r,t),10),s<t?requestAnimationFrame(e):c.scrollTop=o};l()}}};n("bfcc");const $e=l()(_e,[["render",he],["__scopeId","data-v-1f8cc5e0"]]);var Me=$e,Ee=Object(c["withScopeId"])("data-v-30f09ddd");Object(c["pushScopeId"])("data-v-30f09ddd");var Le={class:"border-top-theme mb-xlarge section-container",tabindex:"-1"},De={class:"row p-small"};Object(c["popScopeId"])();var Fe=Ee((function(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createBlock"])("div",Le,[Object(c["createVNode"])("div",De,[Object(c["createVNode"])("div",{class:["col-sm-12 col-lg-3",e.$store.state.isMobile?"":"pt-3xsmall"]},[Object(c["createVNode"])("h2",{id:n.titleId},Object(c["toDisplayString"])(n.title),9,["id"])],2),Object(c["createVNode"])("div",{class:"col-sm-12 col-lg-9",innerHTML:n.body},null,8,["innerHTML"])]),Object(c["createVNode"])("div",{class:["row",e.$store.state.isMobile?"":"pl-small pr-small"]},[Object(c["renderSlot"])(e.$slots,"default",{},void 0,!0)],2)])})),Pe={name:"PageSection",props:{title:{type:String,default:""},body:{type:String,default:""},titleId:{type:String,required:!0}}};n("7aa5");const Re=l()(Pe,[["render",Fe],["__scopeId","data-v-30f09ddd"]]);var He=Re,Ae=(n("a4d3"),n("e01a"),{class:"row"}),ze={key:0,class:"row mt-small color-white"},Ue={key:1};function We(e,t,n,o,a,r){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{class:["bg-grey-dark card",e.$store.state.isMobile?"p-small pt-medium sharp":"p-large"]},[Object(c["createVNode"])("div",Ae,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(n.tabs,(function(t,n){return Object(c["openBlock"])(),Object(c["createBlock"])("button",{key:t.name,class:["type-uppercase theme type-small mb-xsmall",[e.activeTabIndex===n?"active":"",2===n?"mr-none":"mr-small"]],onClick:function(t){return e.activeTabIndex=n}},Object(c["toDisplayString"])(t.name),11,["onClick"])})),128))]),r.activeTab?(Object(c["openBlock"])(),Object(c["createBlock"])("div",ze,[Object(c["createVNode"])(c["Transition"],{name:"opacity",mode:"out-in"},{default:Object(c["withCtx"])((function(){return[e.$slots["tab-".concat(e.activeTabIndex+1)]?(Object(c["openBlock"])(),Object(c["createBlock"])("div",Ue,[Object(c["renderSlot"])(e.$slots,"tab-".concat(e.activeTabIndex+1))])):(Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:r.activeTab.name,innerHTML:r.activeTab.description},null,8,["innerHTML"]))]})),_:3})])):Object(c["createCommentVNode"])("",!0)],2)}n("d3b7"),n("3ca3"),n("ddb0"),n("9861"),n("841c");var Ke={name:"TabBox",props:{tabs:{type:Array,required:!0},sectionId:{type:String,required:!0}},data:function(){return{activeTabIndex:0,eventSent:!1}},computed:{activeTab:function(){return this.tabs[this.activeTabIndex]}},created:function(){if(window.location.hash==="#".concat(this.sectionId)){var e=new URLSearchParams(window.location.search),t=e.get("tab");t&&(this.activeTabIndex=Number(t))}},watch:{activeTab:function(){this.eventSent||(window.plausible("Interact",{props:{element:this.sectionId}}),this.eventSent=!0);var e="".concat(window.location.href.split("?")[0].split("#")[0],"?tab=").concat(this.activeTabIndex,"#").concat(this.sectionId);history.replaceState(null,null,e)}}};const qe=l()(Ke,[["render",We]]);var Je=qe;Object(c["pushScopeId"])("data-v-14411a2f");Object(c["popScopeId"])();n("9b3f");Object(c["pushScopeId"])("data-v-0d72e445");Object(c["popScopeId"])();n("c8de");var Ge={name:"App",components:{Banner:F,PageFooter:ee,Navbar:le,NavMobile:Me,PageSection:He,TabBox:Je,NewsBanner:j}};n("26db");const Ye=l()(Ge,[["render",f],["__scopeId","data-v-34895f6f"]]);var Qe=Ye,Xe={class:"container"},Ze={class:"row center type-center",style:{"margin-top":"calc(100vh / 2 - 7rem)"}},et=Object(c["createVNode"])("div",{class:"col-sm-12"},[Object(c["createVNode"])("h3",null,"404 - Not found")],-1),tt={class:"col-sm-12 mt-medium"},nt=Object(c["createTextVNode"])(" Back to home ");function ot(e,t,n,o,a,r){var i=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("div",Xe,[Object(c["createVNode"])("div",Ze,[et,e.isDarkMode?(Object(c["openBlock"])(),Object(c["createBlock"])("img",{key:0,src:"".concat(e.publicPath,"img/RF-white.svg")},null,8,["src"])):(Object(c["openBlock"])(),Object(c["createBlock"])("img",{key:1,src:"".concat(e.publicPath,"img/RF.svg"),class:"mt-small"},null,8,["src"])),Object(c["createVNode"])("div",tt,[Object(c["createVNode"])(i,{to:{name:"Home"}},{default:Object(c["withCtx"])((function(){return[nt]})),_:1})])])])}var ct={name:"NotFound",data:function(){return{publicPath:"dist/",isDarkMode:!1}},created:function(){this.isDarkMode=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches}};const at=l()(ct,[["render",ot]]);var rt=at,it=[{path:"/",name:"Home",component:Qe},{path:"/:pathMatch(.*)*",name:"NotFound",component:rt}],lt=Object(b["a"])({history:Object(b["b"])(),routes:it,scrollBehavior:function(e,t,n){return n||{top:0}}}),st=lt,dt=n("5502"),bt=Object(dt["a"])({state:{isMobile:null,isDesktop:null},mutations:{SET_IS_MOBILE:function(e,t){e.isMobile=t},SET_IS_DESKTOP:function(e,t){e.isDesktop=t}},actions:{},modules:{}}),pt=(n("a2f0"),n("0251")),ut=function(){return{langName:"English",newsBanner:'📣 Interested in giving a talk at RoboCon? <a href="/#cfp">Call for Proposals is open!</a>',navbar:{items:[{name:"Intro",id:"intro"},{name:"Cfp",id:"cfp"},{name:"Covid",id:"covid"}]},intro:{title:"Save the Date",body:"<p>RoboCon 2022 planning is underway!</p>\n      <p>This year we'll be returning to an in-person conference while also\n      streaming live worldwide. That way everyone has a chance to participate.</p>\n      <p>Come and join us!</p>",tabs:[{name:"Live",description:'\n        <p>Robocon\'s in-person part is held in <span class="color-theme">Helsinki, Finland,</span>\n        the home country of Robot Framework.</p>\n        <p>The venue will be once again <span class="color-theme">Bio Rex</span>, which can safely accomodate 250 people.\n        It is located just a few minutes\' walk from the main railway station of Helsinki.</p>\n        <p>In addition to catering and bar there\'ll be fun activities between the talks,\n        which are revealed at a later date.</p>\n        <p>And yes, there will be an after party!</p>'},{name:"Online",description:'\n        <p>Online participants will not be an afterthought!</p>\n        <p>Instead of just a "webcast", remote participants get to enjoy a well-prepared, interactive\n        virtual experience. There will be exciting interaction possibilities between the live and\n        online audiences, a dedicated host and camera crew for online participants and much more.</p>\n        <p>Stay tuned for more information!</p>'}]},cfp:{title:"CFP",body:'\n    <p>RoboCon 2022 Call for Proposals is open!</p>\n    <p>We are looking for talk presenters and workshop facilitators. Submissions can be for both\n    in-person and remote (pre-recorded) talks.</p>\n    <p>If you are interested, <a href="https://cfp.robocon.io/robocon-2022" target="_blank">\n    please submit a proposal!</a></p>\n    '},covid:{title:"COVID",body:"\n    <p>To minimize the risk of infection, there will be precautions regarding the in-person part of the event.\n    We are constantly following the regulatory guidelines and always act by the current restrictions and recommendations.</p>\n    <p>In general, Finland has had a pretty low number of infections relative to population.</p>"}}},mt=Object(pt["createI18n"])({locale:"en-US",messages:{"en-US":Object(o["a"])({},ut())},warnHtmlInMessage:"off"});Object(c["createApp"])(d).use(bt).use(st).use(mt).mount("#app")},"5a0d":function(e,t,n){"use strict";n("35e4")},"7aa5":function(e,t,n){"use strict";n("9d5f")},"891e":function(e,t,n){},"9b3f":function(e,t,n){"use strict";n("c39c")},"9d5f":function(e,t,n){},a2f0:function(e,t,n){},bb55:function(e,t,n){},bfcc:function(e,t,n){"use strict";n("bb55")},c39c:function(e,t,n){},c8de:function(e,t,n){"use strict";n("d9f9")},cea3:function(e,t,n){},d9f9:function(e,t,n){},df05:function(e,t,n){},e018:function(e,t,n){}});