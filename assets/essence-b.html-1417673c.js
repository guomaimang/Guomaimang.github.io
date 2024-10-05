import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as e,c as n,e as s}from"./app-f3bc6681.js";const i={},l=s(`<h1 id="java-基础-a" tabindex="-1"><a class="header-anchor" href="#java-基础-a" aria-hidden="true">#</a> Java 基础 A</h1><h3 id="多维数组" tabindex="-1"><a class="header-anchor" href="#多维数组" aria-hidden="true">#</a> 多维数组</h3><p>下标顺序应为 x y z ......</p><h2 id="对象和类" tabindex="-1"><a class="header-anchor" href="#对象和类" aria-hidden="true">#</a> 对象和类</h2><p>如果一个对象不再需要，可以显式的给该对象的引用赋值为null。尽管会自动回收。</p><h3 id="uml" tabindex="-1"><a class="header-anchor" href="#uml" aria-hidden="true">#</a> UML</h3><ul><li><code>+</code> 表示public 修饰符</li></ul><h3 id="构造方法" tabindex="-1"><a class="header-anchor" href="#构造方法" aria-hidden="true">#</a> 构造方法</h3><ul><li>一个类可以没有定义构造方法，但是类会隐式定义一个空方法体，即默认构造方法</li><li>构造方法链</li></ul><h3 id="修饰符" tabindex="-1"><a class="header-anchor" href="#修饰符" aria-hidden="true">#</a> 修饰符</h3><p>class 只能无修饰符 或者 private</p><ul><li>private 私有</li><li>无修饰符 包内可访问</li><li>protected 同类+包内可访问</li><li>public 方法 全局可访问</li></ul><h3 id="类的抽象" tabindex="-1"><a class="header-anchor" href="#类的抽象" aria-hidden="true">#</a> 类的抽象</h3><p>类的抽象是将类的实现和使用分离，实现的细节被封装并且对用户隐藏，这被称为类的封装</p><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><ul><li>private 数据域虽然被继承，但无法被子类访问。但可以通过setter 或者 getter 使用</li><li>使用 super 关键词可访问父类数据或方法</li><li>构造方法链 <ul><li>super() 或 super(args) 必定是子类构造方法的第一句</li><li>若无，则隐式super()</li></ul></li><li>使用 final 防止类被继承 或 防止方法被重写</li></ul><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3><ul><li>多态意味着父类型的<strong>变量</strong> 可以 引用子类型的对象。</li><li>面向对象的三大支柱是 封装，继承和多态</li></ul><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2><h3 id="大数处理" tabindex="-1"><a class="header-anchor" href="#大数处理" aria-hidden="true">#</a> 大数处理</h3><ul><li>class: BigInteger(String)</li><li>class: BigDecimal(String or double)</li><li>add subtract multiply divide remainder</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">BigInteger</span> a <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigInteger</span><span class="token punctuation">(</span><span class="token string">&quot;372899234784237435643543685438562348562345&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigInteger</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BigInteger</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">BigInteger</span> c <span class="token operator">=</span> a<span class="token punctuation">.</span><span class="token function">multiply</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),t=[l];function r(c,d){return e(),n("div",null,t)}const u=a(i,[["render",r],["__file","essence-b.html.vue"]]);export{u as default};