const e=JSON.parse('{"key":"v-737f136b","path":"/note/cs/co/MIPS/MIPS%E6%B1%87%E7%BC%96%E8%AF%AD%E8%A8%80%E7%AE%80%E6%98%93%E5%85%A5%E9%97%A81.html","title":"MIPS汇编语言简易入门1","lang":"zh-CN","frontmatter":{"article":false,"date":"2021-05-01T00:00:00.000Z","description":"MIPS汇编语言简易入门1 汇编语言（Assembly Language）是任何一种用于电子计算机、微处理器、微控制器或其他可编程器件的低级语言，亦称为符号语言。在汇编语言中，用助记符代替机器指令的操作码，用地址符号或标号代替指令或操作数的地址。在不同的设备中，汇编语言对应着不同的机器语言指令集，通过汇编过程转换成机器指令。特定的汇编语言和特定的机器语言指令集是一一对应的，不同平台之间不可直接移植。 百科 为什么选择学习MIPS汇编语言？ MIPS (Microprocessor without Interlocked Pipeline Stages)","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/cs/co/MIPS/MIPS%E6%B1%87%E7%BC%96%E8%AF%AD%E8%A8%80%E7%AE%80%E6%98%93%E5%85%A5%E9%97%A81.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"MIPS汇编语言简易入门1"}],["meta",{"property":"og:description","content":"MIPS汇编语言简易入门1 汇编语言（Assembly Language）是任何一种用于电子计算机、微处理器、微控制器或其他可编程器件的低级语言，亦称为符号语言。在汇编语言中，用助记符代替机器指令的操作码，用地址符号或标号代替指令或操作数的地址。在不同的设备中，汇编语言对应着不同的机器语言指令集，通过汇编过程转换成机器指令。特定的汇编语言和特定的机器语言指令集是一一对应的，不同平台之间不可直接移植。 百科 为什么选择学习MIPS汇编语言？ MIPS (Microprocessor without Interlocked Pipeline Stages)"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T05:33:29.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2021-05-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T05:33:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"MIPS汇编语言简易入门1\\",\\"description\\":\\"MIPS汇编语言简易入门1 汇编语言（Assembly Language）是任何一种用于电子计算机、微处理器、微控制器或其他可编程器件的低级语言，亦称为符号语言。在汇编语言中，用助记符代替机器指令的操作码，用地址符号或标号代替指令或操作数的地址。在不同的设备中，汇编语言对应着不同的机器语言指令集，通过汇编过程转换成机器指令。特定的汇编语言和特定的机器语言指令集是一一对应的，不同平台之间不可直接移植。 百科 为什么选择学习MIPS汇编语言？ MIPS (Microprocessor without Interlocked Pipeline Stages)\\"}"]]},"headers":[{"level":2,"title":"为什么选择学习MIPS汇编语言？","slug":"为什么选择学习mips汇编语言","link":"#为什么选择学习mips汇编语言","children":[]},{"level":2,"title":"学习依赖知识","slug":"学习依赖知识","link":"#学习依赖知识","children":[]},{"level":2,"title":"产生可执行文件","slug":"产生可执行文件","link":"#产生可执行文件","children":[]},{"level":2,"title":"汇编语言的作用","slug":"汇编语言的作用","link":"#汇编语言的作用","children":[]},{"level":2,"title":"优缺点","slug":"优缺点","link":"#优缺点","children":[]},{"level":2,"title":"功能特点","slug":"功能特点","link":"#功能特点","children":[]},{"level":2,"title":"预备知识","slug":"预备知识","link":"#预备知识","children":[{"level":3,"title":"栈的理解","slug":"栈的理解","link":"#栈的理解","children":[]},{"level":3,"title":"位拓展","slug":"位拓展","link":"#位拓展","children":[]}]},{"level":2,"title":"MIPS Registers","slug":"mips-registers","link":"#mips-registers","children":[]},{"level":2,"title":"Other MIPS Registers","slug":"other-mips-registers","link":"#other-mips-registers","children":[]},{"level":2,"title":"MIPS内存布局","slug":"mips内存布局","link":"#mips内存布局","children":[{"level":3,"title":"一些关于内存的基本事实","slug":"一些关于内存的基本事实","link":"#一些关于内存的基本事实","children":[]}]},{"level":2,"title":"MIPS Instructions 介绍","slug":"mips-instructions-介绍","link":"#mips-instructions-介绍","children":[{"level":3,"title":"R-type Instructions","slug":"r-type-instructions","link":"#r-type-instructions","children":[]},{"level":3,"title":"I-type Instructions","slug":"i-type-instructions","link":"#i-type-instructions","children":[]},{"level":3,"title":"J-type Instructions","slug":"j-type-instructions","link":"#j-type-instructions","children":[]}]},{"level":2,"title":"做题笔记","slug":"做题笔记","link":"#做题笔记","children":[]},{"level":2,"title":"相关网站和软件推荐","slug":"相关网站和软件推荐","link":"#相关网站和软件推荐","children":[]},{"level":2,"title":"引用","slug":"引用","link":"#引用","children":[]}],"git":{"createdTime":1726378409000,"updatedTime":1726378409000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":35.09,"words":3509},"filePathRelative":"note/cs/co/MIPS/MIPS汇编语言简易入门1.md","localizedDate":"2021年5月1日","excerpt":"<h1> MIPS汇编语言简易入门1</h1>\\n<blockquote>\\n<p>汇编语言（Assembly Language）是任何一种用于电子计算机、微处理器、微控制器或其他可编程器件的低级语言，亦称为符号语言。在汇编语言中，用助记符代替机器指令的操作码，用地址符号或标号代替指令或操作数的地址。在不同的设备中，汇编语言对应着不同的机器语言指令集，通过汇编过程转换成机器指令。特定的汇编语言和特定的机器语言指令集是一一对应的，不同平台之间不可直接移植。</p>\\n<p>百科</p>\\n</blockquote>\\n<h2> 为什么选择学习MIPS汇编语言？</h2>\\n<p>MIPS (Microprocessor without Interlocked Pipeline Stages)</p>","autoDesc":true}');export{e as data};
