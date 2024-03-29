---
article: false
date: 2022-12-10
order: 4
headerDepth: 1
---

# Virtual Reality

## Place Illusion (PI)

- “being there”
- “presence”
- “tele-presence”
- The illusion of being in a place in spite of the sure knowledge that you are not there.

## Plausibility Illusion (Psi)

The illusion that what is apparently happening is really happening (even though you know for sure that it is not).「认为表面上发生的事情真的发生了的错觉（尽管你肯定知道它不是）。」

Three Necessary Conditions

- 与您个人相关的事件（您是行为的主体）
- 虚拟世界对你做出回应
- 整体可信度（在背景下）

> 虚拟现实体验被定义为用户有效地沉浸在一个响应的虚拟世界中。这意味着用户对视点的动态控制。
>
> Frederick Brooks (1999)

## Four Technologies

有四项技术对VR至关重要：

- 视觉：（以及听觉和触觉）显示，使用户沉浸在虚拟世界中，并阻挡来自现实世界的矛盾的感官印象。
- 渲染：以每秒20至30帧的速度生成千变万化的图像的图形渲染系统；
- 跟踪系统：持续报告用户的头部和四肢的位置和方向
- 数据库：用于构建和维护虚拟世界详细逼真的模型的数据库构建和维护系统。

## Four Auxiliary Technologies

四项辅助技术很重要，但对VR来说也不是那么关键:

- 合成的声音，显示在耳朵上，包括方向性的声音和模拟的声场。
- 向运动感觉显示合成的力和其他触觉感觉。
- 设备，如带有按钮的跟踪手套，用户通过它来指定与虚拟物体的互动
- 替代可能与物理世界进行的真实互动的互动技术。

## Discussion

- 沉浸的概念
- You can simulate CAVE in HMD
- But you cannot simulate HMD in CAVE

## Depth Clues

- **Binocular disparity**「双眼差异」: 这是投射到眼睛背面（然后投射到视觉皮层）的图像的差异，因为两眼在水平方向上被眼间距离分开。
- 人类有大约120度的双眼视觉

![1670666263337.png](https://pic.hanjiaming.com.cn/2022/12/10/85c949104fa3e.png)

- 传统二维显示器无法呈现双眼视差
- 适应性「**Accommodation**」 - 这是改变眼球晶状体焦距所需的肌肉张力，以便在一个特定的深度聚焦。
- **Convergence**「会聚」 - this is the muscle tension required to rotate each eye so that it is facing the focal point「这是旋转每只眼睛以使其面向焦点所需的肌肉张力」

What can be presented on a conventional 2D display?

- 透视「**Perspective**」 - 物体越远越小，平行线在距离上收敛。
- **已知物体的大小** - 我们期望某些物体比其他物体小。如果一只大象和一个杯子看起来一样大，那么我们期望大象离得更远。
- **细节** - 近处物体显示得更详细，远处物体显示得更少。
- 遮挡「**Occlusion**」 - 假设一个物体阻挡另一个物体在前景中。
- **光与影** -如果光源是有方向性的，我们预计前景的物体会在背景的物体上投射影子。
- **相对运动** - 远处的物体似乎比前景中的物体移动得更慢

以上都是通过VR设备的渲染管道「rendering pipeline」 "自动 "实现的。

