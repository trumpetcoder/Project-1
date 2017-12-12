// Linked app.js sheet to index.html
// Checked and Working

var clicks = 10;

$('#cell1').click(function() {
	$(this).css('background', 'yellow');
});

$('#cell2').click(function() {
	$(this).css('background', 'yellow');
});

$('#cell3').click(function() {
	$(this).css('background', 'yellow');
});
		
$('#cell4').click(function() { 
	$(this).css('background', 'yellow');
});





	// $(this).css('background', 'yellow');

// });

$('.reset').click(function() {
	$('.cell').css('background', 'green');
});

// $('#leftclick').html(clicks --);

// $('#rightclick').html(clicks --);

// $('#leftclick').html(clicks);

// $('#reset').click(function() {
//    	$('.cell').html("").css('background', 'white');
//    	clickCount = 0;
// });
