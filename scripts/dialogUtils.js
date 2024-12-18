export const DIALOG_UTILS_INSTANCE = {
    displayMsgBox : function displayMsgBox(msgContent) {
        // 选择 HTML 元素作为消息框的父元素
        const html = document.querySelector("html");
        // 创建一个新的 div 元素作为消息框
        const panel = document.createElement("div");
        // 设置消息框的 CSS 类名
        panel.setAttribute("class", "msgBox");
        // 将消息框添加到 HTML 元素中
        html.appendChild(panel);

        // 创建一个 p 元素用于显示消息内容
        const msg = document.createElement("p");
        // 设置 p 元素的文本内容为传入的消息内容
        msg.textContent = msgContent;
        // 将消息内容添加到消息框中
        panel.appendChild(msg);

        // 创建一个按钮用于关闭消息框
        const closeBtn = document.createElement("button");
        // 设置按钮的文本内容为 "X"
        closeBtn.textContent = "X";
        // 将关闭按钮添加到消息框中
        panel.appendChild(closeBtn);

        // 为关闭按钮添加点击事件监听器，点击时移除消息框
        closeBtn.addEventListener("click", () => {
            panel.parentNode.removeChild(panel);
        })
    },
}

