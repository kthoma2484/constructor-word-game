var Letter = require("./Letter");

// constructor function used to create word
function Word(newWord) {
    // Split up the word into array
    letterArray = newWord.split("");

    // Create function that maps the letterArray and returns letter constructor
    this.letters = letterArray.map(function(char) {
        return new Letter(char);
    });
};

// function to process each letter and show the visible letter
Word.prototype.correctWord = function() {
    return this.letters.map(function(letter) { 
      return letter.letterShow();
    }).join("");
};


// function to put all the letters together as as a string
Word.prototype.toString = function() {
    return this.letters.join(" ");
};

// function to check each letter guessed and determine if it's in the word
Word.prototype.guessLetter = function(char) {
    // Checks to see if any of the letters in the array match the user's guess and updates `foundLetter`
    var isInWord = false;
    this.letters.forEach(function(letter) {
      if (letter.letterGuess(char)) {
        isInWord = true;
      }
    });  
  
    // Make letter visible in console if correct
    console.log("\n" + this + "\n");
    return isInWord;
  };
  
  // Function to see if all letters in word are true
  Word.prototype.wordGuessedRight = function() {
    // function will return true only if true for every letter
    return this.letters.every(function(letter) {
      return letter.show;
    });
  };
  
module.exports = Word;
  