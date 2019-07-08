
//Generates the random RGB VALUES for ONE square.
function generateRGB(){
	var red = String(Math.floor((Math.random() * 255) + 1));
	var green = String(Math.floor((Math.random() * 255) + 1));
	var blue = String(Math.floor((Math.random() * 255) + 1));
	var rgbValues = "rgb(" + red + ", " + green +", "+ blue + ")";
	return rgbValues;
}

//generates a number between 1-6
function numberGen(){
	var num = Math.floor((Math.random()* 6) + 1);
	return num;
}

var squares = document.querySelectorAll(".square");
var gameMessage = document.getElementById("status");

//setting up new game
for (var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = generateRGB();
	gameMessage.textContent = "Guess the colour";
}

// defining winning colour
var x = numberGen();
var winningSquare = squares[x].style.backgroundColor;
console.log(winningSquare);
document.getElementById("findColour").textContent = winningSquare; //displays the goal colour.

for(var i = 0; i< squares.length; i++){
	squares[i].addEventListener("click", function(){
		//alert("You clicked " + this.style.backgroundColor)
		if(this.style.backgroundColor === winningSquare){
			//alert("Winner!")
			gameOver();
			gameMessage="Congratulations!";

		}else{
			//alert("Wrong")
			this.style.backgroundColor = "#333333";
			gameMessage="Try again";
		}
	});
}

function gameOver(){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = winningSquare;
	}
}
