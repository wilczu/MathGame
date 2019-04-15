function startGame($difficulty) {
    changeBG('red');
    console.log($difficulty);

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
    document.body.style.backgroundColor = $color;
}
