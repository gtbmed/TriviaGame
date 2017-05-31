$(document).ready(function() {	
//opening setup
	$(".page-header").html("Nonsense Opinion Or Baseless Trivia");
	$("#getStarted").html("Get Started");
	$( ".gameBox" ).hide(); //Hide the buttons and questions at first

$("#getStarted").click(function() {
	$( ".page-header" ).hide(); //Hide the opening setup
	$( "#getStarted" ).hide(); //Hide the opening setup
	$( ".gameBox" ).show(); //now show the buttons and questions at first
//Variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var questionCounter = 0; //Way to iterate through questions
var questionTimer = 30; //Timer for each question
var answerTimer = 10; //Timer for the answer
var intervalId; //Will become interval length for Question counter
var intervalId_2; //Will become interval length for silent timer when answer is displayed

//Bank of Questions and Answers as objects within an array.  The array is used so the questions can be indexed.
	var qBank = [
			{Question: 'What is the airspeed velocity of an unladen swallow?',
			A: ['Shfifty-five MPH', "false"],
			B: ['Speed of Dark', "false"],
			C: ['300,000 meters per second', "false"],
			D: ['This question is unanserable as the type of swallow is not specified', "true"],
			Answer: 'This question is unanserable as the type of swallow is not specified'
			},

			{Question: 'What is the answer to life the universe and everything?',
			A: ["Don't worry, be happy", "false"],
			B: ['javascript', "false"],
			C: ['42', "true"],
			D: ['No', "false"],
			Answer: '42'
			},

			{Question: "If at first you don't succeed,_________.",
			A: ['skydiving is not for you', true],
			B: ['destroy all evidence you tried', false],
			C: ['you were never worthy', false],
			D: ['give up', false],
			Answer: 'skydiving is not for you'
			},

			{Question: 'The only certain things in life are ________ and ________?',
			A: ['Death and Taxes', true],
			B: ['Death and Death', false],
			C: ['The airpseed velocity of an unladen swallow and the actual bird itself', false],
			D: ['Your inner self doubt and freudian stages', false],
			Answer: 'Death and Taxes'
			},

			{Question: 'Which America is the best America?',
			A: ['North America', false],
			B: ['United States of America', true],
			C: ['Central America', false],
			D: ['South America', false],
			Answer: 'United States of America'
			},

			{Question: 'Which of the following are the inhabitants of a specific circle of hell',
			A: ['Raiders Fans', false],
			B: ['People who chew with their mouth open', false],
			C: ['Canadian Geese', false],
			D: ['Murderers', true],
			Answer:'Murderers'
			},

			{Question: 'Would you like to go to prom with me?',
			A: ['Yes', true],
			B: ['Maybe', false],
			C: ['Hell Yes!', true],
			D: ['No', false],
			Answer: 'Hell Yes!'
			},

			{Question: 'If the following 4 items got in a fight, which would win?',
			A: ["Your student loans", false],
			B: ['Grass stains', false],
			C: ['Your ability to remember embarassing things', false],
			D: ['Nokia 3310', true],
			Answer: 'Nokia 3310'
			},

			{Question: 'Which is the worst idea?',
			A: ['Visiting North Korea', false],
			B: ['Visiting North Korea as an American citizen', false],
			C: ['Visiting North Korea as an American citizen who takes lots of pictures', false],
			D: ['Visiting North Korea as an American citizen who takes lots of pictures and is broadcasting the movie The Interview', true],
			Answer: 'Visiting North Korea as an American citizen who takes lots of pictures and is broadcasting the movie The Interview'
			},

			{Question: 'Which part of this assignment did the creator probably get stuck on the longest?',
			A: ['Getting the button clicks to store the correctness of the user selections to be evaluated', true],
			B: ['Referencing Objects in a way that can be indexed', false],
			C: ['Coming up with questions', false],
			D: ['Getting divs to appear and disappear in the correct way on the html', false], //we'll see if I can get to this
			Answer: 'Getting the button clicks to store the correctness of the user selections to be evaluated'
			}
	]
	

//Functions
// Have an on button click of the start button, begin running the whole game.  Maybe have it run pageSetup
	//Set up question page
	function pageSetup() {
		$("#qSpace").html(qBank[questionCounter].Question);
		$(".aSpace").html(qBank[questionCounter].A[0]);
		$(".bSpace").html(qBank[questionCounter].B[0]);
		$(".cSpace").html(qBank[questionCounter].C[0]);
		$(".dSpace").html(qBank[questionCounter].D[0]);
		// Now for the correct/incorrect (boolean) to be added in. Need a way to access the question index that can be incremented
		$("#answerButtonA").attr("data-value", qBank[questionCounter].A[1]);
		$("#answerButtonB").attr("data-value", qBank[questionCounter].B[1]);
		var z = $("#answerButtonC").attr("data-value", qBank[questionCounter].C[1]);
		$("#answerButtonD").attr("data-value", qBank[questionCounter].D[1]);
		console.log(z);
		answerTimer = 10; //Reset the silent timer because for every new question there is a new answer
	}
	pageSetup(); //TESTING
	// interval to countdown...also a reference to a Europe song that needs to be used in more weddings
	function finalCountdown() {
		intervalId = setInterval(qCountdown, 1000);
	}

	function qCountdown() {
		questionTimer--;
		$("#countDown").html("<h2>" + questionTimer + "</h2>");
		if (questionTimer == 0 && questionCounter + 1 != qBank.length) { //Probably need to and && and then != to evaluate if the end has occurred
			timeOut();
		// else if (questionTimer == 0 && questionIndex + 1 = qBank.length) {
			//unansweredQuestions++
			//}
		// run final screen
		}
	}
	function silentCountdown() {
		intervalId_2 = setInterval(silentTimer, 1000);
		questionTimer = 30;
	}
	function silentTimer() {
		answerTimer--;
		if (answerTimer == 0) {
			pageSetup();
		}
	}
	//Function to clear out the Questions and Answers and present the Correct Answer if
	// the timer runs out
	function timeOut() {
		clearInterval(intervalId);
		//$(".gameBox").empty();
		$(".answerSpace").html("C'mon man! The correct answer is: " + qBank[questionCounter].Answer);
		unansweredQuestions++;
		console.log(unansweredQuestions);
		questionCounter++;
		console.log(questionCounter);
		silentCountdown();
	}

	function correctA() {
		clearInterval(intervalId);
		$(".gameBox").empty();
		$(".answerSpace").html("Giggity goo, you got it right.  The correct answer is: " + qBank[questionCounter].Answer);
		correctAnswers++;
		questionCounter++;
		silentCountdown();
	}

	function incorrectA() {
		clearInterval(intervalId);
		$(".gameBox").empty();
		$(".answerSpace").html("BBBRWROOONG! The pricess is in another house. The correct answer is: " + qBank[questionCounter].Answer);
		incorrectAnswers++;
		questionCounter++;
		silentCountdown();
	}

	//function resetQTimer() {
	//	questionTimer = 30; //Timer for each question
	//}

	function resetATimer() {
		answerTimer = 10; //Timer for the answer
	}

	//Function for correct incorrect
	// $(".buttonZ").click() {}
	function answerEval() {

		var potato = $(this).attr("data-value");
	//if  questionIndex + 1 = qBank.length -> run finalScreen
	//	else begin silent timer & run the following if-else
	// 
	// if potato === "true"
		//correctA();
	// else
		//incorrectA();
	// if silent timer == 0;
	}

	function finalScreen() {
		//$().html("Correct Answers: " + correctAnswers)
		//$().html("Incorrect Answers: " + incorrectAnswers)
		//$().html("Unanswered Questions: " + unansweredQuestions)
		// button to restart the game -> runs function newGame
	}
	function newGame() {
		// sets variables back to their original values
		//setting questionCounter back to 0 and running pageSetup will start the first question up again
	}
//Run this thing
	console.log(qBank[questionCounter].Question);
	finalCountdown();
})
});