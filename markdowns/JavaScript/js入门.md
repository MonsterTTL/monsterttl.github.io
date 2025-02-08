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

# 空值合并
空值合并类似于Kotlin中的`?:`运算符，是用来处理返回值是为空或者为定义的情况。
在JS中，如果一个值既不是`null`也不是`undefined`时,我们把这个值称为`已定义的(defined)`。

`??`操作符的作用就是当第一个值为未定义时，返回第二个值的内容，比如：
```javascript
let ans = a ?? b;    
```
如果a为未定义的，就将返回b的值；否则直接返回a的值。

除了使用`??`操作符之外，我们还可以使用`||`和`&&`来进行真值和假值的合并，
在JS中，我们可以使用`||`操作符和`&&`查找列表中的第一个真值和假值。所谓假值，就是：
* false：布尔值 false。
* 0：数字 0。
* ""：空字符串。
* null：表示空值。
* undefined：表示未定义。
* NaN：表示非数字。

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
不过这两者也有区别，箭头函数中this指向是固定的，而匿名函数中this指向是变化的，箭头函数不会创建自己的this，它只会从自己的作用域链
中继承this。而匿名函数中this指向的是调用该函数时的对象。比如说：
```javascript
this.name = "顶级上下文";

const DiffProto = {
    archorFun:  () => {
        console.log(this.name);

    },
    namelessFun:  function() {
        console.log(this.name);
    },
}

obj = {
    name: "obj",
}

Object.setPrototypeOf(obj, DiffProto);
obj.archorFun();
obj.namelessFun();
```
执行后的结果是:
```javascript
顶级上下文
obj
```
可以发现箭头函数的this在定义时就已经确定，而匿名函数的this是在调用时确定的。
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

# 对象
一开始提到过JavaScript中有一种容器类型叫Object，Object类型就是JavaScript中的对象类型。对象类型是JavaScript中
最复杂的一种类型，它包含了属性、方法和构造函数等。我把这种类型理解为增强型的Map类型(当然这两者显然不同)，我们实际上也可以这么用。      
有的时候我们可以把它作为Kotlin中的一个object单例来用，可以在里面封装一些数据和方法，比如说,Kotlin中的单例可以这么用：
```kotlin
object banana {
    val name = "香蕉"
    val price = 5
    fun introduce() {
        println("名称:${name},价格:${price}元")
    }
    fun growUp() {
        println("香蕉长高")
    }
    fun eat() {
        println("吃香蕉")
    }
}
banana.introduce()
banana.growUp()
banana.eat()
```
在JavaScript中我们可以这么用：
```javascript
const banana = {
    name: '香蕉',
    price: 5 ,
    introduce: function () {
        console.log(`名称:${this.name},价格:${(this.price)}元`);
    },
    growUp: ()  => {
        console.log('香蕉长高')
    },
    eat() {
        console.log('吃香蕉')
    }
}

banana.introduce();
banana.growUp();
banana.eat();
```
## 访问对象和拓展对象
访问对象的属性一般有两种方式，一种是点语法，一种是方括号语法。对我而言，点语法更符合我们平时的使用习惯。例如上面的例子，如果我们
想用方括号语法的话就要这么写:
```javascript
banana["introduce"]()
banana["growUp"]()
banana["eat"]()
```
在这里我们也可以看出来，对于JS对象来说，其属性名都是字符串类型。更加神奇的是，我们还可以给对象动态添加属性和方法，类似于Kotlin中的扩展函数。
这里也体现的脚本语言的特点，就是动态性。

## 构造函数
JavaScript中对象也可以有构造函数，构造函数就是用来创建对象的函数，类似于别的语言中类的构造函数。   
我们要做的就是创建一个函数，然后在这个函数中定义一些属性，然后返回这个对象。或者，我们可以使用new关键字来创建对象。  
这和我们在别的语言里创建对象是一样的。 比如：
```javascript
function Banana(price) {
    this.name = '香蕉',
    this.price = price ,
    this.introduce = function () {
        console.log(`名称:${this.name},价格:${(this.price)}元`);
    },
    this.growUp = ()  => {
        console.log('香蕉长高')
    }
}
const b = new Banana(10);
b.introduce();
b.growUp();
```
需要注意的是我们需要用this关键字来绑定属性，否则这些属性将会成为全局变量。

# 对象原型
这点类似于Java中的类继承。JavaScript中对象也有原型，原型就是对象的模板。我们访问对象中的属性时，
如果对象中没有这个属性，那么它将会去原型中查找这个属性，如果原型中也没有这个属性，那么它将会继续去原型的原型中查找这个属性，
直到找到这个属性或者找不到这个属性为止。这叫做对象的原型链。   

这个原型链实际上非常像其他语言中的类继承，我们在其他语言上的一些直觉性概念在JavaScript中也会存在，比如面向对象
的封装、继承、多态等。

## 设置原型
一般来说我们会通过构造函数，所有函数都有prototype属性，这个属性就是函数的原型，当我们把一个函数作为构造函数使用时，这个函数
的prototype属性将会成为这个构造函数的原型，这样构建出来的对象将会拥有这个原型上的属性和方法。比如说：
```javascript
function Banana(price) {
    this.name = '香蕉',
        this.price = price ,
        this.introduce = function () {
            console.log(`名称:${this.name},价格:${(this.price)}元`);
        },
        this.growUp = ()  => {
            console.log('香蕉长高')
        }
}

const b = new Banana(10);
b.introduce();
b.growUp();

const fruitPrototype = {
    sayhello () {
        console.log(`hello,${this.name}`);
    }
}

Object.assign(Banana.prototype,fruitPrototype);
console.log(Object.getPrototypeOf(b));

b.sayhello();
```
我们通过assign方法把fruitPrototype对象上的属性和方法赋值给Banana的prototype对象上， 这样b对象就可以访问到fruitPrototype对象
上的属性和方法了。我们经常看到这种模式，即方法是在原型上定义的，但数据属性是在构造函数中定义的。这是因为方法通常对我们创建的每个对象都是一样的，
而我们通常希望每个对象的数据属性都有自己的值（就像这里每个人都有不同的名字）。 

比如我们可以为两个对象的构造函数指定同一个原型，这样能实现一个类似于继承或者是实现接口的功能:
```javascript
function Banana(price) {
    this.name = '香蕉',
    this.price = price
}

function Apple(price) {
    this.name = '苹果',
    this.price = price
}

const fruitPrototype = {
    sayhello () {
        console.log(`hello,${this.name}`);
    },
    introduce: function () {
        console.log(`名称:${this.name},价格:${(this.price)}元`);
    },
    growUp: function () {
        console.log(`${this.name}长高`)
    }
}

Object.assign(Banana.prototype,fruitPrototype);
Object.assign(Apple.prototype,fruitPrototype);

const a = new Apple(5);
const b = new Banana(10);

a.introduce();
a.growUp();
b.introduce();
b.growUp();

```
# 面向对象

## 类的定义
Js中类的定义类似于Java：
```javascript
class Fruit {
    name = "";

    constructor(name) {
        this.name = name;
    }

    info() {
        console.log(`this fruit is:${this.name}`);
    }
}
```
简而言之用class关键字定义一个类，然后定义一个构造函数（可选），构造函数中定义一些属性，然后定义一些方法。在底层，引擎还是通过原型链的方式
来实现的，只不过这种构建类的方法更方便快捷。

## 类的继承
类的继承使用extend关键字，总而言之跟Java中的也差不多,我们可以为子类添加一些属性和方法，然后调用父类的构造函数，也可以
覆盖父类的方法，以此达到多态的效果。

```javascript
class Fruit {
    name = "";
    color = "";

    constructor(name=this.name) {
        this.name = name;
        console.log("Fruit constructor");
    }

    info() {
        console.log(`this fruit is:${this.name}`);
    }
}

class Apple extends Fruit {
    name = "apple";
    color = "red";

    constructor() {
        super();
        console.log("Apple constructor");
    }


    info() {
        console.log(`this fruit is:${this.name}, color is ${this.color}`);
    }
}

const apple = new Apple();
apple.info();
```

## 封装
所谓封装就是隐藏对象的属性和方法，只暴露一些公共的方法给外部使用。在默认情况下，JavaScript中所有的属性和方法都是公开的，
我们可以直接访问和修改这些属性和方法，如果要声明私有数据就要带上#符号。

```javascript
class Apple extends Fruit {
    name = "apple";
    color = "red";

    #apple_secret = "apple secret";

    constructor() {
        super();
        console.log("Apple constructor");
    }


    info() {
        //super.info();
        console.log(`this fruit is:${this.name}, color is ${this.color}`);
    }
}
```
这里我们就给Apple类添加了一个私有属性#apple_secret,这个属性只能在Apple类中使用，不能在外部使用。如果我们直接访问就会报错:
```
SyntaxError: Private field '#apple_secret' must be declared in an enclosing class
```
声明私有方法也是一样的，我们只需要在方法名前面加上#符号即可。

# 异步编程

## Promise
所谓Promise就是一个对象，这个对象代表了一个异步操作的结果。Promise对象有两个方法：then和catch，then方法用于处理异步操作成功后的结果，
catch方法用于处理异步操作失败后的结果。一个Promise对象有三种状态，分别是：
* pending：正在进行中
* fulfilled：请求成功，之后便后执行then方法
* rejected：请求失败，之后便执行catch方法

通过fetchAPI，我们就可以得到一个Promise对象，这个对象代表了一个异步操作的结果：
```javascript
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
```
除此之外，如果我们要执行的异步操作本身没有什么依赖关系，我们可以用Promise.all()方法同时启动多个异步操作，他将返回一个Promise对象，这个对象
代表所有异步操作的结果，比如说:
```javascript
const promise1 = fetch('https://api.example.com/data1');
const promise2 = fetch('https://api.example.com/data2');
const promise3 = fetch('https://api.example.com/data3');

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.error(error);
    });
```
同理，还有Promise.Any()方法，只要有一个异步操作成功即可;Promise.race()方法，返回第一个完成的结果。

## async/await
顾名思义，使用async/await关键字可以让我们使用同步的方式编写异步代码。当我们给一个方法加上async关键字时，这个方法将会返回一个Promise对象，
这个Promise对象的状态取决于这个方法内部的异步操作的结果，我们就可以使用then方法处理这个Promise对象的结果了。而await关键字则用于等待一个Promise对象
的状态改变，简而言之就是把一个异步操作封装成一个同步操作。

详情可以看ES6中的内容


## Promise构造器
我们还可以构造一个Promise对象，这个对象的状态取决于我们传入的函数的结果。一个Promise的构造方法接受一个函数作为参数，这个函数有两个参数，
resolve和reject，分别用于表示Promise对象的状态改变为成功和失败。比如：
```javascript
const promise = new Promise((resolve,reject) => {
    if (true) {
        resolve('success');
    } else {
        reject('fail');
    }
})
```
需要说明的是，除了reject，我们还可以抛出异常，异常将会被catch捕获，但这两者有一点细微的区别，那就是抛出异常代码会立即停止执行，后面
的代码将不会被执行，而reject则不会：
```javascript
async function asyAlert(message, delay) {
    return new Promise((resolve, reject) => {
        if (delay < 0) {
            throw (new Error('Delay must be non-negative'));
        }
        console.log('continue invoke');
        setTimeout(() => {
            resolve(message);
        }, delay);
    })
}

function test() {
    asyAlert('1', -1).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })


}
test();
```
比如在这里，我们在Promise对象内部抛出了一个异常，那么后面的console将不会被打印出来，而如果我们在Promise对象内部reject了一个异常，那么
后面的console将会被打印出来。

