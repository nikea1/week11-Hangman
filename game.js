var Word = require("./word.js");


var Game = function(){
	this.dictionary = [
			"Jungle Book",
			"Cinderella", 
			"Lion King",
			"Frozen",
			"Aladdin",
			"Beauty And The Beast",
			"Snow White And The Seven Dwarfs",
			"Zootopia",
			"Tangled",
			"Inside Out",
			"Princess And The Frog",
			"Finding Nemo",
			"Mulan",
			"Sleeping Beauty",
			"Hercules",
			"Peter Pan",
			"Hunchback Of Notre Dame",
			"Mary Poppins",
			"Incredibles",
			"Fantasia",
			"Robin Hood",
			"Pocahontas",
			"Pinochio",
			"Lilo And Stitch",
			"Alice In Wonderland",
			"The Aristocats",
			"The Nightmare Before Christmas",
			"Oliver And Company",
			];

	//stores a dictionary word as a word object
	this.chosen = (function(array){

		var r = Math.floor(Math.random()*(array.length));
		
		return new Word(array[r]);

		
	})(this.dictionary);


}

module.exports = Game;



