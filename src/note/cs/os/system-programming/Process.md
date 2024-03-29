---
article: false
date: 2022-10-26
order: 3
headerDepth: 2

---

# Unix Processes

- A process is an instance of a program in execution (**the execution of the program has started but has not yet terminated**).
- Process is dynamic while program is static.
- 进程是竞争资源的基本单位。特别是，它是 CPU 调度程序的基本活动实体。

如何理解：一个进程是{s(e, i)}的时间序列，其中每两个连续状态s(e, j)和s(e, j+1)之间存在由程序逻辑和操作系统决定的因果关系。「状态机模型」

## 如何将程序变成进程

- The program is read into memory.
- A unique process ID is assigned.
- OS kernel creates a process structure instance to record information related to this process.
- Necessary resources to run the program are allocated.

初始状态 s(e, 0) 被设置，这将触发其下一个状态 s(e, 1)，这将触发其下一个状态 s(e, 2)，...由程序逻辑和操作系统确定。

## 线程的概念 (轻量级进程)

在较旧的操作系统中，每个进程都有其专有的资源集，即使对于相关的进程（例如共享数据）也是如此。这是浪费。

现代操作系统提出了 "线程 "的概念。线程是拥有共享资源的进程，通常由同一个祖先进程创建。由于资源分配更加节俭，线程也被称为 "轻量级进程"。

![1666634811226.png](https://pic.hanjiaming.com.cn/2022/10/25/a634fcc2f3486.png)

哪些资源可以共享，哪些不可以共享？

![1666635218367.png](https://pic.hanjiaming.com.cn/2022/10/25/0e2d894d9ebda.png)

可共享

- 存储常用代码的存储器（如常用库代码，如printf）。
- 存储公共数据的内存（例如全局/静态变量、堆、命令行参数、环境变量）
- 存储共享外围资源的内存（如文件元信息和内容）。

不可共享

- Registers
- Stack (memory to store each function call's local variables)
- Memory to store thread specific code

## Process Image

进程当前状态的快照被称为进程快照，又称进程执行环境快照，或（主要指快照的内存部分）地址空间快照。

## Process management

除了它的快照，一个进程还有它相应的元数据（在内核中），以便操作系统管理它，例如进程的ID。

Unix 操作系统通常维护着一个由父子联系组成的进程层次结构：请求创建另一个进程的进程被称为父进程，被创建的进程被称为子进程。

一个子进程在创建时继承其父进程的所有属性，但在创建后可以改变（甚至改变其代码快照）。

## 通用流程管理元信息

- Process ID – integer PID
- Parent process ID – an integer PPID
- User process ID – an integer UID
  - 在 Unix 中，每个用户都有一个唯一的用户 ID。
  - 每个进程都与一个特定的用户相关联，该用户被称为进程的所有者，负责执行该程序。
  - 所有者对该过程具有一定的特权。

::: tip

使用 getpid、getppid 和 getuid 来确定当 前、父 和 所有者的 ID。
:::

ps 是“进程状态”的缩写。

- `ps`列出你当前的进程
- `ps -a `列出了更多的进程，包括正在由其他用户和其他终端运行的进程（但不包括shells）。
- `ps -l`会打印更长、更多的信息行，包括UID、PID、PPID、进程状态等。

## 线程实现和编程接口

在用户层面，有一个事实上的标准C线程编程接口。PThread（POSIX线程）。

但是不同的操作系统（甚至是属于Unix家族的操作系统）有不同的方式来实现这些概念和PThread编程接口。例如，现代 Linux 不再区分线程和进程，都实现为写时复制 (COW) 进程（又名“任务”）。例如，每次父线程创建一个新线程，在Linux实现中，都有一个父COW进程创建一个子COW进程。

### wait

在分叉之后，父代和子代都独立进行。如果父代想等到子代完成，它将执行wait或waitpid系统调用。

一般来说，wait系统调用导致调用者进程暂停，直到一个子进程终止或停止，或调用者收到一个信号为止。如果进程没有子进程，或者一个子进程已经终止或停止，但还没有被等待，则该调用立即返回。

如果wait的返回是由于一个孩子的终止，那么返回值是正的，是该孩子的PID。否则，wait返回-1并设置errno。

- errno == ECHILD 表示没有未被等待的子进程。
- errno == EINTR 表示调用被信号中断；

### 孤儿进程和僵尸进程

- 如果一个父进程在没有等待其子进程的情况下首先终止，子进程就会成为孤儿进程「orphan processes」。
- 一个进程使用fork创建子进程，如果子进程退出，而父进程并没有调用wait或waitpid获取子进程的状态信息，那么子进程的进程描述符仍然保存在系统中。这种进程称之为僵死进程。

创建孤儿进程几乎总是糟糕的编程实践，因为对用户来说，可能没有迹象表明还有进程在运行。如果其中一个无主进程进入无限循环，用户可能完全不知道；而且无主进程可能在用户注销后继续执行。

::: tip stat

stat 是一个指向整数变量的指针，用于存储子系统的退出状态。

:::

### exec

exec 系列系统调用提供了一种使用新的可执行模块覆盖调用进程的工具。Exec 将新的可执行文件和参数加载到进程映像中，并调用其 main(...) 函数。

如果成功，exec不会返回；调用进程完全被新的程序覆盖，并从其开始启动。

```c
int execl(char const *path, char cont *arg0, ...);
int execle(char const *path, char const *arg0, ..., char const *envp[]); int execlp(char const *file, char const *arg0, ...);
int execv(char const *path, char const *argv[]);
int execve(char const *path, char const *argv[], char const *envp[]); int execvp(char const *file, char const *argv[]);
```

- l: arguments are passed to main as a list of char const * pointers, each pointing to a C string; the list must end with a NULL.
- v: arguments are passed to main as an array of char const * pointers, each pointing to a C string.
- e: an array of environment variable "environment_variable_name=value" pairs are explicitly passed to the new process image.
- p: use the PATH environment to search for the executable file.

已打开的文件描述符在新的进程映像中保持开放，除非是用FD_CLOEXEC打开的或用O_CLOEXEC打开的。这就是为子进程打开stdin、stdout和stderr的方式。

**exec has no return.**

## Process termination

A normal termination occurs if there was

- A return from main
- An implicit return from main
- A call to the C function exit
- A call to the _exit system call

exit调用用户定义的退出处理程序，并可能在调用_exit系统调用之前提供额外的清理工作。

Exit 接受一个单独的整数参数，称为退出状态，它将可供父进程（可能正在等待）使用。按照惯例，零表示成功，一些非零值表示出现问题。

A process can terminate abnormally by

- 调用中止，导致 SIGABRT 信号被发送到调用进程，或者
- 处理一个导致终止的信号。

可能会产生一个代码转储。且User-installed exit handlers will not be called upon abnormal termination.

## Background Processes

回顾一下，shell是一个命令解释器，它可以

- 提示命令。
- 从标准输入中读取命令，叉取子程序来执行这些命令，并等待子程序完成。
- 用户可以通过 ctrl-c 终止一个命令的执行。

大多数shell将以&结尾的命令行解释为应该由后台进程执行的命令行。当shell创建一个后台进程时，它不会等待该进程完成后再发出提示和接受其他命令。

不能通过命令输入将ctrl-c发送到一个后台进程。尝试

```bash
tail –f test.txt
tail –f test.txt &
```

## Daemons

守护进程「Daemons」是一个后台进程，通常无限期地运行（有一个无限循环）。Unix依靠许多守护进程来执行常规任务。

- • pageout 守护进程处理分页
- In.rlogind 处理远程登录请求
- The web server daemon receiving http connection requests
- ftp daemon, mail daemon, ... etc.