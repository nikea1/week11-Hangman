var Letter = function(word){
	
	this.word = word;
	this.wordArray = word.trim().split("");
	
	//this runs once
	(function (array){
		
		for(var i = 0; i < array.length; i++){
			if(array[i] != " ")
				array[i] = "_"
			else
				array[i] = " "
		}
	})(this.wordArray)

	this.display = function(){
		var display = "";

		for(var i = 0; i < this.wordArray.length; i++){
			display+=this.wordArray[i]+" ";
		}

		console.log(display);
	}

	this.revealLetter = function(letter){

		for(var i = 0; i < this.wordArray.length;i++){
			
			if(this.word.charAt(i) == letter.toUpperCase() || this.word.charAt(i) == letter.toLowerCase()){
				
				this.wordArray[i] = this.word.charAt(i);
				
			}
		}
		
		this.display();
	}

}

module.exports = Letter;

//var test = new Letter("Hello World");
//test.display();
//revealLettertest.revealLetter("l");