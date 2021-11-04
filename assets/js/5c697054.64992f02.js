"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[5210],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4025:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],s={title:"XDR",description:"XDR"},c=void 0,l={unversionedId:"XDR",id:"XDR",isDocsHomePage:!1,title:"XDR",description:"XDR",source:"@site/docs/XDR.md",sourceDirName:".",slug:"/XDR",permalink:"/kubernetes-operator/next/XDR",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/docs/XDR.md",tags:[],version:"current",frontMatter:{title:"XDR",description:"XDR"},sidebar:"docsSidebar",previous:{title:"Monitoring",permalink:"/kubernetes-operator/next/Monitoring"},next:{title:"Aerospike Access Control",permalink:"/kubernetes-operator/next/Aerospike-access-control"}},p=[{value:"Enable XDR and create a remote DC",id:"enable-xdr-and-create-a-remote-dc",children:[],level:2},{value:"Remote DC Credentials",id:"remote-dc-credentials",children:[],level:2},{value:"Deploy the cluster",id:"deploy-the-cluster",children:[],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To deploy a cluster as XDR source, you should configure ",(0,a.kt)("inlineCode",{parentName:"p"},"dc-security-config-file")," config in CR file in ",(0,a.kt)("inlineCode",{parentName:"p"},"aerospikeConfig.xdr.datacenter")," section. Also configure ",(0,a.kt)("inlineCode",{parentName:"p"},"dc-node-address-port")," in same section for destination DC. After configuring these values in the CR file  apply CR file to deploy the cluster."),(0,a.kt)("p",null,"For more details, visit ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aerospike.com/docs/configure/cross-datacenter/"},"configure cross-datacenter")),(0,a.kt)("h2",{id:"enable-xdr-and-create-a-remote-dc"},"Enable XDR and create a remote DC"),(0,a.kt)("p",null,"Following is the XDR specific config for the Aerospike cluster CR file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"storage:\n  filesystemVolumePolicy:\n    cascadeDelete: true\n    initMethod: deleteFiles\n  volumes:\n    - name: workdir\n      aerospike:\n        path: /opt/aerospike\n      source:\n        persistentVolume:\n          storageClass: ssd\n          volumeMode: Filesystem\n          size: 1Gi\n    - name: ns\n      aerospike:\n        path: /opt/aerospike/data\n      source:\n        persistentVolume:\n          storageClass: ssd\n          volumeMode: Filesystem\n          size: 3Gi\n    - name: xdr\n      aerospike:\n        path: /opt/aerospike/xdr\n      source:\n        persistentVolume:\n          storageClass: ssd\n          volumeMode: Filesystem\n          size: 3Gi\n    - name: aerospike-config-secret\n      source:\n        secret:\n          secretName: aerospike-secret\n      aerospike:\n        path: /etc/aerospike/secret\n        \n  aerospikeConfig:\n    logging:\n      - name: /var/log/aerospike/aerospike.log\n        any: info\n\n    service:\n      feature-key-file: /etc/aerospike/secret/features.conf\n\n    security:\n      enable-security: true\n\n    network:\n      service:\n        port: 3000\n      fabric:\n        port: 3001\n      heartbeat:\n        port: 3002\n\n    xdr:\n      dcs:\n        - name: dc1\n          node-address-ports:\n            - aeroclusterdst-0-0 3000\n\n          auth-user: admin\n          auth-password-file: /etc/aerospike/secret/password_DC1.txt\n          namespaces:\n            - name: test\n\n    namespaces:\n      - name: test\n        memory-size: 3000000000\n        replication-factor: 2\n        storage-engine:\n          type: device\n          files:\n            - /opt/aerospike/data/test.dat\n          filesize: 2000000000\n          data-in-memory: true\n\n")),(0,a.kt)("p",null,"Get full CR file ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/2.0.0-rc1/config/samples/xdr_src_cluster_cr.yaml"},"here"),"."),(0,a.kt)("h2",{id:"remote-dc-credentials"},"Remote DC Credentials"),(0,a.kt)("p",null,"If destination cluster is security enabled then ",(0,a.kt)("inlineCode",{parentName:"p"},"aerospike-secret")," created in this section should also have ",(0,a.kt)("inlineCode",{parentName:"p"},"security_credentials_DC1.txt")," file for destination DC."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ cat security_credentials_DC1.txt\ncredentials\n{\n   username xdr_user\n   password xdr_pass\n}\n")),(0,a.kt)("h2",{id:"deploy-the-cluster"},"Deploy the cluster"),(0,a.kt)("p",null,"Follow the instructions ",(0,a.kt)("a",{parentName:"p",href:"/kubernetes-operator/next/Create-Aerospike-cluster#deploy-aerospike-cluster"},"here")," to deploy this configuration."))}d.isMDXComponent=!0}}]);