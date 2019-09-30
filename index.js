var inquirer = require("inquirer")
var Word = require("./Word")
var Letter = require("./Letter")

var wordArr = ["apple", "grapefruit", "games", "programming", "javascript", "planets"]

let selectedWord;
let numGuesses = 15;

selectWord();
inquireGame();

function selectWord() {
    let ranWord = wordArr[Math.floor(Math.random() * wordArr.length)].split("");
    let tempWordArr = [];
    ranWord.forEach(e => {
        tempWordArr.push(new Letter(e))
    })
    selectedWord = new Word(tempWordArr);
}

function inquireGame() {
    if (checkFinished()) {
        return console.log(`\nYou've completed the word!: ${selectedWord.returnWord().join("")}`)
    }
    if (numGuesses <= 0) {
        return console.log("\nYou ran out of guesses!")
    }
    if (numGuesses < 10) {
        console.log(`
${numGuesses} guesses left!`);
    }
    console.log(`
    ${selectedWord.returnWord().join(" ")}
    `);
    inquirer
        .prompt([
            {
                name: "letter",
                message: "Enter a guess",
            }
        ])
        .then(answers => {
            selectedWord.checkGuess(answers.letter.charAt(0));
            inquireGame();
            numGuesses--;
        })
}

function checkFinished() {
    let count = 0;
    selectedWord.curWord.forEach(e => {
        if (e.guessed) {
            count++;
        }
    })
    if (selectedWord.curWord.length === count) {
        return true;
    }
}