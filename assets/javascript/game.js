
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

var reset = function () {
    randomNumber = makeRandom(19, 120);
    $("#random-number").html("Random Number: " + randomNumber);
    //Random number between 1 and 12
    redCrystal = makeRandom(1, 12);
    blueCrystal = makeRandom(1, 12);
    yellowCrystal = makeRandom(1, 12);
    greenCrystal = makeRandom(1, 12);
    $("#player-score").html("My Score: ");
    myScore = 0;
}

//RANDOM NUMBER GENERATOR
var makeRandom = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Random number between 19 and 120:
reset();

// $("#red-button").on("click", function () {
//     myScore = myScore + redCrystal;
//     $("#player-score").html("My Score: " + myScore);
//     winLose();
// })

// $("#blue-button").on("click", function () {
//     myScore = myScore + blueCrystal;
//     $("#player-score").html("My Score: " + myScore);
//     winLose();
// })

// $("#yellow-button").on("click", function () {
//     myScore = myScore + yellowCrystal;
//     $("#player-score").html("My Score: " + myScore);
//     winLose();
// })

// $("#green-button").on("click", function () {
//     myScore = myScore + greenCrystal;
//     $("#player-score").html("My Score: " + myScore);
//     winLose();
// })

$(".button").on("click", function () {
    var clicked = $(this).attr("id");
    if (clicked === "red-button") {
        myScore = myScore + redCrystal;

    }
    if (clicked === "blue-button") {
        myScore = myScore + blueCrystal;

    }
    if (clicked === "yellow-button") {
        myScore = myScore + yellowCrystal;

    }
    if (clicked === "green-button") {
        myScore = myScore + greenCrystal;

    }

    $("#player-score").html("My Score: " + myScore);
    winLose();
})

//Check if player won or lost and reset the game
var winLose = function () {

    if (myScore > randomNumber) {
        alert("You are a Loooooooser!!");
        myLosses++;

        $("#player-losses").html("Losses: " + myLosses);

        reset();

    } else if (myScore == randomNumber) {
        alert("Your a Weeeiiinner!!");
        myWins++;

        $("#player-wins").html("Wins: " + myWins);

        reset();

    }
}








