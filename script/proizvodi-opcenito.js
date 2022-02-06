let slikeZaZoom;

document.addEventListener('DOMContentLoaded', function() {
    slikeZaZoom = document.getElementsByClassName('mala-slika');
    console.log(slikeZaZoom);
    for (let i = 0; i < slikeZaZoom.length; i++) {
        slikeZaZoom[i].children[0].addEventListener('click', zoomSlike);
    }
});

function zoomSlike(event) {

    var img = event.target.parentElement;
    style = img.currentStyle || window.getComputedStyle(img, false),
    bi = style.backgroundImage.slice(4, -1);
    console.log(bi);
    let index = bi.indexOf('/img');
    console.log(bi.substr(index));

    let zoomedImage = document.getElementById('zoomed-image');
    zoomedImage.children[0].src = bi.substring(1, bi.lastIndexOf('"'));
    zoomedImage.style.display = 'block';
}

function hideZoom() {
    document.getElementById('zoomed-image').style.display = 'none';
}