$(document).ready(function() {	
//Variables
var correctAnswers = 0;
var incorrectAnswers = 0;
var unansweredQuestions = 0;
var questionCounter = 1; //Way to iterate through questions?
var questionTimer = 30; //Timer for each question
var intervalId; //Will become interval length for Question counter

//Bank of Questions and Answers as an Object
	var qBank = {
		Q1: {
			Question: 'What is the airspeed velocity of an unladen swallow?',
			A: ['Shfifty-five', false],
			B: ['potato', false],
			C: ['21', false],
			D: ['Norwegian Blue', true]
			},

		Q2: {
			Question: 'What is the answer to life the universe and everything?',
			A: ['Shfifty-five', false],
			B: ['potato', false],
			C: ['21', false],
			D: ['Norwegian Blue', true]
			},

		Q3: {
			Question: 'What is the airspeed velocity of an unladen swallow?',
			A: ['Shfifty-five', false],
			B: ['potato', false],
			C: ['21', false],
			D: ['Norwegian Blue', true]
			},

		Q4: {
			Question: 'What is the airspeed velocity of an unladen swallow?',
			A: ['Shfifty-five', false],
			B: ['potato', false],
			C: ['21', false],
			D: ['Norwegian Blue', true]
			},

		Q5: {
			Question: 'What is the airspeed velocity of an unladen swallow?',
			A: ['Shfifty-five', false],
			B: ['potato', false],
			C: ['21', false],
			D: ['Norwegian Blue', true]
			},

		Q6: {
			Question: 'What is the airspeed velocity of an unladen swallow?',
			A: ['Shfifty-five', false],
			B: ['potato', false],
			C: ['21', false],
			D: ['Norwegian Blue', true]
			},

		Q7: {
			Question: 'What is the airspeed velocity of an unladen swallow?',
			A: ['Shfifty-five', false],
			B: ['potato', false],
			C: ['21', false],
			D: ['Norwegian Blue', true]
			},

		Q8: {
			Question: 'What is the airspeed velocity of an unladen swallow?',
			A: ['Shfifty-five', false],
			B: ['potato', false],
			C: ['21', false],
			D: ['Norwegian Blue', true]
			},

		Q9: {
			Question: 'What is the airspeed velocity of an unladen swallow?',
			A: ['Shfifty-five', false],
			B: ['potato', false],
			C: ['21', false],
			D: ['Norwegian Blue', true]
			},

		Q10: {
			Question: 'What is the airspeed velocity of an unladen swallow?',
			A: ['Shfifty-five', false],
			B: ['potato', false],
			C: ['21', false],
			D: ['Norwegian Blue', true]
			}
	



	}

//Functions

	//Set up question page
	function pageSetup() {
		$("#qSpace").html(qBank.Q1.Question);
		$(".aSpace").html(qBank.Q1.A[0]);
		$(".bSpace").html(qBank.Q1.B[0]);
		$(".cSpace").html(qBank.Q1.C[0]);
		$(".dSpace").html(qBank.Q1.D[0]);
	}
pageSetup();
	// interval to countdown 
	function finalCountdown() {
		intervalId = setInterval(qCountdown, 1000);
	}

	function qCountdown() {
		questionTimer--;
		$("#countDown").html("<h2>" + questionTimer + "</h2>");
		if (questionTimer == 0) {
			timeOut();

		} else if (/*Some way of registering that the button pressed is correct*/) {
		} else if (/*Some way of registering that the button pressed is correct*/) {

		}
	}
	//Function to clear out the Questions and Answers and present the Correct Answer if
	// the timer runs out
	function timeOut() {
		clearInterval(intervalId);
		$(".gameBox").empty();
		$(".answerSpace").html("<h2>Correct Answer<h2>")
	}

	function correctA() {
		clearInterval(intervalId);
		$(".gameBox").empty();
		$(".answerSpace").html("<h2>Correct Answer<h2>")
	}

	function incorrectA(){
		clearInterval(intervalId);
		$(".gameBox").empty();
		$(".answerSpace").html("<h2>Correct Answer<h2>")
	}
//Run this thing
	console.log(qBank.Q1.Question);
	finalCountdown();
});