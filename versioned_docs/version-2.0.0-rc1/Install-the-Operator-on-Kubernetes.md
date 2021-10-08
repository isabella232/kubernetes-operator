---
title: Install the Operator On Kubernetes
description: Install The Operator On Kubernetes
---

## Create a Kubernetes cluster

To use the Aerospike Kubernetes Operator, you will need a working Kubernetes cluster matching the supported kubernetes versions [here](System-Requirements.md#what-does-it-support).

### Production Kubernetes Cluster

If you need to set up a new cluster: [See here for official guides](https://kubernetes.io/docs/setup/production-environment/)

There are specific guides for:

* [Amazon EKS](https://docs.aws.amazon.com/eks/latest/userguide/create-cluster.html)
* [Google GKE](https://cloud.google.com/kubernetes-engine/docs/how-to/creating-a-zonal-cluster)
* [Microsoft AKS](https://docs.microsoft.com/en-us/azure/aks/tutorial-kubernetes-deploy-cluster)

### Development/test Cluster

For prototyping and testing it is useful to use a local Kubernetes deployment.

The ones we have used include:

* [MicroK8s](https://microk8s.io/)
* [Minikube](https://github.com/kubernetes/minikube)

## Install operator
Aerospike Kubernetes Operator deployment requires the following
 - operator-sdk
 - Operator Lifecycle Manager (OLM) 

### Install operator-sdk

Install operator-sdk version 1.10.1 using the
installation [guide](https://v1-10-x.sdk.operatorframework.io/docs/installation/)

### Install Operator Lifecycle Manager (OLM)

We recommend using Operator Lifecycle Manager (OLM) for running and managing the Aerospike Kubernetes Operator in production environments. OLM is a tool to help manage the Operators running on your cluster. It is the preferred
way to manage Kubernetes operators in production.

Install OLM if not already done

```shell
operator-sdk olm install
```

### Install operator with OLM

Create **aerospike** namespace (if it does not exist) where the operator will be deployed.

```shell
kubectl create namespace aerospike
```

The operator can be installed targeting
 - Single namespace - Aerospike cluster can be deployed only in a single specified Kubernetes namespace
 - Multiple namespaces - Aerospike clusters can be deployed in a specified list of Kubernetes namespaces
 - All namespaces - Aerospike clusters can be deployed in any Kubernetes namespace

#### Install the operator targeting a single namespace

Run the operator bundle

```shell
operator-sdk run bundle docker.io/aerospike/aerospike-kubernetes-operator-bundle:2.0.0-rc1 --namespace=aerospike
```

#### Install the operator targeting multiple namespaces

Assuming you want the operator to target two other namespaces ns1 and ns2, install the operator with MultiNamespace
install mode like so

```shell
operator-sdk run bundle docker.io/aerospike/aerospike-kubernetes-operator-bundle:2.0.0-rc1 --namespace=aerospike --install-mode MultiNamespace=ns1,ns2
```

#### Install the operator targeting all namespaces

Assuming you want the operator to target all namespaces, deploy the operator with AllNamespaces
install mode like so

```shell
operator-sdk run bundle docker.io/aerospike/aerospike-kubernetes-operator-bundle:2.0.0-rc1 --namespace=aerospike --install-mode AllNamespaces
```

### RBAC for other namespaces
See [RBAC for other namespace](Multiple-Aerospike-clusters.md#rbac-for-other-namespaces) to allow the operator to deploy clusters to other namespace.

### Verify Operator is running

Verify that the operator's CSV is in the `Succeeded` phase.
```sh
$ kubectl get csv -n aerospike

NAME                                   DISPLAY                         VERSION       REPLACES   PHASE
aerospike-kubernetes-operator.v2.0.0-rc1   Aerospike Kubernetes operator   2.0.0-rc1-RC1                    Succeeded
```

Verify that the operator's pod is running.
```sh
$ kubectl get pod -n aerospike
NAME                                                              READY   STATUS      RESTARTS   AGE
8482eb34f7d78a439197c55407627a46e72cf3a8bec5e7681fb24d71e16dk9k   0/1     Completed   0          28s
aerospike-operator-controller-manager-68d476f957-6fxzk            2/2     Running     0          19s
ospike-aerospike-kubernetes-operator-bundle-nightly-2-0-0-RC1   1/1     Running     0          33s
```

This step could take some time initially as the operator image needs to be downloaded the first time.

### Check Operator logs

Use the pod name obtained above to check the Operator logs.
```sh
$ kubectl -n aerospike logs -f aerospike-operator-controller-manager-68d476f957-6fxzk -c manager
```
```
...
2021-10-04T10:49:49.854Z        INFO    controller-runtime.webhook      registering webhook     {"path": "/validate-asdb-aerospike-com-v1beta1-aerospikecluster"}
2021-10-04T10:49:49.855Z        INFO    setup   Starting manager
I1004 10:49:49.855341       1 leaderelection.go:243] attempting to acquire leader lease aerospike/96242fdf.aerospike.com...
2021-10-04T10:49:49.855Z        INFO    controller-runtime.manager      starting metrics server {"path": "/metrics"}
2021-10-04T10:49:49.855Z        INFO    controller-runtime.webhook.webhooks     starting webhook server
2021-10-04T10:49:49.865Z        INFO    controller-runtime.certwatcher  Updated current TLS certificate
2021-10-04T10:49:49.865Z        INFO    controller-runtime.webhook      serving webhook server  {"host": "", "port": 9443}
2021-10-04T10:49:49.865Z        INFO    controller-runtime.certwatcher  Starting certificate watcher
I1004 10:50:05.193195       1 leaderelection.go:253] successfully acquired lease aerospike/96242fdf.aerospike.com
2021-10-04T10:50:05.193Z        DEBUG   controller-runtime.manager.events       Normal  {"object": {"kind":"ConfigMap","namespace":"aerospike","name":"96242fdf.aerospike.com","uid":"72d1586a-9319-4422-8ffd-f65abc8213b5","apiVersion":"v1","resourceVersion":"65652278"}, "reason": "LeaderElection", "message": "aerospike-operator-controller-manager-68d476f957-6fxzk_78411aa7-eaa1-4cf9-923f-6a242411970b became leader"}
2021-10-04T10:50:05.193Z        DEBUG   controller-runtime.manager.events       Normal  {"object": {"kind":"Lease","namespace":"aerospike","name":"96242fdf.aerospike.com","uid":"73e28bbe-df8d-4689-88fc-350c5e5c14e3","apiVersion":"coordination.k8s.io/v1","resourceVersion":"65652279"}, "reason": "LeaderElection", "message": "aerospike-operator-controller-manager-68d476f957-6fxzk_78411aa7-eaa1-4cf9-923f-6a242411970b became leader"}
2021-10-04T10:50:05.193Z        INFO    controller-runtime.manager.controller.aerospikecluster  Starting EventSource    {"reconciler group": "asdb.aerospike.com", "reconciler kind": "AerospikeCluster", "source": "kind source: /, Kind="}
2021-10-04T10:50:05.193Z        INFO    controller-runtime.manager.controller.aerospikecluster  Starting EventSource    {"reconciler group": "asdb.aerospike.com", "reconciler kind": "AerospikeCluster", "source": "kind source: /, Kind="}
2021-10-04T10:50:05.193Z        INFO    controller-runtime.manager.controller.aerospikecluster  Starting Controller     {"reconciler group": "asdb.aerospike.com", "reconciler kind": "AerospikeCluster"}
2021-10-04T10:50:05.395Z        INFO    controller-runtime.manager.controller.aerospikecluster  Starting workers        {"reconciler group": "asdb.aerospike.com", "reconciler kind": "AerospikeCluster", "worker count": 8}

....
```

## Next
 - [Create the Aerospike cluster](Create-Aerospike-cluster.md)
 - [Cluster configuration settings](Cluster-configuration-settings.md)
