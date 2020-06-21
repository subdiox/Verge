(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(9),i=(n(0),n(170)),o={id:"optimization-tips",title:"Optimization Tips",sidebar_label:"Optimization Tips"},c={id:"VergeStore/optimization-tips",isDocsHomePage:!1,title:"Optimization Tips",description:"Writing high-performance state-management",source:"@site/docs/VergeStore/optimization-tips.md",permalink:"/Verge/docs/VergeStore/optimization-tips",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/VergeStore/optimization-tips.md",sidebar_label:"Optimization Tips",sidebar:"docs",previous:{title:"Utilities",permalink:"/Verge/docs/VergeStore/utilities"},next:{title:"Migrate from VergeClassic",permalink:"/Verge/docs/VergeStore/migrate-from-classic"}},s=[{value:"Writing high-performance state-management",id:"writing-high-performance-state-management",children:[]},{value:"\ud83c\udfce Performance monitoring",id:"-performance-monitoring",children:[]},{value:"\ud83d\udcf1 SwiftUI",id:"-swiftui",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"writing-high-performance-state-management"},"Writing high-performance state-management"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Simplify the state shape, thinking normalization to reduce the number of operations on mutating."),Object(i.b)("li",{parentName:"ul"},"Passes Changes object as it is if you want to bring the large state tree somewhere.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Since ",Object(i.b)("inlineCode",{parentName:"li"},"Changes")," is a reference type, it reduces the cost of copy."))),Object(i.b)("li",{parentName:"ul"},"Using ExtendedComputedProperty"),Object(i.b)("li",{parentName:"ul"},"Makes the state compatible with Equatable as possible to create a good Derived object"),Object(i.b)("li",{parentName:"ul"},"Reduces creating new Derived object. Instead, share Derived."),Object(i.b)("li",{parentName:"ul"},"Makes Derived with a simple keyPath to enables caching Derived."),Object(i.b)("li",{parentName:"ul"},"Uses Fragment property wrapper to enables Differentiability."),Object(i.b)("li",{parentName:"ul"},"Uses Fragment property wrapper to enables Equatable easily that contains false negative.")),Object(i.b)("h2",{id:"-performance-monitoring"},"\ud83c\udfce Performance monitoring"),Object(i.b)("p",null,"Verge supports ",Object(i.b)("inlineCode",{parentName:"p"},"os_sign_post"),"\nWe can check the performance from Xcode Instruments.\nPlease enables signpost profiling."),Object(i.b)("p",null,Object(i.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/1888355/83345130-80152c00-a34a-11ea-925a-6c6a609be102.png",alt:"CleanShot 2020-05-31 at 14 22 16@2x"}))),Object(i.b)("h2",{id:"-swiftui"},"\ud83d\udcf1 SwiftUI"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"WIP")),Object(i.b)("p",null,"To integrate SwiftUI, we can use ",Object(i.b)("inlineCode",{parentName:"p"},"UseState")," struct or ",Object(i.b)("inlineCode",{parentName:"p"},"@ObservedObject")," property wrapper.\nUseState never doing memory allocations."),Object(i.b)("p",null,"Either way is fine, but UseState enables injecting the state into a specific location of the view hierarchy.\nUsing @ObservedObject updates the whole of view by state updated."),Object(i.b)("p",null,"Injects Store"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"struct MyView: View {\n\n  let: Store<MyState, Never>\n\n  var body: some View {\n    NavigationView {\n      UseState(store) { (state: Changes<MyState>) in\n        ...\n      }\n    }\n  }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"struct MyView: View {\n\n  @ObservedObject var store: Store<MyState, Never>\n\n  var body: some View {\n    NavigationView {\n      ...\n    }\n  }\n}\n")),Object(i.b)("p",null,"Injects Derived"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"struct MyView: View {\n\n  let users: Derived<[Entity.User]>\n\n  var body: some View {\n    UseState(users) { (users: Changes<[Entity.User]>) in\n      ...\n    }\n  }\n}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-swift"}),"struct MyView: View {\n\n  @ObservedObject var users: Derived<[Entity.User]>\n\n  var body: some View {\n    ...\n  }\n}\n")))}l.isMDXComponent=!0},170:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return g}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=r,g=b["".concat(o,".").concat(m)]||b[m]||u[m]||i;return n?a.a.createElement(g,c(c({ref:t},p),{},{components:n})):a.a.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);