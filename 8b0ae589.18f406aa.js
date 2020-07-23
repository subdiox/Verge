(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{155:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),i=n(9),o=(n(0),n(171)),a={id:"using-with-collection-view",title:"Using with Collection View in UIKit",sidebar_label:"With Collection View in UIKit"},c={id:"VergeStore/use-cases/using-with-collection-view",isDocsHomePage:!1,title:"Using with Collection View in UIKit",description:"This article is under work in progress.",source:"@site/docs/VergeStore/use-cases/using-with-collection-view.md",permalink:"/Verge/docs/VergeStore/use-cases/using-with-collection-view",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/VergeStore/use-cases/using-with-collection-view.md",sidebar_label:"With Collection View in UIKit",sidebar:"docs",previous:{title:"Optimization Tips",permalink:"/Verge/docs/VergeStore/optimization-tips"},next:{title:"Migrate from VergeClassic",permalink:"/Verge/docs/VergeStore/migrate-from-classic"}},s=[{value:"Using multiple stores to connect with a particular UI",id:"using-multiple-stores-to-connect-with-a-particular-ui",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This article is under work in progress."))),Object(o.b)("p",null,"Differs with SwiftUI, the developers have to update the UI with updates partially according to state updates."),Object(o.b)("p",null,"In a screen that does not have dynamic item contents, it won't be so much hard."),Object(o.b)("p",null,"However, we should consider the strategy of how we update the cells when we use the dynamic list such as UICollectionView or UITableView."),Object(o.b)("p",null,"This article shows you how we get to do this as a one of the strategies."),Object(o.b)("h2",{id:"using-multiple-stores-to-connect-with-a-particular-ui"},"Using multiple stores to connect with a particular UI"),Object(o.b)("p",null,"We have only one store that has the source of truth. This won't change.",Object(o.b)("br",{parentName:"p"}),"\n","Additionally, we could create another store that states will be derived from the source of truth."),Object(o.b)("p",null,"In the below figure, Store, ViewModel, and CellModel are Store."),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"https://user-images.githubusercontent.com/1888355/88272709-18f57180-cd14-11ea-8828-bf189f8cfbf2.png",alt:null}))))}u.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,h=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return n?i.a.createElement(h,c(c({ref:t},l),{},{components:n})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);