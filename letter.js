const inquirer = require('inquirer');

const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var letter = function (currentLetter, guessCheck) {
    this.currentLetter = currentLetter;
    this.guessCheck = false;

    // The underlyingChar will generate our random letter from the list and push that into our currentLetter
    this.underlyingChar = function () {
        var random = list[Math.floor(Math.random * list.length)];
        if (currentLetter === random) {
            this.guessCheck = true;
        }
        return (' ');
        if (guessCheck === false) {
            return '_ ';
        } else {
            currentLetter = ' ';
        }
    };

};
var random = () => {
    list[Math.floor(Math.random * list.length)];
}

var testing = function () {
    inquirer.prompt([
        {
            name: 'currentLetter',
            message: 'make a guess: '
        }
    ]).then(function (answer) {
        var newGame = new letter(random(this.currentLetter));
        if (answer.currentLetter === this.currentLetter) {
            console.log(currentLetter);
        } else {
            console.log(this.currentLetter);
            console.log('try again');
        }
    });
}
testing();