(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var i=n(2),a=n(9),r=(n(0),n(171)),c={id:"migrate-from-classic",title:"Migrate from VergeClassic",sidebar_label:"Migrate from VergeClassic"},o={id:"VergeStore/migrate-from-classic",isDocsHomePage:!1,title:"Migrate from VergeClassic",description:"For the users who using VergeClassic, recommend updating to new Verge.",source:"@site/docs/VergeStore/migrate-from-classic.md",permalink:"/Verge/docs/VergeStore/migrate-from-classic",editUrl:"https://github.com/VergeGroup/Verge/docs/docs/VergeStore/migrate-from-classic.md",sidebar_label:"Migrate from VergeClassic",sidebar:"docs",previous:{title:"Using with Collection View in UIKit",permalink:"/Verge/docs/VergeStore/use-cases/using-with-collection-view"},next:{title:"Overview",permalink:"/Verge/docs/VergeORM/Overview"}},s=[{value:"Migrate State Container (ViewModel)",id:"migrate-state-container-viewmodel",children:[]},{value:"Migrate how subscribing the state and activity",id:"migrate-how-subscribing-the-state-and-activity",children:[{value:"With plain style",id:"with-plain-style",children:[]},{value:"With RxSwift",id:"with-rxswift",children:[]},{value:"With Combine",id:"with-combine",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"For the users who using VergeClassic, recommend updating to new Verge.\nHere shows most easy way to get it.\nHere is typical ViewModel that using ",Object(r.b)("inlineCode",{parentName:"p"},"VergeType")),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),'public final class ViewModel : VergeType {\n\n  public enum Activity {\n\n  }\n\n  public struct State {\n\n    var state1: String = ""\n    var state2: String = ""\n    var state3: String = ""\n  }\n\n  public let state: Storage<ViewModel.State>\n\n  public init() {\n    self.state = .init(.init())\n  }\n\n  func setSomeData() {\n\n    commit { s in\n      s.state1 = "hello"\n    }\n  }\n}\n')),Object(r.b)("h2",{id:"migrate-state-container-viewmodel"},"Migrate State Container (ViewModel)"),Object(r.b)("p",null,"To be up to date, we can use StoreWrapperType.\nOverall, it's just changing to store from storage which manage current state."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),'public final class ViewModel : StoreWrapperType {\n\n  public enum Activity {\n\n  }\n\n  public struct State: Equatable {\n\n    var state1: String = ""\n    var state2: String = ""\n    var state3: String = ""\n  }\n\n  public let store: DefaultStore\n\n  public init() {\n    self.store = .init(initialState: .init(), logger: nil)\n  }\n\n  func setSomeData() {\n\n    commit { s in\n      s.state1 = "hello"\n    }\n  }\n}\n')),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"State type should have Equatable if it's possible.\nIt gains better performance on Derived."))),Object(r.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(i.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(i.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(i.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(r.b)("div",Object(i.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"dispatch has been obsoleted.\nInstead, method means dispatch commit"))),Object(r.b)("h2",{id:"migrate-how-subscribing-the-state-and-activity"},"Migrate how subscribing the state and activity"),Object(r.b)("h3",{id:"with-plain-style"},"With plain style"),Object(r.b)("p",null,"Get or subscribe a value with no any reactive frameworks dependency."),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),"let _: ViewModel.State = viewModel.primitiveState\n\nlet _: Changes<ViewModel.State> = viewModel.state\n\nviewModel.sinkState { (changes: Changes<ViewModel.State>) in\n\n}\n\nviewModel.sinkActivity { (activity: ViewModel.Activity) in\n\n}\n")),Object(r.b)("h3",{id:"with-rxswift"},"With RxSwift"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),"let _: Observable<Changes<ViewModel.State>> = viewModel.rx.stateObservable()\n\nlet _: Signal<ViewModel.Activity> = viewModel.rx.activitySignal\n")),Object(r.b)("h3",{id:"with-combine"},"With Combine"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-swift"}),"let _: AnyPublisher<ViewModel.State, Never> = viewModel.statePublisher()\nlet _: EventEmitter<ViewModel.Activity>.Publisher = viewModel.activityPublisher\n")))}b.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=b(n),m=i,u=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return n?a.a.createElement(u,o(o({ref:t},l),{},{components:n})):a.a.createElement(u,o({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,c[1]=o;for(var l=2;l<r;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);