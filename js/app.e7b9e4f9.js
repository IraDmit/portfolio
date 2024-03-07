(function(){"use strict";var t={7729:function(t,e,i){i.r(e),i.d(e,{default:function(){return J}});var s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("the-header"),e("the-main-screen"),e("the-about"),e("the-projects"),e("the-contact"),e("the-footer")],1)},a=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"about-wrp container",attrs:{id:"about"}},[e("div",{staticClass:"first-row"},[e("div",{ref:"about",staticClass:"about"},[t._v(" "+t._s(t.$t("helloTxt"))+" ")]),e("p",[t._v(t._s(t.$t("about").toUpperCase()))])]),e("div",{staticClass:"second-row"},[e("div",{ref:"experience",staticClass:"col"},[e("p",[t._v(t._s(t.$t("experience").toUpperCase()))]),e("div",{staticClass:"txt"},[t._v(" "+t._s(t.$t("expTxt"))+" ")])]),e("div",{ref:"skills",staticClass:"col"},[e("p",[t._v(t._s(t.$t("skills").toUpperCase()))]),e("div",{staticClass:"txt"},[t._v(" "+t._s(t.$t("skillsTxt"))+" ")])])])])},n=[],o=i(4968),l=i(940);o.Ay.registerPlugin(l.u);var c={mounted(){o.Ay.fromTo(this.$refs.skills,{xPercent:100,opacity:0},{xPercent:0,duration:2.5,opacity:1,scrollTrigger:{trigger:".about-wrp",start:"top bottom"}}),o.Ay.fromTo(this.$refs.experience,{xPercent:-100,opacity:0},{xPercent:0,duration:2.5,opacity:1,scrollTrigger:{trigger:".about-wrp",start:"top bottom"}}),o.Ay.fromTo(this.$refs.about,{xPercent:100,opacity:0},{xPercent:0,duration:2.5,opacity:1,scrollTrigger:{trigger:".about-wrp",start:"top bottom"}})}},u=c,p=i(1656),d=(0,p.A)(u,r,n,!1,null,"0e115862",null),f=d.exports,h=function(){var t=this;t._self._c;return t._m(0)},v=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-section",attrs:{id:"contact"}},[e("div",{staticClass:"big-txt"},[t._v("Irina Dmitrieva")]),e("div",{staticClass:"glitch"},[t._v("alisagoodpirate@gmail.com")])])}],g={},m=g,b=(0,p.A)(m,h,v,!1,null,"0d3992bf",null),x=b.exports,_=function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-screen container"},[t._m(0),e("div",{ref:"marquee",staticClass:"marquee"},[e("div",{ref:"marqueeContent",staticClass:"marquee-content"},[e("p",{staticClass:"marque-part"},[t._v("Developer")]),e("p",{staticClass:"marque-part"},[t._v("Front-End Developer")]),e("p",{staticClass:"marque-part"},[t._v("Front-End")])])]),e("div",{staticClass:"bottom"},[e("div",{staticClass:"txt",domProps:{innerHTML:t._s(t.$t("avaliable"))}}),e("div",{staticClass:"txt",domProps:{innerHTML:t._s(t.$t("city"))}})])])},C=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"glitch"},[e("img",{attrs:{src:"https://d2kq0urxkarztv.cloudfront.net/58e4b332c0367b005e8ff54d/1039748/upload-a2514e75-7916-46a6-a22f-9d17ea642d5f.png?w=788",alt:""}}),e("div",{staticClass:"glitch__layers"},[e("div",{staticClass:"glitch__layer"}),e("div",{staticClass:"glitch__layer"}),e("div",{staticClass:"glitch__layer"})])])}],w={mounted(){if(window.innerWidth<600)return;const t=this.$refs.marqueeContent.cloneNode(!0);this.$refs.marquee.append(t);const e=parseInt(getComputedStyle(this.$refs.marqueeContent).getPropertyValue("width"),10),i=parseInt(getComputedStyle(this.$refs.marqueeContent).getPropertyValue("column-gap"),10),s=-1*(i+e);o.Ay.fromTo(this.$refs.marquee.children,{x:0},{x:s,duration:15,repeat:-1,ease:"none"})}},y=w,k=(0,p.A)(y,_,C,!1,null,"047e045c",null),T=k.exports,A=function(){var t=this,e=t._self._c;return e("section",{ref:"main",staticClass:"box-section container",attrs:{id:"projects"}},[e("div",{ref:"wrp",staticClass:"box-wrp",style:{"--gap":t.gap+"px"}},t._l(t.framesList,(function(i,s){return e("div",{key:"frame"+s,staticClass:"box hover-text-one",style:{"--boxWidth":t.boxWidth+"px"}},[e("figure",{staticClass:"effect-text-four"},[e("img",{attrs:{src:i.image,alt:""}}),e("figcaption",[e("h3",{staticClass:"title"},[t._v(t._s(i.title))]),e("a",{attrs:{href:i.link}},[t._v(t._s(t.$t("studyCase"))+" →")])])])])})),0)])},j=[];o.Ay.registerPlugin(l.u);var $={data(){return{framesList:[{title:"HomeState",link:"https://iradmit.github.io/bprunsk56/",text:"",image:"https://budgetrf.ru/wp-content/uploads/2023/05/agenstvo-nedvizhimosti.jpeg"},{title:"CreateX",link:"https://iradmit.github.io/createX/",text:"",image:"https://f.partnerkin.com/uploads/storage/files/file_1622032176.jpg"},{title:"ToDo List",link:"https://iradmit.github.io/todoList/",text:"",image:"https://www.amitree.com/wp-content/uploads/2021/08/the-pros-and-cons-of-paper-to-do-lists.jpeg"},{title:"Comics",link:"https://iradmit.github.io/comicsApp/",text:"",image:"https://www.biysk-liceum.ru/odarennie-deti/proekty/bertova_komix/images/history6.jpg"},{title:"3D Parallax",link:"https://iradmit.github.io/3D-paralax/",text:"",image:"https://орфографика.рф/800/600/https/s3.amazonaws.com/pbblogassets/uploads/2017/06/10130141/Parallax.jpg"},{title:"Hogwarts",link:"https://iradmit.github.io/hogwarts/",text:"",image:"https://v1.popcornnews.ru/k2/news/1200/upload/AbQWau.jpg"}],boxesLength:null,boxWidth:800,gap:100}},computed:{width(){return this.boxesLength*this.boxWidth}},mounted(){window.innerWidth<880&&(this.boxWidth=500),window.innerWidth<550&&(this.boxWidth=350),window.innerWidth<650&&(this.gap=60);const t=this.$refs.main,e=this.$refs.wrp;this.boxesLength=e.querySelectorAll(".box").length;const i=this.width+this.gap*(this.boxesLength-1),s=i-window.innerWidth+120;o.Ay.to(e,{x:-s,ease:"none",scrollTrigger:{start:"top top",scrub:!0,pin:!0,trigger:t,end:this.width}})}},P=$,S=(0,p.A)(P,A,j,!1,null,"07711558",null),L=S.exports,q=function(){var t=this,e=t._self._c;return e("footer",{staticClass:"container"},[e("div",{staticClass:"footer-wrp"},[e("div",{staticClass:"time"},[t._v(t._s(t.$t("now")+" "+t.time))]),t._m(0)])])},M=[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"contacts"},[e("li",{staticClass:"contact"},[e("a",{attrs:{href:"https://github.com/IraDmit"}},[t._v("GitHub")])]),e("li",{staticClass:"contact"},[e("a",{attrs:{href:"https://t.me/nfllex"}},[t._v("Telegram")])])])}],I={data(){return{time:null}},methods:{editMinutes(t){return t<10?"0"+t:t}},created(){let t,e,i=new Date;t=i.getHours(),e=this.editMinutes(i.getMinutes()),this.time=t+":"+e,setInterval((()=>{t=i.getHours(),e=this.editMinutes(i.getMinutes()),this.time=t+":"+e}),6e4)}},D=I,W=(0,p.A)(D,q,M,!1,null,"32e2ff2f",null),O=W.exports,H=function(){var t=this,e=t._self._c;return e("header",{staticClass:"container"},[e("div",{staticClass:"header-wrp"},[e("a",{staticClass:"logo",attrs:{href:"#"}},[t._v("Ira Dmitrieva")]),e("ul",{staticClass:"header-menu"},[e("li",{staticClass:"links"},[e("a",{attrs:{href:"#about"},on:{click:function(e){return e.preventDefault(),t.scrollToEl("#about")}}},[t._v(t._s(t.$t("about")))])]),e("li",{staticClass:"links"},[e("a",{attrs:{href:"#projects"},on:{click:function(e){return e.preventDefault(),t.scrollToEl("#projects")}}},[t._v(t._s(t.$t("projects")))])]),e("li",{staticClass:"links"},[e("a",{attrs:{href:"#contact"},on:{click:function(e){return e.preventDefault(),t.scrollToEl("#contact")}}},[t._v(t._s(t.$t("contacts")))])]),e("li",{staticClass:"links locales"},t._l(t.$i18n.availableLocales,(function(i){return e("span",{key:i,staticClass:"locale",class:{active:t.$i18n.locale==i},on:{click:function(e){return t.changeLanguage(i)}}},[t._v(t._s(i.toLocaleUpperCase()))])})),0)])])])},E=[],F=i(8305),U={data(){return{lenis:new F.A}},methods:{scrollToEl(t){const e=document.querySelector(t);window.scrollTo({top:window.scrollY+e.getBoundingClientRect().y,behavior:"smooth"})},changeLanguage(t){this.$i18n.locale!=t&&(this.$i18n.locale=t)}}},N=U,V=(0,p.A)(N,H,E,!1,null,"508750f0",null),z=V.exports,B={components:{theHeader:z,TheMainScreen:T,TheAbout:f,TheProjects:L,TheContact:x,TheFooter:O},mounted(){const t=new F.A({duration:2,easing:t=>Math.min(1,1.001-Math.pow(2,-10*t))});function e(i){t.raf(i),requestAnimationFrame(e)}console.log(t),requestAnimationFrame(e)}},G=B,R=(0,p.A)(G,s,a,!1,null,null,null),J=R.exports},5893:function(t,e,i){var s=i(6848),a=i(7729),r=i(6178);s.Ay.use(r.Ay);const n=[{path:"/:lang(en|ru)?",name:"Home",component:()=>Promise.resolve().then(i.bind(i,7729))}],o=new r.Ay({mode:"history",base:"/portfolio/",routes:n});var l=o,c=i(3518);s.Ay.use(c.Ay);var u=new c.Ay.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),p=i(9522);s.Ay.use(p.A);var d=new p.A({locale:"ru",fallbackLocale:"en",messages:{ru:{about:"Обо мне",projects:"Проекты",contacts:"Контакты",city:"Живу в <br /> Тольятти, Россия",avaliable:"Доступна для <br /> фриланс проектов",experience:"ОПЫТ",skills:"НАВЫКИ",helloTxt:"Привет! Меня зовут Ирина Дмитриева, я фронтенд-разработчик из Тольятти, Россия. Мне нравится создавать адаптивные, производительные и визуально приятные веб-сайты.",expTxt:"Мой опыт разработки около года. У меня также есть около года опыта работы фрилансером.",skillsTxt:"Имею глубокие знания HTML, CSS и JavaScript. У меня есть опыт работы с Vue.js (2,3) и Nuxt.js (2). Я понимаю принципы отзывчивого и адаптивного дизайна. Разработка и поддержка приложений, интеграция API, модульное тестирование, адаптивный дизайн. Знание таких инструментов разработки, как Webpack, Babel и Git.",studyCase:"ПОДРОБНЕЕ",now:"Сейчас"},en:{about:"About",projects:"Projects",contacts:"Contacts",city:"Live in <br />Togliatti, Russia",avaliable:"Available for <br />freelance projects",experience:"Experience",skills:"Skills",helloTxt:"Hello! My name is Irina Dmitrieva, I'm a front-end developer from Togliatti, Russia. I like to create responsive and performant and visually pleasing websites.",expTxt:"My development experience is about a year. I also have about a year of freelance experience.",skillsTxt:"I have advanced knowledge of HTML, CSS and JavaScript. I have experience with Vue.js (2,3) and Nuxt.js (2). I understand the principles of responsive and adaptive design. Application development and support, API integration, unit testing, responsive design. Knowledge of development tools such as Webpack, Babel and Git.",studyCase:"STUDY CASE",now:"Now"}}});s.Ay.config.productionTip=!1,new s.Ay({router:l,store:u,i18n:d,render:t=>t(a["default"])}).$mount("#app")}},e={};function i(s){var a=e[s];if(void 0!==a)return a.exports;var r=e[s]={exports:{}};return t[s].call(r.exports,r,r.exports,i),r.exports}i.m=t,function(){var t=[];i.O=function(e,s,a,r){if(!s){var n=1/0;for(u=0;u<t.length;u++){s=t[u][0],a=t[u][1],r=t[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&r||n>=r)&&Object.keys(i.O).every((function(t){return i.O[t](s[l])}))?s.splice(l--,1):(o=!1,r<n&&(n=r));if(o){t.splice(u--,1);var c=a();void 0!==c&&(e=c)}}return e}r=r||0;for(var u=t.length;u>0&&t[u-1][2]>r;u--)t[u]=t[u-1];t[u]=[s,a,r]}}(),function(){i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,{a:e}),e}}(),function(){i.d=function(t,e){for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={524:0};i.O.j=function(e){return 0===t[e]};var e=function(e,s){var a,r,n=s[0],o=s[1],l=s[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(a in o)i.o(o,a)&&(i.m[a]=o[a]);if(l)var u=l(i)}for(e&&e(s);c<n.length;c++)r=n[c],i.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return i.O(u)},s=self["webpackChunkporfolfio"]=self["webpackChunkporfolfio"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=i.O(void 0,[504],(function(){return i(5893)}));s=i.O(s)})();
//# sourceMappingURL=app.e7b9e4f9.js.map