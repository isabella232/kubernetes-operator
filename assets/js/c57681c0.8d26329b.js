"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[2266],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8304:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],s={title:"Install The Operator On Kubernetes",description:"Install The Operator On Kubernetes"},i=void 0,p={unversionedId:"Install-the-Operator-on-Kubernetes",id:"version-1.x.x/Install-the-Operator-on-Kubernetes",title:"Install The Operator On Kubernetes",description:"Install The Operator On Kubernetes",source:"@site/versioned_docs/version-1.x.x/Install-the-Operator-on-Kubernetes.md",sourceDirName:".",slug:"/Install-the-Operator-on-Kubernetes",permalink:"/kubernetes-operator/1.x.x/Install-the-Operator-on-Kubernetes",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/versioned_docs/version-1.x.x/Install-the-Operator-on-Kubernetes.md",tags:[],version:"1.x.x",frontMatter:{title:"Install The Operator On Kubernetes",description:"Install The Operator On Kubernetes"},sidebar:"version-1.x.x/docsSidebar",previous:{title:"System Requirements",permalink:"/kubernetes-operator/1.x.x/System-Requirements"},next:{title:"Create Aerospike Cluster",permalink:"/kubernetes-operator/1.x.x/Create-Aerospike-cluster"}},u=[{value:"Create a Kubernetes cluster",id:"create-a-kubernetes-cluster",children:[{value:"Production Kubernetes Cluster",id:"production-kubernetes-cluster",children:[],level:3},{value:"Development/test Cluster",id:"developmenttest-cluster",children:[],level:3}],level:2},{value:"Obtain the prerequisite files",id:"obtain-the-prerequisite-files",children:[],level:2},{value:"Create a new Kubernetes namespace",id:"create-a-new-kubernetes-namespace",children:[],level:2},{value:"Register Aerospike CRDs",id:"register-aerospike-crds",children:[],level:2},{value:"Setup RBAC",id:"setup-rbac",children:[],level:2},{value:"Deploy the Aerospike Operator",id:"deploy-the-aerospike-operator",children:[{value:"Standalone mode",id:"standalone-mode",children:[],level:3},{value:"HA mode",id:"ha-mode",children:[],level:3},{value:"Deploy",id:"deploy",children:[],level:3}],level:2},{value:"Verify Operator is running",id:"verify-operator-is-running",children:[],level:2},{value:"Check Operator logs",id:"check-operator-logs",children:[],level:2},{value:"Next",id:"next",children:[],level:2}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"create-a-kubernetes-cluster"},"Create a Kubernetes cluster"),(0,o.kt)("p",null,"To use the Aerospike Kubernetes Operator, you will need a working Kubernetes cluster with version 1.16, 1.17 or 1.18."),(0,o.kt)("h3",{id:"production-kubernetes-cluster"},"Production Kubernetes Cluster"),(0,o.kt)("p",null,"If you need to set up a new cluster: ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/setup/production-environment/"},"See here for official guides")),(0,o.kt)("p",null,"There are specific guides for:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html"},"Amazon EKS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster"},"Google GKE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-deploy-cluster"},"Microsoft AKS"))),(0,o.kt)("h3",{id:"developmenttest-cluster"},"Development/test Cluster"),(0,o.kt)("p",null,"For prototyping and testing it is useful to use a local Kubernetes deployment."),(0,o.kt)("p",null,"The ones we have used include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://microk8s.io/"},"MicroK8s")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/minikube"},"Minikube"))),(0,o.kt)("h2",{id:"obtain-the-prerequisite-files"},"Obtain the prerequisite files"),(0,o.kt)("p",null,"Download the Aerospike Operator package ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/1.0.1/deploy/"},"here"),", and unpack it on the same computer where you normally run kubectl. The Operator package contains contains the CRDs and other resource files necessary to deploy the operator along with sample Aerospike cluster deployment resource files."),(0,o.kt)("p",null,"To clone the Aerospike Github Operator repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/aerospike/aerospike-kubernetes-operator.git\n$ cd aerospike-kubernetes-operator\n$ git checkout 1.0.1\n")),(0,o.kt)("p",null,"The deploy folder has the prerequisite files."),(0,o.kt)("h2",{id:"create-a-new-kubernetes-namespace"},"Create a new Kubernetes namespace"),(0,o.kt)("p",null,"Create a new Kubernetes namespace for Aerospike. This will help in putting all Aerospike related resource in a single logical space."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl create namespace aerospike\n")),(0,o.kt)("h2",{id:"register-aerospike-crds"},"Register Aerospike CRDs"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/1.0.1/deploy/crds/aerospike.com_aerospikeclusters_crd.yaml"},"aerospike.com_aerospikeclusters_crd.yaml")," file to register the operator's CRDs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl apply -f deploy/crds/aerospike.com_aerospikeclusters_crd.yaml\n")),(0,o.kt)("h2",{id:"setup-rbac"},"Setup RBAC"),(0,o.kt)("p",null,"Setup ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Role based access control (RBAC)"),". RBAC helps in regulating access to the Kubernetes cluster and its resources based on the roles of individual users within your organization."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl apply -f deploy/rbac.yaml\n")),(0,o.kt)("h2",{id:"deploy-the-aerospike-operator"},"Deploy the Aerospike Operator"),(0,o.kt)("h3",{id:"standalone-mode"},"Standalone mode"),(0,o.kt)("p",null,"Aerospike Kubernetes Operator can be deployed standalone by applying ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/aerospike/aerospike-kubernetes-operator/tree/1.0.1/deploy/operator.yaml"},"deploy/operator.yaml")," file. This file has a deployment object containing the operator specs. This object can be modified to change specs, e.g. log level for the operator, and imagePullPolicy."),(0,o.kt)("h3",{id:"ha-mode"},"HA mode"),(0,o.kt)("p",null,"For the high availability of the operator ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.replicas")," can be set to more than 1 in ",(0,o.kt)("inlineCode",{parentName:"p"},".yaml"),". The Operator will automatically elect a leader among all replicas. You need to add a readiness probe which ensures that the Kubernetes service uses to the currently elected leader instance of the operator. Replace deploy/operator.yaml file with the following content to run 3 replicas for the operator. Please update ",(0,o.kt)("inlineCode",{parentName:"p"},"pec.replicas")," to the desired replica count."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# Service for webhook\napiVersion: v1\nkind: Service\nmetadata:\n  name: aerospike-cluster-webhook\n  namespace: aerospike\nspec:\n  selector:\n    # Specified by the deployment/pod\n    name: aerospike-kubernetes-operator\n  ports:\n    - port: 443\n      # Can be the name of port 8443 of the container\n      targetPort: 8443\n---\n\n# Operator\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: aerospike-kubernetes-operator\n  namespace: aerospike\nspec:\n  # Number of operator replicas to run.\n  replicas: 3\n  selector:\n    matchLabels:\n      name: aerospike-kubernetes-operator\n  template:\n    metadata:\n      labels:\n        name: aerospike-kubernetes-operator\n    spec:\n      serviceAccountName: aerospike-kubernetes-operator\n      containers:\n        - name: aerospike-kubernetes-operator\n          image: aerospike/aerospike-kubernetes-operator:1.0.1\n          command:\n          - aerospike-kubernetes-operator\n          imagePullPolicy: Always\n          ports:\n          - containerPort: 8443\n          env:\n          - name: WATCH_NAMESPACE\n            value: aerospike\n            # Use below value for watching multiple namespaces by operator\n            # value: aerospike,aerospike1,aerospike2\n          - name: POD_NAME\n            valueFrom:\n              fieldRef:\n                fieldPath: metadata.name\n          - name: OPERATOR_NAME\n            value: "aerospike-kubernetes-operator"\n          - name: LOG_LEVEL\n            value: debug\n          readinessProbe:\n            exec:\n              command:\n              - stat\n              - "/tmp/cert"\n            initialDelaySeconds: 5\n            periodSeconds: 5\n            timeoutSeconds: 5\n            failureThreshold: 1\n')),(0,o.kt)("h3",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"Once you have the  deploy/operator.yaml file deploy the operator using the following commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl apply -f deploy/operator.yaml\n")),(0,o.kt)("h2",{id:"verify-operator-is-running"},"Verify Operator is running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl get pod -n aerospike\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"NAME                                             READY   STATUS    RESTARTS   AGE\naerospike-kubernetes-operator-5587bc7758-psn5t   1/1     Running   0          70s\n")),(0,o.kt)("p",null,"This step could take some time initially as the operator image needs to be downloaded the first time."),(0,o.kt)("h2",{id:"check-operator-logs"},"Check Operator logs"),(0,o.kt)("p",null,"Use the pod name obtained above to check the Operator logs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ kubectl -n aerospike logs -f aerospike-kubernetes-operator-5587bc7758-psn5t\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'t=2020-03-26T06:23:42+0000 lvl=info msg="Operator Version: 0.0.1" module=cmd caller=main.go:79\nt=2020-03-26T06:23:42+0000 lvl=info msg="Go Version: go1.13.4" module=cmd caller=main.go:80\nt=2020-03-26T06:23:42+0000 lvl=info msg="Go OS/Arch: linux/amd64" module=cmd caller=main.go:81\nt=2020-03-26T06:23:42+0000 lvl=info msg="Version of operator-sdk: v0.12.0+git" module=cmd caller=main.go:82\nt=2020-03-26T06:23:43+0000 lvl=info msg="Set sync period" module=cmd period=nil caller=main.go:183\nt=2020-03-26T06:23:43+0000 lvl=info msg="Registering Components" module=cmd caller=main.go:199\n....\n')),(0,o.kt)("h2",{id:"next"},"Next"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kubernetes-operator/1.x.x/Create-Aerospike-cluster"},"Create the Aerospike cluster")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/kubernetes-operator/1.x.x/Cluster-configuration-settings"},"Cluster configuration settings"))))}d.isMDXComponent=!0}}]);