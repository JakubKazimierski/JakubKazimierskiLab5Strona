// JavaScript source code
//variable for image displaying on slideshow
var img = document.getElementById('img');

//table of path to images
var images = ['../images/phone.png', '../images/mail.png', '../images/social.png'];

//variable for counting slides
var x = 0;

//method for displaying slides
function slide() {
    if (x < images.length) {//till x is in range of images length
        x = x + 1;//increment
    }
    else {//else set x=1
        x = 1;
    }
    img.innerHTML = "<img src=" + images[x - 1] + ">"; //display specific image

}
//call method
setInterval(slide, 2000);