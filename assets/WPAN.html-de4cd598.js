import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as a,e}from"./app-20cb2ce2.js";const n={},t=e('<h1 id="wpan" tabindex="-1"><a class="header-anchor" href="#wpan" aria-hidden="true">#</a> WPAN</h1><ul><li>PAN：一个以个人为中心的网络</li><li>设备都是用无线连接的</li></ul><p>通信范围短--设备在个人空间内通信（从几厘米到几米）。大多是ad hoc网络--自我发现。功耗低，成本低</p><h2 id="wpan-applications" tabindex="-1"><a class="header-anchor" href="#wpan-applications" aria-hidden="true">#</a> WPAN Applications</h2><ul><li>以无线方式将笔记本电脑与打印机、PDA、无线鼠标、数码相机等连接。</li><li>移动电话和免提耳机之间的无线连接</li><li>在狭小的空间里，在需要很少带宽的PC之间进行无线联网</li><li>以无线方式将身体传感器连接到手机或专用医疗设备上</li></ul><h2 id="wpan-标准" tabindex="-1"><a class="header-anchor" href="#wpan-标准" aria-hidden="true">#</a> WPAN 标准</h2><ul><li>IrDA (Infrared Data Association)：IrDA是一个由行业赞助的组织，为红外链接中使用的硬件和软件制定国际标准。 <ul><li>IrDA有一套协议，定义了通过红外链路进行短距离数据交换的物理通信规范。</li></ul></li><li>Bluetooth</li><li>IEEE 802.15</li></ul><h2 id="bluetooth" tabindex="-1"><a class="header-anchor" href="#bluetooth" aria-hidden="true">#</a> Bluetooth</h2><ul><li>蓝牙是一种工业规格</li><li>提供 2.4 G Hz 频段的通用无线电接口，使电子设备能够通过短距离（10 - 100 m）自组织网络进行无线连接和通信</li><li>计算机和外围设备、手持设备、PDA、手机、耳机、遥控器、无线键盘等互连。</li></ul><h3 id="蓝牙特征" tabindex="-1"><a class="header-anchor" href="#蓝牙特征" aria-hidden="true">#</a> 蓝牙特征</h3><ul><li>使用未经许可的ISM频段</li><li>低成本：成本比无线局域网低</li><li>使用FHSS + TDD + TDMA进行传输</li><li>通过 piconet 和 scatternet 提供网络，用SCO和ACL链接支持语音和数据</li></ul><h3 id="传输" tabindex="-1"><a class="header-anchor" href="#传输" aria-hidden="true">#</a> 传输</h3><h3 id="跳频-时分双工" tabindex="-1"><a class="header-anchor" href="#跳频-时分双工" aria-hidden="true">#</a> 跳频+时分双工</h3><ul><li>蓝牙使用2.4GHz ISM频段进行通信。</li><li>蓝牙使用**跳频（FH）**来抑制干扰 <ul><li>该频段被分为 79 个频道，每个频道1MHz。</li><li>每个通道都被划分为时隙，每个时隙625μs：每个时隙对应不同的频率</li><li>载体无线电以伪随机的方式从一个频道跳到另一个频道 <ul><li><strong>随机方式是由FH序列决定的</strong></li><li>跳跃率1600跳/秒（=1跳/0.625ms）</li></ul></li><li>蓝牙使用时分双工（TDD）进行发送方和接收方之间的通信：相邻的时隙被分配给通信。</li></ul></li></ul><img src="https://pic.hanjiaming.com.cn/2022/10/18/d48b6e4c052d9.png" alt="1666094374912.png" style="zoom:33%;"><h3 id="networking-piconet" tabindex="-1"><a class="header-anchor" href="#networking-piconet" aria-hidden="true">#</a> Networking: Piconet</h3><p>设备以特别的方式形成一个微微网</p><ul><li>1 master + 1~7 active slaves</li><li>同一piconet中的所有设备共享一个通道，该通道使用独特的FH模式</li><li>主站决定FH模式</li><li>从机必须同步到FH</li></ul><p>另有两种类型（parked 和 Standby）</p><ul><li>parked 的设备不会主动加入到 piconet 中，也就是说，它们没有连接，但被知道并可以被重新激活。</li><li>如果一个 parked 的设备想进行通信，并且已经有7个活动的从属设备，一个从属设备必须切换到停放模式</li><li>Standby 设备不加入 piconet 中</li></ul><img src="https://pic.hanjiaming.com.cn/2022/10/18/c714eae4e540f.png" alt="1666094334872.png" style="zoom:33%;"><h3 id="form-a-piconet" tabindex="-1"><a class="header-anchor" href="#form-a-piconet" aria-hidden="true">#</a> Form a Piconet</h3><ul><li>在形成一个小网之前，所有设备都处于待机「Standby」</li><li>第一台设备启动piconet并成为主站。</li><li>主站将其设备ID和时钟发送给其他人 <ul><li>设备ID（48位，全球唯一）决定了FH模式</li><li>时钟决定了FH模式中的相位</li></ul></li><li>一个设备需要将内部时钟调整到主站的时钟，以便作为一个从站加入到piconet中。 <ul><li>所有活动设备都被分配一个3位活动成员地址(AMA)</li><li>所有停放「parked」的设备都使用一个8位停放的成员地址（PMA）</li><li>standby devices have no addresses</li></ul></li><li>Master 和 slave 通过交替发送消息进行通信</li><li>TDMA用于支持 多个从机 与主机在picone内通信。</li></ul><img src="https://pic.hanjiaming.com.cn/2022/10/18/19bcb236aa6d7.png" alt="1666095005024.png" style="zoom:33%;"><h3 id="networking-scatternet" tabindex="-1"><a class="header-anchor" href="#networking-scatternet" aria-hidden="true">#</a> Networking: Scatternet</h3><p>多个微微网「piconets」形成一个散射网「scatternet」</p><ul><li>如果微微网彼此靠近，则它们具有重叠区域</li><li>一些设备可能同时扮演双重角色 <ul><li>一个设备可以是一个piconet的主站，也可以是另一个piconet的从站（M/S）。</li><li>或者可以是两个微微网 (S/S) 中的从站</li><li>不能成为两个小网的主站</li></ul></li></ul><img src="https://pic.hanjiaming.com.cn/2022/10/18/166bebd1adbee.png" alt="1666095132439.png" style="zoom:33%;"><p>Communication</p><ul><li>每个piconet使用独特的FH序列</li><li>一个S/S设备可以同步到不同的FH序列中，以参与不同的piconets。</li><li>一个M/S设备可以暂停其当前的piconet（无流量）并同步到另一个piconet上</li></ul><h3 id="语音和数据的-sco和acl" tabindex="-1"><a class="header-anchor" href="#语音和数据的-sco和acl" aria-hidden="true">#</a> 语音和数据的 SCO和ACL</h3><p>「SCO and ACL for Voice and Data」</p><ul><li>Polling-based TDD transmission: 主机轮询从机，从机在相邻插槽中回复</li><li>Synchronous Connection Oriented (SCO) link for voice: 周期性地使用对称的两个连续的单一槽位</li><li>Asynchronous Connection-less (ACL) link for data: 使用 1/3/5 - 可变数据包大小的时隙，非对称 BW S1</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/10/18/299a4cd342279.png" alt="1666095531673.png" tabindex="0" loading="lazy"><figcaption>1666095531673.png</figcaption></figure><h3 id="bluetooth-protocol-stack" tabindex="-1"><a class="header-anchor" href="#bluetooth-protocol-stack" aria-hidden="true">#</a> Bluetooth Protocol Stack</h3><p>...</p><h2 id="ieee-802-15" tabindex="-1"><a class="header-anchor" href="#ieee-802-15" aria-hidden="true">#</a> IEEE 802.15</h2><p>「IEEE 802.15 Standard Series」</p><p>802.15 标准由 IEEE 802.15 WPAN 工作组 (1999) 提出</p><ul><li>制定PANs或短距离无线网络的标准</li><li>有与蓝牙类似的目标：移动计算设备的无线联网</li><li>同时处理其他问题，例如，网络内的共存性和互操作性</li></ul>',40),o=[t];function r(c,h){return l(),a("div",null,o)}const p=i(n,[["render",r],["__file","WPAN.html.vue"]]);export{p as default};
