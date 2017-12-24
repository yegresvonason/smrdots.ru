$(document).ready(function(){

	$("#button-header").click(function(){
        $("#logo-container").toggle(700);
		$("#menu-content").toggle(800);
        
        // проверяем наличие класса blur:
        if ($("#header-caption").hasClass("blur")){
            $("#header-caption").removeClass("blur");
        }
        else{
            $("#header-caption").addClass("blur");
        }
	});
    
    $('#news').hover(function(){
        $('#menu-content').css('background-image', 'url(menu-content-background-1.jpg)');
    }, function(){
        $('#menu-content').css('background-image', 'url(menu-content-background-0.jpeg)');
    });
    
    $('#about').hover(function(){
        $('#menu-content').css('background-image', 'url(menu-content-background-2.jpg)');
    }, function(){
        $('#menu-content').css('background-image', 'url(menu-content-background-0.jpeg)');
    });
    
    $('#contacts').hover(function(){
        $('#menu-content').css('background-image', 'url(menu-content-background-3.jpg)');
    }, function(){
        $('#menu-content').css('background-image', 'url(menu-content-background-0.jpeg)');
    });
    
    $('#docs').hover(function(){
        $('#menu-content').css('background-image', 'url(menu-content-background-4.jpg)');
    }, function(){
        $('#menu-content').css('background-image', 'url(menu-content-background-0.jpeg)');
    });
    
    $('#events').hover(function(){
        $('#menu-content').css('background-image', 'url(menu-content-background-5.jpg)');
    }, function(){
        $('#menu-content').css('background-image', 'url(menu-content-background-0.jpeg)');
    });
    
    //version 1
    /*$("#news").hover(function(){
        $("#menu-content").fadeIn(900, function(){
           $(this).css('background-image', 'url(menu-content-background-1.jpg)'); 
        });
    }, function(){
        $("#menu-content").fadeIn(300, function(){
           $(this).css('background-image', 'url(menu-content-background-0.jpeg)'); 
        });
    });*/
    
    // version 2
    /*$("#news").hover(function(){
        setTimeout(function(){
            $("#menu-content").css('background-image', 'url(menu-content-background-1.jpg)');
        }, 200);
    }, function(){
        setTimeout(function(){
            $("#menu-content").css('background-image', 'url(menu-content-background-0.jpeg)');
        }, 200);
    });
    
    $("#about").hover(function(){
        setTimeout(function(){
            $("#menu-content").css('background-image', 'url(menu-content-background-2.jpg)');
        }, 200);
    }, function(){
        setTimeout(function(){
            $("#menu-content").css('background-image', 'url(menu-content-background-0.jpeg)');
        }, 200);
    });
    
    $('#contacts').hover(function(){
        setTimeout(function(){
            $("#menu-content").css('background-image', 'url(menu-content-background-3.jpg)');
        }, 200);
    }, function(){
        setTimeout(function(){
            $("#menu-content").css('background-image', 'url(menu-content-background-0.jpeg)')
        }, 200);
    });
    
    $("#docs").hover(function(){
        setTimeout(function(){
            $("#menu-content").css('background-image', 'url(menu-content-background-4.jpg)');
        }, 200);
    }, function(){
        setTimeout(function(){
            $("#menu-content").css('background-image', 'url(menu-content-backgound-0.jpeg)');
        }, 200);
    });
    
    $("#events").hover(function(){
        setTimeout(function(){
            $("#menu-content").css('background-image', 'url(menu-content-background-5.jpg)');
        }, 200);
    }, function(){
        setTimeout(function(){
            $("#menu-content").css('background-image', 'url(menu-content-background-0.jpeg)');
        }, 200);
    });*/
    
});