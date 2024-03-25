const img = document.querySelector(".img");
const cont = document.querySelector(".container");
const menu = document.querySelector(".div_menu");
const svg = document.querySelector(".svg");
const container = document.querySelector(".container");
const menu_icon = document.querySelector(".menu_icon");


// change the pictur of phone and the background and the background of menu
function phones_colors(phone , color , c) {
    img.src = phone;
    cont.style.background = color;
    menu.style.background = c;
}

// zoom in of the big pictur when the click in icons 
function zoomIn() {
    img.classList.add('zoomed-in');
    setTimeout(() => {img.classList.remove('zoomed-in');}, 800);
}

// open the menu
function menu_open(){
    menu.style.display = "block";
    setTimeout(() => {
        menu.style.width = "50%";
        menu_icon.style.transform = "translateY(0px)";
    }, 0);
    container.style.filter = "blur(3px)";
}

function menu_close() {
    menu.style.width = "0%";
    container.style.filter = "blur(0px)";
    menu_icon.style.transform = "translateY(-200px)";
    setTimeout(() => {menu.style.display = "none";}, 900);
}

svg.addEventListener('click', function(event) {
    event.stopPropagation();
});
container.addEventListener('click',menu_close());