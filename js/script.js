// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */

// DOCUMENT READY FUNCTION BELOW
$('document').ready(function() {
  // Write your code here!
$("button").click(function() {
var name= $("#input").val();
$("#userChoice").text(name);
 let Computerchoice = Math.random();
    console.log(Computerchoice);
    
    if (Computerchoice > .80) {
        $("#result").html("scissors");
    }
    else if (Computerchoice > .60) {
      $("#result").html("paper");
    }
    else {
      $("#result").html("rock");

    }
})
});
 
