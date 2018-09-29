
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
    document.addEventListener('click', function (e) {
        let speaker = document.querySelector('.speaker');
        if (e.target.classList.contains("popup-inner")) {
            speaker.setAttribute('src', "dist/images/sound/on.svg");
            audio.play();
        }
        fadeTarget.style.display = "none";
    }); 

    setInterval(function () {
        fadeOutEffect();
    }, 1500);

    setInterval(function () {
        fadeTarget.style.display = "none";
    }, 3600);
});