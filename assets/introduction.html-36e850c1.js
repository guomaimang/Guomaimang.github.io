const e=JSON.parse('{"key":"v-6ded6f6d","path":"/note/ds/ml/basic-models/introduction.html","title":"机器学习的基本概念","lang":"zh-CN","frontmatter":{"date":"2022-07-18T00:00:00.000Z","order":1,"author":"Belter, Hirsun","headerDepth":2,"category":["tech"],"description":"机器学习的基本概念 下图展示了机器学习的基本过程。对于学过高中数学的人来说，解方程是我们再熟悉不过的事情了。例如一个二元一次方程组，其解（如果存在的话）就是平面上两条直线的交点，此时方程以及参数（方程的系数）都是确定的。我们通常意义上的算法相当于一个定义好的函数（图1中的h），应用该算法的过程就是带入不同的自变量求函数值的过程。 然而在机器学习算法中，最大的不同在于没有一个\\"定义好的函数\\"，而是需要通过收集到的数据训练出一个函数（图1中从Training Set到h的过程），本质上是对训练集中数据的一种概括和总结。例如只有两个参数的线性回归就是在二维平面上找一条适合描述训练集中样本点变化规律的直线的过程。","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/ds/ml/basic-models/introduction.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"机器学习的基本概念"}],["meta",{"property":"og:description","content":"机器学习的基本概念 下图展示了机器学习的基本过程。对于学过高中数学的人来说，解方程是我们再熟悉不过的事情了。例如一个二元一次方程组，其解（如果存在的话）就是平面上两条直线的交点，此时方程以及参数（方程的系数）都是确定的。我们通常意义上的算法相当于一个定义好的函数（图1中的h），应用该算法的过程就是带入不同的自变量求函数值的过程。 然而在机器学习算法中，最大的不同在于没有一个\\"定义好的函数\\"，而是需要通过收集到的数据训练出一个函数（图1中从Training Set到h的过程），本质上是对训练集中数据的一种概括和总结。例如只有两个参数的线性回归就是在二维平面上找一条适合描述训练集中样本点变化规律的直线的过程。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T05:33:29.000Z"}],["meta",{"property":"article:author","content":"Belter, Hirsun"}],["meta",{"property":"article:published_time","content":"2022-07-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T05:33:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"机器学习的基本概念\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-07-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-15T05:33:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Belter, Hirsun\\"}]}"]]},"headers":[{"level":2,"title":"一些符号和词汇","slug":"一些符号和词汇","link":"#一些符号和词汇","children":[{"level":3,"title":"训练集（Training Set）","slug":"训练集-training-set","link":"#训练集-training-set","children":[]},{"level":3,"title":"样本（Sample）","slug":"样本-sample","link":"#样本-sample","children":[]},{"level":3,"title":"模型（Model）","slug":"模型-model","link":"#模型-model","children":[]},{"level":3,"title":"训练模型（Training Model）","slug":"训练模型-training-model","link":"#训练模型-training-model","children":[]},{"level":3,"title":"特征（Feature）","slug":"特征-feature","link":"#特征-feature","children":[]}]},{"level":2,"title":"训练集的表示","slug":"训练集的表示","link":"#训练集的表示","children":[{"level":3,"title":"训练集中自变量的表示方法","slug":"训练集中自变量的表示方法","link":"#训练集中自变量的表示方法","children":[]},{"level":3,"title":"训练集中因变量的表示方法","slug":"训练集中因变量的表示方法","link":"#训练集中因变量的表示方法","children":[]}]},{"level":2,"title":"模型的表示","slug":"模型的表示","link":"#模型的表示","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1726378409000,"updatedTime":1726378409000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":23.15,"words":2315},"filePathRelative":"note/ds/ml/basic-models/introduction.md","localizedDate":"2022年7月18日","excerpt":"<h1> 机器学习的基本概念</h1>\\n<p>下图展示了机器学习的基本过程。对于学过高中数学的人来说，解方程是我们再熟悉不过的事情了。例如一个二元一次方程组，其解（如果存在的话）就是平面上两条直线的交点，此时方程以及参数（方程的系数）都是确定的。我们通常意义上的算法相当于一个定义好的函数（图1中的h），应用该算法的过程就是带入不同的自变量求函数值的过程。</p>\\n<img src=\\"https://pic.hanjiaming.com.cn/2022/07/08/96a88ee51f09f.png\\" alt=\\"1657295061460.png\\" style=\\"zoom:50%;\\">\\n<p>然而在机器学习算法中，最大的不同在于没有一个\\"定义好的函数\\"，而是需要通过收集到的数据训练出一个函数（图1中从Training Set到h的过程），本质上是<strong>对训练集中数据的一种概括和总结</strong>。例如只有两个参数的线性回归就是在二维平面上找一条适合描述训练集中样本点变化规律的直线的过程。</p>\\n","autoDesc":true}');export{e as data};
