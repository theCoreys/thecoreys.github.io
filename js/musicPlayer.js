var fadeTarget = document.querySelector('.popup');
var audio = new Audio('Multimedia/sound/10th_Anniversary.mp3');

// Play music or not
document.addEventListener('click', function (e) {
    if (e.target.classList.contains("popup-inner")) {
        console.log("Close modal and play music");
        audio.play();
    }
    fadeTarget.style.display = "none";
    e.preventDefault();
});

let speaker = document.getElementById('speaker');
speaker.addEventListener('click', function () {
    if (audio.paused) {
        speaker.setAttribute('src', "Multimedia/sound/on.svg");
        audio.play();
    } else {
        speaker.setAttribute('src', "Multimedia/sound/off.svg");
        audio.pause();
    }
})

// Fade out music prompt after a while
function fadeOutEffect() {
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}

setInterval(function () {
    fadeOutEffect();
}, 100);

setInterval(function () {
    fadeTarget.style.display = "none";
}, 5000);