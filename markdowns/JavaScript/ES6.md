# ES6
ES6是JavaScript语言标准的第六个版本，于2015年6月正式发布。ES6引入了许多新的语法特性，
如箭头函数、类、模块、模板字符串、解构赋值等。

# 声明变量
在ES6之前，我们使用var关键字声明变量，但在ES6中引入了let和const关键字来声明变量。
与var关键字不同，let和const关键字声明的变量具有块级作用域,即只在当前的花括号内有效。       

如果是对于嵌套的块级作用域，let和const关键字声明的变量也具有块级作用域，子级作用域可以访问父级作用域中的变量，
但父级作用域无法访问子级作用域中的变量，且若是重复定义（同一个作用域里不允许重复定义），子级作用域会覆盖
父级作用域中的变量。    

## 不存在变量提升
在ES6之前，var关键字声明的变量会存在变量提升，即变量可以在声明之前使用，但在ES6中，let和const关键字声明的变量
不存在变量提升，即变量只能在声明后使用:
```javascript
{
    console.log(a);
    var a = 10;
    //ok
}

{
    console.log(b);
    let b = 10;
    //error
}
```

## 解构赋值
解构赋值是ES6中引入的一种语法糖，它允许我们从数组或对象中提取值并赋给变量。跟Kotlin中的解构赋值类似，
不同的是JS中的解构更加灵活。JS中的解构语法使用花括号{}来定义解构对象，使用方括号[]来定义解构数组:
```javascript
const obj = {
    name: "chushen",
    age: 18
}

const {name,age} = obj;
const [a,b,c] = [1,2,3];
```
实际上还有别的解构赋值语法糖，比如我们可以为找不到匹配的变量定义默认参数。

# Symbol
Symbol是ES6中引入的一种新的数据类型，它表示独一无二的值。Symbol值通过Symbol函数生成，
Symbol函数可以接受一个字符串作为参数，表示对Symbol的描述，但该参数只是对Symbol的描述，
并不影响Symbol的唯一性。     
                                                             
引入Symbol的原因是为了避免命名冲突和防止属性被覆盖，因为原来的属性名都是字符串，
如果两个属性名相同，那么后面的属性会覆盖前面的属性。

# 模块
ES6引入了模块的概念，允许将代码分割成多个模块，每个模块有自己的作用域，避免变量冲突。
ES6的模块自动采用严格模式，严格模式主要有以下限制:
1. 变量必须声明后再使用
2. 函数的参数不能有同名属性，否则报错
3. 不能使用with语句
4. 不能对只读属性赋值，否则报错
5. 不能使用前缀0表示八进制数，否则报错
6. 不能删除不可删除的属性，否则报错
7. 不能删除变量delete prop，会报错，只能删除属性delete global[prop]
8. eval不会在它的外层作用域引入变量
9. eval和arguments不能被重新赋值 
10. arguments不会自动反映函数参数的变化 
11. 不能使用arguments.callee 
12. 不能使用arguments.caller 
13. 禁止this指向全局对象 
14. 不能使用fn.caller和fn.arguments获取函数调用的堆栈 
15. 增加了保留字（比如protected、static和interface）

ES6中的模块主要由两种命令构成：export和import。export命令用于规定模块的对外接口，
import命令用于输入其他模块提供的功能。一旦js文件里出现了这些命令，那么这个文件就会被视作模块。

## export命令
export命令用于规定模块的对外接口，这里注意对外导出的是接口，而不是一个值或者函数，所以我们
需要在export命令后边跟一个花括号{}，然后在花括号里定义需要导出的变量或函数：
```javascript
function func() {
    
}
export {func as outer};
```
这里还用了as关键字来给函数起了一个别名，这样我们在别的地方导入这个模块的时候就可以使用别名来导入这个函数了。
export语句输出的接口，与其对应的值是 动态绑定关系，即通过该接口，可以取到模块内部实时的值，所以即使
模块内部发生变化，export输出的接口也可以拿到最新的值。

最后，export命令可以出现在模块的任何位置，只要处于模块顶层就可以。 如果处于块级作用域内，就会
报错。

## import命令
import命令用于导入其他模块提供的功能。import命令接受一对大括号，里面指定要从其他模块导入的变量名。
import命令具有提升效果，会提升到整个模块的头部，首先执行:
```javascript
import {yell} from "./dialogUtils.js";
yell("hello");
```
这样就把yell函数导入到了当前模块中，导入完毕之后就可以直接使用了，在这里我们同样可以使用
as关键字来给导入的变量起一个别名。需要说明的是导入的变量是只读的，不能修改导入的变量的值，即
我们不能改写接口。

除此之外，我们还可以整体加载一个模块，使用`*`即可：
```javascript
import * as dialog from "./dialogUtils.js";
dialog.yell("hello");
```

## 动态模块加载
ES6提供的模块加载本身是静态的，即在编译阶段就会确定模块的依赖关系，而动态模块加载则是在运行时确定模块的依赖关系。
通过import()函数可以实现动态模块加载，该函数返回一个Promise对象，我们可以向操作Promise对象一样操作这个Promise对象：
```javascript
import("./dialogUtils.js").then((dialog) => {
    dialog.yell("hello");
});
```
或者我们还可以结合await关键字来使用：
```javascript
const dialog = await import("./dialogUtils.js");
dialog.yell("hello");
```

## 模块的加载实现
默认情况下，浏览器是同步加载 JavaScript 脚本，即渲染引擎遇到<script>标签就会停下来，等到执行完脚本，再继续向下渲染。如果是
外部脚本，还必须加入脚本下载的时间。不过，浏览器提供了异步加载脚本的方式:
```html
<script src="path/to/myModule.js" defer></script>
<script src="path/to/myModule.js" async></script>
```
比如这里用到的defer和async属性，这两者的区别在于脚本加载执行的时机不同，defer要等到整个页面在内存中正常渲染结束
（DOM 结构完全生成，以及其他脚本执行完成），才会执行；async一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。

我们加载模块也是使用script标签，但是要注意的是，script标签的type属性要设置为module，表示这是一个模块，浏览器会按照模块的规则来加载模块。
具体来说，浏览器对于带有type="module"的<script>，都是**异步加载**，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本，
等同于默认打开了<script>标签的defer属性，不过我们仍然可以手动设置async属性，表示加载完毕之后立即执行。

## 模块加载的具体原理（todo）

# Generator函数

# async函数




