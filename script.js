$(document).ready(function(){
    var ishidden=true;
    $('.nav-icon').click(function(){
        $(this).toggleClass('open');
        if(ishidden==true){
            $('.header-menu').css({
                display: 'flex',
            });
            ishidden=false;
        }
        else{
            $('.header-menu').css({
                display: 'none'
            });
            ishidden=true;
        }
        
        // открываем-скрываем меню:
        //$('.header-menu').toggle(500);
        //$('.header-menu').animate({width: 'toggle'}, 500);
    });
});