const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

rollDice();
setLeftDiceImage();
setRightDiceImage();

function rollDice(){
    // If player 1 wins
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
    }
    
    // If player 2 wins
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    
    // Draw
    else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}

function setLeftDiceImage(){
    let randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
}

function setRightDiceImage(){
    const randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);
}
