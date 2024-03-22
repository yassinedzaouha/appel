let img = document.querySelector(".img");
let cont = document.querySelector(".container");

function phones(phone) {
    img.src = phone;
}

function colors(color) {
    cont.style.background = color;
}

function zoomIn() {
    img.classList.add('zoomed-in');

    setTimeout(zoomOut, 800);

    function zoomOut() {
    img.classList.remove('zoomed-in');
    }

}

const menu = document.querySelector(".div_menu");
const menu_icon = document.querySelector(".svg");

function nav(){
    menu.style.display = "block";
    setTimeout(() => {
        menu_icon.style.color = "transparent";
        menu.style.width = "50%";
        menu.style.transition = "1s";
    }, 0);
    return true ;
}

function menu_close() {
    console.log('Menu close function called.');
    const icon = document.querySelector(".aside_icon");
    menu.style.width = "0%";
    setTimeout(() => {menu.style.display = "none";}, 900);
}

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('svg')) {
        return 0;
    }
    menu_close();
});

