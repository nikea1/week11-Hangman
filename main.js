var Game = require("./game.js");
var prompt = require("prompt");
var guesses = 10;

var hangman = new Game();

prompt.start();
function runGame(guesses){
	if(guesses <= 0){
		console.log("Game over you lose.")
		return false;
	}

	if(hangman.chosen.wordFound()){
		console.log("Yay you win!")
		return true;
	}
	console.log("You have "+guesses+" guess(es) left.")
	hangman.chosen.displayGuesses();
	hangman.chosen.displayWord();
	prompt.get(["guess"], function(err, result){
		console.log(result.guess);
		var val = hangman.chosen.letterExist(result.guess);
		if(val != 2 && !val){
			guesses--;	
		}

		
		runGame(guesses);
	})

}

runGame(10);

