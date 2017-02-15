webpackJsonp([1,2],[,,,,,,,,,,function(t,e,s){s(37);var r=s(1)(s(30),s(45),null,null);t.exports=r.exports},,function(t,e){},,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(41),a=s.n(r),n=s(40),o=s.n(n),i=s(39),u=s.n(i);e.default={name:"app",components:{SourceSelection:a.a,NewsList:o.a,GhCorner:u.a},data:function(){return{source:""}},methods:{sourceChanged:function(t){this.source=t}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"gh-corner"}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="f5ae03e47a474e1dbcb11e5762e0eefe";e.default={name:"news-list",props:["source"],data:function(){return{articles:[],isLoaded:new Boolean}},methods:{updateSource:function(t){var e=this;this.articles=[],this.isLoaded=!1,setTimeout(function(){e.axios.get("https://newsapi.org/v1/articles?source="+t+"&apiKey="+r).then(function(t){console.log(t),e.articles=t.data.articles,e.isLoaded=!0})},750)}},activated:function(){this.updateSource(this.source)},watch:{source:function(t){this.updateSource(t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(12);s.n(r);e.default={name:"source-selection",data:function(){return{sources:[],source:null}},created:function(){this.getSources()},methods:{getSources:function(){var t=this;this.axios.get("https://newsapi.org/v1/sources?language=en").then(function(e){t.sources=e.data.sources})},sourceChanged:function(t){for(var e=0;e<this.sources.length;e++)this.sources[e].id==t.target.value&&(this.source=this.sources[e]);this.$emit("sourceChanged",t.target.value)}}}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,s){s(35);var r=s(1)(s(31),s(43),null,null);t.exports=r.exports},function(t,e,s){s(34);var r=s(1)(s(32),s(42),null,null);t.exports=r.exports},function(t,e,s){s(36);var r=s(1)(s(33),s(44),null,null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"news-list"},[s("div",[t.isLoaded?t._e():s("div",{staticClass:"spinner",attrs:{"uk-spinner":""}})]),t._v(" "),s("transition-group",{attrs:{name:"fade"}},t._l(t.articles,function(e){return s("article",{key:t.source,staticClass:"uk-article"},[s("h1",{staticClass:"uk-article-title"},[s("a",{staticClass:"uk-link-reset",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))])]),t._v(" "),null!==e.author?s("p",{staticClass:"uk-article-meta"},[t._v("Written by "),s("a",{staticClass:"uk-text-bold",attrs:{href:"#"}},[t._v(t._s(e.author))])]):t._e(),t._v(" "),s("p",[t._v(t._s(e.description))]),t._v(" "),s("div",{staticClass:"uk-grid-small uk-child-width-auto",attrs:{"uk-grid":""}},[s("div",[s("a",{staticClass:"uk-button uk-button-text",attrs:{href:e.url,target:"_blank"}},[t._v("Read more")])])])])}))],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"github-corner",attrs:{href:"https://github.com/moddi3/newsapp","aria-label":"View source on Github"}},[s("svg",{staticStyle:{fill:"#151513",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[s("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),t._v(" "),s("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),t._v(" "),s("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"source-selection uk-margin-top"},[s("h2",{staticClass:"uk-h2"},[t._v("Чё там у америкосов?")]),t._v(" "),s("select",{staticClass:"uk-select",attrs:{placeholder:"Select"},on:{change:t.sourceChanged}},[s("option",{attrs:{value:""}},[t._v("Выбери проплаченых журналюг ...")]),t._v(" "),t._l(t.sources,function(t){return s("option",{attrs:{label:t.name},domProps:{value:t.id}})})],2),t._v(" "),t.source?s("div",{staticClass:"uk-margin"},[s("p",{staticClass:"uk-margin-bottom"},[t._v(" "+t._s(t.source.description)+" ")]),t._v(" "),s("a",{staticClass:"uk-button uk-button-primary",attrs:{href:t.source.url}},[t._v("Перейти на сайт "+t._s(t.source.name)+" ")])]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"uk-section uk-section-default",attrs:{id:"app"}},[s("gh-corner"),t._v(" "),s("div",{staticClass:"uk-container uk-container-small uk-position-relative"},[s("source-selection",{on:{sourceChanged:t.sourceChanged}}),t._v(" "),s("news-list",{attrs:{source:t.source}})],1)],1)},staticRenderFns:[]}},,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=s(11),a=s.n(r),n=s(10),o=s.n(n),i=s(8),u=s.n(i),c=s(9),l=s.n(c);a.a.use(l.a,u.a),new a.a({el:"#app",template:"<App/>",components:{App:o.a}})}],[48]);
//# sourceMappingURL=app.52f61b228909a5ec7a50.js.map