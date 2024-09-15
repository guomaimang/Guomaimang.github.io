import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c,a as n,b as s,d as e,f as l,e as a}from"./app-20cb2ce2.js";const u={},r=n("h1",{id:"exploratory-data-analysis",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#exploratory-data-analysis","aria-hidden":"true"},"#"),s(" Exploratory Data Analysis")],-1),d={href:"https://www.itl.nist.gov/div898/handbook/eda/eda.htm",target:"_blank",rel:"noopener noreferrer"},m=n("p",null,"探索性数据分析（EDA）是一种数据分析的方法/哲学，它采用各种技术（主要是图形技术）来",-1),k=n("ol",null,[n("li",null,"最大限度地了解一个数据集的情况。"),n("li",null,"揭示潜在的结构。"),n("li",null,"提取重要的变量。"),n("li",null,"检测异常值和反常现象。"),n("li",null,"测试基本假设。"),n("li",null,"开发简明的模型；"),n("li",null,"确定最佳因素设置。")],-1),v=n("h2",{id:"eda-方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#eda-方法","aria-hidden":"true"},"#"),s(" EDA 方法")],-1),h=n("p",null,"EDA方法正是这种方法，它不是一套技术，而是一种关于如何进行数据分析的态度/哲学。",-1),g=n("p",null,'EDA与统计图形不尽相同，尽管这两个术语几乎可以互换使用。统计图形是一系列技术的集合--都是基于图形的，并且都集中在一个数据特征方面。EDA包含了一个更大的场所；EDA是一种数据分析的方法，它推迟了关于数据遵循何种模型的通常假设，而采用更直接的方法，让数据本身来揭示其潜在的结构和模型。EDA不是一个单纯的技术集合；EDA是一种关于我们如何剖析数据集的哲学；我们寻找什么；我们如何寻找；以及我们如何解释。诚然，EDA大量使用我们称之为 "统计图形 "的技术集合，但它与统计图形本身并不完全相同。',-1),b=n("p",null,"大多数EDA技术都是图形性质的，只有少数定量技术。之所以严重依赖图形，是因为就其本质而言，EDA的主要作用是开放性的探索，而图形给了分析者无与伦比的力量，诱使数据揭示其结构的秘密，并随时准备获得一些新的，往往是未曾预料到的，对数据的洞察力。结合我们所拥有的自然模式识别能力，图形当然提供了无与伦比的力量来实现这一目标。",-1),f=n("p",null,"EDA中采用的特殊图形技术通常很简单，由以下各种技术组成。",-1),_=n("ol",null,[n("li",null,"绘制原始数据（如数据痕迹、直方图、双直方图、概率图、滞后图、块图和尤登图。"),n("li",null,"绘制简单的统计数据，如平均数图、标准差图、箱形图和原始数据的主效应图。"),n("li",null,"对这些图进行定位，以便最大限度地提高我们的自然模式识别能力，如每页使用多个图。")],-1),y={class:"hint-container details"},x=a('<summary>一个研究案例</summary><p><strong>1. 确定的研究的课题</strong></p><p>作为第一个例子，我们将从一个简单的问题开始：美国婴儿的平均出生体重是多少？为了回答这样的问题，我们必须找到一个合适的数据集，或者运行一个实验来收集它。然后，我们必须将数据输入我们的开发环境，并为分析做准备，这涉及到清洗和验证。</p><p>美国婴儿的出生数据的研究</p><ul><li>平均值，最大值，最小值，平均值</li><li>各列数据之间的相关性</li></ul><p>对于这个问题，我们将使用来自全国家庭增长调查的数据，该数据可从国家卫生统计中心获得。2013-2015 数据集包含有关美国女性及其子女的代表性样本的信息。</p><p><strong>2. 预览数据</strong></p><p>当你使用像NSFG这样的数据集时，仔细阅读文件是很重要的。如果你对一个变量的解释不正确，你可能会产生胡言乱语的结果而不自知。因此，在你开始编码之前，你需要熟悉NSFG的编码手册，其中描述了每个变量。</p><p>下面是NSFG编码手册中关于 &quot;BIRTHWGT_OZ1 &quot;的文件。</p><img src="https://pic.hanjiaming.com.cn/2022/06/08/bcc6dca63b731.png" alt="1654621783227.png" style="zoom:50%;"><p>区分下列描述词</p>',11),D=n("li",null,"df.shape: 描述行列数量",-1),F={href:"http://df.info",target:"_blank",rel:"noopener noreferrer"},w=n("li",null,"df.head(): 查看头部前几行",-1),q=n("li",null,"df.describe(): 查看数据平均值，最大最小值。",-1),z=n("li",null,"df.value_counts(): 统计每一种值有几个",-1),E=a('<p><strong>3. 数据清理</strong></p><p>在我们用这些数据做任何事情之前，我们必须对其进行验证。验证的一个部分是确认我们对数据的解释是否正确。我们可以使用value_counts()来查看哪些值出现在磅中，以及每个值出现的次数。默认情况下，结果是以最频繁的值为先进行排序的，所以我使用sort_index()按值排序，将最轻的婴儿放在前面，最重的婴儿放在最后。正如我们所期望的，最频繁的数值是6-8磅，但也有一些非常轻的婴儿，一些非常重的婴儿，还有两个数值，98和99，表明数据缺失。</p><p>我们可以通过将结果与编码簿进行比较来验证，编码簿中列出了各种数值及其频率。这里的结果与编码表一致，所以我们有一些信心，我们正在正确地阅读和解释数据。</p><p>另一种验证数据的方法是使用describe()，它可以计算出平均数、标准差、最小值和最大值等汇总统计数据。下面是磅数的结果。 count是数值的数量。最小值和最大值是0和99，第50个百分位数，也就是中位数，是7。平均数大约是8.05，但这并不意味着什么，因为它包括了特殊值98和99。</p><p>replace()方法做了我们想要的事情；它接收了一个我们想要替换的数值列表和我们想要替换的数值。 np dot nan表示我们从NumPy库中获取特殊的数值NaN，它被导入为np。replace()的结果是一个新的系列，我将其赋值回磅数。请记住，原始系列的平均值约为8点05磅。新系列的平均数是6点7磅。当你去掉几个99磅的婴儿时，这就有很大的不同了。</p><p><strong>4. 数据整理</strong></p><p>现在我们想把磅和盎司合并成一个系列，包含出生时的总重量。算术运算符与系列对象一起工作；因此，为了从盎司转换到磅，我们可以除以16（一磅有16盎司）。然后，我们可以将两个系列对象相加，得到总数。下面是结果。平均数约为7点1，这比我们在加入盎司部分之前得到的要多一点。现在我们已经接近于回答我们最初的问题，即美国婴儿的平均出生体重，但正如我们在下一课中所看到的，我们还没有达到目的。</p><p>在回答我们的问题之前，我们还需要做一件事：重新采样。NSFG 并不完全代表美国人口；根据设计，某些组比其他组更可能出现在样本中；他们被“过度采样”。过采样有助于确保您在每个子组中都有足够的人来获得可靠的统计数据，但它会使分析变得更加复杂。但是，我们可以通过重采样来纠正过采样。</p><p><strong>5. 数据可视化和数据探索</strong></p><p>我们使用来自 NSFG 的数据来计算以磅为单位的出生体重，并将结果存储在名为birth_weight 的系列中。让我们看看这些值的分布是什么样的。</p><img src="https://pic.hanjiaming.com.cn/2022/06/08/7b31b4110442b.png" alt="1654621609937.png" style="zoom:33%;"><p>这里是结果的样子。X轴是以磅为单位的出生体重，分为30个档次。y轴是每个仓内的出生数量。这个分布看起来有点像钟形曲线，但是尾巴在左边比右边长；也就是说，轻婴儿比重婴儿多。这是有道理的，因为这个分布包括一些早产的婴儿。最常见的怀孕时间是39周，也就是 &quot;足月&quot;；&quot;早产 &quot;通常被定义为小于37周。</p><p>要想知道哪些婴儿是早产儿，我们可以使用prglngth列，它记录了以周为单位的怀孕长度。当你将一个系列与一个值进行比较时，其结果是一个布尔系列；也就是说，每个元素都是一个布尔值，是真还是假。在本例中，每个早产儿都是True，否则就是False。我们可以使用head()来查看前5个元素。</p><p>如果你计算布尔系列的总和，它把 &quot;真 &quot;当作 &quot;1&quot;，把 &quot;假 &quot;当作 &quot;0&quot;，所以总和就是 &quot;真 &quot;的数量，也就是早产儿的数量，大约是3700。如果你计算平均值，你会得到Trues的分数；在这种情况下，它接近0.4；也就是说，在这个数据集中大约有40%的新生儿是早产儿。。</p><p>我们可以使用布尔系列作为过滤器；也就是说，我们可以只选择满足某个条件或符合某些标准的行。例如，我们可以使用早产儿和括号运算符从出生体重中选择数值，因此早产儿_体重包含早产儿的出生体重。要选择足月的婴儿，我们可以使用tilde操作符，这是 &quot;逻辑NOT &quot;或反转；它使Trues为假，Falses为真。毫不奇怪，足月婴儿平均比早产婴儿重。</p><p>NSFG数据集包括一个变量 &quot;agecon&quot;，记录了每次怀孕的年龄。</p><img src="https://pic.hanjiaming.com.cn/2022/06/08/3233c5f20dde1.png" alt="1654621903907.png" style="zoom:50%;"><p>前面的练习中，计算了足月婴儿的平均出生体重；我们过滤掉了早产婴儿，因为他们的体重分布是不同的。<br> 多胞胎的体重分布也不同，如双胞胎和三胞胎，也要把它们过滤掉，看看对平均值有什么影响。</p>',18),j=a(`<div class="hint-container tip"><p class="hint-container-title">EDA小结</p><ul><li>Import, clean, and validate</li><li>Visualize distributions</li><li>Explore relationships between variables</li><li>Explore multivariate relationships</li></ul><p>导入和清理数据，以及检查错误和其他特殊情况: 如果跳过这些步骤，它可能会再次困扰您。花时间清理和验证数据可以使您免于尴尬，<strong>有时甚至是代价高昂的错误。</strong></p></div><h2 id="pmf-cdf-pdf" tabindex="-1"><a class="header-anchor" href="#pmf-cdf-pdf" aria-hidden="true">#</a> PMF &amp; CDF &amp; PDF</h2><h3 id="pmf" tabindex="-1"><a class="header-anchor" href="#pmf" aria-hidden="true">#</a> PMF</h3><figure><img src="https://pic.hanjiaming.com.cn/2022/06/08/c581ad41b5817.png" alt="1654668252351.png" tabindex="0" loading="lazy"><figcaption>1654668252351.png</figcaption></figure><p>使用 <code>plt.hist</code> 可以绘制 PMF</p><h3 id="cdf" tabindex="-1"><a class="header-anchor" href="#cdf" aria-hidden="true">#</a> CDF</h3><img src="https://pic.hanjiaming.com.cn/2022/06/08/84967fcad4a61.png" alt="1654668279487.png" style="zoom:33%;"><img src="https://pic.hanjiaming.com.cn/2022/06/08/76ce618d9037a.png" alt="1654668304010.png" style="zoom:67%;"><p>当数据具有大量唯一值时，PMF不能很好地工作，CDF有时能更好的表现数据</p><figure><img src="https://pic.hanjiaming.com.cn/2022/06/08/306ba21b6bd8b.png" alt="1654668379892.png" tabindex="0" loading="lazy"><figcaption>1654668379892.png</figcaption></figure><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pdf <span class="token operator">=</span> count <span class="token operator">/</span> <span class="token builtin">sum</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span>
cdf <span class="token operator">=</span> np<span class="token punctuation">.</span>cumsum<span class="token punctuation">(</span>pdf<span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>bins_count<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">,</span> cdf<span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">&quot;CDF&quot;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pdf" tabindex="-1"><a class="header-anchor" href="#pdf" aria-hidden="true">#</a> PDF</h3><p>使用 <code>sns.distplot()</code> 或者 <code>df.plot.kde()</code>来绘制KDE</p><img src="https://pic.hanjiaming.com.cn/2022/06/08/da586b4c44481.png" alt="1654669710598.png" style="zoom:50%;"><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3><p>总结一下三种可视化分布的方法，PMF、CDF和PDF。一般来说，</p><ul><li>在探索数据的时候会使用 CDF。 <ul><li>我认为它们能提供最好的视图，而不会被噪音所干扰。</li><li>CDFs的最大缺点是它们不太为人所知。</li></ul></li><li>如果我向不熟悉 CDF 的听众展示结果，我会对有少量独特数值的分布使用 PMF。</li><li>如果有大量的数值，则使用 PDF。</li></ul><h2 id="分布建模" tabindex="-1"><a class="header-anchor" href="#分布建模" aria-hidden="true">#</a> 分布建模</h2><h3 id="正态分布pdf建模" tabindex="-1"><a class="header-anchor" href="#正态分布pdf建模" aria-hidden="true">#</a> 正态分布PDF建模</h3><p>正态分布，也被称为高斯分布。</p><img src="https://pic.hanjiaming.com.cn/2022/06/08/d918d741da458.png" alt="1654683920071.png" style="zoom:50%;"><p>举例，下面将正态分布和数据的分布画到一个图上以进行对比。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np
<span class="token keyword">from</span> scipy<span class="token punctuation">.</span>stats <span class="token keyword">import</span> norm

<span class="token comment"># Extract realinc and compute its log</span>
income <span class="token operator">=</span> gss<span class="token punctuation">[</span><span class="token string">&#39;realinc&#39;</span><span class="token punctuation">]</span>
log_income <span class="token operator">=</span> np<span class="token punctuation">.</span>log10<span class="token punctuation">(</span>income<span class="token punctuation">)</span>
mean <span class="token operator">=</span> log_income<span class="token punctuation">.</span>mean<span class="token punctuation">(</span><span class="token punctuation">)</span>
std <span class="token operator">=</span> log_income<span class="token punctuation">.</span>std<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment"># 建立标准轴</span>
<span class="token comment"># 从 -3 到 3 平均取样，默认个数为 num = 50, 作为x轴标点</span>
xs <span class="token operator">=</span> np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span>
<span class="token comment"># 参考xs轴，以正态分布取样</span>
ys <span class="token operator">=</span> norm<span class="token punctuation">(</span>mean<span class="token punctuation">,</span> std<span class="token punctuation">)</span><span class="token punctuation">.</span>pdf<span class="token punctuation">(</span>xs<span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>xs<span class="token punctuation">,</span> ys<span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;gray&#39;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; xs
array([2.        , 2.12244898, 2.24489796, 2.36734694, 2.48979592,
       2.6122449 , 2.73469388, 2.85714286, 2.97959184, 3.10204082,
       3.2244898 , 3.34693878, 3.46938776, 3.59183673, 3.71428571,
       3.83673469, 3.95918367, 4.08163265, 4.20408163, 4.32653061,
       4.44897959, 4.57142857, 4.69387755, 4.81632653, 4.93877551,
       5.06122449, 5.18367347, 5.30612245, 5.42857143, 5.55102041,
       5.67346939, 5.79591837, 5.91836735, 6.04081633, 6.16326531,
       6.28571429, 6.40816327, 6.53061224, 6.65306122, 6.7755102 ,
       6.89795918, 7.02040816, 7.14285714, 7.26530612, 7.3877551 ,
       7.51020408, 7.63265306, 7.75510204, 7.87755102, 8.        ])
&gt;&gt;&gt; ys
array([2.16260226e-07, 1.00555769e-06, 4.30979761e-06, 1.70265363e-05,
       6.20033692e-05, 2.08124792e-04, 6.43949619e-04, 1.83653628e-03,
       4.82799354e-03, 1.16991254e-02, 2.61312183e-02, 5.38003955e-02,
       1.02101195e-01, 1.78605870e-01, 2.87991838e-01, 4.28039825e-01,
       5.86418582e-01, 7.40543912e-01, 8.62012285e-01, 9.24901837e-01,
       9.14739379e-01, 8.33908991e-01, 7.00744156e-01, 5.42775029e-01,
       3.87525051e-01, 2.55034686e-01, 1.54709958e-01, 8.65081114e-02,
       4.45876868e-02, 2.11832504e-02, 9.27662080e-03, 3.74460969e-03,
       1.39329428e-03, 4.77857825e-04, 1.51068562e-04, 4.40219256e-05,
       1.18245201e-05, 2.92763923e-06, 6.68145641e-07, 1.40554343e-07,
       2.72544200e-08, 4.87134813e-09, 8.02566333e-10, 1.21879946e-10,
       1.70609464e-11, 2.20137247e-12, 2.61820405e-13, 2.87033770e-14,
       2.90056130e-15, 2.70178414e-16])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://pic.hanjiaming.com.cn/2022/06/08/20b9ce09cfed2.png" alt="1654676762938.png" style="zoom:50%;"><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 建立数据轴</span>
<span class="token comment"># 参数 bw_method 用于重新取样防止过拟合</span>
log_income<span class="token punctuation">.</span>plot<span class="token punctuation">.</span>kde<span class="token punctuation">(</span>bw_method<span class="token operator">=</span><span class="token number">0.5</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://pic.hanjiaming.com.cn/2022/06/08/08a278a6ebd66.png" alt="1654677081562.png" style="zoom:67%;"><p>因此可以说 log_income 呈现正态分布。</p><h3 id="正态分布cdf建模" tabindex="-1"><a class="header-anchor" href="#正态分布cdf建模" aria-hidden="true">#</a> 正态分布CDF建模</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Evaluate the model CDF</span>
xs <span class="token operator">=</span> np<span class="token punctuation">.</span>linspace<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5.5</span><span class="token punctuation">)</span>
ys <span class="token operator">=</span> norm<span class="token punctuation">(</span>mean<span class="token punctuation">,</span> std<span class="token punctuation">)</span><span class="token punctuation">.</span>cdf<span class="token punctuation">(</span>xs<span class="token punctuation">)</span>

<span class="token comment"># Plot the model CDF</span>
plt<span class="token punctuation">.</span>clf<span class="token punctuation">(</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>xs<span class="token punctuation">,</span> ys<span class="token punctuation">,</span> color<span class="token operator">=</span><span class="token string">&#39;gray&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># Create and plot the Cdf of log_income</span>
<span class="token comment"># Cdf 是一个自定义函数</span>
Cdf<span class="token punctuation">(</span>log_income<span class="token punctuation">)</span><span class="token punctuation">.</span>plot<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
<span class="token comment"># Label the axes</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">&#39;log10 of realinc&#39;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">&#39;CDF&#39;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://pic.hanjiaming.com.cn/2022/06/08/544a2d2b8e1c6.png" alt="1654677402396.png" style="zoom:50%;"><h2 id="figure-fix" tabindex="-1"><a class="header-anchor" href="#figure-fix" aria-hidden="true">#</a> Figure Fix</h2><h3 id="过渡采样点处理" tabindex="-1"><a class="header-anchor" href="#过渡采样点处理" aria-hidden="true">#</a> 过渡采样点处理</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>brfss <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_hdf<span class="token punctuation">(</span><span class="token string">&#39;brfss.hdf5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;brfss&#39;</span><span class="token punctuation">)</span>
height <span class="token operator">=</span> brfss<span class="token punctuation">[</span><span class="token string">&#39;HTM4&#39;</span><span class="token punctuation">]</span>
weight <span class="token operator">=</span> brfss<span class="token punctuation">[</span><span class="token string">&#39;WTKG3&#39;</span><span class="token punctuation">]</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>height<span class="token punctuation">,</span> weight<span class="token punctuation">,</span> <span class="token string">&#39;o&#39;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">&#39;Height in cm&#39;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">&#39;Weight in kg&#39;</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://pic.hanjiaming.com.cn/2022/06/08/7c76f23c83957.png" alt="1654682883948.png" style="zoom:50%;"><p>左图由于过度采样，导致点扎堆，无法获取更直观的信息。我们的目标是加工其成为右面的图像。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 调整点的样式，使用 &quot;o&quot;, 而不是使用·</span>
<span class="token comment"># markersize 调整点的大小</span>
<span class="token comment"># alpha调整点的透明度，以识别重叠</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>x <span class="token operator">=</span> height<span class="token punctuation">,</span> y <span class="token operator">=</span> weight<span class="token punctuation">,</span> <span class="token string">&#39;o&#39;</span><span class="token punctuation">,</span> markersize<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.02</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pic.hanjiaming.com.cn/2022/06/08/b9bd5139c3381.png" alt="1654683070394.png" tabindex="0" loading="lazy"><figcaption>1654683070394.png</figcaption></figure><p>由于点过度集中，不妨添加一些抖动(Jittering)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># size 指定 series 的长度,即随机数的个数</span>
height_jitter <span class="token operator">=</span> height <span class="token operator">+</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>brfss<span class="token punctuation">)</span><span class="token punctuation">)</span>
weight_jitter <span class="token operator">=</span> weight <span class="token operator">+</span> np<span class="token punctuation">.</span>random<span class="token punctuation">.</span>normal<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> size<span class="token operator">=</span><span class="token builtin">len</span><span class="token punctuation">(</span>brfss<span class="token punctuation">)</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>height_jitter<span class="token punctuation">,</span> weight_jitter<span class="token punctuation">,</span> <span class="token string">&#39;o&#39;</span><span class="token punctuation">,</span> markersize<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.01</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pic.hanjiaming.com.cn/2022/06/08/b3690f540c350.png" alt="1654683979824.png" tabindex="0" loading="lazy"><figcaption>1654683979824.png</figcaption></figure><p>由于点集中在一小块，不妨设置一下轴的聚焦</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>height_jitter<span class="token punctuation">,</span> weight_jitter<span class="token punctuation">,</span> <span class="token string">&#39;o&#39;</span><span class="token punctuation">,</span> markersize<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">0.02</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>axis<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">140</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">160</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://pic.hanjiaming.com.cn/2022/06/08/b43968b007faa.png" alt="1654684054013.png" tabindex="0" loading="lazy"><figcaption>1654684054013.png</figcaption></figure><h3 id="改变轴的scale" tabindex="-1"><a class="header-anchor" href="#改变轴的scale" aria-hidden="true">#</a> 改变轴的scale</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Make a box plot</span>
sns<span class="token punctuation">.</span>boxplot<span class="token punctuation">(</span>x <span class="token operator">=</span> <span class="token string">&quot;_HTMG10&quot;</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token string">&quot;WTKG3&quot;</span><span class="token punctuation">,</span> data <span class="token operator">=</span> data<span class="token punctuation">,</span> whis<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>

<span class="token comment"># Plot the y-axis on a log scale</span>
plt<span class="token punctuation">.</span>yscale<span class="token punctuation">(</span><span class="token string">&#39;ln&#39;</span><span class="token punctuation">)</span>

plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://pic.hanjiaming.com.cn/2022/06/08/c17a2c6d7aad7.png" alt="1654692864566.png" style="zoom:50%;"><h2 id="接下来" tabindex="-1"><a class="header-anchor" href="#接下来" aria-hidden="true">#</a> 接下来</h2><ul><li>线性相关探索</li><li>线性回归/单变量一次方回归</li><li>多元多次方回归</li><li>...</li></ul>`,49);function C(A,N){const t=i("ExternalLinkIcon");return o(),c("div",null,[r,n("p",null,[s("关于EDA详细说明，请查看 "),n("a",d,[s("https://www.itl.nist.gov/div898/handbook/eda/eda.htm"),e(t)])]),m,k,l(" more "),v,h,g,b,f,_,n("details",y,[x,n("ul",null,[D,n("li",null,[n("a",F,[s("df.info"),e(t)]),s(": 大略浏览数据表")]),w,q,z]),E]),j])}const G=p(u,[["render",C],["__file","EDA.html.vue"]]);export{G as default};
