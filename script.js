function phones(phone) {
    document.querySelector('.img').src = phone;
}

function zoomIn() {
    document.querySelector('.img').classList.add('zoomed-in');
    setTimeout(zoomOut, 1500);
    function zoomOut() {
        document.querySelector('.img').classList.remove('zoomed-in');
    }
}

function colors(color) {
    document.querySelector('.container').style.background = color;
}

function autoZoomOut() {
    setTimeout(zoomOut, 2000);
}

window.onload = autoZoomOut;
