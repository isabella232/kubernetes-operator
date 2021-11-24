"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[8254],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var s=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=s.createContext({}),u=function(e){var t=s.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},k=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),k=u(r),d=n,m=k["".concat(l,".").concat(d)]||k[d]||c[d]||o;return r?s.createElement(m,a(a({ref:t},p),{},{components:r})):s.createElement(m,a({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=k;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}k.displayName="MDXCreateElement"},4425:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return k}});var s=r(7462),n=r(3366),o=(r(7294),r(3905)),a=["components"],i={title:"Create Aerospike Cluster",description:"Create Aerospike Cluster"},l=void 0,u={unversionedId:"Create-Aerospike-cluster",id:"version-1.x.x/Create-Aerospike-cluster",isDocsHomePage:!1,title:"Create Aerospike Cluster",description:"Create Aerospike Cluster",source:"@site/versioned_docs/version-1.x.x/Create-Aerospike-cluster.md",sourceDirName:".",slug:"/Create-Aerospike-cluster",permalink:"/kubernetes-operator/Create-Aerospike-cluster",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/versioned_docs/version-1.x.x/Create-Aerospike-cluster.md",tags:[],version:"1.x.x",frontMatter:{title:"Create Aerospike Cluster",description:"Create Aerospike Cluster"},sidebar:"version-1.x.x/docsSidebar",previous:{title:"Install The Operator On Kubernetes",permalink:"/kubernetes-operator/Install-the-Operator-on-Kubernetes"},next:{title:"Connect To The Aerospike Cluster",permalink:"/kubernetes-operator/Connect-to-the-Aerospike-cluster"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Prepare the Aerospike cluster configuration:",id:"prepare-the-aerospike-cluster-configuration",children:[],level:2},{value:"Configure persistent storage",id:"configure-persistent-storage",children:[],level:2},{value:"Create secrets",id:"create-secrets",children:[],level:2},{value:"Create Aerospike cluster Custom Resource (CR)",id:"create-aerospike-cluster-custom-resource-cr",children:[],level:2},{value:"Deploy Aerospike cluster",id:"deploy-aerospike-cluster",children:[],level:2},{value:"Verify cluster status",id:"verify-cluster-status",children:[],level:2},{value:"Next",id:"next",children:[],level:2}],c={toc:p};function k(e){var t=e.components,r=(0,n.Z)(e,a);return(0,o.kt)("wrapper",(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To deploy an Aerospike cluster using the Operator, you will create an Aerospike custom resource file that describes what you want the cluster to look like (e.g. number of nodes, types of services, system resources, etc), and then push that configuration file into Kubernetes."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before deploying your Aerospike cluster ensure that you have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Reviewed the prerequisites and system requirements"),(0,o.kt)("li",{parentName:"ul"},"Downloaded the Aerospike Kubernetes Operator"),(0,o.kt)("li",{parentName:"ul"},"Installed the Operator on Kubernetes, and ensure that it is up and running")),(0,o.kt)("h2",{id:"prepare-the-aerospike-cluster-configuration"},"Prepare the Aerospike cluster configuration:"),(0,o.kt)("p",null,"The Operator package contains example YAML configuration files for the cluster deployment. After unpacking the files, the resulting directory will be /aerospike-kubernetes-operator/deploy.  Make sure to cd into this directory before you run the commands."),(0,o.kt)("p",null,"The use case for your cluster will help you to determine which configuration parameters that you need to set in the custom resource ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/wiki/Configuration"},"(CR)")," file. Identify your requirements for storage, if you plan to ",(0,o.kt)("a",{parentName:"p",href:"/kubernetes-operator/XDR"},"enable XDR"),", or ",(0,o.kt)("a",{parentName:"p",href:"/kubernetes-operator/Manage-TLS-Certificates"},"manage TLS certificates")," for network security with your Aerospike clusters."),(0,o.kt)("h2",{id:"configure-persistent-storage"},"Configure persistent storage"),(0,o.kt)("p",null,"The Aerospike Operator is designed to work with dynamically provisioned storage classes. A ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/storage-classes/"},"storage class")," is used to dynamically provision the persistent storage. Aerospike Server pods may have different storage volumes associated with each service."),(0,o.kt)("p",null,"To learn more about configuring persistent storage:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Amazon Elastic Kubernetes Service, the instructions are ",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/storage-classes.html"},"here"),"."),(0,o.kt)("li",{parentName:"ul"},"For Google Kubernetes Engine, the instructions are ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/ssd-pd"},"here")),(0,o.kt)("li",{parentName:"ul"},"For Microsoft Azure Kubernetes Service, the instructions are ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/aks/azure-disks-dynamic-pv"},"here"),".")),(0,o.kt)("p",null,"Persistent storage on the pods will use these storage class provisioners to provision storage."),(0,o.kt)("p",null,"To apply a sample storage class based on your Kubernetes environment:"),(0,o.kt)("p",null,"For GKE"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl apply -f deploy/samples/storage/gce_ssd_storage_class.yaml\n")),(0,o.kt)("p",null,"For EKS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl apply -f deploy/samples/storage/eks_ssd_storage_class.yaml\n")),(0,o.kt)("p",null,"For MicroK8s"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl apply -f deploy/samples/storage/microk8s_filesystem_storage_class.yaml\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/kubernetes-operator/Storage-provisioning"},"Storage Provisioning")," for more details on configuring persistent storage."),(0,o.kt)("h2",{id:"create-secrets"},"Create secrets"),(0,o.kt)("p",null,"Create secrets to setup Aerospike authentication, TLS, and features.conf. See ",(0,o.kt)("a",{parentName:"p",href:"/kubernetes-operator/Manage-TLS-Certificates"},"Manage-TLS-Certificates")," for more details."),(0,o.kt)("p",null,"Aerospike secrets like TLS certificates, security credentials, and features.conf can be packaged in a single directory and converted to Kubernetes secrets like so"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl  -n aerospike create secret generic aerospike-secret --from-file=deploy/secrets\n")),(0,o.kt)("p",null,"Create a secret containing the password for Aerospike cluster admin user by passing the password from the command line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl  -n aerospike create secret generic auth-secret --from-literal=password='admin123'\n")),(0,o.kt)("h2",{id:"create-aerospike-cluster-custom-resource-cr"},"Create Aerospike cluster Custom Resource (CR)"),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/kubernetes-operator/Cluster-configuration-settings"},"cluster configuration settings")," section for details on the Aerospike cluster custom resource (CR) file. Sample Aerospike cluster CR files for different configurations can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/1.0.0/deploy/samples/"},"here"),"."),(0,o.kt)("p",null,"This custom resource file can be edited later on to make any changes/manage the Aerospike cluster."),(0,o.kt)("h2",{id:"deploy-aerospike-cluster"},"Deploy Aerospike cluster"),(0,o.kt)("p",null,"Use the CR yaml file that you created to deploy an Aerospike cluster."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl apply -f deploy/samples/dim_nostorage_cluster_cr.yaml\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Replace the file name with CR yaml file for your cluster."))),(0,o.kt)("h2",{id:"verify-cluster-status"},"Verify cluster status"),(0,o.kt)("p",null,"Ensure that the aerospike-kubernetes-operator creates a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/statefulset/"},"StatefulSet")," for the CR."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl get statefulset -n aerospike\nNAME      READY   AGE\naerocluster-0   2/2     24s\n")),(0,o.kt)("p",null,"Check the pods to confirm the status. This step may take time as the pod's provision resources, initialize, and are ready. Please wait for the pods to switch to the running state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl get pods -n aerospike\nNAME          READY   STATUS      RESTARTS   AGE\naerocluster-0-0     1/1     Running     0          48s\naerocluster-0-1     1/1     Running     0          48s\n")),(0,o.kt)("p",null,"If the Aerospike cluster pods do not switch to Running status in a few minutes, please refer to ",(0,o.kt)("a",{parentName:"p",href:"/kubernetes-operator/Troubleshooting"},"Troubleshooting")," guide."),(0,o.kt)("h2",{id:"next"},"Next"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kubernetes-operator/Cluster-configuration-settings"},"Cluster configuration settings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kubernetes-operator/Connect-to-the-Aerospike-cluster"},"Connect to the Aerospike cluster"))))}k.isMDXComponent=!0}}]);