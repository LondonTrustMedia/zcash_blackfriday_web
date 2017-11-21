'use strict';

document.addEventListener('DOMContentLoaded', function () {
	$("#contact, #news, #about").hide();

	$(".link2").click(function() {
		$("#contact, #news, #about, #deals").hide();
		$("#about").show();
	});
	$(".link1, .link3, .navbar-brand").click(function() {
		$("#contact, #news, #about, #deals").hide();
		$("#deals").show();
	});
	$(".link4").click(function() {
		$("#contact, #news, #about, #deals").hide();
		$("#news").show();
	});
	$(".link5").click(function() {
		$("#contact, #news, #about, #deals").hide();
		$("#contact").show();
	});
});
