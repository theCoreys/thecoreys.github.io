var path = window.location.pathname;
var page = path.split("/").pop();
var audio;
var on;
var off;
if(page=="index.html"){
    audio = new Audio('Multimedia/sound/10th_Anniversary.mp3');
    on = "Multimedia/sound/on.svg";
    off = "Multimedia/sound/off.svg";
}else{
    audio = new Audio('../Multimedia/sound/10th_Anniversary.mp3');
    on = "../Multimedia/sound/on.svg";
    off = "../Multimedia/sound/off.svg";
}

document.addEventListener("DOMContentLoaded", function () {
    
    let speaker = document.querySelector('.speaker');
    speaker.addEventListener('click', function () {
        if (audio.paused) {
            speaker.setAttribute('src', on);
            audio.play();
        } else {
            speaker.setAttribute('src', off);
            audio.pause();
        }
    })
});