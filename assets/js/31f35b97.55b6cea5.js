"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[8452],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return m}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function s(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?s(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},s=Object.keys(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)a=s[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),c=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?t.createElement(k,i(i({ref:n},p),{},{components:a})):t.createElement(k,i({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<s;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9269:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=a(7462),r=a(3366),s=(a(7294),a(3905)),i=["components"],o={title:"Rack Awareness",description:"Rack Awareness"},l=void 0,c={unversionedId:"Rack-Awareness",id:"Rack-Awareness",isDocsHomePage:!1,title:"Rack Awareness",description:"Rack Awareness",source:"@site/docs/Rack-Awareness.md",sourceDirName:".",slug:"/Rack-Awareness",permalink:"/kubernetes-operator/next/Rack-Awareness",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/docs/Rack-Awareness.md",tags:[],version:"current",frontMatter:{title:"Rack Awareness",description:"Rack Awareness"},sidebar:"docsSidebar",previous:{title:"Aerospike Configuration Mapping",permalink:"/kubernetes-operator/next/Aerospike-configuration-mapping"},next:{title:"Multiple Aerospike Clusters",permalink:"/kubernetes-operator/next/Multiple-Aerospike-clusters"}},p=[{value:"Add Rack Awareness",id:"add-rack-awareness",children:[],level:2},{value:"Cluster Node Distribution",id:"cluster-node-distribution",children:[],level:2},{value:"Add a New Rack",id:"add-a-new-rack",children:[],level:2},{value:"Set Rack-Level Storage and aerospikeConfig",id:"set-rack-level-storage-and-aerospikeconfig",children:[],level:2},{value:"Merge AerospikeConfig",id:"merge-aerospikeconfig",children:[],level:2},{value:"Remove a Rack",id:"remove-a-rack",children:[],level:2},{value:"Simultaneously Add and Remove Racks",id:"simultaneously-add-and-remove-racks",children:[],level:2}],u={toc:p};function d(e){var n=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'In many situations, it\'s considered a "best practice" to build clusters which span multiple availability zones. Aerospike\u2019s Rack Awareness feature lets you split your database across multiple racks or zones.'),(0,s.kt)("p",null,"For example, if you set a replication factor of 2, the master copy of the partition and its replica are stored on separate hardware failure groups."),(0,s.kt)("p",null,"Rack Awareness also provides a mechanism which lets database clients read from servers in their nearest rack or zone on a preferential basis. This can provide lower latency, increase stability, and significantly reduce traffic charges by limiting cross-availability-zone traffic."),(0,s.kt)("p",null,"For more information, ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aerospike.com/docs/architecture/rack-aware.html"},"see the documentation on Aerospike Rack Awareness"),"."),(0,s.kt)("h2",{id:"add-rack-awareness"},"Add Rack Awareness"),(0,s.kt)("p",null,"This example adds Rack Awareness to an existing Aerospike cluster CR file."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"  rackConfig:\n    namespaces:\n      - test\n    racks:\n      - id: 1\n        zone: us-central1-b\n        aerospikeConfig:\n          service:\n            proto-fd-max: 18000\n        storage:\n          filesystemVolumePolicy:\n            initMethod: deleteFiles\n            cascadeDelete: true\n          blockVolumePolicy:\n            cascadeDelete: true\n          volumes:\n            - storageClass: ssd\n              path: /opt/aerospike\n              volumeMode: filesystem\n              sizeInGB: 1\n            - path: /opt/aerospike/data\n              storageClass: ssd\n              volumeMode: filesystem\n              sizeInGB: 3\n      - id: 2\n        zone: us-central1-a\n        aerospikeConfig:\n          service:\n            proto-fd-max: 16000\n  .\n  .\n  .\n  aerospikeConfig:\n    service:\n      feature-key-file: /etc/aerospike/secret/features.conf\n    security:\n      enable-security: true\n    namespaces:\n      - name: test\n        memory-size: 3000000000\n        replication-factor: 1\n        storage-engine:\n          type: device\n          files:\n            - /opt/aerospike/data/test.dat\n          filesize: 2000000000\n          data-in-memory: true\n      - name: testMem\n        memory-size: 3000000000\n        replication-factor: 1\n        storage-engine:\n          type: memory\n")),(0,s.kt)("p",null,"Save and exit the CR file, then use kubectl to apply the change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f aerospike-cluster.yaml\n")),(0,s.kt)("p",null,"For the full CR file, see the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/blob/master/config/samples/rack_enabled_cluster_cr.yaml"},"example rack-enabled cluster CR"),"."),(0,s.kt)("p",null,"This and other example CRs are stored in ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/master/config/samples"},"the main Aerospike Kubernetes Operator repository"),"."),(0,s.kt)("h2",{id:"cluster-node-distribution"},"Cluster Node Distribution"),(0,s.kt)("p",null,"Cluster nodes are distributed across racks as evenly as possible. The cluster size is divided by the number of racks to determine how many nodes per rack. Any remainder nodes are distributed one-by-one across racks starting from the first rack."),(0,s.kt)("p",null,"For example, in a setup with 10 nodes spread across 4 racks, the topology is:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Rack 1: 3 nodes"),(0,s.kt)("li",{parentName:"ul"},"Rack 2: 3 nodes"),(0,s.kt)("li",{parentName:"ul"},"Rack 3: 2 nodes"),(0,s.kt)("li",{parentName:"ul"},"Rack 4: 2 nodes")),(0,s.kt)("h2",{id:"add-a-new-rack"},"Add a New Rack"),(0,s.kt)("p",null,"To add a new rack, add a new section to the CR file under the ",(0,s.kt)("inlineCode",{parentName:"p"},"rackConfig.racks")," section. Use kubectl to apply this update."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"  rackConfig:\n    namespaces:\n      - test\n    racks:\n      .\n      .\n      .\n      - id: 3\n        zone: us-central1-c\n")),(0,s.kt)("p",null,"Save and exit the CR file, then use kubectl to apply the change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f aerospike-cluster.yaml\n")),(0,s.kt)("p",null,"The Aerospike Kubernetes Operator redistributes cluster nodes across racks whenever the cluster size or the number of racks changes. If you add a rack without increasing the cluster size, the nodes are redistributed. The number of nodes on existing racks is scaled down, and the number of nodes on the new rack is scaled up, per the usual topology rules."),(0,s.kt)("h2",{id:"set-rack-level-storage-and-aerospikeconfig"},"Set Rack-Level Storage and aerospikeConfig"),(0,s.kt)("p",null,"Aerospike's Rack Awareness lets you set local storage and aerospikeConfig options. If you provide local storage for a rack, the rack uses this storage. Otherwise, common global storage is used."),(0,s.kt)("p",null,"In the following example, the aerospikeConfig is a patch which is used for the rack, and merged with the common global aerospikeConfig."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"  rackConfig:\n    namespaces:\n      - test\n    racks:\n      - id: 1\n        zone: us-central1-b\n\n        aerospikeConfig:\n          service:\n            proto-fd-max: 18000\n\n        storage:\n          filesystemVolumePolicy:\n            cascadeDelete: true\n            initMethod: deleteFiles\n          volumes:\n            - name: workdir\n              aerospike:\n                path: /opt/aerospike\n              source:\n                persistentVolume:\n                  storageClass: ssd\n                  volumeMode: Filesystem\n                  size: 1Gi\n            - name: ns\n              aerospike:\n                path: /opt/aerospike/data\n              source:\n                persistentVolume:\n                  storageClass: ssd\n                  volumeMode: Filesystem\n                  size: 3Gi\n            - name: aerospike-config-secret\n              source:\n                secret:\n                  secretName: aerospike-secret\n              aerospike:\n                path: /etc/aerospike/secret\n")),(0,s.kt)("p",null,"Save and exit the CR file, then use kubectl to apply the change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f aerospike-cluster.yaml\n")),(0,s.kt)("h2",{id:"merge-aerospikeconfig"},"Merge AerospikeConfig"),(0,s.kt)("p",null,"A rack's local aerospikeConfig patch is merged with the common global base aerospikeConfig based on the following rules:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"New elements from the patch configMap are added to the base configMap."),(0,s.kt)("li",{parentName:"ul"},"A base element is replaced with a new patch element if:",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"The element value type is changed."),(0,s.kt)("li",{parentName:"ul"},"The element value is a primitive type and updated."),(0,s.kt)("li",{parentName:"ul"},"The element value is a primitive list type and updated."),(0,s.kt)("li",{parentName:"ul"},"The element key is ",(0,s.kt)("inlineCode",{parentName:"li"},"storage-engine")," and the storage-engine type has been changed (storage-engine can be of ",(0,s.kt)("inlineCode",{parentName:"li"},"device"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"file"),", or ",(0,s.kt)("inlineCode",{parentName:"li"},"memory")," type)."))),(0,s.kt)("li",{parentName:"ul"},"If the element is of map type, patch and base elements is recursively merged."),(0,s.kt)("li",{parentName:"ul"},"If the elements are list of maps, new list elements in the patch list is appended to the base list and corresponding entries are merged using the same merge algorithm.",(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},"The order of elements in the base list is maintained."),(0,s.kt)("li",{parentName:"ul"},"Corresponding entries are found by matching the special ",(0,s.kt)("inlineCode",{parentName:"li"},"name")," key in maps."),(0,s.kt)("li",{parentName:"ul"},"This list of maps is actually a map of maps."),(0,s.kt)("li",{parentName:"ul"},"Main map keys are added in sub-map with key as ",(0,s.kt)("inlineCode",{parentName:"li"},"name")," to convert a map of maps to a list of maps.")))),(0,s.kt)("p",null,"As an example, here is the original rack-local aerospikeConfig and common global aerospikeConfig:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"  rackConfig:\n    racks:\n        aerospikeConfig:\n          service:\n            proto-fd-max: 18000\n          namespaces:\n            - name: test\n              storage-engine:\n                type: device\n                devices:\n                  - /dev/nvme0n2 /dev/sdf2\n            - name: bar\n              memory-size: 6000000000\n              storage-engine:\n                type: memory\n.\n.\n.\n  aerospikeConfig:\n    service:\n      feature-key-file: /etc/aerospike/secret/features.conf\n    security:\n      enable-security: true\n    namespaces:\n      - name: test\n        memory-size: 3000000000\n        replication-factor: 2\n        storage-engine:\n          type: device\n          devices:\n            - /dev/nvme0n1 /dev/sdf\n      - name: bar\n        memory-size: 3000000000\n        replication-factor: 2\n        storage-engine:\n          type: device\n          devices:\n            - /dev/nvme0n10 /dev/sdf10\n")),(0,s.kt)("p",null,"After merging the rack-local aerospikeConfig with the common global aerospikeConfig:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"  aerospikeConfig:\n    service:\n      proto-fd-max: 18000\n      feature-key-file: /etc/aerospike/secret/features.conf\n    security:\n      enable-security: true\n    namespaces:\n      - name: test\n        memory-size: 3000000000\n        replication-factor: 2\n        # storage-engine type is not changed hence its merged recursively\n        storage-engine:\n          type: device\n          devices:\n            - /dev/nvme0n2 /dev/sdf2\n      - name: bar\n        memory-size: 6000000000\n        replication-factor: 2\n        # storage-engine type is changed hence its replaced\n        storage-engine:\n          type: memory\n")),(0,s.kt)("p",null,"Save and exit the CR file, then use kubectl to apply the change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f aerospike-cluster.yaml\n")),(0,s.kt)("h2",{id:"remove-a-rack"},"Remove a Rack"),(0,s.kt)("p",null,"To remove a rack, delete that rack's section from the ",(0,s.kt)("inlineCode",{parentName:"p"},"rackConfig.racks")," section, then use kubectl to apply the new configuration."),(0,s.kt)("p",null,"The Aerospike Kubernetes Operator scales down the desired rack to size 0 by removing one node at a time from the rack. After all the nodes have been removed, the rack is removed. If you are removing a rack without decreasing cluster size, other racks are scaled up based on new node redistribution."),(0,s.kt)("h2",{id:"simultaneously-add-and-remove-racks"},"Simultaneously Add and Remove Racks"),(0,s.kt)("p",null,"If the Operator has to scale up some racks and scale down other racks in single call, the Operator always scales up first and scales down second. As a result, for a short time during the procedure, the actual cluster size may be larger than the desired cluster size."))}d.isMDXComponent=!0}}]);