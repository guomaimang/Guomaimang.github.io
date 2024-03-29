---
article: false
date: 2022-06-04
index: false
---

# Database and SQL

- [SQL Quary Standard](sql-quary-standard)

------

SQL是结构化查询语言的缩写，是一种与存储在被称为关系型数据库中的数据进行交互的语言。

你可以把关系型数据库看成是一个表的集合。一个表只是一组行和列，就像电子表格一样，正好代表一种类型的实体。例如，一个表可能代表一个公司的雇员或购买的物品，但不能同时代表两者。

表的每一行，或记录，都包含关于一个单一实体的信息。例如，在一个代表雇员的表中，每一行代表一个人。表的每一列，或字段，包含了表中所有行的单一属性。例如，在一个代表雇员的表中，我们可能有一列包含所有雇员的名字和姓氏。

雇员表可能看起来像这样：

| id   | name    | age  | nationality |
| :--- | :------ | :--- | :---------- |
| 1    | Jessica | 22   | Ireland     |
| 2    | Gabriel | 48   | France      |
| 3    | Laura   | 36   | USA         |

虽然SQL可以用来创建和修改数据库，但本节的重点是查询数据库。查询是对数据库表（或表的组合）中数据的请求。查询是数据科学家的一项基本技能，因为你的分析所需的数据往往存在于数据库中。

