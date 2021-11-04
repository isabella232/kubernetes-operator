"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[6086],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1891:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],s={title:"HDD Storage With Data In Index",description:"HDD Storage With Data In Index"},c=void 0,p={unversionedId:"HDD-storage-with-data-in-index",id:"version-1.x.x/HDD-storage-with-data-in-index",isDocsHomePage:!1,title:"HDD Storage With Data In Index",description:"HDD Storage With Data In Index",source:"@site/versioned_docs/version-1.x.x/HDD-storage-with-data-in-index.md",sourceDirName:".",slug:"/HDD-storage-with-data-in-index",permalink:"/kubernetes-operator/HDD-storage-with-data-in-index",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/versioned_docs/version-1.x.x/HDD-storage-with-data-in-index.md",tags:[],version:"1.x.x",frontMatter:{title:"HDD Storage With Data In Index",description:"HDD Storage With Data In Index"},sidebar:"version-1.x.x/docsSidebar",previous:{title:"Data On SSD",permalink:"/kubernetes-operator/Data-on-SSD"},next:{title:"HDD Storage With Data In Memory",permalink:"/kubernetes-operator/HDD-storage-with-data-in-memory"}},l=[{value:"Create the namespace configuration",id:"create-the-namespace-configuration",children:[],level:2},{value:"Deploy the cluster",id:"deploy-the-cluster",children:[],level:2}],u={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here we provide configuration for a specialized namespace where records have a single-bin and fit in 8 bytes."),(0,o.kt)("p",null,"For more details, visit ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aerospike.com/docs/configure/namespace/storage/#recipe-for-a-hdd-storage-engine-with-data-in-index-engine"},"configuration of HDD Storage Engine with Data in Index Engine"),"."),(0,o.kt)("h2",{id:"create-the-namespace-configuration"},"Create the namespace configuration"),(0,o.kt)("p",null,"Following is the storage-specific config for the Aerospike cluster CR file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"storage:\n    volumes:\n      - path: /opt/aerospike\n        storageClass: ssd\n        volumeMode: filesystem\n        sizeInGB: 1\n      - path: /opt/aerospike/data/test\n        storageClass: ssd\n        volumeMode: filesystem\n        sizeInGB: 3\n      - path: /opt/aerospike/data/bar\n        storageClass: ssd\n        volumeMode: filesystem\n        sizeInGB: 3\n  .\n  .\n  .\n  aerospikeConfig:\n    service:\n      feature-key-file: /etc/aerospike/secret/features.conf\n    security:\n      enable-security: true\n    namespaces:\n      - name: test\n        memory-size: 2000000000\n        single-bin: true\n        data-in-index: true\n        replication-factor: 1\n        storage-engine:\n          type: device\n          files:\n            - /opt/aerospike/data/test/test.dat\n          filesize: 2000000000\n          data-in-memory: true\n      - name: bar\n        memory-size: 3000000000\n        single-bin: true\n        data-in-index: true\n        replication-factor: 1\n        storage-engine:\n          type: device\n          files:\n            - /opt/aerospike/data/bar/bar.dat\n          filesize: 2000000000\n          data-in-memory: true\n")),(0,o.kt)("p",null,"Get full CR file ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/1.0.1/deploy/samples/hdd_dii_storage_cluster_cr.yaml"},"here"),"."),(0,o.kt)("h2",{id:"deploy-the-cluster"},"Deploy the cluster"),(0,o.kt)("p",null,"Follow the instructions ",(0,o.kt)("a",{parentName:"p",href:"/kubernetes-operator/Create-Aerospike-cluster#deploy-aerospike-cluster"},"here")," to deploy this configuration."))}d.isMDXComponent=!0}}]);