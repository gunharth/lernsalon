'use strict';

function checkColumnHeights() {
	//greenBox
	/*var yellowBoxHeight = $('#yellowBox').height();
	$('#greenBox').height(yellowBoxHeight);*/

	// whiteBox
	var rightColheight = $('#rightCol').height();
	var redBoxHeight = $('#redBox').height();
	var whiteBoxHeight = rightColheight-redBoxHeight;
	$('#whiteBox').height(whiteBoxHeight-100);
}

$(document).ready(function() {
	checkColumnHeights();
});

$(window).resize(function() {
	checkColumnHeights();
});


