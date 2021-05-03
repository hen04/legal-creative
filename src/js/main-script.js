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

	jQuery.validator.addMethod("checkMask", function(value, element) {
		return /\+\d{1}\(\d{3}\)\d{3}–\d{2}–\d{2}/g.test(value);
	});

	$(".js-legal-form").validate({
		rules: {
			tel: {
				checkMask: true
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
				checkMask: "Введите полный номер телефона"
			},
			message: {
				required: "Это поле обязательно для заполнения",
			}
		}
	})
	$('.js-phone').mask("+7(999)999–99–99", {autoclear: false});


});










