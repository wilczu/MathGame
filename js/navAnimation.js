function info() {
    infoFadeIn();
}

function infoFadeIn() {
    let mainCont = document.getElementById('main-container');
    let infoCont = document.getElementById('info-container');
    mainCont.style.transition = 'opacity 1s';
    mainCont.style.opacity = '0';

    setTimeout(() => {
        mainCont.style.display = 'none';
        infoCont.style.display = "block";

        setTimeout(() => {
            infoCont.style.transition = 'opacity 1s';
            infoCont.style.opacity = '1';
        },50);

    }, 1000);
}

function infoFadeOut() {
    let mainCont = document.getElementById('main-container');
    let infoCont = document.getElementById('info-container');
    infoCont.style.transition = 'opacity 1s';
    infoCont.style.opacity = '0';

    setTimeout(() => {
        mainCont.style.display = 'block';
        infoCont.style.display = "none";

        setTimeout(() => {
            mainCont.style.transition = 'opacity 1s';
            mainCont.style.opacity = '1';
        },50);

    }, 1000);
}