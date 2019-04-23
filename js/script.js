function startGame(difficulty) {

    switch (difficulty) {
        case 'easy':
            changeBG('#97CC04');
            generateBoard('center', '#64CC01');
            genEquation('+', 5, 10);
            break;
        case 'medium':
            changeBG('#F45D01');
            generateBoard('center', '#F15D00');
            break;
        case 'hard':
            changeBG('#D11149');
            generateBoard('center', '#D00016');
            break;
        case 'custom':
            changeBG('#A752C9');
            generateBoard('center', '#A412C5');
            break;
        default:
            console.log("error!");
            break;
    }
}

function changeBG(color) {
    let main = document.getElementById("main-container");
    main.style.transition = 'opacity 0.5s';
    main.style.opacity = '0';

    setTimeout(() => {
        main.style.display = "none";
    }, 100);

    document.body.style.transition = "background-color 0.5s ease";
    document.body.style.backgroundColor = color;
}

function generateBoard(element, color){
    let gameContainer = document.createElement("div");
    let startButton = document.createElement("button");
    let location = document.getElementById(element);

    let welcomeMsg =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor " +
        "incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " +
        "exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure " +
        "dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit " +
        "anim id est laborum.";

    //Generating container for the game with custom background color.

    gameContainer.style.backgroundColor = color;
    gameContainer.style.border = "2px solid #fff";
    gameContainer.style.padding = "10px";
    gameContainer.innerText = welcomeMsg;

    //Creating a start game button and styling it.

    startButton.innerText = "Start the game !";

    startButton.style.color = "white";
    startButton.style.padding = "10px";
    startButton.style.backgroundColor = "#2F97C1";
    startButton.style.fontSize = "18px";
    startButton.style.border = "none";
    startButton.style.marginTop = "10px";

    setTimeout(() => {
        location.appendChild(gameContainer);
        gameContainer.appendChild(startButton);
    }, 100);
}

function generateNum(from, to){
    return Math.round(Math.random()*(to - from) + from);
}

function genEquation(symbols, from, to){
    let numFrom = from;
    let numTo = to;

    //Getting two random numbers
    let firstNum = generateNum(numFrom, numTo);
    let secondNum = generateNum(numFrom, numTo);

    //Choosing random math symbol
    let symbolArray = symbols.split('');

    let randomSymbol = symbolArray[Math.floor(Math.random() * symbolArray.length)];
    let Equation = eval(firstNum + randomSymbol + secondNum);
    console.log(firstNum + randomSymbol + secondNum + ' = ' + Equation);

}