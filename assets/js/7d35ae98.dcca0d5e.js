"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[6141],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,o(o({ref:t},p),{},{components:n})):r.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5148:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Limitations",description:"Limitations"},s=void 0,c={unversionedId:"Limitations",id:"version-1.x.x/Limitations",isDocsHomePage:!1,title:"Limitations",description:"Limitations",source:"@site/versioned_docs/version-1.x.x/Limitations.md",sourceDirName:".",slug:"/Limitations",permalink:"/kubernetes-operator/Limitations",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/versioned_docs/version-1.x.x/Limitations.md",tags:[],version:"1.x.x",frontMatter:{title:"Limitations",description:"Limitations"},sidebar:"version-1.x.x/docsSidebar",previous:{title:"Troubleshooting",permalink:"/kubernetes-operator/Troubleshooting"},next:{title:"Cluster Configuration Settings",permalink:"/kubernetes-operator/Cluster-configuration-settings"}},p=[{value:"General",id:"general",children:[],level:2},{value:"When updating a cluster",id:"when-updating-a-cluster",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"general"},"General"),(0,i.kt)("p",null,"The following restrictions are currently in place and apply to any cluster managed by the operator."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"aerospikeConfig cannot be empty"),(0,i.kt)("li",{parentName:"ul"},"aerospikeConfig.namespace cannot be nil or empty"),(0,i.kt)("li",{parentName:"ul"},"ca-path in TLS config not allowed, Only ca-file is allowed"),(0,i.kt)("li",{parentName:"ul"},"Strong consistency mode not yet supported"),(0,i.kt)("li",{parentName:"ul"},"Warm restart not yet supported"),(0,i.kt)("li",{parentName:"ul"},"All flash not yet supported")),(0,i.kt)("h2",{id:"when-updating-a-cluster"},"When updating a cluster"),(0,i.kt)("p",null,"The following restrictions apply to an already deployed cluster:"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Although they can't be updated in place, BlockStorage, FileStorage, MultiPodPerHost, and Namespace storage can be adjusted using the ",(0,i.kt)("a",{parentName:"p",href:"/kubernetes-operator/Scaling-namespace-storage"},"workaround described here"),"."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Storage.Volumes config cannot be updated"),(0,i.kt)("li",{parentName:"ul"},"MultiPodPerHost cannot be updated"),(0,i.kt)("li",{parentName:"ul"},'Cluster security config flag "enable-security" cannot be updated after the first deployment'),(0,i.kt)("li",{parentName:"ul"},"TLS config cannot be updated"),(0,i.kt)("li",{parentName:"ul"},"aerospikeConfig.namespace.replication-factor cannot be updated"),(0,i.kt)("li",{parentName:"ul"},"Persistent Aerospike namespace cannot be added dynamically"),(0,i.kt)("li",{parentName:"ul"},"Namespace storage device cannot be resized. No new storage device can be added")),(0,i.kt)("p",null,"These values cannot be given in aerospikeConfig in yaml config file. These are fixed or determined at runtime."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"service.node-id"),(0,i.kt)("li",{parentName:"ul"},"service.cluster-name"),(0,i.kt)("li",{parentName:"ul"},"network.service.port"),(0,i.kt)("li",{parentName:"ul"},"network.service.access-port"),(0,i.kt)("li",{parentName:"ul"},"network.service.alternate-access-port"),(0,i.kt)("li",{parentName:"ul"},"network.service.alternate-access-address"),(0,i.kt)("li",{parentName:"ul"},"network.service.tls-port"),(0,i.kt)("li",{parentName:"ul"},"network.service.tls-access-port"),(0,i.kt)("li",{parentName:"ul"},"network.service.tls-access-address"),(0,i.kt)("li",{parentName:"ul"},"network.service.tls-alternate-access-port"),(0,i.kt)("li",{parentName:"ul"},"network.service.tls-alternate-access-address"),(0,i.kt)("li",{parentName:"ul"},"network.heartbeat.mode"),(0,i.kt)("li",{parentName:"ul"},"network.heartbeat.port"),(0,i.kt)("li",{parentName:"ul"},"network.heartbeat.tls-port"),(0,i.kt)("li",{parentName:"ul"},"network.fabric.port"),(0,i.kt)("li",{parentName:"ul"},"network.fabric.tls-port")))}d.isMDXComponent=!0}}]);