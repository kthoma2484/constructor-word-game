

// constructor function used to create letter objects
function Letter(letter) {

    // A string value to store the underlying character for the letter
    this.name = letter;
    //console.log("user letter entered: " + this.name)
   
    // A boolean value that stores whether that letter has been guessed yet
    this.guessed = false;
    

    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.letterGuess = function () {
        var hiddenLetter = "_ ";

        if (this.guessed === false) {
            console.log(hiddenLetter);
        } else {
            console.log(this.letter);
        };
    };

    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

    this.letterCheck = function () {
        if (hiddenWordArray.indexOf(this.letter) !== -1) {
            this.guessed = true;
        } else {
            this.guessed = false;
        };
        //console.log(this.guessed)
    };

};

//-----------Testing Code------------------
// let hiddenWordArray = ["p", "u", "p", "p", "y"];
// let letterA = new Letter(process.argv[2]);
// letterA.letterCheck();
// letterA.letterGuess();
// ------------Testing Code-------------------

module.exports = Letter;