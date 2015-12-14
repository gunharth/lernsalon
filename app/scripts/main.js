'use strict';

function checkColumnHeights() {
	var rightColheight = $('#rightCol').height();
	var redBoxHeight = $('#redBox').height();
	var whiteBoxHeight = rightColheight - redBoxHeight;
	$('#whiteBox').height(whiteBoxHeight - 100);
}

$(document).ready(function() {
	checkColumnHeights();
});

$(window).resize(function() {
	checkColumnHeights();
});


