const myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");
const mButton = document.querySelector("button");

function setUserName() {
    if (!localStorage.getItem("name")) {
        const name = prompt("What is your name?");
        localStorage.setItem("name", name);
    }
    return localStorage.getItem("name");
}

function getBrowserName() {
    const mSrc = myImage.src;
    const firefox = "images/firefox.webp";
    const chrome = "images/chrome.webp";
    let browserName = "";
    if (mSrc.includes(firefox)) {
        myImage.setAttribute("src", chrome);
        browserName = "Chrome"
    } else {
        myImage.setAttribute("src", firefox);
        browserName = "Firefox";
    }
    return browserName;
}

function updateHeadingContent(browserName, storedName) {
    myHeading.textContent = `${browserName} is Cool, ${storedName} !`;
}



myHeading.addEventListener("click", () => {
    alert("Hello World!");
})
myImage.addEventListener("click", () => {
    let browserName = getBrowserName();
    let storedName = setUserName();
    updateHeadingContent(browserName, storedName);
})
updateHeadingContent(getBrowserName(), setUserName());



