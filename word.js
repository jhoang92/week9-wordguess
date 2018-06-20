// requiring our dependencies
const letter = require('./letter');
const inquirer = require('inquirer');

// our array of letters
const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// a portion of our game logic
var Word = function(compChoices) {
    this.compChoices = compChoices;

    this.playerAnswer = compChoices[Math.floor(Math.random * compChoices)];

    this.chosenLetter = [];

    this.matches = 0;

    this.wordChosen = (wordLength) => {
        for(var i = 0; i < wordLength; i++) {
            letter = new Letter('_').currentLetter;
            this.chosenLetter.push(letter); 
        }
        return this.chosenLetter;
    };

    this.answerCheck = function(playerGuess, compArray) {
        var letterGuess = new Letter(playerGuess);

        var matching = letterGuess.findMatches(playerGuess, compArray);

        if(matching.length) {
            for (var i =0; i < matching.length; i++) {
                this.chosenLetter[matching[i]] = letterGuess.chosenLetter;
                this.matches = 1;
            };
        };
        return this.matches;
    };
};

module.exports = Word;