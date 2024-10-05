const t=JSON.parse('{"key":"v-53a14236","path":"/note/ds/da/Statistics/Random-Variables.html","title":"随机变量概述","lang":"zh-CN","frontmatter":{"article":false,"date":"2022-06-19T00:00:00.000Z","order":6,"headerDepth":2,"author":"Hirsun，Belter","description":"随机变量概述 对随机变量及其取值规律的研究是概率论的核心内容。 随机变量与事件 随机变量的本质是一种函数（映射关系），在古典概率模型中，“事件和事件的概率”是核心概念；但是在现代概率论中，“随机变量及其取值规律”是核心概念。 随机变量实际上只是事件的另一种表达方式，这种表达方式更加形式化和符号化，也更加便于理解以及进行逻辑运算。不同的事件，其实就是随机变量不同取值的组合。在陈希孺的书中，举了一个很好的例子来说明两者之间的差别： 对于随机试验，我们所关心的往往是与所研究的特定问题有关的某个或某些量，而这些量就是随机变量。当然，有时我们所关心的是某个或某些特定的随机事件。 例如，在特定一群人中，年收入在万元以上的高收入者，以及年收入在3000元以下的低收入者，各自的比率如何？这看上去像是两个孤立的事件。可是，若我们引入一个随机变量X： X = 随机抽出一个人其年收入 则X是我们关心的随机变量。 上述两个事件可分别表示为 {X&gt;10000} 或 {X&lt;3000} 。这就看出：随机事件这个概念实际上包容在随机变量这个更广的概念之内。也可以说，随机事件是从静态的观点来研究随机现象，而随机变量则是一种动态的观点，一如数学分析中的常量与变量的区分那样，变量概念是高等数学有别于初等数学的基础概念。同样，概率论能从计算一些孤立事件的概率发展为一个更高的理论体系，其基本概念就是随机变量。","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/ds/da/Statistics/Random-Variables.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"随机变量概述"}],["meta",{"property":"og:description","content":"随机变量概述 对随机变量及其取值规律的研究是概率论的核心内容。 随机变量与事件 随机变量的本质是一种函数（映射关系），在古典概率模型中，“事件和事件的概率”是核心概念；但是在现代概率论中，“随机变量及其取值规律”是核心概念。 随机变量实际上只是事件的另一种表达方式，这种表达方式更加形式化和符号化，也更加便于理解以及进行逻辑运算。不同的事件，其实就是随机变量不同取值的组合。在陈希孺的书中，举了一个很好的例子来说明两者之间的差别： 对于随机试验，我们所关心的往往是与所研究的特定问题有关的某个或某些量，而这些量就是随机变量。当然，有时我们所关心的是某个或某些特定的随机事件。 例如，在特定一群人中，年收入在万元以上的高收入者，以及年收入在3000元以下的低收入者，各自的比率如何？这看上去像是两个孤立的事件。可是，若我们引入一个随机变量X： X = 随机抽出一个人其年收入 则X是我们关心的随机变量。 上述两个事件可分别表示为 {X&gt;10000} 或 {X&lt;3000} 。这就看出：随机事件这个概念实际上包容在随机变量这个更广的概念之内。也可以说，随机事件是从静态的观点来研究随机现象，而随机变量则是一种动态的观点，一如数学分析中的常量与变量的区分那样，变量概念是高等数学有别于初等数学的基础概念。同样，概率论能从计算一些孤立事件的概率发展为一个更高的理论体系，其基本概念就是随机变量。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T05:33:29.000Z"}],["meta",{"property":"article:author","content":"Hirsun，Belter"}],["meta",{"property":"article:published_time","content":"2022-06-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T05:33:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"随机变量概述\\",\\"description\\":\\"随机变量概述 对随机变量及其取值规律的研究是概率论的核心内容。 随机变量与事件 随机变量的本质是一种函数（映射关系），在古典概率模型中，“事件和事件的概率”是核心概念；但是在现代概率论中，“随机变量及其取值规律”是核心概念。 随机变量实际上只是事件的另一种表达方式，这种表达方式更加形式化和符号化，也更加便于理解以及进行逻辑运算。不同的事件，其实就是随机变量不同取值的组合。在陈希孺的书中，举了一个很好的例子来说明两者之间的差别： 对于随机试验，我们所关心的往往是与所研究的特定问题有关的某个或某些量，而这些量就是随机变量。当然，有时我们所关心的是某个或某些特定的随机事件。 例如，在特定一群人中，年收入在万元以上的高收入者，以及年收入在3000元以下的低收入者，各自的比率如何？这看上去像是两个孤立的事件。可是，若我们引入一个随机变量X： X = 随机抽出一个人其年收入 则X是我们关心的随机变量。 上述两个事件可分别表示为 {X&gt;10000} 或 {X&lt;3000} 。这就看出：随机事件这个概念实际上包容在随机变量这个更广的概念之内。也可以说，随机事件是从静态的观点来研究随机现象，而随机变量则是一种动态的观点，一如数学分析中的常量与变量的区分那样，变量概念是高等数学有别于初等数学的基础概念。同样，概率论能从计算一些孤立事件的概率发展为一个更高的理论体系，其基本概念就是随机变量。\\"}"]]},"headers":[{"level":2,"title":"随机变量与事件","slug":"随机变量与事件","link":"#随机变量与事件","children":[]},{"level":2,"title":"随机变量的分类","slug":"随机变量的分类","link":"#随机变量的分类","children":[{"level":3,"title":"离散型随机变量","slug":"离散型随机变量","link":"#离散型随机变量","children":[]},{"level":3,"title":"连续型随机变量","slug":"连续型随机变量","link":"#连续型随机变量","children":[]}]}],"git":{"createdTime":1726378409000,"updatedTime":1726378409000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.83,"words":883},"filePathRelative":"note/ds/da/Statistics/Random-Variables.md","localizedDate":"2022年6月19日","excerpt":"<h1> 随机变量概述</h1>\\n<p>对随机变量及其取值规律的研究是概率论的核心内容。</p>\\n<h2> 随机变量与事件</h2>\\n<p>随机变量的本质是一种函数（映射关系），在古典概率模型中，“<em>事件和事件的概率</em>”是核心概念；但是在现代概率论中，“<em>随机变量及其取值规律</em>”是核心概念。</p>\\n<p>随机变量实际上只是事件的另一种表达方式，这种表达方式更加形式化和符号化，也更加便于理解以及进行逻辑运算。不同的事件，其实就是随机变量不同取值的组合。在陈希孺的书中，举了一个很好的例子来说明两者之间的差别：</p>\\n<blockquote>\\n<p>对于随机试验，我们所关心的往往是<strong>与所研究的特定问题有关的某个或某些量</strong>，而这些量就是<strong>随机变量</strong>。当然，有时我们所关心的是某个或某些特定的随机事件。</p>\\n<p>例如，在特定一群人中，年收入在万元以上的高收入者，以及年收入在3000元以下的低收入者，各自的比率如何？这看上去像是两个孤立的事件。可是，若我们引入一个随机变量X：</p>\\n<p>X = 随机抽出一个人其年收入</p>\\n<p>则X是我们关心的随机变量。</p>\\n<p>上述两个事件可分别表示为 {X&gt;10000} 或 {X&lt;3000} 。这就看出：随机事件这个概念实际上包容在随机变量这个更广的概念之内。也可以说，随机事件是从静态的观点来研究随机现象，而随机变量则是一种动态的观点，一如数学分析中的常量与变量的区分那样，变量概念是高等数学有别于初等数学的基础概念。同样，概率论能从计算一些孤立事件的概率发展为一个更高的理论体系，其基本概念就是随机变量。</p>\\n</blockquote>","autoDesc":true}');export{t as data};