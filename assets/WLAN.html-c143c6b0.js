import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,e as t}from"./app-20cb2ce2.js";const r={},n=t('<h1 id="wlan" tabindex="-1"><a class="header-anchor" href="#wlan" aria-hidden="true">#</a> WLAN</h1><p>通过无线接入连接的局域网络（LAN）。</p><p>特征：very flexible, no wiring needed, save cost, robust, high-speed Internet access</p><img src="https://pic.hanjiaming.com.cn/2022/10/18/83f9af334a5ab.png" alt="1666096225060.png" style="zoom:33%;"><h2 id="wlan-网络基础设施" tabindex="-1"><a class="header-anchor" href="#wlan-网络基础设施" aria-hidden="true">#</a> WLAN 网络基础设施</h2><h3 id="infrastructure-network" tabindex="-1"><a class="header-anchor" href="#infrastructure-network" aria-hidden="true">#</a> Infrastructure network</h3><ul><li>物理上相互靠近的笔记本电脑（20-100米）被链接到一个接入点（AP）。</li><li>AP控制对共享通道的访问 <ul><li>例如，可以对 AP 进行编程以选择跳频序列之一，并且无线设备与相应的 FH 序列同步</li></ul></li><li>AP作为无线和有线网络之间的桥梁。</li><li>几个AP可以一起工作，提供更广泛的无线覆盖（例如，为整个建筑或校园）。</li></ul><img src="https://pic.hanjiaming.com.cn/2022/10/18/f6cdc968cbd5f.png" alt="1666096473000.png" style="zoom:33%;"><h3 id="ad-hoc-network" tabindex="-1"><a class="header-anchor" href="#ad-hoc-network" aria-hidden="true">#</a> Ad hoc network</h3><p>没有中央控制器，无线设备使用MAC协议（例如，IEEE 802.11使用CSMA/CA）来访问共享通道。</p><h2 id="wlan-standards" tabindex="-1"><a class="header-anchor" href="#wlan-standards" aria-hidden="true">#</a> WLAN Standards</h2><p>两套标准系列</p><ul><li>IEEE 802.11</li><li>ETSI HiperLAN（高性能无线局域网）</li></ul><h2 id="_802-11-system-architecture" tabindex="-1"><a class="header-anchor" href="#_802-11-system-architecture" aria-hidden="true">#</a> 802.11 System Architecture</h2><p><strong>Infrastructure-based WLAN</strong></p><ul><li>Station (STA)：具有无线介质访问机制的终端和与AP的无线电联系</li><li>Access Point (AP)：设备连接到分配系统，并提供与站点的无线连接</li><li>Basic Service Set (BSS)：一组使用相同无线电频率信道的站和AP</li><li>扩展服务集 (ESS) <ul><li>一组BSS整合在一起</li><li>ESS在LLC层看来与独立的BSS相同</li><li>移动台可以透明地从一个BSS移动到另一个LLC</li></ul></li><li>Distribution System (DS) :连接ESS中的AP以形成一个逻辑网络</li><li>Portal: 桥接到其他（有线）网络</li></ul><img src="https://pic.hanjiaming.com.cn/2022/10/18/92d8119dde13f.png" alt="CleanShot 2022-10-18 at 23.07.44@2x.png" style="zoom:33%;"><p><strong>Ad Hoc WLAN</strong></p><p>独立基本服务组合（IBSS）: A group of stations using the same radio frequency</p><img src="https://pic.hanjiaming.com.cn/2022/10/18/2397a2b4fb9e5.png" alt="1666106124841.png" style="zoom:33%;"><p>IEEE 802.11x规定了物理层（PHY）和介质访问控制（MAC）标准</p><img src="https://pic.hanjiaming.com.cn/2022/10/18/9637fb48775c7.png" alt="1666106280121.png" style="zoom:25%;"><h2 id="etsi" tabindex="-1"><a class="header-anchor" href="#etsi" aria-hidden="true">#</a> ETSI</h2><p><strong>ETSI: E</strong>uropean <strong>T</strong>elecommunications <strong>S</strong>tandards <strong>I</strong>nstitute</p><h2 id="wi-fi" tabindex="-1"><a class="header-anchor" href="#wi-fi" aria-hidden="true">#</a> Wi-Fi</h2><p>Stand for Wireless Fidelity, a family of wireless network protocols</p><p>Wi-Fi联盟（成立于1999年）由800多家公司组成，以认证产品的互操作性和向后兼容性，并推广基于IEEE 802.11标准的WLAN技术。</p><p>Wi-Fi联盟在2018年宣布了一个新的命名规则。</p><img src="https://pic.hanjiaming.com.cn/2022/10/18/4360f9a37499a.png" alt="1666107495234.png" style="zoom:50%;"><h2 id="hiper-lan" tabindex="-1"><a class="header-anchor" href="#hiper-lan" aria-hidden="true">#</a> Hiper LAN</h2><p>HiperLAN - 高性能无线局域网</p><ul><li>欧洲ETSI制定的无线局域网标准</li><li>该标准规定了MAC和PHY层的通用空中接口</li><li>在5.15 GHz和17.1 GHz频段上运行</li><li>覆盖范围为50米</li><li>专为 ad hoc 计算而设计</li></ul><p>一系列的标准</p><ul><li>HiperLAN/1 - 用于商业工作区的室内局域网（~20 Mbps）。</li><li>HiperLAN/2 - 室内宽带多媒体（~50 Mbps），用于室内宽带多媒体</li></ul>',34),l=[n];function s(c,o){return a(),e("div",null,l)}const p=i(r,[["render",s],["__file","WLAN.html.vue"]]);export{p as default};
