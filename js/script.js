function startGame($difficulty) {

    switch ($difficulty) {
        case 'easy':
            changeBG('#97CC04');
            break;
        case 'medium':
            changeBG('#F45D01');
            break;
        case 'hard':
            changeBG('#D11149');
            break;
        case 'custom':
            changeBG('#A752C9');
            break;
        default:
            console.log("error!");
            break;
    }
}

function changeBG($color) {
    let main = document.getElementById('center');
    main.style.transition = 'opacity 0.5s';
    main.style.opacity = '0';

    setTimeout(() => {
        main.style.display = "none";
    }, 100);

    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = $color;
}
