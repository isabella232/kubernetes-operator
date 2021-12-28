"use strict";(self.webpackChunkwebsite_operator=self.webpackChunkwebsite_operator||[]).push([[3291],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return u}});var a=r(7294);function t(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,t=function(e,n){if(null==e)return{};var r,a,t={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||(t[r]=e[r]);return t}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var i=a.createContext({}),p=function(e){var n=a.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=p(e.components);return a.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=t,k=d["".concat(i,".").concat(u)]||d[u]||m[u]||s;return r?a.createElement(k,o(o({ref:n},c),{},{components:r})):a.createElement(k,o({ref:n},c))}));function u(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var s=r.length,o=new Array(s);o[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1318:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=r(7462),t=r(3366),s=(r(7294),r(3905)),o=["components"],l={title:"Aerospike Access Control",description:"Aerospike Access Control"},i=void 0,p={unversionedId:"Aerospike-access-control",id:"Aerospike-access-control",title:"Aerospike Access Control",description:"Aerospike Access Control",source:"@site/docs/Aerospike-access-control.md",sourceDirName:".",slug:"/Aerospike-access-control",permalink:"/kubernetes-operator/Aerospike-access-control",editUrl:"https://github.com/aerospike/kubernetes-operator/edit/main/docs/Aerospike-access-control.md",tags:[],version:"current",frontMatter:{title:"Aerospike Access Control",description:"Aerospike Access Control"},sidebar:"docsSidebar",previous:{title:"XDR",permalink:"/kubernetes-operator/XDR"},next:{title:"Warm restart",permalink:"/kubernetes-operator/Warm-restart"}},c=[{value:"Enable security",id:"enable-security",children:[{value:"Aerospike server 5.7.x and later",id:"aerospike-server-57x-and-later",children:[],level:3},{value:"Aerospike server 5.6.x and prior",id:"aerospike-server-56x-and-prior",children:[],level:3}],level:2},{value:"Create a Role",id:"create-a-role",children:[],level:2},{value:"Add Privileges to a Role",id:"add-privileges-to-a-role",children:[],level:2},{value:"Remove Privileges from a Role",id:"remove-privileges-from-a-role",children:[],level:2},{value:"Create a User",id:"create-a-user",children:[],level:2},{value:"Add a New Role to a User",id:"add-a-new-role-to-a-user",children:[],level:2},{value:"Remove a Role from a User",id:"remove-a-role-from-a-user",children:[],level:2},{value:"Change a User&#39;s Password",id:"change-a-users-password",children:[],level:2},{value:"Remove a Role",id:"remove-a-role",children:[],level:2},{value:"Remove a user",id:"remove-a-user",children:[],level:2}],m={toc:c};function d(e){var n=e.components,r=(0,t.Z)(e,o);return(0,s.kt)("wrapper",(0,a.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"enable-security"},"Enable security"),(0,s.kt)("p",null,"To use Aerospike Access control you need to enable security for the Aerospike clusters."),(0,s.kt)("h3",{id:"aerospike-server-57x-and-later"},"Aerospike server 5.7.x and later"),(0,s.kt)("p",null,"Enable security for your Aerospike clusters in aerospikeConfig section of the CR like so"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"  aerospikeConfig:\n    .\n    .\n    .\n    security: {}\n    .\n    .\n    .\n")),(0,s.kt)("h3",{id:"aerospike-server-56x-and-prior"},"Aerospike server 5.6.x and prior"),(0,s.kt)("p",null,"Enable security for your Aerospike clusters in aerospikeConfig section of the CR like so"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"  aerospikeConfig:\n    .\n    .\n    .\n    security: \n      enable-security: true\n    .\n    .\n    .\n")),(0,s.kt)("p",null,"Aerospike Access Control includes user, role, and privilege creation and maintenance. ",(0,s.kt)("a",{parentName:"p",href:"https://docs.aerospike.com/docs/operations/configure/security/access-control/index.html"},"See the documentation for more information on Aerospike Access Control"),"."),(0,s.kt)("p",null,"To manage your access controls from the operator, configure the ",(0,s.kt)("inlineCode",{parentName:"p"},"aerospikeAccessControl")," section in the Aerospike cluster's Custom Resource (CR) file."),(0,s.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"Access control changes on an operator-managed Aerospike cluster will be reverted if made externally (e.g. using ",(0,s.kt)("inlineCode",{parentName:"p"},"aql")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"asadm"),")."))),(0,s.kt)("p",null,"Here are a few examples for common access control tasks:"),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"For these examples, assume that cluster is deployed using a file named ",(0,s.kt)("inlineCode",{parentName:"p"},"aerospike-cluster.yaml"),"."))),(0,s.kt)("h2",{id:"create-a-role"},"Create a Role"),(0,s.kt)("p",null,"Add a role in the ",(0,s.kt)("inlineCode",{parentName:"p"},"roles")," list under ",(0,s.kt)("inlineCode",{parentName:"p"},"aerospikeAccessControl"),"."),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"sys-admin")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"user-admin"),' are standard predefined roles. Here we are adding a new custom role called "profiler" which is given ',(0,s.kt)("inlineCode",{parentName:"p"},"read")," privileges."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: asdb.aerospike.com/v1beta1\nkind: AerospikeCluster\nmetadata:\n  name: aerocluster\n  namespace: aerospike\n\nspec:\n  .\n  .\n  aerospikeAccessControl:\n    roles:\n      - name: profiler\n        privileges:\n          - read\n    users:\n      - name: admin\n        secretName: auth-secret\n        roles:\n          - sys-admin\n          - user-admin\n")),(0,s.kt)("p",null,"Save and exit the CR file, then use kubectl to apply the change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f aerospike-cluster.yaml\n")),(0,s.kt)("h2",{id:"add-privileges-to-a-role"},"Add Privileges to a Role"),(0,s.kt)("p",null,"Add the ",(0,s.kt)("inlineCode",{parentName:"p"},"read")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"read-write")," privileges to the ",(0,s.kt)("inlineCode",{parentName:"p"},"profiler")," role in the ",(0,s.kt)("inlineCode",{parentName:"p"},"roles")," list under ",(0,s.kt)("inlineCode",{parentName:"p"},"aerospikeAccessControl"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"\napiVersion: asdb.aerospike.com/v1beta1\nkind: AerospikeCluster\nmetadata:\n  name: aerocluster\n  namespace: aerospike\n\nspec:\n  .\n  .\n  aerospikeAccessControl:\n    roles:\n      - name: profiler\n        privileges:\n          - read\n          - read-write\n    users:\n      - name: admin\n        secretName: auth-secret\n        roles:\n          - sys-admin\n          - user-admin\n")),(0,s.kt)("p",null,"Save and exit the CR file, then use kubectl to apply the change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f aerospike-cluster.yaml\n")),(0,s.kt)("h2",{id:"remove-privileges-from-a-role"},"Remove Privileges from a Role"),(0,s.kt)("p",null,"Remove privileges from the desired role in the ",(0,s.kt)("inlineCode",{parentName:"p"},"roles")," list under ",(0,s.kt)("inlineCode",{parentName:"p"},"aerospikeAccessControl"),"."),(0,s.kt)("p",null,"Remove ",(0,s.kt)("inlineCode",{parentName:"p"},"read-write")," ",(0,s.kt)("inlineCode",{parentName:"p"},"privilege"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: asdb.aerospike.com/v1beta1\nkind: AerospikeCluster\nmetadata:\n  name: aerocluster\n  namespace: aerospike\n\nspec:\n  .\n  .\n  aerospikeAccessControl:\n    roles:\n      - name: profiler\n        privileges:\n          - read\n    users:\n      - name: admin\n        secretName: auth-secret\n        roles:\n          - sys-admin\n          - user-admin\n")),(0,s.kt)("p",null,"Save and exit the CR file, then use kubectl to apply the change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f aerospike-cluster.yaml\n")),(0,s.kt)("h2",{id:"create-a-user"},"Create a User"),(0,s.kt)("p",null,"Create the secret for the user and add the user in the ",(0,s.kt)("inlineCode",{parentName:"p"},"users")," list under ",(0,s.kt)("inlineCode",{parentName:"p"},"aerospikeAccessControl"),"."),(0,s.kt)("p",null,"Create a secret ",(0,s.kt)("inlineCode",{parentName:"p"},"profile-user-secret")," containing the password for the user ",(0,s.kt)("inlineCode",{parentName:"p"},"profiler")," by passing the password from the command line:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl  -n aerospike create secret generic profile-user-secret --from-literal=password='userpass'\n")),(0,s.kt)("p",null,"Add ",(0,s.kt)("inlineCode",{parentName:"p"},"profileUser")," user with the ",(0,s.kt)("inlineCode",{parentName:"p"},"profiler")," role."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: asdb.aerospike.com/v1beta1\nkind: AerospikeCluster\nmetadata:\n  name: aerocluster\n  namespace: aerospike\n\nspec:\n  .\n  .\n  aerospikeAccessControl:\n    roles:\n      - name: profiler\n        privileges:\n          - read\n    users:\n      - name: profileUser\n        secretName: profile-user-secret\n        roles:\n          - profiler\n\n      - name: admin\n        secretName: auth-secret\n        roles:\n          - sys-admin\n          - user-admin\n")),(0,s.kt)("p",null,"Save and exit the CR file, then use kubectl to apply the change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f aerospike-cluster.yaml\n")),(0,s.kt)("h2",{id:"add-a-new-role-to-a-user"},"Add a New Role to a User"),(0,s.kt)("p",null,"Add roles in the desired user's ",(0,s.kt)("inlineCode",{parentName:"p"},"roles")," list."),(0,s.kt)("p",null,"Add ",(0,s.kt)("inlineCode",{parentName:"p"},"user-admin")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"sys-admin")," to the ",(0,s.kt)("inlineCode",{parentName:"p"},"profileUser")," roles list."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: asdb.aerospike.com/v1beta1\nkind: AerospikeCluster\nmetadata:\n  name: aerocluster\n  namespace: aerospike\n\nspec:\n  .\n  .\n  aerospikeAccessControl:\n    roles:\n      - name: profiler\n        privileges:\n          - read\n    users:\n      - name: profileUser\n        secretName: profile-user-secret\n        roles:\n          - profiler\n          - user-admin\n          - sys-admin\n\n      - name: admin\n        secretName: auth-secret\n        roles:\n          - sys-admin\n          - user-admin\n")),(0,s.kt)("p",null,"Save and exit the CR file, then use kubectl to apply the change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f aerospike-cluster.yaml\n")),(0,s.kt)("h2",{id:"remove-a-role-from-a-user"},"Remove a Role from a User"),(0,s.kt)("p",null,"Remove roles from the desired user's ",(0,s.kt)("inlineCode",{parentName:"p"},"roles")," list."),(0,s.kt)("p",null,"Remove ",(0,s.kt)("inlineCode",{parentName:"p"},"sys-admin")," from the ",(0,s.kt)("inlineCode",{parentName:"p"},"profileUser's")," roles list."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: asdb.aerospike.com/v1beta1\nkind: AerospikeCluster\nmetadata:\n  name: aerocluster\n  namespace: aerospike\n\nspec:\n  .\n  .\n  aerospikeAccessControl:\n    roles:\n      - name: profiler\n        privileges:\n          - read\n    users:\n      - name: profileUser\n        secretName: profile-user-secret\n        roles:\n          - profiler\n          - user-admin\n\n      - name: admin\n        secretName: auth-secret\n        roles:\n          - sys-admin\n          - user-admin\n")),(0,s.kt)("p",null,"Save and exit the CR file, then use kubectl to apply the change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f aerospike-cluster.yaml\n")),(0,s.kt)("h2",{id:"change-a-users-password"},"Change a User's Password"),(0,s.kt)("p",null,"Create a new secret ",(0,s.kt)("inlineCode",{parentName:"p"},"new-profile-user-secret")," containing the password for Aerospike cluster user ",(0,s.kt)("inlineCode",{parentName:"p"},"profileUser")," by passing the password from the command line:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl  -n aerospike create secret generic new-profile-user-secret --from-literal=password='newuserpass'\n")),(0,s.kt)("p",null,"Update the ",(0,s.kt)("inlineCode",{parentName:"p"},"secretName")," for ",(0,s.kt)("inlineCode",{parentName:"p"},"profileUser")," to the new secret name ",(0,s.kt)("inlineCode",{parentName:"p"},"new-profile-user-secret"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: asdb.aerospike.com/v1beta1\nkind: AerospikeCluster\nmetadata:\n  name: aerocluster\n  namespace: aerospike\n\nspec:\n  .\n  .\n  aerospikeAccessControl:\n    roles:\n      - name: profiler\n        privileges:\n          - read\n    users:\n      - name: profileUser\n        secretName: new-profile-user-secret\n        roles:\n          - profiler\n          - user-admin\n\n      - name: admin\n        secretName: auth-secret\n        roles:\n          - sys-admin\n          - user-admin\n")),(0,s.kt)("p",null,"Save and exit the CR file, then use kubectl to apply the change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f aerospike-cluster.yaml\n")),(0,s.kt)("h2",{id:"remove-a-role"},"Remove a Role"),(0,s.kt)("p",null,"Remove the desired role from the ",(0,s.kt)("inlineCode",{parentName:"p"},"roles")," list under ",(0,s.kt)("inlineCode",{parentName:"p"},"aerospikeAccessControl"),". Also remove this role from the ",(0,s.kt)("inlineCode",{parentName:"p"},"roles")," list of all the users."),(0,s.kt)("p",null,"Remove the ",(0,s.kt)("inlineCode",{parentName:"p"},"profiler")," role."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: asdb.aerospike.com/v1beta1\nkind: AerospikeCluster\nmetadata:\n  name: aerocluster\n  namespace: aerospike\n\nspec:\n  .\n  .\n  aerospikeAccessControl:\n    users:\n      - name: profileUser\n        secretName: new-profile-user-secret\n        roles:\n          - sys-admin\n\n      - name: admin\n        secretName: auth-secret\n        roles:\n          - sys-admin\n          - user-admin\n")),(0,s.kt)("p",null,"Save and exit the CR file, then use kubectl to apply the change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f aerospike-cluster.yaml\n")),(0,s.kt)("h2",{id:"remove-a-user"},"Remove a user"),(0,s.kt)("p",null,"Remove the desired user from the ",(0,s.kt)("inlineCode",{parentName:"p"},"users")," list under ",(0,s.kt)("inlineCode",{parentName:"p"},"aerospikeAccessControl"),"."),(0,s.kt)("p",null,"Remove ",(0,s.kt)("inlineCode",{parentName:"p"},"profileUser")," user."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: asdb.aerospike.com/v1beta1\nkind: AerospikeCluster\nmetadata:\n  name: aerocluster\n  namespace: aerospike\n\nspec:\n.\n.\n  aerospikeAccessControl:\n    users:\n      - name: admin\n        secretName: auth-secret\n        roles:\n          - sys-admin\n          - user-admin\n")),(0,s.kt)("p",null,"Save and exit the CR file, then use kubectl to apply the change."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f aerospike-cluster.yaml\n")))}d.isMDXComponent=!0}}]);