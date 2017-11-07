var zodiac = ['Rat','Ox','Tiger','Rabbit','Dragon','Snake','Horse','Goat','Monkey','Rooster','Dog','Pig']

function checkAnswer(e){
	e.preventDefault();
	var selects = document.getElementsByTagName('select');
	
		for (var i = 0; i < selects.length; i++) { 
			var index = parseInt(selects[i].options[selects[i].selectedIndex].value)- 1 

			if (selects[i].id != zodiac[index].toLowerCase()) {
				document.getElementById("answer").innerHTML = "Oops. Try again!" 	
			
				return false;}
		} 
				document.getElementById("answer").innerHTML= "You did it!"
				return true;
}
// console.log("hi");

document.getElementById("submit").addEventListener("click",checkAnswer);

 