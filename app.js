// Linked app.js sheet to index.html
// Checked and Working



// Functionality for click function. Border and cell disappear when clicked
$('.cell').click(function() {
	$(this).css({'background': 'none', 'border': 'none'});
	$('#obj').show();
});

// Functionality for reset button. Returns borders to initial state, object hidden()
$('.reset').click(function() {
	$('.cell').css({'background': '#6D1B49', 'border': '1px solid black'});
	$('#obj').hide();
	hidden();
});


// Funtionality for hidden function
function hidden () {

	// setup variable for all cells
	var cells = $('.cell');
	// setup variable random with logic to choose any cell on board
	var random = Math.floor(Math.random() * cells.length)+1;
	// inserting treasure chest (#obj) into randomly selected cell
	$('#obj').appendTo($('#cell' + random));
	// checking in dev tools for random cell number and seeing if it matches
	console.log(random);
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



