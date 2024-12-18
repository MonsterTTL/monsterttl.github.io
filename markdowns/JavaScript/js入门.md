# JavaScript 开发入门

# 变量
作为一门脚本语言，JavaScript也不是一门强类型语言，所以变量没有类型限制，可以随时改变类型。不过每个变量在运行时都是有确定的类型的，
这些类型包括又分*基本数据类型*和*引用数据类型*。      
基本数据类型有：Number、String、Boolean、Undefined、Null、Symbol、BigInt。  
引用数据类型大致有: object、Array、Function、Date、RegExp、Promise、Map、Set、WeakMap、WeakSet等。这里基础中比较
重要的就是一些容器类型，比如Array、Object、Map、Set，这些容器的基本属性跟其他语言中基本一致。

# 条件语句
JavaScript 中的条件语句跟其他语言基本一致，大致就是if、else、switch、case、default等。不同之处可能就是比较运算符，
JavaScript中相等比较运算符分为严格相等和相等两种，严格相等使用===，相等使用==，这两者的区别就是相等比较时，类型是否相同。    
比如如下代码：
```javascript
let isEqual = 11 == "11";
let isStrictEqual = 11 === "11";
console.log(isEqual, isStrictEqual);
```
第一个将会返回true，第二个将会返回false。
# 循环语句
JavaScript 中的循环语句跟其他语言基本一致，大致就是for、while、do while等。
除了以上的基础循环语句，JavaScript还支持for in、for of等循环语句，for in循环语句用于遍历对象的属性，for of循环语句用于遍历可迭代对象。
从效果上来说for of语句跟其他语言中的for each语句效果一致。可以通过下面的代码来体会一下：
```javascript
let list = [1, 2, 3, 4, 5];
for (let i of list) {
    if (i == 1) {
        console.log(typeof i);
    }
    console.log(i);
}
console.log('----------------');
for (let i in list) {
    if (i == 1) {
        console.log(typeof i);
    }
    console.log(i);
}
```
输出结果为：
```
number
1
2
3
4
5
----------------
0
string
1
2
3
4
```
着重要看的是for in循环语句中i的类型是string，而for of循环语句中i的类型是number。且for in循环是从0开始的，
它实际是遍历了对象的属性（在这里是数组的索引值）。

# 函数
如果我们学习过其他的现代高级语言（比如Kotlin），JavaScript中的函数跟其他语言中的函数是差不多的，基本形式和功能都差不多
