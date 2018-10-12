//GLOBAL VARIABLE=============================================================================

//Cryatal Variables
var redCrytalCounter = 0;
var blueCrytalCounter = 0;
var yellowCrytalCounter = 0;
var greenCrytalCounter = 0;

//Scores current and target


//Wins and Losses


//FUNCTIONS=====================================================================================



//MAIN PROCESS===================================================================================

$("#red-crystal-button").on("click", function() {
    alert("test");
    redCrytalCounter++;
    alert("test " + redCrytalCounter);
})

$("#blue-crystal-button").on("click", function() {
    alert("test");
    blueCrytalCounter++;
    alert("test " + blueCrytalCounter + "test");
})

$("#yellow-crystal-button").on("click", function() {
    alert("test");
    yellowCrytalCounter++;
    alert("test " + yellowCrytalCounter + "test");
})

$("#green-crystal-button").on("click", function() {
    alert("test");
    greenCrytalCounter++;
    alert("test " + greenCrytalCounter + "test");
})


//This array will display computers random number from 19-120. Buttons from 1-12
//var buttonNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
//var buttonNumber = Math.floor(Math.random() * 12) + 1;
//var computerNumber = [" "];
//var computerNumber = Math.floor(Math.random() * 12) + 1;



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