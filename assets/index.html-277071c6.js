import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as e,e as n}from"./app-20cb2ce2.js";const t={},s=n(`<h1 id="compiler-design" tabindex="-1"><a class="header-anchor" href="#compiler-design" aria-hidden="true">#</a> Compiler Design</h1><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h2><p>我们期望学习什么？帮助理解、开发和修改编程语言的编译器的概念。</p><ul><li>编程语言的语法「Syntax」和语义「semantics」</li><li>语言翻译「translation」方法</li><li>编译器的任务</li><li>编译过程</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/11/08/f9bff78c03d4d.png" alt="1667887187766.png" tabindex="0" loading="lazy"><figcaption>1667887187766.png</figcaption></figure><h3 id="lexical-analysis" tabindex="-1"><a class="header-anchor" href="#lexical-analysis" aria-hidden="true">#</a> Lexical Analysis</h3><ul><li>词汇分析「lexical analysis」的任务；</li><li>通过正则语法「regular grammars 」和正则表达式「regular expressions」指定「specifying」标记「tokens」；</li><li>通过有限自动机「Finite Automata」（FA）识别标记「recognizing tokens」</li><li>从正则表达式构建「construction」FA</li><li>将 NFA 转换为 DFA</li><li>模拟 DFA</li></ul><h3 id="syntax-analysis" tabindex="-1"><a class="header-anchor" href="#syntax-analysis" aria-hidden="true">#</a> Syntax Analysis</h3><ul><li>语法分析「syntax analysis」任务</li><li>通过上下文无关语法「context-free grammars」指定「specifying」语言结构「language constructs」；</li><li>BNF「Backus Naur Form notation」</li><li>推导「derivation」</li><li>解析「parse」和语法树「syntax trees」；</li><li>通过*下推自动机「Pushdown Automata」*识别语言结构；</li><li>自顶向下「top-down」和自底向上「bottom-up」的解析方法「parsing methods」。</li></ul><h3 id="code-generation" tabindex="-1"><a class="header-anchor" href="#code-generation" aria-hidden="true">#</a> Code Generation</h3><ul><li>中间「Intermediate」编译阶段「phases」</li><li>符号表「symbol table」</li><li>中间「intermediate」代码生成</li><li>代码优化「optimisation」</li><li>代码生成「generation」</li></ul><h2 id="programming-language" tabindex="-1"><a class="header-anchor" href="#programming-language" aria-hidden="true">#</a> Programming Language</h2><figure><img src="https://pic.hanjiaming.com.cn/2022/11/08/74609abb0b5c2.png" alt="CleanShot 2022-11-08 at 14.02.55@2x.png" tabindex="0" loading="lazy"><figcaption>CleanShot 2022-11-08 at 14.02.55@2x.png</figcaption></figure><h2 id="compiler-or-interpreter" tabindex="-1"><a class="header-anchor" href="#compiler-or-interpreter" aria-hidden="true">#</a> Compiler or Interpreter</h2><img src="https://pic.hanjiaming.com.cn/2022/11/08/7cac19f4f3a5a.png" alt="1667892745808.png" style="zoom:50%;"><div class="hint-container tip"><p class="hint-container-title">Finite Automata</p><p>In lexical analysis, finite automata「有限自动机」 is used to produce tokens in the form of identifiers, keywords and constants from the input program. In the process of pattern recognition, it used to search keywords by using string-matching algorithms.</p><p>The lexical analysis for a modern computer language such as Java needs the power of Finite state automata in a necessary and sufficient sense「必要和充分的意义上」.</p></div><h2 id="compiler" tabindex="-1"><a class="header-anchor" href="#compiler" aria-hidden="true">#</a> Compiler</h2><h3 id="what-is-a-compiler" tabindex="-1"><a class="header-anchor" href="#what-is-a-compiler" aria-hidden="true">#</a> What is a compiler</h3><p>编译器是一种软件，它采用一种语言（称为源语言）编写的程序并将其翻译成另一种语言（称为目标语言）的另一个（通常等效）程序。</p><p>它还报告源程序中的错误（bug）。</p><img src="https://pic.hanjiaming.com.cn/2022/11/08/c61c8c4d07b28.png" alt="1667893121753.png" style="zoom:33%;"><h3 id="phases-of-a-compilation" tabindex="-1"><a class="header-anchor" href="#phases-of-a-compilation" aria-hidden="true">#</a> Phases of a Compilation</h3><div class="hint-container tip"><p class="hint-container-title">提示</p><ul><li>Lexical「词法」</li><li>Syntax「句法」</li><li>Semantic「语义」</li><li>Peephole Optimization「窥孔优化」</li></ul></div><img src="https://pic.hanjiaming.com.cn/2022/11/08/7618876b9de67.png" alt="1667893803291.png" style="zoom:50%;"><h3 id="phases-and-passes" tabindex="-1"><a class="header-anchor" href="#phases-and-passes" aria-hidden="true">#</a> Phases and Passes</h3><ul><li>Passes：the times going through a program representation. <ul><li>1-pass, 2-pass, multiple-pass compilation</li><li>Language become more complex – more passes</li></ul></li><li>Phases：概念阶段，或编译器的模块 <ul><li>Not completely separate</li><li>不完全分开：<strong>Semantic phase may do things that syntax should do</strong></li></ul></li></ul><h3 id="symbol-table-management" tabindex="-1"><a class="header-anchor" href="#symbol-table-management" aria-hidden="true">#</a> Symbol Table Management</h3><p>收集和维护有关 identify「标识符」 的信息。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Attributes:

Storage: where to store (data, heap, stack, ...) •Type: char, int, pointer, ...
Scope: effective range
Number: value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Information is added and used by all phases.</li><li>Debuggers use symbol table too.</li></ul><h3 id="compiler-tools" tabindex="-1"><a class="header-anchor" href="#compiler-tools" aria-hidden="true">#</a> Compiler Tools</h3><h4 id="phases" tabindex="-1"><a class="header-anchor" href="#phases" aria-hidden="true">#</a> Phases</h4><ul><li>Lexical Analysis</li><li>Syntax Analysis</li><li>Semantic Analysis</li><li>Intermediate Code</li><li>Code Optimization</li><li>Code Generation</li></ul><h4 id="tools" tabindex="-1"><a class="header-anchor" href="#tools" aria-hidden="true">#</a> Tools</h4><p>lex, flex yacc, bison</p><h2 id="lexical-analysis-1" tabindex="-1"><a class="header-anchor" href="#lexical-analysis-1" aria-hidden="true">#</a> Lexical Analysis</h2><figure><img src="https://pic.hanjiaming.com.cn/2022/11/08/fc4e45873335e.png" alt="1667897612427.png" tabindex="0" loading="lazy"><figcaption>1667897612427.png</figcaption></figure><h2 id="syntax-analysis-1" tabindex="-1"><a class="header-anchor" href="#syntax-analysis-1" aria-hidden="true">#</a> Syntax Analysis</h2><p>一旦标记被识别，语法分析就会将标记的序列归入语言结构。</p><ul><li>例如，标识符、数字和运算符可以被分组为表达式。</li><li>例如，关键词、标识符、表达式和运算符可以组合成语句。</li></ul><p><strong>编译器中进行语法分析「syntax analysis」的子模块被称为 解析器「parser」/语法分析器「syntax analyzer」。</strong></p><p>句法分析的结果被记录在称为句法树「syntax tree」的层次结构中。每个节点代表一个操作，其子节点代表该操作的参数。Evaluation begins from bottom and moves up.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>E.g., parse tree for 
position := initial + rate * 60
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><img src="https://pic.hanjiaming.com.cn/2022/11/08/d166ca662bc52.png" alt="1667898001464.png" style="zoom:50%;"><h2 id="semantic-analysis" tabindex="-1"><a class="header-anchor" href="#semantic-analysis" aria-hidden="true">#</a> Semantic Analysis</h2><p>将语义意义放入语法树：</p><ul><li>句法分析「syntax analysis」可识别语法事件。</li><li>语义分析「Semantic Analysis」处理这类事件，例如，类型检查，或触发相应的中间代码生成。</li></ul><h2 id="intermediate-code-generation" tabindex="-1"><a class="header-anchor" href="#intermediate-code-generation" aria-hidden="true">#</a> Intermediate Code Generation</h2><ul><li>生成IR（Intermediate Representation）代码</li><li>更容易从IR代码生成机器代码。</li></ul><img src="https://pic.hanjiaming.com.cn/2022/11/08/5fa9f13c73752.png" alt="1667898202170.png" style="zoom:33%;"><h2 id="code-optimization" tabindex="-1"><a class="header-anchor" href="#code-optimization" aria-hidden="true">#</a> Code Optimization</h2><p>修改程序的表现形式，使程序可以运行得更快，使用更少的内存和功率等。</p><img src="https://pic.hanjiaming.com.cn/2022/11/08/c65aa7eca01cb.png" alt="1667898307576.png" style="zoom:33%;"><h2 id="code-generation-1" tabindex="-1"><a class="header-anchor" href="#code-generation-1" aria-hidden="true">#</a> Code Generation</h2><p>Generate the target program.</p><img src="https://pic.hanjiaming.com.cn/2022/11/08/87ab77f587d66.png" alt="1667898338616.png" style="zoom:33%;">`,56),l=[s];function r(o,d){return i(),e("div",null,l)}const p=a(t,[["render",r],["__file","index.html.vue"]]);export{p as default};
