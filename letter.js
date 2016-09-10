var Letter = function(char){
	
	//initialize character as empty
	this.showChar = "_";
	//store char for reveal
	this.secretChar = char;

	//displays what's in show char if char is not a space
	this.displayChar = function(){
		
		return (this.secretChar != " ") this.showChar else " ";
	}

	//switches showChar to the secret value when guessed correctly and returns true else return false
	this.revealLetter = function(letter){
		//checks for letter caseing
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