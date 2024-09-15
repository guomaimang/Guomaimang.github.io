import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as i,c,a as t,b as s,d as o,e as r}from"./app-20cb2ce2.js";const l={},d=r('<h1 id="const-和-static-的区别" tabindex="-1"><a class="header-anchor" href="#const-和-static-的区别" aria-hidden="true">#</a> const 和 static 的区别</h1><ul><li>const就是只读的意思,只在声明中使用;</li><li>static一般有2个作用,规定作用域和存储方式. <ul><li>对于局部变量, static规定其为静态存储方式,每次调用的初始值为上一次调用的值,调用结束后存储空间不释放;</li><li>对于全局变量, 如果以文件划分作用域的话,此变量只在当前文件可见</li><li>对于static函数也是在当前模块内函数可见.</li></ul></li><li>static const 应该就是上面两者的合集.</li></ul><h2 id="分类对比" tabindex="-1"><a class="header-anchor" href="#分类对比" aria-hidden="true">#</a> 分类对比</h2><h3 id="对于全局变量" tabindex="-1"><a class="header-anchor" href="#对于全局变量" aria-hidden="true">#</a> 对于全局变量</h3><ul><li>const,只读的全局变量,其值不可修改.</li><li>static,规定此全局变量只在当前模块(文件)中可见.</li><li>static const,既是只读的,又是只在当前模块中可见的.</li></ul><h3 id="对于文件" tabindex="-1"><a class="header-anchor" href="#对于文件" aria-hidden="true">#</a> 对于文件</h3><ul><li>文件指针可当作一个变量来看,与上面所说类似.</li></ul><h3 id="对于函数" tabindex="-1"><a class="header-anchor" href="#对于函数" aria-hidden="true">#</a> 对于函数</h3><ul><li>const,返回只读变量的函数.</li><li>static,规定此函数只在当前模块可见.</li></ul><h2 id="const" tabindex="-1"><a class="header-anchor" href="#const" aria-hidden="true">#</a> const</h2><p>如果把const放在变量类型名前，说明这个变量的值是保持不变的，该变量必须在定义时初始化，初始化后对它进行的任何赋值都是非法的。</p><p>C++提供const关键字，不是为了保证一个变量不被修改，而是为了方便编译程序和维护人员弄清楚一个实体在程序中是否被修改了。如果函数接口中声明参数为const，我们就认为这个参数不会改变，如果没有声明为const，就认为这个参数一定被改变了，而不管函数到底有没有改变这个参数。</p><h3 id="const-int-和-int-const" tabindex="-1"><a class="header-anchor" href="#const-int-和-int-const" aria-hidden="true">#</a> const int* 和 int* const</h3><ul><li>const int* 是指 指针指向的内容是常量</li><li>int* const 是指 指针本身是常量</li></ul><p>必须在类型名前使用const标识这个指针或者引用指向的“变量”为常量，没有的话就是语法错误。如: <code>const int x = 5; const int* px = &amp;x; const int&amp; rx = x;</code></p><p>这样一来，直接修改x是不可能的，通过<code>*px</code>或者<code>rx</code>修改x也是不可能的。当然，这个指针还能指向其他的地方，因为指针本身并没有被标识为const的。比如，<code>px = &amp;y;</code></p><p>假如变量是一个 非常量变量 ，而指针或者引用的类型名前使用了const，那么，可以直接修改变量，不能通过指针或者引用修改变量。</p><p>如果想让一个指针本身成为const的，就要在<em>后加const，即int</em> const p = &amp;x;这个时候，p就不能再指向其他变量。假如x是非常量的，那它可以通过指针进行修改，因为x并没有标识为const。</p><h2 id="static" tabindex="-1"><a class="header-anchor" href="#static" aria-hidden="true">#</a> static</h2><p>如果将static用于一个全局变量，是说明该全局变量只对定义在同一个文件中的函数可见。即使在另一个文件中使用了extern，另一个文件中的函数也不能访问这个全局变量。</p><p>如果static用于函数的局部变量。它表明该变量的值不会因为函数终止而消失，它会被保存下来。再次调用该函数时，这个保存下来的值会用来初始化该变量。</p><p>如果static用于一个函数前，说明该函数只能在同一个文件中调用。</p><p>如果static用于类的成员变量。它表明对类的所有对象，这个数据成员都只有一个实例。<strong>这个实例被所有对象共有</strong>。static的成员变量可以是private、public、protected的。定义和访问的语法也和其他数据成员一样。</p><p>引用</p>',24),h={href:"https://blog.csdn.net/wangfei8348/article/details/51261327",target:"_blank",rel:"noopener noreferrer"};function p(u,x){const a=n("ExternalLinkIcon");return i(),c("div",null,[d,t("ul",null,[t("li",null,[t("a",h,[s("https://blog.csdn.net/wangfei8348/article/details/51261327"),o(a)])])])])}const m=e(l,[["render",p],["__file","const-and-static-const.html.vue"]]);export{m as default};
