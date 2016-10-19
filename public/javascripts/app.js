

var cardDack = ["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve"];
var card = document.getElementsByClassName("card")
var openCard = document.getElementsByClassName("open")
var magic1 = false;
var magic2 = false;

var shuffleDack = function shuffleArray() {
    for (var i = cardDack.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cardDack[i];
        cardDack[i] = cardDack[j];
        cardDack[j] = temp;
    }
    return cardDack;
};

shuffleDack();

var showImage = function(a){
	 if (a.style.display !== 'none') {
	        a.style.display = 'none';
	    }
	    else {
	        a.style.display = 'block';
	    };
}

var f = function(){
  		// this.children[0].classList.toggle(cardDack[i%len])
  		this.classList.toggle("back");
  		this.classList.toggle("open");
  		showImage(this.children[0]);

  		if(openCard.length > 1){
  			checkCards();
  			};
  	};

//Gives the class name//
var len = card.length;
for (i = 0; i < card.length; i++){
	card[i%len].className += " " + cardDack[i%len]
	card[i%len].children[0].className += " " + cardDack[i%len]
  	card[i].onclick = f;
}

//This will check which cards are open and if there are two of same//
var scoreMain = document.getElementsByClassName("score-main");
var checkCards = function(){
	var a = openCard[0].className;
	var b = openCard[1].className;
	

	if (a === b){
		setTimeout(function() {
			// alert("Two of the same!")
			openCard[0].children[0].style.display ="none";
			openCard[1].children[0].style.display ="none";
	 		openCard[0].className = "card success";
	 		openCard[0].className = "card success";
	 		scoreMain[0].style.animation = "success-anim 0.3s";
		
		},1000);

		scoreMain[0].removeAttribute("style");
		//Increase 3 points:
		currentScore += 3; 
		showPoints();
		inArow++;
		addPoints(1);
		updateScore();
		checkSuccess();

	}

	else {
	 		//toggle the "open" cards to "back":
	 		setTimeout(function() {
	 			//when "magic1" is ON:
	 			if(magic1){
	 				openCard[0].style.animation = "fadein 20s";
					openCard[1].style.animation = "fadein 20s";
	 			};

	 			openCard[0].children[0].style.display ="none";
				openCard[1].children[0].style.display ="none";
				
	 			openCard[0].classList.toggle("back");
				openCard[0].classList.toggle("open");
				openCard[0].classList.toggle("back");
				openCard[0].classList.toggle("open");
				scoreMain[0].style.animation = "fail-anim 0.3s";
				checkSuccess();
				
	 		}, 1000);

	 		scoreMain[0].removeAttribute("style");	
	 		//subtract 1 point
	 		if(currentScore >0){
	 			currentScore--;
	 		};
	 		inArow = 0;
	 		addPoints(0)
			updateScore();
	};
};

var success = document.getElementsByClassName("success");
var finalScore = currentScore;

function checkSuccess(){		//This function checks for end screen state
		setTimeout(function(){
			if(success.length > 22) {
				var endScreen = document.getElementById("end-screen-container");
				endScreen.style.visibility = "visible";		//truns on the winning screen
			}
			else{
		console.log("not yet...")
			}
		
	}, 1000);
		
};

//This is the function to close the first popup:
var closePop = function(){
	//show cards one by one
	var i = 0;
	function oneByone(){
		setTimeout(function(){
			card[i].className += " back";
			i++;
			if(i<24){
				oneByone();
			};

		}, 50);
	};
	oneByone();
	scoreMain[0].className += " visi";
	document.getElementsByClassName("title-container")[0].classList.toggle("active");
	document.getElementsByClassName("title-container")[0].className += " inactive";
	document.getElementsByClassName("upper-title")[0].style.animation = "closeTitleTop 1s ease";
	document.getElementsByClassName("bottom-title")[0].style.animation = "closeTitleBottom 1s ease";
	document.getElementsByClassName("center-title")[0].style.visibility = "hidden";

};




