$(document).ready(function() {
//opening setup
	$(".page-header").html("Nonsense Opinion Or Baseless Trivia");
	$("#getStarted").html("Get Started");
	$(".gameBox").hide(); //Hide the buttons and questions at first
	$(".newGame").hide();

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
		$(".answerSpace").hide();
		$(".newGame").hide();
		$( ".gameBox" ).show();
		finalCountdown();
		$("#qSpace").html(qBank[questionCounter].Question);
		$(".aSpace").html(qBank[questionCounter].A[0]);
		$(".bSpace").html(qBank[questionCounter].B[0]);
		$(".cSpace").html(qBank[questionCounter].C[0]);
		$(".dSpace").html(qBank[questionCounter].D[0]);
		// Now for the correct/incorrect (boolean) to be added in. Need a way to access the question index that can be incremented
		$("#answerButtonA").attr("data-value", qBank[questionCounter].A[1]);
		$("#answerButtonB").attr("data-value", qBank[questionCounter].B[1]);
		$("#answerButtonC").attr("data-value", qBank[questionCounter].C[1]);
		$("#answerButtonD").attr("data-value", qBank[questionCounter].D[1]);
		answerTimer = 10; //Reset the silent timer because for every new question there is a new answer
	}
	pageSetup(); // To set up the first question
	// interval to countdown...also a reference to a Europe song that needs to be used in more weddings
	function finalCountdown() {
		intervalId = setInterval(qCountdown, 1000);
	}

	function qCountdown() {
		questionTimer--;
		$("#countDown").html("<h2>" + questionTimer + "</h2>");
		if (questionTimer == 0 && questionCounter + 1 != qBank.length) {
			timeOut();
		} else if (questionTimer == 0 && questionCounter + 1 == qBank.length) {  //Goes to final screen if this is the last question
			unansweredQuestions++;
			finalScreen();
			}
	}

	function silentCountdown() {
		intervalId_2 = setInterval(silentTimer, 1000);
	}
	function silentTimer() {
		answerTimer--;
		if (answerTimer == 0) {
			pageSetup();
			clearInterval(intervalId_2);
		}
	}
	//Function to clear out the Questions and Answers and present the Correct Answer if
	// the timer runs out
	function timeOut() {
		clearInterval(intervalId);
		$(".gameBox").hide();
		$(".answerSpace").html("C'mon man! The correct answer is: " + qBank[questionCounter].Answer);
		$(".answerSpace").show();
		unansweredQuestions++;
		questionCounter++;
		silentCountdown();
		questionTimer = 30;
	}

	function correctA() {
		clearInterval(intervalId);
		$(".gameBox").hide();
		$(".answerSpace").html("Giggity goo, you got it right.  The correct answer is: " + qBank[questionCounter].Answer);
		$(".answerSpace").show();
		correctAnswers++;
		questionCounter++;
		silentCountdown();
		questionTimer = 30;
	}

	function incorrectA() {
		clearInterval(intervalId);
		$(".gameBox").hide();
		$(".answerSpace").html("BBBRWROOONG! The pricess is in another house. The correct answer is: " + qBank[questionCounter].Answer);
		$(".answerSpace").show();
		incorrectAnswers++;
		questionCounter++;
		silentCountdown();
		questionTimer = 30;
	}

	//function resetQTimer() {
	//	questionTimer = 30; //Timer for each question
	//}

	//function resetATimer() {
	//	answerTimer = 10; //Timer for the answer
	//}

	//Function for correct incorrect
	$(".buttonZ").click(function() {
		var potato = $(this).attr("data-value");
			if (potato === "true") {
				correctA();
			} else if (potato === "true" && questionCounter + 1 == qBank.length) { //captures last answer before finalScrene
				correctAnswers++;
				finalScreen();
			} else if (potato === "false" && questionCounter + 1 == qBank.length){//captures last answer before finalScrene
				incorrectAnswers++;
				finalScreen();
			} else {
				incorrectA();
			}
	});

	function finalScreen() {
		clearInterval(intervalId);
		clearInterval(intervalId_2);
		$(".gameBox").hide();
		$(".newGame").show();
		$(".tryAgain").show();
		$(".gotIt").html("Correct Answers: " + correctAnswers)
		$(".notIt").html("Incorrect Answers: " + incorrectAnswers)
		$(".noTry").html("Unanswered Questions: " + unansweredQuestions)
	}

	$("#tryAgain").click(function() {
		correctAnswers = 0;
		incorrectAnswers = 0;
		unansweredQuestions = 0;
		questionCounter = 0;
		questionTimer = 30;
		pageSetup();
		$(".gameBox").show();
		$(".gotIt").hide();
		$(".notIt").hide();
		$(".noTry").hide();
	});
});
});