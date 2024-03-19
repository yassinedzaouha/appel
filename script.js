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