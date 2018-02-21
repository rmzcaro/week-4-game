// #1 Generate a random number and populate in the random number banner, set a number of attempt counter and 
// decrement the number of tries left 
// #2 Reset scores, set wins, losses and total equal to 0
// #3 Generate 4 random numbers and assign each to four different buttons 
// #4 Listen to the click of button 
// #5 based upon the button clicked grab the number that is assigned to it and add it to the total 
// give each button id by number of number I am storing, add a data attribute of score which will store random number 
// in button. When button is clicked get the id, data attribute will hold that score and add to total
// #6 Compare total and the shown random number 
// #7 if these numbers match, increment the win count and show it on the view
// #8 else increment the loss count and show it in view
 

$(document).ready(function() {

// When random-button is clicked...
$("#random-button").on("click", function() {

// ... we generate a random number
var random = Math.floor(Math.random() * 120) + 19;

// ... and then dump the random number into our random-number div.
$("#random-number").text(random);

});

});


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

// User input recognized
// addition of values per user input 
// Wins and Losses Tracked 
// Win / Loss Announced 
// Reset Game 
// Make the game look pretty 


