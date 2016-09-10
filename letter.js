var Letter = function(char){
	
	this.showChar = "_";
	this.secretChar = char;

	this.displayChar = function(){
		if(this.secretChar == " ")
			return " ";

		return this.showChar;
	}

	this.revealLetter = function(letter){
		if(letter.toLowerCase()  == this.secretChar || letter.toUpperCase()  == this.secretChar){
			this.showChar = this.secretChar;
			return true;
		}
		else
			return false;
	}

}

module.exports = Letter;

//var test = new Letter("Hello World");
//test.display();
//revealLettertest.revealLetter("l");