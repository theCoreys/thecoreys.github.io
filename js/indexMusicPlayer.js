var audio = new Audio('Multimedia/sound/10th_Anniversary.mp3');
var on = "dist/images/sound/on.svg";
var off = "dist/images/sound/off.svg";
document.addEventListener("DOMContentLoaded", function () {
    var fadeTarget = document.querySelector('.popup');

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

    // Play music or not
    let speaker = document.querySelector('.speaker');
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains("popup-inner")) {
            speaker.setAttribute('src', on);
            audio.play();
        }
        fadeTarget.style.display = "none";
    });

    speaker.addEventListener('click', function () {
        if (audio.paused) {
            speaker.setAttribute('src', on);
            audio.play();
        } else {
            speaker.setAttribute('src', off);
            audio.pause();
        }
    })


    setInterval(function () {
        fadeOutEffect();
    }, 1500);

    setInterval(function () {
        fadeTarget.style.display = "none";
    }, 3600);
});