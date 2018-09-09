// Prompt user for secret word
var secretWord = prompt("WELCOME TO GUESS THAT WORD!! To start, have one person type in the secret word to guess:");

console.log(secretWord);

// Splits secret word letter by letter
var wordSpaces = secretWord.split("");
console.log(wordSpaces);
console.log("WORD LENGTH: " + wordSpaces.length);

// Creates an array that gives each letter a value of 0
var wordCheck = Array.apply(null, Array(wordSpaces.length)).map(Number.prototype.valueOf,0);
console.log(wordCheck);

var keyHistory = [];
var lives = 6;

var userInputText = document.getElementById("user-input");
var currentSecretText = document.getElementById("current-secret");
var currentHistoryText = document.getElementById("current-history");

// Listens for key that user presses
document.onkeyup = function(event) {
    var guess = event.key;

    console.log(guess);

    if ((((guess >= 'A') && (guess <= 'Z')) || ((guess >= 'a') && (guess <= 'z'))) && (guess != "Shift"))
    {
        var i;

        // check if the key has been entered before
        var alreadyGuessed = 0;
        
        for (i = 0; i < keyHistory.length; i++) {

            if (guess.toUpperCase() == (keyHistory[i]).toUpperCase()) {
                alreadyGuessed = 1;
            }
        }

        if (alreadyGuessed == 1) {
            // alert("key seen before");
        } else {
            // not found before
            keyHistory.push(guess);

            // If lives reach 0, game is over.
            if (lives <= 0) {   
                alert("Game Over.");
                return 0;
            }

            var rightGuess = 0;

            // Compares key that user presses against secret word 
            for (i = 0; i < wordSpaces.length; i++) {
                if (guess == wordSpaces[i]) {
                    wordCheck[i] = 1;
                    rightGuess++;
                }
            }
            
            // After running through the for loop, if none of the letters matches the guess, user loses a life
            if (rightGuess == 0) {
                lives--;
            }
        }
    }

    var copyWordSpaces = wordSpaces.slice();

    for (i = 0; i < wordSpaces.length; i++) {
        if (wordCheck[i] == 0) {
            copyWordSpaces[i] = "_";
        }
    }

    document.getElementById('remaining-lives').innerHTML = "You have " + lives + " lives left.";
    document.getElementById('user-input').innerHTML = "Current guess: [  " + guess + "  ] ";
    document.getElementById('current-secret').innerHTML = " { " + (copyWordSpaces.join(' ')) + " } ";
    document.getElementById('current-history').innerHTML = "Past guesses: " + (keyHistory.join(' '));

    console.log(wordCheck);
    console.log(wordCheck.join(' '));
    console.log(wordCheck.join(''));
    console.log(copyWordSpaces);
    console.log(copyWordSpaces.join(' '));

    console.log(copyWordSpaces.join(''));
    console.log(wordSpaces);
    console.log("Lives: " + lives);
    console.log(keyHistory);

    var done = 1;

    for (i = 0; i < wordSpaces.length; i++) {
        if (wordCheck[i] == 0) {
            done = 0;
        }
    }

    if (done == 1) {
        alert("Congratulations! You guessed the word!");
        return 0;
    }

}
