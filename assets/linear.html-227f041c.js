const s=JSON.parse(`{"key":"v-8766bedc","path":"/note/ds/ml/practical-skills/regression-with-statsmodels/linear.html","title":"Linear Relationship","lang":"zh-CN","frontmatter":{"article":false,"date":"2022-06-14T00:00:00.000Z","order":2,"description":"Linear Relationship 线性回归/单变量一次方回归 我们可以使用 linregress() 的结果来计算两个series的最佳拟合线。 有时候我们会非常地关心斜率，也就是变化率 from scipy.stats import linregress # Extract the variables # linregress() 无法处理 Nan 值 subset = brfss.dropna(subset=['INCOME2', '_VEGESU1']) # series1 &amp; series 2 # xs 作为自变量， ys 作为待预测的属性 xs = subset[\\"INCOME2\\"] ys = subset[\\"_VEGESU1\\"] # Compute the linear regression res = linregress(xs, ys) print(res)","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/ds/ml/practical-skills/regression-with-statsmodels/linear.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"Linear Relationship"}],["meta",{"property":"og:description","content":"Linear Relationship 线性回归/单变量一次方回归 我们可以使用 linregress() 的结果来计算两个series的最佳拟合线。 有时候我们会非常地关心斜率，也就是变化率 from scipy.stats import linregress # Extract the variables # linregress() 无法处理 Nan 值 subset = brfss.dropna(subset=['INCOME2', '_VEGESU1']) # series1 &amp; series 2 # xs 作为自变量， ys 作为待预测的属性 xs = subset[\\"INCOME2\\"] ys = subset[\\"_VEGESU1\\"] # Compute the linear regression res = linregress(xs, ys) print(res)"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T05:33:29.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2022-06-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T05:33:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Linear Relationship\\",\\"description\\":\\"Linear Relationship 线性回归/单变量一次方回归 我们可以使用 linregress() 的结果来计算两个series的最佳拟合线。 有时候我们会非常地关心斜率，也就是变化率 from scipy.stats import linregress # Extract the variables # linregress() 无法处理 Nan 值 subset = brfss.dropna(subset=['INCOME2', '_VEGESU1']) # series1 &amp; series 2 # xs 作为自变量， ys 作为待预测的属性 xs = subset[\\\\\\"INCOME2\\\\\\"] ys = subset[\\\\\\"_VEGESU1\\\\\\"] # Compute the linear regression res = linregress(xs, ys) print(res)\\"}"]]},"headers":[{"level":2,"title":"线性回归/单变量一次方回归","slug":"线性回归-单变量一次方回归","link":"#线性回归-单变量一次方回归","children":[]},{"level":2,"title":"转换变量","slug":"转换变量","link":"#转换变量","children":[{"level":3,"title":"转换x","slug":"转换x","link":"#转换x","children":[]},{"level":3,"title":"转换 x 和 y","slug":"转换-x-和-y","link":"#转换-x-和-y","children":[]}]},{"level":2,"title":"单变量多次方回归","slug":"单变量多次方回归","link":"#单变量多次方回归","children":[]}],"git":{"createdTime":1726378409000,"updatedTime":1726378409000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.68,"words":668},"filePathRelative":"note/ds/ml/practical-skills/regression-with-statsmodels/linear.md","localizedDate":"2022年6月14日","excerpt":"<h1> Linear Relationship</h1>\\n<h2> 线性回归/单变量一次方回归</h2>\\n<p>我们可以使用 linregress() 的结果来计算两个series的最佳拟合线。</p>\\n<p>有时候我们会非常地关心<strong>斜率</strong>，也就是变化率</p>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> scipy<span class=\\"token punctuation\\">.</span>stats <span class=\\"token keyword\\">import</span> linregress\\n\\n<span class=\\"token comment\\"># Extract the variables</span>\\n<span class=\\"token comment\\"># linregress() 无法处理 Nan 值</span>\\nsubset <span class=\\"token operator\\">=</span> brfss<span class=\\"token punctuation\\">.</span>dropna<span class=\\"token punctuation\\">(</span>subset<span class=\\"token operator\\">=</span><span class=\\"token punctuation\\">[</span><span class=\\"token string\\">'INCOME2'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'_VEGESU1'</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\"># series1 &amp; series 2</span>\\n<span class=\\"token comment\\"># xs 作为自变量， ys 作为待预测的属性</span>\\nxs <span class=\\"token operator\\">=</span> subset<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"INCOME2\\"</span><span class=\\"token punctuation\\">]</span> \\nys <span class=\\"token operator\\">=</span> subset<span class=\\"token punctuation\\">[</span><span class=\\"token string\\">\\"_VEGESU1\\"</span><span class=\\"token punctuation\\">]</span>\\n\\n<span class=\\"token comment\\"># Compute the linear regression</span>\\nres <span class=\\"token operator\\">=</span> linregress<span class=\\"token punctuation\\">(</span>xs<span class=\\"token punctuation\\">,</span> ys<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>res<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{s as data};