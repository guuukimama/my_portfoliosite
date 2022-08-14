$(function(){
	$(".slide").carouFredSel({
		circular: true,
		direction: "left",
		scroll:{
			duration: 1000,
			fx: "scroll",
			easing: "swing",
			items: 1
		},
		auto:{
			play: true,
			timeoutDuration: 2500,
			pauseOnHover: false
		},
		items:{
			visible:1,
			start:0
		},
	});
});