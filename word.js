var inquirer = require("inquirer");

var Letter = require("./letter");

let randomWord = "choosen";

//let wordArray = [];

//console.log(wordArray);
function Word() {
    // An array of new Letter objects representing the letters of the underlying word
    let hiddenLetters = [];

    // A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
    this.wordLetters = function() {
        wordArray = randomWord.split("");

        Letter.letterGuess();

        hiddenLetters.join(' ');
    }
    // A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

}