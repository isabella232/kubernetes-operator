---
title: Install the Operator On OpenShift on GCP
description: Install The Operator On OpenShift on GCP
---

Learn the steps to set up an OpenShift (OKD) private cluster on GCP.

## Prerequisites

* Access to a valid GCP project.
* Install and set up the `gcloud` CLI tool with the proper credentials.

## Set Up Networking

Create a VPC. Set the name of the new VPC and specify your existing project.

```shell
gcloud compute networks create [VPC name] --project=[project name]--subnet-mode=custom --mtu=1460 --bgp-routing-mode=regional
```

For example, the command to create the VPC `spk-dev-vpc` in the `aerospike-dev` project is:

```shell
gcloud compute networks create spk-dev-vpc --project=aerospike-dev --subnet-mode=custom --mtu=1460 --bgp-routing-mode=regional
```

Create a private subnet. Set the name of the new subnet and specify your existing project and network.

```shell
gcloud compute networks subnets create [subnet name] --project=[project name]--range=10.100.0.0/24 --network=[network name] --region=asia-south1 --enable-private-ip-google-access
```

Create a router. Set the name of the new router and specify your existing project and network.

```shell
gcloud compute routers create [router name] --project=[project name] --region=asia-south1 --network=[network name]
```

Create a NAT. Set the name of the new NAT and specify your existing project and router.

```shell
gcloud compute routers nats create [NAT name] --project=[project name] --router-region asia-south1 --router [router name] --nat-all-subnet-ip-ranges --auto-allocate-nat-external-ips
```

## Bastion Host

Next, set up a [bastion](https://access.redhat.com/documentation/en-us/reference_architectures/2018/html/deploying_and_managing_openshift_3.9_on_google_cloud_platform/components_and_considerations#bastion_instance) host to run the OpenShift installer.

Add firewall rules. Set the name of the new firewall rule and specify your existing project and network.

```shell
gcloud compute --project=[project name] firewall-rules create [firewall-rule-allow-ssh] --direction=INGRESS --priority=1000 --network=[network name] --action=ALLOW --rules=tcp:22 --source-ranges=0.0.0.0/0
gcloud compute --project=[project name] firewall-rules create [firewall-rule-allow-http] --direction=INGRESS --priority=1000 --network=[network name] --action=ALLOW --rules=tcp:80 --source-ranges=0.0.0.0/0 --target-tags=http-server
gcloud compute --project=[project name] firewall-rules create [firewall-rule-allow-https] --direction=INGRESS --priority=1000 --network=[network name] --action=ALLOW --rules=tcp:443 --source-ranges=0.0.0.0/0 --target-tags=https-server
```

Create a GCP instance to use as a bastion host. Set the name of the new instance and specify your existing project and the subnet you created above.

```shell
gcloud compute instances --project=[project name] create [instance name] \
  --zone=asia-south1-a \
  --machine-type=n1-standard-4 \
  --subnet=[subnet name] \
  --network-tier=PREMIUM \
  --no-restart-on-failure \
  --maintenance-policy=TERMINATE \
  --preemptible \
  --service-account=openshift-private-spk-manager@aerospike-dev.iam.gserviceaccount.com \
  --scopes=https://www.googleapis.com/auth/cloud-platform \
  --image=centos-8-v20210701 \
  --image-project=centos-cloud \
  --boot-disk-size=20GB \
  --boot-disk-type=pd-balanced \
  --boot-disk-device-name=spk-dev-1 \
  --no-shielded-secure-boot \
  --shielded-vtpm \
  --shielded-integrity-monitoring \
  --reservation-affinity=any
  ```
SSH into the bastion host. Specify the name of your zone, instance, and project.

```shell
gcloud beta compute ssh --zone "[zone name]" "[instance name]"  --project "[project name]"
```

## Prepare the Environment for OKD Installation

Switch to the superuser and set up prerequisites.

```shell
sudo -i
dnf update
dnf install -y wget
```

Create a working directory and move into it.

```shell
cd /
mkdir workdir/
cd workdir/
```

Download and install the OKD Install package.

```shell
wget https://github.com/openshift/okd/releases/download/4.6.0-0.okd-2021-02-14-205305/openshift-install-linux-4.6.0-0.okd-2021-02-14-205305.tar.gz
tar -xvzf openshift-install-linux-4.6.0-0.okd-2021-02-14-205305.tar.gz
mv openshift-install /usr/bin/openshift-install
```

Download and install the OKD client.

```shell
wget https://github.com/openshift/okd/releases/download/4.6.0-0.okd-2021-02-14-205305/openshift-client-linux-4.6.0-0.okd-2021-02-14-205305.tar.gz
tar –xvzf openshift-client-linux-4.6.0-0.okd-2021-02-14-205305.tar.gz
mv oc /usr/bin/oc
```

## Generate a Keypair for Cluster Node Access

Use `ssh-keygen -t ed25519 -N ''` to generate an SSH key.

```
ssh-keygen -t ed25519 -N ''

Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/username/.ssh/id_ed25519):
Your identification has been saved in /home/username/.ssh/id_ed25519.
Your public key has been saved in /home/username/.ssh/id_ed25519.
The key fingerprint is:
SHA256:TN0P15XI6XKRcfzd6wQQZaHa6kEpis1HaaNVbjgSo4o spkesan@spk-dev-1
The key randomart image is:
+--[ED25519 256]--+
|           .+=B.o|
|         . -o*.*.|
|     o  ....= o =|
|    . oo= +. S  +|
|   . . XS* .o o .|
|. . + B * .    o |
|A. . = . o    0  |
|      . . .    . |
|         .       |
+----[SHA256]-----+
```

Start `ssh-agent` if it's not already running.

```shell
eval "$(ssh-agent -s)"
```

Add the private key to the agent.

```shell
ssh-add ~/.ssh/id_ed25519
```

## Set Up Google Application Credentials and Install the Config File

Generate and download your service account key, then update your ENV with the location of the JSON file.

```shell
export GOOGLE_APPLICATION_CREDENTIALS=[path/to/service account key json file]
```

You may want to add this command to `~/.bash_profile` so you don't have to repeat this step for every new session.

```shell
"export PATH=$PATH:/usr/local/go/bin" >> ~/.bash_profile
```

Create a file `/workdir/install-config.yaml` with the following content. Specify the name of your domain, cluster name, network, subnet, and SSH public key. Use the output of `cat ~/.ssh/id_ed25519.pub` for the SSH public key.


```yaml
apiVersion: v1
baseDomain: [yourdomain.com]
controlPlane:
  hyperthreading: Enabled
  name: master
  platform:
    gcp:
      type: n1-standard-4
      zones:
      - [GCP zone]
      osDisk:
        diskType: pd-ssd
        diskSizeGB: 256
  replicas: 1
compute:
- hyperthreading: Enabled
  name: worker
  platform:
    gcp:
      type: n1-standard-4
      zones:
      - [GCP zone]
      osDisk:
        diskType: pd-standard
        diskSizeGB: 128
  replicas: 2
metadata:
  name: [cluster name]
networking:
  clusterNetwork:
  - cidr: 10.128.0.0/14
    hostPrefix: 23
  machineNetwork:
  - cidr: 10.100.0.0/24
  networkType: OVNKubernetes
  serviceNetwork:
  - 172.30.0.0/16
platform:
  gcp:
    projectID: [GCP project name]
    region: [GCP region]
    network: [network name]
    controlPlaneSubnet: [subnet name]
    computeSubnet: [subnet name]
pullSecret: '{"auths":{"fake":{"auth":"aWQ6cGFzcwo="}}}'
sshKey: [SSH public key]
publish: Internal
```

## Run the OpenShift Installer

Create an installation directory.

```shell
mkdir /workdir/install-dir
```

Copy `install-config.yaml` to the installation directory.

```shell
cp /workdir/install-config.yaml /workdir/install-dir/install-config.yaml
```

Run the installer.

```shell
cd /workdir/
openshift-install create cluster --dir=install-dir/ --log-level=debug
```
:::important
Make sure not to lose the files in the `/workdir/install-dir` directory. These files are needed for the uninstall process.
:::

After the installation is complete, your OpenShift cluster is ready. Set up your kubeconfig file.

```shell
export KUBECONFIG=/workdir/install-dir/auth/kubeconfig
```

You may want to add this command to `~/.bash_profile` so you don't have to repeat this step for every new session.

```shell
echo "export KUBECONFIG=/workdir/install-dir/auth/kubeconfig" >> ~/.bash_profile
```

Use `oc get nodes` to check on the cluster.

```shell
$ oc get nodes

NAME                                                            STATUS   ROLES    AGE     VERSION
spk-dev-openshift-clu-lpb2b-master-0.c.aerospike-dev.internal   Ready    master   3h26m   v1.19.2+f173eb4-1049
spk-dev-openshift-clu-lpb2b-worker-a-hgz7k                      Ready    worker   3h14m   v1.19.2+f173eb4-1049
spk-dev-openshift-clu-lpb2b-worker-a-z7sld                      Ready    worker   3h14m   v1.19.2+f173eb4-1049
```

## Uninstall the OpenShift Cluster

SSH into your bastion host. Specify the zone name, cluster name, and project name.  

```shell
gcloud beta compute ssh --zone "[GCP zone]" "[cluster name]"  --project "[project name]"
```

For example:

```shell
gcloud beta compute ssh --zone "asia-south1-a" "spk-dev-1"  --project "aerospike-dev"
```

Delete the bastion host instance. Specify the cluster name, project name, and zone name.

```shell
gcloud compute instances delete "spk-dev-1" --project "aerospike-dev" --zone "asia-south1-a"
```

Unset the firewall rules. Specify the names of the firewall rules you created when you set up the cluster and your project name.

```shell
gcloud compute firewall-rules delete [firewall-rule-allow-ssh] [firewall-rule-allow-http] [firewall-rule-allow-https] --project [project name]
```

Delete the subnet. Specify the name of your subnet and GCP region.

```shell
gcloud compute networks subnets delete [subnet name] --region=[GCP region]
```

Delete the VPC. Specify the name of your VPC.

```shell
gcloud compute networks delete [VPC name]
```

Delete the NAT. Specify your NAT name, project name, router name, and GCP region.

```shell
gcloud compute routers nats delete [NAT name] --project=[project name] --router=[router name] --region=[GCP region]
```

Delete the router. Specify your router name, project name, and GCP region.

```shell
gcloud compute routers delete [router name] --project=[project name] --region=[GCP region]
```
