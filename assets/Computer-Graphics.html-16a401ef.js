import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,e as r}from"./app-20cb2ce2.js";const n={},t=r('<h1 id="computer-graphics" tabindex="-1"><a class="header-anchor" href="#computer-graphics" aria-hidden="true">#</a> Computer Graphics</h1><h2 id="rendering-pipeline" tabindex="-1"><a class="header-anchor" href="#rendering-pipeline" aria-hidden="true">#</a> Rendering Pipeline</h2><p>「渲染管道」</p><ul><li>General (rasterization) Rendering Pipeline (RP)「一般（光栅化）的渲染管道（RP）」</li><li>Ray Tracing (RT) 「光线追踪（RT）」</li><li>Rasterization「光栅化」 vs. Ray Tracing (RT)</li></ul><h2 id="general-rasterization-rp" tabindex="-1"><a class="header-anchor" href="#general-rasterization-rp" aria-hidden="true">#</a> General (rasterization) RP</h2><figure><img src="https://pic.hanjiaming.com.cn/2022/12/10/40b1357bf25cb.png" alt="1670667554282.png" tabindex="0" loading="lazy"><figcaption>1670667554282.png</figcaption></figure><h2 id="ray-tracing" tabindex="-1"><a class="header-anchor" href="#ray-tracing" aria-hidden="true">#</a> Ray Tracing</h2><figure><img src="https://pic.hanjiaming.com.cn/2022/12/10/032fdf7817266.png" alt="1670667593056.png" tabindex="0" loading="lazy"><figcaption>1670667593056.png</figcaption></figure><h2 id="rasterization-vs-rt" tabindex="-1"><a class="header-anchor" href="#rasterization-vs-rt" aria-hidden="true">#</a> Rasterization vs. RT</h2><ul><li>Rasterization RP is well optimized (i.e., it is very FAST) <ul><li>Model rasterization RP supports more realistic lighting <ul><li>光照贴图</li><li>光探头「Light Probes」</li><li>Real-time global illumination「照明」</li></ul></li></ul></li><li>RT simulates real physics of light (i.e., it is very costly)「RT模拟了真实的光的物理特性（也就是说，它的成本很高）。」 <ul><li>NVIDIA 深度学习超级采样 (DLSS)</li><li>RT denoising「去噪」 is again very costly</li></ul></li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/12/10/7c24f5182d8d5.gif" alt="1670667934489.gif" tabindex="0" loading="lazy"><figcaption>1670667934489.gif</figcaption></figure>',11),l=[t];function s(c,o){return a(),e("div",null,l)}const d=i(n,[["render",s],["__file","Computer-Graphics.html.vue"]]);export{d as default};
