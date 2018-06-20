/* 
dependency for testing
*/
// const inquirer = require('inquirer');

/* 
created an array of letters for testing
*/
// const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// constructor that will hold a random guessed letter and check by boolean
var Letter = function (currentLetter, guessCheck) {
    this.currentLetter = currentLetter;
    this.guessCheck = false;
};

/****************** 
New inquirer for testing
*****************/
// var testing = function () {
//     inquirer.prompt([
//         {
//             name: 'currentLetter',
//             message: 'make a guess: '
//         }
//     ]).then(function (answer) {
//         var newGame = new letter(random(), null);
    
//         if (answer.currentLetter === this.currentLetter) {
            
            
//             console.log(this.currentLetter);
//             console.log(answer.currentLetter);
//         } else {
//             console.log("The answer was: " + this.currentLetter);
//             console.log("you guessed: " + answer.currentLetter);
//             console.log('try again');
//         }
//     });
// }
// testing();

module.exports = Letter;