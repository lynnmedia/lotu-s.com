$(document).ready(function () {
	/*vars used throughout*/
	var wh,
		scrollSpeed = 1000,
		parallaxSpeedFactor = 0.6,
		scrollEase = 'easeOutExpo',
		targetSection,
		sectionLink = 'a.navigateTo',
	 	section = $('.section'),
		slideData,
        isMobile = false;
        $("nav").sticky({topSpacing:0});

        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            isMobile = true;
        }

//INIT --------------------------------------------------------------------------------/
    $('#carouselSlider').flexslider({
        animation: "slide",
        animationLoop: true,
        itemWidth: 237,
        itemMargin: 2,
        start: function(slider){
            $('body').removeClass('loading');
        }
    });

	if (isMobile == true) {
		$('.header').addClass('mobileHeader');	//add mobile header class
		$('body').addClass('touch-device');
		$('.logo-mini').hide();
		slideData = 	[			// Slideshow Images
			{image : './images/slider/Jagannatha-480.jpg',
				title : '<h2>Sri Jagannatha</h2>',
				},

			{image : './images/slider/Baladeva-480.jpg',
				title : '<h2>Sri Baladeva</h2>',
				},

			{image : './images/slider/Subhadra-480.jpg',
				title : '<h2>Jagannatha, Baladeva, Subhadra</h2>',
				},

			{image : './images/slider/Jagannatha-Rathayatra-480.jpg',
				title : '<h2>Sri Jagannatha Ratha Yatra</h2>',
				},

			{image : './images/slider/Ratha-yatra-carts-480.jpg',
				title : '<h2>Ratha Yatra carts of Subhadra & Baladeva</h2>',
				},
		];
	} else {
		$('.page').addClass('desktop');
		$('.logo-mini').show();
		$('.parallax').addClass('fixed-desktop');
		$('#parallax-1').css('background-image', 'url(images/Jagannatha-Baladeva-Subhadra-LA.jpg)');
		$('#parallax-2').css('background-image', 'url(images/Garbhodakasayi-Vishnu.jpg)');
		$('#parallax-3').css('background-image', 'url(images/Paramatma.jpg)');
		$('#parallax-4').css('background-image', 'url(images/Brahma-Vishnu-Shiva.jpg)');
		$('#parallax-5').css('background-image', 'url(images/Prabhupada.jpg)');
		$('#parallax-6').css('background-image', 'url(images/Jagannatha-Baladeva-Subhadra.jpg)');
		slideData = 	[			// Slideshow Images
			{image : './images/slider/Jagannatha.jpg',
				title : '<h2>Sri Jagannatha</h2>',
				},

			{image : './images/slider/Baladeva.jpg',
				title : '<h2>Sri Baladeva</h2>',
				},

			{image : './images/slider/Subhadra.jpg',
				title : '<h2>Srimati Subhadra</h2>',
				},

			{image : './images/slider/Jagannatha-Rathayatra.jpg',
				title : '<h2>Sri Jagannatha Ratha Yatra</h2>',
				},

			{image : './images/slider/Ratha-yatra-carts.jpg',
				title : '<h2>Ratha Yatra carts of Subhadra & Baladeva</h2>',
				},		];
	}


//MENU --------------------------------------------------------------------------------/
	$(".menu a").click(function () {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 1000,
            easing: "swing"
        });
        return false;
    });


//PARALLAX ----------------------------------------------------------------------------/
	$(window).bind('load', function () {
		parallaxInit();						  
	});

	function parallaxInit() {
		if (isMobile == true) return false;
		$('#parallax-1').parallax();
		$('#parallax-2').parallax();
		$('#parallax-3').parallax();
		$('#parallax-4').parallax();
		$('#parallax-5').parallax();
	}


//HOMEPAGE SPECIFIC -----------------------------------------------------------------/
	function sliderHeight() {
		wh = $(window).height();
		$('#homepage').css({height: wh});
	}
	sliderHeight();

    function moveTo(contentArea){
        var goPosition = $(contentArea).offset().top;
        $('html,body').animate({ scrollTop: goPosition}, 'slow');
    }

//	Accordion  ------------------------------------------------------------------------/

	(function () {

		var $container = $('.accContainer'),
			$trigger   = $('.accTrigger');
			fullWidth = $container.outerWidth(true);

		$container.hide();
		$trigger.first().addClass('active').next().show();

		$trigger.css('width', fullWidth - 2);
		$container.css('width', fullWidth - 2);

		$trigger.on('click', function (e) {
			if ($(this).next().is(':hidden') ) {
			$trigger.removeClass('active').next().slideUp(300);
			$(this).toggleClass('active').next().slideDown(300);
			}
			e.preventDefault();
		});

		// Resize
		$(window).on('resize', function () {
			fullWidth = $container.outerWidth(true)
			$trigger.css('width', $trigger.parent().width());
			$container.css('width', $container.parent().width());
		});

	})();


// SUPERSIZED SLIDESHOW -----------------------------------------------------------------/
	$.supersized({

		// Functionality
		slideshow               :   1,			// Slideshow on/off
		autoplay				:	1,			// Slideshow starts playing automatically
		start_slide             :   1,			// Start slide (0 is random)
		stop_loop				:	0,			// Pauses slideshow on last slide
		random					:	0,			// Randomize slide order (Ignores start slide)
		slide_interval          :   5000,		// Length between transitions
		transition				:	1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	600,		// Speed of transition
		new_window				:	1,			// Image links open in new window/tab
		pause_hover             :   0,			// Pause slideshow on hover
		keyboard_nav            :   1,			// Keyboard navigation on/off
		performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
		image_protect			:	1,			// Disables image dragging and right click with Javascript

		// Size & Position						   
		min_width		        :   0,			// Min width allowed (in pixels)
		min_height		        :   0,			// Min height allowed (in pixels)
		vertical_center         :   1,			// Vertically center background
		horizontal_center       :   1,			// Horizontally center background
		fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
		fit_portrait         	:	1,			// Portrait images will not exceed browser height
		fit_landscape			:   0,			// Landscape images will not exceed browser width

		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		thumb_links				:	0,			// Individual thumb links for each slide
		thumbnail_navigation    :   0,			// Thumbnail navigation
		slides 					:	slideData,
									
		// Theme Options			   
		progress_bar			:	0,			// Timer for each slide							
		mouse_scrub				:	0

	});

//WINDOW EVENTS ---------------------------------------------------------------------/	
	 
	$(window).bind('resize',function () {

		//Update slider height
		sliderHeight();

	});
	
});
