"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[4378],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return u}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5014:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],s={title:"Aerospike Configuration Mapping",description:"Aerospike Configuration Mapping"},p=void 0,l={unversionedId:"Aerospike-configuration-mapping",id:"version-1.x.x/Aerospike-configuration-mapping",title:"Aerospike Configuration Mapping",description:"Aerospike Configuration Mapping",source:"@site/versioned_docs/version-1.x.x/Aerospike-configuration-mapping.md",sourceDirName:".",slug:"/Aerospike-configuration-mapping",permalink:"/kubernetes-operator/1.x.x/Aerospike-configuration-mapping",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/versioned_docs/version-1.x.x/Aerospike-configuration-mapping.md",tags:[],version:"1.x.x",frontMatter:{title:"Aerospike Configuration Mapping",description:"Aerospike Configuration Mapping"},sidebar:"version-1.x.x/docsSidebar",previous:{title:"Cluster Configuration Settings",permalink:"/kubernetes-operator/1.x.x/Cluster-configuration-settings"},next:{title:"Rack Awareness",permalink:"/kubernetes-operator/1.x.x/Rack-Awareness"}},c=[{value:"Mapping Between YAML and Aerospike Configuration",id:"mapping-between-yaml-and-aerospike-configuration",children:[],level:2},{value:"Translation Conventions",id:"translation-conventions",children:[{value:"Simple Key and Values",id:"simple-key-and-values",children:[],level:3},{value:"Storage Sizes",id:"storage-sizes",children:[],level:3},{value:"Lists of Simple Values",id:"lists-of-simple-values",children:[],level:3},{value:"Fixed Sections",id:"fixed-sections",children:[],level:3},{value:"Named Sections",id:"named-sections",children:[],level:3},{value:"Typed Sections",id:"typed-sections",children:[],level:3}],level:2},{value:"Complete Example",id:"complete-example",children:[],level:2}],d={toc:c};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"mapping-between-yaml-and-aerospike-configuration"},"Mapping Between YAML and Aerospike Configuration"),(0,i.kt)("p",null,"Kubernetes uses ",(0,i.kt)("a",{parentName:"p",href:"https://YAML.org/"},"YAML")," to express it's configuration whereas the Aerospike DB uses ",(0,i.kt)("a",{parentName:"p",href:"https://docs.aerospike.com/docs/configure/index.md"},"it's own format for configuration")," which it stores in ",(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf"),"."),(0,i.kt)("p",null,"The Aerospike Kubernetes Operator translates it's YAML configurations to the Aerospike server's own ",(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")," format."),(0,i.kt)("p",null,"Different Aerospike DB versions have may have different ",(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")," representations. Please check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/1.0.1/docs/config-schemas"},"config-schemas")," for JSON schemas for all supported versions."),(0,i.kt)("h2",{id:"translation-conventions"},"Translation Conventions"),(0,i.kt)("p",null,"These are the rules we use to translate between Kubernetes' YAML and Aerospike's ",(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")," format."),(0,i.kt)("h3",{id:"simple-key-and-values"},"Simple Key and Values"),(0,i.kt)("p",null,"Simple key value pairs file translate directly with the exception being ",(0,i.kt)("a",{parentName:"p",href:"/kubernetes-operator/1.x.x/Aerospike-configuration-mapping#storage-sizes"},"storage sizes"),"."),(0,i.kt)("p",null,"YAML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"replication-factor: 2\nmemory-size: 4294967296\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"replication-factor 2\nmemory-size 4G\n")),(0,i.kt)("h3",{id:"storage-sizes"},"Storage Sizes"),(0,i.kt)("p",null,"Memory, file, and devices sizes in the YAML format are integers and need to be specified as number of bytes. In ",(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")," one may optionally provide a unit as a string."),(0,i.kt)("p",null,"YAML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"memory-size: 4294967296 # 4G\nmemory-size: 419430400  # 400M\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"memory-size 4G\nmemory-size 400M\n")),(0,i.kt)("h3",{id:"lists-of-simple-values"},"Lists of Simple Values"),(0,i.kt)("p",null,"YAML uses a key's plural form when there are a list of values (and it uses a list type)."),(0,i.kt)("p",null,"Lists of simple values are written in Aerospike by repeating the same configuration key multiple times."),(0,i.kt)("p",null,"YAML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"addresses:\n  - 192.168.1.1\n  - 192.168.5.1\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"address 192.168.1.1\naddress 192.168.5.1\n")),(0,i.kt)("p",null,"YAML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"files:\n  - /opt/aerospike/ns1.dat\n  - /opt/aerospike/ns2.dat\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"file /opt/aerospike/ns1.dat\nfile /opt/aerospike/ns2.dat\n")),(0,i.kt)("h3",{id:"fixed-sections"},"Fixed Sections"),(0,i.kt)("p",null,"The Aerospike configuration has sections grouping parts of the configuration together. The YAML forms of these are represented as maps."),(0,i.kt)("p",null,"YAML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  service-threads: 4\n  proto-fd-max: 15000\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"service {\n  service-threads 4\n  proto-fd-max 15000\n}\n")),(0,i.kt)("h3",{id:"named-sections"},"Named Sections"),(0,i.kt)("p",null,"Named sections which can have multiple named entries in ",(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")," file (eg ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dc"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"datacenter"),", etc.) will be translated to a named list of maps in YAML"),(0,i.kt)("p",null,"The name of the list will be the plural form of the ",(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")," section."),(0,i.kt)("p",null,"YAML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"namespaces:\n  - name: test\n    replication-factor: 2\n    memory-size: 4294967296\n    storage-engine:\n      type: device\n      files:\n        - /opt/aerospike/data/test1.dat\n        - /opt/aerospike/data/test2.dat\n      filesize: 4294967296\n      data-in-memory: true\n  - name: bar\n    replication-factor: 2\n    memory-size: 4294967296\n    storage-engine:\n      type: memory\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"namespace test {\n    replication-factor 2\n    memory-size 4G\n    storage-engine device {\n            file /opt/aerospike/data/test1.dat\n            file /opt/aerospike/data/test2.dat\n            filesize 4G\n            data-in-memory true\n    }\n}\nnamespace bar {\n    replication-factor 2\n    memory-size 4G\n    storage-engine memory\n}\n\n")),(0,i.kt)("h3",{id:"typed-sections"},"Typed Sections"),(0,i.kt)("p",null,"Typed sections have a fixed enum type associated with them in ",(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")," file (eg ",(0,i.kt)("inlineCode",{parentName:"p"},"storage-engine"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"index-type"),", etc.) and will be translated to maps with additional property ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," in YAML.\nThe valid values for type will be the valid enum values for the section."),(0,i.kt)("p",null,"For e.g. storage-engine type property can have values memory, device, pmem."),(0,i.kt)("p",null,"YAML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"namespaces:\n  - name: test\n    .\n    .\n    storage-engine:\n      type: device\n      files:\n        - /opt/aerospike/data/test1.dat\n        - /opt/aerospike/data/test2.dat\n      filesize: 4294967296\n      data-in-memory: true\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"namespace test {\n    .\n    .\n    storage-engine device {\n            file /opt/aerospike/data/test1.dat\n            file /opt/aerospike/data/test2.dat\n            filesize 4G\n            data-in-memory true\n    }\n}\n")),(0,i.kt)("h2",{id:"complete-example"},"Complete Example"),(0,i.kt)("p",null,"YAML"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"service:\n  proto-fd-max: 15000\n\nsecurity:\n  enable-security: true\n\nlogging:\n  - name: console\n    any: info\n  - name: /var/log/aerospike/aerospike.log\n    any: info\n\nxdr:\n  enable-xdr: true\n  xdr-digestlog-path: /opt/aerospike/xdr/digestlog 5G\n  xdr-compression-threshold: 1000\n  datacenters:\n    - name: REMOTE_DC_1\n      dc-node-address-ports:\n       - 172.68.17.123 3000\n      dc-security-config-file: /etc/aerospike/secret/security_credentials_DC1.txt\n\nnamespaces:\n  - name: test\n    enable-xdr: true\n    xdr-remote-datacenter: REMOTE_DC_1\n    replication-factor: 2\n    memory-size: 4294967296\n    storage-engine:\n      type: device\n      files:\n        - /opt/aerospike/data/test.dat\n      filesize: 4294967296\n      data-in-memory: true # Store data in memory in addition to file.\n\nmod-lua:\n  user-path: /opt/aerospike/usr/udf/lua\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"aerospike.conf")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nservice {                # Tuning parameters and process owner\n    proto-fd-max 15000\n}\n\nsecurity {               # (Optional, Enterprise Edition only) to enable\n                         # ACL on the cluster\n    enable-security true\n}\n\nlogging {               # Logging configuration\n    console {\n        context any info\n    }\n    file /var/log/aerospike/aerospike.log {\n        context any info\n    }\n}\n\nxdr {\n    enable-xdr true # Globally enable/disable XDR on local node.\n    xdr-digestlog-path /opt/aerospike/digestlog 5G # Track digests to be shipped.\n    xdr-compression-threshold 1000\n    datacenter REMOTE_DC_1 {\n            dc-node-address-port 172.68.17.123 3000\n            dc-security-config-file /etc/aerospike/secret/security_credentials_DC1.txt\n    }\n}\n\nnamespace test {       # Define namespace record policies and storage engine\n    enable-xdr true\n    xdr-remote-datacenter REMOTE_DC_1\n    replication-factor 2\n    memory-size 4G\n    storage-engine device {\n            file /opt/aerospike/data/test.dat\n            filesize 4G\n            data-in-memory true # Store data in memory in addition to file.\n    }\n}\n\nmod-lua {                # location of UDF modules\n    user-path /opt/aerospike/usr/udf/lua\n}\n")))}m.isMDXComponent=!0}}]);