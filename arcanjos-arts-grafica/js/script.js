$(function(e) {
	
    $("#p1").click(function(e) {
		$("#telas").animate({
			"top":"0px"
		});			
    });	

    $("#p2").click(function(e) {
		$("#telas").animate({
				 "top": "-550px",
				 "opacity": "0.8"				 
		 });			
    });
	
    $("#p3").click(function(e) {
		$("#telas").animate({
				 "top": "-1100px",
				 "opacity": "0.9"
		 });			
    });	

});


function tela(){
	var menu = document.getElementById('menu');
	var alt = window.pageYOffset;
	if (alt>662){
		menu.style.position="fixed";
		menu.style.top="0";
	}
	else {
		menu.style.position="static";
	}
}

window.addEventListener("scroll", tela)