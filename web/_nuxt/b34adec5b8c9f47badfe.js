(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{199:function(t,e,n){"use strict";n(42);var l={name:"Icon",props:{name:{type:String,required:!0}},computed:{className:function(){return"icon icon-".concat(this.name)}}},c=n(8),component=Object(c.a)(l,(function(){var t=this.$createElement;return(this._self._c||t)("i",{class:this.className})}),[],!1,null,null,null);e.a=component.exports},200:function(t,e,n){"use strict";n(31),n(19),n(14),n(11),n(24);var l=n(2),c=(n(53),n(71),n(20)),r=n(0),o=n(7);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(source,!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"Header",components:{Icon:n(199).a},props:{type:{type:String,default:"",validator:function(t){return!t.length||["static"].includes(t)}},date:{type:String,default:""},hasLogo:{type:Boolean,default:!0}},data:function(){return{isFixed:!1,minHeight:null}},computed:h({},Object(c.c)({tabs:"".concat(r.e.COMMON,"/").concat(r.d.VIEWS),words:"".concat(r.e.COMMON,"/").concat(r.d.EVENT_TYPES)}),{classes:function(){return this.type&&"header_".concat(this.type)},isStatic:function(){return"static"===this.type},hasDate:function(){return this.date&&this.date.length}}),mounted:function(){var t=this;Object(o.a)((function(){return!t.isStatic&&window.addEventListener("scroll",t.handleScroll)}))},destroyed:function(){var t=this;Object(o.a)((function(){return!t.isStatic&&window.removeEventListener("scroll",t.handleScroll)}))},methods:h({},Object(c.b)({handleChangeTheme:"".concat(r.e.COMMON,"/").concat(r.a.CHANGE_THEME),changeView:"".concat(r.e.COMMON,"/").concat(r.a.CHANGE_VIEW),resetFilters:"".concat(r.e.COMMON,"/").concat(r.a.RESET_FILTERS),requestItems:"".concat(r.e.COMMON,"/").concat(r.a.REQUEST_EVENTS)}),{handleScroll:function(){var t=this.$refs,e=t.inner;t.main.getBoundingClientRect().top>0?(this.isFixed=!1,this.minHeight=null,this.$emit("fixed",!1)):(this.isFixed=!0,this.minHeight="".concat(e.offsetHeight,"px"),this.$emit("fixed",!0)),this.$emit("scroll",{height:e.offsetHeight})},closePopupOrScrollTop:function(){var t=this;"/"===this.$route.path?(window.scrollTo({top:0,behavior:"smooth"}),this.resetFilters(),setTimeout((function(){t.requestItems({clear:!0})}),1e3)):this.$router.push("/")}})},_=n(8),component=Object(_.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{ref:"main",staticClass:"header",class:t.classes,style:{"min-height":t.minHeight}},[n("div",{ref:"inner",staticClass:"header__inner",class:{"is-fixed":t.isFixed}},[n("div",{staticClass:"container header__container"},[n("span",{staticClass:"title-xl header__title",on:{click:t.closePopupOrScrollTop}},[t._v("\n        Safnaðu\n      ")]),t._v(" "),n("ul",{staticClass:"header__tabs"},t._l(t.tabs,(function(e){return n("li",{key:e.target,staticClass:"header__tabs-item"},[e.isLink?n("NuxtLink",{staticClass:"header__tabs-btn",attrs:{to:e.href}},[t._v("\n            "+t._s(e.text)+"\n          ")]):n("button",{staticClass:"header__tabs-btn",class:{"is-active":e.isActive},on:{click:function(n){return n.preventDefault(),t.changeView(e.target)}}},[t._v("\n            "+t._s(e.text)+"\n          ")])],1)})),0),t._v(" "),t.hasDate?n("div",{staticClass:"header__date"},[n("div",{staticClass:"header__date-in"},[t._v(t._s(t.date))])]):t._e(),t._v(" "),t.hasLogo?n("button",{staticClass:"header__logo",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.handleChangeTheme(e)}}},[n("Icon",{staticClass:"header__logo-in",attrs:{name:"rvk-logo"}})],1):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},203:function(t,e,n){"use strict";n.r(e);var l,c=n(88),r=(n(31),n(19),n(14),n(11),n(24),n(125),n(2)),o=n(20),d=n(0),h=n(7),f=n(38),_=(l=null,function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200;l&&clearTimeout(l),l=setTimeout((function(){return t()}),e)}),v=n(23),m=n(39),O=n(200),C=n(110),E={name:"Select",props:{options:{type:Array,default:function(){return[]},validator:function(t){return!t.length||t.every((function(option){return Object(v.a)(option.id)&&Object(v.a)(option.text)}))}}},data:function(){return{isOpened:!1}},computed:{hasOptions:function(){return this.options.length},value:function(){return this.options.find((function(option){return option.isSelected}))||{}}},watch:{isOpened:function(t){var e=this;Object(h.a)((function(){t?document.addEventListener("click",e.handleClose):document.removeEventListener("click",e.handleClose)}))}},methods:{toggle:function(){this.isOpened?this.close():this.open()},close:function(){this.isOpened=!1},open:function(){this.isOpened=!0},handleChange:function(option){this.$emit("change",option),this.close()},handleClose:function(t){var select=t.target.closest(".select");select&&select===this.$refs.select||this.close()}}},S=n(8),y=Object(S.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"select",staticClass:"select"},[n("div",{staticClass:"select__header",on:{click:function(e){return e.preventDefault(),t.toggle(e)}}},[n("div",{staticClass:"select__value"},[t._t("value",[t._v(t._s(t.value.text))],{value:t.value})],2),t._v(" "),n("div",{staticClass:"select__arrow"},[t._v(">")])]),t._v(" "),t.hasOptions&&t.isOpened?n("div",{staticClass:"select__body"},[n("ul",{staticClass:"select__list"},t._l(t.options,(function(option){return n("li",{key:option.id,staticClass:"select__option",on:{click:function(e){return e.preventDefault(),t.handleChange(option)}}},[t._t("option",[t._v(t._s(option.text))])],2)})),0)]):t._e()])}),[],!1,null,null,null).exports,T={name:"Tag",components:{Icon:n(199).a},props:{isSelected:{type:Boolean,default:!1}}},w={name:"TagList",components:{Tag:Object(S.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag",class:{"is-selected":t.isSelected}},[n("button",{staticClass:"tag__btn",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("click")}}},[t._t("default")],2),t._v(" "),n("button",{staticClass:"tag__close",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.$emit("clear")}}},[n("Icon",{staticClass:"tag__close-icon",attrs:{name:"close"}})],1)])}),[],!1,null,null,null).exports},props:{items:{type:Array,default:function(){return[]},validator:function(t){return!t.length||t.every((function(option){return Object(v.a)(option.id)&&Object(v.a)(option.text)}))}}},data:function(){return{isOpened:!1,value:null,oldDate:null}},watch:{items:{immediate:!0,handler:function(t){t.some((function(t){return t.isSelected}))||(this.value=null,this.oldDate=null)}},isOpened:function(t){var e=this;Object(h.a)((function(){return t?document.addEventListener("click",e.closeOnOutsideClick,!0):document.removeEventListener("click",e.closeOnOutsideClick,!0)}))}},methods:{handleClear:function(){this.$emit("change",{value:null})},handleClearDatepicker:function(){this.handleClear(),this.oldDate=null,this.value=null},handleClick:function(t){this.$emit("change",t)},handleSelected:function(t){var e=this;this.oldDate&&t&&this.oldDate.getTime()===t.getTime()?this.$nextTick((function(){e.value=null,e.oldDate=null})):this.oldDate=t,this.handleClick({value:t}),this.close()},closeOnOutsideClick:function(t){var e=this;t.path.some((function(t){return t===e.$refs.datepicker}))||this.close()},toggle:function(){this.isOpened?this.close():this.open()},open:function(){this.isOpened=!0},close:function(){this.isOpened=!1}}},D=Object(S.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tag-list"},[n("ul",{staticClass:"tag-list__list"},t._l(t.items,(function(e){return n("li",{key:e.id,staticClass:"tag-list__item"},[e.isDatepicker?n("Tag",{attrs:{"is-selected":e.isSelected},on:{click:t.toggle,clear:t.handleClearDatepicker}},[t._v("\n        "+t._s(e.text)+"\n      ")]):n("Tag",{attrs:{"is-selected":e.isSelected},on:{click:function(n){return t.handleClick(e)},clear:function(n){return t.handleClear(e)}}},[t._v("\n        "+t._s(e.text)+"\n      ")])],1)})),0),t._v(" "),t.isOpened?[n("no-ssr",[n("div",{ref:"datepicker"},[n("Datepicker",{staticClass:"tag-list__datepicker",attrs:{inline:!0},on:{selected:t.handleSelected},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1)])]:t._e()],2)}),[],!1,null,null,null).exports,j=(n(126),{name:"Input",model:{prop:"modelValue",event:"model-changed"},props:{modelValue:{type:[String,Number],default:""},isError:{type:Boolean,default:!1}},methods:{handleInput:function(t){this.$emit("model-changed",t.target.value),this.$emit("input",t)}}});function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function L(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var M={name:"Filters",components:{Select:y,TagList:D,Input:Object(S.a)(j,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{staticClass:"input",class:{"is-error":t.isError},domProps:{value:t.modelValue},on:{input:t.handleInput,blur:function(e){return t.$emit("blur")}}})}),[],!1,null,null,null).exports},props:{isVisible:{type:Boolean,default:!1}},data:function(){return{scrollPosition:0,isOpened:!1}},computed:L({},Object(o.c)({typeOptions:"".concat(d.e.COMMON,"/").concat(d.d.EVENT_TYPES),placeOptions:"".concat(d.e.COMMON,"/").concat(d.d.EVENT_PLACES),accessOptions:"".concat(d.e.COMMON,"/").concat(d.d.EVENT_ACCESSES),dateList:"".concat(d.e.COMMON,"/").concat(d.d.EVENT_DATES),timeList:"".concat(d.e.COMMON,"/").concat(d.d.EVENT_TIMES),search:"".concat(d.e.COMMON,"/").concat(d.d.SEARCH)}),{closeButtonText:function(){return this.isOpened?"> fela":"< leita"}}),watch:{isOpened:function(t){Object(C.a)(!t)}},methods:L({},Object(o.b)({handleTypeChange:"".concat(d.e.COMMON,"/").concat(d.a.SET_SELECTED_TYPE),handlePlaceChange:"".concat(d.e.COMMON,"/").concat(d.a.SET_SELECTED_PLACE),handleAccessChange:"".concat(d.e.COMMON,"/").concat(d.a.SET_SELECTED_ACCESS),handleDateChange:"".concat(d.e.COMMON,"/").concat(d.a.SET_SELECTED_DATE),handleTimeChange:"".concat(d.e.COMMON,"/").concat(d.a.SET_SELECTED_TIME),handleSearch:"".concat(d.e.COMMON,"/").concat(d.a.SET_SEARCH),clearItems:"".concat(d.e.COMMON,"/").concat(d.a.CLEAR_EVENTS),requestItems:"".concat(d.e.COMMON,"/").concat(d.a.REQUEST_EVENTS)}),{handlePlace:function(option){this.handlePlaceChange(option),this.requestItems({clear:!0})},handleType:function(option){this.handleTypeChange(option),this.requestItems({clear:!0})},handleTime:function(option){this.handleTimeChange(option),this.requestItems({clear:!0})},handleDate:function(option){this.handleDateChange(option),this.requestItems({clear:!0})},handleSubmit:function(){this.requestItems({clear:!0}),this.close()},toggle:function(){this.isOpened?this.close():this.open()},close:function(){this.isOpened=!1},open:function(){this.isOpened=!0}})},x=Object(S.a)(M,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filters",class:{"is-visible":t.isVisible,"is-opened":t.isOpened}},[n("div",{staticClass:"filters__wrapper"},[n("div",{staticClass:"filters__container"},[n("button",{staticClass:"filters__close",attrs:{type:"button"},on:{click:t.toggle}},[n("svg",{staticClass:"filters__icon-search",attrs:{width:"30px",height:"38px",viewBox:"0 0 42 42",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[n("title",[t._v("Shape")]),t._v(" "),n("desc",[t._v("Created with Sketch.")]),t._v(" "),n("g",{attrs:{id:"design",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"}},[n("g",{attrs:{id:"Artboard",transform:"translate(-354.000000, -45.000000)",fill:"currentColor","fill-rule":"nonzero"}},[n("g",{attrs:{id:"iconfinder_11_Search_106236",transform:"translate(354.000000, 45.000000)"}},[n("path",{attrs:{id:"Shape",d:"M40.8444657,40.8444657 C39.3037532,42.3851781 36.8064734,42.3851781 35.265679,40.8444657 L28.3043362,33.8830409 C25.4423452,35.7190661 22.0592911,36.8129539 18.406518,36.8129539 C8.2416057,36.8129539 0,28.5724967 0,18.4064359 C0,8.24037523 8.2416057,0 18.406518,0 C28.5727427,0 36.813036,8.24021117 36.813036,18.4064359 C36.813036,22.0579786 35.7177536,25.4423452 33.8830409,28.3056487 L40.8444657,35.2670735 C42.3851781,36.8077859 42.3851781,39.3037532 40.8444657,40.8444657 Z M18.406518,5.25894654 C11.1458429,5.25894654 5.25902857,11.1444484 5.25902857,18.4063539 C5.25902857,25.6682594 11.1459249,31.5538433 18.406518,31.5538433 C25.6683415,31.5538433 31.5539253,25.6682594 31.5539253,18.4063539 C31.5539253,11.1444484 25.6683415,5.25894654 18.406518,5.25894654 Z"}})])])])]),t._v("\n        "+t._s(t.closeButtonText)+"\n      ")]),t._v(" "),n("form",{staticClass:"filters__inner",on:{submit:function(e){return e.preventDefault(),t.handleSubmit(e)}}},[n("div",{staticClass:"filters__fieldset"},[n("div",{staticClass:"filters__field"},[n("div",{staticClass:"filters__label"},[t._v("Tegund")]),t._v(" "),n("div",{staticClass:"filters__control"},[n("Select",{attrs:{options:t.typeOptions},on:{change:t.handleType}})],1)]),t._v(" "),n("div",{staticClass:"filters__field"},[n("div",{staticClass:"filters__label"},[t._v("Staður")]),t._v(" "),n("div",{staticClass:"filters__control"},[n("Select",{attrs:{options:t.placeOptions},on:{change:t.handlePlace}})],1)]),t._v(" "),n("div",{staticClass:"filters__field"},[n("div",{staticClass:"filters__label"},[t._v("Dagsetning")]),t._v(" "),n("div",{staticClass:"filters__control"},[n("TagList",{staticClass:"filters__tag-list",attrs:{items:t.dateList},on:{change:t.handleDate}})],1)]),t._v(" "),n("div",{staticClass:"filters__field"},[n("div",{staticClass:"filters__label"},[t._v("Tími")]),t._v(" "),n("div",{staticClass:"filters__control"},[n("TagList",{staticClass:"filters__tag-list",attrs:{items:t.timeList},on:{change:t.handleTime}})],1)]),t._v(" "),n("div",{staticClass:"filters__field"},[n("div",{staticClass:"filters__label"},[t._v("Leitarorð")]),t._v(" "),n("div",{staticClass:"filters__control"},[n("Input",{staticClass:"filters__input",attrs:{"model-value":t.search,placeholder:"skrifaðu inn leitarorð"},on:{"model-changed":t.handleSearch}})],1)])]),t._v(" "),t._m(0)])])]),t._v(" "),n("div",{staticClass:"filters__overlay",on:{click:function(e){return e.preventDefault(),t.close(e)}}})])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"filters__footer"},[e("button",{staticClass:"btn",attrs:{type:"submit"}},[this._v("Leita")])])}],!1,null,null,null).exports;function I(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function N(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?I(source,!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):I(source).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var P={name:"EventList",components:{Header:O.a,Filters:x},props:{isVisible:{type:Boolean,default:!1}},data:function(){return{hidden:{},isFiltersVisible:!1,isDot:!0,date:null,disableLoader:!1}},computed:N({},Object(o.c)({items:"".concat(d.e.COMMON,"/").concat(d.d.EVENTS_TILES),isLoading:"".concat(d.e.COMMON,"/").concat(d.d.LOADING)}),{hasItems:function(){return!!this.items.length},isClient:function(){return Object(h.a)((function(){return!0}))},fullDate:function(){var t=this.date;if(Object(v.a)(t)){var e=new Date(t),n=m.a.months[e.getMonth()],l=m.a.days[e.getDay()],c=e.getDate(),r=e.getFullYear();return"".concat(l," ").concat(c,". ").concat(n," ").concat(r)}return t}}),watch:{isLoading:function(t){t||(this.disableLoader=!1)}},mounted:function(){this.toggleInfiniteScroll(!0),this.toggleReInitDotOnResize(!0)},destroyed:function(){this.toggleInfiniteScroll(!1),this.toggleReInitDotOnResize(!1)},methods:N({},Object(o.b)({requestEvents:"".concat(d.e.COMMON,"/").concat(d.a.REQUEST_EVENTS)}),{handleFixed:function(t){this.isFiltersVisible=t},handleScroll:function(t){var e=this,n=t.height,l=this.$refs.card,c=null;Array.isArray(l)&&l.forEach((function(t,i){if(!(t.getBoundingClientRect().top<n||c)){c=t.dataset.id;var l=e.items.find((function(e){return e.id===t.dataset.id}));e.date=Object(v.a)(l)?l.startDate:null}}))},handleInfiniteScroll:function(){var t=Object(f.a)().y,e=document.body.scrollHeight;t+(window.innerHeight+10)<e||this.isLoading||(this.disableLoader=!0,this.requestEvents(),console.log("final"))},toggleInfiniteScroll:function(t){var e=this;Object(h.a)((function(){t?window.addEventListener("scroll",e.handleInfiniteScroll):window.removeEventListener("scroll",e.handleInfiniteScroll)}))},reInitDotOnResize:function(){var t=this;_((function(){t.isDot=!1,t.$nextTick((function(){t.isDot=!0}))}),50)},toggleReInitDotOnResize:function(t){var e=this;Object(h.a)((function(){t?window.addEventListener("resize",e.reInitDotOnResize):window.removeEventListener("resize",e.reInitDotOnResize)}))}})},$=Object(S.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"event-list",attrs:{"data-section":"event-list"}},[n("Header",{ref:"header",attrs:{"is-visible":t.isVisible,date:t.fullDate},on:{scroll:t.handleScroll,fixed:t.handleFixed}}),t._v(" "),n("Filters",{attrs:{"is-visible":t.isFiltersVisible}}),t._v(" "),n("div",{staticClass:"container event-list__container"},[n("div",{staticClass:"content"},[n("div",{staticClass:"event-list__inner"},[t.isLoading&&!t.disableLoader?n("div",{staticClass:"title-md event-list__loader"},[t._v("\n          Hleð...\n        ")]):t.hasItems?n("div",{staticClass:"event-list__items"},t._l(t.items,(function(e){return n("div",{key:e.id,ref:"card",refInFor:!0,staticClass:"event-list__item",attrs:{"data-id":e.id}},[n("NuxtLink",{staticClass:"event-list__item-link",class:{"is-hidden":t.hidden[e.id]},attrs:{to:e.page}},[n("div",{staticClass:"event-list__item-img",style:{"background-image":"url("+e.img+")"}},[n("div",{staticClass:"event-list__item-date small"},[n("strong",[t._v(t._s(e.date))])])]),t._v(" "),n("div",{staticClass:"event-list__item-content"},[t.isClient&&t.isDot?n("Dot",{staticClass:"event-list__item-title title-md",attrs:{msg:e.title,line:2}}):n("div",{staticClass:"event-list__item-title title-md"},[t._v("\n                  "+t._s(e.title)+"\n                ")]),t._v(" "),n("div",{staticClass:"event-list__item-text small"},[t._v(t._s(e.text))]),t._v(" "),n("div",{staticClass:"event-list__item-time small"},[n("strong",[t._v(t._s(e.time))])])],1)])],1)})),0):n("div",{staticClass:"title-md event-list__empty"},[t._v("\n          Fann ekkert. Prófaðu að breyta leitarskilyrðunum.\n        ")])])])])],1)}),[],!1,null,null,null).exports,V={name:"Index",components:{WithScroll:c.a,EventList:$},computed:{section:function(){return{eventList:"eventList"}}},methods:{showSection:function(t){var section=this.$refs[t];section&&"function"==typeof section.show&&section.show()}}},A=Object(S.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("WithScroll",{on:{visible:function(e){return t.showSection(t.section.eventList)}},scopedSlots:t._u([{key:"default",fn:function(e){var l=e.isVisible;return[n("EventList",{ref:t.section.header,attrs:{"is-visible":l}})]}}])})],1)}),[],!1,null,null,null);e.default=A.exports}}]);