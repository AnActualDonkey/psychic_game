var alphabet = ["a", "d", "f", "j", "m", "q", "r", "y", "z"];
document.onkeyup = function (event) {
    userGuess = event.key;
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(userGuess);
    console.log(computerGuess);
    if (userGuess === computerGuess) {
        rightCount++;
        alert("You got it! Score: " + rightCount);
    }
    else {
        wrongCount++;
        alert("Wrong! Computer score: " + wrongCount);
    }
}
var rightCount = 0;
var wrongCount = 0;
var totalGuess = 9;
var guessCount = [];
var guessesLeft = null;
var wins = 0;
var losses = 0;

var updateTotalGuess = function () {
    document.querySelector("#total-Guess").innerHTML = guessesLeft;
}

var reset = function () {
    guessCount = 9;
    guessCount = [];
    updateGuessCount();
}

document.onkeydown = function (event) {
    guessesLeft--;
    var letter = event.key.toLowerCase();
    updateguessCount();
    updateguessesLeft();
}