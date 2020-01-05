// JavaScript source code
var img = document.getElementById('img');

var images = ['../images/phone.png', '../images/mail.png', '../images/social.jpg'];

var x = 0;

function slide() {
    if (x < images.length) {
        x = x + 1;
    }
    else {
        x = 1;
    }
    img.innerHTML = "<img src=" + images[x - 1] + ">";

}

setInterval(slide, 2000);