(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{215:function(t,e,n){"use strict";n.r(e);n(36);var o=n(86),c=n(210),r={name:"Index",components:{WithScroll:o.a,EventList:c.a},computed:{section:function(){return{eventList:"eventList"}}},methods:{showSection:function(t){var section=this.$refs[t];section&&"function"==typeof section.show&&section.show()}}},l=n(10),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main"},[n("WithScroll",{on:{visible:function(e){return t.showSection(t.section.eventList)}},scopedSlots:t._u([{key:"default",fn:function(e){var o=e.isVisible;return[n("EventList",{ref:t.section.header,attrs:{"is-visible":o}})]}}])})],1)},[],!1,null,null,null);e.default=component.exports}}]);