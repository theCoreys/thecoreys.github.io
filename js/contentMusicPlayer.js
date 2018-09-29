
var path = window.location.pathname;
var page = path.split("/").pop();

if(page!="index.html"){
    var audio = new Audio('../Multimedia/sound/10th_Anniversary.mp3');
    var on = "../dist/images/sound/on.svg";
    var off = "../dist/images/sound/off.svg";
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