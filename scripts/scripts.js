$(document).ready(function(){
    
    $("#menu-button").click(function(){
        //$("#logo").toggle(300);
        //$("#menu-nav").toggle(700);
        
        if($("#logo").hasClass("display-none")){
            $("#logo").removeClass("display-none");
            $("#menu-nav").removeClass("display-block");
            $("#menu-nav").addClass("display-none");
        }
        else{
            $("#logo").addClass("display-none");
            $("#menu-nav").removeClass("display-none");
            $("#menu-nav").addClass("display-block");
        }
    });
    
    function changeBackground(){
        var images = ["url(../resources/header-background-1.png)",
                      "url(../resources/header-background-2.jpg)",
                      "url(../resources/header-background-3.jpg)",
                      "url(../resources/header-background-4.jpeg)",
                      "url(../resources/header-background-5.jpg)",
                      "url(../resources/header-background-6.jpg)",
                      "url(../resources/header-background-7.jpg)",
                      "url(../resources/header-background-8.jpg)"],
            i = 0;
        
        setInterval(function(){
           $("#menu-nav").css('background-image', images[i]);
            i++;
            
            if(i >= images.length){
                i = 0;
            }
        }, 3500);
    };
    
    changeBackground();
});