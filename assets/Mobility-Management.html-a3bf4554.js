import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as s,f as c,a as i,b as l,d as a,e as n}from"./app-20cb2ce2.js";const h={},d=n('<h1 id="mobility-management" tabindex="-1"><a class="header-anchor" href="#mobility-management" aria-hidden="true">#</a> Mobility Management</h1><p>为什么要进行移动性管理？</p><ul><li>网络需要跟踪移动用户</li><li>在有线网络中，一个设备和它的位置之间存在着固定的关系</li><li>在无线网络中，移动设备可以自由移动，因此它的网络接入点会随着它在网络覆盖区的移动而改变。 <ul><li>一个移动设备的ID不再提供移动设备的位置信息</li><li>每个设备的位置都必须由网络来维护</li></ul></li></ul><p>The main objectives</p><ul><li>位置管理 - 确定移动设备在某一特定时间的位置 <ul><li>位置信息对于建立连接和信息传递是必需的。</li><li>随着移动设备的开机、移动或关机，位置信息需要在位置数据库中更新。</li><li>移动用户的移动造成了设备位置的不确定性，需要由网络来处理。</li></ul></li><li>交接管理 - 在移动设备继续移动和改变其对网络的接入点时保持连接</li></ul>',5),u=n('<hr><p>蜂窝网络中的移动性管理</p><h2 id="handoff-management" tabindex="-1"><a class="header-anchor" href="#handoff-management" aria-hidden="true">#</a> Handoff Management</h2><h3 id="handoff-process" tabindex="-1"><a class="header-anchor" href="#handoff-process" aria-hidden="true">#</a> Handoff process</h3><ul><li>The process of transferring an ongoing call <strong>from one channel</strong> connected to the <em>core network</em> <strong>to another channel</strong>;</li><li>During the call, the old traffic channel is released and a new traffic channel is assigned</li></ul><h3 id="reasons-for-handoff" tabindex="-1"><a class="header-anchor" href="#reasons-for-handoff" aria-hidden="true">#</a> Reasons for handoff</h3><ul><li>Mobile user moves out of the coverage of a BS「移动基站」</li><li>信号强度恶化「deteriorates」，低于阈值「threshold」</li><li>Traffic load management</li></ul><h3 id="four-stages" tabindex="-1"><a class="header-anchor" href="#four-stages" aria-hidden="true">#</a> Four stages</h3><ol><li>Handoff initialization: User or network agent identifies the need for handoff</li><li>New connection generation: 网络为交接连接寻找资源，并为连接的建立执行额外的路由操作。</li><li>Data-flow control: Network controls the delivery of the data-flow from the former connection path to the new connection path according to the agreement upon the service「网络根据<em>服务协议</em>控制数据流从原来的连接路径向新的连接路径的传输。」</li><li>Handoff completion: The unneeded resources of the previous connection are released</li></ol><h3 id="dissociation-and-re-association-operations" tabindex="-1"><a class="header-anchor" href="#dissociation-and-re-association-operations" aria-hidden="true">#</a> Dissociation and re-association operations</h3><ul><li>Dissociation <ul><li>MS is dissociated with old BS</li><li>Traffic channel assigned to MS in old BS is released</li></ul></li><li>Re-association <ul><li>MS is associated with new BS</li><li>Traffic channel in new BS is assigned to MS to support the ongoing call</li></ul></li></ul><h3 id="handoff-decision-algorithms" tabindex="-1"><a class="header-anchor" href="#handoff-decision-algorithms" aria-hidden="true">#</a> Handoff Decision Algorithms</h3><p>交接决策算法决定了 触发启动交接过程决定的条件</p><p>交接决策算法是基于 当前 和 邻近cell 的 接收信号强度（RSS）或 接收信号功率P。</p><img src="https://pic.hanjiaming.com.cn/2022/12/07/23cb90ce7cf38.png" alt="1670412905402.png" style="zoom:33%;"><img src="https://pic.hanjiaming.com.cn/2022/12/07/36771be26400e.png" alt="1670414730098.png" style="zoom:33%;"><h3 id="切换过程的类型-硬切换和软切换" tabindex="-1"><a class="header-anchor" href="#切换过程的类型-硬切换和软切换" aria-hidden="true">#</a> 切换过程的类型：硬切换和软切换</h3><ul><li>Hard handoff <ul><li>“Break before make” connection <ul><li>MS stays connected to only one cell at a time</li><li>在与目标cell建立连接之前，MS中断与旧cell的连接</li></ul></li><li>在切换期间造成瞬间通话中断</li><li>例如，<strong>FDMA 和 TDMA</strong> 系统使用硬切换</li></ul></li><li>Soft handoff <ul><li>“Make before break” connection <ul><li>在执行交接时，MS可以同时连接到多个cell，并使用合并的多个信号</li><li>然后，它选择一个单元，并放弃其他单元</li></ul></li><li>MS 立即从旧连接切换到新连接而不会中断通话</li><li>例如，<strong>CDMA</strong>系统使用软交接。</li></ul></li></ul><h3 id="intra-cell-vs-inter-cell-vs-inter-msc" tabindex="-1"><a class="header-anchor" href="#intra-cell-vs-inter-cell-vs-inter-msc" aria-hidden="true">#</a> Intra-cell vs Inter-cell vs Inter-MSC</h3><p><img src="https://pic.hanjiaming.com.cn/2022/12/07/46913141b518d.png" alt="1670415516557.png" style="zoom:25%;"><img src="https://pic.hanjiaming.com.cn/2022/12/07/47a2e7b4bb9dc.png" alt="1670415535253.png" style="zoom:25%;"><img src="https://pic.hanjiaming.com.cn/2022/12/07/26e2f1a3e57d4.png" alt="1670415584698.png" style="zoom:25%;"></p><ul><li>Intra-cell handoff <ul><li>MS在cell内移动，但跨越扇区边界，或者MS在原流量信道中遇到无法忍受的信号强度下降</li><li>BS在同一cell找到一个具有适当信号强度的新流量通道</li><li>User’s call is transferred to the new channel</li><li>MS’s dissociation/re-association involve the traffic channels <strong>within the same cell</strong></li><li><strong>MSC does not involve in the handoff</strong></li></ul></li><li>Inter-cell handoff <ul><li>移动台进入相邻cell</li><li>用户的呼叫被转移到目标cell的一个新的流量通道上</li><li>交接发生在由同一MSC管理的不同BS之间</li><li>MS的分离/再分离涉及两个BS的流量通道，以及每个BS和同一个MSC之间的链接，所有这些都在MSC的协调下进行</li></ul></li><li>Inter-MSC handoff <ul><li>MS的移动跨越了两个细胞的边界，而这两个细胞是由不同的MSCs管理的。</li><li>Handoff occurs between different BSs that connect to different MSCs</li><li>MS的分离/重新关联涉及两个BS的流量通道，通过不同MSC和BS之间的链接，以及MSC之间的链接。</li><li>两种MSC都涉及交接</li></ul></li></ul><h2 id="location-management" tabindex="-1"><a class="header-anchor" href="#location-management" aria-hidden="true">#</a> Location Management</h2><p>Location management</p><ul><li>Locate and track MSs</li><li>Discover the current access point of the MS for call/message delivery</li><li>Update the location database</li></ul><p>Two main methods for location management</p><ul><li>Without location update</li><li>Location update with location areas (LAs)</li></ul><h3 id="without-location-update" tabindex="-1"><a class="header-anchor" href="#without-location-update" aria-hidden="true">#</a> Without Location Update</h3><ul><li>Basic idea <ul><li>网络没有维护 MS 的当前位置信息</li><li>每当有呼叫到达时，网络就会在覆盖区域内发送搜索信息。</li><li>当 MS 收到搜索信息时，MS 对信息进行回复，以便网络找到 MS 的位置。</li></ul></li><li>Advantages <ul><li>Simplicity「简洁性」</li><li>No location update cost</li></ul></li><li>Disadvantages <ul><li>High searching cost for incoming calls</li><li>Need some response time for searching MS</li></ul></li></ul><h3 id="location-update-with-location-areas" tabindex="-1"><a class="header-anchor" href="#location-update-with-location-areas" aria-hidden="true">#</a> Location Update with Location Areas</h3><p>Location area (LA)</p><ul><li>网络被划分为若干个不重叠的分区</li><li>每个分区由一定数量的相邻单元组成，称为LA</li><li>LA对位置的不确定性提出了一个上限「upper bound」</li></ul><img src="https://pic.hanjiaming.com.cn/2022/12/07/356af9cd26ab0.png" alt="1670419763956.png" style="zoom:33%;"><ul><li>Basic idea <ul><li>MS 向系统报告其当前的 LA 信息 - 位置更新：周期性地或当 MS 移动穿过 LA 边界时</li><li>系统通过位置更新维护 MS 的 LA <ul><li>它知道MS位于哪个LA</li><li>但它不知道 MS 精确定位在哪个 cell</li></ul></li><li>当一个新信息到达时，系统只搜索 LA 内部的 MS</li></ul></li><li>Advantage <ul><li>由于系统将搜索区域限制在 LA 内，因此节省了搜索成本</li></ul></li></ul><h3 id="location-database" tabindex="-1"><a class="header-anchor" href="#location-database" aria-hidden="true">#</a> Location Database</h3><p>位置信息被保存在两个位置数据库中：归属位置寄存器「home location register」 (HLR) 和 访客位置寄存器visitor location register」 (VLR)</p><ul><li>HLR <ul><li>A home DB for each MS「每个MS的主数据库」</li><li>Located at a pre-specified zone「位于一个预先指定的区域」</li><li>在 &quot;用户档案 &quot;中维护用户数据和当前的LA</li><li>当MS移动时，LA信息将被更新。</li></ul></li><li>VLR <ul><li>一个动态数据库，包含关于MS的临时信息。</li><li>位于MSC，为来访的MS提供服务</li><li>当一个MS移动到一个新的MSC区域时，该MSC的VLR将从HLR请求关于MS的信息。</li><li>如果MS稍后进行呼叫，VLR将拥有呼叫设置所需的信息，而不必每次都查询HLR。</li></ul></li></ul><h3 id="location-management-operations" tabindex="-1"><a class="header-anchor" href="#location-management-operations" aria-hidden="true">#</a> Location Management Operations</h3><ul><li>Subscription：当用户订阅服务时，在 HLR 中永久创建用户配置文件记录</li><li>Location update (registration) <ul><li>MS在需要时向网络发送位置更新报告（例如，当它通电时，或移动到新的区域）。</li><li>网络更新位置数据库中 MS 的 LA 信息</li><li>Network authenticates the MS</li><li>网络更新位置数据库中MS的LA信息</li></ul></li><li>Call delivery <ul><li>Network queries the precise location information of MS when a call arrives「当呼叫到达时，网络查询MS的精确位置信息」</li><li>网络要求BSs在本地广播「broadcast」一个寻呼「paging」信息</li><li>Target MS replies so that the network knows the precise cell where MS locates</li><li>Call is delivered to the BS of the found cell</li></ul></li></ul>',38),g={id:"location-update-process",tabindex:"-1"},p=i("a",{class:"header-anchor",href:"#location-update-process","aria-hidden":"true"},"#",-1),f=i("ul",null,[i("li",null,"U1: MS进入新的LA并向BS发送位置更新信息"),i("li",null,"U2：信息转发给MSC，MSC向VLR发起注册查询"),i("li",null,[l("U3：如果MS被VLR知道，VLR更新成新的位置，注册完成；"),i("br"),l(" 否则VLR确定MS的HLR的位置并向HLR发送位置注册消息。")]),i("li",null,[l("U4：HLR对MS进行认证，更新数据库中当前VLR的身份，并向VLR确认位置注册；"),i("br"),l(" 用户资料的全部或部分可能被转发给新的VLR。")]),i("li",null,"U5：HLR向旧的VLR发送注册取消信息"),i("li",null,"U6：旧VLR删除MS的记录并确认取消")],-1),M=i("img",{src:"https://pic.hanjiaming.com.cn/2022/12/07/39e0c0feba019.png",alt:"1670424940027.png",style:{zoom:"33%"}},null,-1),m={id:"call-delivery-process",tabindex:"-1"},H=i("a",{class:"header-anchor",href:"#call-delivery-process","aria-hidden":"true"},"#",-1),S=i("ul",null,[i("li",null,"C1: MS x makes a call request to BS for MS y"),i("li",null,"C2：消息被转发到 MSC 并且查询 y 的 VLR 以获取 y 的位置"),i("li",null,"C3：如果失败，查询接收者y的HLR"),i("li",null,"C4：HLR确定y的当前VLR，并向VLR发送路由请求信息。"),i("li",null,"C5：y 的 VLR 对其 HLR 的响应"),i("li",null,"C6：HLR将位置信息转发给x的MSC"),i("li",null,"C7：呼叫x的MSC建立到y的接收MSC的连接"),i("li",null,"C8: Receiving MSC pages y via all the cells in the LA in which y is currently located"),i("li",null,"C9: y通过服务BS回复；MSC将cell内的业务信道分配给y，完成x和y之间的呼叫连接")],-1),A={id:"paging-process",tabindex:"-1"},L=i("a",{class:"header-anchor",href:"#paging-process","aria-hidden":"true"},"#",-1),b=n('<ol><li>当呼叫到达时，系统通过要求MS可能居住的cell的BS在本地广播寻呼信息，启动对目标MS的搜索。</li><li>所有的MS都能听到寻呼信息，但只有目标MS会发回响应信息</li><li>该地区的几个BS可能会听到响应信息。他们都会向MSC报告MS在他们的覆盖范围内，并报告信号强度的测量结果。</li><li>MSC收到这些报告，选择信号最强的一个作为目标MS的服务BS。</li></ol><h3 id="parallel-paging-vs-sequential-paging" tabindex="-1"><a class="header-anchor" href="#parallel-paging-vs-sequential-paging" aria-hidden="true">#</a> Parallel Paging vs Sequential Paging</h3><ul><li>Parallel paging <ul><li>All cells are paged simultaneously「所有单元格同时被分页」</li><li>减少延迟 - 有利于有延迟限制的分页</li></ul></li><li>Sequential paging <ul><li>Cells are paged once a time until the MS is located <ul><li>最短距离优先：系统从MS最后更新的位置开始，按照最短距离第一的顺序对小区进行排序，并根据顺序对小区进行分页</li><li>最高定位概率优先：系统估计MS可能在LA内的每个单元中定位的概率，按照概率递减的顺序对单元进行排序，并按照顺序对单元进行排序。</li></ul></li><li>节省带宽 - 有利于在没有延迟限制的情况下进行传呼</li></ul></li></ul>',3),C={id:"location-management-cost",tabindex:"-1"},R=i("a",{class:"header-anchor",href:"#location-management-cost","aria-hidden":"true"},"#",-1),y=n('<figure><img src="https://pic.hanjiaming.com.cn/2022/12/11/f74644a8e3fa0.png" alt="1670700587503.png" tabindex="0" loading="lazy"><figcaption>1670700587503.png</figcaption></figure><h3 id="location-management-issues" tabindex="-1"><a class="header-anchor" href="#location-management-issues" aria-hidden="true">#</a> Location Management Issues</h3><p>影响位置管理性能的因素很多</p><ul><li>Size of location area</li><li>Location update methods</li><li>Location database organization</li></ul><p>位置管理需要</p><ul><li>最大限度地降低位置管理成本（数据库的更新成本和查询成本）。</li><li>在位置更新成本和呼叫传递成本之间做出权衡</li></ul><h3 id="size-of-location-areas" tabindex="-1"><a class="header-anchor" href="#size-of-location-areas" aria-hidden="true">#</a> Size of Location Areas</h3><p>Big size vs. small size</p><ul><li>Big LA <ul><li>降低位置更新成本</li><li>增加寻呼成本</li></ul></li><li>Small LA <ul><li>增加位置更新成本</li><li>降低寻呼成本</li></ul></li></ul>',9),x={id:"location-update-methods",tabindex:"-1"},w=i("a",{class:"header-anchor",href:"#location-update-methods","aria-hidden":"true"},"#",-1),v=n('<h4 id="static-las-vs-dynamic-las" tabindex="-1"><a class="header-anchor" href="#static-las-vs-dynamic-las" aria-hidden="true">#</a> Static LAs vs. dynamic LAs</h4><ul><li>Static LAs 是固定的区域，可能不符合流动性变化和呼叫模式。例如，位于LA边界的用户可能在两个LA之间来回移动，这导致频繁的位置更新信息</li><li>dynamic LAs 可以根据某些标准来确定。MS的位置更新过程可以基于时间、用户移动水平和用户密度水平等因素 <ul><li>例如，用户的高流动性可能导致大量的LA</li><li>结合使用位置更新和传呼操作</li><li>在它们之间做一个权衡</li></ul></li></ul><h4 id="动态位置更新方案" tabindex="-1"><a class="header-anchor" href="#动态位置更新方案" aria-hidden="true">#</a> 动态位置更新方案</h4><figure><img src="https://pic.hanjiaming.com.cn/2022/12/11/4a580c9f15925.png" alt="1670701114680.png" tabindex="0" loading="lazy"><figcaption>1670701114680.png</figcaption></figure><ul><li>基于时间：MS 以固定时间间隔（使用时间阈值）定期执行位置更新</li><li>基于距离：MS定位更新是通过移动到离前一个位置足够远的位置来触发的（使用距离阈值）</li><li>基于运动：MS的定位更新是通过跨越一定数量的不同小区边界来触发的（使用移动阈值）。 <ul><li>在某些情况下是有用的，例如，用户在LA边界之间来回移动</li></ul></li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/12/11/e30e1a12fae61.png" alt="1670701137297.png" tabindex="0" loading="lazy"><figcaption>1670701137297.png</figcaption></figure><h3 id="location-database-organization" tabindex="-1"><a class="header-anchor" href="#location-database-organization" aria-hidden="true">#</a> Location Database Organization</h3><p>位置信息应该被组织起来，以减少查询成本和更新成本。</p><h4 id="hlr-vlr的缺点" tabindex="-1"><a class="header-anchor" href="#hlr-vlr的缺点" aria-hidden="true">#</a> HLR/VLR的缺点</h4><ul><li>HLR对一个MS的分配是永久性的 <ul><li>用户可以永久移动到一个新的地方，但仍然必须联系以前的 HLR</li><li>例如，如果MS被转移到欧洲，而其HLR在中国，成本将非常高。</li></ul></li><li>没有利用流动的地域性 <ul><li>用户倾向于在当地流动</li><li>如果MS目前位于远离其HLR的地方，例如MS在欧洲漫游而其HLR在中国，那么成本也会非常高。</li></ul></li></ul><h4 id="enhanced-schemes" tabindex="-1"><a class="header-anchor" href="#enhanced-schemes" aria-hidden="true">#</a> Enhanced schemes</h4><ul><li><p>用于最小化HLR查询成本的呼叫传递方案</p><ul><li>每个用户的位置缓存 <ul><li>每次调用用户x时，x的VLR被缓存在调用者c的MSC的VLR中。</li><li>随后对x起源的任何调用，只要x没有移动到一个新的LA，任何从该MSC发起的对x的后续调用都可以重复使用这一信息。</li><li>问题：如何处理无效的缓存？ <ul><li>急切的缓存 - 每当一个用户移动到一个新的LA，这个用户的VLR的所有缓存条目都会被更新。<strong>如果用户经常移动，位置更新成本会增加</strong></li><li>惰性缓存：不执行缓存更新；调用时，先访问缓存的VLR；如果被击中，完成；如果错过，请联系 HLR。<strong>错过时有额外的成本，因为必须先访问缓存的VLR。</strong></li></ul></li></ul></li><li>用户资料复制 <ul><li>观察：每个用户通常与少数用户进行频繁的交流</li><li>如何利用这一观察？ <ul><li>提前在选定的VLR上复制这些经常被呼叫的用户的用户资料</li><li>当从某个LA发起呼叫时，相应的MSC会确定被叫MS的用户配置文件的复制是否在本地可用。 <ul><li>如果可用，则不需要 HLR 查询</li></ul></li></ul></li><li>当MS移动到另一个LA时，网络会更新MS的用户配置文件的所有复制。</li><li>查询HLR的成本可以降低，但位置更新的开销会更高。</li></ul></li></ul></li><li><p>用于最小化HLR位置更新成本的方案</p><ul><li>Pointer forwarding <ul><li>每当一个MS移动到一个新的LA，一个转发指针就会从它以前的VLR建立到新的VLR上。</li><li>对MS的呼叫将首先查询HLR以确定第一个VLR，然后沿着链路到达当前VLR</li><li>指针链的长度可以被限制在一个最大值K，以减少定位MS的延迟。</li><li>当指针链的长度达到K时，不允许额外的转发，并将位置变化报告给HLR</li><li>这种方法可以减少更新HLR的成本，但可能会导致更长的搜索延迟。</li></ul></li><li>Local anchoring<br><img src="https://pic.hanjiaming.com.cn/2022/12/11/faa22c72f88d0.png" alt="1670737211733.png" style="zoom:50%;"><ul><li>靠近 MS 的 VLR 被选为本地锚点</li><li><strong>当 MS 移动到一个新的LA时，MS将对本地锚进行位置更新，而不是MS的HLR</strong></li><li>在对 MS 的呼叫请求到达之前，MS 的本地锚点不会更改</li><li>当有新的呼叫到来时，为用户服务的 VLR 成为新的本地锚点，并向 HLR 进行位置更新</li><li>这个方案可以避免频繁更新HLR</li><li>缺点是，当用户不断移动而没有收到任何呼叫时，对本地锚点的更新可能会变得无用。</li></ul></li></ul></li></ul><hr><p>无线 IP 网络中的移动性管理</p><h2 id="mobile-ip" tabindex="-1"><a class="header-anchor" href="#mobile-ip" aria-hidden="true">#</a> Mobile IP</h2><p>IP stands for Internet protocol</p><ul><li>一个用于互联网的网络层协议</li><li>IP假设终端主机在固定的物理位置，IP地址与终端主机绑定在一起 <ul><li>每个IP地址都有网络部分和主机部分（网络ID+主机ID）。</li></ul></li><li>IP地址使IP路由算法能够将数据包发送到正确的网络。 <ul><li>中间路由器在转发数据包时查看网络ID</li></ul></li></ul><p>如果主机在网络之间移动会怎样？</p><ul><li>移动主机「Mobile Host（MH）」移动到一个新的网络时不能改变IP地址</li><li>如果没有特定的支持，当 MH 远离其专用网络时，消息传递到 MH 是不可能的</li><li>The solution is using mobile IP</li></ul><p>移动IP是作为一种透明地处理MH的流动性的手段而开发的。</p><ul><li>尽管移动主机可能连接到任何 assess point，但允许使用永久地址将数据包路由到 M H</li><li>使MH能够在网络之间无缝移动，而不会在发送数据包时中断进程</li><li>不需要更改 非MHs/路由器 的软件</li><li>不需要更改 IP 地址或 IP 地址格式</li><li>需要额外的基础设施组件</li></ul><h2 id="mobile-ip-architecture" tabindex="-1"><a class="header-anchor" href="#mobile-ip-architecture" aria-hidden="true">#</a> Mobile IP Architecture</h2><ul><li>Mobile host (MH): 移动主机（MH）可以在不改变其IP地址的情况下从一个网络改变其接入点到另一个网络。</li><li>Home address: When a MH has been registered at the home network, it has a permanent IP address called its home address</li><li>Home network: 当 MH 在归属网络注册后，它有一个永久的 IP 地址，称为归属地址</li><li>Foreign network: The network where the MH currently accesses the network</li><li>Care-of-address (COA): 当一个MH在国外网络中定位时，它有一个临时的IP地址，称为 &quot;关心地址&quot;，它可以识别MH在国外网络中的当前位置。</li><li>Home agent (HA): 位于 MH Home network 中的路由器</li><li>具有额外的功能 <ul><li>Advertise itself periodically</li><li>Bind MH’s home address with its COA</li><li>Forward packets to foreign network when MH is away</li><li>Encapsulate messages that are delivered to MH</li></ul></li><li>Foreign agent (FA) <ul><li>位于外部网络的另一台路由器用于 MH</li><li>具有增强的功能 <ul><li>Advertise itself periodically</li><li>当 MH 远离 HA 时，它使用 FA 向 HA 发送/接收数据</li><li>转发MH的注册请求</li><li>解封传递给MH的信息</li></ul></li></ul></li><li>Correspondent host (CH)「通讯员」：一个CH，不管是固定的还是移动的，都可以向MH发送数据包。</li></ul><img src="https://pic.hanjiaming.com.cn/2022/12/11/6e91917d8f507.png" alt="1670739049365.png" style="zoom:50%;"><h2 id="location-management-1" tabindex="-1"><a class="header-anchor" href="#location-management-1" aria-hidden="true">#</a> Location Management</h2><ul><li>Agent Discovery</li><li>Registration</li><li>Data Delivery</li></ul><h3 id="agent-discovery" tabindex="-1"><a class="header-anchor" href="#agent-discovery" aria-hidden="true">#</a> Agent Discovery</h3><p>MH 使用发现程序来识别他们的 HA 和 FA</p><ul><li>MH must determine if it is attached to its home network or a foreign network <ul><li>MH 侦听来自 HA 和 FA 的周期性 ICMP 路由器通告消息</li><li>如果需要立即发布广告，MH也可以发出一个ICMP路由器请求消息。</li><li>MH compares network ID of the router&#39;s IP address with the network ID of MH’s IP address <ul><li>The same network ID, MH stays at home network</li><li>Different network IDs, MH locates at a foreign network</li></ul></li><li>如果MH被转移到另一个国外网络，它需要从FA获得一个新的COA</li></ul></li></ul><h3 id="registration" tabindex="-1"><a class="header-anchor" href="#registration" aria-hidden="true">#</a> Registration</h3><ul><li>MH must register when <ul><li>一个MH进入了一个新的网络区域</li><li>注册的计时器已过期</li></ul></li><li>注册包括 <ul><li>MH registers itself with the FA and gets a COA</li><li>MH 向它的 HA 注册自己，通知它的 HA 当前的 COA。这是由 FA 代表 MH 完成的</li><li>MH 过期续签</li></ul></li><li>Deregistration：当MH返回主网络时，它自己取消了注册。</li></ul><h3 id="registration-procedure" tabindex="-1"><a class="header-anchor" href="#registration-procedure" aria-hidden="true">#</a> Registration Procedure</h3><p>MH 使用注册程序将其 COA 通知 HA。</p><ul><li>MH向FA发送注册请求，并提供其 Home address</li><li>FA 将注册请求转发给 HA</li><li>如果 HA 接受注册，它会更新将 MH 的 Home address 与其 COA 相关联的移动性绑定表</li><li>HA 通知 FA 注册被接受</li><li>FA 更新其访客列表，将 MH 的 Home address 映射到其 MAC 地址和 FA 地址</li><li>FA通知MH，注册已被接受</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/12/11/d6462f4071217.png" alt="1670741892624.png" tabindex="0" loading="lazy"><figcaption>1670741892624.png</figcaption></figure><h3 id="data-delivery" tabindex="-1"><a class="header-anchor" href="#data-delivery" aria-hidden="true">#</a> Data Delivery</h3><p>隧道「Tunneling」 - 在本地网络和外国网络之间建立一个隧道，并在隧道中向该MH发送封装的数据。</p><ul><li>当CH向MH发送数据包时，所有数据包的目的地址都是MH的Home address，因此，所有数据包都被发送到Home network。</li><li>在接收到数据包后，HA识别出数据包的目标地址属于MH。然后 <ul><li>HA在其移动性绑定表中查找MH的COA</li><li>该数据包被包裹在一个新的数据包中，COA作为新数据包的目标地址 - 被称为封装。</li><li>HA将数据包转发到拥有COA的国外网络。</li></ul></li><li>FA 识别 COA，解包（简称解封装）并使用其原始 home address 发送给 MH</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/12/11/e629873420267.png" alt="1670742730420.png" tabindex="0" loading="lazy"><figcaption>1670742730420.png</figcaption></figure><h3 id="routing-inefficiency" tabindex="-1"><a class="header-anchor" href="#routing-inefficiency" aria-hidden="true">#</a> Routing Inefficiency</h3><ul><li>隧道化导致路由效率低下</li><li>Triangle routing</li><li>Double crossing</li></ul><h3 id="routing-optimization" tabindex="-1"><a class="header-anchor" href="#routing-optimization" aria-hidden="true">#</a> Routing Optimization</h3><p>路由优化—让 MH 将其 COA 告知 CH，因此 CH可以直接将数据包发送给MH</p><ul><li>当HA收到不在家的MH的数据包时，HA会向CH发送绑定更新信息。 <ul><li>绑定更新信息有MH的当前COA</li><li>CH缓存COA，未来的数据包直接发送到COA。</li></ul></li><li>当MH移动到新的FA时，缓存在CH中的COA就会变得陈旧。 <ul><li>如果不重新传输到新地址，发送到旧FA的数据包可能会被丢弃。</li><li>绑定可能会过时，然后 CH 向 MH 的 HA 发送绑定请求消息</li></ul></li></ul><h2 id="handoff-management-1" tabindex="-1"><a class="header-anchor" href="#handoff-management-1" aria-hidden="true">#</a> Handoff Management</h2><p>当 MH 移动到新的 FA2</p><ul><li>FA 定期发送广告信息</li><li>MH 注册到新的FA2</li><li>FA2向HA发送移动性绑定</li><li>FA2通知旧FA1更新MH的位置</li><li>FA1 向 FA2 发送 ACK</li><li>FA1将MH的任何数据包转发给FA2</li><li>FA2向MH发送交接完成信息</li></ul><p>当 CH 向旧 FA 发送数据包时</p><ul><li>如果老FA知道MH现在的FA</li><li>该数据包被转发到当前的FA</li><li>老的 FA 向 HA 发送绑定警告信息</li><li>HA 向 CH 发送绑定更新消息</li><li>未来的数据包将直接发送到新的FA</li></ul><p>如果旧的FA不知道MH的现任FA</p><ul><li>该数据包被转发到HA</li><li>HA将数据包转发给当前的FA</li><li>HA向CH发送绑定更新消息</li><li>未来的数据包将直接发送到新的FA</li></ul>',51);function _(F,I){const e=o("Badge");return r(),s("div",null,[d,c(" more "),u,i("h3",g,[p,l(" Location Update Process"),a(e,{text:"算法设计",type:"info"})]),f,M,i("h3",m,[H,l(" Call Delivery Process"),a(e,{text:"算法设计",type:"info"})]),S,i("h3",A,[L,l(" Paging Process"),a(e,{text:"算法设计",type:"info"})]),b,i("h3",C,[R,l(" Location Management Cost "),a(e,{text:"计算题",type:"info"})]),y,i("h3",x,[w,l(" Location Update Methods"),a(e,{text:"算法设计",type:"info"})]),v])}const k=t(h,[["render",_],["__file","Mobility-Management.html.vue"]]);export{k as default};
