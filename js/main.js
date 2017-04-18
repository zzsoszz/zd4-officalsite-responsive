$(document).ready(function(){
	console.log();
	$(".nav>.menu>.item").filter(function(obj){
		if( window.location.pathname==$(this).attr("href") ){
			$(this).addClass("active");
		}
	});
});
