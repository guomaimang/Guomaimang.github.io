import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as l,c as e,e as a}from"./app-20cb2ce2.js";const t={},n=a('<h1 id="testing" tabindex="-1"><a class="header-anchor" href="#testing" aria-hidden="true">#</a> Testing</h1><h2 id="usability-test" tabindex="-1"><a class="header-anchor" href="#usability-test" aria-hidden="true">#</a> Usability Test</h2><p>毕业后，你想做一个机器学习的创业项目，分析视觉指向的区域。你设计分析原始数据的算法，并优化准确性。你去了市场，但没有卖出去。一年后，你就被淘汰了。怎么会这样？</p><p>你的眼睛被算法挡住了!</p><ul><li>你在解决谁的问题？有视觉指向的需求吗？或者你只是被机器学习迷住了，为你那令人敬畏的算法找到了一个合适的应用领域？</li><li>你忽略了费茨定律，也没有做用户性能测试。你的系统在多大程度上改进了目前的视觉指向系统？一点点？巨大的改善？它对时间有什么作用？更慢？太快了？</li><li>你没有把性能和可用性联系起来。也许你提高了准确性，但在其他方面使系统变得不那么有用，例如，因为算法消耗了很多内存空间或不能离线使用。</li><li>您没有衡量与绩效相关的用户满意度。也许您的客户可以接受更多的课程解决方案和时不时的一些失误。改变的需要可能很小</li><li>如果没有 HCI，您可能会投入大量开发时间来改进某些系统，这会使您的最终产品比现有解决方案更昂贵，并且存在无人等待的风险</li></ul><div class="hint-container tip"><p class="hint-container-title">菲茨定律</p><p>Fitts 定律指出，一个人将指针（例如，鼠标光标）移动到目标区域所需的时间量是</p><p>关于 到目标的距离 除以 目标大小 的函数。</p></div><img src="https://pic.hanjiaming.com.cn/2022/11/30/66dc171779167.png" alt="1669818920876.png" style="zoom:50%;"><p>形成性（在系统开发期间，通常基于原型）</p><ul><li>应用程序的可理解性「Understandability」</li><li>应用程序的完整性「Completeness」</li><li>应用程序的质量「Quality」</li><li>道德审查「Ethical review 」(e.g., health apps)</li><li>责任和法律 (e.g., self-driving cars)</li></ul><p>总结（系统开发后）</p><ul><li>过程评估（实施良好？）</li><li>影响「Impact」评估（对用户、其他人的影响）</li></ul><h2 id="basic-concepts" tabindex="-1"><a class="header-anchor" href="#basic-concepts" aria-hidden="true">#</a> Basic Concepts</h2><h3 id="hypothesis" tabindex="-1"><a class="header-anchor" href="#hypothesis" aria-hidden="true">#</a> Hypothesis</h3><p>「假设」</p><ul><li>假设是一个关于你的系统的精确问题陈述</li><li>说明「States」各组数据之间的预期统计关系</li><li>声明「statement」必须准确无误，并说明我们要测量的内容!</li></ul><div class="hint-container note"><p class="hint-container-title">案例</p><ul><li>不够精确: iPhone的键盘比黑莓的键盘好</li><li>稍微好一点: iPhone的键盘比黑莓的键盘打字更快</li><li>最精确：人们在 iPhone 键盘上输入短信的时间（以秒为单位）比在黑莓键盘上输入的时间少。</li></ul></div><h3 id="null-hypothesis" tabindex="-1"><a class="header-anchor" href="#null-hypothesis" aria-hidden="true">#</a> Null Hypothesis</h3><p>「空白假设、无效假设」</p><p>空白假设指出了与预期的统计关系相反的保守「conservatively」说法</p><ul><li>假设：与黑莓键盘相比，人们在iPhone键盘上输入短信的时间更短（以秒计算）。</li><li>无效假设：与黑莓键盘相比，人们在iPhone键盘上输入文本信息所需的时间（以秒为单位）持平或更长。</li></ul><p>如果观察到的数据显示，这种情况明显不可能发生，那么就拒绝无效假设，接受替代假设。</p><p>类似于刑事审判：假定被告是无辜的（原假设），直到被证明有罪（拒绝原假设）排除合理怀疑（在统计上显着的程度）。</p><h3 id="qualitative-vs-quantitative-data" tabindex="-1"><a class="header-anchor" href="#qualitative-vs-quantitative-data" aria-hidden="true">#</a> Qualitative vs Quantitative Data</h3><p>「定性与定量数据」</p><p>测试可以产生定性的（如字符串）和定量的数据（如整数）。</p><ul><li>Qualitative evaluation「定性评价」 <ul><li>衡量标准更加主观和相对（传闻）。</li><li>给我们案例，数据结构化程度较低，更加多样化</li></ul></li><li>Quantitative evaluation「定量评价」 <ul><li>测量更精确，主观性更低</li><li>给我们带来更好的可控结果，结构化，更统一</li><li>更正式的数据，统计分析</li></ul></li></ul><p>“On average, it took users 30% less time to finish a transaction.”</p><p>在哪些情况下数字是有用的</p><ul><li>有效性：任务成功完成率</li><li>效率：速度和准确性之间的权衡 <ul><li>完成任务的时间要求</li><li>在速度或错误数量上比较两个系统</li></ul></li><li>努力: 难度、易用性，但也包括能源消耗</li></ul><p>构建与测量，我们能直接测量/观察到它吗？</p><img src="https://pic.hanjiaming.com.cn/2022/11/30/d61c1e0684155.png" alt="1669823784491.png" style="zoom:50%;"><p>在人机交互研究中，可以很容易地对变量进行量化的例子</p><ul><li>时间：容易测量，适合统计分析（如学习时间、任务完成时间等）。</li><li>错误率（系统中某一部分的错误频率）。显示系统中存在问题的地方。建议困难的原因。</li><li>系统的使用模式（系统的某一部分的使用频率）。研究使用的模式。对特定部分的偏爱和回避。</li><li>请求帮助的模式（访问在线帮助系统的频率）。研究用户感到困惑的地方。</li></ul><p>混乱是你所做的任何应用的第一大不希望看到的效果！</p><h3 id="因果变量与独立变量" tabindex="-1"><a class="header-anchor" href="#因果变量与独立变量" aria-hidden="true">#</a> 因果变量与独立变量</h3><p>「Dependent vs Independent Variables」</p><p>Independent Variables「独立变量」：由可用性研究人员系统地改变（操纵）的因素。</p><ul><li>确定了对用户所经历的条件的修改 <ul><li>例如，界面类型，给用户的练习或培训</li><li>“人们在 iPhone 上输入短信的时间比在黑莓手机上花的时间少”</li><li>“人们在 10 分钟的教程之后比在 5 分钟的教程之后在执行交易时犯的错误更少”</li></ul></li><li>也可能来自人口统计数据 <ul><li>例如，用户的性别或年龄</li><li>“女性在使用 Interface A 20 分钟后记住的功能比男性多”</li><li>&quot;与年轻人相比，老年人对陪伴机器人的满意度更高&quot;</li></ul></li></ul><p>Dependent Variables「因果变量」 - 取决于用户的行为或表现</p><p>特性有</p><ul><li>容易观察到的，并且容易与某种测量尺度相关的。</li><li>稳定可靠，因此它们在恒定（实验）条件下不会发生变化</li><li>对独立变量的影响很敏感</li></ul><p>例如：所犯错误的数量、完成给定任务所花费的时间、从错误中恢复所花费的时间、评分量表上显示的态度</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>因果变量是由于自变量的操纵而发生变化的变量。这是你感兴趣的测量结果，它 &quot;取决于 &quot;你的自变量。</p></div><h3 id="四种类型的变量" tabindex="-1"><a class="header-anchor" href="#四种类型的变量" aria-hidden="true">#</a> 四种类型的变量</h3><p>不是所有的变量都是可比较的</p><p>Nominal:</p><ul><li>只有命名的变量（不能排序）。</li><li>例如，性别、宗教、用户群体等。</li></ul><p>Ordinal「顺序」:</p><ul><li>可以排序的变量（但每个类别之间的差异是未知的）</li><li>如：用户偏好排名</li></ul><p>Interval「比率」:</p><ul><li>距离是有意义的</li><li>例如，温度（C）（20C不是10C的 &quot;两倍热&quot;）。</li></ul><p>Ratio「比率」:</p><ul><li>距离是有意义的，而且有一个非任意的零。</li><li>例如，重量、长度、所用时间、温度（K）等。</li></ul><h2 id="data-collection-method" tabindex="-1"><a class="header-anchor" href="#data-collection-method" aria-hidden="true">#</a> Data Collection Method</h2><p>定性评价 - 观察协议加编码方案（以理论为依据）。</p><ul><li>启发式评估—评估人员检查界面并判断其是否符合公认的可用性原则</li><li>认知演练—评估人员完成一系列任务并从用户的角度提出一系列问题</li><li>建设性互动 —当测试对象成对合作解决任务时，提供自然的思维朗读（例如，一个孩子和一个成年人）。</li></ul><p>定量评估 - 现场和实验室实验</p><ul><li>运行一个正式的实验并收集数据</li><li>如果有一个我们想要评估的具体事物（例如，测试一个假设），回答关于一个理论或系统的目标部分的具体问题，就可以发挥作用。</li></ul><h2 id="heuristic-evaluation" tabindex="-1"><a class="header-anchor" href="#heuristic-evaluation" aria-hidden="true">#</a> Heuristic Evaluation</h2><p>「启发式评估」</p><p>Nielsen-Molich启发法指出，一个系统应该</p><ul><li>适当地、及时地将其状况告知用户。</li><li>以用户从现实世界的运作方式中理解的方式，并以用户的语言来展示信息。</li><li>为用户提供控制权，让他们轻松撤销错误。</li><li>要保持一致，这样用户就不会对不同的词、图标等的含义感到困惑。</li><li>防止错误--系统应该避免出现错误的条件，或者在用户采取危险行动之前发出警告（例如，&quot;你确定要这样做吗？&quot;）。</li><li>有可见的信息、指示等，让用户认识到选项、行动等，而不是强迫他们依赖记忆。</li><li>要有灵活性，以便有经验的用户找到更快的方法来实现目标。</li><li>没有杂乱无章，只包含与当前任务有关的信息。</li><li>提供有关错误和解决方案的简单语言帮助。</li><li>在精简的、可搜索的文件中列出克服问题的简明步骤。</li></ul><h2 id="lab-experiment" tabindex="-1"><a class="header-anchor" href="#lab-experiment" aria-hidden="true">#</a> Lab Experiment</h2><p>Definition of an experiment: 实验旨在检验关于一个变量（自变量）对另一个变量（因变量）的作用的假设</p><p>在确认性数据分析，或统计假设测试中，我们有</p><ul><li>A hypothesis that we wish to “confirm&quot; or “reject&quot;</li><li>Two sets of measurements of the dependent variable, each corresponding to one configuration of the independent variables</li><li>A process that we will repeat with <em>multiple subjects</em></li><li>我们将用一种统计方法来比较多组数据</li></ul><p>Preventing confounding and order effects：</p><h3 id="randomization" tabindex="-1"><a class="header-anchor" href="#randomization" aria-hidden="true">#</a> Randomization</h3><ul><li>控制自变量X对因变量Y的影响，使影响在各条件（组）之间随机分布。</li><li>随机分配人们先测试键盘布局A，或先测试布局B（以解决顺序效应）。</li><li>将人们随机分配到不同的组别中（以解决混杂的影响）</li></ul><p>不能消除由于未知差异造成的影响，但确保由于受试者或条件之间的未知差异造成的任何影响是随机的（并将通过统计来解决）。</p><h3 id="counterbalancing" tabindex="-1"><a class="header-anchor" href="#counterbalancing" aria-hidden="true">#</a> Counterbalancing</h3><ul><li>减轻主体内实验的顺序效应</li><li>独立变量在不同科目中以不同顺序变化 <ul><li>第 1 组：首先尝试键盘布局 A，然后尝试布局 B</li><li>第 2 组：首先尝试键盘布局 B，然后尝试布局 A</li></ul></li><li>如果存在顺序效应，这将在所有组中分配效应，但不会消除它们</li><li>但是，如果条件之间的顺序效应不相等，这将失败：例如，键盘布局A比布局B更有效地 &quot;预热 &quot;人们......</li></ul>',72),h=[n];function s(r,o){return l(),e("div",null,h)}const d=i(t,[["render",s],["__file","Testing.html.vue"]]);export{d as default};
