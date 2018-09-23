
let burger = document.getElementById('hamburger');
burger.addEventListener('click', function () {
    console.log('Time to add the .open class');
    toggleFiltering();
})

const menu = document.getElementById("menubar");
function toggleFiltering() {
    //If open close it, if closed open it.
    if(menu.classList.contains('open')){
        menu.classList.remove('open');
    }else{
        menu.classList.add('open');
    }
}

const empty = document.querySelector("#video-container");
empty.addEventListener('click', function () {
    menu.classList.remove('open');
})