// CONTENT INIT

for (x=0;x<20;x++) {
    document.getElementById("main").innerHTML += "even more text, and keep scrolling<br>";
}


// EVENT HANDLER

document.getElementById("main").onscroll = changeBg;


// FUNCTIONS

function changeBg() {
    if (document.getElementById("main").scrollTop > 50) {
        document.getElementById("box").style.rotate = "0deg";
    } else {
        document.getElementById("box").style.rotate = "40deg";
    }
}