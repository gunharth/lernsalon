"use strict";function checkIndexColumnHeights(){var e=$("#contentBox").height();$("#redBox").height(e)}function checkColumnHeights(){var e=$("#contentBox").height(),n=$("#redBox").height(),t=e-n;$("#whiteBox").height(t-48)}$(function(){$(".navbar-toggle").on("click",function(){$("nav").toggleClass("red").toggleClass("yellow")})}),$(window).resize(function(){$("#index").length?checkIndexColumnHeights():checkColumnHeights()}),$(window).load(function(){$("#index").length?checkIndexColumnHeights():checkColumnHeights()});