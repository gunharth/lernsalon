'use strict';
var cwidth;
$(document).ready(function() {
	cwidth = $('div.circle:eq(0)').width();
	$('div.circle').height(cwidth);
	cwidth = $('div.circle-small:eq(0)').width();
	$('div.circle-small').height(cwidth);
});

$( window ).resize(function() {
	cwidth = $('div.circle:eq(0)').width();
	$('div.circle').height(cwidth);
	cwidth = $('div.circle-small:eq(0)').width();
	$('div.circle-small').height(cwidth);
});
