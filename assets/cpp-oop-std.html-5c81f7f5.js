const e=JSON.parse('{"key":"v-368cd1fe","path":"/note/cs/programming/cpp/related/cpp-oop-std.html","title":"CPP面向对象编程入门","lang":"zh-CN","frontmatter":{"article":false,"date":"2021-05-01T00:00:00.000Z","description":"CPP面向对象编程入门 Structure Allow programmers to create a container for a collection of data items (variables) which can be different types.「允许程序员为可能是不同类型的数据项（变量）的集合创建一个容器。」 Such container is regarded as a new data type.「这样的容器被视为一种新的数据类型。」 The definition of a structure is a blueprint「蓝图」 of what variables the structure should contain.「结构的定义是该结构应包含哪些变量的蓝图。」","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/cs/programming/cpp/related/cpp-oop-std.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"CPP面向对象编程入门"}],["meta",{"property":"og:description","content":"CPP面向对象编程入门 Structure Allow programmers to create a container for a collection of data items (variables) which can be different types.「允许程序员为可能是不同类型的数据项（变量）的集合创建一个容器。」 Such container is regarded as a new data type.「这样的容器被视为一种新的数据类型。」 The definition of a structure is a blueprint「蓝图」 of what variables the structure should contain.「结构的定义是该结构应包含哪些变量的蓝图。」"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T05:33:29.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2021-05-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T05:33:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"CPP面向对象编程入门\\",\\"description\\":\\"CPP面向对象编程入门 Structure Allow programmers to create a container for a collection of data items (variables) which can be different types.「允许程序员为可能是不同类型的数据项（变量）的集合创建一个容器。」 Such container is regarded as a new data type.「这样的容器被视为一种新的数据类型。」 The definition of a structure is a blueprint「蓝图」 of what variables the structure should contain.「结构的定义是该结构应包含哪些变量的蓝图。」\\"}"]]},"headers":[{"level":2,"title":"Structure","slug":"structure","link":"#structure","children":[{"level":3,"title":"Defined","slug":"defined","link":"#defined","children":[]},{"level":3,"title":"Example","slug":"example","link":"#example","children":[]},{"level":3,"title":"Comparison (relational operators)","slug":"comparison-relational-operators","link":"#comparison-relational-operators","children":[]},{"level":3,"title":"Array Structure","slug":"array-structure","link":"#array-structure","children":[]},{"level":3,"title":"Call","slug":"call","link":"#call","children":[]}]},{"level":2,"title":"Object-oriented Programming","slug":"object-oriented-programming","link":"#object-oriented-programming","children":[{"level":3,"title":"Class","slug":"class","link":"#class","children":[]},{"level":3,"title":"Object","slug":"object","link":"#object","children":[]},{"level":3,"title":"Understand","slug":"understand","link":"#understand","children":[]},{"level":3,"title":"Invocation","slug":"invocation","link":"#invocation","children":[]},{"level":3,"title":"Access Specifiers","slug":"access-specifiers","link":"#access-specifiers","children":[]},{"level":3,"title":"Controlling Access to Members","slug":"controlling-access-to-members","link":"#controlling-access-to-members","children":[]},{"level":3,"title":"Scope","slug":"scope","link":"#scope","children":[]},{"level":3,"title":"Advantages","slug":"advantages","link":"#advantages","children":[]},{"level":3,"title":"注意","slug":"注意","link":"#注意","children":[]}]},{"level":2,"title":"Struct 和 Class 的对比","slug":"struct-和-class-的对比","link":"#struct-和-class-的对比","children":[{"level":3,"title":"含义上","slug":"含义上","link":"#含义上","children":[]},{"level":3,"title":"功能上","slug":"功能上","link":"#功能上","children":[]}]},{"level":2,"title":"Header file","slug":"header-file","link":"#header-file","children":[]},{"level":2,"title":"声明、定义和初始化","slug":"声明、定义和初始化","link":"#声明、定义和初始化","children":[]},{"level":2,"title":"Public、Protected和Private","slug":"public、protected和private","link":"#public、protected和private","children":[]},{"level":2,"title":"C++类对象共享数据的实现","slug":"c-类对象共享数据的实现","link":"#c-类对象共享数据的实现","children":[{"level":3,"title":"使用局部变量和全局变量共享数据","slug":"使用局部变量和全局变量共享数据","link":"#使用局部变量和全局变量共享数据","children":[]},{"level":3,"title":"通过类的数据成员共享数据","slug":"通过类的数据成员共享数据","link":"#通过类的数据成员共享数据","children":[]},{"level":3,"title":"通过类的静态成员实现数据共享","slug":"通过类的静态成员实现数据共享","link":"#通过类的静态成员实现数据共享","children":[]}]},{"level":2,"title":"Source-code files","slug":"source-code-files","link":"#source-code-files","children":[]},{"level":2,"title":"附加材料","slug":"附加材料","link":"#附加材料","children":[{"level":3,"title":"time.h","slug":"time-h","link":"#time-h","children":[]}]},{"level":2,"title":"引用资料","slug":"引用资料","link":"#引用资料","children":[]}],"git":{"createdTime":1726378409000,"updatedTime":1726378409000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":42.72,"words":4272},"filePathRelative":"note/cs/programming/cpp/related/cpp-oop-std.md","localizedDate":"2021年5月1日","excerpt":"<h1> CPP面向对象编程入门</h1>\\n<h2> Structure</h2>\\n<p>Allow programmers to create a container for a collection of data items (variables) which can be different types.「允许程序员为可能是不同类型的数据项（变量）的集合创建一个容器。」</p>\\n<p>Such container is regarded as a new data type.「这样的容器被视为一种新的数据类型。」</p>\\n<p>The definition of a structure is a blueprint「蓝图」 of what variables the structure should contain.「结构的定义是该结构应包含哪些变量的蓝图。」</p>","autoDesc":true}');export{e as data};
