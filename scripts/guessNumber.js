import {displayMsgBox} from "./dialogUtils";
function guessNumber_JsMain() {
    //生成最终的答案
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    //绑定元素
    const guesses = document.querySelector(".guesses");
    const lastResult = document.querySelector(".lastRes");
    const lowOrHi = document.querySelector(".largeOrSmall");

    const guessSubmit = document.querySelector(".submitGuess");
    const guessField = document.querySelector(".guessField");

    let guessCount = 1;
    let resetButton;

    function checkGuess() {
        const userGuess = Number(guessField.value)
        if (guessCount === 1) {
            guesses.textContent = "之前的猜测: ";
        }
        guesses.textContent += `${userGuess} `;
        //判定逻辑
        if (userGuess === randomNumber) {
            //猜中了
            lastResult.textContent = "恭喜你猜对了！";
            lastResult.style.backgroundColor = "green";
            lowOrHi.textContent = "";
            setGameOver();
            displayMsgBox(lastResult.textContent);
        } else {
            if (guessCount >= 10) {
                lastResult.textContent = "游戏结束！！";
                lowOrHi.textContent = "";
                setGameOver();
                displayMsgBox(lastResult.textContent);
                return;
            }
            lastResult.textContent = "错误!";
            lastResult.style.backgroundColor = "red";
            if (userGuess < randomNumber) {
                lowOrHi.textContent = "猜的太小了!";
            } else if (userGuess > randomNumber) {
                lowOrHi.textContent = "猜的太大了!";
            }
        }

        guessCount++;
        guessField.value = "";
        guessField.focus();
    }

    function setGameOver() {
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement("button");
        resetButton.textContent = "Start new game";
        document.body.append(resetButton);
        resetButton.addEventListener("click", resetGame);
    }


    function resetGame() {
        guessCount = 1;

        const resetParas = document.querySelectorAll(".resultParas p");
        for (const resetPara of resetParas) {
            resetPara.textContent = "";
        }

        resetButton.parentNode.removeChild(resetButton);

        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = "";
        guessField.focus();

        lastResult.style.backgroundColor = "white";

        randomNumber = Math.floor(Math.random() * 100) + 1;
    }


//添加案件监听，每次按下都触发检测
    guessSubmit.addEventListener("click",checkGuess);
}
//封装--避免全局变量污染
guessNumber_JsMain();


