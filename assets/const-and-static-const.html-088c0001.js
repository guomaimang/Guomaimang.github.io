const t=JSON.parse('{"key":"v-5944b934","path":"/note/cs/programming/cpp/related/const-and-static-const.html","title":"const 和 static 的区别","lang":"zh-CN","frontmatter":{"article":false,"date":"2021-05-01T00:00:00.000Z","description":"const 和 static 的区别 const就是只读的意思,只在声明中使用; static一般有2个作用,规定作用域和存储方式. 对于局部变量, static规定其为静态存储方式,每次调用的初始值为上一次调用的值,调用结束后存储空间不释放; 对于全局变量, 如果以文件划分作用域的话,此变量只在当前文件可见 对于static函数也是在当前模块内函数可见. static const 应该就是上面两者的合集. 分类对比","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/cs/programming/cpp/related/const-and-static-const.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"const 和 static 的区别"}],["meta",{"property":"og:description","content":"const 和 static 的区别 const就是只读的意思,只在声明中使用; static一般有2个作用,规定作用域和存储方式. 对于局部变量, static规定其为静态存储方式,每次调用的初始值为上一次调用的值,调用结束后存储空间不释放; 对于全局变量, 如果以文件划分作用域的话,此变量只在当前文件可见 对于static函数也是在当前模块内函数可见. static const 应该就是上面两者的合集. 分类对比"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T05:33:29.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2021-05-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T05:33:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"const 和 static 的区别\\",\\"description\\":\\"const 和 static 的区别 const就是只读的意思,只在声明中使用; static一般有2个作用,规定作用域和存储方式. 对于局部变量, static规定其为静态存储方式,每次调用的初始值为上一次调用的值,调用结束后存储空间不释放; 对于全局变量, 如果以文件划分作用域的话,此变量只在当前文件可见 对于static函数也是在当前模块内函数可见. static const 应该就是上面两者的合集. 分类对比\\"}"]]},"headers":[{"level":2,"title":"分类对比","slug":"分类对比","link":"#分类对比","children":[{"level":3,"title":"对于全局变量","slug":"对于全局变量","link":"#对于全局变量","children":[]},{"level":3,"title":"对于文件","slug":"对于文件","link":"#对于文件","children":[]},{"level":3,"title":"对于函数","slug":"对于函数","link":"#对于函数","children":[]}]},{"level":2,"title":"const","slug":"const","link":"#const","children":[{"level":3,"title":"const int* 和 int* const","slug":"const-int-和-int-const","link":"#const-int-和-int-const","children":[]}]},{"level":2,"title":"static","slug":"static","link":"#static","children":[]}],"git":{"createdTime":1726378409000,"updatedTime":1726378409000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":9.5,"words":950},"filePathRelative":"note/cs/programming/cpp/related/const-and-static-const.md","localizedDate":"2021年5月1日","excerpt":"<h1> const 和 static 的区别</h1>\\n<ul>\\n<li>const就是只读的意思,只在声明中使用;</li>\\n<li>static一般有2个作用,规定作用域和存储方式.\\n<ul>\\n<li>对于局部变量, static规定其为静态存储方式,每次调用的初始值为上一次调用的值,调用结束后存储空间不释放;</li>\\n<li>对于全局变量, 如果以文件划分作用域的话,此变量只在当前文件可见</li>\\n<li>对于static函数也是在当前模块内函数可见.</li>\\n</ul>\\n</li>\\n<li>static const 应该就是上面两者的合集.</li>\\n</ul>\\n<h2> 分类对比</h2>","autoDesc":true}');export{t as data};
