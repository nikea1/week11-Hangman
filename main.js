var Game = require("./game.js");
var prompt = require("prompt");


var hangman = new Game();


prompt.start(); //initalize prompt


function runGame(guesses){
	//if out of guesses end the game
	if(guesses <= 0){
		console.log("Game over you lose.")
		return;
	}

	//if the chosen word it found you win and game ends
	if(hangman.chosen.wordFound()){
		console.log("Yay you win!")
		return;
	}


	console.log("You have "+guesses+" guess(es) left."); //display number of guesses left
	hangman.chosen.displayWord();	//display hangman board
	prompt.get(["guess"], function(err, result){
		
		var val = hangman.chosen.letterExist(result.guess);
		hangman.chosen.displayGuesses();	//display guessed characters
		
		if(val != 2 && !val){ //if character hasn't been guessed before and is wrong decrement guesses
			guesses--;	
		}

		
		runGame(guesses);	//calls itself
	})

}

runGame(10); //run hangman

