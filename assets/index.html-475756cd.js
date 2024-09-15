import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as s,e as r}from"./app-20cb2ce2.js";const t={},o=r('<h1 id="operating-system" tabindex="-1"><a class="header-anchor" href="#operating-system" aria-hidden="true">#</a> Operating System</h1><p>本章OS，主要围绕着Unix和<strong>Linux</strong>展开。</p><h2 id="os-and-computer-system" tabindex="-1"><a class="header-anchor" href="#os-and-computer-system" aria-hidden="true">#</a> OS and Computer System</h2><p>A computer system contains four components.</p><ul><li>Hardware <ul><li>Provide basic computing resources.</li><li>CPU, memory, I/O devices.</li></ul></li><li><strong>Operating system</strong><ul><li>Control and coordinate use of hardware among variousapplications and users.</li><li>Windows 11, OS X, Unix, Linux.</li></ul></li><li>Application programs <ul><li>Define the ways that system resources are used to solve usercomputing problems.</li><li>Word processors, compilers, web browsers, database systems,video games.</li></ul></li><li>Users</li></ul><p><strong>OS is the manager of the computer system.</strong></p><p>OS goals:</p><ul><li>执行用户程序，解决用户的问题。</li><li>让计算机系统使用起来更方便。</li><li>以有效的方式使用计算机硬件。</li></ul><img src="https://pic.hanjiaming.com.cn/2022/03/23/d6f4e9843f595.png" alt="1648017932355.png" style="zoom:50%;"><p>At the hardware level, one or more CPUs and devicecontrollers are connected through <strong>common bus</strong> to access shared memory.</p><p>Concurrent execution of CPU and devices arecompeting for access to memory (<strong>memory cycles</strong>).</p><h2 id="operating-system-1" tabindex="-1"><a class="header-anchor" href="#operating-system-1" aria-hidden="true">#</a> Operating System</h2><p>An operating system is</p><ul><li>A resource manager <ul><li>Manage the <strong>allocation</strong> of computer resources.</li><li>在相互冲突的请求之间做出决定，以实现资源的有效和公平使用。</li></ul></li><li>A control program <ul><li>控制程序的执行以防止错误和不当使用计算机。</li></ul></li></ul><h3 id="os-boundary" tabindex="-1"><a class="header-anchor" href="#os-boundary" aria-hidden="true">#</a> OS boundary</h3><ul><li>Everything a vendor ships when you buy an OS.</li><li>The one program that is running at all times on computer.</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/03/23/26bd49cea35eb.png" alt="1648018238653.png" tabindex="0" loading="lazy"><figcaption>1648018238653.png</figcaption></figure><ul><li>OS must manage the use of resources by users.</li><li>Processor or CPU, memory, file, device are all resources.</li><li>The presence of a user in the OS could be represented by a task or a process.</li><li><strong>A process is a program in execution.</strong><ul><li>Program is a passive entity. You write a program to beexecuted.</li><li>Process is an active entity. You run a program to create aprocess.</li></ul></li><li>A process needs resources like CPU, memory, files toperform its functions.</li><li>A process executes its program instructions sequentially, one at a time, until completion.</li><li>A typical computer system has many processes running concurrently.</li><li>OS is responsible for several process management activities.</li><li>Data should be in memory when a process is executing.</li><li>Instructions of the program for a process should be in memory for execution.</li><li>OS must keep track of the usage of memory.</li><li>Files are often collected and managed under a file system.</li><li>OS should hide variations and details of hardware devices from the user.</li><li>Two major types of interfaces <ul><li>Batch interface: commands are stored in a file (script file or*.bat file) before hand.</li><li>Interactive interface: commands are issued on the fly byusers. There are two types of interactive interfaces: <ul><li>Command line interface (CLI)</li><li>Graphical user interface (GUI)</li></ul></li></ul></li><li>Network manager</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/03/23/78149f75e07e5.png" alt="1648018842812.png" tabindex="0" loading="lazy"><figcaption>1648018842812.png</figcaption></figure><h2 id="protection-and-security" tabindex="-1"><a class="header-anchor" href="#protection-and-security" aria-hidden="true">#</a> Protection and Security</h2><ul><li>Protection <ul><li>A mechanism for controlling access of processes or users toresources defined by the system.</li><li>Provide ways for users to specify the control and to enforceit.</li></ul></li><li>Security <ul><li>The defense of the computer system against internal andexternal attacks.</li><li>Types of attacks: worms, viruses, denial-of-service, identitytheft, theft of service.</li><li>OS can only protect against some of the attacks. Othersshould be managed by human.</li></ul></li></ul><h2 id="operating-system-services" tabindex="-1"><a class="header-anchor" href="#operating-system-services" aria-hidden="true">#</a> Operating System Services</h2><p>Let us summarize the functions or services provided by an operating system to help users.</p><ul><li>User command interface</li><li>Program execution</li><li>I/O operations</li><li>File-system manipulation</li><li>Communications</li><li>Error detection</li></ul><p>Operating system also provides these functions to improve system efficiency.</p><ul><li>Resource allocation</li><li>Accounting</li><li>Protection and security</li></ul>',26),a=[o];function n(l,c){return i(),s("div",null,a)}const p=e(t,[["render",n],["__file","index.html.vue"]]);export{p as default};
