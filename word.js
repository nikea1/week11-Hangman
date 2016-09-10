var Letter = require("./letter.js");
var Word = function(word){
	//store word as a string
	this.word = word;
	//initialize letter bucket
	this.charBucket = Array.prototype.fill(false);
	//store list of letter objects
	this.wordArray = (function(word){
		temp = [];
		for(var i = 0; i < word.length; i++){

			temp.push(new Letter(word.charAt(i)));
		}
		return temp;
	})(word)

	//checks if word is solved
	this.wordFound = function(){
		var display = "";

		for(var i = 0; i < this.wordArray.length ; i++){
			display += this.wordArray[i].displayChar();
		}

		return (display == this.word); //returns result of this statement
	}

	//displays letters that were guessed
	this.displayGuesses = function(){
		var temp = [];
		display = "";
		for(var i = 0; i < 26; i++){
			if(this.charBucket[i]){
				display += String.fromCharCode(i+65)+" "; //converts number to character
			}
		}
		console.log(display);
	}

	//displays game board
	this.displayWord = function(){
		var display = "";
		for(var i = 0; i < this.wordArray.length ; i++){
			display += this.wordArray[i].displayChar()+" ";	//loops throgh Letter objects and displays it's state
		}
		console.log(display);
	}	

	//checks if letter exists in word
	this.letterExist = function(letter){
		 
		if(this.charBucket[letter.toUpperCase().charCodeAt(0) - 65]){	//check if character is used
			console.log("This letter is already picked.");
			return 2;
		}

		this.charBucket[letter.toUpperCase().charCodeAt(0) - 65] = true; //flags character as used in char bucket

		var found = false //set flag to not found
		for(var i = 0; i < this.wordArray.length; i++){
			if(this.wordArray[i].revealLetter(letter)){
				found = true;	//flags character as found
			}	
		}
		this.displayWord();
		return found; //returns true or false (1 or 0)
	}
}



module.exports = Word;

//var test = new Word("Allogator Boots");
//test.displayWord();
//test.letterExist('A');
//test.letterExist('A');