$(function() {

	// Custom JS

	/* ====== progressbar --start ====== */

	var bar = document.querySelector('.progressbar div');
	addEventListener('scroll', function(){
		var max = document.body.scrollHeight - innerHeight;
		var percent = (pageYOffset / max) * 100;
		bar.style.width = percent + '%';
	});

	/* ====== progressbar --end ====== */







	/* ====== nav menu show --start ====== */

	/*var navButton = document.getElementById('navButton'),
			navList = document.querySelector('.menu__content');

			navButton.addEventListener('click', function(){
				navList.classList.toggle('block');
			}, false);*/

	/* ====== nav menu show --end ====== */







	/* ====== nav menu show jQuery --start ====== */

	$('#navButton').click(function(){
		$('#navButton').toggleClass('closeButton');
		$('.menu__content').toggle(400);
	});

	/* ====== nav menu show jQuery --end ====== */



	$('#sub-li').click(function(){
		$('.sub__menu__content').toggle(400);
	});



	/* ====== show .image__wrapper --start ====== */

	$('.thumb').hover(function(){
		$(this).children('.image__wrapper').stop().animate({marginTop: '100%', opacity: 0}, 600);
	}, function(){
		$(this).children('.image__wrapper').stop().animate({marginTop: '0%', opacity: 1}, 600);
	});


	/* ====== show .image__wrapper --end ====== */


});
