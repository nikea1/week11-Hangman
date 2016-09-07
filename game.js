var Word = require("./word.js");


var Game = function(){
	this.dictionary = ["word", "Kotoba", "define"]
	this.chosen = (function(array){

		var r = Math.floor(Math.random()*(array.length));
		
		return new Word(array[r]);

		
	})(this.dictionary);
}

module.exports = Game;

var game = new Game();

console.log(game.chosen.word);