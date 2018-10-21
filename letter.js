// constructor function used to create letter objects
function Letter(char) {
    // A string value to store the underlying character for the letter which must be letter or number
    this.show = !/[a-z1-9]/i.test(char);
    //console.log("letter place holder: " + this.show)
   
    // The letter is saved.
    this.char = char;
}

// A function that returns the underlying character if the letter has been guessed, or a placeholder (underscore) if the letter has not been guessed
Letter.prototype.toString = function () {
    if (this.show === true) {
        return this.char;
        console.log(this.char);
    } else {
        return "_";
        console.log(letter);
    };
};




// A function to show the letter instead of underscore
Letter.prototype.letterShow = function() {
    return this.char;
};

// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
Letter.prototype.letterGuess = function (letterGuess) {
    if (letterGuess.toUpperCase() === this.char.toUpperCase()) {
        this.show = true;
        return true;
        console.log("Correct!");
    } else {
        return false;
        console.log("Incorrect. Try again.");
    };
};
 
module.exports = Letter;