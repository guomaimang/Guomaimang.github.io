const e=JSON.parse('{"key":"v-1d60041c","path":"/note/ds/ml/practical-skills/regression-with-statsmodels/quantifying-model-fit.html","title":"Quantifying model fit","lang":"zh-CN","frontmatter":{"article":false,"date":"2022-06-14T00:00:00.000Z","order":4,"description":"Quantifying model fit 即「量化模型拟合」 r-squared 又称「Coefficient of determination」，即测定系数 由于枯燥的历史原因，简单的线性回归用小写的r，当你有一个以上的解释变量时用大写的R。它被定义为响应变量中可由解释变量预测的方差比例。 判定系数R2是评估回归模型好坏的指标。R平方取值范围也为0~1，通常以百分数表示。比如回归模型的R平方等于0.7，那么表示，此回归模型对预测结果的可解释程度为70%。","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/ds/ml/practical-skills/regression-with-statsmodels/quantifying-model-fit.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"Quantifying model fit"}],["meta",{"property":"og:description","content":"Quantifying model fit 即「量化模型拟合」 r-squared 又称「Coefficient of determination」，即测定系数 由于枯燥的历史原因，简单的线性回归用小写的r，当你有一个以上的解释变量时用大写的R。它被定义为响应变量中可由解释变量预测的方差比例。 判定系数R2是评估回归模型好坏的指标。R平方取值范围也为0~1，通常以百分数表示。比如回归模型的R平方等于0.7，那么表示，此回归模型对预测结果的可解释程度为70%。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T05:33:29.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2022-06-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T05:33:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Quantifying model fit\\",\\"description\\":\\"Quantifying model fit 即「量化模型拟合」 r-squared 又称「Coefficient of determination」，即测定系数 由于枯燥的历史原因，简单的线性回归用小写的r，当你有一个以上的解释变量时用大写的R。它被定义为响应变量中可由解释变量预测的方差比例。 判定系数R2是评估回归模型好坏的指标。R平方取值范围也为0~1，通常以百分数表示。比如回归模型的R平方等于0.7，那么表示，此回归模型对预测结果的可解释程度为70%。\\"}"]]},"headers":[{"level":2,"title":"r-squared","slug":"r-squared","link":"#r-squared","children":[]},{"level":2,"title":"MSE & RMSE","slug":"mse-rmse","link":"#mse-rmse","children":[{"level":3,"title":"计算 MSE","slug":"计算-mse","link":"#计算-mse","children":[]},{"level":3,"title":"手动计算 RSE","slug":"手动计算-rse","link":"#手动计算-rse","children":[]},{"level":3,"title":"手动计算 RMSE","slug":"手动计算-rmse","link":"#手动计算-rmse","children":[]}]}],"git":{"createdTime":1726378409000,"updatedTime":1726378409000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.6,"words":760},"filePathRelative":"note/ds/ml/practical-skills/regression-with-statsmodels/quantifying-model-fit.md","localizedDate":"2022年6月14日","excerpt":"<h1> Quantifying model fit</h1>\\n<p>即「量化模型拟合」</p>\\n<h2> r-squared</h2>\\n<p>又称「Coefficient of determination」，即测定系数</p>\\n<p>由于枯燥的历史原因，简单的线性回归用小写的r，当你有一个以上的解释变量时用大写的R。它被定义为响应变量中可由解释变量预测的方差比例。</p>\\n<p>判定系数R<sup>2</sup>是评估回归模型好坏的指标。R平方取值范围也为0~1，通常以百分数表示。比如回归模型的R平方等于0.7，那么表示，此回归模型对预测结果的可解释程度为70%。</p>\\n<img src=\\"https://pic.hanjiaming.com.cn/2022/06/16/76fe65149cece.png\\" alt=\\"1655368481996.png\\" style=\\"zoom: 33%;\\">","autoDesc":true}');export{e as data};
