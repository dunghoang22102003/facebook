function click(number) {
    if (number === 1) {
        location.href = "home.html";
    }
    if (number === 2) {
        location.href = "home.html";
    }
    if (number === 3) {
        location.href = "home.html";
    }
    if (number === 4) {
        location.href = "home.html";
    }
    if (number === 5) {
        location.href = "home.html";
    }
    if (number === 6) {
        location.href = "home.html";
    }
}


function handleClick1() {
    document.getElementById('wrapper-content-center-video-short-1').style.display = 'block'
    document.getElementById('wrapper-content-center-video-short-2').style.display = 'none'
    document.getElementById('wrapper-content-center-video-short-3').style.display = 'none'
}
function handleClick2() {
    document.getElementById('wrapper-content-center-video-short-1').style.display = 'none'
    document.getElementById('wrapper-content-center-video-short-2').style.display = 'block'
    document.getElementById('wrapper-content-center-video-short-3').style.display = 'none'
}
function handleClick3() {
    document.getElementById('wrapper-content-center-video-short-1').style.display = 'none'
    document.getElementById('wrapper-content-center-video-short-2').style.display = 'none'
    document.getElementById('wrapper-content-center-video-short-3').style.display = 'block'
}


const NUMBER_ITEM_SHOW = 5
const arrShow = [0, 1, 2, 3, 4]

showFilm(0);

function filmSlides(n) {
    showFilm(n);
}
function showFilm(numberSlidesNext) {
    let film = document.getElementsByClassName('video-short-cut')
    for (let i = 0; i < arrShow.length; i++) {
        if (arrShow[0] + numberSlidesNext >= 0 && arrShow[4] + numberSlidesNext < film.length) {
            arrShow[i] += numberSlidesNext
        }

    }

    console.log(arrShow)
    for (i = 0; i < film.length; i++) {
        film[i].style.display = 'none';
    }
    for (i = 0; i < arrShow.length; i++) {
        film[arrShow[i]].style.display = 'block';
    }
}
