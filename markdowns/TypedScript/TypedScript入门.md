# TypedScript入门

# 对象类型

## 类型推导

## 任意类型

## 联合类型

# 接口
TypedScript 中的接口还和 Java 中的不太一样，TS中的接口要求实现的对象中的属性必须
和接口中声明的属性完全一致，不能多也不能少。比如:
```typescript
interface IPerson {
    name: string;
    age: number;
};

let chushen: IPerson = {
    name: 'chushen',
    age: 18,
};

console.log(chushen);
```
同样也可以在接口里定义一些方法:
```typescript
interface IPerson {
    readonly name: string;
    readonly age: number;
    gender?: string;
    stop(): string;
}
```
这样就定义了一个stop函数，这个函数不接受参数，返回值是string类型，总的来说跟别的语言差不多。

## 可选属性
可选属性指的是接口中可以缺省的属性,用？表示：
```typescript
interface IPerson {
    name: string;
    age?: number;
};
let chushen: IPerson = {
    name: 'chushen',
};
console.log(chushen);
```
## 任意属性
如果希望一个接口允许有任意的属性，就系要用到任意属性了，定义的格式是这样的.      
`[属性名: 属性名的类型]: 属性值的类型`,比如说：
```typescript
interface IPerson {
    name: string;
    age: number;
    gender?: string;
    [config: string]: any;
}
```
这里我们在最后一行就定义了任意属性，这个属性的属性名是string类型，具体的值是any类型。还需要注意
一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集。这其实相当于一种约束，
当一个属性的属性名是string类型，那么属性值只能是any类型的子集。
## 只读属性
只读属性指的是属性只能在创建的时候赋值一次，之后的修改是无效的。那么可以用readonly关键字来定义只读属性
比如说:
```typescript
interface IPerson {
    readonly name: string;
    readonly age: number;
    gender?: string;
}
```
这里的name和age就是只读属性了，我们后续对它的修改都会报错。

## 函数类型
这一段跟Kotlin中定义lambda表达式的类型很像，我们可以通过箭头函数的形式来定义,当然也可以直接定义：
```typescript
interface IAdd {
    plus: (x: number, y: number) => number;
    plus2(x: number, y: number): number;
}
```

我们还可以指定函数参数是可选的：
```typescript
interface IAdd {
    plus(x: number, y?: number): number;
}
```
这里我们就定义了y参数是可选的。

# 声明文件
当使用第三方库时，我们需要引用它的声明文件，才能获得对应的代码补全、接口提示等功能。


