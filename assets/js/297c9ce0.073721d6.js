"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[5580],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(k,a(a({ref:t},p),{},{components:n})):r.createElement(k,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8861:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(3117),o=n(102),s=(n(7294),n(3905)),a=["components"],i={title:"Connect To The Aerospike Cluster",description:"Connect To The Aerospike Cluster"},l=void 0,c={unversionedId:"Connect-to-the-Aerospike-cluster",id:"version-1.x.x/Connect-to-the-Aerospike-cluster",isDocsHomePage:!1,title:"Connect To The Aerospike Cluster",description:"Connect To The Aerospike Cluster",source:"@site/versioned_docs/version-1.x.x/Connect-to-the-Aerospike-cluster.md",sourceDirName:".",slug:"/Connect-to-the-Aerospike-cluster",permalink:"/kubernetes-operator/Connect-to-the-Aerospike-cluster",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/versioned_docs/version-1.x.x/Connect-to-the-Aerospike-cluster.md",tags:[],version:"1.x.x",frontMatter:{title:"Connect To The Aerospike Cluster",description:"Connect To The Aerospike Cluster"},sidebar:"version-1.x.x/docsSidebar",previous:{title:"Create Aerospike Cluster",permalink:"/kubernetes-operator/Create-Aerospike-cluster"},next:{title:"Troubleshooting",permalink:"/kubernetes-operator/Troubleshooting"}},p=[{value:"Port access",id:"port-access",children:[],level:2},{value:"Obtain the Aerospike node endpoints",id:"obtain-the-aerospike-node-endpoints",children:[],level:2},{value:"Connecting to the cluster",id:"connecting-to-the-cluster",children:[{value:"With client",id:"with-client",children:[],level:3},{value:"With asadm",id:"with-asadm",children:[],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can connect to an Aerospike cluster deployed by Aerospike Kubernetes Operator through asadm or through applications that use Aerospike client libraries. "),(0,s.kt)("h2",{id:"port-access"},"Port access"),(0,s.kt)("p",null,"When the Aerospike cluster is deployed in a single pod per Kubernetes host mode, ports ",(0,s.kt)("inlineCode",{parentName:"p"},"3000 (service port)")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"4333 (TLS port)")," on all Kubernetes hosts should be accessible to all client and tools."),(0,s.kt)("p",null,"When the Aerospike cluster is configured to have multiple pods per Kubernetes host mode, port-range ",(0,s.kt)("inlineCode",{parentName:"p"},"(30000\u201332767)")," on all Kubernetes hosts should be accessible to all client and tools."),(0,s.kt)("p",null,"Configure the firewall rules for the Kubernetes cluster accordingly."),(0,s.kt)("p",null,"Also see ",(0,s.kt)("a",{parentName:"p",href:"/kubernetes-operator/Cluster-configuration-settings"},"Cluster-configuration-settings")," file for the use of ",(0,s.kt)("inlineCode",{parentName:"p"},"multiPodPerHost")," setting."),(0,s.kt)("h2",{id:"obtain-the-aerospike-node-endpoints"},"Obtain the Aerospike node endpoints"),(0,s.kt)("p",null,"Run the kubectl describe command to get the IP addresses and port numbers:"),(0,s.kt)("p",null," kubectl -n <Kubernetes_namespace> describe aerospikecluster <Aerospike_cluster>"),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},"Status > Pods*")," section provides pod-wise access, alternate access, TLS access, and TLS alternate access endpoints as well as TLS name (if TLS is configured) to be used to access the cluster."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl -n aerospike describe aerospikecluster aerocluster\nName:         aerocluster\nNamespace:    aerospike\nLabels:       <none>\nAnnotations:  API Version:  aerospike.com/v1alpha1\nAPI Version:  aerospike.com/v1alpha1\nKind:         AerospikeCluster\n.\n.\n.\nStatus:\n  Aerospike Access Control:\n    Users:\n      Name:  admin\n      Roles:\n        sys-admin\n        user-admin\n      Secret Name:  auth-secret\n  Aerospike Config:\n    Logging:\n      Any:         info\n      Clustering:  debug\n      Name:        /var/log/aerospike/aerospike.log\n      Any:         info\n      Name:        console\n    Namespaces:\n      Memory - Size:         3000000000\n      Name:                  test\n      Replication - Factor:  2\n      Storage - Engine:      memory\n.\n.\n.\n  Pods:\n    aerocluster-0-0:\n      Aerospike:\n        Access Endpoints:\n          10.128.15.225:31312\n        Alternate Access Endpoints:\n          34.70.193.192:31312\n        Cluster Name:  aerocluster\n        Node ID:       0a0\n        Tls Access Endpoints:\n        Tls Alternate Access Endpoints:\n        Tls Name:\n      Host External IP:  34.70.193.192\n      Host Internal IP:  10.128.15.225\n      Image:             aerospike/aerospike-server-enterprise:5.2.0.7\n      Initialized Volume Paths:\n        /opt/aerospike\n      Pod IP:        10.0.4.6\n      Pod Port:      3000\n      Service Port:  31312\n    aerocluster-0-1:\n      Aerospike:\n        Access Endpoints:\n          10.128.15.226:30196\n        Alternate Access Endpoints:\n          35.192.88.52:30196\n        Cluster Name:  aerocluster\n        Node ID:       0a1\n        Tls Access Endpoints:\n        Tls Alternate Access Endpoints:\n        Tls Name:\n      Host External IP:  35.192.88.52\n      Host Internal IP:  10.128.15.226\n      Image:             aerospike/aerospike-server-enterprise:5.2.0.7\n      Initialized Volume Paths:\n        /opt/aerospike\n      Pod IP:        10.0.5.8\n      Pod Port:      3000\n      Service Port:  30196\n\n")),(0,s.kt)("h2",{id:"connecting-to-the-cluster"},"Connecting to the cluster"),(0,s.kt)("p",null,"When connecting from outside the Kubernetes cluster network, you need to use the host external IPs. By default, the Operator configures access endpoints to use Kubernetes host internal IPs and alternate access endpoints to use host external IPs."),(0,s.kt)("p",null,"Please refer to ",(0,s.kt)("a",{parentName:"p",href:"/kubernetes-operator/Cluster-configuration-settings#network-policy"},"network policy")," configuration for details."),(0,s.kt)("p",null,"From the example status output, for pod aerocluster-0-0, the alternate access endpoint is 34.70.193.192:31312"),(0,s.kt)("h3",{id:"with-client"},"With client"),(0,s.kt)("p",null,"To use a client from outside the Kubernetes network using external IPs set the following for the client policy using appropriate client API."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"host: 34.70.193.192\nport: :31312\nusername: admin\npassword: admin123 # based on the configured secret\nuse-services-alternate: true\n")),(0,s.kt)("p",null,"To use asadm from within the Kubernetes network run"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"host: 10.128.15.225\nport: :31312\nusername: admin\npassword: admin123 # based on the configured secret\nuse-services-alternate: false\n")),(0,s.kt)("h3",{id:"with-asadm"},"With asadm"),(0,s.kt)("p",null,"With kubectl"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"# kubectl run -it --rm --restart=Never aerospike-tool -n aerospike --image=aerospike/aerospike-tools:latest -- asadm -h <cluster-name> -U <user> -P <password>\nkubectl run -it --rm --restart=Never aerospike-tool -n aerospike --image=aerospike/aerospike-tools:latest -- asadm -h aeroclustersrc -U admin -P admin123\n")),(0,s.kt)("p",null,"To use asadm from outside the Kubernetes network:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"$ asadm -h 34.70.193.192:31312 -U admin -P admin123 --services-alternate\n")),(0,s.kt)("p",null,"To use asadm from within the Kubernetes network:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"$ asadm -h 10.128.15.225:31312 -U admin -P admin123\n")))}d.isMDXComponent=!0}}]);