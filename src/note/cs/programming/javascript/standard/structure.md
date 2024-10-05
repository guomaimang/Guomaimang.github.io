---
article: false
date: 2022-04-29
index: 1
author: javascriptInfo, Hirsun
---

# 代码结构

我们将要学习的第一个内容就是构建代码块。

## 语句

语句是执行**行为（action）**的语法结构和命令。

当存在换行符（line break）时，在大多数情况下可以省略分号，但是不推荐省略。

通常，每条语句独占一行，以提高代码的可读性：

```javascript
alert('Hello');
alert('World');
```

## 分号

下面的代码也是可以运行的：

```javascript
alert('Hello')
alert('World')
```

在这，JavaScript 将换行符理解成“隐式”的分号。这也被称为 [自动分号插入](https://tc39.github.io/ecma262/#sec-automatic-semicolon-insertion)。

**在大多数情况下，换行意味着一个分号。但是“大多数情况”并不意味着“总是”！**

有很多换行并不是分号的例子，例如：

```
alert(3 +
1
+ 2);
```

代码输出 `6`.

**但存在 JavaScript 无法确定是否真的需要自动插入分号的情况。**最好不要省略分号，尤其对新手来说。

## 注释

### 单行注释

```javascript
// 这行注释独占一行
alert('Hello');

alert('World'); // 这行注释跟随在语句后面
```

### 多行注释

```javascript
/* 两个消息的例子。
这是一个多行注释。
*/
alert('Hello');
alert('World');
```

注释的内容被忽略了，所以如果我们在 `/* ... */` 中放入代码，并不会执行。

### 临时禁用代码

有时候，可以很方便地临时禁用代码。

在大多数的编辑器中，一行代码可以使用 `key:Ctrl+/` 快捷键进行单行注释，诸如 `key:Ctrl+Shift+/` 的快捷键可以进行多行注释（选择代码，然后按下快捷键）。

对于 Mac 电脑，应使用 `key:Cmd` 而不是 `key:Ctrl`，使用 `key:Option` 而不是 `key:Shift`。

注释会增加代码总量，但这一点也不是什么问题。有很多工具可以帮你在把代码部署到服务器之前缩减代码。这些工具会移除注释，这样注释就不会出现在发布的脚本中。所以，注释对我们的生产没有任何负面影响。

在后面的教程中，会解释如何更好地写注释。
