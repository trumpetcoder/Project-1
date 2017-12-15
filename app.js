// Linked app.js sheet to index.html
// Checked and Working

var obj = ["'treasure-chest-image.png'"];
 // "'images.jpg'" "'images.jpg'", "'images.jpg'", "'images-2.jpg'", "'images-3.jpg'", "'images-4.jpeg'", "'images-5.jpeg'", "'images-6.jpeg'", "'images-7.jpeg'", "'images-8.jpeg'", "'images-9.jpeg'", "'images-10.jpeg'", "'images-11.jpeg'", "'images-12.jpeg'", "'download-2.png'", "'download.jpg'", "'download.png'", "'IMG_0019.png'"];
// Functionality for click function. Border and cell disappear when clicked setup globally
var clickCount = 0;

$(document).ready(function() {
	hidden();
});
// Functionality for click function. Border and cell disappear when clicked setup globally   
function clickSquare () {	
	$(this).css({'background': 'none', 'border': 'none'});
			clickCount ++;
		// console.log(clickCount);
	// Logic work out (checking each item with a class cell and if it .has the id object inserted and .is is jQuery equality)
	if (((clickCount % 2) == 1) && ($('.cell').has($('#chest')).is($(this)))) {	
		$('#score1').html('5');		
		// console.log('you got it');		
		$('#chest').show();
		// Alert Player 1 winner
		alert("Player 1 Your'e Rich");	
	} else if (((clickCount % 2) == 0) && ($('.cell').has($('#chest')).is($(this)))) {		
		clickCount ++;
		// console.log(clickCount);
		$('#score2').html('5');		
		// console.log('you got it');		
		$('#chest').show();
		// Alert Player 1 winner
		alert("Player 2 Your'e Rich");
	}			
}

// Using defined function clickSquare for when a cell is clicked on
$('.cell').click(clickSquare);

function hidden () {
	// setup variable for all cells
	var cells = $('.cell');	
	// setup variable random with logic to choose any cell on board
	var random = Math.floor(Math.random() * cells.length)+1;
	// console.log(random);
	// inserting treasure chest (#obj) into randomly selected cell
	$('<img id="chest" src=' + obj[0] + '>').appendTo($('#cell' + random));	
	$('#chest').hide();
	// checking in dev tools for random cell number and seeing if it matches	
}
// Reset Click function containing styling, globally defined function clickSquare, object hide, and function hidden
$('.reset').click(function() {	
	console.log(clickCount);
	// Resetting the gameboard
	$('.cell').css({'background': '#6D1B49', 'border': '1px solid black'});			
	// Resetting the Click Boxes to 36
	$('#click1').html(36);
	$('#click2').html(36);
	// Resetting the Score Counters
	$('#score1').html(0);
	$('#score2').html(0);
	// Emptying the parent cell from id 
	$("#chest").parent().empty();
	// Hide the Object
	$('#chest').hide();
	hidden();
	// Resetting the clickCounter
	clickCount = 0;
});
// Logic for adding the click trackers to the specified cells
$('.cell').click(function() {	    
	$("#click1").html(function(i, val) { return val* 1-1; });
});

$('.cell').click(function() {
	$("#click2").html(function(i, val) { return val* 1-1; });
});

// Use of globally defined function clickSquare to reset the clickSquare function
	// $('.cell').click(clickSquare);











