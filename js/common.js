$(document).ready(function() {

	//Content Title Margin Top
	// function contentTitleMargin() {
	// 	var width = $('.about-us-content__title').width();
	// 	$('.about-us-content__title').css('margin-top', width).css('opacity', 1);;
	// }
	// contentTitleMargin();
	// $(window).resize(contentTitleMargin);


	// TEST
	// function contentTitleMargin() {
	// 	var clientsTitleHeight = $('.our-clients__title').height() + 42 || 0;
	// 	var margin = $(window).height() - $('.header').height() - 100 - clientsTitleHeight;
	// 	var width = $('.about-us-content__title').width(margin);
	// 	$('.about-us-content__title').css('margin-top', width.width() ).css('opacity', 1);;
	// }
	// contentTitleMargin();
	// $(window).resize(contentTitleMargin);
	
	//Our Clients Slider
	function clientsSlider () {
		var wrapper = $('.clients-slider');
		if($(window).width() <= 960 || $(window).height() < 768) {
			wrapper.slick({
				arrows: false,
				dots: true,
				infinite: true,
				speed: 300,
				autoplay: true,
				slidesToShow: 3,
				slidesToScroll: 3,
				adaptiveHeight: true,
				responsive: [
					{
					  breakpoint: 961,
					  settings: "unslick"
					},
					{
					  breakpoint: 960,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					  }
					},
					{
					  breakpoint: 768,
					  settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					  }
					}
				]
			});
		} else {
			if ( $(".slick-initialized").length && $(window).height() > 768) {
		      	wrapper.slick('unslick');
		      }
		}
	}
	clientsSlider ();
	$(window).resize(clientsSlider);

	// Count-Up
	$('.case-block .numbers').show().counterUp({
          delay: 10,
          time: 1000
      });

	// Portfolio Slider
	$('.portfoliio-case-slider').slick({
				arrows: true,
				dots: true,
				infinite: true,
				speed: 300,
				// autoplay: true,
				adaptiveHeight: true,
				responsive: [
					{
					  breakpoint: 1200,
					  settings: {
					  	arrows: false
					  }
					}
				]
		});

	//Header menu onclick	(Animation)
	$(".header_menu").click(function() {
		$(".sandwich").toggleClass("active");
	});
	
	$(".header_menu").click (function(){
		$(".header_nav").fadeToggle(600);
		$(".header_nav_list a").toggleClass ("fadeInUp animated");
		$(".top_title").toggleClass ("top_title_opacity");
		menuItemsMargin();
	});

	//Menu items click
	$(".header_nav_list a").click(function() {
		$(".header_nav").fadeToggle(600);
		$(".header_nav_list a").toggleClass ("fadeInUp animated");
		$(".sandwich").toggleClass("active");
		$(".top_title").toggleClass ("top_title_opacity");
	});	

	//Mobile Menu Items Margin
	function menuItemsMargin() {
		var windowHeight = $(window).height(),
			menuItems= $('.header_nav_list'),
			result = 0;
		if(windowHeight > 400) {
			result = ( windowHeight - menuItems.height() ) / 2;
			menuItems.css('margin-top', result);
		} else {
			menuItems.css('margin-top', 26);
		}
		
	}

	//Phone Input Mask
	$("input[name='client-phone'], input[name='phone']").mask("+7 (999) 999-99-99");

	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
	particlesJS.load('particles-js', 'libs/particles/particles.json', function() {
		
	});

	//Portfolio List name click
	$(".portfolio__navigation li").click(function(){
		$(".portfolio__navigation li").removeClass("active")
		$(this).addClass("active")
	});

	//Show Dots Navigation Description
	$('.dots-navigation a').hover(function(){
		$(this).find('.popover').removeClass('hidden').addClass('animated fadeInLeft');
	}, function() {
		$(this).find('.popover').addClass('hidden').removeClass('fadeInLeft');
	});

	//Join The Team Click 
	$('.team-join').click(function(){
		$('.our-team-wrap').hide();
		$('.team-join-form-wrap').removeClass('hidden').addClass('animated zoomIn')
	});

	//Main Page Animation
	function homePageAnimatio() {
		if ( window.location.pathname == '/' && $(window).width() > 960 ){
			$('.dots-navigation').removeClass('main-hidden').addClass('animated fadeInLeft');
			$('.social-links').removeClass('main-hidden').addClass('animated fadeInRight');
			$('.header-logo, .header-navigation').removeClass('main-hidden').addClass('animated fadeInDown');
			$('.main-title--name, .main-title--description').removeClass('main-hidden').addClass('animated slideInDown');
			$('.portfolio-link').removeClass('main-hidden').addClass('animated fadeInUp');
		} else if (window.location.pathname == '/' && $(window).width() < 960) {
			$('.dots-navigation').removeClass('main-hidden animated fadeInLeft');
			$('.social-links').removeClass('main-hidden animated fadeInRight');
			$('.header-logo, .header-navigation').removeClass('main-hidden animated fadeInDown');
			$('.main-title--name, .main-title--description').removeClass('main-hidden animated slideInDown');
			$('.portfolio-link').removeClass('main-hidden animated fadeInUp');
		}
	};
	homePageAnimatio();

	$(window).resize(homePageAnimatio);
	
	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("form").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("form").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

});

//Portfolio MixItUp
// $('.portfolio-wrap').mixItUp({
// 	pagination: {
// 			limit: 4// impose a limit of 8 targets per page
// 		}
// 	}
// );