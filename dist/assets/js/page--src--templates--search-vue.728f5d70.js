(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"9bAD":function(t,e,s){"use strict";s("x1lP")},FvWF:function(t,e,s){"use strict";s.r(e);s("07d7"),s("rB9j"),s("PKPk"),s("hByQ"),s("3bBZ"),s("Kz25");var r={props:{record:{},border:{type:Boolean,default:!0}},computed:{card:function(){return"MarkdownPage"!=this.record.__typename},path:function(){return this.pathPrefix?this.pathPrefix+"/"+this.record.id:this.record.path}}},a=(s("9bAD"),s("KHd+")),i={metaInfo:{title:"Search"},data:function(){return{q:"",objects:{},loading:!0}},computed:{searchResults:function(){var t=this.q;if(!t||t.length<3)return[];for(var e=this.$search.search({query:t,limit:100}),s=[],r=0;r<e.length;r++){var a=e[r];s.push({node:this.objects[a.path]})}return s},contentHeight:function(){return window.innerHeight-128}},mounted:function(){this.q=new URL(location.href).searchParams.get("query");for(var t=0;t<this.$page.projects.edges.length;t++){var e=this.$page.projects.edges[t];this.objects[e.node.path]=e.node}for(t=0;t<this.$page.people.edges.length;t++){e=this.$page.people.edges[t];this.objects[e.node.path]=e.node}for(t=0;t<this.$page.blogs.edges.length;t++){e=this.$page.blogs.edges[t];this.objects[e.node.path]=e.node}for(t=0;t<this.$page.markdowns.edges.length;t++){e=this.$page.markdowns.edges[t];this.objects[e.node.path]=e.node}this.loading=!1},components:{SearchListItem:Object(a.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.card?s("div",{staticClass:"flex search-post px-0 sm:px-4 pb-8 mb-8",class:{"no-border":!t.border}},[s("g-link",{staticClass:"post-card-image-link",attrs:{to:t.record.path}},[s("g-image",{staticClass:"post-card-image",attrs:{src:t.record.image,alt:t.record.title}})],1),s("div",{staticClass:"p-5"},[s("g-link",{attrs:{to:t.record.path}},[s("h2",{staticClass:"post-card-title mt-3"},[t._v(t._s(t.record.title||t.record.name))]),s("p",{staticClass:"post-card-excerpt"},[t._v(t._s(t.record.excerpt))]),s("section",{staticClass:"post-tags container mx-auto relative py-1"},t._l(t.record.memberships,(function(e){return s("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-1 px-2 mr-1 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1)]),s("div",{staticClass:"w-full post-card-meta pt-2"},[s("div",{staticClass:"avatars"},[s("div",{staticClass:"flex items-center"},[s("div",{staticClass:"flex justify-between items-center"},[s("ul",{staticClass:"list-none flex author-list m-0"},t._l(t.record.authors,(function(t){return s("li",{key:t.id,staticClass:"author-list-item"},[s("g-link",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.name,expression:"author.name"}],attrs:{to:t.path}},[s("g-image",{staticClass:"w-8 h-8 rounded-full bg-gray-200 border-2 border-white",attrs:{src:t.image,alt:t.name}})],1)],1)})),0)]),s("div",{staticClass:"flex flex-col text-xs leading-none uppercase"},[s("p",[s("g-link",{attrs:{to:t.record.path}},[s("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.humanTime))])])],1),s("p",[s("g-link",{attrs:{to:t.record.path}},[s("time",{attrs:{datetime:t.record.datetime}},[t._v(t._s(t.record.startDate))])]),t._v("\n              "+t._s(t.record.status)+"\n            ")],1)])]),s("section",{staticClass:"post-tags container mx-auto relative py-3"},t._l(t.record.tags,(function(e){return s("g-link",{key:e.id,staticClass:"text-xs bg-transparent hover:text-blue-700 py-2 px-4 mr-2 border hover:border-blue-500 border-gray-600 text-gray-700 rounded-full",attrs:{to:e.path}},[t._v(t._s(e.title))])})),1)])])],1)],1):s("div",{staticClass:"flex search-post px-0 sm:px-4 pb-8 mb-8",class:{"no-border":!t.border}},[s("div",{staticClass:"p-5"},[s("g-link",{attrs:{to:t.record.path}},[s("h2",{staticClass:"post-card-title mt-3"},[t._v(t._s(t.record.title))]),t.record.excerpt?s("p",{staticClass:"post-card-excerpt"},[t._v(t._s(t.record.excerpt.substring(100)))]):t._e()])],1)])}),[],!1,null,"72a7ec66",null).exports}},o=(s("Q9IV"),null),n=Object(a.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("div",{staticClass:"container sm:pxi-0 mx-auto",style:{"min-height":t.contentHeight+"px"}},[t.loading?s("g-image",{staticClass:"m-auto",attrs:{src:"/img/loader.gif",alt:""}}):t._e(),t.searchResults.length>0?s("div",{staticClass:"flex flex-wrap with-large pt-8 pb-8 mx-4 sm:-mx-4"},t._l(t.searchResults,(function(t){return s("SearchListItem",{key:t.node.id,attrs:{record:t.node}})})),1):s("div",{staticClass:"flex flex-col with-large my-auto text-center py-20"},[s("h1",{},[t._v("No results")]),s("p",[t._v("OOPS! Something went wrong here")])])],1)])}),[],!1,null,"401cff10",null);"function"==typeof o&&o(n);e.default=n.exports},Q9IV:function(t,e,s){"use strict";s("VxtZ")},VxtZ:function(t,e,s){},x1lP:function(t,e,s){}}]);