//posting variables value by references to divs
let sliderImages = document.querySelectorAll('.slide'),
 arrowLeft = document.querySelector('#arrow-left'),
 arrowRight = document.querySelector('#arrow-right'),
 current = 0;

//method to reset slides
function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = 'none';
    }
}

//method to start displaying slides
function startSlide() {
    reset();
    sliderImages[0].style.display = 'block';
    
}

//method of sliding left
function slideLeft() {
    reset();
    sliderImages[current-1].style.display = 'block';//previous image
    current--;
}

//method of sliding images right
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = 'block';//next image
    current++;
}

//event listener of arrow left
arrowLeft.addEventListener('click', function () {
    if (current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
})

//event listener of arrow right
arrowRight.addEventListener('click', function () {
    if (current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
})

//call method of displaying image
startSlide();
