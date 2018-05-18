$(function() {

	// Custom JS

	/* ====== progressbar --start ====== */

	var bar = document.querySelector('.progressbar div'),
		header = document.querySelector('.header__container');
	addEventListener('scroll', function(){
		var max = document.body.scrollHeight - innerHeight;
		var percent = (pageYOffset / max) * 100;
		bar.style.width = percent + '%';

		if (pageYOffset >= 75) {
			$('header').css('min-height', '70px');
			$('main').css('margin-top', '75px');
			$('.header__container').addClass('fixed__header');
		} else {
			$('.header__container').removeClass('fixed__header');
			$('header').css('min-height', '180px');
			$('main').css('margin-top', '0px');
		}
	});

	/* ====== progressbar --end ====== */





/* ====== header static --start ====== */



/* ====== header static --end ====== */





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

	$('.thumb:nth-child(1)').hover(function(){
		$(this).children('.image__wrapper').stop().animate({marginTop: '100%', opacity: 0}, 600);
	}, function(){
		$(this).children('.image__wrapper').stop().animate({marginTop: '0%', opacity: 1}, 600);
	});

	$('.thumb:nth-child(2)').hover(function(){
		$(this).children('.image__wrapper').stop().animate({marginLeft: '100%', opacity: 0}, 600);
	}, function(){
		$(this).children('.image__wrapper').stop().animate({marginLeft: '0%', opacity: 1}, 600);
	});

	$('.thumb:nth-child(3)').hover(function(){
		$(this).children('.image__wrapper').stop().animate({marginBottom: '100%', opacity: 0}, 600);
	}, function(){
		$(this).children('.image__wrapper').stop().animate({marginBottom: '0%', opacity: 1}, 600);
	});

	$('.thumb:nth-child(4)').hover(function(){
		$(this).children('.image__wrapper').stop().animate({marginRight: '100%', opacity: 0}, 600);
	}, function(){
		$(this).children('.image__wrapper').stop().animate({marginRight: '0%', opacity: 1}, 600);
	});


	/* ====== show .image__wrapper --end ====== */


});
