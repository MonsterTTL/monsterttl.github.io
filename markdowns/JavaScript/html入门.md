# HTML 入门

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