import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as r,c as i,e as t}from"./app-20cb2ce2.js";const a={},l=t('<h1 id="character-device-drivers-ii" tabindex="-1"><a class="header-anchor" href="#character-device-drivers-ii" aria-hidden="true">#</a> Character Device Drivers (II)</h1><p>设备驱动程序和设备之间的通信。设备的命令/数据寄存器可以通过I/O端口访问，从</p><ul><li>内存空间（内存映射的I/O）</li><li>独立空间（I/O空间）</li></ul><p>取决于硬件的情况。</p><ul><li>ARM 32 - 内存映射的I/O</li><li>Intel 32 – I/O 空间（独立且不同于内存空间）</li></ul><h2 id="multiplexed-ports" tabindex="-1"><a class="header-anchor" href="#multiplexed-ports" aria-hidden="true">#</a> Multiplexed Ports</h2><p>由于ARM 2410 中的大多数引脚都是复用的，我们需要在使用前确定选择哪个功能。</p><p>通常情况下，一个端口有三个不同的寄存器:</p><ul><li>Port Configuration Register – define which function</li></ul><p>Port Pull-up Register: 在没有引脚功能设置的情况下启用/禁用工作（如果我们想使引脚的设置功能，应该将其设置为禁用，即把数值设置为1）。</p><p>未完待续</p>',11),c=[l];function o(s,d){return r(),i("div",null,c)}const p=e(a,[["render",o],["__file","Character-Device-Drivers-2.html.vue"]]);export{p as default};
