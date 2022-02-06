let titles = [
    'Ukusne torte i kolači',
    'Upoznajte vlasnike',
    'Pridružite nam se',
    'Kontaktirajte nas direktno'
];

let descriptions = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada consectetur quam quis mattis. Ut nec sagittis diam. Aliquam non mollis nibh. Nam ipsum massa, scelerisque vel facilisis et, mollis ac arcu.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada consectetur quam quis mattis. Ut nec sagittis diam. Aliquam non mollis nibh. Nam ipsum massa, scelerisque vel facilisis et, mollis ac arcu.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada consectetur quam quis mattis. Ut nec sagittis diam. Aliquam non mollis nibh. Nam ipsum massa, scelerisque vel facilisis et, mollis ac arcu.',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada consectetur quam quis mattis. Ut nec sagittis diam. Aliquam non mollis nibh. Nam ipsum massa, scelerisque vel facilisis et, mollis ac arcu.'
];

let buttonsTxt = [
    'POGLEDAJTE NAŠE PROIZVODE',
    'O NAMA',
    'ZAPOŠLJAVANJE',
    'KONTAKT'
];

let links = [
    'stranice/proizvodi-opcenito.html',
    'stranice/o-nama.html',
    'stranice/zaposljavanje.html',
    'stranice/kontakt.html'
];

let images = [
    'img/main-pic-desktop.jpg',
    'img/main-pic2-desktop.jpg',
    'img/main-pic7-desktop.jpg',
    'img/main-pic4-desktop.jpg',
    'img/main-pic-tablet.jpg',
    'img/main-pic2-tablet.jpg',
    'img/main-pic7-tablet.jpg',
    'img/main-pic4-tablet.jpg',
    'img/main-pic-mobile.jpg',
    'img/main-pic2-mobile.jpg',
    'img/main-pic7-mobile.jpg',
    'img/main-pic4-mobile.jpg'
];

let imagesLok = [
    'img/lokacija_01.jpg',
    'img/lokacija_05.jpg',
    'img/lokacija_03.jpg',
    'img/lokacija_08.jpg'
];

let forZoomImages = [
    'img/slatko_04.jpg',
    'img/slatko_02.jpg',
    'img/slatko_17.jpg',
    'img/slano_01.jpg',
    'img/slano_03.jpg',
    'img/slano_05.jpg',
    'img/slano_09.jpg',
    'img/pice_01.jpg',
    'img/pice_02.jpg',
    'img/pice_03.jpg',
    'img/pice_04.jpg',
    'img/lokacija_01.jpg',
    'img/lokacija_05.jpg',
    'img/lokacija_03.jpg',
    'img/lokacija_08.jpg'
];

currentIndex = 0;
currentIndexLok = 0;

let slikeZaZoom;
let slideGrupe;
let mouseDown;
let slideri;

document.addEventListener('DOMContentLoaded', function() {
    slikeZaZoom = document.getElementsByClassName('mala-slika');
    console.log(slikeZaZoom);
    for (let i = 0; i < slikeZaZoom.length; i++) {
        slikeZaZoom[i].children[0].addEventListener('click', zoomSlike);
    }

    slideGrupe = document.getElementsByClassName('mslika-kategorija');
    console.log(slideGrupe);
    for (let i = 0; i < slideGrupe.length; i++) {
        slideGrupe[i].addEventListener('mousemove', sliding, false);
        slideGrupe[i].addEventListener('mousedown', slidingClick, false);
        slideGrupe[i].addEventListener('mouseup', slidingNoClick, false);
        console.log(slideGrupe[i]);
        console.log(slideGrupe[i].parentElement.id);
    }

    slideri = document.getElementsByClassName('linije');
    console.log(slideri);
    for (let i = 0; i < slideri.length; i++) {
        slideri[i].addEventListener('mousemove', slider);
        slideri[i].addEventListener('mousedown', sliderClick);
        slideri[i].addEventListener('mouseup', sliderNoClick);
        console.log(slideri[i]);
        console.log(slideri[i].parentElement.id);
    }

    let circleStyle = document.getElementsByClassName('circles')[0].children[currentIndex].style;
    circleStyle.backgroundColor = 'rgba(211, 211, 211, 0.9)';
    circleStyle.borderRadius = '10px';
    circleStyle = document.getElementsByClassName('circles')[1].children[currentIndexLok].style;
    circleStyle.backgroundColor = 'rgba(211, 211, 211, 0.9)';
    circleStyle.borderRadius = '10px';
    if (screen.width > 1240) {
        console.log('width start: ' + screen.width);
        document.getElementById('main-image').style.backgroundImage = `url(${images[0]})`;
    } else if (screen.width > 576) {
        console.log('width start: ' + screen.width);
        document.getElementById('main-image').style.backgroundImage = `url(${images[4]})`;
    } else {
        console.log('width start: ' + screen.width);
        document.getElementById('main-image').style.backgroundImage = `url(${images[8]})`;
    }
});


function switchImage(value) {
    if (value == -1) {
        
        if (currentIndex < 1) {
            currentIndex = 3;
        } else {
            currentIndex += value;
        }
    }

    if (value == 1) {
        if (currentIndex > 2) {
            currentIndex = 0;
        } else {
            currentIndex += value;
        }
    }
    switchTo(currentIndex);
}

function switchTo(index) {
    currentIndex = index;

    let element = document.getElementsByClassName('text-button')[0];
    console.log(element);
    element.children[0].innerHTML = titles[currentIndex];
    element.children[1].innerHTML = descriptions[currentIndex];
    element.children[2].children[0].innerHTML = buttonsTxt[currentIndex];
    element.children[2].children[0].href = links[currentIndex];
    if (screen.width > 1240) {
        console.log('width: ' + screen.width);
        document.getElementById('main-image').style.backgroundImage = `url(${images[currentIndex]})`;
    } else if (screen.width > 576) {
        console.log('width start: ' + screen.width);
        document.getElementById('main-image').style.backgroundImage = `url(${images[currentIndex + 4]})`;
    } else {
        console.log('width: ' + screen.width);
        document.getElementById('main-image').style.backgroundImage = `url(${images[currentIndex + 8]})`;
    }

    console.log(document.getElementsByClassName('circles'));
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName('circles')[0].children[i].style.backgroundColor = 'transparent';
    }
    let circleStyle = document.getElementsByClassName('circles')[0].children[currentIndex].style;
    circleStyle.backgroundColor = 'rgba(211, 211, 211, 0.9)';
    circleStyle.borderRadius = '10px';
}

function switchImageLok(value) {
    if (value == -1) {
        if (currentIndexLok < 1) {
            currentIndexLok = 3;
        } else {
            currentIndexLok += value;
        }
    }

    if (value == 1) {
        if (currentIndexLok > 2) {
            currentIndexLok = 0;
        } else {
            currentIndexLok += value;
        }
    }
    switchToLok(currentIndexLok);
}

function switchToLok(index) {
    currentIndexLok = index;
    document.getElementById('lok-image').style.backgroundImage = `url(${imagesLok[currentIndexLok]})`;
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName('circles')[1].children[i].style.backgroundColor = 'transparent';
    }
    let circleStyle = document.getElementsByClassName('circles')[1].children[currentIndexLok].style;
    circleStyle.backgroundColor = 'rgba(211, 211, 211, 0.9)';
    circleStyle.borderRadius = '10px';
}

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

let firstPosSet = [
    false, false, false
];
let firstPos = [0, 0, 0];
let lastPos = [0, 0, 0];
let deltaPos = [0, 0, 0];
let currentPos = [0, 0, 0];

function slidingClick(event) {
    console.log('click');
    mouseDown = true;
}

function slidingNoClick(event) {
    console.log('no click');
    mouseDown = false;
    let index = -1;
    let id = event.target.parentElement.parentElement.parentElement.parentElement.id;
    if (id == 'slatko') {
        index = 0;
    }
    if (id == 'slano') {
        index = 1;
    }
    if (id == 'pice') {
        index = 2;
    }
    if (index >= 0) {
        console.log('firstpos: ' + firstPos[index]);
        console.log('lastpos: ' + lastPos[index]);
        currentPos[index] += deltaPos[index];
        firstPos[index] = 0;
        lastPos[index] = 0;
        deltaPos[index] = 0;
        firstPosSet[index] = false;
    }
    
}

function sliding(event) {
    if (mouseDown) {
        let index = -1;
        let id = event.target.parentElement.parentElement.parentElement.parentElement.id;
        if (id == 'slatko') {
            index = 0;
        }
        if (id == 'slano') {
            index = 1;
        }
        if (id == 'pice') {
            index = 2;
        }
        if (index >= 0) {
            if (!firstPosSet[index]) firstPos[index] = event.pageX;
            firstPosSet[index] = true;
            lastPos[index] = event.pageX;
            deltaPos[index] = lastPos[index] - firstPos[index];
            let pos = currentPos[index] + deltaPos[index];
            if (pos > 0) pos = 0;
            if (pos < -845) pos = -845;
            slideGrupe[index].style.left = `${pos}px`;
            slideri[index].children[0].style.left = `${Math.round((Math.abs(pos) * 100) / 845) * 0.76 - 38}%`;
        }
    }
}

function sliderClick(event) {

}

function sliderNoClick(event) {

}

function slider(event) {
    console.log(target.children[0]);
}