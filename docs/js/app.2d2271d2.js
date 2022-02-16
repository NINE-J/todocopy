(function(t){function e(e){for(var n,s,c=e[0],l=e[1],a=e[2],d=0,f=[];d<c.length;d++)s=c[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,a||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,c=1;c<o.length;c++){var l=o[c];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},i=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var a=0;a<c.length;a++)e(c[a]);var u=l;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},i=[],s=(o("5c0b"),o("2877")),c={},l=Object(s["a"])(c,r,i,!1,null,null,null),a=l.exports,u=o("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var d=o("8c4f"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home w-screen h-screen flex justify-center pt-24 px-8 bg-gray-100"},[o("div",{staticClass:"lg:w-1/3 md:w-2/3 w-full flex flex-col items-center pb-16"},[o("h1",{staticClass:"md:text-8xl text-6xl text-red-300 mb-4"},[t._v("Todos")]),o("div",{staticClass:"shadow-lg w-full"},[o("MainInput"),o("List")],1)])])},p=[],m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"main-input w-full border-b"},[o("div",{staticClass:"w-full flex items-center p-4 bg-white"},[o("b-icon",{staticClass:"text-gray-200 w-6 h-6 mr-4",attrs:{icon:"chevron-down"}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"h-8 flex-grow",attrs:{type:"text",placeholder:"오늘의 할 일은?"},domProps:{value:t.text},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTodo.apply(null,arguments)},input:function(e){e.target.composing||(t.text=e.target.value)}}})],1)])},h=[],g=o("5530"),v=(o("e9c4"),o("2f62")),b={name:"MainInput",watch:{todos:{deep:!0,handler:function(){localStorage.setItem("todosBackup",JSON.stringify(this.todos))}}},computed:Object(g["a"])({},Object(v["b"])(["todos"])),methods:{newId:function(){if(0==this.todos.length)return 0;var t=this.todos[this.todos.length-1].id;return t+1},addTodo:function(){this.$store.commit("addTodo",{id:this.newId(),text:this.text,completed:!1}),this.text=void 0}},data:function(){return{text:void 0}}},x=b,w=(o("e166"),Object(s["a"])(x,m,h,!1,null,"aa9d3f00",null)),y=w.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"list-container w-full"},[o("ul",{staticClass:"w-full"},t._l(t.filteredTodos,(function(e){return o("li",{key:e.id,staticClass:"flex items-center p-4 bg-white border-b border-gray-100"},[e.completed?o("b-icon",{staticClass:"text-gray-600 w-6 h-6 mr-4 cursor-pointer",attrs:{icon:"check-square-fill"},on:{click:function(o){return t.toggleState(e)}}}):o("b-icon",{staticClass:"text-gray-200 w-6 h-6 mr-4 cursor-pointer",attrs:{icon:"check-square"},on:{click:function(o){return t.toggleState(e)}}}),o("span",{staticClass:"mr-auto",class:{"line-through text-gray-400":e.completed}},[t._v(t._s(e.text))]),o("b-icon",{staticClass:"ml-4 text-gray-400",attrs:{icon:"trash"},on:{click:function(o){return t.removeTodo(e)}}})],1)})),0),o("div",{staticClass:"p-4 bg-white flex items-center justify-between"},[o("span",{staticClass:"text-sm"},[t._v(t._s(t.activeItemsNum)+" items left")]),o("div",[o("span",{staticClass:"text-sm p-2 mr-2 rounded-md border border-gray-100 cursor-pointer",class:{"border-red-300":"all"==t.filter},on:{click:function(e){return t.toggleFilter("all")}}},[t._v("All")]),o("span",{staticClass:"text-sm p-2 mr-2 rounded-md border border-gray-100 cursor-pointer",class:{"border-red-300":"active"==t.filter},on:{click:function(e){return t.toggleFilter("active")}}},[t._v("Active")]),o("span",{staticClass:"text-sm p-2 rounded-md border border-gray-100 cursor-pointer",class:{"border-red-300":"completed"==t.filter},on:{click:function(e){return t.toggleFilter("completed")}}},[t._v("Completed")])])])])},k=[],_=(o("4de4"),o("d3b7"),{name:"List",computed:Object(g["a"])(Object(g["a"])({},Object(v["b"])(["todos"])),{},{filteredTodos:function(){return"active"==this.filter?this.todos.filter((function(t){return!t.completed})):"completed"==this.filter?this.todos.filter((function(t){return t.completed})):this.todos},activeItemsNum:function(){return this.todos.filter((function(t){return!t.completed})).length}}),methods:{toggleState:function(t){this.$store.commit("toggleState",t)},removeTodo:function(t){this.$store.commit("removeTodo",t)},toggleFilter:function(t){this.filter=t}},data:function(){return{filter:"all"}},mounted:function(){var t=localStorage.getItem("todosBackup");t&&this.$store.commit("fetchTodos",JSON.parse(t))}}),C=_,j=Object(s["a"])(C,O,k,!1,null,null,null),S=j.exports,T={name:"Home",components:{MainInput:y,List:S}},I=T,$=Object(s["a"])(I,f,p,!1,null,null,null),N=$.exports;n["a"].use(d["a"]);var P=[{path:"/",name:"Home",component:N}],M=new d["a"]({mode:"history",base:"/",routes:P}),E=M;o("a434");n["a"].use(v["a"]);var F=new v["a"].Store({state:{todos:[]},mutations:{addTodo:function(t,e){return t.todos.push(e)},removeTodo:function(t,e){var o=t.todos.indexOf(e);return t.todos.splice(o,1)},toggleState:function(t,e){var o=t.todos.indexOf(e);return t.todos[o].completed=!t.todos[o].completed},fetchTodos:function(t,e){return console.log("fetch done"),t.todos=e}},actions:{},modules:{}}),A=(o("db43"),o("b1e0"));o("5df9");n["a"].use(A["a"]),n["a"].config.productionTip=!1,new n["a"]({router:E,store:F,render:function(t){return t(a)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";o("9c0c")},8997:function(t,e,o){},"9c0c":function(t,e,o){},db43:function(t,e,o){},e166:function(t,e,o){"use strict";o("8997")}});
//# sourceMappingURL=app.2d2271d2.js.map