// Linked app.js sheet to index.html
// Checked and Working

var clicks = 10;



$('#cell1').click(function() {
	$(this).css('background', '#332200');
	// $('#obj').show();
});

$('#cell2').click(function() {
	$(this).css('background', '#332200');
	// $('#obj').show();
});

$('#cell3').click(function() {
	$(this).css('background', '#332200');
	// $('#obj').show();
});
		
$('#cell4').click(function() { 
	$(this).css('background', '#332200');
	// $('#obj').show();
});





$('.reset').click(function() {
	$('.cell').css('background', '#805500');
	$('#obj').hide();
	hidden();
});

// $('#leftclick').html(clicks --);

// $('#rightclick').html(clicks --);

// $('#leftclick').html(clicks);

// $('#reset').click(function() {
//    	$('.cell').html("").css('background', 'white');
//    	clickCount = 0;
// });

function hidden () {
	var cells = $('.cell');
	var random = Math.floor(Math.random() * cells.length)+1;
	$('#obj').appendTo($('#cell' + random));
	console.log(random);
}

hidden();



