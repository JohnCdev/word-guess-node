var inquirer = require("inquirer")
var Word = require("./Word")
var Letter = require("./Letter")

var word1 = new Word([
    new Letter("a"),
    new Letter("p"),
    new Letter("p"),
    new Letter("l"),
    new Letter("e")
])

function inquireGame() {
    inquirer
        .prompt([
            {
                name: "letter",
                message: "Enter a guess",
            }
        ])
        .then(answers => {
            word1.checkGuess(answers.letter);
            console.log(word1.returnWord())
        })
}

inquireGame();
