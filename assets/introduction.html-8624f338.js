import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as t}from"./app-0f4e60d9.js";const l={},a=t('<h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><h2 id="types-of-money" tabindex="-1"><a class="header-anchor" href="#types-of-money" aria-hidden="true">#</a> Types of Money</h2><ul><li>Token money「代币资金」 <ul><li>represented by a physical article (e.g., cash)</li><li>can be lost</li></ul></li><li>Notational money「记名货币」 <ul><li>a kind of scriptural money「经文货币」, can be electronic</li><li>e.g., bank accounts, frequent flyer miles</li></ul></li><li>Hybrid money <ul><li><em>e.g.</em>, check, telephone card</li></ul></li></ul><table><thead><tr><th></th><th><strong>Token</strong> 代币</th><th><strong>Notational</strong> 记名票</th><th><strong>Hybrid</strong></th></tr></thead><tbody><tr><td>Fiduciary (信托货币)</td><td><strong>Cash</strong>: 现金<br><strong>Govt. Bearer Bond</strong>：政府持票人债券是一种无记名债券，持有人可以随时兑现其面值。</td><td><strong>Account with a Central Bank</strong>：中央银行账户是指商业银行在中央银行开设的账户，用于存放准备金和进行清算。</td><td><strong>Government Check</strong>：政府支票是一种由政府机构签发的支票，用于支付政府开支或退税等。</td></tr><tr><td>Scriptural (记账货币)</td><td><strong>Certified Check</strong>：保付支票是一种由银行认证的支票，确保支票金额已被冻结，确保收款人能够收到款项。<br><strong>Traveler Check</strong>：旅行支票是一种预付的支票，通常用于旅行时代替现金使用。</td><td><strong>Bank Account</strong>：银行账户是一种由银行为客户提供的账户，用于存储和管理资金。<br><strong>Frequent-Flyer Miles</strong>：常旅客里程是一种航空公司为鼓励乘客频繁乘坐其航班而提供的奖励积分。</td><td><strong>Personal Check</strong>：个人支票是由个人签发的支票，用于支付日常开支。 <br><strong>Gift Certificate</strong>：礼品券是一种预付的礼券，可以在指定商店或网站上兑换商品或服务。</td></tr></tbody></table><ul><li>Money order「汇票」: only the named person can claim money</li><li>Traveler’s check: spendable by only one spender</li></ul><div class="hint-container tip"><p class="hint-container-title">Desirable/Ideal Properties of Money</p><ul><li>Universal acceptance</li><li>Transferability, portability</li><li>Safety (unforgeable, unstealable)「安全性（不可伪造、不可窃取）」</li><li>Privacy (no one except parties「当事人」 know the amount)</li><li>Anonymity「匿名性」 (no one can identify the payor「付款人」)</li><li>Work off-line (no need for on-line verification)「离线工作（无需在线验证）」</li><li>Divisible into change (pay for $10 item with $100 bill)「可分割为零钱（用 100 美元的钞票购买 10 美元的商品）」</li><li>Arbitrary denominations (consider $689.14)「任意面额（考虑 689.14 美元）」</li></ul></div><h2 id="the-bitcoin-revolution" tabindex="-1"><a class="header-anchor" href="#the-bitcoin-revolution" aria-hidden="true">#</a> The Bitcoin Revolution</h2><ul><li>去中心化 点对点支付系统</li><li>作为货币使用：有价值单位</li><li>可以兑换成 &quot;真钱&quot;。</li></ul><h2 id="digital-signatures" tabindex="-1"><a class="header-anchor" href="#digital-signatures" aria-hidden="true">#</a> Digital Signatures</h2><p>Started from a probabilistic 「概率性的」algorithm “KeyGen” that generates a key-pair:</p><ul><li>A pair of public key and private key</li><li>它们必须一起生成并且它们是“相关的”</li><li>要签名，请使用私有（签名）密钥 sk</li><li>要进行验证，请使用公共（验证）密钥 pk</li></ul><img src="https://pic.hanjiaming.com.cn/2024/10/05/7a3c61b2686ad.png" alt="1728129988494.png" style="zoom:50%;"><h2 id="e-cash-issuance" tabindex="-1"><a class="header-anchor" href="#e-cash-issuance" aria-hidden="true">#</a> E-Cash Issuance</h2><h3 id="centralized-solution" tabindex="-1"><a class="header-anchor" href="#centralized-solution" aria-hidden="true">#</a> Centralized Solution</h3><ul><li>An e-coin is a digital signature issued by a central bank. 「电子币是由中央银行发行的数字签名。」 <ul><li>电子硬币现在由一堆字节表示。</li></ul></li><li>The merchant「商家」 verifies a coin w.r.t. the cert. of the bank</li><li>每个人都可以复制这些字节，并将其用于其他地方。</li><li>Each needs a (signed) serial number # like paper money <ul><li>This will be useful for double-spending detection.</li></ul></li><li>But the merchants are not connected to each other. <ul><li>They need confirmation (with bank) that it hasn’t been spent</li><li>Connectivity issue for the merchant, privacy issue for the payer</li></ul></li><li>Privacy issue: The bank can link the coin # with the withdrawal and spending!</li></ul><h3 id="e-cash-solutions" tabindex="-1"><a class="header-anchor" href="#e-cash-solutions" aria-hidden="true">#</a> E-Cash Solutions</h3><div class="hint-container tip"><p class="hint-container-title">Blind Signatures</p><p>盲签名（Blind Signatures）是一种密码学协议，允许一方在不知道消息内容的情况下对其进行签名。该技术由David Chaum在1983年提出，主要用于保护用户隐私。</p></div><p>The notion of Blind Signatures</p><ul><li>Bank can sign on serial number sn without knowing it</li><li>User pick sn, blinds it sn’ = C(sn) <ul><li>用户选择一个序列号（sn），然后通过某种加密函数（C）将其进行“盲化”处理，得到盲化后的序列号（sn’）。</li><li>这个过程确保了银行无法知道原始的序列号。</li></ul></li><li>Bank signs on sn’, user unblind the signature to get sig(sn) <ul><li>银行对盲化后的序列号（sn’）进行签名</li><li>用户接收到签名后，通过<strong>反盲化过程</strong>将其还原为对原始序列号（sn）的签名（sig(sn)）。</li></ul></li></ul><p><strong>How about spending?</strong></p><ul><li>接收方需要与银行核对序列号（sn）是否已经被使用过，以防止重复使用。</li><li>“Real system” is more complex [e.g., Compact E-Cash「紧凑型电子现金」]</li><li>因此，这种系统无法完全实现类似现金的隐私保护，因为每次交易都需要与银行进行核对。</li></ul><p><strong>Double spending?</strong></p><ul><li>the payee「收款人」 must deposit with a bank「收款人必须将收到的电子现金存入银行。」</li><li>the bank holds the list of spent coins (consensus needed if 2+ banks 「如果有 2 家以上银行，则需要达成共识」)</li><li>[目标] 追踪并抓住双重花费者。</li><li>zero-knowledge proofs to encrypt ID when spending</li></ul><div class="hint-container tip"><p class="hint-container-title">Zero-knowledge proof</p><p>零知识证明是一种密码学技术，</p><ul><li>允许一方（证明者）向另一方（验证者）证明某个陈述为真，</li><li>而无需透露任何其他信息。</li></ul><p>它确保了信息的隐私和安全。</p><p>假设你想证明你知道某个秘密密码，但不想透露密码本身。通过零知识证明，你可以向对方证明你确实知道密码，而不揭示密码的任何细节。</p></div>',24),o=[a];function r(s,c){return e(),n("div",null,o)}const u=i(l,[["render",r],["__file","introduction.html.vue"]]);export{u as default};
