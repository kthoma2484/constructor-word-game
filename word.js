var Letter = require("./letter");

//let wordArray = [];

//console.log(wordArray);
function Word(hiddenWord) {

    // An array of new Letter objects representing the letters of the underlying word
    this.hiddenLettersArray = [];
    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.

    this.addLetter = function (letter) {
        let word = "spam";

        let randomWord = word.split("");
        console.log(randomWord);
        
        for (let i=0; i < randomWord.length; i++) {
        let letter = randomWord[i];
        console.log(typeof letter)
        this.hiddenLettersArray.push(new Letter(letter));
        
        }
        
        let hiddenWord = this.hiddenLettersArray.join(' ');
        console.log(hiddenWord);
    };

    //console.log(this.hiddenWord);
    //console.log(this.hiddenLettersArray)

    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

}

// ----------------Testing code------------------
let newHiddenWord = new Word("p")
newHiddenWord.addLetter();
// ----------------Testing code------------------