function imageSelector_JSMain() {
    const displayedImage = document.querySelector('.displayed-img');
    const thumbBar = document.querySelector('.thumb-bar');

    const btn = document.querySelector('button');
    const overlay = document.querySelector('.overlay');

    /* Declaring the array of image filenames */
    const imagePaths = [
        "../images/pic1.jpg",
        "../images/pic2.jpg",
        "../images/pic3.jpg",
        "../images/pic4.jpg",
        "../images/pic5.jpg"
    ]
    /* Declaring the alternative text for each image file */

    /* Looping through images */
    for (const imgPath of imagePaths) {
        const newImage = document.createElement('img');
        newImage.setAttribute('src', imgPath);
        thumbBar.appendChild(newImage);
    }

    thumbBar.addEventListener('click', (event) => {
        const imgSrc = event.target.getAttribute('src');
        if (imgSrc) {
            displayedImage.setAttribute('src', imgSrc);
        }
    })
    /* Wiring up the Darken/Lighten button */
    btn.addEventListener("click", (event) => {
        const currentClass = btn.getAttribute('class');
        const targetClass = currentClass === 'dark' ? 'light' : 'dark';
        const targetColor = currentClass === 'dark' ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0)';
        btn.setAttribute('class', targetClass);
        btn.textContent = targetClass === 'dark' ? 'Darken' : 'Lighten';
        overlay.style.backgroundColor = targetColor;
    })
}

imageSelector_JSMain();

