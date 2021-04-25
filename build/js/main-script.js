"use strict";

const scroller = new LocomotiveScroll({
	el: document.querySelector('[data-scroll-container]'),
	smooth: true
})


$(function () {

	$('.js-mobile-menu').on('click', function () {
		$(this).toggleClass('active');
		$('.header__menu').toggleClass('opened');
		$('body').toggleClass('menu-opened');
	});

	$("#course-registration").validate({
		rules: {
			tel: {
				number: true
			}
		},
		messages: {
			name: {
				required: "Это поле обязательно для заполнения",
			},
			email: {
				required: "Это поле обязательно для заполнения",
				email: "Адрес должен быть вида mail@mail.ru"
			},
			tel: {
				required: "Это поле обязательно для заполнения",
				number: "Номер должен быть формата +7 (999) 999-99-99"
			}
		}
	})

});










