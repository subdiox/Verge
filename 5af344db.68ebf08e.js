(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{150:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(9),i=(n(0),n(170)),o={id:"utilities",title:"Utilities",sidebar_label:"Utilities"},l={id:"VergeStore/utilities",isDocsHomePage:!1,title:"Utilities",description:"Edge",source:"@site/docs/VergeStore/utilities.md",permalink:"/Verge/docs/VergeStore/utilities",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/VergeStore/utilities.md",sidebar_label:"Utilities",sidebar:"docs",previous:{title:"Logging",permalink:"/Verge/docs/VergeStore/logging"},next:{title:"Optimization Tips",permalink:"/Verge/docs/VergeStore/optimization-tips"}},s=[{value:"<code>Edge&lt;State&gt;</code>",id:"edgestate",children:[{value:"Edge helps compare if state was updated without Equatable",id:"edge-helps-compare-if-state-was-updated-without-equatable",children:[]},{value:"Actually, we need to get to flag that means different, it no need to be equal",id:"actually-we-need-to-get-to-flag-that-means-different-it-no-need-to-be-equal",children:[]},{value:"Edge does embed state with versioning",id:"edge-does-embed-state-with-versioning",children:[]},{value:"Edge can validate the value and modify to be correctly",id:"edge-can-validate-the-value-and-modify-to-be-correctly",children:[]}]},{value:"assign - assignee",id:"assign---assignee",children:[]}],c={rightToc:s};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"edgestate"},Object(i.b)("inlineCode",{parentName:"h2"},"Edge<State>")),Object(i.b)("h3",{id:"edge-helps-compare-if-state-was-updated-without-equatable"},"Edge helps compare if state was updated without Equatable"),Object(i.b)("p",null,"\u200cIn a single state tree, comparing for reducing the number of updates would be most important for keep performance. However, implementing Equatable is not easy basically. Instead, adding a like flag that indicates updated itself, it would be easy"),Object(i.b)("h3",{id:"actually-we-need-to-get-to-flag-that-means-different-it-no-need-to-be-equal"},"Actually, we need to get to flag that means different, it no need to be equal"),Object(i.b)("p",null,"Actually, we need to get to flag that means ",Object(i.b)("strong",{parentName:"p"},"different"),", it no need to be ",Object(i.b)("strong",{parentName:"p"},"equal"),"."),Object(i.b)("h3",{id:"edge-does-embed-state-with-versioning"},"Edge does embed state with versioning"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Edge")," manages the version of itself, the version will increment each modification. however, it can't get how exactly modified from the modification. and Edge returns equality by comparing their version.\nThat is the reason why Edge may return boolean that false positive.\nIf Edge returns equality false, it may be actually equals."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"struct YourState {\n  var name: String = ...\n}\n\nstruct AppState: Equatable {\n\n  @Edge var yourState YourState = .init()\n}\n\n> Since `Edge` enables `Equatable` in yourState, AppState can be Equatable with synthesizing.\n\nappState.yourState.name\n\n// get unique value that indicates updated to compare with previous value.\n// this value would be updated on every mutation of this tree.\nappState.$yourState.version\n")),Object(i.b)("h3",{id:"edge-can-validate-the-value-and-modify-to-be-correctly"},"Edge can validate the value and modify to be correctly"),Object(i.b)("p",null,"Edge supports a concept of middleware that catch a new value and modifiable.",Object(i.b)("br",{parentName:"p"}),"\n","Please check ",Object(i.b)("inlineCode",{parentName:"p"},"Edge.Middleware")," to see more detail."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"let middleware = Edge<Value>.Middleware.init(onSet: { value in /* do something */ })\n")),Object(i.b)("p",null,"To set it up, we can declare as followings:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"@Edge(middleware: .assert { $0 >= 0 }) var count = 0\n")),Object(i.b)("p",null,"It can be combined from multiple middleware."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"@Edge(middleware: .init([\n  .assert { $0 >= 0 },\n  .init { value in /* performs something */ },\n]))\nvar count = 0\n")),Object(i.b)("h2",{id:"assign---assignee"},"assign - assignee"),Object(i.b)("p",null,"In specific cases, it needs to projects value from others into the Store."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Having multiple stores and needs to be integrated with each other."),Object(i.b)("li",{parentName:"ul"},"Having other reactive streams and needs to be stored the value in the Store")),Object(i.b)("p",null,"In these cases, ",Object(i.b)("inlineCode",{parentName:"p"},"assign")," and ",Object(i.b)("inlineCode",{parentName:"p"},"assignee")," operators help."),Object(i.b)("p",null,"Assigns the value from other Store's state to Store's state."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"let store1 = Store()\nlet store2 = Store()\n\nstore1\n  .derived(.map(\\.count))\n  .assign(to: store2.assignee(\\.count))\n")),Object(i.b)("p",null,"Assigns the value from the Publisher to Store's state."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-swift"}),"let publisher: Combine.Publisher<Int>\nlet store2 = Store()\n\npublisher\n  .assign(to: store2.assignee(\\.count))\n")))}d.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,g=u["".concat(o,".").concat(p)]||u[p]||b[p]||i;return n?r.a.createElement(g,l(l({ref:t},c),{},{components:n})):r.a.createElement(g,l({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);