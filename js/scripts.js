$(function() {

	/*
	*	Переход к экрану
	*/
		$('.layer-front').click(function() {


			switch($(this).index('.layer-front')) {
				case 0:
					// Первая итерация:
						// Уменьшаем экраны, кроме первого:
							$('.screen2').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen3').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen4').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen5').removeClass('screen-opened').addClass('screen-hidden');
						// Увеличиваем первый экран:
							$('.screen1').removeClass('screen-hidden').addClass('screen-opened');
					// Вторая итерация:
						// Показываем кнопку закрытия экрана:
							setTimeout(function() {
								$('.screen-close-button').css({
									'opacity': '1',
									'z-index': '2',
									'right': 'unset',
									'left': $('.screen1').width() - 40 - 30 + 'px'
								});
							}, 600);


					break;
				case 1:
					// Первая итерация:
						// Уменьшаем экраны, кроме второго:
							$('.screen1').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen3').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen4').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen5').removeClass('screen-opened').addClass('screen-hidden');
						// Увеличиваем второй экран:
							$('.screen2').removeClass('screen-hidden').addClass('screen-opened');
					// Вторая итерация:
						// Показываем кнопку закрытия экрана:
							setTimeout(function() {
								$('.screen-close-button').css({
									'opacity': '1',
									'z-index': '2',
									'right': 'unset',
									'left': $('.screen1').width() + $('.screen2').width() - 40 - 30 + 'px'
								});
							}, 600);
					break;
				case 2:
					// Первая итерация:
						// Уменьшаем экраны, кроме третьего:
							$('.screen1').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen2').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen4').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen5').removeClass('screen-opened').addClass('screen-hidden');
						// Увеличиваем третий экран:
							$('.screen3').removeClass('screen-hidden').addClass('screen-opened');
					// Вторая итерация:
						// Показываем кнопку закрытия экрана:
							setTimeout(function() {
								$('.screen-close-button').css({
									'opacity': '1',
									'z-index': '2',
									'right': 'unset',
									'left': $('.screen1').width() + $('.screen2').width() + $('.screen3').width() - 40 - 30 + 'px'
								});
							}, 600);
					break;
				case 3:
					// Первая итерация:
						// Уменьшаем экраны, кроме четвертого:
							$('.screen1').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen2').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen3').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen5').removeClass('screen-opened').addClass('screen-hidden');
						// Увеличиваем четвертый экран:
							$('.screen4').removeClass('screen-hidden').addClass('screen-opened');
					// Вторая итерация:
						// Показываем кнопку закрытия экрана:
							setTimeout(function() {
								$('.screen-close-button').css({
									'opacity': '1',
									'z-index': '2',
									'right': 'unset',
									'left': $('.screen1').width() + $('.screen2').width() + $('.screen3').width() + $('.screen4').width() - 40 - 30 + 'px'
								});
							}, 600);
					break;
				case 4:
					// Первая итерация:
						// Уменьшаем экраны, кроме пятого:
							$('.screen1').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen2').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen3').removeClass('screen-opened').addClass('screen-hidden');
							$('.screen4').removeClass('screen-opened').addClass('screen-hidden');
						// Увеличиваем пятый экран:
							$('.screen5').removeClass('screen-hidden').addClass('screen-opened');
					// Вторая итерация:
						// Показываем кнопку закрытия экрана:
							setTimeout(function() {
								$('.screen-close-button').css({
									'opacity': '1',
									'z-index': '2',
									'right': 'unset',
									'left': $('.screen1').width() + $('.screen2').width() + $('.screen3').width() + $('.screen4').width() + $('.screen5').width() - 40 - 30 + 'px'
								});
							}, 600);
					break;
			}


		});

	/*
	*	Закрытие экрана
	*/
		$('.screen-close-button').click(function() {
			$('.screen-close-button').css({
				'opacity': '0',
				'z-index': '-1'
			});
			setTimeout(function() {
				$('.screen').removeClass('screen-hidden').removeClass('screen-opened');
			}, 300);
		});




});