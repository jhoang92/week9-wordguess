// requiring ouDependencies
var Word = require("./word.js");
var Letter = require("./letter.js")
var inquirer = require("inquirer");

// setting up our variables
var compChoices = ["windows", "mac", "ubuntu", "linux", "mint", "operating system"]

var compArray = [];

var count = 0;

var winCount = 0;

var guessCount = 10;

var guessSoFar = [];

Word.prototype.wordSplit = function(chosenWord) {
    var chosenLetters = [];
    chosenLetters = chosenWord.split("");
    this.matches = chosenLetters.length;
    return chosenLetters;
};

Letter.prototype.findMatches = function(playerGuess, compArray) {
    var index = [];
    for (var i = 0; compArray.length; i++) {
        if (compArray[i] === playerGuess.chosenLetter) {
            index.push[i];
        }
        return index;
    };

};

var compWord = new Word(compChoices);
var compGuess = compWord.chosenWord;

compArray = compWord.wordSplit(compGuess);

displayArray = compWord.wordChosen(compArray.length);

console.log(displayArray.join(' '));

function reset() {
    count = 0;
    guessCount = 10;
    guessSoFar = [];
};

var runGame = function() {

    if (count < 10) {
        inquirer.prompt([
            {
                name: "playerGuess",
                message: "choose a letter"
            }
        ]).then(function (answer) {
            var newLetter = answer.playerGuess;

            if (guessSoFar.indexOf(newLetter) < 0) {
                guessSoFar.push(newLetter);
            }

            console.log("~~~~~~~~~~~~~~Guesses made [' + guessSoFar.join(',') + ']~~~~~~~~~~~~~")

            guessCount--;

            nsole.log("~~~~~~~~~~~~~~Guesses counted" + guessCount + "~~~~~~~~~~~~~")
            console.log('');

            var matches = compword.answerCheck(newLetter, compArray);

            displayArray = compWord.chosenLetter;

            console.log(displayArray.join(" "));
            console.log("");

            if (matches == 0) {
                console.log("WINNER WINNER CHICKEN DINNER!!!!");

                reset();
            } else {
                count++;
                runGame;
            };
        });
    } else {
        inquirer.prompt([
            {
                type: "confrim",
                message: "quit??",
                name: "quit",
                default: true
            }
        ]).then(function (answer) {
            if (answer.quit) {
                reset();
            }
        });
    };
};


runGame();