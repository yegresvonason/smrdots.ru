$(function(){

	$('#hamburger').click(function() {
		$(this).toggleClass('is-active');
		$('.header__content_menu > .hidden').toggle(400);
	});

	$('#information').click(function() {
		$('#information ul').toggle(400);
	});

	/* ====== progressbar --start ====== */
	var bar = document.querySelector('.progressbar div'),
		header = document.querySelector('.header__container');
	addEventListener('scroll', function(){
		var max = document.body.scrollHeight - innerHeight;
		var percent = (pageYOffset / max) * 100;
		bar.style.width = percent + '%';
	});
	/* ====== progressbar --end ====== */

});