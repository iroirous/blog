(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{233:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(71),c=a.n(i),l=(a(81),a(11)),o=a(12),s=a(14),u=a(13),m=a(15),p=(a(82),a(72)),h=a.n(p),d=a(73),f=a.n(d),E=a(234),b=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(E.a,{to:"/"},"Iroirous Blog")),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://iroirous.github.io/",target:"_blank",rel:"noopener noreferrer"},"Homepage")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://twitter.com/us_irir",target:"_blank",rel:"noopener noreferrer"},"Twitter")),r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/iroirous",target:"_blank",rel:"noopener noreferrer"},"Github"))))}}]),t}(n.Component);function v(e){return r.a.createElement("a",{href:e.href,target:"noopener noreferrer"},e.children)}var k=function(e){function t(e){var a,n=e.match;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this))).state={markdown:"",property:{},filepath:"./article/"+n.params.path},a.getMarkdownData(),a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){if(e.location!==this.props.location){var t=this;this.setState({filepath:"./article/"+e.match.params.path},function(){t.getMarkdownData()})}}},{key:"getMarkdownData",value:function(){var e=this,t=h()().use(f.a,{remarkReactComponents:{a:v}});fetch(this.state.filepath).then(function(e){return e.text()}).then(function(a){var n=a.match(/<!--([\s\S]+?)-->/),r=t.processSync(a).contents;e.setState({markdown:r,property:JSON.parse(n[1])})})}},{key:"render",value:function(){return document.title=this.state.property.title+" - Iroirous Blog",r.a.createElement("div",{className:"ArticlePage"},r.a.createElement(b,null),r.a.createElement("article",null,r.a.createElement("div",{className:"articleHeader"},r.a.createElement("h1",null,this.state.property.title),r.a.createElement("p",null,this.state.property.date)),r.a.createElement("div",{className:"content"},this.state.markdown)))}}]),t}(n.Component),y=a(235),w=a(236),O=a(237),j=[{title:"HP ENVY x360 13(Ryzen3/8GB\u30e2\u30c7\u30eb)\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u30c6\u30b9\u30c8\uff08\u30ec\u30d3\u30e5\u30fc\uff09",date:"2019-03-12",description:"HP ENVY x360 13\u30a4\u30f3\u30c1(Ryzen3/8GB RAM)\u306e\u5404\u7a2e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u30c6\u30b9\u30c8\u7d50\u679c\u3067\u3059\u3002CINEBENCH R15\u30fbR20\u3001FF14\u30d9\u30f3\u30c1\u30013DMark Sky Diver\u30013DMark Fire Strike\u3001Windows\u30a8\u30af\u30b9\u30da\u30ea\u30a8\u30f3\u30b9\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3001CrystalDiskMark\u306e\u7d50\u679c\u3092\u8a18\u8f09\u3057\u3066\u3044\u307e\u3059\u3002",path:"20190311_hpenvy360.md"},{title:"\u81ea\u5b85\u30c7\u30b9\u30af\u30c8\u30c3\u30d7PC\u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u3092\u3057\u3066\u307f\u305f\uff08\u8a18\u9332\u7528\uff09",date:"2019-03-10",description:"Core i5-6500, GTX 1050, 8GB RAM, 240GB SSD\u642d\u8f09PC\u306e\u30d9\u30f3\u30c1\u30de\u30fc\u30af\u7d50\u679c\u3067\u3059\u3002",path:"20190310_i56500bench.md"},{title:"\u30aa\u30f3\u30dc\u30ed\u30ce\u30fc\u30c8PC\u3068Raspberry Pi\u3067\u4f5c\u308b\u30de\u30a4\u30af\u30e9\u30b5\u30fc\u30d0",date:"2019-03-04",description:"\u30aa\u30f3\u30dc\u30edPentium\u30ce\u30fc\u30c8PC\u3068Raspberry Pi\u3092\u9023\u643a\u3055\u305b\u3066\u3001\u30de\u30a4\u30af\u30e9\u30b5\u30fc\u30d0\u3092\u4f5c\u3063\u305f\u8a71\u3067\u3059\u3002",path:"20190304_mcserver.md"}],g=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={articleList:j,property:null},document.title="Iroirous Blog",a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"ArticleList"},r.a.createElement(b,null),this.state.articleList.map(function(e,t){return r.a.createElement("div",{key:t,className:"ArticleListItem"},r.a.createElement(E.a,{to:"./article/"+e.path},r.a.createElement("h2",null,e.title),r.a.createElement("div",{className:"ArticleListDate"},e.date),r.a.createElement("div",{className:"ArticleListDescription"},e.description)))}))}}]),t}(n.Component),C=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y.a,null,r.a.createElement(w.a,null,r.a.createElement(O.a,{exact:!0,path:"/",component:g}),r.a.createElement(O.a,{path:"/article/:path",component:k}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},75:function(e,t,a){e.exports=a(233)},81:function(e,t,a){},82:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.9d73ce5c.chunk.js.map