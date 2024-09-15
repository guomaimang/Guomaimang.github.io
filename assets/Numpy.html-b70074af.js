const e=JSON.parse('{"key":"v-4f51470c","path":"/note/ds/da/Numpy-Pandas/Numpy.html","title":"Numpy","lang":"zh-CN","frontmatter":{"article":false,"date":"2022-03-23T00:00:00.000Z","order":2,"description":"Numpy What is Numpy NumPy是Python中科学计算的核心库。诸如pandas、SciPy和Matplotlib等Python基础库都建立在NumPy的API之上。机器学习库也是如此，如TensorFlow和scikit-learn，它们使用NumPy数组作为输入。任何在Python中使用数字的人都会接触到NumPy数组.","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/ds/da/Numpy-Pandas/Numpy.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"Numpy"}],["meta",{"property":"og:description","content":"Numpy What is Numpy NumPy是Python中科学计算的核心库。诸如pandas、SciPy和Matplotlib等Python基础库都建立在NumPy的API之上。机器学习库也是如此，如TensorFlow和scikit-learn，它们使用NumPy数组作为输入。任何在Python中使用数字的人都会接触到NumPy数组."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T05:33:29.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2022-03-23T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T05:33:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Numpy\\",\\"description\\":\\"Numpy What is Numpy NumPy是Python中科学计算的核心库。诸如pandas、SciPy和Matplotlib等Python基础库都建立在NumPy的API之上。机器学习库也是如此，如TensorFlow和scikit-learn，它们使用NumPy数组作为输入。任何在Python中使用数字的人都会接触到NumPy数组.\\"}"]]},"headers":[{"level":2,"title":"What is Numpy","slug":"what-is-numpy","link":"#what-is-numpy","children":[]},{"level":2,"title":"Why Numpy","slug":"why-numpy","link":"#why-numpy","children":[]},{"level":2,"title":"Cerate np array","slug":"cerate-np-array","link":"#cerate-np-array","children":[{"level":3,"title":"Create empty array","slug":"create-empty-array","link":"#create-empty-array","children":[]},{"level":3,"title":"Creating 1D arrays from lists","slug":"creating-1d-arrays-from-lists","link":"#creating-1d-arrays-from-lists","children":[]},{"level":3,"title":"Creating 2D arrays from lists","slug":"creating-2d-arrays-from-lists","link":"#creating-2d-arrays-from-lists","children":[]},{"level":3,"title":"np.zeros()","slug":"np-zeros","link":"#np-zeros","children":[]},{"level":3,"title":"np.random.random()","slug":"np-random-random","link":"#np-random-random","children":[]},{"level":3,"title":"np.arange()","slug":"np-arange","link":"#np-arange","children":[]},{"level":3,"title":"3D & 4D arrays","slug":"_3d-4d-arrays","link":"#_3d-4d-arrays","children":[]}]},{"level":2,"title":"Create from pd","slug":"create-from-pd","link":"#create-from-pd","children":[]},{"level":2,"title":"Matrix and tensor arrays","slug":"matrix-and-tensor-arrays","link":"#matrix-and-tensor-arrays","children":[{"level":3,"title":".shape 获取形状","slug":"shape-获取形状","link":"#shape-获取形状","children":[]},{"level":3,"title":".flatten() 数组一维化","slug":"flatten-数组一维化","link":"#flatten-数组一维化","children":[]},{"level":3,"title":".reshape() 重设形状","slug":"reshape-重设形状","link":"#reshape-重设形状","children":[]},{"level":3,"title":"向量转二维数组","slug":"向量转二维数组","link":"#向量转二维数组","children":[]},{"level":3,"title":".ndim  维度","slug":"ndim-维度","link":"#ndim-维度","children":[]}]},{"level":2,"title":"np.array type","slug":"np-array-type","link":"#np-array-type","children":[]},{"level":2,"title":"Indexing and slicing","slug":"indexing-and-slicing","link":"#indexing-and-slicing","children":[{"level":3,"title":"Indexing 1D arrays","slug":"indexing-1d-arrays","link":"#indexing-1d-arrays","children":[]},{"level":3,"title":"Indexing elements in 2D","slug":"indexing-elements-in-2d","link":"#indexing-elements-in-2d","children":[]},{"level":3,"title":"Slicing 1D arrays","slug":"slicing-1d-arrays","link":"#slicing-1d-arrays","children":[]},{"level":3,"title":"Slicing 2D arrays","slug":"slicing-2d-arrays","link":"#slicing-2d-arrays","children":[]}]},{"level":2,"title":"Axis","slug":"axis","link":"#axis","children":[]},{"level":2,"title":"Sort","slug":"sort","link":"#sort","children":[]},{"level":2,"title":"Boolean calculate","slug":"boolean-calculate","link":"#boolean-calculate","children":[]},{"level":2,"title":"Filter","slug":"filter","link":"#filter","children":[{"level":3,"title":"Boolean masks","slug":"boolean-masks","link":"#boolean-masks","children":[]},{"level":3,"title":"np.where()","slug":"np-where","link":"#np-where","children":[]}]},{"level":2,"title":"Adding and removing","slug":"adding-and-removing","link":"#adding-and-removing","children":[{"level":3,"title":"Concatenating","slug":"concatenating","link":"#concatenating","children":[]},{"level":3,"title":"Deleting with np.delete()","slug":"deleting-with-np-delete","link":"#deleting-with-np-delete","children":[]}]},{"level":2,"title":"Summarizing data","slug":"summarizing-data","link":"#summarizing-data","children":[{"level":3,"title":"keepdims = True","slug":"keepdims-true","link":"#keepdims-true","children":[]},{"level":3,"title":".cumsum()","slug":"cumsum","link":"#cumsum","children":[]}]},{"level":2,"title":"Calculate","slug":"calculate","link":"#calculate","children":[{"level":3,"title":"向量化计算","slug":"向量化计算","link":"#向量化计算","children":[]},{"level":3,"title":"函数适用于元素","slug":"函数适用于元素","link":"#函数适用于元素","children":[]},{"level":3,"title":"Broadcastable","slug":"broadcastable","link":"#broadcastable","children":[]}]},{"level":2,"title":"Number generators","slug":"number-generators","link":"#number-generators","children":[{"level":3,"title":"np.linspace()","slug":"np-linspace","link":"#np-linspace","children":[]},{"level":3,"title":"np.arange()","slug":"np-arange-1","link":"#np-arange-1","children":[]}]},{"level":2,"title":"Random generators","slug":"random-generators","link":"#random-generators","children":[]},{"level":2,"title":"Read file","slug":"read-file","link":"#read-file","children":[]},{"level":2,"title":"RGB arrays","slug":"rgb-arrays","link":"#rgb-arrays","children":[{"level":3,"title":"Loading .npy files","slug":"loading-npy-files","link":"#loading-npy-files","children":[]},{"level":3,"title":"Examining RGB data","slug":"examining-rgb-data","link":"#examining-rgb-data","children":[]},{"level":3,"title":"Updating RGB data","slug":"updating-rgb-data","link":"#updating-rgb-data","children":[]},{"level":3,"title":"Saving arrays as .npy files","slug":"saving-arrays-as-npy-files","link":"#saving-arrays-as-npy-files","children":[]}]},{"level":2,"title":"Array acrobatics","slug":"array-acrobatics","link":"#array-acrobatics","children":[{"level":3,"title":"Flipping an array","slug":"flipping-an-array","link":"#flipping-an-array","children":[]},{"level":3,"title":"Transposing an array","slug":"transposing-an-array","link":"#transposing-an-array","children":[]}]},{"level":2,"title":"help()","slug":"help","link":"#help","children":[]},{"level":2,"title":"Stacking and splitting","slug":"stacking-and-splitting","link":"#stacking-and-splitting","children":[{"level":3,"title":"Slicing dimensions","slug":"slicing-dimensions","link":"#slicing-dimensions","children":[]},{"level":3,"title":"Splitting arrays","slug":"splitting-arrays","link":"#splitting-arrays","children":[]},{"level":3,"title":"Stacking arrays","slug":"stacking-arrays","link":"#stacking-arrays","children":[]}]}],"git":{"createdTime":1726378409000,"updatedTime":1726378409000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":30.16,"words":3016},"filePathRelative":"note/ds/da/Numpy-Pandas/Numpy.md","localizedDate":"2022年3月23日","excerpt":"<h1> Numpy</h1>\\n<h2> What is Numpy</h2>\\n<p>NumPy是Python中科学计算的核心库。诸如pandas、SciPy和Matplotlib等Python基础库都建立在NumPy的API之上。机器学习库也是如此，如TensorFlow和scikit-learn，它们使用NumPy数组作为输入。任何在Python中使用数字的人都会接触到NumPy数组.</p>\\n<img src=\\"https://pic.hanjiaming.com.cn/2022/06/14/e3af983ebb335.png\\" alt=\\"1655207474267.png\\" style=\\"zoom:50%;\\">","autoDesc":true}');export{e as data};
