import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as i,c as t,e as n}from"./app-20cb2ce2.js";const r={},a=n('<h1 id="process-management" tabindex="-1"><a class="header-anchor" href="#process-management" aria-hidden="true">#</a> Process Management</h1><p>A process is a program in execution.</p><p>The terms process and job are used almost interchangeably in most textbooks.</p><p>A process includes</p><ul><li>Value of program <strong>counter</strong></li><li>Value of <strong>registers</strong> and processor <strong>status word</strong></li><li><strong>Stack</strong> for temporary variables</li><li><strong>Text</strong> for program code</li><li><strong>Data section</strong> for global variables</li><li>Heap for dynamic storage of variables (those created using malloc)</li></ul><img src="https://pic.hanjiaming.com.cn/2022/03/23/a929cc51a209b.png" alt="1648029542561.png" style="zoom:33%;"><p>在操作系统中，有多个进程同时执行。</p><p>有些计算机系统有多个CPU，但大多数较小的计算机系统只有一个CPU。当进程的数量超过CPU的数量时，每个CPU在每个时刻只能分配给一个进程执行，不是所有的进程在任何时刻都能得到CPU的服务。进程的状态还有其他可能性。这些条件被称为进程状态。为了跟踪进程的状态，以及当进程在CPU之间切换时应该保持的信息，为每个进程分配一个数据结构。这个数据结构是进程控制块，用来存储信息（如你的书包或用户的档案/桌面）。</p><h2 id="process-state" tabindex="-1"><a class="header-anchor" href="#process-state" aria-hidden="true">#</a> Process State</h2><ul><li>new: process is being created.</li><li>running: process is running (program instructions are being executed).</li><li>waiting: process is waiting for some event to occur.</li><li>ready: process is waiting to be assigned to a processor or CPU for execution.</li><li>terminated: process has finished execution.</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/03/23/eeab4d5486150.png" alt="1648029654341.png" tabindex="0" loading="lazy"><figcaption>1648029654341.png</figcaption></figure><h2 id="process-control-block" tabindex="-1"><a class="header-anchor" href="#process-control-block" aria-hidden="true">#</a> Process Control Block</h2><p>Each process is represented by a Process Control Block (PCB).</p><figure><img src="https://pic.hanjiaming.com.cn/2022/03/23/aa3581a389fa6.png" alt="1648029768256.png" tabindex="0" loading="lazy"><figcaption>1648029768256.png</figcaption></figure><h2 id="cpu-switching" tabindex="-1"><a class="header-anchor" href="#cpu-switching" aria-hidden="true">#</a> CPU Switching</h2><figure><img src="https://pic.hanjiaming.com.cn/2022/03/23/63e93a7aecffb.png" alt="1648029811588.png" tabindex="0" loading="lazy"><figcaption>1648029811588.png</figcaption></figure><h2 id="process-scheduling-queues" tabindex="-1"><a class="header-anchor" href="#process-scheduling-queues" aria-hidden="true">#</a> Process Scheduling Queues</h2><p>Several types of queues in computer system:</p><ul><li>Job queue: set of all processes in the system.</li><li>Ready queue: set of all processes residing in main memory, ready and waiting to be executed.</li><li>Device queues: set of processes waiting for an I/O device.</li></ul><p>Processes migrate (i.e. move) among the various queues.</p><p>预备队列中的进程获得CPU，随后可能在设备队列中等待I/O。</p><p>每种队列的进程调度器决定谁将获得下一个服务。</p><figure><img src="https://pic.hanjiaming.com.cn/2022/03/23/5b474f2633fce.png" alt="1648030204043.png" tabindex="0" loading="lazy"><figcaption>1648030204043.png</figcaption></figure><figure><img src="https://pic.hanjiaming.com.cn/2022/03/23/9cf0763956659.png" alt="1648030245515.png" tabindex="0" loading="lazy"><figcaption>1648030245515.png</figcaption></figure><h2 id="scheduler" tabindex="-1"><a class="header-anchor" href="#scheduler" aria-hidden="true">#</a> Scheduler</h2><p>一个进程在其出生（创建）和死亡（终止）之间会在不同的队列中移动。当进程在等待不同的服务时，调度器会选择被服务的进程。</p><h3 id="long-term-scheduler" tabindex="-1"><a class="header-anchor" href="#long-term-scheduler" aria-hidden="true">#</a> Long-term scheduler</h3><p>Also called job scheduler.</p><ul><li>Select which processes should be brought into the ready queue (only process in ready queue are eligible for CPU).</li><li>长期调度器关注的是工作或进程的执行准入。</li><li>把一个进程放在准备队列中的决定很少发生，也许在进程被创建时可能发生一次。 <ul><li>决策应该是一个相当好的（它可以承受更长的运行时间）。</li><li>长期调度器控制多程序的程度（有可能竞争CPU的进程数量）。</li></ul></li></ul><h3 id="medium-term-scheduler" tabindex="-1"><a class="header-anchor" href="#medium-term-scheduler" aria-hidden="true">#</a> Medium-term scheduler</h3><p>一些系统提供了中期调度程序。</p><ul><li>当有太多的进程竞争CPU时，应该从就绪队列中暂时删除一些进程。</li><li>当使用CPU的进程很少时，一些被删除的进程应该返回到就绪队列中。</li><li>Control multi-programming degree after process admission.</li><li>If not done carefully, this could lead to thrashing.</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/03/23/a6f340dddd67d.png" alt="1648048184245.png" tabindex="0" loading="lazy"><figcaption>1648048184245.png</figcaption></figure><h3 id="short-term-scheduler" tabindex="-1"><a class="header-anchor" href="#short-term-scheduler" aria-hidden="true">#</a> Short-term scheduler</h3><p>Also called CPU scheduler.</p><ul><li>Select which process should be executed next and be allocated the CPU.</li><li>短期调度器关注的是CPU的分配。 <ul><li>给一个进程分配CPU的决定每秒钟发生很多次。</li><li>决策的步骤必须非常快（所以它将是简单的）。</li></ul></li></ul><p>Short-term scheduler makes decision on which process to get CPU.</p><ul><li>短期调度器决定哪个进程获得CPU. <ul><li>简单的调度器只是以先到先得的方式向CPU提交进程.</li><li>更好的调度器分配CPU以提高系统性能. <ul><li>等待CPU的时间.</li><li>进程的完成时间.</li><li>响应性。</li></ul></li></ul></li></ul><p>Different types of processes would need different treatment.</p><p><strong>Processes can roughly be classified into two types:</strong></p><h3 id="i-o-bound-process" tabindex="-1"><a class="header-anchor" href="#i-o-bound-process" aria-hidden="true">#</a> I/O-bound process</h3><ul><li>A process that spends more time doing I/O than computations.</li><li>Between long duration of waiting, there are many short periods of using CPU (many short CPU bursts).</li><li>Example: interactive programs, e.g. editor.</li></ul><h3 id="cpu-bound-process" tabindex="-1"><a class="header-anchor" href="#cpu-bound-process" aria-hidden="true">#</a> CPU-bound process</h3><ul><li><p>A process that spends more time doing computations than I/O.</p></li><li><p>Between occasional I/O, there are long periods of using CPU (few very long CPU bursts).</p></li><li><p>Example: computation programs, e.g. finding next move in chess playing.</p></li><li><p>一个进程最初可能是I/O绑定的，然后变成CPU绑定的，反之亦然。</p></li><li><p>介于I/O和CPU之间的中间进程，有适度的I/O。</p></li></ul><p>A computer system will not be effective if all processes are I/O-bound. A system will not perform well if all processes are CPU-bound. Long-term scheduler makes decision to maintain a good mix of CPU-bound and I/O-bound processes. (<strong>No</strong> long-term scheduler in Unix and Windows. )</p><h2 id="context-switching" tabindex="-1"><a class="header-anchor" href="#context-switching" aria-hidden="true">#</a> Context Switching</h2><p>Short-term scheduler controls which process gets CPU next.</p><p>Sequence of events to bring CPU from an executing process to another is called context switching.</p><ul><li>当CPU切换到另一个进程时，系统必须保存旧进程的状态，并为新进程加载先前保存的状态。</li><li>旧进程的状态将在 &quot;time-up &quot;中断发生时被放在堆栈中。</li><li>在决定了CPU的继任者之后，scheduler改变了PC，并从中断中返回到新进程。</li></ul><p>Context switching time is a kind of <strong>overhead(开销)</strong>.</p><ul><li>System does no useful work while switching from one process to another.</li><li>Time cost is dependent on hardware support, e.g. amount of efforts to save the state of the old process.</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/03/23/63e93a7aecffb.png" alt="1648048868790.png" tabindex="0" loading="lazy"><figcaption>1648048868790.png</figcaption></figure><h2 id="process-creation" tabindex="-1"><a class="header-anchor" href="#process-creation" aria-hidden="true">#</a> Process Creation</h2><p>A process is created when a program is run.</p><p>When you type <strong>a.out</strong> in Linux, the Linux shell (CLI) creates a new process for <strong>a.out</strong>, loads the code into the process and lets it run.</p><p>Processes are normally identified by an integer, called process identifier or pid.</p><p>There is a relationship between a process that creates another process.</p><ul><li>The creating process is called the parent process.</li><li>The created process is called the child process.</li></ul><p>A child process could be the parent of another process, and a tree or hierarchy of processes could be formed.</p><img src="https://pic.hanjiaming.com.cn/2022/03/24/965b4db76203e.png" alt="1648051662702.png" style="zoom:50%;"><p>Linux example: To show the parent/children processes use <strong>-H</strong> option for <strong>ps</strong> command (does not work for Mac Unix), e.g. <strong>ps -Hlf</strong> or <strong>ps -Helf</strong></p><figure><img src="https://pic.hanjiaming.com.cn/2022/03/24/e63cd2c35d620.png" alt="1648051707034.png" tabindex="0" loading="lazy"><figcaption>1648051707034.png</figcaption></figure><figure><img src="https://pic.hanjiaming.com.cn/2022/03/24/c23a95b556cf3.png" alt="1648051753793.png" tabindex="0" loading="lazy"><figcaption>1648051753793.png</figcaption></figure><p>Use <strong>fork</strong> system call to create new process.</p><p>To replace process memory with a new program, use <strong>exec</strong> and its family of system calls.</p><p>Parent uses <strong>wait</strong> to collect child and then continues.</p><figure><img src="https://pic.hanjiaming.com.cn/2022/03/24/ae47cd00e3de1.png" alt="1648051860205.png" tabindex="0" loading="lazy"><figcaption>1648051860205.png</figcaption></figure><h3 id="in-unix-linux" tabindex="-1"><a class="header-anchor" href="#in-unix-linux" aria-hidden="true">#</a> In Unix/Linux</h3><figure><img src="https://pic.hanjiaming.com.cn/2022/03/24/ff74d3a81ef12.png" alt="1648052069422.png" tabindex="0" loading="lazy"><figcaption>1648052069422.png</figcaption></figure><p>Relationship between parent and child:</p><ul><li>Resource sharing <ul><li>Parent and child <strong>share no resources</strong>.</li></ul></li><li>Execution <ul><li>Parent and child <strong>execute concurrently</strong>.</li></ul></li><li>Address space <ul><li>Child duplicates that of parent. <ul><li>Child may have an independent program loaded into it, with special <strong>exec</strong> system calls.</li></ul></li></ul></li></ul><p>Parent is informed about the completion of a child. Parent should <strong>wait</strong> for a child to collect it.</p><figure><img src="https://pic.hanjiaming.com.cn/2022/03/24/1ffe6e74f44b8.png" alt="1648052272885.png" tabindex="0" loading="lazy"><figcaption>1648052272885.png</figcaption></figure><h2 id="process-termination" tabindex="-1"><a class="header-anchor" href="#process-termination" aria-hidden="true">#</a> Process Termination</h2><p>After a process executes its last statement, it asks the OS to terminate it by calling <strong>exit</strong>.</p><p>It passes return data back to parent process via <strong>wait</strong>.</p><p>Parent may terminate the execution of children processes by calling <strong>abort</strong> if</p><ul><li><p>Child has exceeded usage of resources beyond its allocation.</p></li><li><p>Task assigned to child is no longer required.</p></li><li><p>Parent itself is exiting.</p></li><li><p>有些操作系统不允许一个子进程继续下去，如果它的父进程终止了，子进程也将被终止。</p></li><li><p>一个已经完成的子进程没有被它的父进程收集或接走，被称为僵尸进程。僵尸进程消耗PCB.</p></li><li><p>一些操作系统允许特殊安排的子进程在父进程终止后继续运行。</p></li><li><p>一个没有父进程的进程被称为孤儿进程。</p></li></ul><h3 id="in-unix-linux-1" tabindex="-1"><a class="header-anchor" href="#in-unix-linux-1" aria-hidden="true">#</a> In Unix/Linux</h3><p>Recall that we have mentioned about process termination arrangement in Unix/Linux.</p><ul><li>Parent should be informed about the completion of a child.</li><li>Parent should <strong>wait</strong> for a child to collect it.</li></ul><p>如果父方不等待子方完成，如果父方在子方完成之前完成，子方将成为孤儿（没有父方）。另一方面，一个完成的子进程如果没有被父方收集或接走，则称为僵尸（活着的死人）。</p><p>So <strong>wait</strong> is necessary.</p><h2 id="the-exec-family" tabindex="-1"><a class="header-anchor" href="#the-exec-family" aria-hidden="true">#</a> The <strong>exec</strong> family</h2><ul><li>The <strong>exec</strong> family of system calls allow a Unix/Linux child process to execute another program (instead of the parent program).</li><li>Include header file <strong>unistd.h</strong> (<strong>#include &lt;unistd.h&gt;</strong>).</li></ul><table><thead><tr><th>System call</th><th>Feature</th></tr></thead><tbody><tr><td><strong>int</strong> <strong>execl</strong>**(const char *path, const char *arg0, ...);**</td><td>Execute a program at pathname <strong>path</strong>, last argument must be <strong>NULL</strong>.</td></tr><tr><td><strong>int</strong> <strong>execlp</strong>**(const char *file, const char *arg0, ...);**</td><td>Execute a program named by <strong>file</strong>, last argument must be <strong>NULL</strong>.</td></tr><tr><td><strong>int</strong> <strong>execle</strong>**(const char *path, const char *arg0, ..., char *const envp[]);**</td><td>Same as <strong>execl</strong>, but access environment variables via *<strong>envp[]</strong>.</td></tr><tr><td><strong>int</strong> <strong>execv</strong>**(const char *path, char *const argv[]);**</td><td>Same as <strong>execl</strong>, but arguments are stored in *<strong>argv[]</strong> instead.</td></tr><tr><td><strong>int</strong> <strong>execvp</strong>**(const char *file, char *const argv[]);**</td><td>Same as <strong>execlp</strong>, but arguments are stored in *<strong>argv[]</strong> instead.</td></tr><tr><td><strong>int</strong> <strong>execve</strong>**(const char *path, char *const argv[], char *const envp[]);**</td><td>Same as <strong>execv</strong>, but access environment variables via *<strong>envp[]</strong>.</td></tr></tbody></table><p>A non-zero return value indicates an error from system call.</p><ul><li>List of arguments in <strong>execl</strong>, <strong>execlp</strong> and <strong>execle</strong> are terminated by a NULL pointer. <ul><li>The path is a string containing the file name, including the full path, to be executed.</li><li>The second argument arg0 is the name of the program for execution, e.g. “ls”.</li></ul></li><li>For <strong>execlp</strong> and <strong>execvp</strong>, the first argument is a file name instead of the path name. <ul><li>If the string contains a &quot;/&quot;, it is considered as a path name. Otherwise, it is a file name and the system will search for the file according to the directories in environment variable PATH.</li></ul></li><li>For <strong>execv</strong>, <strong>execvp</strong> and <strong>execve</strong>, arguments for the program are packed within *argv[].</li><li>For <strong>execle</strong> and <strong>execve</strong>, there is a final argument *envp[] storing the environment variables and values for the program.</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/03/24/ffe86e0805ef0.png" alt="1648052498655.png" tabindex="0" loading="lazy"><figcaption>1648052498655.png</figcaption></figure><p>Unix和Linux中对孤儿的特殊安排。</p><ul><li>一个孤儿进程将被一个新的父进程收养。</li><li>愿意成为所有孤儿进程的新父进程的特殊进程的pid为1。 它是init进程。</li><li>pid为0的进程是用于分页的交换器，pid为1的进程是用于启动和关闭Unix的第一个运行进程。</li></ul><p>在上面的例子中，一个进程有它的父进程1（见第三列PPID）。</p><ul><li>一个学生进程正在做一些事情，但不知何故从未完成（仍在运行），但该会话的原始shell进程已经终止（注销）了</li><li>注意，在 CentOS Linux 上，进程1被称为systemd（即系统守护进程），而不是init.</li><li>Process 1在MacOS上被称为 launchd（即启动守护进程），而不是init。</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/03/24/4c33f09a6e948.png" alt="1648052944772.png" tabindex="0" loading="lazy"><figcaption>1648052944772.png</figcaption></figure><h2 id="cooperating-processes" tabindex="-1"><a class="header-anchor" href="#cooperating-processes" aria-hidden="true">#</a> Cooperating Processes</h2><ul><li>一个独立的进程不能影响或被另一个进程的执行所影响。</li><li>一个合作的进程可以影响或被另一个进程的执行所影响。</li><li>大多数较大的系统有一个相互合作的进程集合。</li><li>Web server and web browser (client) pair is a form of cooperating processes, residing over the network at different computers.</li></ul><p>进程合作的优点：</p><ul><li>信息共享：并发访问数据.</li><li>计算速度加快：分解成进程的子任务.</li><li>模块化：更好地结构化功能.</li><li>方便性：在并发工作模式下建立一个用户模型。</li></ul><p>A very common view point of cooperating processes is the model of a producer and a consumer.</p><h2 id="interprocess-communication" tabindex="-1"><a class="header-anchor" href="#interprocess-communication" aria-hidden="true">#</a> Interprocess Communication</h2><ul><li>Producer process produces information (called item) that is consumed by a consumer process.</li><li>Information (item) produced by producer must be stored up for consumer usage later (since consumer may not be running at the same speed as producer).</li></ul><p>Producer-consumer problem is related to a problem to coordinate producer(s) and consumer(s), especially when the buffer to hold the intermediate data is not unlimited.</p><ul><li>Producer could store data into a shared array or shared queue and consumer takes it out there. <ul><li>Shared array is like the board and everyone can see and draw.</li></ul></li><li>Producer may send a message containing the data to consumer for consumer to read. <ul><li>Message is like an SMS and only the pair knows</li></ul></li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/03/24/aaef2764bda67.png" alt="1648093032934.png" tabindex="0" loading="lazy"><figcaption>1648093032934.png</figcaption></figure><p>合作进程进行通信和同步行动的机制</p><ul><li>共享内存系统：进程通过读/写共享变量进行通信。</li><li>消息传递系统：进程之间通过传递信息进行通信，不使用共享变量。</li></ul><p>Interprocess communication (IPC) normally refers to message passing approach with two operations: <strong>send</strong>(message), <strong>receive</strong>(message).</p><ul><li>If process P and Q wish to communicate, they need to establish a communication link between them and exchange messages via send/receive.</li><li>Communication link could be physical (e.g., shared memory, hardware bus) or logical (e.g., channel or socket).</li></ul><h2 id="synchronization" tabindex="-1"><a class="header-anchor" href="#synchronization" aria-hidden="true">#</a> Synchronization</h2><p>Concurrent access to shared data by cooperating processes (or threads) may make data inconsistent.</p><p>同步确保共享一个逻辑地址空间的合作进程的有序执行，以保证数据的一致性。</p><ul><li>Synchronization requests processes to wait for the signal to go ahead, to avoid the race condition.</li><li>Examples include sleeping barber problem, reader-writer problem, society room problem.</li></ul><figure><img src="https://pic.hanjiaming.com.cn/2022/03/24/43ef2b86ade17.png" alt="1648093272191.png" tabindex="0" loading="lazy"><figcaption>1648093272191.png</figcaption></figure>',113),o=[a];function s(l,c){return i(),t("div",null,o)}const d=e(r,[["render",s],["__file","Process-Management.html.vue"]]);export{d as default};
