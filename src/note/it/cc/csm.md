---
article: false
date: 2024-02-29
index: true
order: 2
headerDepth: 1
---

# Cloud Service Model

## 云服务模式

![1709205332804.png](https://pic.hanjiaming.com.cn/2024/02/29/2e4218444fc64.png)

- Infrastructure as a service (laas): A form of cloud computing that delivers <u>fundamental compute, network, and storage resources to consumers on-demand</u>, over the internet, and on a **pay-as-you-go basis**.
- Platform as a service (paas): Provides customers **a development and hosting platform** for <u>deploying customer-created applications</u>.
- Software as a service (saas): A model of software deployment where an **application is hosted (in a cloud center) as a service** provided to customers across the internet.

![1709206766053.png](https://pic.hanjiaming.com.cn/2024/02/29/9834d66a78b92.png)

![1709206983587.png](https://pic.hanjiaming.com.cn/2024/02/29/ecc0128a8abc5.png)

![1709207014300.png](https://pic.hanjiaming.com.cn/2024/02/29/de0c3a0836956.png)

- laas：亚马逊弹性计算云（ec2）、谷歌计算引擎（gce）、微软azure laas、阿里巴巴云弹性计算服务（ecs）、.NET、微软云计算服务（laas）。
- Caas（laas 的另一种形式）：亚马逊弹性容器服务（ecs）、谷歌 kubernetes 引擎（gke）、docker 云、azure kubernetes 服务（aks）、腾讯 kubernetes 引擎
- Paas：谷歌应用程序引擎（gae），aws 弹性beanstalk，微软azure，..
- Faas（“轻量级 paas”）：aws lambda、google 云函数、azure 函数、ibm 云函数。

<img src="https://pic.hanjiaming.com.cn/2024/02/29/3d0eb441ce1dc.png" alt="1709207174763.png" style="zoom:33%;" />

## IAAS-Virtual Machines

允许不同的虚拟机（VM）共享底层物理机资源，每个虚拟机运行自己的操作系统。

虚拟化资源：虚拟CPU（vCPU）、虚拟网络接口（vNIC）、虚拟磁盘等。

![1709370535428.png](https://pic.hanjiaming.com.cn/2024/03/02/15885d5a87439.png)

- Virtualized Network Interface (vNIC)
  - 看起来很像任何物理以太网 NIC。
  - "Virtualized" MAC = address MAC address "assigned"to vNIC (eth0)
- Use of **software bridge** or **virtual switch** to <u>emulate a hardware bridge</u>

::: tip

VIF 表示虚拟机上的虚拟网卡

:::

![1709371167447.png](https://pic.hanjiaming.com.cn/2024/03/02/14cb7f7bb3b97.png)

<img src="https://pic.hanjiaming.com.cn/2024/03/02/c1b37bb7524f7.png" alt="1709371354802.png" style="zoom: 50%;" />

![CleanShot 2024-03-02 at 17.39.29@2x.png](https://pic.hanjiaming.com.cn/2024/03/02/6f4baab65b597.png)

## IAAS-EC2

![1709385334702.png](https://pic.hanjiaming.com.cn/2024/03/02/0adb3f6a10d42.png)

- An AWS EC2 Instance is nothing but a virtual machine in the AWS cloud「An AWS EC2 Instance is nothing but a virtual machine in the AWS cloud」
- Amazon Machine Image (AMI) = preconfigured server templates, which 提供启动 EC2 实例所需的信息

Choose an Amazon Machine Image (AMI): 

- Instance type:small,medium,micro,large,.
- Operating system:Linux,Windows...
- Architecture 32-bit or 64-bit
- Region:Asia Pacific,US,EU,
- Launch permissions:public/explicit/implicit
- Storage for the Root Device

![1709385791175.png](https://pic.hanjiaming.com.cn/2024/03/02/3bbb3b3ec7159.png)

## CAAS

### Container Technologies

容器位于物理服务器及其主机操作系统（通常为 Linux 或 Windows）之上。前言：谷歌使用容器运行几乎所有谷歌应用程序（如 Gmail、YouTube）

![1709385959549.png](https://pic.hanjiaming.com.cn/2024/03/02/91279318df7e3.png)

A “container” = a virtualized server

CaaS typically refers to a complete container environment「完整的容器环境」,including orchestration tools「编排工具」 (e.g.,Kubernetes), an image catalog「镜像目录」 (Registry), cluster management software 「集群管理软件」,and a set of developer tools and APls.

### Container Orchestration

容器协调器：实现容器生命周期管理自动化（创建/终止、资源分配、联网、自动扩展、故障恢复......）。

![1709386324568.png](https://pic.hanjiaming.com.cn/2024/03/02/af51ab620912e.png)

Tasks done by Container Orchestration

- Provisioning「调配」 and deployment「部署」 of s containers
- Redundancy「冗余」 and availability「可用性」 of containers
- 扩展或移除容器，以便在主机基础设施上均匀分布应用程序负载
- 在主机资源短缺或主机死亡的情况下，将容器从一台主机转移到另一台主机
- Allocation of resources between containers
- Load balancing between containers
- Health monitoring of containers and hosts
- Configuration of an application in relation to the containers running it

<img src="https://pic.hanjiaming.com.cn/2024/03/02/dfa935fcc8b6d.png" alt="1709387020971.png" style="zoom:50%;" />

## PAAS

云提供商为那些想创建服务但又不想构建自己的云基础设施的开发人员提供了一个基于互联网的平台。

- 目标用户: 云服务/应用程序开发人员
- “基于互联网的平台”：托管在云提供商基础设施上的一组基于网络的开发工具。

客户通过所提供的 APl 与平台进行交互（如编译、调试和部署）。

客户只需处理数据和应用程序，其余各层（如虚拟机/容器、软件）的管理则由 PaaS 服务提供商负责。

::: tip PaaS Example: Amazon Elastic Beanstalk

You simply upload your application,and AEB automatically handles the deployment from capacity provisioning「容量配置」,load balancing 「负载均衡」,scaling「缩放」, and application health monitoring.

:::

![1709387746233.png](https://pic.hanjiaming.com.cn/2024/03/02/278e19b154b9b.png)

## FaaS
