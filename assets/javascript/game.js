
$(document).ready(function () {
    console.log("Let's Roll");
});

//Crystal Variables
var redCrystal = "";
var blueCrystal = "";
var yellowCrystal = "";
var greenCrystal = "";

//Score variables
var randomNumber = 0;
var myScore = 0;
var myWins = 0;
var myLosses = 0;

//RANDOM NUMBER GENERATOR
var makeRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Random number between 19 and 120:
randomNumber = makeRandom(19, 120);

//Random number between 1 and 12
redCrystal = makeRandom(1, 12);
blueCrystal = makeRandom(1, 12);
yellowCrystal = makeRandom(1, 12);
greenCrystal = makeRandom(1, 12);

//To display random number on score card:
$("#random-number").html("Random Number: " + randomNumber);

//Console testing random number generator
console.log("Target Score: " + randomNumber);
console.log("Red: " + redCrystal + " | Blue: " + blueCrystal + " | Yellow: " + yellowCrystal + " |Green: " + greenCrystal);


//JQuery
//Starts game the first time:

$("#red-button").on("click", function () {
    myScore = myScore + redCrystal;
    $("#player-score").html(myScore);
    console.log(myScore);
    winLose();
})

$("#blue-button").on("click", function () {
    myScore = myScore + blueCrystal;
    $("#player-score").html(myScore);
    console.log(myScore);
    winLose();
})

$("#yellow-button").on("click", function () {
    myScore = myScore + yellowCrystal;
    $("#player-score").html(myScore);
    console.log(myScore);
    winLose();
})

$("#green-button").on("click", function () {
    myScore = myScore + greenCrystal;
    $("#player-score").html("My Score: " + myScore);
    console.log(myScore);
    winLose();
})


//Check if player won or lost and reset the game
var winLose = function () {

    if (myScore > randomNumber) {
        alert("You are a Loooooooser!!");
        console.log("You Lost");
        myLosses++;

        $("#player-losses").html("Losses: " + myLosses);

    }

    //Restart the game
    //startGame();
    //}

    else if (myScore == randomNumber) {
        alert("Your a Weeeeeeeenner!!");
        console.log("You won");
        myWins++;

        $("#player-wins").html("Wins: " + myWins);

        //Restart the game
        //startGame();
    }
}








