let word = ["p", "u", "p", "p", "y"];
let userGuess = process.argv[2];

// A string value to store the underlying character for the letter
var hiddenLetter = "_ ";

// A boolean value that stores whether that letter has been guessed yet
var guessed = false;


// constructor function used to create letter objects
function Letter(name) {
    this.name = name;
    this.guessed = false;


    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.letterGuess = function () {
        if (!userGuess) {
            return null;
        } else if (this.guessed === false) {
            console.log(hiddenLetter);
        } else {
            console.log(this.name);
        };
    };

    // A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

    this.letterCheck = function () {
        if (!userGuess) {
            console.log('Please make a letter guess.');
            return null;
        } else if (word.indexOf(userGuess) == -1) {
            this.guessed = false;
        } else {
            this.guessed = true;
        };
       // console.log(this.guessed)
    };

};

let letterA = new Letter(userGuess);

letterA.letterCheck();
letterA.letterGuess();
