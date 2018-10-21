var Word = require("./word");
var Words = require("./words");
var chalk = require("chalk");
var inquirer = require("inquirer");

function Game() {
    // Save this as another variable for inquirer use
    var myGame = this;
  
    // User gets ten guesses per game
    this.play = function() {
      this.guessesLeft = 10;
      this.createNewWord();
    };
  
    // New word object created from populated word array with word randomly selected
    // User prompted to guess word
    this.createNewWord = function() {
      var randWord = Words[Math.floor(Math.random() * Words.length)];
      this.currentWord = new Word(randWord);
      console.log("\n" + this.currentWord + "\n");
      this.userGuess();
    };
  
    // Inquirer prompts for user guess
    this.userGuess = function() {
      this.letterGuessPrompt().then(function() {
        // Show word when guess left runout and player loses
        if (myGame.guessesLeft < 1) {
          console.log("No guesses left! You Lose! Your word was: " + myGame.currentWord.correctWord() + ".");
          // Prompts user about starting another game 
          myGame.startAnotherGame();
        }
        // Show user that they guessed the word correctly and creates new game with guesses reset
        else if (myGame.currentWord.wordGuessedRight()) {
          console.log("You got it right! Next word!");
          myGame.guessesLeft = 10;
          myGame.createNewWord();
          }
        // If guesse left not 0, then prompt for user to guess another letter
        else {
          myGame.userGuess();
        }
      });
    };
  
    // Function to prompt user to play new game
    this.startAnotherGame = function() {
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "choice",
            message: "Do you want to play again?"
          }
        ])
        .then(function(val) {
          if (val.choice) {
            myGame.play();
          }
          else {
            myGame.quit();
          }
        });
    };
  
    // Function to prompt user to guess a letter
    this.letterGuessPrompt = function() {
      return inquirer
        .prompt([
          {
            type: "input",
            name: "choice",
            message: "Guess a letter!",
            validate: function(val) {
              return /[a-z1-9]/gi.test(val);
            }
          }
        ])
        .then(function(val) {
          var guessedCorrectly = myGame.currentWord.guessLetter(val.choice);
          // If user guessed right show correct
          if (guessedCorrectly) {
            console.log(chalk.green("\nCORRECT!!!\n"));
          }
          // If user guessed wrong show incorrect
          else {
            //decrease number of guesses fore each incorrect guess
            myGame.guessesLeft--;
            console.log(chalk.red("\nINCORRECT!!!\n"));
            console.log(myGame.guessesLeft + " guesses remaining!!!\n");
          }
        });
    };
  
    // Function to quit game
    this.quit = function() {
      console.log("\nGoodbye!");
      process.exit(0);
    };
  }
  
  module.exports = Game;
  