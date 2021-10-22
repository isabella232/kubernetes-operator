---
title: Create Aerospike Cluster on OpenShift
description: Learn how to deploy the Aerospike Kubernetes Operator on RedHat OpenShift using a metadata bundle, then use this to deploy an Aerospike cluster.
---

Learn how to install the Aerospike Kubernetes Operator on RedHat OpenShift on GCP using a metadata bundle, then use this to deploy an Aerospike cluster.

## Prerequisites

Before using the following instructions to install the Operator, you must create an OpenShift private cluster on GCP. We have instructions on how to [create an OpenShift (OKD) private cluster on GCP here.](Create-OpenShift-Private-Cluster-GCP.md).

You will also need a Docker login and password. If you don't already have one, you can sign up for a free account [on the Docker website](https://hub.docker.com/signup).

## Prepare the Host

SSH into your bastion host. Specify the name of your GCP zone, OpenShift cluster, and GCP project.

```shell
gcloud beta compute ssh --zone "[GCP zone]" "[cluster name]"  --project "[GCP project]"
```

For example, the command to SSH into a bastion host in `asia-south1-a` with cluster name `spk-dev-1` in GCP project `aerospike-dev` is:

```shell
gcloud beta compute ssh --zone "asia-south1-a" "spk-dev-1"  --project "aerospike-dev"
```

Install the prerequisites.

```shell
sudo -i
dnf update
dnf install -y wget
dnf install -y  git
dnf install -y  gcc
dnf install -y  make
dnf install -y  podman
ln -s /usr/bin/podman /usr/bin/docker
docker login  -u [Docker username]-p [Docker password] docker.io
```

Go to the working directory.

```shell
cd /workdir
```

Install Go.

```shell
wget https://golang.org/dl/go1.17.1.linux-amd64.tar.gz
rm -rf /usr/local/go && tar -C /usr/local -xzf go1.17.1.linux-amd64.tar.gz
"export PATH=$PATH:/usr/local/go/bin" >> ~/.bash_profile
```

Install OPM.

```shell
wget https://github.com/operator-framework/operator-registry/releases/download/v1.18.1/linux-amd64-opm
chmod +x linux-amd64-opm && mv linux-amd64-opm /usr/bin/opm
```

Install the Operator SDK.

```shell
wget https://github.com/operator-framework/operator-sdk/releases/download/v1.10.0/operator-sdk_linux_amd64
chmod +x operator-sdk_linux_amd64 && mv operator-sdk_linux_amd64 /usr/bin/operator-sdk
```

## Build the Metadata Bundle

Go to the working directory.

```shell
cd /workdir
```

Clone the Operator GitHub repository.

```shell
git clone https://github.com/aerospike/aerospike-kubernetes-operator.git
git checkout olm-cert-paths-bugfix
```

Generate the bundle.

```shell
CHANNELS=stable DEFAULT_CHANNEL=stable OPENSHIFT_VERSION=v4.6 IMG=docker.io/davi17g/aerospike-kubernetes-operator-nightly:2.0.0-5-dev make bundle
```

This will create a `bundler.Dockerfile` to build the bundle as a Docker image, as well as a `bundle` directory with the following contents:

```
$ tree bundle

bundle
|-- manifests
|   |-- aerospike-kubernetes-operator.clusterserviceversion.yaml
|   |-- aerospike-operator-controller-manager-metrics-service_v1_service.yaml
|   |-- aerospike-operator-manager-config_v1_configmap.yaml
|   |-- aerospike-operator-metrics-reader_rbac.authorization.k8s.io_v1_clusterrole.yaml
|   |-- aerospike-operator-webhook-service_v1_service.yaml
|   `-- asdb.aerospike.com_aerospikeclusters.yaml
|-- metadata
|   `-- annotations.yaml
`-- tests
    `-- scorecard
        `-- config.yaml

4 directories, 8 files
```

Build and push the catalog source and the bundle to a container registry.

```shell
IMAGE_TAG_BASE=docker.io/davi17g/aerospike-kubernetes-operator-nightly VERSION=2.0.0-5-dev make bundle-build bundle-push catalog-build catalog-push
```

Build the Operator image and push it to the container registry.

```shell
make generate
make manifests
make docker-build docker-push IMG=davi17g/aerospike-kubernetes-operator-nightly:2.0.0-6-dev
```

## Deploy the Operator Using the Metadata Bundle on OpenShift

Create a `CatalogSource` which references the catalog source image.

```yaml
cat << EOF | oc apply -f -
apiVersion: operators.coreos.com/v1alpha1
kind: CatalogSource
metadata:
  name: aerospike-operators
  namespace: openshift-marketplace
spec:
  sourceType: grpc
  image: docker.io/davi17g/aerospike-kubernetes-operator-nightly-catalog:v2.0.0-5-dev
  displayName: Aerospike Operators
  publisher: Red Hat Partner
  updateStrategy:
    registryPoll:
      interval: 2m
EOF
```

Create a new project named `aerospike`.

```shell
oc new-project aerospike
```

Create an `OperatorGroup` which specifies the `targetNamespaces` configuration for the Operator.

```yaml
cat << EOF | oc apply -f -
apiVersion: operators.coreos.com/v1alpha2
kind: OperatorGroup
metadata:
  name: aerospike-group
  namespace: aerospike
spec:
  targetNamespaces:
    - aerospike
EOF
```

Create `Subscription`. This deploys the Aerospike Operator.

```yaml
cat << EOF | oc apply -f -
apiVersion: operators.coreos.com/v1alpha1
kind: Subscription
metadata:
  name: aerospike-subscription
spec:
  channel: stable
  installPlanApproval: Automatic
  name: aerospike-kubernetes-operator
  source: aerospike-operators
  sourceNamespace: openshift-marketplace
EOF
```

Full output:

```
$ oc get subscriptions
NAME                     PACKAGE                         SOURCE                CHANNEL
aerospike-subscription   aerospike-kubernetes-operator   aerospike-operators   stable

$ oc get installplan
NAME            CSV                                    APPROVAL    APPROVED
install-xvjq6   aerospike-kubernetes-operator.v2.0.0   Automatic   true

$ oc get clusterserviceversion
NAME                                   DISPLAY                         VERSION   REPLACES   PHASE
aerospike-kubernetes-operator.v2.0.0   Aerospike Kubernetes Operator   2.0.0                Succeeded

$ oc get all
NAME                                                         READY   STATUS    RESTARTS   AGE
pod/aerospike-operator-controller-manager-7655d684c7-88dzc   2/2     Running   0          78m

NAME                                                            TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)    AGE
service/aerocluster                                             ClusterIP   None             <none>        3000/TCP   73m
service/aerospike-operator-controller-manager-metrics-service   ClusterIP   172.30.181.203   <none>        8443/TCP   78m
service/aerospike-operator-controller-manager-service           ClusterIP   172.30.96.238    <none>        443/TCP    78m
service/aerospike-operator-webhook-service                      ClusterIP   172.30.168.253   <none>        443/TCP    78m

NAME                                                    READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/aerospike-operator-controller-manager   1/1     1            1           78m

NAME                                                               DESIRED   CURRENT   READY   AGE
replicaset.apps/aerospike-operator-controller-manager-7655d684c7   1         1         1       78m

NAME                             READY   AGE
statefulset.apps/aerocluster-0   0/0     8m22s
```

## Deploy the Aerospike Cluster

Create a secret to store the `features.conf` file.

```shell
oc create secret generic aerospike-secret --from-file=./features.conf
```

Deploy the `AerospikeCluster` custom resource to verify deployment.

```yaml
cat << EOF | oc apply -f -
apiVersion: asdb.aerospike.com/v1beta1
kind: AerospikeCluster
metadata:
  name: aerocluster
  namespace: aerospike
spec:
  size: 2
  image: aerospike/aerospike-server-enterprise:5.6.0.7
  podSpec:
    multiPodPerHost: true
  validationPolicy:
    skipWorkDirValidate: true
    skipXdrDlogFileValidate: true
  storage:
    volumes:
      - name: aerospike-config-secret
        source:
          secret:
            secretName: aerospike-secret
        aerospike:
          path: /etc/aerospike/secret
  aerospikeConfig:
    service:
      feature-key-file: /etc/aerospike/secret/features.conf
    security:
      enable-security: false
    network:
      service:
        port: 3000
      fabric:
        port: 3001
      heartbeat:
        port: 3002
    namespaces:
      - name: test
        memory-size: 3000000000
        replication-factor: 2
        storage-engine:
          type: memory
EOF
```
