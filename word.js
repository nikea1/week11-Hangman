var Letter = require("./letter.js");
var Word = function(word){
	//get word
	this.word = word;
	this.charBucket = Array.prototype.fill(false);
	this.wordArray = (function(word){
		temp = [];
		for(var i = 0; i < word.length; i++){

			temp.push(new Letter(word.charAt(i)));
		}
		return temp;
	})(word)

	this.wordFound = function(){
		var display = "";
		for(var i = 0; i < this.wordArray.length ; i++){
			display += this.wordArray[i].displayChar();
		}

		return (display == this.word);
	}

	this.displayGuesses = function(){
		var temp = [];
		display = "";
		for(var i = 0; i < 26; i++){
			if(this.charBucket[i]){
				display += String.fromCharCode(i+65)+" ";
			}
		}
		console.log(display);
	}

	this.displayWord = function(){
		var display = "";
		for(var i = 0; i < this.wordArray.length ; i++){
			display += this.wordArray[i].displayChar()+" ";
		}
		console.log(display);
	}	

	this.letterExist = function(letter){
		
		if(this.charBucket[letter.toUpperCase().charCodeAt(0) - 65]){
			console.log("This letter is already picked.");
			return 2;
		}
		this.charBucket[letter.toUpperCase().charCodeAt(0) - 65] = true;

		var found = false
		for(var i = 0; i < this.wordArray.length; i++){
			if(this.wordArray[i].revealLetter(letter)){
				found = true;
			}	
		}
		this.displayWord();
		return found;
	}
}



module.exports = Word;

//var test = new Word("Allogator Boots");
//test.displayWord();
//test.letterExist('A');
//test.letterExist('A');