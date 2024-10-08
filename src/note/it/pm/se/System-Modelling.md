---
article: false
date: 2022-12-14
order: 5
headerDepth: 2

---

# System Modelling

1. 了解如何用图形模型来表示软件系统，以及为什么需要几种类型的模型来完全表示一个系统。
2. 了解上下文、交互、结构和行为的基本系统建模观点；
3. 了解统一建模语言（UML）中的主要图表类型以及这些图表如何用于系统建模。
4. 了解模型驱动工程，即从结构和行为模型中自动生成可执行系统。

系统建模是开发一个系统的抽象模型的过程，每个模型都呈现出该系统的不同观点或视角。

模型可以有不同的形式

- 基于统一建模语言（UML）中的图示类型的图形模型。
- 正式的（数学）模型。

Models of both the existing system and the system to be developed. 在需求工程中使用时,

- **现有系统的模型**有助于澄清现有系统的作用，并可作为讨论其优势和劣势的基础。
- **新系统的模型**有助于解释建议的要求，并可用于讨论设计建议和记录系统的实施。

## Abstraction vs. Representation

- 模型是被研究的系统的抽象，而不是该系统的另一种表现。
- 每个模型都从一个特定的角度代表一个系统
  - An external perspective，在这里你对系统的背景或环境进行建模。
  - An interaction perspective, 你对一个系统和它的环境之间，或者一个系统的组成部分之间的交互进行建模。
  - A structural perspective, 你对系统的组织或系统处理的数据结构进行建模。
  - A behavioral perspective, 你对系统的动态行为进行建模，以及它如何对事件做出反应。

## Graphical System Models

- 作为激发和集中讨论现有或拟议制度的一种方式
- 作为记录现有系统的一种方式：这些模型不一定是完整的，因为你可能只需要记录一个系统的某些部分。然而，这些模型必须是正确的
- 作为一个详细的系统描述，可以用来生成一个系统实现

::: tip UML

UML是一种标准化的语言，用于指定、可视化、构建和记录（软件）系统。

- Specification
- Visualization
- Construction
- Documentation

:::

## Context Models

### System boundaries

上下文模型用于说明一个系统的运行环境--它们显示了系统边界之外的东西。

- 系统边界的建立是为了定义什么是系统内部，什么是系统外部。它们显示了被开发的系统所使用或依赖于该系统的其他系统。
- 定义系统边界是一种政治判断。社会和组织方面的关注可能会影响到对系统边界位置的决定。

### UML Activity Diagrams

上下文模型只是显示了环境中的其他系统，但没有显示环境中的系统与被指定系统之间的关系类型。使用 UML activity diagrams 定义的业务流程模型可能有助于揭示正在开发的系统是如何用于更广泛的业务流程的。

<img src="https://pic.hanjiaming.com.cn/2022/12/14/004dc5cca8e30.png" alt="1671026785259.png" style="zoom:50%;" />

## Interaction Models

所有系统都涉及到某种形式的相互作用.

- 建立用户互动模型很重要，因为它有助于确定用户需求。
- 对组件的相互作用进行建模有助于我们了解一个拟议的系统结构是否有可能提供所需的系统性能和可靠性。
- 对系统与系统之间的互动进行建模，突出了可能出现的沟通问题。

两种相关的互动建模方法

- Use case diagrams 大多用于模拟系统与外部代理（人类用户或其他系统）之间的交互。
- Sequence diagrams 经常被用来模拟系统组件之间的相互作用，尽管外部代理也可能被包括在内
























