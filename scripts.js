// function showMenu(){
//     var menuContent = document.getElementById("menu-content");

//     if(menuContent.style.display != "block"){
//         menuContent.style.display = "block";
//     }
//     else{
//         menuContent.style.display = "none";
//     }
// }

// var menuContent = $("menu-content");
// $("#button-header").on("click", function(event){
// 	menuContent.show();
// });

$(document).ready(function(){
	// $("#button-header").click(function(){
	// 	$("#menu-content").show(1000);
	// });

	$("#button-header").click(function(){
		$("#menu-content").toggle(800);
        
        // проверяем наличие класса blur:
        if ($("#header-caption").hasClass("blur")){
            $("#header-caption").removeClass("blur");
        }
        else{
            $("#header-caption").addClass("blur");
        }
//        $("#header-caption").addClass("blur");
	});
    
});