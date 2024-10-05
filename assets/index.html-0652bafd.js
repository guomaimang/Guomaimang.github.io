import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as t,e}from"./app-f3bc6681.js";const n={},a=e('<h1 id="what-is-blockchain" tabindex="-1"><a class="header-anchor" href="#what-is-blockchain" aria-hidden="true">#</a> What is Blockchain</h1><ol><li>introduces the basic underlying cryptographic concepts of blockchain<br> as a powerful tool<br> to support distributed ledgers in all digital transactions 「在所有数字交易中支持分布式分类账。」.</li><li>The significances of trust, anonymity 「匿名」, and consensus mechanisms 「共识机制」 are discussed.</li><li>further explores the applications of blockchain and smart contracts in various practical applications, including <ul><li>金融服务、分布式系统和特定领域</li><li>如智慧城市、医疗保健、物流和供应链等。</li></ul></li></ol><h2 id="outcomes" tabindex="-1"><a class="header-anchor" href="#outcomes" aria-hidden="true">#</a> Outcomes</h2><ul><li>基本的智能合约编程和一些安全编码问题。</li><li>区块链加密工具套件及其工作原理的详细信息。</li><li>了解区块链的一些最新进展。</li><li>判断应用程序是否适合区块链（并实施它）。</li><li>可以检查 ICO/DApp 白皮书是否有意义。</li></ul><h2 id="what-is-blockchain-1" tabindex="-1"><a class="header-anchor" href="#what-is-blockchain-1" aria-hidden="true">#</a> What is Blockchain</h2><ul><li><strong>A chain of block?</strong> actually, a good answer, from a data-structure point of view.</li><li>Distributed ledger technology (DLT) 「分布式账本技术」 <ul><li>but you heard of smart contract, Dapps? They aren’t “book”</li></ul></li><li>or, abstractly, something providing <strong>coordination</strong> between many parties, when there is no single trusted party</li></ul><p><strong>区块链是一种去中心化的数字账本技术，通过将数据分成块（block）并以链（chain）的形式连接起来。</strong></p><ul><li><strong>每个块包含了一些交易数据和一个时间戳，以及前一个块的加密哈希值</strong></li><li><strong>区块链的去中心化特性使得它在金融、供应链等多个领域具有广泛的应用。</strong></li></ul><h2 id="trust" tabindex="-1"><a class="header-anchor" href="#trust" aria-hidden="true">#</a> Trust</h2><ul><li>如果存在可信方「trusted party」 ⇒ 无需区块链</li><li>Tribal trust「部落信仰」: from people who are related to each other, speak the same language, sharing custom, religion, etc.</li><li>机构信任：美国联邦储备局、香港金融管理局 <ul><li>以及许多其他例子，其中一些（可以说）具有全球影响力</li></ul></li><li>Platform: where 2 or more entities interact</li></ul><p>How to form decentralized/distributed trust？</p><p>Decentralization: No agreed-upon definition (varies across fields)</p><div class="hint-container info"><p class="hint-container-title">Distributing Trust &amp; Enforcing Neutrality</p><figure><img src="https://pic.hanjiaming.com.cn/2024/10/05/263a7f93329cd.png" alt="1728107271865.png" tabindex="0" loading="lazy"><figcaption>1728107271865.png</figcaption></figure><p>Centralized Bank/Operator</p><ul><li>Single point of Failure</li><li>Mutability / Forgery of Records 「记录的可变性/伪造」(当中央银行怀有恶意时）</li></ul><p>De-Centralized Operators</p><ul><li>Resilience</li><li>Access controlled</li><li>Immutability「不可变性」</li><li>Verifiability</li></ul></div><h2 id="bitcoin" tabindex="-1"><a class="header-anchor" href="#bitcoin" aria-hidden="true">#</a> Bitcoin</h2><p>Innovation of OG (Original) App: Bitcoin</p><ul><li>enabled by a practical public append-only data structure (blockchain/DLT), 「由实用的公共附加数据结构（区块链/DLT）启用」</li><li>secured by “replication” and “incentives” 「以“复制”和“激励”为保障」 <ul><li>迄今未发现利用任何设计缺陷「design flaw」进行的攻击</li></ul></li><li>加密货币作为 &quot;交换媒介&quot;，又称 &quot;电子现金&quot;</li><li>store of value -&gt; a fixed supply asset (BTC)</li></ul><div class="hint-container note"><p class="hint-container-title">An Ideal Electronic-Cash System</p><img src="https://pic.hanjiaming.com.cn/2024/10/05/04a4bccfcb158.png" alt="1728106183938.png" style="zoom:33%;"></div><h2 id="byzantine-generals-problem" tabindex="-1"><a class="header-anchor" href="#byzantine-generals-problem" aria-hidden="true">#</a> Byzantine Generals Problem</h2><h3 id="分布式系统" tabindex="-1"><a class="header-anchor" href="#分布式系统" aria-hidden="true">#</a> 分布式系统</h3><p><strong>分布式系统</strong>：分布式系统是由多个独立计算机组成的系统，这些计算机通过网络进行通信和协作，以完成共同的任务。</p><p>在分布式系统中，节点是指参与系统的独立计算机或设备。节点可以是诚实的、故障的或恶意的。</p><ul><li><strong>Function = a “centralized” system</strong><ul><li>在分布式系统中，节点可以是诚实的（按预期行为）、故障的（无法正常工作）或恶意的（故意破坏系统）。</li><li>然而，在分布式系统中，没有这样的中央节点，所有节点需要通过某种机制来达成一致。</li></ul></li><li>But nodes can be honest/faulty「有缺陷的」/malicious「恶意的」 <ul><li>crash / drop messages / act arbitrarily「任意行为」 <ul><li>节点可能会崩溃、丢弃消息或以任意方式行为。</li><li>这些不确定性增加了达成共识的难度。</li></ul></li></ul></li><li>Might not be pairwise-connected「可能不是成对连接的」这意味着某些节点之间可能无法直接通信。</li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>PKI是一种基于公钥和私钥的加密技术，用于确保通信的安全性和真实性。了解PKI的作用可以帮助我们理解为什么在没有PKI的情况下，某些问题变得“不可解决”。</p></div><h3 id="如何达成共识" tabindex="-1"><a class="header-anchor" href="#如何达成共识" aria-hidden="true">#</a> 如何达成共识</h3><p>拜占庭将军问题：如何达成共识「consensus」？这是一个经典的分布式计算问题，描述了在存在恶意节点的情况下，如何达成一致决策。</p><ul><li>一名 &quot;首领 &quot;向所有其他将军/节点发出命令</li><li>目标是找到一种策略，确保所有诚实节点采取相同的行动。</li><li>在没有公钥基础设施（PKI）的情况下，如果恶意节点超过三分之一，达成共识是“不可能”的。</li><li>如果领导者节点是恶意「<strong>malicious</strong>」的，它可能向不同的节点发送不同的命令（例如，向节点A发送0，向节点B发送1），从而破坏共识。</li></ul><p>Dolev-Strong Protocol solves “Broadcast” in f+1 round (f := #malicious) + PKI</p><ul><li>Dolev-Strong协议通过在f+1轮广播中解决了信息传递问题，其中f是恶意节点的数量。</li><li>这个协议依赖于PKI来确保消息的真实性。</li><li>然而，这个协议在大规模分布式网络中效率较低，因为需要进行多轮的消息传递。</li></ul><p>可以把这个过程想象成一个班级里有一个同学（A）要传递一个重要信息给全班同学（B、C、D、E）。这个班级里有一个捣蛋鬼（恶意节点），他可能会试图传递错误的信息。但是，A 会先把信息传递给所有人，然后每个人再把他们收到的信息传递给其他人。由于大多数同学都是诚实的，他们会通过多数投票来决定最终的信息是什么。即使有一个捣蛋鬼，最终大家还是会收到正确的信息。</p><details class="hint-container details"><summary>Example</summary><p>好的，我来用一个形象的例子解释 Dolev-Strong 协议是如何在 ( f+1 ) 轮内解决广播问题的。</p><p>假设我们有一个网络，其中有5个节点：A、B、C、D 和 E。其中，A 是发送者，B、C、D 和 E 是接收者。在这5个节点中，有最多 ( f ) 个节点是恶意的。为了简单起见，我们假设 ( f = 1 )，即最多有一个恶意节点。</p><p>目标</p><p>广播问题的目标是：发送者 A 发送一个消息 ( m ) 给所有接收者，并且所有诚实的接收者最终都能一致地接收到相同的消息 ( m )，即使存在恶意节点试图干扰。</p><p>协议流程</p><p>Dolev-Strong 协议通过 ( f+1 ) 轮（在这个例子中是 2 轮）来达成一致。每一轮中，节点会将自己接收到的消息广播给其他所有节点。具体流程如下：</p><p>初始状态</p><ul><li>A 想要广播消息 ( m )。</li><li>B、C、D 和 E 都初始化为不知道消息 ( m )。</li></ul><p>第 0 轮（发送者广播）</p><ol><li><strong>A 发送消息 ( m ) 给 B、C、D 和 E</strong>： <ul><li>B 收到消息 ( m )。</li><li>C 收到消息 ( m )。</li><li>D 收到消息 ( m )。</li><li>E 收到消息 ( m )。</li></ul></li></ol><p>第 1 轮（接收者广播）</p><ol start="2"><li><strong>B、C、D 和 E 将他们收到的消息广播给其他所有节点</strong>： <ul><li>B 将消息 ( m ) 发送给 A、C、D 和 E。</li><li>C 将消息 ( m ) 发送给 A、B、D 和 E。</li><li>D 将消息 ( m ) 发送给 A、B、C 和 E。</li><li>E 将消息 ( m ) 发送给 A、B、C 和 D。</li></ul></li></ol><p>节点状态变化</p><ul><li><strong>A</strong>：已经知道消息 ( m )，不变。</li><li><strong>B</strong>：如果 B 是诚实的，它会广播它收到的消息 ( m )。如果 B 是恶意的，它可能广播一个假消息，但因为只有一个恶意节点，其他节点可以通过多数投票来检测。</li><li><strong>C</strong>：同样地，如果 C 是诚实的，它会广播它收到的消息 ( m )。</li><li><strong>D</strong>：同样地，如果 D 是诚实的，它会广播它收到的消息 ( m )。</li><li><strong>E</strong>：同样地，如果 E 是诚实的，它会广播它收到的消息 ( m )。</li></ul><p>最终状态</p><p>在第 2 轮结束后，每个诚实节点都会有一个消息集合。由于最多只有一个恶意节点，诚实节点会通过多数投票机制来决定最终的消息 ( m )。</p><p>具体来说：</p><ul><li>每个节点会统计它收到的消息。</li><li>如果某个消息 ( m ) 出现的次数超过 ( n-f )（在这个例子中是 4 次），则该消息被认为是正确的消息。</li></ul><p>由于恶意节点最多只有一个，诚实节点会收到足够多的正确消息 ( m )，从而达成一致。</p></details><p>通过这种方式，Dolev-Strong 协议在 ( f+1 ) 轮内解决了广播问题。</p><div class="hint-container warning"><p class="hint-container-title">我认为有 PKI 就可以保证消息的准确和不可篡改了，为什么还需要广播？</p><p>虽然公钥基础设施（PKI）可以保证消息的真实性和不可篡改性，但在分布式系统中，特别是在存在恶意节点的情况下，单靠 PKI 并不足以解决所有问题。</p><p><strong>消息的可达性和一致性</strong></p><p>PKI 可以确保消息的真实性和不可篡改性，但它不能保证消息能够被所有节点接收到。在分布式系统中，网络可能是不可靠的，消息可能会丢失或延迟。</p><p>因此，需要一个广播协议来确保所有诚实节点最终都能接收到相同的消息。</p><p><strong>防止恶意节点的干扰</strong></p><ul><li><strong>拒绝转发消息</strong>：恶意节点可能会故意不转发消息，导致一些节点无法接收到消息。</li><li><strong>发送伪造消息</strong>：恶意节点可能会发送伪造的消息，试图混淆其他节点。</li><li><strong>发送旧消息</strong>：恶意节点可能会发送过期的消息，试图扰乱系统。</li></ul><p>广播协议通过多轮消息交换和验证，确保即使有恶意节点存在，所有诚实节点最终都能达成一致。</p><p><strong>确保最终一致性</strong></p><ul><li>在分布式系统中，最终一致性是一个重要的目标。</li><li>广播协议通过多轮通信，确保所有诚实节点在一定轮次后都能接收到相同的消息，并达成一致。</li><li>这对于系统的稳定性和可靠性至关重要。</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2024/10/05/da7c0b6f667ec.png" alt="1728111454901.png" tabindex="0" loading="lazy"><figcaption>1728111454901.png</figcaption></figure></div><h2 id="data-structure-ledger" tabindex="-1"><a class="header-anchor" href="#data-structure-ledger" aria-hidden="true">#</a> Data Structure/Ledger</h2><p>Blockchain as Data Structure/Ledger 「分类帐」</p><p>区块链（Blockchain）是一种特殊的数据结构和分布式账本技术，它以一种链式结构将数据块（blocks）按照时间顺序连接起来。</p><ul><li>每个区块包含多个交易（transactions），<strong>这些交易记录了资产从一个发送者到一个接收者的转移。</strong></li><li>资产可以是任何东西，例如货币、合同、访问密钥等。</li></ul><p>区块链的核心思想是通过去中心化和分布式的方式来确保数据的安全性和可信度</p><ul><li>即使在点对点（P2P）网络中也能保持可信。</li><li>每个区块通过密码学技术（如哈希函数和数字签名）与前一个区块相连，形成一个不可篡改的链条。</li><li>这种结构使得区块链具有高度的安全性和透明性。</li></ul><p>区块链不仅仅是一种数据结构，它也是一种分布式数据库。</p><ul><li>传统数据库通常由一个中心化的实体管理，</li><li>而区块链通过分布式网络中的多个节点共同维护账本，从而避免了单点故障和中心化控制。</li></ul><h2 id="maintain-a-ledger-distributively" tabindex="-1"><a class="header-anchor" href="#maintain-a-ledger-distributively" aria-hidden="true">#</a> Maintain a ledger distributively</h2><div class="hint-container info"><p class="hint-container-title">相关概念</p><p><strong>共识协议（Consensus Protocol）</strong></p><ul><li>共识协议是一种在分布式系统中实现一致性的机制。</li><li>它确保所有参与者（节点）对某个状态或交易达成一致。</li><li>在区块链中，常见的共识协议包括工作量证明（Proof of Work, PoW）、权益证明（Proof of Stake, PoS）等。</li></ul><p><strong>工作量证明（Proof of Work, PoW）</strong></p><ul><li>工作量证明是一种共识机制，通过要求节点解决复杂的计算难题来验证交易。</li><li>解决难题的过程称为“挖矿”，成功解决问题的节点可以将新的区块添加到区块链中，并获得奖励。</li><li>比特币采用的就是PoW机制。</li></ul><p><strong>Sybil 攻击</strong></p><ul><li>Sybil攻击是一种在分布式系统中通过创建多个虚假身份来破坏系统的攻击方式。</li><li>在区块链网络中，攻击者通过控制大量虚假节点来影响共识过程，从而可能导致双重支付等问题。</li></ul></div><ul><li>via Consensus Protocol (enabled by “proof of work” in bitcoin) <ul><li>Operators (miners in bitcoin) “agree” on the blockchain state. <ul><li>操作员（在比特币中称为矿工）“同意”区块链的状态。</li><li>矿工是运行区块链网络节点并参与交易验证和区块生成的个体或实体。</li><li>他们通过解决计算难题来验证交易，并在达成共识后更新区块链。</li></ul></li><li>Periodically select valid transactions to append to ledger <ul><li>定期选择有效的交易添加到账本中。</li><li>矿工会在一定时间间隔内（例如比特币的10分钟）收集网络中的交易，验证其有效性，并将其打包成一个新的区块添加到区块链中。</li></ul></li><li>Admission control: Who can join as operators? <ul><li>在区块链网络中，准入控制决定了哪些节点可以参与到交易验证和区块生成中。</li><li>在比特币网络中，任何人都可以成为矿工，只要他们具备足够的计算能力和资源。</li></ul></li><li>Access control: Who can write? <ul><li>访问控制决定了哪些节点有权将新的交易或区块写入区块链。</li><li>在比特币中，只有成功解决PoW难题的矿工才能将新的区块添加到区块链中。</li></ul></li><li>How they agree upon who can append to the ledger? <ul><li>矿工通过解决PoW难题来竞争添加新的区块。</li><li>第一个成功解决问题的矿工将区块添加到区块链中，并获得奖励。</li><li>这一过程确保了区块链的安全性和一致性。</li></ul></li></ul></li><li>Complexity of this problem in the bitcoin context: <ul><li>Peer-to-peer (P2P) setting: nodes can go offline anytime</li><li>Sybil (“fake” identities) exist, and they are malicious</li><li>In the Internet scale (many one can help, many bad guys too)</li></ul></li></ul>',43),o=[a];function r(s,c){return l(),t("div",null,o)}const d=i(n,[["render",r],["__file","index.html.vue"]]);export{d as default};