// Linked app.js sheet to index.html
// Checked and Working

var obj = ["'treasure-chest-image.png'"];
 // "'images.jpg'", "'images-2.jpg'", "'images-3.jpg'", "'images-4.jpeg'", "'images-5.jpeg'", "'images-6.jpeg'", "'images-7.jpeg'", "'images-8.jpeg'", "'images-9.jpeg'", "'images-10.jpeg'", "'images-11.jpeg'", "'images-12.jpeg'", "'download-2.png'", "'download.jpg'", "'download.png'", "'IMG_0019.png'"];
// Functionality for click function. Border and cell disappear when clicked setup globally

$(document).ready(function() {
	hidden();
});
   




function clickSquare () {
	$(this).css({'background': 'none', 'border': 'none'});
	
	// Logic work out (checking each item with a class cell and if it .has the id object inserted and .is is jQuery equality)
	if ($('.cell').has($('#obj')).is($(this))) {

		// Add a score to the score box if found

		$('#score1').html('5');
		
		// console.log('you got it');
		$('#obj').show();

	}
}

// Using defined function clickSquare for when a cell is clicked on
$('.cell').click(clickSquare);

function hidden () {

	// setup variable for all cells
	var cells = $('.cell');
	
	// setup variable random with logic to choose any cell on board
	var random = Math.floor(Math.random() * cells.length)+1;
	
	// inserting treasure chest (#obj) into randomly selected cell
	$('<img id="obj" src=' + obj[0] + '>').appendTo($('#cell' + random));

	// $('#obj').appendTo($('#cell' + random));
	
	// checking in dev tools for random cell number and seeing if it matches
	console.log(random);
}

// Reset Click function containing styling, globally defined function clickSquare, object hide, and function hidden
$('.reset').click(function() {
	
	$('.cell').css({'background': '#6D1B49', 'border': '1px solid black'});

	hidden();

	// Hide the Object
	$('#obj').hide();
	
	// Use of globally defined function clickSquare
	$('.cell').click(clickSquare);
	
	// Resetting the Click Boxes to 36
	$('#click1').html(36);

	$('#click2').html(36);
	  	
});

// Logic for adding the click trackers to the specified cells
$('.cell').click(function() {	    
	$("#click1").html(function(i, val) { return val* 1-1; });
});

$('.cell').click(function() {
	$("#click2").html(function(i, val) { return val* 1-1; });
});




	










