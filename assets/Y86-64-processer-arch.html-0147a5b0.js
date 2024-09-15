import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o,c as h,a as i,b as e,d as a,e as n}from"./app-20cb2ce2.js";const l={},c=n('<h1 id="y86-64处理器架构简介" tabindex="-1"><a class="header-anchor" href="#y86-64处理器架构简介" aria-hidden="true">#</a> Y86-64处理器架构简介</h1><img src="https://pic.hanjiaming.com.cn/2021/04/06/d920281841490.png" alt="image.png" title="image.png"><h2 id="isa-指令集架构" tabindex="-1"><a class="header-anchor" href="#isa-指令集架构" aria-hidden="true">#</a> ISA(指令集架构)</h2>',3),p=i("strong",null,"指令集架构",-1),d=i("strong",null,"指令集",-1),g=i("strong",null,"指令集体系",-1),m={href:"https://zh.wikipedia.org/wiki/%E8%AE%A1%E7%AE%97%E6%9C%BA%E4%BD%93%E7%B3%BB%E7%BB%93%E6%9E%84",target:"_blank",rel:"noopener noreferrer"},u={href:"https://zh.wikipedia.org/wiki/%E7%A8%8B%E5%BA%8F%E8%A8%AD%E8%A8%88",target:"_blank",rel:"noopener noreferrer"},f={href:"https://zh.wikipedia.org/wiki/%E8%B3%87%E6%96%99%E5%9E%8B%E5%88%A5",target:"_blank",rel:"noopener noreferrer"},b={href:"https://zh.wikipedia.org/wiki/%E5%AF%84%E5%AD%98%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},_={href:"https://zh.wikipedia.org/wiki/%E5%AF%BB%E5%9D%80%E6%A8%A1%E5%BC%8F",target:"_blank",rel:"noopener noreferrer"},x={href:"https://zh.wikipedia.org/w/index.php?title=%E5%AD%98%E5%82%A8%E4%BD%93%E7%B3%BB&action=edit&redlink=1",target:"_blank",rel:"noopener noreferrer"},w={href:"https://zh.wikipedia.org/wiki/%E4%B8%AD%E6%96%B7",target:"_blank",rel:"noopener noreferrer"},k={href:"https://zh.wikipedia.org/wiki/%E5%BC%82%E5%B8%B8%E5%A4%84%E7%90%86",target:"_blank",rel:"noopener noreferrer"},E={href:"https://zh.wikipedia.org/wiki/I/O",target:"_blank",rel:"noopener noreferrer"},A={href:"https://zh.wikipedia.org/w/index.php?title=Opcode&action=edit&redlink=1",target:"_blank",rel:"noopener noreferrer"},B={href:"https://zh.wikipedia.org/wiki/%E6%A9%9F%E5%99%A8%E8%AA%9E%E8%A8%80",target:"_blank",rel:"noopener noreferrer"},y={href:"https://zh.wikipedia.org/wiki/Intel",target:"_blank",rel:"noopener noreferrer"},j={href:"https://zh.wikipedia.org/wiki/IA-32",target:"_blank",rel:"noopener noreferrer"},z={href:"https://zh.wikipedia.org/wiki/X86-64",target:"_blank",rel:"noopener noreferrer"},I={href:"https://zh.wikipedia.org/wiki/IBM",target:"_blank",rel:"noopener noreferrer"},v={href:"https://zh.wikipedia.org/wiki/ARM",target:"_blank",rel:"noopener noreferrer"},C={href:"https://zh.wikipedia.org/wiki/%E6%8C%87%E4%BB%A4%E9%9B%86%E6%9E%B6%E6%A7%8B#cite_note-1",target:"_blank",rel:"noopener noreferrer"},S={href:"https://zh.wikipedia.org/wiki/%E5%BE%AE%E6%9E%B6%E6%A7%8B",target:"_blank",rel:"noopener noreferrer"},D={href:"https://zh.wikipedia.org/wiki/%E8%8B%B1%E7%89%B9%E7%88%BE",target:"_blank",rel:"noopener noreferrer"},P={href:"https://zh.wikipedia.org/wiki/%E5%A5%94%E9%A8%B0",target:"_blank",rel:"noopener noreferrer"},M={href:"https://zh.wikipedia.org/wiki/%E8%B6%85%E5%BE%AE%E5%8D%8A%E5%AF%BC%E4%BD%93",target:"_blank",rel:"noopener noreferrer"},U={href:"https://zh.wikipedia.org/wiki/AMD_Athlon",target:"_blank",rel:"noopener noreferrer"},F={href:"https://zh.wikipedia.org/wiki/X86",target:"_blank",rel:"noopener noreferrer"},q=i("p",null,"维基百科",-1),L=n('<h3 id="designing-an-isa" tabindex="-1"><a class="header-anchor" href="#designing-an-isa" aria-hidden="true">#</a> Designing an ISA</h3><ul><li>Designing processor states visible to programmers「设计对程序员可见的处理器状态」</li><li>Designing a set of instructions「设计一套指令」</li><li>Encoding the instructions「对指令编码」</li></ul><p>All the above designs will be exemplified by the Y86-64 ISA --- a much simpler X86 ISA enough to demonstrate the key concepts「以上所有设计都将以Y86-64 ISA为例-一种更简单的X86 ISA，足以演示关键概念」</p><h2 id="circuits" tabindex="-1"><a class="header-anchor" href="#circuits" aria-hidden="true">#</a> Circuits</h2><img src="https://pic.hanjiaming.com.cn/2021/04/06/0f104d60eef46.png" alt="image.png" title="image.png"><h3 id="digital-circuits" tabindex="-1"><a class="header-anchor" href="#digital-circuits" aria-hidden="true">#</a> Digital circuits</h3><h4 id="logic-gates" tabindex="-1"><a class="header-anchor" href="#logic-gates" aria-hidden="true">#</a> Logic gates</h4><p>Logic gates：Basic computing electronic circuit elements「Basic computing electronic circuit elements」</p><img src="https://pic.hanjiaming.com.cn/2021/04/06/8a4d6b082289a.png" alt="image.png" title="image.png"><ul><li>Logic gates are always active, is some input to a gate changes, then within some small amount of time, the output will change accordingly「逻辑门始终处于活动状态，某个门的某些输入会发生变化，然后在短时间内，输出将相应地发生变化」</li><li>Can be represented by hardware control language (HCL)「可以用硬件控制语言（HCL）表示」 <ul><li>比如：out = a &amp;&amp; b; out = a || b …</li></ul></li></ul><h3 id="combinational-circuits" tabindex="-1"><a class="header-anchor" href="#combinational-circuits" aria-hidden="true">#</a> Combinational circuits</h3><img src="https://pic.hanjiaming.com.cn/2021/04/06/3ab61659e1f5e.png" alt="image.png" title="image.png"><h4 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example 1</h4><p>if a and b are equal, output 1; otherwise, output 0With <strong>and</strong>, <strong>or</strong> and <strong>not</strong> gates</p><img src="https://pic.hanjiaming.com.cn/2021/04/06/1bff53702ecca.png" alt="image.png" title="image.png"><h4 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> Example 2</h4><p>selecting a or b according to s</p><img src="https://pic.hanjiaming.com.cn/2021/04/06/115ad8e71b87a.png" alt="image.png" title="image.png"><h4 id="example-3" tabindex="-1"><a class="header-anchor" href="#example-3" aria-hidden="true">#</a> Example 3</h4><p>From a single bit to multiple bits (word)</p><img src="https://pic.hanjiaming.com.cn/2021/04/06/054f5031eabdd.png" alt="image.png" title="image.png"><img src="https://pic.hanjiaming.com.cn/2021/04/06/4fc3c0a80d5b1.png" alt="image.png" title="image.png"><h4 id="arithmetic-logic-unit-alu" tabindex="-1"><a class="header-anchor" href="#arithmetic-logic-unit-alu" aria-hidden="true">#</a> Arithmetic Logic Unit (ALU)</h4><img src="https://pic.hanjiaming.com.cn/2021/04/06/28c1935a003ca.png" alt="image.png" title="image.png"><ul><li>Using and, or, not gates to implement arithmetic logic「Using and, or, not gates to implement arithmetic logic」</li><li>Compute the result, and set the conditional codes「Compute the result, and set the conditional codes」</li><li>Inputs and outputs are multi-bit word「Inputs and outputs are multi-bit word」</li></ul><h3 id="storage-elements" tabindex="-1"><a class="header-anchor" href="#storage-elements" aria-hidden="true">#</a> Storage elements</h3><p>Storage elements are special electronic circuits that can retain data values「存储元件是可以保留数据值的特殊电子电路」</p><ul><li>Storage elements can be read or written</li><li>Storage elements can be addressed</li><li>Storage elements rely on clocks to retain data values「存储元件依靠时钟来保留数据值」</li></ul><img src="https://pic.hanjiaming.com.cn/2021/04/06/0957074806422.png" alt="image.png" title="image.png"><h2 id="y86-64-processor" tabindex="-1"><a class="header-anchor" href="#y86-64-processor" aria-hidden="true">#</a> Y86-64 processor</h2><h3 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h3><img src="https://pic.hanjiaming.com.cn/2021/04/06/2bd639cb02fff.png" alt="image.png" title="image.png"><ul><li>15 64-bit general purpose registers</li><li>Conditional codes <ul><li>ZF: zero;</li><li>SF: negative;</li><li>OF: overflow</li></ul></li><li>Program Counter：Indicates address of next instruction</li><li>Memory <ul><li>Byte-addressable storage array「字节-可寻址存储阵列」</li><li>Words stored in little-endian byte order「以little-endian字节顺序存储的单词」</li></ul></li></ul><h4 id="little-endian" tabindex="-1"><a class="header-anchor" href="#little-endian" aria-hidden="true">#</a> little-endian</h4><p>其实<em>big endian</em>是指低地址存放最高有效字节（<em>MSB</em>），而<em>little endian</em>则是低地址存放最低有效字节（<em>LSB</em>）。</p><p>用文字说明可能比较抽象，下面用图像加以说明。比如数字<em>0x12345678</em>在两种不同字节序<em>CPU</em>中的存储顺序如下所示：</p><img src="https://pic.hanjiaming.com.cn/2021/04/06/953f738b410d7.png" alt="image.png" title="image.png"><p>从上面两图可以看出，采用<em>big endian</em>方式存储数据是符合我们人类的思维习惯的。</p><h3 id="instruction-set" tabindex="-1"><a class="header-anchor" href="#instruction-set" aria-hidden="true">#</a> Instruction set</h3><img src="https://pic.hanjiaming.com.cn/2021/04/06/aeb49c2d6fe40.png" alt="image.png" title="image.png"><img src="https://pic.hanjiaming.com.cn/2021/04/06/56d0691aa2d6f.png" alt="image.png" title="image.png"><h3 id="encoding-registers" tabindex="-1"><a class="header-anchor" href="#encoding-registers" aria-hidden="true">#</a> Encoding registers</h3><p>给寄存器编码</p><p>Each register is uniquely specified by a 4-bit ID「每个寄存器由一个4位ID唯一地指定」</p><img src="https://pic.hanjiaming.com.cn/2021/04/06/a49025d5218d5.png" alt="image.png" title="image.png"><p>ID 15 (0xF) indicates “no register”「ID 15（0x F）表示“无寄存器”」</p><h3 id="instruction-examples" tabindex="-1"><a class="header-anchor" href="#instruction-examples" aria-hidden="true">#</a> Instruction examples</h3><img src="https://pic.hanjiaming.com.cn/2021/04/06/91a28ca36c197.png" alt="image.png" title="image.png"><p><strong>Uniqueness (requirement on designing an ISA)「唯一性（设计ISA的要求）」</strong></p><ul><li>The encodings must have a unique interpretation「编码必须具有唯一的解释」</li><li>Given a sequence of bytes (machine code), it can be interpreted into only one valid sequence of instructions「给定一个字节序列（机器代码），它只能解释为一个有效的指令序列」</li><li>From the first instruction, always being able to find the start byte of the next instruction「从第一条指令开始，总是能够找到下一条指令的起始字节</li></ul><h3 id="standard-stages-to-execute-one-instruction" tabindex="-1"><a class="header-anchor" href="#standard-stages-to-execute-one-instruction" aria-hidden="true">#</a> Standard stages to execute one instruction</h3><ul><li>We have …… <ul><li>Hardware building blocks that can do arithmetic computation</li><li>Hardware storage elements to store data</li><li>Machine instructions defined</li></ul></li><li>We want to put all these things together to build a CPU <ul><li>That can read and understand a program in machine instructions</li><li>That can perform the functions specified by the machine instructions <ul><li>By operating the computation and storage elements of the CPU</li></ul></li></ul></li></ul><img src="https://pic.hanjiaming.com.cn/2021/04/06/d8d400734d87c.png" alt="image.png" title="image.png"><ul><li>As there are so many instructions, it will be not wise to design a specific hardware circuit for each instruction「由于指令太多，为每个指令设计特定的硬件电路是不明智的。」</li><li>The execution of instructions is standardized, i.e., all instructions follow the same steps, an in each step share the same hardware「指令的执行是标准化的，即所有指令都遵循相同的步骤，并且每一步都共享相同的硬件」</li></ul><table><thead><tr><th><strong>Stages/Steps</strong></th><th><strong>Functions</strong></th></tr></thead><tbody><tr><td>Fetch</td><td>Read an instruction from the memory「从内存中读取指令」</td></tr><tr><td>Decode</td><td>Read operands「操作数」 from registers「从寄存器读取操作数」</td></tr><tr><td>Execute</td><td>Compute value or address「数学计算」</td></tr><tr><td>Memory access</td><td>Read or write data from/to memory「从内存读取数据或向内存写入数据」</td></tr><tr><td>Write back</td><td>Write results to registers「将结果写入寄存器」</td></tr><tr><td>PC update</td><td>Update PC, get ready for the next instruction「更新PC，准备下一条指令」</td></tr></tbody></table><img src="https://pic.hanjiaming.com.cn/2021/04/06/7da880ef9f9e4.png" alt="image.png" title="image.png"><h4 id="computed-values" tabindex="-1"><a class="header-anchor" href="#computed-values" aria-hidden="true">#</a> Computed values</h4><p>Stored in CPU on hardware lines/pins</p><img src="https://pic.hanjiaming.com.cn/2021/04/06/fcd00f369cbe0.png" alt="image.png" title="image.png"><h4 id="run-the-machine-codes" tabindex="-1"><a class="header-anchor" href="#run-the-machine-codes" aria-hidden="true">#</a> Run the machine codes</h4><p>Use an example program to show how the CPU run a program in the machine code form「使用示例程序来显示CPU如何以机器代码形式运行程序」</p><img src="https://pic.hanjiaming.com.cn/2021/04/06/f8e7c1dcc5d1f.png" alt="image.png" title="image.png"><img src="https://pic.hanjiaming.com.cn/2021/04/06/cd2a72a3bce61.png" alt="image.png" title="image.png"><img src="https://pic.hanjiaming.com.cn/2021/04/06/2adaee0b7cf78.png" alt="image.png" title="image.png"><img src="https://pic.hanjiaming.com.cn/2021/04/06/f098f6890120f.png" alt="image.png" title="image.png"><img src="https://pic.hanjiaming.com.cn/2021/04/06/c01a577b8fe0c.png" alt="image.png" title="image.png"><img src="https://pic.hanjiaming.com.cn/2021/04/16/17e1736f22460.png" alt="image.png" title="image.png"><h4 id="pipeline" tabindex="-1"><a class="header-anchor" href="#pipeline" aria-hidden="true">#</a> Pipeline</h4><img src="https://pic.hanjiaming.com.cn/2021/04/06/04f3b2593ea6d.png" alt="image.png" title="image.png"><ul><li>The whole production process is composed of multiple stages「整个生产过程由多个阶段组成」</li><li>Worker on each stage do only ONE thing「每个阶段的工人只能做一件事情」</li><li>Products line up on the pipeline, each goes through all stages「产品在流水线中排列，每个阶段都经过各个阶段」</li></ul><p>Rethinking the sequential machine</p><p>Every instruction goes through six stages「每条指令都经过六个阶段」</p><p>In the sequential implementation, when the instruction is in one stage, e.g., execute, all the hardware components in other stages are idle「在顺序实现中，当指令处于一个阶段，例如执行时，其他阶段的所有硬件组件都处于空闲状态」</p><p>This is under-utilization of the processor hardware「这是在-处理器硬件的利用率不足」</p><h5 id="understanding-the-performance-of-pipeline" tabindex="-1"><a class="header-anchor" href="#understanding-the-performance-of-pipeline" aria-hidden="true">#</a> Understanding the performance of pipeline</h5><p>Executing an instruction consumes 300ps (1ps = 10-12s)</p><p>How many instructions can we execute in 1s? (throughput, IPS)<br> 1/(300 * 10-12) = 3.33 X 109 instructions（<strong>在无同时执行的情况下</strong>）</p><img src="https://pic.hanjiaming.com.cn/2021/04/06/2deff4a398e41.png" alt="image.png" title="image.png"><p>Decompose the execution of each instruction into 3 stages, each stage takes 100ps to execute「将每个指令的执行分解为3个阶段，每个阶段需要100ps的执行时间」</p><img src="https://pic.hanjiaming.com.cn/2021/04/06/315916204a29a.png" alt="image.png" title="image.png"><p>How many instructions can we execute in 1s? (throughput, IPS)「我们可以在一秒内执行多少条指令？ （吞吐量，IPS）」</p><ul><li><p>1/(100 * 10-12) = 1010</p></li><li><p>3 times faster than the execution above</p></li><li><p>Adding registers between two consecutive pipeline stages「在两个连续的流水线阶段之间添加寄存器」</p></li><li><p>Each time a clock signal arrives, the result of stage-x will be written to the register between stage-x and stage-(x+1)「每次时钟信号到达时，stage-x 的结果将被写入stage-x和 stage-（x + 1）之间的寄存器中」</p></li><li><p><strong>Once the result of stage-x is written, the next stage can start execution with the result as its input「写入stage-x的结果后，下一个stage可以开始执行，并将结果作为输入」</strong></p></li><li><p>Accessing registers introduces extra time delay; the end-to-end latency of finishing a single instruction is increased「访问寄存器会带来额外的时间延迟；完成一条指令的端到端延迟增加了」</p></li></ul><img src="https://pic.hanjiaming.com.cn/2021/04/06/54c468a9e7c77.png" alt="image.png" title="image.png"><h5 id="redesign-the-cpu-with-pipeline" tabindex="-1"><a class="header-anchor" href="#redesign-the-cpu-with-pipeline" aria-hidden="true">#</a> Redesign the CPU with pipeline</h5><img src="https://pic.hanjiaming.com.cn/2021/04/06/a6c6c55580000.png" alt="image.png" title="image.png"><h5 id="bad-pipeline-design" tabindex="-1"><a class="header-anchor" href="#bad-pipeline-design" aria-hidden="true">#</a> Bad pipeline design</h5><p>Nonuniform partitioning「分区不均匀」<br><strong>Latency is determined by the longest stage「延迟由最长的阶段决定」</strong></p><img src="https://pic.hanjiaming.com.cn/2021/04/06/6780b3fb4bee8.png" alt="image.png" title="image.png"><h6 id="make-the-pipeline-stages-uniform" tabindex="-1"><a class="header-anchor" href="#make-the-pipeline-stages-uniform" aria-hidden="true">#</a> Make the pipeline stages uniform</h6><img src="https://pic.hanjiaming.com.cn/2021/04/06/906da6b8887b9.png" alt="image.png" title="image.png"><ul><li>More stages: deep pipeline</li><li>More stage registers -&gt; more time overhead</li><li>Sometimes, a stage cannot be decomposed「分解的」</li></ul><h5 id="data-hazard-in-pipelines" tabindex="-1"><a class="header-anchor" href="#data-hazard-in-pipelines" aria-hidden="true">#</a> Data hazard in pipelines</h5><p>Data hazard in pipelines「管道中的数据危害」</p><ul><li>Data dependencies: the results computed by one instruction are used as the data for a following instruction「数据依存关系：一条指令计算的结果用作下一条指令的数据」</li><li>Data hazard: data dependencies have the potential to cause an erroneous computation by the pipeline「数据危害：数据依赖性可能会导致管道计算错误」</li></ul><img src="https://pic.hanjiaming.com.cn/2021/04/06/db1bcd3177182.png" alt="image.png" title="image.png"><h6 id="solution-stalling" tabindex="-1"><a class="header-anchor" href="#solution-stalling" aria-hidden="true">#</a> Solution: Stalling</h6><img src="https://pic.hanjiaming.com.cn/2021/04/06/6cbdf7ace4050.png" alt="image.png" title="image.png"><h5 id="other-problems" tabindex="-1"><a class="header-anchor" href="#other-problems" aria-hidden="true">#</a> Other Problems</h5><ul><li>Stalling a pipeline reduces performance「停滞管道会降低性能」</li><li>There are other ways to remove the data hazards「还有其他方法可以消除数据危害」</li><li>There are control hazards, and of course solutions「有控制危险，当然也有解决办法」</li><li>There are out-of-order pipelines (instruction execution sequence are changed), multi-issue pipelines「有乱序管道（指令执行顺序已更改），多发布管道」</li><li>……</li></ul><p>Pipelines are a very important feature to the performance of contemporary powerful CPUs, very complex designs exist「管道是当代功能强大的CPUs性能的非常重要的特征，存在非常复杂的设计」</p><hr><h2 id="补充材料" tabindex="-1"><a class="header-anchor" href="#补充材料" aria-hidden="true">#</a> 补充材料</h2><h3 id="y86-64-instruction-set" tabindex="-1"><a class="header-anchor" href="#y86-64-instruction-set" aria-hidden="true">#</a> Y86-64 instruction set</h3><img src="https://pic.hanjiaming.com.cn/2021/05/13/dfabed4fb112d.png" alt="1620889874072.png" title="1620889874072.png"><h3 id="补充一些指令的stage" tabindex="-1"><a class="header-anchor" href="#补充一些指令的stage" aria-hidden="true">#</a> 补充一些指令的stage</h3><h4 id="mrmovq" tabindex="-1"><a class="header-anchor" href="#mrmovq" aria-hidden="true">#</a> mrmovq</h4><img src="https://pic.hanjiaming.com.cn/2021/05/13/64dbe34aa455e.png" alt="1620890018309.png" title="1620890018309.png"><h4 id="jg" tabindex="-1"><a class="header-anchor" href="#jg" aria-hidden="true">#</a> jg</h4><img src="https://pic.hanjiaming.com.cn/2021/05/13/40ea4c2492224.png" alt="1620890069997.png" title="1620890069997.png"><h4 id="cmovle" tabindex="-1"><a class="header-anchor" href="#cmovle" aria-hidden="true">#</a> cmovle</h4><img src="https://pic.hanjiaming.com.cn/2021/05/13/5192d957a02b8.png" alt="1620890163626.png" title="1620890163626.png"><h3 id="x86-x64-指令长度" tabindex="-1"><a class="header-anchor" href="#x86-x64-指令长度" aria-hidden="true">#</a> x86/x64 指令长度</h3><p>AMD manual Vol3 第 1.1 Instruction Byte Brder 节中明确地说：An instruction can be between one and 15 bytes in length.</p><h3 id="做题笔记" tabindex="-1"><a class="header-anchor" href="#做题笔记" aria-hidden="true">#</a> 做题笔记</h3><ol><li>对于每个指令，都有执行Decode、Write back、Memory 这几个过程。le xxx 指令只有这三个过程</li></ol><h2 id="引用材料" tabindex="-1"><a class="header-anchor" href="#引用材料" aria-hidden="true">#</a> 引用材料</h2>',116),T={href:"https://zh.wikipedia.org/wiki/%E6%8C%87%E4%BB%A4%E9%9B%86%E6%9E%B6%E6%A7%8B",target:"_blank",rel:"noopener noreferrer"},O={href:"https://blog.csdn.net/sunshine1314/article/details/2309655",target:"_blank",rel:"noopener noreferrer"},R=i("li",null,"AMD manual Vol3",-1),W=i("li",null,"COMP1411 @ PolyU's PowerPoint",-1);function Y(H,N){const t=s("ExternalLinkIcon");return o(),h("div",null,[c,i("blockquote",null,[i("p",null,[p,e("（英语：Instruction Set Architecture，缩写为ISA），又称"),d,e("或"),g,e("，是"),i("a",m,[e("计算机体系结构"),a(t)]),e("中与"),i("a",u,[e("程序设计"),a(t)]),e("有关的部分，包含了"),i("a",f,[e("基本数据类型"),a(t)]),e("，指令集，"),i("a",b,[e("寄存器"),a(t)]),e("，"),i("a",_,[e("寻址模式"),a(t)]),e("，"),i("a",x,[e("存储体系"),a(t)]),e("，"),i("a",w,[e("中断"),a(t)]),e("，"),i("a",k,[e("异常处理"),a(t)]),e("以及外部"),i("a",E,[e("I/O"),a(t)]),e("。指令集架构包含一系列的"),i("a",A,[e("opcode"),a(t)]),e("即操作码（"),i("a",B,[e("机器语言"),a(t)]),e("），以及由特定处理器执行的基本命令。")]),i("p",null,[e("不同的处理器“家族”——例如"),i("a",y,[e("Intel"),a(t)]),e(),i("a",j,[e("IA-32"),a(t)]),e("和"),i("a",z,[e("x86-64"),a(t)]),e("、"),i("a",I,[e("IBM"),a(t)]),e("/Freescale Power和"),i("a",v,[e("ARM"),a(t)]),e("处理器家族——有不同的指令集架构。["),i("a",C,[e("1]"),a(t)])]),i("p",null,[e("指令集体系与"),i("a",S,[e("微架构"),a(t)]),e("（一套用于执行指令集的微处理器设计方法）不同。使用不同微架构的电脑可以共享一种指令集。例如，"),i("a",D,[e("Intel"),a(t)]),e("的"),i("a",P,[e("Pentium"),a(t)]),e("和"),i("a",M,[e("AMD"),a(t)]),e("的"),i("a",U,[e("AMD Athlon"),a(t)]),e("，两者几乎采用相同版本的"),i("a",F,[e("x86"),a(t)]),e("指令集体系，但是两者在内部设计上有本质的区别。")]),q]),L,i("ul",null,[i("li",null,[i("a",T,[e("https://zh.wikipedia.org/wiki/指令集架構"),a(t)])]),i("li",null,[i("a",O,[e("https://blog.csdn.net/sunshine1314/article/details/2309655"),a(t)])]),R,W])])}const G=r(l,[["render",Y],["__file","Y86-64-processer-arch.html.vue"]]);export{G as default};
