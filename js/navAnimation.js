function info() {
    fadeIn();
}

function fadeIn() {
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