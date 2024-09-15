import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as i,e as l}from"./app-20cb2ce2.js";const n={},s=l(`<h1 id="java-基础-a" tabindex="-1"><a class="header-anchor" href="#java-基础-a" aria-hidden="true">#</a> Java 基础 A</h1><h2 id="java-概述" tabindex="-1"><a class="header-anchor" href="#java-概述" aria-hidden="true">#</a> Java 概述</h2><ul><li>Java 是从类中的main方法开始执行的</li><li>导入语句只是告诉编译器什么地方能够找到这些类，因此导入用 * 还是指定名称没有任何性能差异</li><li>字面值（literal）是直接出现在程序中的常量值</li><li>命令行参数传参，直接就是参数数组，不含任何名称路径等信息</li></ul><h2 id="基本程序设计" tabindex="-1"><a class="header-anchor" href="#基本程序设计" aria-hidden="true">#</a> 基本程序设计</h2><h3 id="变量默认值" tabindex="-1"><a class="header-anchor" href="#变量默认值" aria-hidden="true">#</a> 变量默认值</h3><ul><li>对象：null</li><li>数值：0</li><li>boolean：false</li><li>char：<code>\\u0000</code></li></ul><h3 id="时间" tabindex="-1"><a class="header-anchor" href="#时间" aria-hidden="true">#</a> 时间</h3><ul><li>可以通过调用<code>System.currentTimeMillis()</code> 返回当前时间戳(源自1970-1-1)，为一个long值</li></ul><h3 id="math" tabindex="-1"><a class="header-anchor" href="#math" aria-hidden="true">#</a> Math</h3><ul><li>Java的Math类提供了很多用于计算的数学函数 <ul><li><code>pow(a, b)</code> 求次方</li><li><code>sin(), cos(), tan(), toDegree()</code> ......</li></ul></li><li><code>Math.random()</code> 获得 0.0 到 1.0 之间的随机 double值</li></ul><h2 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h2><ul><li>Java 原生 char 占2字节，使用了狭义的 16位 Unicode</li><li>sout printf() 支持好、格式化打印 <ul><li><code>%e</code> 表示输出科学计数法</li></ul></li><li>Java String 提供了很多方法，比如获取子串，替换字词啥的 <ul><li>strInfo.charAt(index)</li><li>strInfo.trim() 去除字符串两侧空白</li><li>正则表达式</li><li>String.valueOf(int) 将数值转成字符串</li></ul></li></ul><h3 id="字符值转换数值" tabindex="-1"><a class="header-anchor" href="#字符值转换数值" aria-hidden="true">#</a> 字符值转换数值</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> intValue <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>intString<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> doubleValue <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">parseDouble</span><span class="token punctuation">(</span>doubleString<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h2><ul><li>方法传参是 pass by value</li></ul><h3 id="设计思想" tabindex="-1"><a class="header-anchor" href="#设计思想" aria-hidden="true">#</a> 设计思想</h3><ul><li>设计思想应自顶而下 <ul><li>前期无需过多关乎细节</li><li>应当先应用方法抽象吧细节和设计分离</li><li>之后实现细节</li></ul></li><li>精益求精 <ul><li>将一个大问题分解成较小的容易处理的小问题</li><li>以方便后期编写，重用，调试，修改以及维护</li></ul></li></ul><h2 id="数组" tabindex="-1"><a class="header-anchor" href="#数组" aria-hidden="true">#</a> 数组</h2><ul><li><code>for (double e: myList)</code></li><li>应当避免下标访问越界和遍历时修改数组的元素个数</li><li>java 可将相同类型的变长参数作为数组，只能作为最后一个参数</li></ul><h3 id="arrays-静态类" tabindex="-1"><a class="header-anchor" href="#arrays-静态类" aria-hidden="true">#</a> Arrays 静态类</h3><ul><li>Arrays.sort(numList)</li><li>Arrays.binarySearch(numList, 11)</li><li>Arrays.equal(numList, newList)</li><li>Arrays.fill(numList, 5)</li></ul>`,22),r=[s];function t(d,c){return e(),i("div",null,r)}const h=a(n,[["render",t],["__file","essence-a.html.vue"]]);export{h as default};
