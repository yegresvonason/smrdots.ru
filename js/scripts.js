$(function() {

	/*
	*	Переход к экрану
	*/
		$('.layer-front').click(function() {


			switch($(this).index('.layer-front')) {
				case 0:
					// Уменьшаем экраны, кроме первого:
						$('.screen2').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen3').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen4').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen5').removeClass('screen-opened').addClass('screen-hidden');
					// Увеличиваем первый экран:
						$('.screen1').removeClass('screen-hidden').addClass('screen-opened');
					break;
				case 1:
					// Уменьшаем экраны, кроме второго:
						$('.screen1').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen3').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen4').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen5').removeClass('screen-opened').addClass('screen-hidden');
					// Увеличиваем второй экран:
						$('.screen2').removeClass('screen-hidden').addClass('screen-opened');
					break;
				case 2:
					// Уменьшаем экраны, кроме третьего:
						$('.screen1').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen2').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen4').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen5').removeClass('screen-opened').addClass('screen-hidden');
					// Увеличиваем третий экран:
						$('.screen3').removeClass('screen-hidden').addClass('screen-opened');
					break;
				case 3:
					// Уменьшаем экраны, кроме четвертого:
						$('.screen1').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen2').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen3').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen5').removeClass('screen-opened').addClass('screen-hidden');
					// Увеличиваем четвертый экран:
						$('.screen4').removeClass('screen-hidden').addClass('screen-opened');
					break;
				case 4:
					// Уменьшаем экраны, кроме пятого:
						$('.screen1').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen2').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen3').removeClass('screen-opened').addClass('screen-hidden');
						$('.screen4').removeClass('screen-opened').addClass('screen-hidden');
					// Увеличиваем пятый экран:
						$('.screen5').removeClass('screen-hidden').addClass('screen-opened');
					break;
			}



			console.log($(this).index('.layer-front'));
		});

	/*
	*	Закрытие экрана
	*/
		$('.screen-close-button').click(function() {
			$('.screen').removeClass('screen-hidden').removeClass('sreen-opened');
		});




});