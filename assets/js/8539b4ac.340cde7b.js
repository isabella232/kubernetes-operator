"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[9895],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4770:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={title:"Shadow Device",description:"Shadow Device"},c=void 0,p={unversionedId:"Shadow-device",id:"Shadow-device",title:"Shadow Device",description:"Shadow Device",source:"@site/docs/Shadow-device.md",sourceDirName:".",slug:"/Shadow-device",permalink:"/kubernetes-operator/Shadow-device",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/docs/Shadow-device.md",tags:[],version:"current",frontMatter:{title:"Shadow Device",description:"Shadow Device"},sidebar:"docsSidebar",previous:{title:"HDD Storage With Data In Memory",permalink:"/kubernetes-operator/HDD-storage-with-data-in-memory"}},l=[],u={toc:l};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In cloud environments, the namespace storage engine can be configured to use extremely high-performance cloud instance-attached local SSDs. Under this setup, writes are duplicated to another network-attached shadow device for persistence in case the cloud instance terminates."),(0,a.kt)("p",null,"To set this up, follow the instructions in our ",(0,a.kt)("a",{parentName:"p",href:"/kubernetes-operator/Storage-provisioning"},"storage provisioning guide")," to create a local volume provisioner and appropriate storage class."),(0,a.kt)("p",null,"For more information on using a shadow device and other storage configurations, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.aerospike.com/docs/operations/configure/namespace/storage/index.html"},"see the Aerospike documentation for namespace storage configuration"),"."),(0,a.kt)("p",null,"Next, add the following storage-specific configuration to the Aerospike cluster's CR file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  storage:\n    filesystemVolumePolicy:\n      cascadeDelete: true\n      initMethod: deleteFiles\n    blockVolumePolicy:\n      cascadeDelete: true\n    volumes:\n      - name: workdir\n        aerospike:\n          path: /opt/aerospike\n        source:\n          persistentVolume:\n            storageClass: ssd\n            volumeMode: Filesystem\n            size: 1Gi\n      - name: nsvol1\n        aerospike:\n          path: /dev/nvme0n1\n        source:\n          persistentVolume:\n            storageClass: local-ssd\n            volumeMode: Block\n            size: 5Gi\n      - name: nsvol2\n        aerospike:\n          path: /dev/sdf\n        source:\n          persistentVolume:\n            storageClass: ssd\n            volumeMode: Block\n            size: 5Gi\n      - name: aerospike-config-secret\n        source:\n          secret:\n            secretName: aerospike-secret\n        aerospike:\n          path: /etc/aerospike/secret\n  .\n  .\n  .\n  aerospikeConfig:\n    service:\n      feature-key-file: /etc/aerospike/secret/features.conf\n    security: {}\n    namespaces:\n      - name: test\n        memory-size: 3000000000\n        replication-factor: 2\n        storage-engine:\n          type: device\n          devices:\n            - /dev/nvme0n1 /dev/sdf\n")),(0,a.kt)("p",null,"For the full CR file, see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/blob/2.0.0/config/samples/shadow_device_cluster_cr.yaml"},"example shadow device cluster CR"),"."),(0,a.kt)("p",null,"This and other example CRs are stored in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/master/config/samples"},"the main Aerospike Kubernetes Operator repository"),"."),(0,a.kt)("p",null,"Save and exit the CR file, then use kubectl to apply the change."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f aerospike-cluster.yaml\n")))}d.isMDXComponent=!0}}]);