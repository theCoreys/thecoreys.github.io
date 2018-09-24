document.addEventListener("DOMContentLoaded", function () {
    let burger = document.getElementById('hamburger');
    burger.addEventListener('click', function () {
        toggleFiltering();
    })

    const menu = document.getElementById("menubar");

    function toggleFiltering() {
        //If open close it, if closed open it.
        if (!menu.classList.contains('open')) {
            menu.classList.add('open');
        }
    }

    const empty = document.getElementById("close-burger");
    empty.addEventListener('click', function () {
        menu.classList.remove('open');
    })
});