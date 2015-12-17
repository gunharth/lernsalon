'use strict';

function checkIndexColumnHeights() {
	var contentBoxHeight = $('#contentBox').height();
	$('#redBox').height(contentBoxHeight);
}

function checkColumnHeights() {
	var contentBoxHeight = $('#contentBox').height();
	var redBoxHeight = $('#redBox').height();
	var whiteBoxHeight = contentBoxHeight - redBoxHeight;
	$('#whiteBox').height(whiteBoxHeight - 48);
}

$(function() {
	if($('#index').length) {
		checkIndexColumnHeights();
	} else {
		checkColumnHeights();
	}

	$('.navbar-toggle').on('click', function() {
		$('nav').toggleClass('red').toggleClass('yellow');
	});
});


$(window).resize(function() {
	if($('#index').length) {
		checkIndexColumnHeights();
	} else {
		checkColumnHeights();
	}
});

$(window).load(function() {
	if($('#index').length) {
		checkIndexColumnHeights();
	} else {
		checkColumnHeights();
	}
});


