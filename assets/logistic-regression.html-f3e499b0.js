const n=JSON.parse('{"key":"v-299bdc64","path":"/note/ds/ml/practical-skills/supervised-learning-sk-learn/logistic-regression.html","title":"Logistic regression","lang":"zh-CN","frontmatter":{"article":false,"date":"2022-07-23T00:00:00.000Z","order":4,"headerDepth":2,"description":"Logistic regression Confusion matrix in sk from sklearn.metrics import classification_report, confusion_matrix knn = KNeighborsClassifier(n_neighbors=7) X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=42) knn.fit(X_train, y_train) y_pred = knn.predict(X_test)","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/ds/ml/practical-skills/supervised-learning-sk-learn/logistic-regression.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"Logistic regression"}],["meta",{"property":"og:description","content":"Logistic regression Confusion matrix in sk from sklearn.metrics import classification_report, confusion_matrix knn = KNeighborsClassifier(n_neighbors=7) X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=42) knn.fit(X_train, y_train) y_pred = knn.predict(X_test)"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T05:33:29.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2022-07-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T05:33:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Logistic regression\\",\\"description\\":\\"Logistic regression Confusion matrix in sk from sklearn.metrics import classification_report, confusion_matrix knn = KNeighborsClassifier(n_neighbors=7) X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.4, random_state=42) knn.fit(X_train, y_train) y_pred = knn.predict(X_test)\\"}"]]},"headers":[{"level":2,"title":"Confusion matrix in sk","slug":"confusion-matrix-in-sk","link":"#confusion-matrix-in-sk","children":[]},{"level":2,"title":"Binary Classification","slug":"binary-classification","link":"#binary-classification","children":[]},{"level":2,"title":"Probability thresholds","slug":"probability-thresholds","link":"#probability-thresholds","children":[]},{"level":2,"title":"The ROC curve","slug":"the-roc-curve","link":"#the-roc-curve","children":[]}],"git":{"createdTime":1726378409000,"updatedTime":1726378409000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.68,"words":268},"filePathRelative":"note/ds/ml/practical-skills/supervised-learning-sk-learn/logistic-regression.md","localizedDate":"2022年7月23日","excerpt":"<h1> Logistic regression</h1>\\n<h2> Confusion matrix in sk</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">from</span> sklearn<span class=\\"token punctuation\\">.</span>metrics <span class=\\"token keyword\\">import</span> classification_report<span class=\\"token punctuation\\">,</span> confusion_matrix\\n\\nknn <span class=\\"token operator\\">=</span> KNeighborsClassifier<span class=\\"token punctuation\\">(</span>n_neighbors<span class=\\"token operator\\">=</span><span class=\\"token number\\">7</span><span class=\\"token punctuation\\">)</span>\\nX_train<span class=\\"token punctuation\\">,</span> X_test<span class=\\"token punctuation\\">,</span> y_train<span class=\\"token punctuation\\">,</span> y_test <span class=\\"token operator\\">=</span> train_test_split<span class=\\"token punctuation\\">(</span>X<span class=\\"token punctuation\\">,</span> y<span class=\\"token punctuation\\">,</span> test_size<span class=\\"token operator\\">=</span><span class=\\"token number\\">0.4</span><span class=\\"token punctuation\\">,</span> random_state<span class=\\"token operator\\">=</span><span class=\\"token number\\">42</span><span class=\\"token punctuation\\">)</span>\\nknn<span class=\\"token punctuation\\">.</span>fit<span class=\\"token punctuation\\">(</span>X_train<span class=\\"token punctuation\\">,</span> y_train<span class=\\"token punctuation\\">)</span>\\n\\ny_pred <span class=\\"token operator\\">=</span> knn<span class=\\"token punctuation\\">.</span>predict<span class=\\"token punctuation\\">(</span>X_test<span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};