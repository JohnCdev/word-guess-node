var Letter = require("./Letter");

function Word(curWord) {
    this.curWord = curWord;
    this.returnWord = function () {
        var tempWord = [];
        this.curWord.forEach(i => {
            tempWord.push(i.toString())
        });
        return tempWord;
    }
}

Word.prototype.checkGuess = function (abc) {
    this.curWord.forEach(i => {
        i.checkGuess(abc);
    })
}

//tests
// var testWord = new Word([new Letter("i"), new Letter("s")]);

// // console.log(testWord.returnWord());
// // testWord.checkGuess('s');
// // console.log(testWord.returnWord());
// // testWord.checkGuess('i');
// // console.log(testWord.returnWord());
// console.log(testWord)
// testWord.checkFinished(testWord)


module.exports = Word;