// Linked app.js sheet to index.html
// Checked and Working

var obj = ["'treasure-chest-image.png'"];



var clickCount = 0;

$(document).ready(function() {
	hidden();
});

function blast(){
      $('#cannon')[0].play();
}

// Functionality for click function. Border and cell disappear when clicked setup globally   
function clickSquare () {
	blast();
	$(this).css({'background': 'none', 'border': 'none'});		
		clickCount ++;	
		// console.log(clickCount);
	// Logic work out (checking each item with a class cell and if it .has the id object inserted and .is is jQuery equality)
	if (((clickCount % 2) == 1) && ($('.cell').has($('#chest')).is($(this)))) {	
		$('#score1').html('5');				
		$('#chest').show();
		alert("Player 1 You're Rich");	
	} else if (((clickCount % 2) == 0) && ($('.cell').has($('#chest')).is($(this)))) {		
		clickCount ++;
		// console.log(clickCount);
		$('#score2').html('5');				
		$('#chest').show();
		alert("Player 2 You're Rich");
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
	$('<img id="chest" src=' + obj[0] + '>').appendTo($('#cell' + random));	
	$('#chest').hide();	
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

 












