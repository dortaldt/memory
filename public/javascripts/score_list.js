
//submit a new high score:
var submitForm = document.getElementById("winner-button");

function submitScore (){
	var winnerScore = currentScore;
	var winnerName = document.getElementById("winner-text").value;
	console.log(winnerName + " and the score is " + winnerScore);	// Debuuger

	user[0].userName = winnerName;
	user[0].userScore = winnerScore;

};


