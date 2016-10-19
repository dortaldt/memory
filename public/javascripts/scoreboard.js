
var currentScore = 0;
var inArow = 0;
var points = document.getElementsByTagName("li");
var scoreMessage = document.getElementById("score-message")

var updateScore = function(){
	//Increase/substract the inArow var:
		if(inArow > 1){
			currentScore *= 2;
		};
	//selecting the socre class and updats them:
	var scoreBoardScore = document.getElementsByClassName("current-score")[0]
	var endScreenScore = document.getElementsByClassName("current-score")[1]
	scoreBoardScore.innerHTML = currentScore;
	endScreenScore.innerHTML = currentScore;


};

//Turn on and off the inRow points://
var addPoints = function(a){
	if(a == 1){
		points[inArow-1].className += "full-point";
	}
	else {
		for(i=0; i < points.length; i++){
		points[i].className = "";
		};
	};
};


//makes the points + graphic:
function showPoints(){
	scoreMessage.style.display = "block";
	scoreMessage.style.animation = "score-anim 2s";
	switch (inArow){
		case 0:
			scoreMessage.children[0].style.display ="block"
			scoreMessage.children[0].style.animation ="score-anim 2s";
			break;
		case 1:
			scoreMessage.children[1].style.display ="block"
			scoreMessage.children[1].style.animation ="score-anim 2s";
	};
	setTimeout(function() {
		scoreMessage.children[0].style.display ="none";
		scoreMessage.children[1].style.display ="none";
		scoreMessage.style.display = "none";
	}, 2000);

};