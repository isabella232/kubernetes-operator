"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[2037],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3766:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={title:"Aerospike Kubernetes Operator",description:"Learn about the Aerospike Kubernetes Operator.",slug:"/"},u=void 0,l={unversionedId:"Intro",id:"Intro",isDocsHomePage:!1,title:"Aerospike Kubernetes Operator",description:"Learn about the Aerospike Kubernetes Operator.",source:"@site/docs/Intro.md",sourceDirName:".",slug:"/",permalink:"/kubernetes-operator/next/",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/docs/Intro.md",tags:[],version:"current",frontMatter:{title:"Aerospike Kubernetes Operator",description:"Learn about the Aerospike Kubernetes Operator.",slug:"/"},sidebar:"docsSidebar",next:{title:"System Requirements",permalink:"/kubernetes-operator/next/System-Requirements"}},p=[{value:"What features does it provide?",id:"what-features-does-it-provide",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Get started",id:"get-started",children:[]},{value:"See also",id:"see-also",children:[]}],c={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Aerospike Kubernetes Operator automates the deployment and management of ",(0,o.kt)("strong",{parentName:"p"},"Aerospike enterprise clusters")," on Kubernetes. The Operator provides a controller that manages a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"Custom Resource Definition (CRD)")," to extend the Kubernetes API for Aerospike Enterprise clusters. Aerospike cluster deployment and life cycle management are performed by updating an Aerospike cluster Custom Resource (CR)."),(0,o.kt)("h2",{id:"what-features-does-it-provide"},"What features does it provide?"),(0,o.kt)("p",null,"The goal of the Operator is to give you the ability to deploy multi-node Aerospike clusters, recover automatically from node failures, scale up or down automatically as load changes, ensure nodes are evenly split across racks or zones, automatically update to new versions of Aerospike and manage configuration changes in your clusters."),(0,o.kt)("p",null,"The Operator supports the following capabilities:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Deploy Aerospike clusters"),(0,o.kt)("li",{parentName:"ul"},"Scale up and down existing Aerospike clusters"),(0,o.kt)("li",{parentName:"ul"},"Version upgrade and downgrade"),(0,o.kt)("li",{parentName:"ul"},"Configure persistent storage and resource allocation"),(0,o.kt)("li",{parentName:"ul"},"Standardize and validate configurations"),(0,o.kt)("li",{parentName:"ul"},"Cluster security management"),(0,o.kt)("li",{parentName:"ul"},"Attach custom sidecars and init containers")),(0,o.kt)("h2",{id:"architecture"},"Architecture"),(0,o.kt)("p",null,"The Aerospike Kubernetes Operator has a custom controller (written in go) that allows us to embed specific lifecycle management logic to effectively manage the state of an Aerospike cluster.  It does so by managing a Custom Resource Definition (CRD) to extend the Kubernetes API for Aerospike clusters.  Regular maintenance to the Aerospike cluster deployment and management can be performed by updating an Aerospike cluster Custom Resource (CR)."),(0,o.kt)("p",null,"The Operator is deployed with StatefulSet and operates as a headless service to handle the DNS resolution of pods in the deployment.  Kubernetes StatefulSets is the workload API object that is used to manage stateful applications.  It is important because it manages the deployment and scaling of a set of Pods, and provides guarantees about the ordering and uniqueness of these Pods (e.g. as unique addressable identities)."),(0,o.kt)("p",null,"A layered approach is taken to orchestration which allows the Operator to manage Aerospike Cluster tasks outside of the Aerospike deployment."),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kubernetes-operator/next/System-Requirements"},"System Requirements")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kubernetes-operator/next/Install-the-Operator-on-Kubernetes"},"Install the Operator on Kubernetes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kubernetes-operator/next/Create-Aerospike-cluster"},"Create an Aerospike cluster"))),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kubernetes.io"},"Kubernetes")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kubernetes-operator/next/Limitations"},"Limitations"))))}d.isMDXComponent=!0}}]);