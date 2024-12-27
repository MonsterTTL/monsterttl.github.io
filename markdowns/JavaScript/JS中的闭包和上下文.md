# 变量提升 和 函数提升
这里要提到一个**提升**的概念，即在JS中，在解析代码之前还有一个预处理的过程，这个过程中会把部分变量和函数声明提前到代码的最顶部，
会在其他所有代码之前执行。虽然当我们按照规范（严格模式或者TS等良好的编码习惯）时并不会因为提升而发生意料之外的情况，不过作为原生
JS中的特性，我们还是需要了解一下。

## 函数提升
还记得在C语言中，我们往往会把函数签名的声明提前都放到文件的最前面，然后实现放在main函数后面吗？这就是因为函数要先声明后使用，而在
JS中，解析器已经帮我们做好了这件事情，所以我们在使用函数的时候不需要提前声明它，解析器会帮我们自动把函数声明提前到代码的最顶部。不过
需要说明的是这种提升只对声明后的函数有效(比如这种形式:`function xxxx()`)，而对于函数表达式(`let fun = function(){}`)则不会有提升效果。


## 变量提升
当我们使用`var`关键字声明变量的时候就会产生变量提升的效果，这带来的效果就是即使我们先使用某个变量然后再声明它也不会报错，
因为变量声明会被提前到代码的最顶部：

```javascript
console.log(nameless);
var nameless = 'hello';
```
这样写是不会报错的，但是会打印出`undefined`，因为虽然声明提前来但是赋值并没有提前，所以在声明复制之前`nameless`的值就是`undefined`了。

这里还有一种情况，那就是我们同时声明了一个变量和一个函数，且他们的名称相同，这个时候只会提升他们的其中之一，并且**函数的提升优先级是高于
变量的提升的**。不过现在我们应该遇不到这种情况了，因为这会在控制台中输出错误提醒我们。

## 建议
总而言之，建议我们还是使用ES6中的`let`和`const`关键字来声明变量和常量，因为这样可以避免变量提升带来的问题。最好的情况是直接使用
TypeScript，它提供的编译阶段检查可以帮助我们避免一些错误。



# 执行期上下文 和 this的指向
所谓执行期上下文，这个函数执行时的环境。在那些面向对象的编程语言中，我们可以把`函数在哪里被定义的类的实例`作为上下文来看，我觉得在
JS中也可以这样类比，不过不同的是JS中类的存在感比较低，常常一个函数被定义在一个object中，可以把他视作是一个匿名类的实例。

比如说我们有这么一个函数:
```javascript
function anchor() {
    let count = 0;
    return {
        add: function () {
            console.log(`add anchor:${this.count++}`)
        },
        remove: function () {
            console.log(`remove anchor${this.count--}`)
        },
        printInfo: function () {
            console.log(`anchor count:${this}`)
        }
    }
}

const anchorInstance = anchor();
anchorInstance.add();
anchorInstance.add();
anchorInstance.printInfo();
```
这个函数会返回一个对象，这个对象有三个方法，分别是增加this的count、减少this的count和打印this的指向。
当我们获得这个对象直接调用add或remove方法时：
```
add anchor:NaN
add anchor:NaN
anchor count:[object Object]
```
可以看到count的值是不正确的，我们更直观一点，直接打印count的值的话可以发现打印出来的是 `undefined` ，虽然我们在anchor函数中定义了count，
但是`this.count`并不会指向它，它指向的是所在对象的count，而所在对象中又没有定义count，所以就打印不出来了。当我们给这个对象加上count属性
后就可以正常打印了:
```javascript
//调用
anchorInstance.count = 0;
anchorInstance.add();
anchorInstance.add();
anchorInstance.printInfo();
//结果：
// add anchor:0
// add anchor:1
// anchor count:[object Object]
```
这里我们再改动一下，把this关键字去掉结果发现也能正确打印信息。它正确使用到了anchor函数的局部变量，这实际上就产生了函数闭包。第二个原因就
是函数的作用域链，在嵌套的函数之中，变量会从内到外逐层寻找它的定义（就近原则），通过这种原则来决定取哪个值。当我们没有指定count的所在时，就会
根据作用域链向外寻找count变量。

除此之外，还需要注意的是关于箭头函数的this指向,匿名函数的this指向的是他的调用者，而箭头函数的this指向的是定义时寻找到的变量。这在
我们设置了原型的时候需要格外注意。

# 函数闭包
所谓闭包的意思就是函数内部的局部变量被外部持有了，类似于JVM中的可达性算法，由于这个变量被外部持有，也就是说正在被外部使用（不考虑内存泄漏）
那系统肯定不能把这个变量销毁，从而延长了函数局部变量的生命。

闭包在JavaScript中也有他的应用场景：
* 数据封装和私有化
* 作为函数工厂
* 保留/追踪 函数的执行信息
* 异步编程中（同步方式写异步）

上面的anchor函数中，我们使用的就是第一个应用场景，我们把count变量封装在了函数内部，外部只能通过return的接口来操作这个变量。     

除此之外我觉得比较有用的就是追踪函数的执行信息了，比如我们可以封装这么一个函数：
```javascript
let SecurityReporter = function() {
    let invokedInfos = [];
    return {
        connectDatabase() {
            const invokeInfo = {
                invokedTime : new Date(),
                invokedMethod : "[connect Database]"
            }
            invokedInfos.push(invokeInfo);
        },
        disconnectDatabase() {
            const invokeInfo = {
                invokedTime : new Date(),
                invokedMethod : "[disconnect Database]"
            }
            invokedInfos.push(invokeInfo);
        },
        reportInfos() {
            console.log(invokedInfos);
        }
    };
}

const securityReporterIns = SecurityReporter();
securityReporterIns.connectDatabase();
securityReporterIns.disconnectDatabase();
securityReporterIns.reportInfos();
```
我们构建了一个类似于埋点上报的系统，当我们调用方法时就会自动把相关信息存储到一个闭包中，方便我们整理和排查日志。


