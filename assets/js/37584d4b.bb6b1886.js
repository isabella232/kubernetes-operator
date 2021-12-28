"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[9542],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var o=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,s=function(e,t){if(null==e)return{};var r,o,s={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=o.createContext({}),u=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),k=u(r),m=s,f=k["".concat(l,".").concat(m)]||k[m]||p[m]||n;return r?o.createElement(f,a(a({ref:t},c),{},{components:r})):o.createElement(f,a({ref:t},c))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,a=new Array(n);a[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<n;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}k.displayName="MDXCreateElement"},133:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return k}});var o=r(7462),s=r(3366),n=(r(7294),r(3905)),a=["components"],i={title:"Create an Aerospike Cluster",description:"How to create an Aerospike cluster using kubectl",id:"create-cluster-kubectl"},l=void 0,u={unversionedId:"create-cluster-kubectl",id:"create-cluster-kubectl",title:"Create an Aerospike Cluster",description:"How to create an Aerospike cluster using kubectl",source:"@site/docs/Create-Aerospike-cluster.md",sourceDirName:".",slug:"/create-cluster-kubectl",permalink:"/kubernetes-operator/create-cluster-kubectl",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/docs/Create-Aerospike-cluster.md",tags:[],version:"current",frontMatter:{title:"Create an Aerospike Cluster",description:"How to create an Aerospike cluster using kubectl",id:"create-cluster-kubectl"},sidebar:"docsSidebar",previous:{title:"Install the Operator Using Helm",permalink:"/kubernetes-operator/install-operator-helm"},next:{title:"Create Aerospike Cluster Using Helm",permalink:"/kubernetes-operator/create-cluster-helm"}},c=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Prepare the Aerospike Cluster Configuration",id:"prepare-the-aerospike-cluster-configuration",children:[],level:2},{value:"Configure Persistent Storage",id:"configure-persistent-storage",children:[],level:2},{value:"Create Secrets",id:"create-secrets",children:[],level:2},{value:"Create Aerospike Cluster Custom Resource (CR)",id:"create-aerospike-cluster-custom-resource-cr",children:[],level:2},{value:"Deploy the Aerospike Cluster",id:"deploy-the-aerospike-cluster",children:[],level:2},{value:"Verify Cluster Status",id:"verify-cluster-status",children:[],level:2}],p={toc:c};function k(e){var t=e.components,r=(0,s.Z)(e,a);return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"To use the Operator to deploy an Aerospike cluster, create an Aerospike custom resource (CR) file which describes the cluster (including its number of nodes, the Aerospike configuration, system resources, etc.). Then use ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," to apply that configuration file to your Kubernetes cluster(s)."),(0,n.kt)("h2",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"Before deploying your Aerospike cluster, you must install the Aerospike Kubernetes Operator on your Kubernetes cluster(s) using either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/kubernetes-operator/install-operator-olm"},"OLM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/kubernetes-operator/install-operator-helm"},"Helm"))),(0,n.kt)("h2",{id:"prepare-the-aerospike-cluster-configuration"},"Prepare the Aerospike Cluster Configuration"),(0,n.kt)("p",null,"The Aerospike Kubernetes Operator GitHub repo contains example YAML configuration files for the cluster deployment. These files are located in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/master/config/samples"},"the main Aerospike Kubernetes Operator repository"),"."),(0,n.kt)("p",null,"The use case for your cluster will help you determine which configuration parameters you need to set in the custom resource (CR) file."),(0,n.kt)("h2",{id:"configure-persistent-storage"},"Configure Persistent Storage"),(0,n.kt)("p",null,"The Aerospike Operator is designed to work with dynamically-provisioned storage classes. Aerospike Server pods may have different storage volumes associated with each service."),(0,n.kt)("p",null,"Persistent storage on the pods uses these storage class provisioners."),(0,n.kt)("p",null,"Apply a sample storage class based on your Kubernetes environment:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"EKS: ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl apply -f eks_ssd_storage_class.yaml")),(0,n.kt)("li",{parentName:"ul"},"GCE: ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl apply -f gce_ssd_storage_class.yaml")),(0,n.kt)("li",{parentName:"ul"},"Microk8s: ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl apply -f microk8s_filesystem_storage_class.yaml"))),(0,n.kt)("p",null,"See ",(0,n.kt)("a",{parentName:"p",href:"/kubernetes-operator/Storage-provisioning"},"Storage Provisioning")," for more details on configuring persistent storage."),(0,n.kt)("h2",{id:"create-secrets"},"Create Secrets"),(0,n.kt)("p",null,"Next, create Secrets to set up features like the license file (",(0,n.kt)("inlineCode",{parentName:"p"},"features.conf"),"), Aerospike authentication, TLS, and the cluster admin password. See the ",(0,n.kt)("a",{parentName:"p",href:"/kubernetes-operator/Manage-TLS-Certificates"},"Manage TLS Certificates")," section for more details."),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/master/config/samples/secrets"},"example secrets directory")," includes a collection of example TLS certificates, security credentials, and more. Download these files into a local folder called ",(0,n.kt)("inlineCode",{parentName:"p"},"secrets"),", then apply them as a Kubernetes Secret:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl  -n aerospike create secret generic aerospike-secret --from-file=secrets\n")),(0,n.kt)("p",null,"Create a Secret containing the password for the Aerospike cluster admin:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl  -n aerospike create secret generic auth-secret --from-literal=password='admin123'\n")),(0,n.kt)("h2",{id:"create-aerospike-cluster-custom-resource-cr"},"Create Aerospike Cluster Custom Resource (CR)"),(0,n.kt)("p",null,"Refer to the ",(0,n.kt)("a",{parentName:"p",href:"/kubernetes-operator/Cluster-configuration-settings"},"cluster configuration settings")," for details on the Aerospike cluster custom resource (CR) file. Sample Aerospike cluster CR files for different configurations can be found in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/master/config/samples"},"the main Aerospike Kubernetes Operator repository"),"."),(0,n.kt)("p",null,"You can edit the CR file at any time to make changes and manage the Aerospike cluster."),(0,n.kt)("h2",{id:"deploy-the-aerospike-cluster"},"Deploy the Aerospike Cluster"),(0,n.kt)("p",null,"Use the custom resource YAML file you created to deploy an Aerospike cluster. If you don't have a custom resource file, you can choose one of the sample files in the main Aerospike Kubernetes Operator repository](",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/master/config/samples"},"https://github.com/aerospike/aerospike-kubernetes-operator/tree/master/config/samples"),")."),(0,n.kt)("p",null,"For example, to use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/blob/2.0.0/config/samples/dim_nostorage_cluster_cr.yaml"},"dim_nostorage_cluster_cr.yaml")," file, download it and apply it to your cluster with:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f dim_nostorage_cluster_cr.yaml\n")),(0,n.kt)("h2",{id:"verify-cluster-status"},"Verify Cluster Status"),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get statefulset")," to ensure the aerospike-kubernetes-operator creates the StatefulSets for the custom resource."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get statefulset -n aerospike\nNAME      READY   AGE\naerocluster-0   2/2     24s\n")),(0,n.kt)("p",null,"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl get pods")," to check the pods to confirm the status. This step may take time as the pods provision resources, initialize, and are ready. Please wait for the pods to switch to the Running state before you continue."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pods -n aerospike\nNAME          READY   STATUS      RESTARTS   AGE\naerocluster-0-0     1/1     Running     0          48s\naerocluster-0-1     1/1     Running     0          48s\n")),(0,n.kt)("p",null,"If the Aerospike cluster pods do not switch to Running status in a few minutes, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/kubernetes-operator/Troubleshooting"},"Troubleshooting Guide"),"."))}k.isMDXComponent=!0}}]);