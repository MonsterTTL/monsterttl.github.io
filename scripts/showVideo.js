function showVideo_mainJs() {
    const btnPlayVideo = document.getElementById('video_play');
    const box = document.querySelector('.hidden');
    const video = document.querySelector('video');

    btnPlayVideo.addEventListener('click', () => {
        console.log('btnPlayVideo');
        box.classList.remove('hidden');
    });
    video.addEventListener('click', () => {
        console.log('video');
        if (video.paused || video.ended) {
            video.play();
        } else {
            video.pause();
        }
    });
    box.addEventListener('click', () => {
        console.log('box');
        box.classList.add('hidden');
    });

    function random(number) {
        return Math.floor(Math.random() * number);
    }

    function bgChange() {
        const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        return rndCol;
    }

    const container = document.querySelector("#container");

    container.addEventListener("click", (event) => {
        event.target.style.backgroundColor = bgChange();
    });
}

showVideo_mainJs();