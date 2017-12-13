// Linked app.js sheet to index.html
// Checked and Working

var clicks = 10;



$('.cell').click(function() {
	$(this).css({'background': 'none', 'border': 'none'});
	$('#obj').show();
});


$('.reset').click(function() {
	$('.cell').css({'background': '#6D1B49', 'border': '1px solid black'});
	$('#obj').hide();
	hidden();
});



function hidden () {
	var cells = $('.cell');
	var random = Math.floor(Math.random() * cells.length)+1;
	$('#obj').appendTo($('#cell' + random));
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



