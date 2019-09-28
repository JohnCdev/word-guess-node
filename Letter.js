function Letter(curLetter) {
    this.curLetter = curLetter;
    this.guessed = false;
    this.checkGuess = function (abc) {
        abc.toLowerCase() === this.curLetter ? this.guessed = true : false;
    }
}

Letter.prototype.toString = function () {
    if (this.guessed) {
        return this.curLetter
    } else {
        return "_ "
    }
}

//tests
// var testLetter = new Letter("a");

// console.log(testLetter.curLetter);
// testLetter.checkGuess("a");
// console.log(testLetter.guessed);
// console.log(testLetter.toString());

module.exports = Letter;