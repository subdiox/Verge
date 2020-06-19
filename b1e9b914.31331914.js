(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(9),a=(r(0),r(168)),i={id:"state",title:"State - a data describes the current state of the app",sidebar_label:"State"},c={id:"VergeStore/state",isDocsHomePage:!1,title:"State - a data describes the current state of the app",description:"Using single state tree (Not enforced)",source:"@site/docs/VergeStore/state.md",permalink:"/Verge/docs/VergeStore/state",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/VergeStore/state.md",sidebar_label:"State",sidebar:"docs",previous:{title:"Mutation - updates the state of the store",permalink:"/Verge/docs/VergeStore/mutation"},next:{title:"Changes object - helps detecting differences and reduces copy-cosuming",permalink:"/Verge/docs/VergeStore/changes"}},s=[{value:"Using single state tree (Not enforced)",id:"using-single-state-tree-not-enforced",children:[]},{value:"Add a computed property",id:"add-a-computed-property",children:[]},{value:"StateType protocol helps to modify",id:"statetype-protocol-helps-to-modify",children:[]},{value:"Normalization",id:"normalization",children:[]}],p={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"using-single-state-tree-not-enforced"},"Using single state tree (Not enforced)"),Object(a.b)("p",null,"VergeStore uses a ",Object(a.b)("strong",{parentName:"p"},"single state-tree. (Recommended)")," That means an object contains all of the application's state. With this, we can get to achieve ",Object(a.b)("strong",{parentName:"p"},'"single source of truth"')),Object(a.b)("p",null,"That state is managed by ",Object(a.b)("strong",{parentName:"p"},"Store"),". It process updating the state and notify updated events to the subscribers."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"\ud83d\udca1 VergeStore does support multiple state-tree as well. Depending on the case, we can create another Store instance.")),Object(a.b)("h2",{id:"add-a-computed-property"},"Add a computed property"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"struct State: StateType {\n\n  var count: Int = 0\n\n  var countText: String {\n    return count.description\n  }\n\n}\n")),Object(a.b)("p",null,"Although in some of cases, the cost of computing might be higher which depends on how it create the value from stored properties."),Object(a.b)("h2",{id:"statetype-protocol-helps-to-modify"},"StateType protocol helps to modify"),Object(a.b)("p",null,"VergeStore provides ",Object(a.b)("inlineCode",{parentName:"p"},"StateType")," protocol as a helper."),Object(a.b)("p",null,"It will be used in State struct that Store uses. ",Object(a.b)("inlineCode",{parentName:"p"},"StateType")," protocol is just providing the extensions to mutate easily in the nested state."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-swift"}),"public protocol StateType {\n}\n\nextension StateType {\n\n  public mutating func update<T>(target keyPath: WritableKeyPath<Self, T>, update: (inout T.Wrapped) throws -> Void) rethrows where T : VergeStore._VergeStore_OptionalProtocol\n\n  public mutating func update<T>(target keyPath: WritableKeyPath<Self, T>, update: (inout T) throws -> Void) rethrows\n\n  public mutating func update(update: (inout Self) throws -> Void) rethrows\n}\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"There is ",Object(a.b)("inlineCode",{parentName:"p"},"ExtendedStateType")," from StateType.\nThis provies us to get more stuff that increases performance and productivity.")),Object(a.b)("h2",{id:"normalization"},"Normalization"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"If you put the data that has relation-ship or complicated structure into state tree, it would be needed normalization to keep performance. Please check VergeORM module")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"%5Bhttps://redux.js.org/recipes/structuring-reducers/normalizing-state-shape/%5D(https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape/)"}),"About more Normalization and why we need to do this")))}u.isMDXComponent=!0},168:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(r),b=n,m=l["".concat(i,".").concat(b)]||l[b]||d[b]||a;return r?o.a.createElement(m,c(c({ref:t},p),{},{components:r})):o.a.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);