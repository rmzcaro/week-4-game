// #1 Generate a random number and populate in the random number banner, set a number of attempt counter and 
// decrement the number of tries left ( I need to do part II) 
// #2 Reset scores, set wins, losses and total equal to 0
// #3 Generate 4 random numbers and assign each to four different buttons 
// #4 Listen to the click of button 
// #5 based upon the button clicked grab the number that is assigned to it and add it to the total 
// give each button id by number of number I am storing, add a data attribute of score which will store random number 
// in button. When button is clicked get the id, data attribute will hold that score and add to total
// #6 Compare total and the shown random number 
// #7 if these numbers match, increment the win count and show it on the view
// #8 else increment the loss count and show it in view
 
// #1 Generate a random number and populate in the random number banner
$(document).ready(function() {

// When random-button is clicked...
$("#random-button").on("click", function() {

// ... we generate a random number
var random = Math.floor(Math.random() * 120) + 19;

// ... and then dump the random number into our random-number div.
$("#random-number").text(random);

});

});

// #2 Reset scores, set wins, losses and total equal to 0
var wins = 0;
var losses = 0;

// potential addition of score below:

// if (random === sum){ //win condition
//     wins++
//     alert("you win yo");
//   }else if (random !=sum && sum > random){ //random does not equal the sum AND if your sum is greater than random lose condition
// 		losses++
    
//   }else{}

// to reset game 1)remove eventListener and 2)reset all your global variables

// #3 Generate 4 random numbers and assign each to four different buttons

$(document).ready(function() {

    // When random-button is clicked...
    $("#crystal1").on("click", function() {
    // ... we generate a random number
    var random = Math.floor(Math.random() * 10) + 1;
// ... and then dump the random number into our random-number div.
$("added-number").text(random);

});

});        


// # 5  Sum of numbers 

function sum(numbers) {
  return numbers.reduce(function(a,b) {
    return a + b
  });
}

// code i can maybe use if I want to add numbers in an array below:  
// var total = 0;
// for (var i = 0; i < someArray.length; i++) {
//     total += someArray[i] << 0;
// }

// ignore code below 

// Randomize Crystals Value from 1 - 12

$(document).ready(function() {

// When random-button is clicked...
$("#random-button").on("click", function() {

// ... we generate a random number
var random = Math.floor(Math.random() * 12) + 1;

// ... and then dump the random number into our random-number div.
$("#random-number").text(random);

});

});


