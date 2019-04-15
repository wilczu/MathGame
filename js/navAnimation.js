function FadeIn(fadein, fadeout) {
    let FadeInCont = document.getElementById(fadein);
    let FadeOutCont = document.getElementById(fadeout);
    FadeInCont.style.transition = 'opacity 1s';
    FadeInCont.style.opacity = '0';

    setTimeout(() => {
        FadeInCont.style.display = 'none';
        FadeOutCont.style.display = "block";

        setTimeout(() => {
            FadeOutCont.style.transition = 'opacity 1s';
            FadeOutCont.style.opacity = '1';
        },50);

    }, 1000);
}

function FadeOut(FadeOut, FadeIn) {
    let FadeInCont = document.getElementById(FadeOut);
    let FadeOutCont = document.getElementById(FadeIn);
    FadeOutCont.style.transition = 'opacity 1s';
    FadeOutCont.style.opacity = '0';

    setTimeout(() => {
        FadeInCont.style.display = 'block';
        FadeOutCont.style.display = "none";

        setTimeout(() => {
            FadeInCont.style.transition = 'opacity 1s';
            FadeInCont.style.opacity = '1';
        },50);

    }, 1000);
}

function customFadeIn() {
    let customCont = document.getElementById("custom-container");
    customCont.style.display = 'block';

    setTimeout(() => {
        customCont.style.transition = 'opacity 1s';
        customCont.style.opacity = "1";

        document.addEventListener("click", (event) => {
            if(event.target.closest("#custom-container")) { return false; }

            setTimeout(() => {
                customCont.style.transition = 'opacity 1s';
                customCont.style.opacity = '0';
            },50);

            setTimeout(() => {
                customCont.style.display = 'none';
            },1050);

        });

    }, 100);
}