(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{152:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return d})),t.d(a,"metadata",(function(){return l})),t.d(a,"rightToc",(function(){return o})),t.d(a,"default",(function(){return p}));var r=t(2),n=t(9),i=(t(0),t(168)),d={id:"middleware",title:"Middleware",sidebar_label:"Middleware"},l={id:"VergeORM/middleware",isDocsHomePage:!1,title:"Middleware",description:"Middleware",source:"@site/docs/VergeORM/middleware.md",permalink:"/Verge/docs/VergeORM/middleware",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/VergeORM/middleware.md",sidebar_label:"Middleware",sidebar:"docs",previous:{title:"Index",permalink:"/Verge/docs/VergeORM/index-table"},next:{title:"Making a Derived for the entity",permalink:"/Verge/docs/VergeORM/making-derived"}},o=[{value:"Perform any operation for each of all updates",id:"perform-any-operation-for-each-of-all-updates",children:[]},{value:"Register Middleware",id:"register-middleware",children:[]},{value:"What middleware handles",id:"what-middleware-handles",children:[]},{value:"Create Middleware",id:"create-middleware",children:[]}],c={rightToc:o};function p(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"middleware"},"Middleware"),Object(i.b)("h2",{id:"perform-any-operation-for-each-of-all-updates"},"Perform any operation for each of all updates"),Object(i.b)("p",null,"Using Middleware, you can perform any operation for each of all updates.\n\u200c\nFor example,"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Manage Index according to updated entities, for each of all updates")),Object(i.b)("h2",{id:"register-middleware"},"Register Middleware"),Object(i.b)("p",null,"In DatabaseType protocol, we can return the set of middlewares. This property would be called for each update."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"struct Database: DatabaseType {\n\n  ...\n\n  var middlewares: [AnyMiddleware<RootState.Database>] {\n    [\n      // Here\n    ]\n  }\n}\n")),Object(i.b)("p",null,"We can return ",Object(i.b)("inlineCode",{parentName:"p"},"MiddlewareType")," object here. However since it's a generic protocol, it needs to wrap up with AnyMiddleware object to return as an array."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"struct AnyMiddleware")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"public struct AnyMiddleware<Database> : MiddlewareType where Database : VergeORM.DatabaseType {\n\n    public init<Base>(_ base: Base) where Database == Base.Database, Base : VergeORM.MiddlewareType\n\n    public init(performAfterUpdates: @escaping (DatabaseBatchUpdateContext<Database>) -> ())\n\n    public func performAfterUpdates(context: DatabaseBatchUpdateContext<Database>)\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"To wrap your middleware up with AnyMiddleware")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"public struct MyMiddleware<Database: DatabaseType>: MiddlewareType {\n  ...\n}\n\nlet middleware = MyMiddleware()\nAnyMiddleware<Database>(middleware)\n")),Object(i.b)("p",null,"To create anonymous middleware using AnyMiddleware"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"AnyMiddleware<Database>(performAfterUpdates: { (context) in\n\n  // ... any operation\n\n})\n")),Object(i.b)("h2",{id:"what-middleware-handles"},"What middleware handles"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"performs any operation with context after updating of batch-updates completed."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MiddlewareType.performAfterUpdates"))))),Object(i.b)("h2",{id:"create-middleware"},"Create Middleware"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"let autoIndex = AnyMiddleware<RootState.Database>(performAfterUpdates: { (context) in\n\n  let ids = context.insertsOrUpdates.author.all().map { $0.id }\n  context.indexes.bookMiddleware.append(contentsOf: ids)\n\n})\n")),Object(i.b)("p",null,"This sample code adds identifier of Author that added on batch-updates.\nThis means it manages Index automatically.\nFinally, returns this object on middlewares property."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"let autoIndex = ...\n\nstruct Database: DatabaseType {\n\n  ...\n\n  var middlewares: [AnyMiddleware<RootState.Database>] {\n    [\n      autoIndex\n    ]\n  }\n}\n")))}p.isMDXComponent=!0},168:function(e,a,t){"use strict";t.d(a,"a",(function(){return s})),t.d(a,"b",(function(){return m}));var r=t(0),n=t.n(r);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function d(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?d(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=n.a.createContext({}),p=function(e){var a=n.a.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},s=function(e){var a=p(e.components);return n.a.createElement(c.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},u=n.a.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=p(t),u=r,m=s["".concat(d,".").concat(u)]||s[u]||b[u]||i;return t?n.a.createElement(m,l(l({ref:a},c),{},{components:t})):n.a.createElement(m,l({ref:a},c))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,d=new Array(i);d[0]=u;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var c=2;c<i;c++)d[c]=t[c];return n.a.createElement.apply(null,d)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);