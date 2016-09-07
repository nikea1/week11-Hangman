var Letter = require("./letter.js");
var Word = function(word){
	//get word
	this.word = word;
	this.display = new Letter(word);
	//creates letter bucket
	this.guesses = Array(26).fill(false);

	this.letterExist = function(letter){
		//checks bucket to see it letter already used
		if(this.guesses[letter.toUpperCase().charCodeAt(0) - 65]){
			console.log("You already guessed this letter.")
			return null;
		}
		
		//marks letter as used
		this.guesses[letter.toUpperCase().charCodeAt(0) - 65] = true;
		
		//returns true if letter is found
		for (var i = 0; i < this.word.length; i++){
			if(letter.toLowerCase() == this.word.charAt(i) || letter.toUpperCase() == this.word.charAt(i)){
				this.display.revealLetter(letter);
				return true;
			}
		}
		this.display.display();
		return false;
	}
}



module.exports = Word;

//var test = new Word("Allogator");

//test.letterExist('A');
//test.letterExist('A');