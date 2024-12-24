# HTML CSS入门

# 基础的Html标签
一个最基础的HTML标签如下表示:
```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>我的测试站点</title>
  </head>
  <body>
    <p>这是我的页面</p>
  </body>
</html>
```
其中，`<!doctype html>`是一个声明，表示这是一个html文档，这是一个历史遗留问题，我们声明了就行。   
接着是`html标签`，其代表着页面的根目录，html标签中又包含两个最基本的子标签：`head`标签和`body`标签
其中`<head>`标签代表存在于页面中但不展示出来的东西，比如：你想在搜索结果中出现的关键字和页面描述、CSS 样式、字符集声明等等。
相对的，`<body>`标签代表将会在页面上显示的内容。接下来是`<meta>`标签，这个元素代表了不能由其他 HTML 元相关元素表示的元数据，
比如 `<base>、<link>、<script>、<style> 或 <title>`。charset 属性将你的文档的字符集设置为 UTF-8，其中包括绝大多数人类书
面语言的大多数字符。

# 基本标签

## Heading（标题）
一般用来指定每一章节的标题，用`<h>`标签来显示，html支持六级标题，所以最多可以从`<h1>`到`<h6>`。
## Paragraph（段落）
用`<p>`标签来指定段落。

## 列表和列表项
列表可以分为有序列表（ordered list）和无序列表（unordered list）,显而易见，前者是有序的，后者是无序的。

可以通过缩写来记忆，`<ol>`标签是有序列表，而`<ul>`标签是无序列表。至于列表里的列表项，我们用`<li>` 即`list ltem`来指定。
代码产生的效果如下：
```
<ol>
    <li>item1</li>
    <li>item2</li>
</ol>
<ul>
    <li>item1</li>
    <li>item2</li>
</ul>
```
具体效果：
<ol>
    <li>item1</li>
    <li>item2</li>
</ol>
<ul>
    <li>item1</li>
    <li>item2</li>
</ul>

## Anchor（锚点）
通过锚点标签，我们可以实现一些跳转的功能：
```html
<a href="https://www.mozilla.org/zh-CN/about/manifesto/">FireFox</a>
```
该代码实现的效果就是：
<a href="https://www.mozilla.org/zh-CN/about/manifesto/">FireFox</a>

# css样式表
在html中，我们可以通过css样式表来指定页面的样式，通常在head标签中指定：
```html
<link rel="stylesheet" href="style.css" />
```
这样就可以加载一个css样式表了

# 选择器
选择器是css样式表的核心部分，它决定了样式表中的样式会作用到哪些元素上。最简单的，我们可以选择一个
类别的标签：
```css
p {
    color: red;
}
```
这段代码的意思就是选择了p标签，然后将花括号内的样式应用到p标签上。

除此之外，我们还可以选择类名，具体来说，我们可以在html中为标签指定一个类名：
```html
<p class="red">这是一个段落</p>
```
然后我们就可以在css中选择这个类:
```css
.red {
    color: red;
}
```
使用.号，我们可以指定类名。                 
我们还可以混合使用这两种方式，即同时指定标签名和类名，这样只有当同时符合标签名和类名时，样式才会生效：
```css
p.red {
    color: red;
}
```

在这里总结一下选择器的种类：
1. 标签选择器：选定某一个标签
2. 类选择器：选定某一个类
3. ID选择器：选定某一个ID
4. 标签属性选择器：选定拥有某个属性的标签
5. 伪类和伪元素选择器：选定某个状态下的标签或者某个标签的某个部分
6. 关系选择器：选定某个标签的子标签或者父标签

# 盒子模型

在css中，一般有两种类型的盒子：块级盒子（block box）和行内盒子（inline box）。类型指的是盒子在页面流中的行为方式以及与页面上
其他盒子的关系。 

CSS盒子模型就是用一个矩形模型来描述页面中元素的各个部分，就如同在Android里一样，有content内容区域，padding内边距，border边框，margin外边距。
我们可以在浏览器的调试模式里看到这些区域：   
![img.png](img.png)

## 标准的CSS盒子模型 和 替代盒子模型
在标准盒模型中，如果在盒子上设置了width和height属性，那么width和height属性只指定了content区域的宽和高,整个盒子的大小除了
content区域的大小外还要加上padding和border的大小（不算margin，感觉和Android里一致，margin是给父布局使用的）。

而在替代盒模型中，width和height属性指定了整个盒子的大小，包括content区域、padding区域和border区域，要对某个元素使用替代盒模型，
只需要在css中设置box-sizing属性为border-box即可：
```css
.box {
    box-sizing: border-box;
}
```

盒子又有内部显示（inner display type）和外部显示（outer display type）两种类型。
## 外部显示类型
外部显示类型决定了元素在其父元素中的表现方式。 

一个拥有 block 外部显示类型的盒子会表现出以下行为：
* 盒子会产生换行。
* width 和 height 属性可以发挥作用。
* 内边距、外边距和边框会将其他元素从当前盒子周围“推开”。
* 如果未指定 width，方框将沿行向扩展，以填充其容器中的可用空间。在大多数情况下，盒子会变得与其容器一样宽，占据可用空间的 100%。
某些 HTML 元素，如 `<h1> 和 <p>`，默认使用 block 作为外部显示类型。

一个拥有 inline 外部显示类型的盒子会表现出以下行为：

* 盒子不会产生换行。
* width 和 height 属性将不起作用。
* 垂直方向的内边距、外边距以及边框会被应用但是不会把其他处于 inline 状态的盒子推开。
* 水平方向的内边距、外边距以及边框会被应用且会把其他处于 inline 状态的盒子推开。
某些 HTML 元素，如 `<a>、 <span>、 <em> 以及 <strong>`，默认使用 inline 作为外部显示类型。

## 内部显示类型

内部显示类型决定了元素内部子元素的布局方式。

