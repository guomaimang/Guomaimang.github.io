import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as n,e as t}from"./app-20cb2ce2.js";const e={},o=t('<h1 id="networking-protocols" tabindex="-1"><a class="header-anchor" href="#networking-protocols" aria-hidden="true">#</a> Networking Protocols</h1><figure><img src="https://pic.hanjiaming.com.cn/2024/05/09/d170d3e2a5e09.png" alt="1715244529078.png" tabindex="0" loading="lazy"><figcaption>1715244529078.png</figcaption></figure><p>如何将数据报发送到群集中正确的物理主机？</p><ul><li>IP 数据报包含一个 IP 地址 <ul><li>IP 地址在操作系统中配置（例如 DHCP）</li></ul></li><li>大多数集群交换机都在数据链路层「datalink」（第 2 层）运行。 <ul><li>L2交换机只理解MAC地址</li><li>端口的概念只存在于计算机中</li></ul></li><li>需要将 IP 地址映射到 MAC 地址的方法</li></ul><p><u>Solution: Address Resolution Protocol</u></p><img src="https://pic.hanjiaming.com.cn/2024/05/05/a33452ca4daa0.png" alt="1714906636069.png" style="zoom:30%;"><h2 id="arp-protocol" tabindex="-1"><a class="header-anchor" href="#arp-protocol" aria-hidden="true">#</a> ARP Protocol</h2><p>Address Resolution Protocol「地址解析协议」</p><figure><img src="https://pic.hanjiaming.com.cn/2024/05/05/2048668154b73.png" alt="1714907623129.png" tabindex="0" loading="lazy"><figcaption>1714907623129.png</figcaption></figure><ul><li>A Network Layer (Layer 2)protocol</li><li>Translates the IP address of a computer on a local network to an equivalent layer 2 address (MAC address)</li></ul><p>Example: Sending a packet from machine A to B using level-2 switch.</p><ul><li>问题：给定 B 的 IP 地址，如何确定 B 的 MAC 地址？</li><li>ARP Protocol: A 想要向 B 发送数据报，而 A 不知道 B 的 MAC 地址。</li><li>Solution: <ul><li>A 广播 ARP 查询数据包，其中包含 B 的 IP 地址 <ul><li>Dest MAC address: FF-FF-FF-FF-FF-FF</li><li><strong>all machines on LAN receive ARP query</strong></li></ul></li><li>B receives ARP packet, replies to A with its (B&#39;s)MAC address (unicast) <ul><li>Dest MAC address = A&#39;s MAC address</li></ul></li><li>A 在其 ARP 表中缓存（保存）IP 到 MAC 地址对，直到信息变旧（超时）</li><li>ARP is &quot;plug-and-play「即插即用」&quot;: 节点无需网络管理员干预即可创建 ARP 表 <ul><li>节点无需网络管理员的干预即可创建其 ARP 表</li></ul></li></ul></li></ul><h2 id="arp-packet-format" tabindex="-1"><a class="header-anchor" href="#arp-packet-format" aria-hidden="true">#</a> ARP Packet Format</h2><figure><img src="https://pic.hanjiaming.com.cn/2024/05/05/4c589b972c297.png" alt="1714910064089.png" tabindex="0" loading="lazy"><figcaption>1714910064089.png</figcaption></figure><p>example</p><figure><img src="https://pic.hanjiaming.com.cn/2024/05/05/7ed2ff7257546.png" alt="1714910395850.png" tabindex="0" loading="lazy"><figcaption>1714910395850.png</figcaption></figure><h2 id="arp-table" tabindex="-1"><a class="header-anchor" href="#arp-table" aria-hidden="true">#</a> ARP Table</h2><p>由于为每个 IP 数据报发送 ARP 请求/应答的效率很低，因此主机会对当前条目 ARP 表进行缓存。</p><p>LAN上的每个IP节点（主机、路由器）都有一个ARP表</p><ul><li>ARP Table: IP/MAC address mappings for some LAN nodes:IP address; MAC address; TTL&gt;</li><li>TTL (Time To Live):time after which address mapping will be forgotten (typically 20 min)</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2024/05/05/57ad7dc47af71.png" alt="1714911402118.png" tabindex="0" loading="lazy"><figcaption>1714911402118.png</figcaption></figure><h2 id="arp-command" tabindex="-1"><a class="header-anchor" href="#arp-command" aria-hidden="true">#</a> ARP Command</h2><ul><li>arp 命令本身用于查看 ARP 表中的当前信息。</li><li>该表将网段上机器的 IP 地址与它们的 MAC 地址进行了映射。</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2024/05/05/528cbbf9de132.png" alt="1714911721912.png" tabindex="0" loading="lazy"><figcaption>1714911721912.png</figcaption></figure><h2 id="nat-protocol" tabindex="-1"><a class="header-anchor" href="#nat-protocol" aria-hidden="true">#</a> NAT Protocol</h2><p>如何将数据包从专用网络内的集群节点发送到外部世界（反之亦然）？</p><figure><img src="https://pic.hanjiaming.com.cn/2024/05/05/3674c14eb386e.png" alt="1714912094254.png" tabindex="0" loading="lazy"><figcaption>1714912094254.png</figcaption></figure><p>NAT is a router function where IP addresses (and possibly port numbers) of IP datagrams are replaced at the boundary of a private network</p><ul><li>Run on routers that connect private networks to the public Internet</li><li>Replace the IP address-port pair <u>of an IP packet</u> with another IP address-port pair</li><li>使专用网络「private network」上的主机能够与 Internet 上的主机进行通信</li></ul><p>Also known as:</p><ul><li>IP Masquerading - Linux</li><li>Port Address Translation (PAT) - Cisco</li></ul><div class="hint-container note"><p class="hint-container-title">Private Network</p><p>Private IP network is an IP network that is not directly connected to the Internet.</p><ul><li>Not allocated to any specific organization</li><li>Non-routable: IP packets addressed by them cannot be transmitted onto the public Internet</li></ul><p>Private IP address ranges:</p><img src="https://pic.hanjiaming.com.cn/2024/05/05/509346147c04d.png" alt="1714912602556.png" style="zoom:25%;"></div><p>这些地址通常用于家庭、办公室和企业局域网（LAN）。</p><figure><img src="https://pic.hanjiaming.com.cn/2024/05/05/6140baa7a7bf4.png" alt="1714912691966.png" tabindex="0" loading="lazy"><figcaption>1714912691966.png</figcaption></figure><h2 id="nat-motivation" tabindex="-1"><a class="header-anchor" href="#nat-motivation" aria-hidden="true">#</a> NAT Motivation</h2><p>Motivation: &quot;Single Entry Point&quot; -&gt; <strong>uses just one IP address</strong> for the whole cluster as far as outside world is concerned:</p><ul><li>可以在不通知外界的情况下更改本地网络中设备的IP地址（易于使用）</li><li>可以在不改变本地网络设备IP地址的情况下更换ISP（方便管理）</li><li>Devices inside local net not explicitly addressable, visible by outside world (more secure).「本地网内的设备不可明确寻址，但可被外界看到（更安全）。」</li></ul><p>Claim: 50% of broadband users are behind NATs</p><p>Outgoing Web Client Through NAT:</p><figure><img src="https://pic.hanjiaming.com.cn/2024/05/05/b8a1ded6a1874.png" alt="1714922465953.png" tabindex="0" loading="lazy"><figcaption>1714922465953.png</figcaption></figure><figure><img src="https://pic.hanjiaming.com.cn/2024/05/05/6e4cad55ff8fa.png" alt="1714922534921.png" tabindex="0" loading="lazy"><figcaption>1714922534921.png</figcaption></figure><p>原理：实际上是NAT服务器在做端口映射。</p><figure><img src="https://pic.hanjiaming.com.cn/2024/05/05/57d2c2e78ea0d.png" alt="1714922778208.png" tabindex="0" loading="lazy"><figcaption>1714922778208.png</figcaption></figure><figure><img src="https://pic.hanjiaming.com.cn/2024/05/05/9d080c914ef51.png" alt="1714922626507.png" tabindex="0" loading="lazy"><figcaption>1714922626507.png</figcaption></figure><p>*注意：伪装会更改源端口以及源地址，以确保多路分解。值取决于实现。</p>',45),l=[o];function r(p,c){return a(),n("div",null,l)}const d=i(e,[["render",r],["__file","protocols.html.vue"]]);export{d as default};
