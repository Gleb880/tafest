$(function () {
	$('input').addClass('HomeStuckFun');

	$('.HomeStuckFun').change(function () {
		if ($(this).val() === "22.05.2001 - homestuckfun") {
			$('body').append(`
			<div class="secret" style="position: fixed;top: 0;
			display: flex;">
			<div style="    display: flex;
			background: pink;
			padding: 2em;
			margin: 3em;
		}">
				<img style="
					width: 200px;
					margin-right: 40px;
				" src="https://firebasestorage.googleapis.com/v0/b/protfolio-6e931.appspot.com/o/File-01.svg?alt=media&token=272b4126-6a5c-4b37-95b9-79258f6c0bad" alt="">
				<h1>Над этим сайтом работал Джамбулат</h1>
			</div>
		</div>
			`);
		}
	});

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});




	$('.service-slider').slick({
		slidesToShow: 4,
		dots: true,
		infinity: true,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1999,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
		],
	});


	$('.impression-slider').slick({
		slidesToShow: 3,
		dots: true,
		infinity: true,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
		],
	});


	$('.rent-slider').slick({
		slidesToShow: 1,
		dots: true,
		infinity: true,
		slidesToScroll: 1
	});


	$('.manuals-slider').slick({
		slidesToShow: 4,
		dots: true,
		infinity: true,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1999,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 993,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1
				}
			},
		],
	});


	$('.other-slider').slick({
		slidesToShow: 5,
		dots: false,
		infinity: true,
		prevArrow: '<button type="button" class="other-slider__arrow op slider-arrow__prev"><i class="fas fa-chevron-left"></i></button>',
		nextArrow: '<button type="button" class="other-slider__arrow on slider-arrow__next"><i class="fas fa-chevron-right"></i></button>',
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 993,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			},
		],
	});


	$('.lodging-slider').slick({
		slidesToShow: 2,
		dots: false,
		infinity: true,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 768,
			settings: {
				slidesToShow: 1
			}
		}, ],
	});

	$('.others-slider').slick({
		slidesToShow: 3,
		dots: false,
		infinity: true,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1
				}
			},
		],
	});
});

$(function () {
	$('.wait').click(function () {
		$('.waiting').css('display', 'flex');
	});
	$('.waiting').click(function () {
		$(this).css('display', 'none')
	});
	$('.waiting__form').click(function (e) {
		e.stopPropagation();
	});
	$('.waiting__date').click(function (e) {
		e.stopPropagation();
	});
	$('.popup-set.dop .close').click(function(){
		$('.popup-set.dop').css('display', 'none');
	});
	$('.opdop').click(function(){
		$('.popup-set.dop').css('display', 'flex');
	});
	$('.to-date').click(function () {
		$('.waiting__date').css('display', 'block');
	});
	$('.waiting__accept').click(function () {
		$('.waiting').css('display', 'none')
	})
	$('.date-accept').click(function () {
		var date = $('.waiting .day.active').text();
		if (date === "") {
			var isConf = confirm("Вы уверены что хотите отказаться без предложения свободной даты?");
			if (isConf) {
				$('.waiting__date').css('display', 'none');
			}
		} else {
			$('.waiting__date').css('display', 'none');
		}
	});

	$('.guest').click(function () {
		$('.hide').css('display', 'block');
	});

	$('.hide img').click(function () {
		$('.hide').css('display', 'none');
	});



	$('.reserved__open').click(function () {
		$('.done').css('display', 'flex');
	});
	$('.done').click(function () {
		var menu = $('.done__menu').css('display');
		if (menu === "none") {
			$(this).css('display', 'none')
		} else {
			$('.done__menu').css('display', 'none');
		}
	});
	$('.done__form').click(function (e) {
		e.stopPropagation();
	});
	$('.done__menu').click(function (e) {
		e.stopPropagation();
	});
	$('.to-menu').click(function () {
		$('.done__menu').css('display', 'block');
	});

	$('.close-cross.cl').click(function (e) {
		$('.cls').css('display', 'none');
	});

	$('.menu-items>.items>.item>svg:first-child').click(function () {
		if ($(this).next('.eddit').html() === undefined) {
			$('.menu-items>.items>.item>svg:first-child').next('.eddit').remove();
			$(this).after(`
				<div class="eddit" style="
					background: white;
					border-radius: 6px;
					padding: 1em;
					border: 1px solid;
					position: absolute;
					right: -134px;
					top: -20px;
					z-index: 20;
				">
					<p style="cursor: pointer;margin-bottom: 12px;">Редактировать</p>
					<p style="cursor: pointer;margin-bottom: 12px;">Переименовать</p>
					<p style="cursor: pointer;margin-bottom: 0px;">Удалить</p>
				</div>
			`);
		} else {
			$(this).next('.eddit').remove();
		}
	});
	$('.dishes-card>svg:first-child').click(function () {
		if ($(this).next('.eddit').html() === undefined) {
			$('.dishes-card>svg:first-child').next('.eddit').remove();
			$(this).after(`
				<div class="eddit" style="
					background: white;
					border-radius: 6px;
					padding: 1em;
					border: 1px solid;
					position: absolute;
					right: -90px;
    top: -12px;
					z-index: 20;
				">
					<p style="cursor: pointer;margin-bottom: 0px;">Удалить</p>
				</div>
			`);
		} else {
			$(this).next('.eddit').remove();
		}
	});
	$('.check input').click(function(){
		$('.check input').not(this).prop('checked', false);
	});


	$('.alll').change(function(){
		if($(this).prop('checked')){
			$('.create-choicelist__item input').prop('checked', true);
		} else {
			$('.create-choicelist__item input').prop('checked', false);	
		}
	});

	$('.close-popup').click(function(){
		$('.eddit').remove();
	});
	$('.popup-set').click(function(){
		$('.eddit').remove();
	});
	//body > div.popup-set.sb > div > div.active > div > div > div > div > svg

	

	$('.modal-card__btn').click(function(){
		$('.adfd').css('display', 'flex');
	});

	$('*').not('.search-people').click(function(){
		$('.search-people').css('display', 'none');
	});
	$('*').not('.search-people').click(function(){
		$('.search-people').css('display', 'none');
	});
	$('.info-content__search input').click(function(e){
		e.stopPropagation()
	});

	$('.menu-item input').change(function () {
		$('.link-item').attr('href', `${$(this).attr('name')}`);
		$('.menu-item input').prop('checked', false);
		$(this).prop('checked', true);
	});

	$('.file').click(function(){
		$('.dopd').css('display', 'flex');
	});

	$('.edit-container .list .btn').click(function(){
		$('.edit-container .list .btn').not(this).removeClass('active');
		$(this).toggleClass('active');
	});

	$('.addcul').change(function(){
		$('.cules').append(`<div class="pa">
							<p>${$(this).val()}</p>
							<img  src="./img/cross-1.svg" alt="">
						</div>
		`);
		$('.cules div img').click(function(){
			$(this).parent('.pa').remove();
		});
	});
	$('.cules div img').click(function(){
		$(this).parent('.pa').remove();
	});


	$('.cst-range').on('input change', function () {
		$('.cst-range + input').val($(this).val());
	});

	$('.hide > input').on('input change', function () {
		$('.guest p:last-child').text($(this).val());
	});

	$('.cst-range').change(function () {
		$('.cst-range + input').val($(this).val());
	});


	$('.waiting .day').click(function () {
		$('.waiting .day.active').toggleClass('active');
		$(this).toggleClass('active');
		var day = $(this).text();
		var html = `<div class="checked-data">
		<p class="checked-dataa">${day} сентябрь 2021</p>
		<img src="./img/cross-1.svg" alt="cross" style="cursor: pointer;
		padding: 0 8px 0 12px;">
	</div>`;
		$('.checked-dates').append(html);
		$('.checked-data').click(function () {
			$(this).css('display', 'none');
		});
	});


	$('.waiting__date .close-cross').click(function () {
		$('.waiting__date').css('display', 'none');
	});

	//wait__cash-open

	$('.wait__cash-open').click(function () {
		$('.waiting-cash').css('display', 'flex');
	});
	$('.waiting-cash').click(function () {
		$(this).css('display', 'none')
	});
	$('.waiting-cash__form').click(function (e) {
		e.stopPropagation();
	});
	$('.waiting-cash__date').click(function (e) {
		e.stopPropagation();
	});
	$('.to-date').click(function () {
		$('.waiting-cash__date').css('display', 'block');
	});
	$('.waiting-cash__accept').click(function () {
		$('.waiting-cash').css('display', 'none')
	})
	$('.show-info').click(function () {
		$('.done').css('display', 'flex');
	});

	$('.search__calendar').click(function () {
		$('div.search__calendar > input').focus();
	});


	$('.receiving-form__btn').click(function () {
		var x = $('.reg__form .active')
		if (x.length !== 0) {
			$('.reg__wrapper').css('display', 'flex');
		}
	});
	$('.reg__wrapper').click(function () {
		$(this).css('display', 'none')
	});
	$('.reg__form').click(function (e) {
		e.stopPropagation();
	});
	$('.reg__form .data.mail').change(function () {
		if ($(this).val() !== '') {
			$('.reg__form .code').css('display', 'block');
		} else {
			$('.reg__form .code').css('display', 'none');
		}
	})

	$('.reg__form .data.next').click(function () {
		var x = $('.reg__form div.active');
		var x1 = $('.reg__form div.active')[0].className;
		var x2 = $('.data__wrapper')[0].className;
		$('.reg__form div.active + div').addClass('active');
		if (x1 === x2) {
			x.removeClass('active');
			$('.reg__wrapper').css('display', 'none');
		}
		x.removeClass('active');
	});

	$('.sets').click(function () {
		var x = $('.setts').css('display');
		if (x === 'block') {
			$('.setts').css('display', 'none');
		} else {
			$('.setts').css('display', 'block');
		}
	});

	$('.alc .next').click(function () {
		var x = $('.alc>.container>div>div.active');
		var x1 = $('.alc>.container>div>div.active')[0].className;
		var x2 = $('.data__wrapper')[0].className;
		$('.alc>.container>div>div.active + div').addClass('active');
		if (x1 === x2) {
			x.removeClass('active');
			$('.alc').css('display', 'none');
		}
		x.removeClass('active');
	});

	$('.reg__form.end .close').click(function(){
		$('.reg__wrapper').css('display', 'none');
	});

	$('.reg__wrapper .next').click(function () {
		$('.reg__wrapper > div.active').next('div').toggleClass('active');
		$('.reg__wrapper > div.active').prev('.active').toggleClass('active');
	});

	$('.alc__select').click(function () {
		var x = $('.confirmation-alkogol>select').val();
		if (x != 4) {
			$('.alc').css('display', 'flex');
		}
	});

	$('.confirmation-alkogol>select').change(function () {
		var x = $('.confirmation-alkogol>select').val();

		$('.alc>.container>div').each(function () {
			var h = this.className.split(' ');

			if (h[0] == x) {
				$('.alc .' + h[0]).addClass('active');
			} else {
				$('.alc .' + h[0]).removeClass('active');
			}
		});

	});

	$('.alc').click(function () {
		$(this).css('display', 'none');
	});
	$('.alc>.container').click(function (e) {
		e.stopPropagation();
	});
	$('.edit-popup .next').click(function () {
		var x = $('.edit-popup div.active');
		var x1 = $('.edit-popup div.active')[0].className;
		var x2 = $('.data__wrapper')[0].className;
		$('.edit-popup div.active + div').addClass('active');
		if (x1 === x2) {
			x.removeClass('active');
			$('.edit-popup').css('display', 'none');
		}
		x.removeClass('active');
	});

	$('.user-cash__info').click(function () {
		$('.cash-info').css('display', 'flex');
	});
	$('.cash-info').click(function () {
		$(this).css('display', 'none');
	});
	$('.cash-info .transactions').click(function (e) {
		e.stopPropagation();
	});
	$('.cash-info .balance').click(function (e) {
		e.stopPropagation();
	});

	$('.popup.reg .body .next').click(function () {
		var x = $('.popup .body.active');
		$('.popup .body.active + div').addClass('active');
		x.removeClass('active');
	});

	$('.trening-code input').keyup(function (e) {
		var val = $(this).val();
		if (val.length > 1) {
			$(this).val(val[val.length - 1]);
		}
		if (val.length === 0) {
			$(this).prev('input').focus();
		} else {
			$(this).next('input').focus();
		}
	});
	//$('.popup-set.block')

	$('.calendar__days > .day').click(function (e) {
		if (e.target.className == 'day') {
			$('.popup-set.block').toggleClass('active');
		}
	});

	$('.popup-set.block').click(function () {
		$(this).toggleClass('active');
	});

	$('.popup-set.block img').click(function () {
		$('.popup-set.block').toggleClass('active');
	});

	$('.popup-set.block > .container').click(function (e) {
		e.stopPropagation();
	});

	$('.how div').click(function () {
		$('.how div.active').toggleClass('active');
		$(this).toggleClass('active');
	});

	$('.notf>.control-card').click(function () {
		$('.notification').css('display', 'flex');
	});
	$('.show-popup').click(function () {
		$('.popup').css('display', 'flex');
		$('.add.popup').css('display', 'none');
	});
	$('.edit').click(function () {
		$('.popup').css('display', 'flex');
	});
	$('.add-somethimg').click(function () {
		$('.add.popup').css('display', 'flex');
	});
	$('.add.popup').click(function () {
		$(this).css('display', 'none');
	});
	$('.popup').click(function () {
		$(this).css('display', 'none');
	});
	$('.head>img[alt="cross"]').click(function () {
		$('.popup').css('display', 'none');
	});
	$('.popup>.container').click(function (e) {
		e.stopPropagation();
	});
	$('.close').click(function () {
		$('.popup').css('display', 'none');
		$('.menu-name').val('');
	});

	$('.create__tab.menu + img').click(function () {
		var x = $('.create__tab.menu + img + .settings');
		if (x.css('display') === 'none') {
			x.css('display', 'flex');
		} else {
			x.css('display', 'none');
		}
	});
	$('.create__tab.al + img').click(function () {
		var x = $('.create__tab.al + img + .settings');
		if (x.css('display') === 'none') {
			x.css('display', 'flex');
		} else {
			x.css('display', 'none');
		}
	});
	$('.create__tab.ps + img').click(function () {
		var x = $('.create__tab.ps + img + .settings');
		if (x.css('display') === 'none') {
			x.css('display', 'flex');
		} else {
			x.css('display', 'none');
		}
	});

	$('.facilities-block__btn').click(function () {
		if ($('.show').css('display') === "none") {
			$('.show').css('display', 'flex')
			$(this).html('Скрыть все преимущества: 2');
		} else {
			$('.show').css('display', 'none');
			$(this).html('Показать все преимущества: 2');
		}
	});




	$('.trip-wrap__link_people,.offer-search__people, .table-block__guests').click(function () {
		$('.search-people').toggle();
	});

	$('.link-dop_open').click(function () {
		$('.link-dop_close,.link-dop_open ,.apartament-facilities__none').toggle();
	});

	$('.link-dop_close').click(function () {
		$('.link-dop_open, .link-dop_close, .apartament-facilities__none').toggle();
	});

	$('.modalvhod').click(function (e) {
		e.preventDefault();
		$('#modalbox').arcticmodal();
	});

	$('.modal-card__btn').click(function () {
		$('.popup-set.dop').css('display', 'flex');
	});

	$('.in .end').click(function () {
		$('.in').css('display', 'none');
		$('.in > .container > div:first-child').toggleClass('active');
		$('.in > .container > div:nth-child(5)').toggleClass('active');
	});
	$('.out .end').click(function () {
		$('.out').css('display', 'none');
		$('.out > .container > div:first-child').toggleClass('active');
		$('.out > .container > div:nth-child(5)').toggleClass('active');
	});

	$('.popup-set.dop').click(function () {
		$(this).css('display', 'none');
	});

	$('.mbtn.b').click(function () {
		if (!$(this).hasClass('active')) {
			$('.mbtn.b.active').toggleClass('active');
		}
		$(this).toggleClass('active');

		if ($(this).hasClass('active') && !$(this).hasClass('nope')) {
			$('.adalc').addClass('active');
			if ($(this).hasClass('pin')) {
				$('.adalc  > .mbtn').addClass('opin');
				$('.adalc > .mbtn').removeClass('opout');
				$('.opin').click(function () {
					$('.popup-set.in').css('display', 'flex');
				});
			}
			if ($(this).hasClass('pout')) {
				$('.adalc  > .mbtn').addClass('opout');
				$('.adalc > .mbtn').removeClass('opin');
				$('.opout').click(function () {
					$('.popup-set.out').css('display', 'flex');
				});
			}
		} else {
			$('.adalc').removeClass('active');
			$('.adalc > .mbtn').removeClass('opin');
			$('.adalc > .mbtn').removeClass('opout');
		}
	});

	$('.opsb').click(function(){
		$('.sb').css('display', 'flex');
	});

	$('.sb .next').click(function(){
		$('.sb .container > div').toggleClass('active');
	});
	$('.sb .end').click(function(){
		$('.lmi .one').css('display', 'none');
		$('.lmi .two').css('display', 'flex');
		$('.sb').css('display', );
	});

	$('.popup-set').click(function(){
		$(this).css("display",'none');
	});
	$('.popup-set .container').click(function(e){
		e.stopPropagation();
	});


	$('.cash__output-btn').click(function(){
		$('.popup-set.bankinfo').css('display', 'flex');
	});


	$('.bankinfo .end').click(function(){
		$(this).parents('.popup-set').css('display', 'none');
	});

	$('.close-popup').click(function(){
		$(this).parents('.popup-set').css('display', 'none');
	});
	$('.close').click(function(){
		$(this).parent('div').css('display', 'none');
	});

	$('.in .next').click(function () {
		$('.in .active').next('div').toggleClass('active');
		$('.in .active').prev('.active').toggleClass('active');
	});
	$('.in .close').click(function () {
		$('.popup-set.in').css('display', 'none');
	});
	$('.out .next').click(function () {
		$('.out .active').next('div').toggleClass('active');
		$('.out .active').prev('.active').toggleClass('active');
	});
	$('.out .close').click(function () {
		$('.popup-set.out').css('display', 'none');
	});

	$('.in .tabs:nth-child(1) .btn').click(function () {
		$('.in .tabs:nth-child(1) .btn.active').toggleClass('active');
		$(this).toggleClass('active');
	});
	$('.in .tabs:nth-child(2) .btn').click(function () {
		$('.in .tabs:nth-child(2) .btn.active').toggleClass('active');
		$(this).toggleClass('active');
	});


	$('.popup-set.out').click(function () {
		$(this).css('display', 'none');
	});

	$('.popup-set.out > .container').click(function (e) {
		e.stopPropagation();
	});


	$('.popup-set.in').click(function () {
		$(this).css('display', 'none');
	});

	$('.popup-set.in > .container').click(function (e) {
		e.stopPropagation();
	});

	$('.popup-set.dop > .container').click(function (e) {
		e.stopPropagation();
	});

	$('.foot > .m').click(function () {
		$(this).next('p').text(Number($(this).next('p').text()) - 1);
		if (Number($('.foot > .val').text()) < 0) {
			$('.foot > .val').text(0);
		}
	});
	$('.foot > .p').click(function () {
		$(this).prev('p').text(Number($(this).prev('p').text()) + 1);
	});

	$('.prem > .m').click(function () {
		$(this).next('p').text(Number($(this).next('p').text()) - 1);
		if (Number($('.prem > .val').text()) < 0) {
			$('.prem > .val').text(0);
		}
	});
	$('.prem > .p').click(function () {
		$(this).prev('p').text(Number($(this).prev('p').text()) + 1);
	});

	/*$('.modal-card__btn').click(function (e) {
		e.preventDefault();
		$('#modal').arcticmodal('close');
	});*/

	$('.dishes-card__change').click(function (e) {
		e.preventDefault();
		$('#modal2').arcticmodal();
		$('#modal3').arcticmodal('close');
	});


	$('.confirmation-btn').click(function (e) {
		e.preventDefault();
		$('#modal3').arcticmodal();
	});


	$('.dishes-btn').click(function (e) {
		e.preventDefault();
		$('#modal').arcticmodal();
		$('.slider-fors').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-navs'
		});
		$('.slider-navs').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.slider-fors',
			dots: false,
			arrows: true,
			responsive: [{
					breakpoint: 993,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1
					}
				},
			],
		});

		$('.slider-forss').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.slider-navss'
		});
		$('.slider-navss').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.slider-forss',
			dots: false,
			arrows: true,
			responsive: [{
					breakpoint: 993,
					settings: {
						slidesToShow: 3
					}
				},
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1
					}
				},
			],
		});
	});


	$("#datepicker1").datepicker({
		minDate: 0,
		range: 'period',
		onSelect: function (date) {
			$('#datepicker_value').val(date)
		}
	});
	$("#datepicker1").datepicker("setDate", $('#datepicker_value1').val());


	$("#datepicker2").datepicker({

		onSelect: function (date) {
			$('#datepicker_value').val(date)
		}
	});
	$("#datepicker2").datepicker("setDate", $('#datepicker_value2').val());

	$("#datepicker3").datepicker({

		onSelect: function (date) {
			$('#datepicker_value').val(date)
		}
	});
	$("#datepicker3").datepicker("setDate", $('#datepicker_value3').val());






});


$(function () {
	$('.n2').click(function () {
		$('.block1').toggle();
		$('.block2').toggle();
	});

	$('.n3').click(function () {
		$('.block2').toggle();
		$('.block3').toggle();
	});

	$('.n4').click(function () {
		$('.block3').toggle();
		$('.block4').toggle();
	});


	$('.n5').click(function () {
		$('.block4').toggle();
		$('.block5').toggle();
	});

	$('.n6').click(function () {
		$('.block5').toggle();
		$('.block6').toggle();
	});

	$('.n7').click(function () {
		$('.block6').toggle();
		$('.block7').toggle();
	});

	$('.n8').click(function () {
		$('.block7').toggle();
		$('.block8').toggle();
	});

	$('.n9').click(function () {
		$('.block8').toggle();
		$('.block9').toggle();
	});


	$('.n10').click(function () {
		$('.block9').toggle();
		$('.block10').toggle();
	});


	$('.n11').click(function () {
		$('.block10').toggle();
		$('.block11').toggle();
	});

	$('.n12').click(function () {
		$('.block11').toggle();
		$('.block12').toggle();
	});


	$('.n13').click(function () {
		$('.block12').toggle();
		$('.block13').toggle();
	});

	$('.n14').click(function () {
		$('.block13').toggle();
		$('.block14').toggle();
	});







	$('.p1').click(function () {
		$('.block1').toggle();
		$('.block2').toggle();
	});

	$('.p2').click(function () {
		$('.block2').toggle();
		$('.block3').toggle();
	});

	$('.p3').click(function () {
		$('.block4').toggle();
		$('.block3').toggle();
	});


	$('.p4').click(function () {
		$('.block5').toggle();
		$('.block4').toggle();
	});

	$('.p5').click(function () {
		$('.block6').toggle();
		$('.block5').toggle();
	});

	$('.p6').click(function () {
		$('.block7').toggle();
		$('.block6').toggle();
	});

	$('.p7').click(function () {
		$('.block7').toggle();
		$('.block9').toggle();
	});


	$('.p9').click(function () {
		$('.block9').toggle();
		$('.block10').toggle();
	});


	$('.p10').click(function () {
		$('.block10').toggle();
		$('.block11').toggle();
	});


	$('.p11').click(function () {
		$('.block11').toggle();
		$('.block12').toggle();
	});


	$('.p12').click(function () {
		$('.block12').toggle();
		$('.block13').toggle();
	});

	$('.p13').click(function () {
		$('.block13').toggle();
		$('.block14').toggle();
	});



});




$(function () {
	$('.navigation-menu__bar, .memu__item a').click(function () {
		$('.memu').toggle();
		$('.navigation-menu__bar .fa-bars').toggle();
		$('.navigation-menu__bar .fa-times').toggle();
	});
	// scrollSpeed
	$("a[href^='#']").click(function (e) {
		e.preventDefault();
		var _href = $(this).attr("href");
		$("html, body").animate({
			scrollTop: $(_href).offset().top + "px"
		}, 2000);
		return false;
	});

	$('.info-card__heart').click(function () {
		$('.info-card__heart i').toggle();
	});



	$('.lodging-slider, .others-slider').on('init reInit', function (event, slick) {
		var amount = slick.slideCount;
		$('#range').attr('max', amount);
	})

	$('.lodging-slider, .others-slider').on('afterChange', function (e, slick, currentSlide) {
		$('#range').val(currentSlide + 1);
	})

	$('#range').on('input change', function () {
		$('.lodging-slider, .others-slider').slick('slickGoTo', this.value - 1);
	});

	$('.control-panel__slider1').on('init reInit', function (event, slick) {
		var amount = slick.slideCount;
		$('#range2').attr('max', amount);
	})

	$('.control-panel__slider1').on('afterChange', function (e, slick, currentSlide) {
		$('#range2').val(currentSlide + 1);
	})

	$('#range2').on('input change', function () {
		$('.control-panel__slider1').slick('slickGoTo', this.value - 1);
	});


	$('.control-panel__slider2').on('init reInit', function (event, slick) {
		var amount = slick.slideCount;
		$('#range3').attr('max', amount);
	})

	$('.control-panel__slider2').on('afterChange', function (e, slick, currentSlide) {
		$('#range3').val(currentSlide + 1);
	})

	$('#range3').on('input change', function () {
		$('.control-panel__slider2').slick('slickGoTo', this.value - 1);
	});
});



$(function () {

	if ($(window).width() < 768) {
		$('.gallery-apartament').slick({
			slidesToShow: 1,
			dots: true,
			infinity: true,
			slidesToScroll: 1,
		});
		$('.control-panel__slider1').slick({
			slidesToShow: 1,
			dots: false,
			infinity: true,
			slidesToScroll: 1,
		});

		$('.control-panel__slider2').slick({
			slidesToShow: 1,
			dots: false,
			infinity: true,
			slidesToScroll: 1,
		});
	}

});




// Tabs
$(function () {
	$("ul.tabs__caption").on("click", "li:not(.active)", function () {

		$(this)
			.addClass("active")
			.siblings()
			.removeClass("active")
			.closest("div.tabs")
			.find("div.tabs__content")
			.removeClass("active")
			.eq($(this).index())
			.addClass("active");

	});

	$("ul.tabs__caption").click(function () {

		$('.sliderd').resize();
		$('.slider').resize();

	});
});


jQuery((function (t) {

	var c = function (t, e) {
		this.el = t || {},
			this.multiple = e || !1,
			this.el.find(".question-accordion__link").on("click", {
				el: this.el,
				multiple: this.multiple
			}, this.dropdown)
	};
	c.prototype.dropdown = function (e) {
		var i = e.data.el;
		$this = t(this),
			$next = $this.next(),
			$next.slideToggle(),
			$this.parent().toggleClass("open"),
			e.data.multiple || i.find(".question-accordion__submenu").not($next).slideUp().parent().removeClass("open")
	};
	new c(t("#question-accordion, #question-accordion2"), !1);

}));


jQuery(($) => {
	// input type number 
	// Уменьшаем на 1 
	$(document).on('click', '.input-number__minus', function () {
		let total = $(this).next();
		if (total.val() > 1) {
			total.val(+total.val() - 1);
		}
	});
	// Увеличиваем на 1 
	$(document).on('click', '.input-number__plus', function () {
		let total = $(this).prev();
		total.val(+total.val() + 1);
	});
	// Запрещаем ввод текста 
	document.querySelectorAll('.input-number__input').forEach(function (el) {
		el.addEventListener('input', function () {
			this.value = this.value.replace(/[^\d]/g, '');
		});
	});
});