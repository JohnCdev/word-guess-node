function Letter(curLetter) {
    this.curLetter = curLetter;
    this.guessed = false;
    this.checkGuess = function (abc) {
        // abc.toLowerCase() === this.curLetter ? this.guessed = true : false;
        if(abc.toLowerCase() === this.curLetter) {
            this.guessed = true;
            return console.log("\x1b[32m%s\x1b[0m", "\n" + "Correct!!")
        } else {
            return;
        }
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