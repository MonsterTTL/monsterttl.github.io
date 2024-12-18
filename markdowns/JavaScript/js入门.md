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
如果我们学习过其他的现代高级语言（比如Kotlin），JavaScript中的函数跟其他语言中的函数是差不多的，基本形式和功能都差不多。
Javascript中用function关键字来定义函数，函数定义时不需要指定返回值类型，函数体中不是必须使用return语句来返回值，
如果函数体中不包含return语句，那么函数将会返回undefined。   

一个简单的函数形式大致如下:
```javascript
function hello(name) {
    console.log("how are you, ${name}?");
}
```
## 箭头函数 和 匿名函数
作为一门现代语言，JavaScript中还有别的函数形式，比如说箭头函数和匿名函数。这比较类似于Java/kotlin中的Lambda表达式和匿名函数，不同之处
在于JavaScript用`=>`符号来定义箭头:
```javascript
// 箭头函数
let hello = (name) => {
    console.log("how are you, ${name}?");
}
// 匿名函数
let hello = function(name) {
    console.log("how are you, ${name}?");
}
```
## 函数参数
JavaScript中的函数参数跟其他语言中的函数参数基本一致，但是JavaScript中函数参数可以设置默认值，函数参数也可以是剩余参数。
```javascript
// 函数参数默认值
function hello(name = "world") {
    console.log("how are you, ${name}?");
}
hello();
```
# 事件
事件是发生在你正在编程的系统中的事情——当事件发生时，系统产生（或“触发”）某种信号，并提供一种机制，
当事件发生时，可以自动采取某种行动（即运行一些代码）。事件是在浏览器窗口内触发的，并倾向于附加到驻留在其中的特定项目。
这可能是一个单一的元素，一组元素， 当前标签中加载的 HTML 文档，或整个浏览器窗口。有许多不同类型的事件可以发生。        
例如：    
* 用户选择、点击或将光标悬停在某一元素上。
* 用户在键盘中按下某个按键。
* 用户调整浏览器窗口的大小或者关闭浏览器窗口。
* 网页结束加载。
* 表单提交。
* 视频播放、暂停或结束。
* 发生错误。

如果我们想要捕获这些事件并执行一些代码，那么我们就需要事件处理程序。事件处理程序是当事件被触发时执行的代码。比如说我们可以
给一个按钮添加一个点击事件，当点击按钮时执行一些代码。这点类似于Android中的onClick事件。

## 点击事件
点击事件是最常用的事件之一，点击事件可以绑定到任何元素上。点击事件可以绑定到按钮、链接、图片等任何元素上。
不过在浏览器环境中，点击事件的默认传递跟Android中有点不一样，点击事件的传递是从内到外传递的，且每个元素都会收到点击事件。 
而Android中点击事件的传递是从外向内传递的，且可以阻止事件的传递。        

这种消息传递机制也叫事件冒泡。另外一种事件传递机制叫事件捕获。事件捕获是从外向内传递的事件传递机制。这个
机制就跟Android中点击事件的传递机制相类似了，同样的也可以阻止事件的传递，我们可以调用`stopPropagation()`
方法来阻止事件的传递。