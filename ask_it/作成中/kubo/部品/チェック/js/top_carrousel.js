$(function(){
	$(".slide").carouFredSel({
		circular: true,
		direction: "left",
		scroll:{
			duration: 1000,
			fx: "crossfade",
			easing: "swing",
			items: 1
		},
		auto:{
			play: true,
			timeoutDuration: 2500,
			pauseOnHover: true
		},
		items:{
			visible:1,
			start:0
		},
	});
});