$(document).ready(function(){
    //var ishidden=true;
    $('.nav-icon').click(function(){
        $(this).toggleClass('open');
//        if(ishidden==true){
//            $('.header-menu').css({
//                display: 'flex',
//                opacity: '1'
//            });
//            ishidden=false;
//        }
//        else{
//            $('.header-menu').css({
//                opacity: '0'
//            });
//            ishidden=true;
//        }
        
        $('.header-menu').toggleClass('open');
        
        
        // открываем-скрываем меню:
        //$('.header-menu').toggle(500);
        //$('.header-menu').animate({width: 'toggle'}, 500);
    });
});