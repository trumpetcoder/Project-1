// Linked app.js sheet to index.html
// Checked and Working

// Setup usable variable for click counter
var counter = 36;

// Funtionality for hidden function


// Functionality for click function. Border and cell disappear when clicked setup globally
function clickSquare() {
	$(this).css({'background': 'none', 'border': 'none'});
	$('#obj').show();
}
// Using defined function clickSquare
$('.cell').click(clickSquare);

// very simple click counter displayed in console.log
$('.cell').click(function() {
	counter--;
	console.log(counter);
	// line that turns off click functionality on a square
	$(this).off('click');
	// console.log('Already Picked');

	// Reset Click function containing styling, globally defined function clickSquare, object hide, and function hidden
	$('.reset').click(function() {
	$('.cell').css({'background': '#6D1B49', 'border': '1px solid black'});
	// Use of globally defined function clickSquare
	$('.cell').click(clickSquare);
	// Reset the counter
	counter = 36;
	// Hide the Object
	$('#obj').hide();
	// Run globally defined function hidden
	hidden();

	});   
	
});

function hidden () {

	// setup variable for all cells
	var cells = $('.cell');
	
	// setup variable random with logic to choose any cell on board
	var random = Math.floor(Math.random() * cells.length)+1;
	
	// inserting treasure chest (#obj) into randomly selected cell
	$('#obj').appendTo($('#cell' + random));
	
	// checking in dev tools for random cell number and seeing if it matches
	// console.log(random);
}

hidden();







// Thoughts for reveal
// if ($('#cell1' + $('#cell' + random)) == true) {		
	
	// $('#obj').show();
	// }

// if ($('#cell' + random) == true) {
	// 	$('#obj').show();
	// }

// Old Code for changing cells long winded

// $('#cell2').click(function() {
// 	$(this).css('background', '#332200');
	
// });

// $('#cell3').click(function() {
// 	$(this).css('background', '#332200');

// });
		
// $('#cell4').click(function() { 
// 	$(this).css('background', '#332200');
	
// });

// $('#cell5').click(function() { 
// 	$(this).css('background', '#332200');
	
// });

// $('#cell6').click(function() { 
// 	$(this).css('background', '#332200');
	
// });

// $('#obj').show();



