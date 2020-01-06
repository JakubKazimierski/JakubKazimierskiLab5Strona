// JavaScript source code
//method to dispaly hours minutes and seconds
function showTime() {
    var date = new Date();//variable of date
    var h = date.getHours();//get hours
    var m = date.getMinutes();//get minutes
    var s = date.getSeconds();//get seconds

    h = (h < 10) ? "0" + h : h;//display time in format HH:MM:SS
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    //display variabless
    var time = h + ":" + m + ":" + s;

    //reference to div by ID
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    //timeout method
    setTimeout(showTime, 1000);
}

//call method
showTime();