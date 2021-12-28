"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[4575],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return t?n.createElement(k,s(s({ref:r},c),{},{components:t})):n.createElement(k,s({ref:r},c))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},268:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),s=["components"],i={title:"Multiple Aerospike Clusters",description:"Multiple Aerospike Clusters"},l=void 0,p={unversionedId:"Multiple-Aerospike-clusters",id:"Multiple-Aerospike-clusters",title:"Multiple Aerospike Clusters",description:"Multiple Aerospike Clusters",source:"@site/docs/Multiple-Aerospike-clusters.md",sourceDirName:".",slug:"/Multiple-Aerospike-clusters",permalink:"/kubernetes-operator/Multiple-Aerospike-clusters",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/docs/Multiple-Aerospike-clusters.md",tags:[],version:"current",frontMatter:{title:"Multiple Aerospike Clusters",description:"Multiple Aerospike Clusters"},sidebar:"docsSidebar",previous:{title:"Rack Awareness",permalink:"/kubernetes-operator/Rack-Awareness"},next:{title:"Monitoring",permalink:"/kubernetes-operator/Monitoring"}},c=[{value:"Multiple Aerospike Clusters in a Single Namespace",id:"multiple-aerospike-clusters-in-a-single-namespace",children:[],level:2},{value:"RBAC for Other Namespaces",id:"rbac-for-other-namespaces",children:[],level:2}],u={toc:c};function m(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Aerospike Kubernetes Operator can deploy multiple Aerospike clusters within a single Kubernetes namespace, or in multiple namespaces."),(0,o.kt)("h2",{id:"multiple-aerospike-clusters-in-a-single-namespace"},"Multiple Aerospike Clusters in a Single Namespace"),(0,o.kt)("p",null,"You can deploy multiple clusters in a single namespace using the same process as deploying a single cluster. When you deploy another cluster, use a cluster name which is not already registered in that namespace as described by the cluster object metadata name in the CR YAML file."),(0,o.kt)("h2",{id:"rbac-for-other-namespaces"},"RBAC for Other Namespaces"),(0,o.kt)("p",null,"If you deploy and manage Aerospike clusters in the Operator's namespace, no additional RBAC configuration is necessary."),(0,o.kt)("p",null,"For clusters in namespaces other than the Operator's namespace, create a service account with the name ",(0,o.kt)("inlineCode",{parentName:"p"},"aerospike-operator-controller-manager")," in that namespace."),(0,o.kt)("p",null,"For example, the kubectl command to create this service account in the namespace ns1 is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n ns1 create  serviceaccount aerospike-operator-controller-manager\n")),(0,o.kt)("p",null,"Next, add this service account to the Operator's ",(0,o.kt)("inlineCode",{parentName:"p"},"ClusterRoleBinding"),". To do this, use kubectl to find the cluster role binding:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get clusterrolebindings.rbac.authorization.k8s.io  | grep aerospike-kubernetes-operator\naerospike-kubernetes-operator.v2.0.0-74b946466d                 ClusterRole/aerospike-kubernetes-operator.v2.0.0-74b946466d   41m\n")),(0,o.kt)("p",null,"In this example, the name of the cluster role binding is ",(0,o.kt)("inlineCode",{parentName:"p"},"aerospike-kubernetes-operator.v2.0.0-74b946466d")),(0,o.kt)("p",null,"Use kubectl to edit the role binding and add a new subject entry for the service account:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# Replace aerospike-kubernetes-operator.v2.0.0-74b946466d with the name of the cluster role binding found above\nkubectl edit clusterrolebindings.rbac.authorization.k8s.io  aerospike-kubernetes-operator.v2.0.0-74b946466d\n")),(0,o.kt)("p",null,"This command launches an editor. Append the following lines to the ",(0,o.kt)("inlineCode",{parentName:"p"},"subjects")," section:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  # A new entry for ns1.\n  # Replace ns1 with your namespace\n  - kind: ServiceAccount\n    name: aerospike-operator-controller-manager\n    namespace: ns1\n")),(0,o.kt)("p",null,"Save and ensure that the changes are applied."),(0,o.kt)("p",null,"Here is a full example of the operator's ClusterRoleBinding targeting the ",(0,o.kt)("inlineCode",{parentName:"p"},"aerospike")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"ns1")," namespaces."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  creationTimestamp: "2021-09-16T10:48:36Z"\n  labels:\n    olm.owner: aerospike-kubernetes-operator.v2.0.0\n    olm.owner.kind: ClusterServiceVersion\n    olm.owner.namespace: test\n    operators.coreos.com/aerospike-kubernetes-operator.test: ""\n  name: aerospike-kubernetes-operator.v2.0.0-74b946466d\n  resourceVersion: "51841234"\n  uid: be546dd5-b21e-4cc3-8a07-e2fe5fe5274c\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: aerospike-kubernetes-operator.v2.0.0-74b946466d\nsubjects:\n  - kind: ServiceAccount\n    name: aerospike-operator-controller-manager\n    namespace: aerospike\n\n  # New entry\n  - kind: ServiceAccount\n    name: aerospike-operator-controller-manager\n    namespace: ns1     \n')))}m.isMDXComponent=!0}}]);