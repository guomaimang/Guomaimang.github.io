const e=JSON.parse('{"key":"v-10832f90","path":"/note/cs/os/system-programming/Character-Device-Drivers-2.html","title":"Character Device Drivers (II)","lang":"zh-CN","frontmatter":{"article":false,"date":"2022-10-26T00:00:00.000Z","order":8,"headerDepth":2,"description":"Character Device Drivers (II) 设备驱动程序和设备之间的通信。设备的命令/数据寄存器可以通过I/O端口访问，从 内存空间（内存映射的I/O） 独立空间（I/O空间） 取决于硬件的情况。 ARM 32 - 内存映射的I/O Intel 32 – I/O 空间（独立且不同于内存空间） Multiplexed Ports 由于ARM 2410 中的大多数引脚都是复用的，我们需要在使用前确定选择哪个功能。","head":[["meta",{"property":"og:url","content":"https://guomaimang.github.io/note/cs/os/system-programming/Character-Device-Drivers-2.html"}],["meta",{"property":"og:site_name","content":"韩佳明 & Hirsun"}],["meta",{"property":"og:title","content":"Character Device Drivers (II)"}],["meta",{"property":"og:description","content":"Character Device Drivers (II) 设备驱动程序和设备之间的通信。设备的命令/数据寄存器可以通过I/O端口访问，从 内存空间（内存映射的I/O） 独立空间（I/O空间） 取决于硬件的情况。 ARM 32 - 内存映射的I/O Intel 32 – I/O 空间（独立且不同于内存空间） Multiplexed Ports 由于ARM 2410 中的大多数引脚都是复用的，我们需要在使用前确定选择哪个功能。"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-15T05:33:29.000Z"}],["meta",{"property":"article:author","content":"Hirsun"}],["meta",{"property":"article:published_time","content":"2022-10-26T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-15T05:33:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Character Device Drivers (II)\\",\\"description\\":\\"Character Device Drivers (II) 设备驱动程序和设备之间的通信。设备的命令/数据寄存器可以通过I/O端口访问，从 内存空间（内存映射的I/O） 独立空间（I/O空间） 取决于硬件的情况。 ARM 32 - 内存映射的I/O Intel 32 – I/O 空间（独立且不同于内存空间） Multiplexed Ports 由于ARM 2410 中的大多数引脚都是复用的，我们需要在使用前确定选择哪个功能。\\"}"]]},"headers":[{"level":2,"title":"Multiplexed Ports","slug":"multiplexed-ports","link":"#multiplexed-ports","children":[]}],"git":{"createdTime":1726378409000,"updatedTime":1726378409000,"contributors":[{"name":"hanjiaming","email":"47519540+guomaimang@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.13,"words":213},"filePathRelative":"note/cs/os/system-programming/Character-Device-Drivers-2.md","localizedDate":"2022年10月26日","excerpt":"<h1> Character Device Drivers (II)</h1>\\n<p>设备驱动程序和设备之间的通信。设备的命令/数据寄存器可以通过I/O端口访问，从</p>\\n<ul>\\n<li>内存空间（内存映射的I/O）</li>\\n<li>独立空间（I/O空间）</li>\\n</ul>\\n<p>取决于硬件的情况。</p>\\n<ul>\\n<li>ARM 32 - 内存映射的I/O</li>\\n<li>Intel 32 – I/O 空间（独立且不同于内存空间）</li>\\n</ul>\\n<h2> Multiplexed Ports</h2>\\n<p>由于ARM 2410 中的大多数引脚都是复用的，我们需要在使用前确定选择哪个功能。</p>","autoDesc":true}');export{e as data};
