# HTML 入门

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