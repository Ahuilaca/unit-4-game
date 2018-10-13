//GLOBAL VARIABLE=============================================================================

//Cryatal Variables
//These variables are one way to go (test later to see how they work):
//var redCrytalCounter = 0;
//var blueCrytalCounter = 0;
//var yellowCrytalCounter = 0;
//var greenCrytalCounter = 0;

var crystal = {
    red: {
        name: "Red",
        value: 0
    },
    blue: {
        name: "Blue",
        value: 0
    },
    yellow: {
        name: "Yellow",
        value: 0
    },
    green: {
        name: "Green",
        value: 0
    }
}

//Scores current and target
var currentScore = 0;
var targetScore = 0;

//Wins and Losses
var winCount = 0;
var lossCount = 0;

//FUNCTIONS=====================================================================================
//Helper funtion for getting random numbers
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Starts and restarts the game
var startGame = function () {

    //Resent the current score
    currentScore = 0;

    //Set a new target score (between 19 and 120)
    //targetScore = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    targetScore = getRandom(19, 120);

    //Set diffrent values for each of the crystals (between 1 and 12)
    crystal.red.value    = getRandom(1, 12);
    crystal.blue.value   = getRandom(1, 12);
    crystal.yellow.value = getRandom(1, 12);
    crystal.green.value  = getRandom(1, 12);

    //Change the HTML to reflect all of these changes
    $("#random-number").html(targetScore);
    $("#player-score").html(currentScore);

    //testing console
    console.log("--------------------------");
    console.log("Target Score: " + targetScore);
    console.log("Red: " + crystal.red.value + " | Blue: " + crystal.blue.value + " | Yellow: " + crystal.yellow.value + " |Green: " + crystal.green.value);
    console.log("--------------------------");
}

//This function is to generate a score with each button push on crystal
var addValue = function(crystal) {
    currentScore = currentScore + crystal.value;

    $("#player-score").html(currentScore);

    console.log("Your Score: " + currentScore);

}


//MAIN PROCESS===================================================================================
//Starts game the first time:
startGame();

$("#red-button").on("click", function () {
    addValue(crystal.red);
    //redCrytalCounter++;
})

$("#blue-button").on("click", function () {
    addValue(crystal.blue);
    //blueCrytalCounter++;
})

$("#yellow-button").on("click", function () {
    addValue(crystal.yellow);
    //yellowCrytalCounter++;
})

$("#green-button").on("click", function () {
    addValue(crystal.green);
    //greenCrytalCounter++;
})



//This is the win/loss score card

//Here are the crystal buttons



//Total score holder

//Reset all values to start a new game without refreshing browser (from calculator video)
//function resetNumbers() {
    //redCrystalCounter = "";
    //blueCrystalCounter = "";
    //yellowCrystalCounter = "";
    //greenCrystalCounter = "";
    //redCrystalCounter = "";

    //$("#red-crystal", "etc").empty();

      //resetCalculator();
//}

//To reset numbers we need a function (from calculator video)
//$(".clear").on("click", function( {
    //resetCalculator();
//}))