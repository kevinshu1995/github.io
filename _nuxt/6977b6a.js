(window.webpackJsonp=window.webpackJsonp||[]).push([[25,2,3,4,7,10,11,13,14,15,16,17],{400:function(t,e,n){"use strict";n.r(e);var o=n(101),r=(n(64),{props:{content:{type:String,required:!0},variant:{type:String,default:"bg-primaryYellow-500"},extraClasses:{type:Array,default:function(){return[]}},customClasses:{type:Array,default:function(){return[]}}},computed:{variants:function(){switch(this.variant){case"bg-primaryYellow-500":default:return["bg-primaryYellow-500","text-white"];case"bg-gray-400":return["bg-gray-400","text-white"]}},classString:function(){if(this.customClasses.length>0)return[].concat(Object(o.a)(this.customClasses),Object(o.a)(this.variants));return[].concat(["px-2","text-sm","tracking-wider"],Object(o.a)(this.extraClasses),Object(o.a)(this.variants))}}}),l=n(30),component=Object(l.a)(r,(function(){var t=this;return(0,t._self._c)("span",{class:t.classString},[t._v("\n\t"+t._s(t.content)+"\n")])}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,n){var content=n(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(105).default)("5c9444fa",content,!0,{sourceMap:!1})},402:function(t,e,n){"use strict";var o=n(17),r=n(9),l=n(7),c=n(132),h=n(23),d=n(18),f=n(266),m=n(57),y=n(103),x=n(265),v=n(6),j=n(82).f,w=n(46).f,_=n(22).f,M=n(403),C=n(267).trim,N="Number",I=r.Number,D=I.prototype,k=r.TypeError,S=l("".slice),O=l("".charCodeAt),A=function(t){var e=x(t,"number");return"bigint"==typeof e?e:T(e)},T=function(t){var e,n,o,r,l,c,h,code,d=x(t,"number");if(y(d))throw k("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=C(d),43===(e=O(d,0))||45===e){if(88===(n=O(d,2))||120===n)return NaN}else if(48===e){switch(O(d,1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+d}for(c=(l=S(d,2)).length,h=0;h<c;h++)if((code=O(l,h))<48||code>r)return NaN;return parseInt(l,o)}return+d};if(c(N,!I(" 0o1")||!I("0b1")||I("+0x1"))){for(var L,z=function(t){var e=arguments.length<1?0:I(A(t)),n=this;return m(D,n)&&v((function(){M(n)}))?f(Object(e),n,z):e},Y=o?j(I):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),E=0;Y.length>E;E++)d(I,L=Y[E])&&!d(z,L)&&_(z,L,w(I,L));z.prototype=D,D.constructor=z,h(r,N,z,{constructor:!0})}},403:function(t,e,n){var o=n(7);t.exports=o(1..valueOf)},404:function(t,e,n){t.exports=n.p+"img/error-image.5aad83b.svg"},405:function(t,e,n){"use strict";n(401)},406:function(t,e,n){var o=n(104)((function(i){return i[1]}));o.push([t.i,'.image-border[data-v-06ae6553]{position:relative}.image-border[data-v-06ae6553]:after{position:absolute;z-index:-1;height:50%;width:50%;--tw-bg-opacity:1;background-color:rgba(32, 80, 88, var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.group:hover .image-border[data-v-06ae6553]:after{--tw-bg-opacity:1;background-color:rgba(215, 151, 36, var(--tw-bg-opacity))}.image-border[data-v-06ae6553]:after{content:"";right:0px;bottom:0px}',""]),o.locals={},t.exports=o},407:function(t,e,n){"use strict";n.r(e);n(25);var o=n(101),r=(n(64),{name:"OutsiteLink",props:{name:{type:String,default:function(){return""}},rootClass:{type:Array,default:function(){return[]}}},computed:{dealedRootClass:function(){var t=["flex","space-x-2","group"];return 0===this.rootClass.length?[].concat(t,["text-base","sm:text-lg","text-gray-900","hover:text-primaryBlue-500"]):[].concat(t,Object(o.a)(this.rootClass))}}}),l=n(30),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("h6",{class:t.dealedRootClass},[e("span",[t._v("\n\t\t"+t._s(t.name)+"\n\t")]),t._v(" "),e("span",{staticClass:"relative hidden sm:block transition-all"},[e("span",{staticClass:"relative inline-block top-0 opacity-0 group-hover:opacity-100"},[e("ArrowUpRightCircleIcon",{staticClass:"animate-ping w-5"})],1),t._v(" "),e("ArrowUpRightCircleIcon",{staticClass:"absolute top-0 w-5 transition-all"})],1)])}),[],!1,null,null,null);e.default=component.exports},408:function(t,e,n){"use strict";n.r(e);n(64);var o=n(101),r=(n(402),n(102),{props:{href:{type:[String,Object],required:!0},target:{type:Boolean,default:!0},index:{type:[String,Number],required:!0},imgSrc:{type:String,required:!0},title:{type:String,default:""},content:{type:String,default:""},badges:{type:Array,default:function(){return[]}},imgFull:{type:Boolean,default:!1},imgHeight:{type:Number,default:function(){return 0}}},data:function(){return{img:""}},computed:{linkTarget:function(){return this.target?"_blank":""},indexDigit:function(){var t=Number(this.index);return isNaN(t)?"00":t<10?"0".concat(t):"".concat(t)},imgHeightStyle:function(){return 0!==this.imgHeight?["max-width: unset","height: ".concat(this.imgHeight,"px")]:[]},imgFullSize:function(){return this.imgFull?["w-full","h-full","object-cover"]:[]},imgStyle:function(){return Object(o.a)(this.imgHeightStyle).join(";")},imgClass:function(){return["filter","grayscale","group-hover:blur","brightness-105","transition-all"].concat(Object(o.a)(this.imgFullSize)).join(" ")}},mounted:function(){this.img=this.imgSrc},methods:{imageLoadError:function(){this.img=n(404)}}}),l=(n(405),n(30)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"inline-flex flex-col space-y-4 group"},[e("div",{staticClass:"p-2 image-border select-none"},[e("div",{staticClass:"relative"},[e("img",{class:t.imgClass,style:t.imgStyle,attrs:{src:t.img,alt:""},on:{error:t.imageLoadError}}),t._v(" "),e("span",{staticClass:"indexNumber absolute z-0 left-0 bottom-0 mx-1 my-1 font-black text-6xl italic leading-none text-primaryBlue-500 group-hover:text-primaryYellow-500 transition-all"},[t._v("\n\t\t\t\t"+t._s(t.indexDigit)+"\n\t\t\t")])]),t._v(" "),e("div",{staticClass:"hidden group-hover:block absolute z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"},[e("div",{staticClass:"inline-flex items-center space-x-2 px-3 bg-primaryBlue-500 text-white text-lg font-bold"},[e("span",{staticClass:"inline-block pb-1"},[t._v(" 去看看")]),t._v(" "),e("ArrowUpRightCircleIcon")],1)])]),t._v(" "),e("div",{staticClass:"space-y-1 pl-2"},[t.badges.length>0?e("div",{staticClass:"flex flex-wrap"},[t._l(t.badges,(function(t,n){return[e("Badge",{key:"gallery-".concat(t,"-").concat(n),attrs:{content:t,"extra-classes":["mr-2","mb-1"]}})]}))],2):t._e(),t._v(" "),t.title||t.content?e("div",{staticClass:"content max-w-xs text-primaryBlue-500 group-hover:text-primaryYellow-500 transition-all"},[t.title?e("h4",[t._v(t._s(t.title))]):t._e(),t._v(" "),t.content?e("p",[t._v(t._s(t.content))]):t._e()]):t._e()])])}),[],!1,null,"06ae6553",null);e.default=component.exports;installComponents(component,{Badge:n(400).default})},409:function(t,e,n){"use strict";n.r(e);var o={props:{design:{type:Array,required:!0}},data:function(){return{swiperOptions:{slidesPerView:1,spaceBetween:20,autoplay:!0,breakpoints:{768:{slidesPerView:2,spaceBetween:30},1200:{slidesPerView:3,spaceBetween:50}}}}}},r=n(30),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("client-only",[e("swiper",{staticClass:"swiper-custom-active",staticStyle:{overflow:"visible"},attrs:{options:t.swiperOptions}},t._l(t.design,(function(t,n){return e("swiper-slide",{key:"design-".concat(n),staticStyle:{width:"auto"}},[e("nuxt-link",{attrs:{to:t.href}},[e("PageIndexSlide",{attrs:{href:t.href,title:t.content.title,content:t.content.subtitle,index:n+1,"img-src":t.imgSrc,badges:t.tools,"img-height":250,"img-full":!0}})],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageIndexSlide:n(408).default})},413:function(t,e,n){t.exports=n.p+"img/banner_2.8638863.jpg"},414:function(t,e,n){t.exports=n.p+"img/czjh-poster-combine.6a10d5e.jpg"},415:function(t,e,n){t.exports=n.p+"img/cz-poster.84b49e4.jpg"},416:function(t,e,n){t.exports=n.p+"img/cz-poster-square.e19e5c8.jpg"},417:function(t,e,n){t.exports=n.p+"img/swing_2.1f5b1d4.jpg"},418:function(t,e,n){t.exports=n.p+"img/swing_3.f165df2.jpg"},419:function(t,e,n){t.exports=n.p+"img/me_2.2d38070.png"},420:function(t,e,n){t.exports=n.p+"img/me-2.3c7e62c.jpg"},421:function(t,e,n){t.exports=n.p+"img/photo-01.20b2cec.jpg"},422:function(t,e,n){t.exports=n.p+"img/photo-02.f8662f8.jpg"},423:function(t,e,n){t.exports=n.p+"img/photo-03.df351b1.jpg"},424:function(t,e,n){t.exports=n.p+"img/photo-04.b426f4f.jpg"},425:function(t,e,n){t.exports=n.p+"img/photo-05.f70da36.jpg"},426:function(t,e,n){t.exports=n.p+"img/photo-06.7cd9fc3.jpg"},427:function(t,e,n){t.exports=n.p+"img/photo-07.6ad57e4.jpg"},428:function(t,e,n){t.exports=n.p+"img/photo-08.9489c0c.jpg"},429:function(t,e,n){t.exports=n.p+"img/photo-09.5339ca1.jpg"},430:function(t,e,n){t.exports=n.p+"img/photo-10.318aa67.jpg"},431:function(t,e,n){t.exports=n.p+"img/photo-11.326f00f.jpg"},432:function(t,e,n){t.exports=n.p+"img/photo-12.537095c.jpg"},433:function(t,e,n){t.exports=n.p+"img/photo-13.da8b021.jpg"},434:function(t,e,n){t.exports=n.p+"img/photo-14.6b0fde1.jpg"},435:function(t,e,n){t.exports=n.p+"img/photo-15.d736490.jpg"},436:function(t,e,n){t.exports=n.p+"img/photo-16.f999831.jpg"},437:function(t,e,n){t.exports=n.p+"img/photo-17.979ed9c.jpg"},438:function(t,e,n){t.exports=n.p+"img/photo-18.311e4bb.jpg"},439:function(t,e,n){t.exports=n.p+"img/photo-19.abb8dde.jpg"},440:function(t,e,n){t.exports=n.p+"img/photo-20.4884c82.jpg"},441:function(t,e,n){t.exports=n.p+"img/photo-21.37a5508.jpg"},442:function(t,e,n){t.exports=n.p+"img/photo-22.c5dd444.jpg"},443:function(t,e,n){t.exports=n.p+"img/photo-23.df2bbba.jpg"},444:function(t,e,n){t.exports=n.p+"img/photo-24.4cec65e.jpg"},445:function(t,e,n){t.exports=n.p+"img/photo-25.0b597e3.jpg"},446:function(t,e,n){t.exports=n.p+"img/photo-26.eeebca1.jpg"},447:function(t,e,n){t.exports=n.p+"img/photo-27.6a44e1a.jpg"},448:function(t,e,n){var map={"./design/banner_1.jpg":271,"./design/banner_2.jpg":413,"./design/cz-poster-final_facebookCover.jpg":270,"./design/cz-poster-square.jpg":416,"./design/cz-poster.jpg":415,"./design/czjh-poster-combine.jpg":414,"./design/firefold.jpg":449,"./design/firefold_1.jpg":450,"./design/personalWebsite.jpg":268,"./design/poster_1.jpg":272,"./design/poster_2.jpg":273,"./design/poster_3.jpg":451,"./design/poster_4.jpg":274,"./design/poster_5.jpg":452,"./design/swing_1.jpg":269,"./design/swing_2.jpg":417,"./design/swing_3.jpg":418,"./error-image.svg":404,"./icons/github-brands.svg":453,"./icons/paper-plane-solid.svg":454,"./icons/rss-solid.svg":455,"./icons/share-solid.svg":456,"./me-2.jpg":420,"./me.png":457,"./me_2.png":419,"./photography/photo-01.jpg":421,"./photography/photo-02.jpg":422,"./photography/photo-03.jpg":423,"./photography/photo-04.jpg":424,"./photography/photo-05.jpg":425,"./photography/photo-06.jpg":426,"./photography/photo-07.jpg":427,"./photography/photo-08.jpg":428,"./photography/photo-09.jpg":429,"./photography/photo-10.jpg":430,"./photography/photo-11.jpg":431,"./photography/photo-12.jpg":432,"./photography/photo-13.jpg":433,"./photography/photo-14.jpg":434,"./photography/photo-15.jpg":435,"./photography/photo-16.jpg":436,"./photography/photo-17.jpg":437,"./photography/photo-18.jpg":438,"./photography/photo-19.jpg":439,"./photography/photo-20.jpg":440,"./photography/photo-21.jpg":441,"./photography/photo-22.jpg":442,"./photography/photo-23.jpg":443,"./photography/photo-24.jpg":444,"./photography/photo-25.jpg":445,"./photography/photo-26.jpg":446,"./photography/photo-27.jpg":447,"./websiteScreenshots/blog.png":458,"./websiteScreenshots/jsDungeon.png":459,"./websiteScreenshots/maskMap.png":460,"./websiteScreenshots/reactTailwind-SignUpForm.png":461};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=448},449:function(t,e,n){t.exports=n.p+"img/firefold.9caefac.jpg"},450:function(t,e,n){t.exports=n.p+"img/firefold_1.76e9de1.jpg"},451:function(t,e,n){t.exports=n.p+"img/poster_3.1d82f55.jpg"},452:function(t,e,n){t.exports=n.p+"img/poster_5.85daf8c.jpg"},453:function(t,e,n){t.exports=n.p+"img/github-brands.e2f0732.svg"},454:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJwYXBlci1wbGFuZSIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXBhcGVyLXBsYW5lIGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNDc2IDMuMkwxMi41IDI3MC42Yy0xOC4xIDEwLjQtMTUuOCAzNS42IDIuMiA0My4yTDEyMSAzNTguNGwyODcuMy0yNTMuMmM1LjUtNC45IDEzLjMgMi42IDguNiA4LjNMMTc2IDQwN3Y4MC41YzAgMjMuNiAyOC41IDMyLjkgNDIuNSAxNS44TDI4MiA0MjZsMTI0LjYgNTIuMmMxNC4yIDYgMzAuNC0yLjkgMzMtMTguMmw3Mi00MzJDNTE1IDcuOCA0OTMuMy02LjggNDc2IDMuMnoiPjwvcGF0aD48L3N2Zz4="},455:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJyc3MiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1yc3MgZmEtdy0xNCIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik0xMjguMDgxIDQxNS45NTljMCAzNS4zNjktMjguNjcyIDY0LjA0MS02NC4wNDEgNjQuMDQxUzAgNDUxLjMyOCAwIDQxNS45NTlzMjguNjcyLTY0LjA0MSA2NC4wNDEtNjQuMDQxIDY0LjA0IDI4LjY3MyA2NC4wNCA2NC4wNDF6bTE3NS42NiA0Ny4yNWMtOC4zNTQtMTU0LjYtMTMyLjE4NS0yNzguNTg3LTI4Ni45NS0yODYuOTVDNy42NTYgMTc1Ljc2NSAwIDE4My4xMDUgMCAxOTIuMjUzdjQ4LjA2OWMwIDguNDE1IDYuNDkgMTUuNDcyIDE0Ljg4NyAxNi4wMTggMTExLjgzMiA3LjI4NCAyMDEuNDczIDk2LjcwMiAyMDguNzcyIDIwOC43NzIuNTQ3IDguMzk3IDcuNjA0IDE0Ljg4NyAxNi4wMTggMTQuODg3aDQ4LjA2OWM5LjE0OS4wMDEgMTYuNDg5LTcuNjU1IDE1Ljk5NS0xNi43OXptMTQ0LjI0OS4yODhDNDM5LjU5NiAyMjkuNjc3IDI1MS40NjUgNDAuNDQ1IDE2LjUwMyAzMi4wMSA3LjQ3MyAzMS42ODYgMCAzOC45ODEgMCA0OC4wMTZ2NDguMDY4YzAgOC42MjUgNi44MzUgMTUuNjQ1IDE1LjQ1MyAxNS45OTkgMTkxLjE3OSA3LjgzOSAzNDQuNjI3IDE2MS4zMTYgMzUyLjQ2NSAzNTIuNDY1LjM1MyA4LjYxOCA3LjM3MyAxNS40NTMgMTUuOTk5IDE1LjQ1M2g0OC4wNjhjOS4wMzQtLjAwMSAxNi4zMjktNy40NzQgMTYuMDA1LTE2LjUwNHoiPjwvcGF0aD48L3N2Zz4="},456:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJzaGFyZSIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLXNoYXJlIGZhLXctMTYiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNNTAzLjY5MSAxODkuODM2TDMyNy42ODcgMzcuODUxQzMxMi4yODEgMjQuNTQ2IDI4OCAzNS4zNDcgMjg4IDU2LjAxNXY4MC4wNTNDMTI3LjM3MSAxMzcuOTA3IDAgMTcwLjEgMCAzMjIuMzI2YzAgNjEuNDQxIDM5LjU4MSAxMjIuMzA5IDgzLjMzMyAxNTQuMTMyIDEzLjY1MyA5LjkzMSAzMy4xMTEtMi41MzMgMjguMDc3LTE4LjYzMUM2Ni4wNjYgMzEyLjgxNCAxMzIuOTE3IDI3NC4zMTYgMjg4IDI3Mi4wODVWMzYwYzAgMjAuNyAyNC4zIDMxLjQ1MyAzOS42ODcgMTguMTY0bDE3Ni4wMDQtMTUyYzExLjA3MS05LjU2MiAxMS4wODYtMjYuNzUzIDAtMzYuMzI4eiI+PC9wYXRoPjwvc3ZnPg=="},457:function(t,e,n){t.exports=n.p+"img/me.943e2d7.png"},458:function(t,e,n){t.exports=n.p+"img/blog.4fab402.png"},459:function(t,e,n){t.exports=n.p+"img/jsDungeon.c4e53b5.png"},460:function(t,e,n){t.exports=n.p+"img/maskMap.b0041a6.png"},461:function(t,e,n){t.exports=n.p+"img/reactTailwind-SignUpForm.8474074.png"},462:function(t,e,n){"use strict";n.r(e);var o={props:{titleEn:{type:String,required:!0},titleZh:{type:String,required:!0}}},r=n(30),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"space-y-4"},[e("div",{staticClass:"flex flex-col sm:flex-row sm:items-end sm:space-x-3 text-primaryBlue-500"},[e("h3",{staticClass:"font-black"},[t._v(t._s(t.titleEn))]),t._v(" "),e("p",{staticClass:"font-bold"},[t._v(t._s(t.titleZh))])]),t._v(" "),e("div",{staticClass:"flex flex-col space-y-4"},[t._t("default")],2)])}),[],!1,null,null,null);e.default=component.exports},463:function(t,e,n){"use strict";n.r(e);n(275),n(31),n(47),n(37),n(49),n(32),n(50);var o=n(20),r=(n(33),n(65),n(14),n(41),n(63));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var c={name:"BlogPosts",data:function(){return{swiperOptions:{direction:"vertical",slidesPerView:"auto",spaceBetween:10,autoplay:!0,pagination:{clickable:!0}}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(r.b)({blogPosts:"data/blog/blogPosts_noAbout"})),mounted:function(){this.$store.dispatch("data/blog/getPosts")},methods:{getFullTime:function(time){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ddd, DD MMM YYYY";return this.$dayjs(time).format(t)},getTextContent:function(t){return t.replace(/<\/?[^>]+>/gi," ")},filterNotRepeat:function(data,t){var e=data.reduce((function(e,n){var o=n[t];return e[o]||(e[o]=o),e}),{});return Object.keys(e)}}},h=c,d=n(30),component=Object(d.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative custom-hoverGroup"},[e("client-only",[t.blogPosts.length>0?[e("div",{staticClass:"absolute left-1/2 bottom-10 z-20 transform -translate-x-1/2 custom-hoverGroup:hidden"},[e("div",{staticClass:"bg-white bg-opacity-90 shadow-lg rounded-full w-10 h-10 flex items-center justify-center animate-bounce"},[e("chevronsDownIcon",{staticClass:"text-primaryYellow-500 w-8 h-8"})],1)]),t._v(" "),e("swiper",{staticClass:"divide-y divide-gray-100 -my-3 max-h-screen-2/3 sm:max-h-screen-1/2 overflow-y-auto z-10",attrs:{options:t.swiperOptions}},[e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),t._v(" "),t._l(t.blogPosts,(function(n,o){return e("swiper-slide",{key:"blogPost-".concat(o)},[e("a",{staticClass:"card group hover:bg-gray-50 hover:px-2 hover:shadow inline-block py-3 w-full relative transition-all overflow-hidden",attrs:{href:n.link._text,target:"_blank"}},[e("div",{staticClass:"flex flex-col space-y-1 relative z-0"},[e("div",{staticClass:"header"},[e("div",{staticClass:"flex items-center space-x-2 text-base"},[0===o?e("Badge",{attrs:{content:"NEW"}}):t._e(),t._v(" "),e("p",{staticClass:"text-gray-400 text-sm"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(t.getFullTime(n.pubDate._text))+"\n\t\t\t\t\t\t\t\t\t")])],1)]),t._v(" "),e("div",{staticClass:"body flex flex-col"},[e("h4",{staticClass:"font-bold truncate text-lg text-gray-900 group-hover:text-primaryBlue"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(n.title._text)+"\n\t\t\t\t\t\t\t\t")]),t._v(" "),e("p",{staticClass:"truncate text-gray-900"},[t._v("\n\t\t\t\t\t\t\t\t\t"+t._s(t.getTextContent(n.description._text))+"\n\t\t\t\t\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"footer flex space-x-2 text-sm"},t._l(t.filterNotRepeat(n.category,"_text"),(function(n,o){return e("span",{key:"blogCategory-".concat(o),staticClass:"text-gray-400"},[t._v("\n\t\t\t\t\t\t\t\t\t#"+t._s(n)+"\n\t\t\t\t\t\t\t\t")])})),0)]),t._v(" "),e("span",{staticClass:"group-hover:translate-x-0 absolute z-10 right-4 bottom-4 bg-primaryBlue-dark-500 text-white px-2 py-1 transform translate-x-96 transition-all"},[t._v("\n\t\t\t\t\t\t\t前往閱讀\n\t\t\t\t\t\t")])])])})),t._v(" "),e("p",{staticClass:"text-center py-5 font-bold text-sm text-primaryBlue"},[t._v("\n\t\t\t\t\t文章列表到尾端了，我會努力的 QQ\n\t\t\t\t")])],2)]:[e("p",{staticClass:"font-bold text-lg text-red-700"},[t._v("\n\t\t\t\t抱歉，取得文章列表時發生了問題。\n\t\t\t")])]],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Badge:n(400).default})},464:function(t,e,n){"use strict";n.r(e);var o={name:"TextsList",props:{textAry:{type:Array,required:!0}}},r=n(30),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",[t._l(t.textAry,(function(text,n){return[e("span",{key:"skill-f2e-".concat(n)},[0!==n?e("span",[t._v(" 、 ")]):t._e(),t._v(" "),e("span",{staticClass:"whitespace-nowrap"},[t._v("\n\t\t\t\t"+t._s(text)+"\n\t\t\t")])])]}))],2)}),[],!1,null,null,null);e.default=component.exports},465:function(t,e,n){"use strict";n.r(e);n(31),n(47);var o={props:{highlight:{type:Array,required:!0}}},r=n(30),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list-connect hover-animate space-y-4"},t._l(t.highlight,(function(n,o){return e("li",{key:"skill-".concat(o),staticClass:"whitespace-nowrap"},[e("a",{staticClass:"group inline-flex flex-col space-y-1 whitespace-normal text-current transition-all",attrs:{href:n.href,target:"_blank"}},[e("div",{staticClass:"text-left space-x-4"},[e("span",{staticClass:"text-gray-700"},[t._v(" "+t._s(n.time)+" ")]),t._v(" "),n.status?e("Badge",{attrs:{content:n.status.description,variant:n.status.variant,"custom-classes":["px-2.5","font-normal","text-sm","tracking-wider","rounded-full"]}}):t._e()],1),t._v(" "),e("OutsiteLink",{attrs:{name:n.title}})],1)])})),0)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Badge:n(400).default,OutsiteLink:n(407).default})},466:function(t,e,n){"use strict";n.r(e);n(31),n(47);var o={name:"WorkExperience",props:{contents:{type:Array,required:!0}}},r=n(30),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("ul",{staticClass:"list-connect-noDot space-y-7 lg:space-y-6"},t._l(t.contents,(function(content,n){return e("li",{key:"experience-".concat(n),staticClass:"grid grid-cols-12 items-start relative group"},[e("div",{staticClass:"dot group relative col-start-1 col-span-1 row-start-1 row-span-2"},[e("div",{staticClass:"relative z-20 w-6 h-6 bg-white border-4 rounded-full transition-all",class:0===n?"border-primaryYellow-500":"border-gray-400 group-hover:border-primaryYellow-300"}),t._v(" "),e("div",{staticClass:"absolute z-10 top-0 left-0 w-6 h-6 bg-primaryYellow-600 rounded-full transition-all hidden group-hover:block group-hover:animate-ping"})]),t._v(" "),e("p",{staticClass:"whitespace-nowrap col-start-3 md:col-start-2 col-span-10 md:col-span-2 row-start-1 font-medium mb-1 lg:mb-0",class:0!==n?"text-gray-400 group-hover:text-gray-500 transition-all":"text-gray-400"},[t._v("\n\t\t\t"+t._s(content.time.start)+" -\n\t\t\t"+t._s(content.time.end)+"\n\t\t")]),t._v(" "),e("div",{staticClass:"flex flex-col col-start-3 md:col-start-2 lg:col-start-4 col-end-13 row-start-2 lg:row-start-1",class:0!==n?"text-gray-400 group-hover:text-dark transition-all":""},[e("h4",{staticClass:"whitespace-nowrap"},[e("span",{staticClass:"text-base sm:text-lg"},[t._v("\n\t\t\t\t\t"+t._s(content.jobTitle)+"\n\t\t\t\t")]),t._v(" "),e("span",{staticClass:"text-base"},[t._v("\n\t\t\t\t\t"+t._s(content.company)+"\n\t\t\t\t")])]),t._v(" "),t._l(content.description,(function(text,n){return["string"==typeof text?e("p",{key:"experience-paraphrase-".concat(n)},[t._v("\n\t\t\t\t\t"+t._s(text)+"\n\t\t\t\t")]):t._e(),t._v(" "),Array.isArray(text)?e("ol",{key:"experience-paraphrase-".concat(n),staticClass:"list-decimal pl-4"},t._l(text,(function(n,o){return e("li",{key:"experience-list-".concat(o)},[t._v("\n\t\t\t\t\t\t"+t._s(n)+"\n\t\t\t\t\t")])})),0):t._e()]}))],2)])})),0)}),[],!1,null,null,null);e.default=component.exports},467:function(t,e,n){"use strict";n.r(e);var o={props:{titleEn:{type:String,required:!0},titleZh:{type:String,required:!0}}},r=n(30),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col text-primaryBlue-500 text-shadow-title pt-10 sm:pt-36 md:pt-24 mt-16"},[e("h2",{staticClass:"italic font-black text-5xl sm:text-8xl md:text-10xl lg:text-13xl leading-none"},[t._v("\n\t\t"+t._s(t.titleEn)+"\n\t")]),t._v(" "),e("h3",{staticClass:"ml-6 text-4xl"},[t._v(t._s(t.titleZh))])])}),[],!1,null,null,null);e.default=component.exports},468:function(t,e,n){"use strict";n.r(e);n(64),n(31),n(47),n(25);var o={props:{web:{type:Object,required:!0}},data:function(){return{swiperOptions:{slidesPerView:1,spaceBetween:20,autoplay:!0,breakpoints:{768:{slidesPerView:2,spaceBetween:30},1200:{slidesPerView:3,spaceBetween:50}}}}},methods:{getImageUrl:function(t){return n(448)("./".concat(t))}}},r=n(30),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("client-only",[e("swiper",{staticClass:"swiper-custom-active",staticStyle:{overflow:"visible"},attrs:{options:t.swiperOptions}},t._l(t.web.pages,(function(n,o){return e("swiper-slide",{key:"web-".concat(o),staticClass:"space-y-2"},[e("a",{attrs:{href:n.url,target:"_blank"}},[e("PageIndexSlide",{key:"web-".concat(o),attrs:{"img-src":t.getImageUrl("".concat(t.web.imageDetails.folderName,"/").concat(n.nickname).concat(t.web.imageDetails.imageFileExtension)),href:n.url,index:o+1,title:n.title,content:n.description}})],1),t._v(" "),e("div",{staticClass:"flex text-sm space-x-2"},t._l(n.links,(function(t,n){return e("a",{key:"web-outSite-".concat(n),staticClass:"px-2 flex items-center space-x-1 hover:text-yellow-700",attrs:{target:"_blank",href:t.url}},[e("OutsiteLink",{attrs:{name:t.name,"root-class":["text-base","underline","text-yellow-500","hover:text-yellow-600"]}})],1)})),0)])})),1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageIndexSlide:n(408).default,OutsiteLink:n(407).default})},469:function(t,e,n){var map={"./photo-01.jpg":421,"./photo-02.jpg":422,"./photo-03.jpg":423,"./photo-04.jpg":424,"./photo-05.jpg":425,"./photo-06.jpg":426,"./photo-07.jpg":427,"./photo-08.jpg":428,"./photo-09.jpg":429,"./photo-10.jpg":430,"./photo-11.jpg":431,"./photo-12.jpg":432,"./photo-13.jpg":433,"./photo-14.jpg":434,"./photo-15.jpg":435,"./photo-16.jpg":436,"./photo-17.jpg":437,"./photo-18.jpg":438,"./photo-19.jpg":439,"./photo-20.jpg":440,"./photo-21.jpg":441,"./photo-22.jpg":442,"./photo-23.jpg":443,"./photo-24.jpg":444,"./photo-25.jpg":445,"./photo-26.jpg":446,"./photo-27.jpg":447};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=469},470:function(t,e){t.exports={imageBaseUrl:"./static/images/websiteScreenshots",imageDetails:{imageBasePath:"./static/images",folderName:"websiteScreenshots",imageFileExtension:".png"},pages:[{nickname:"blog",url:"https://kevinshu1995.github.io/blog/",title:"部落格 - 前端路上",description:"紀錄與程式、前端相關的筆記，及生活故事的簡單紀錄。"},{nickname:"jsDungeon",url:"https://kevinshu1995.github.io/hex_jsDungeon/",title:"作品集散地 - JS地下城",description:"集合幾個 JavaScript 的小專案，未來將整合所有程式相關作品。"},{nickname:"maskMap",url:"https://kevinshu1995.github.io/maskmap/",title:"口罩地圖",description:"因應 2020 年新冠肺炎&剛學 JS，所以寫了這個網站當作練習。"},{nickname:"reactTailwind-SignUpForm",url:"https://react-tailwind-sign-up-form.vercel.app/",title:"React x Tailwind - Sign up form",description:"My first web application developed with React.js. Submitting on Fronted Mentor.",links:[{name:"Fronted Mentor",url:"https://www.frontendmentor.io/solutions/react-x-tailwind-sign-up-form-jMzVVUSKr"},{name:"Source code",url:"https://github.com/kevinshu1995/react-tailwind-sign-up-form"}]}]}},490:function(t,e,n){"use strict";n.r(e);var o=n(101),r=(n(14),n(32),n(58),n(64),n(470)),l={name:"Index",asyncData:function(t){var e=t.store,n=function(t,n){return e.getters["links/getLink"](t,n)};return{about:{socialLinkClass:["inline-block","no-underline","text-lg","h-full","flex","items-center","p-2","transition-all"],socialLinks:[{href:n("mail","href"),title:n("mail","socialName"),target:!0,linkType:"icon",icon:n("mail","icon"),linkClassAry:["text-primaryYellow-500","hover:text-primaryYellow-500","w-5","h-5","md:w-6","md:h-6"]},{href:n("github","href"),title:n("github","socialName"),target:!0,linkType:"icon",icon:n("github","icon"),linkClassAry:["text-primaryYellow-500","hover:text-primaryYellow-500","w-5","h-5","md:w-6","md:h-6"]},{href:n("linkedin","href"),title:n("linkedin","socialName"),target:!0,linkType:"icon",icon:n("linkedin","icon"),linkClassAry:["text-primaryYellow-500","hover:text-primaryYellow-500","w-5","h-5","md:w-6","md:h-6"]}]},skills:e.state.me.skills,highlight:e.state.me.highlight,experiences:e.state.me.experiences,webGallery:{imageDetails:r.imageDetails,pages:r.pages},design:e.state.me.design,photography:e.state.me.photography}},data:function(){return{stickyOptions:{topSpacing:100},about:{socialLinkClass:["inline-block","no-underline","text-lg","h-full","flex","items-center","p-2","transition-all"],socialLinks:[]},skills:[],highlight:[],experiences:[],webGallery:[],design:[],photography:{},gsap:{}}},computed:{socialLinks:function(){return this.$store.state.links.socialLinks},swiperInstance_Design:function(){return this.$refs.swiperDesign.$swiper}},mounted:function(){this.gsap=Object(o.a)(this.scrollTrigger())},beforeDestroy:function(){this.gsap.forEach((function(t){return t.kill()}))},methods:{scrollTrigger:function(){var t=this,e={titles:[this.$refs.webTitle,this.$refs.designTitle,this.$refs.photographyTitle],contents:[this.$refs.webContent,this.$refs.designContent,this.$refs["photography-image"]]},n=e.titles.map((function(title){return t.$gsap.from(title,{scrollTrigger:{once:!0,trigger:title,start:"top 95%",onEnter:function(){title.classList.add("animate-fadeLeftIn")},scrub:!0}})})),r=e.contents.map((function(content){return t.$gsap.from(content,{scrollTrigger:{once:!0,trigger:content,start:"top 95%",onEnter:function(){content.classList.add("animate-fadeDownIn")},scrub:!0}})}));return[].concat(Object(o.a)(n),Object(o.a)(r))}}},c=n(30),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"space-y-0 index",attrs:{"data-v-sticky-container":""}},[e("pageIndexLanding"),t._v(" "),e("div",{staticClass:"container pt-24",attrs:{id:"about"}},[e("div",{staticClass:"row space-y-20 sm:space-y-0"},[e("div",{staticClass:"col hidden sm:block sm:w-3/12 pl-8 pr-0 lg:px-8"},[e("div",{directives:[{name:"sticky",rawName:"v-sticky",value:t.stickyOptions,expression:"stickyOptions"}]},[e("img",{attrs:{src:n(420),alt:""}})])]),t._v(" "),e("div",{staticClass:"col w-full sm:w-9/12 space-y-20"},[e("div",{staticClass:"row space-y-20 lg:space-y-0"},[e("div",{staticClass:"col w-full lg:w-6/12"},[e("Card",{attrs:{"title-zh":"關於我","title-en":"About me"}},[e("p",[t._v("\n\t\t\t\t\t\t\t\t設計系背景，對於美感與使用者體驗有些涉獵。目前著重於研究前端領域，曾參與品牌形象官網、網站後台建置、教師課程管理平台、企業管理平台、計分程式...等的專案開發與頁面設計。\n\t\t\t\t\t\t\t")]),t._v(" "),e("p",[t._v("\n\t\t\t\t\t\t\t\t主要使用 Vue.js 開發，負責 API\n\t\t\t\t\t\t\t\t串接、畫面動態效果、主題色彩配置、設計稿切版...等。\n\t\t\t\t\t\t\t")]),t._v(" "),e("p",[t._v("\n\t\t\t\t\t\t\t\tCSS 框架使用過 Bootstrap\n\t\t\t\t\t\t\t\t4、Bulma，目前最喜歡使用 Tailwind CSS\n\t\t\t\t\t\t\t\t進行開發。\n\t\t\t\t\t\t\t")]),t._v(" "),t._l(t.about.socialLinks,(function(link,n){return[e("a",{key:"about-socialLink-".concat(n),staticClass:"flex items-center space-x-3 group hover:text-primaryBlue-500 transition-all",attrs:{href:link.href,target:"_blank"}},[e("iconWrap",{attrs:{icon:link.icon,"icon-class-ary":["inline-block","w-6","h-6"]}}),t._v(" "),e("span",{staticClass:"text-dark group-hover:text-primaryBlue-500"},[t._v(t._s(link.title))])],1)]}))],2)],1),t._v(" "),e("div",{staticClass:"col w-full lg:w-6/12"},[e("Card",{attrs:{"title-zh":"部落格","title-en":"Blog"}},[e("PageIndexBlogPosts")],1)],1)]),t._v(" "),e("div",{staticClass:"row space-y-20 lg:space-y-0"},[e("div",{staticClass:"col w-full lg:w-6/12"},[e("Card",{attrs:{"title-zh":"技能","title-en":"Skills"}},[e("ul",{staticClass:"list-connect hover-animate space-y-4"},t._l(t.skills,(function(n,o){return e("li",{key:"skill-".concat(o),staticClass:"whitespace-nowrap"},[e("div",{staticClass:"inline-flex flex-col whitespace-normal"},[e("h4",{staticClass:"text-lg font-medium"},[t._v("\n\t\t\t\t\t\t\t\t\t\t\t"+t._s(n.title)+"\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e("TextsList",{staticClass:"text-base",attrs:{"text-ary":n.list}})],1)])})),0)])],1),t._v(" "),e("div",{staticClass:"col w-full lg:w-6/12"},[e("Card",{attrs:{"title-zh":"特別經歷","title-en":"Highlight"}},[e("PageIndexHighLight",{attrs:{highlight:t.highlight}})],1)],1)]),t._v(" "),e("div",{staticClass:"row space-y-20 lg:space-y-0"},[e("div",{staticClass:"col w-full"},[e("Card",{attrs:{"title-zh":"工作經歷","title-en":"Work Experience"}},[e("PageIndexWorkExperience",{attrs:{contents:t.experiences}})],1)],1)])])])]),t._v(" "),e("div",{staticClass:"container",attrs:{id:"web"}},[e("div",{staticClass:"row space-y-14"},[e("div",{staticClass:"col w-full"},[e("div",{ref:"webTitle"},[e("HugeTitle",{attrs:{"title-zh":"網頁作品","title-en":"Web"}})],1)]),t._v(" "),e("div",{staticClass:"col w-full"},[e("div",{ref:"webContent"},[e("PageIndexSlideWeb",{attrs:{web:t.webGallery}})],1)])])]),t._v(" "),e("div",{staticClass:"container",attrs:{id:"design"}},[e("div",{staticClass:"row space-y-14"},[e("div",{staticClass:"col w-full"},[e("div",{ref:"designTitle"},[e("HugeTitle",{attrs:{"title-zh":"設計","title-en":"Design"}})],1)]),t._v(" "),e("div",{staticClass:"col w-full"},[e("div",{ref:"designContent"},[e("PageIndexSlideDesign",{attrs:{design:t.design}})],1)])])]),t._v(" "),e("div",{staticClass:"relative overflow-hidden space-y-20",attrs:{id:"photography"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col w-full",attrs:{"data-scrollTrigger":""}},[e("div",{ref:"photographyTitle"},[e("HugeTitle",{attrs:{"title-zh":"攝影","title-en":"Photography"}})],1)])])]),t._v(" "),e("div",{ref:"photography-image",staticClass:"grid grid-cols-3 md:grid-cols-3 lg:grid-cols-5 grid-row-4"},t._l(t.photography.photos,(function(t,o){return e("div",{key:"photo-".concat(o),staticClass:"h-60 filter grayscale hover:grayscale-0 transition-all"},[e("img",{staticClass:"w-full h-full object-cover",attrs:{src:n(469)("./".concat(t.fileName)),alt:"photography by Kevin Hsu"}})])})),0)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Card:n(462).default,PageIndexBlogPosts:n(463).default,TextsList:n(464).default,PageIndexHighLight:n(465).default,PageIndexWorkExperience:n(466).default,HugeTitle:n(467).default,PageIndexSlideWeb:n(468).default,PageIndexSlideDesign:n(409).default})}}]);