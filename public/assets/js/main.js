/*
	Spectral by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$wrapper = $('#page-wrapper'),
		$banner = $('#banner'),
		$header = $('#header');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Mobile?
		if (browser.mobile)
			$body.addClass('is-mobile');
		else {

			breakpoints.on('>medium', function() {
				$body.removeClass('is-mobile');
			});

			breakpoints.on('<=medium', function() {
				$body.addClass('is-mobile');
			});

		}

	// Scrolly.
		$('.scrolly')
			.scrolly({
				speed: 1500,
				offset: $header.outerHeight()
			});

	// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right',
				target: $body,
				visibleClass: 'is-menu-visible'
			});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight() + 1,
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// ============================================
	// BACKGROUND VIDEO EFFECTS - BauGreen
	// ============================================

	// Background Video Smooth Effects
	$window.on('load', function() {
		var backgroundVideo = document.getElementById('bg-video');
		
		if (backgroundVideo) {
			
			// SLOW MOTION - ustaw prędkość odtwarzania
			backgroundVideo.playbackRate = 0.8; // 0.5 = połowa prędkości
			
			// Upewnij się że video jest wyciszone i zapętlone
			backgroundVideo.muted = true;
			backgroundVideo.loop = true; // Włącz zwykły loop
			
			// Płynne uruchomienie po załadowaniu
			backgroundVideo.addEventListener('canplaythrough', function() {
				backgroundVideo.play().catch(function(error) {
					console.log('Autoplay zablokowany przez przeglądarkę');
				});
			});
			
			// INTERAKTYWNE ZMIANY PRĘDKOŚCI
			$('.wrapper').on('mouseenter', function() {
				if (!browser.mobile) {
					backgroundVideo.playbackRate = 0.7; // Bardzo wolno
				}
			});
			
			$('.wrapper').on('mouseleave', function() {
				if (!browser.mobile) {
					backgroundVideo.playbackRate = 0.8; // Powrót do normalnego slow-mo
				}
			});
		}
	});

	// ============================================
	// DODATKOWE FUNKCJE VIDEO
	// ============================================

	// Funkcja do łatwej zmiany prędkości video
	window.setVideoSpeed = function(speed) {
		var video = document.getElementById('bg-video');
		if (video && !browser.mobile) {
			video.playbackRate = speed;
		}
	};

	// Funkcja do włączania/wyłączania video
	window.toggleBackgroundVideo = function() {
		var video = document.getElementById('bg-video');
		if (video) {
			if (video.paused) {
				video.play();
			} else {
				video.pause();
			}
		}
	};

	// Funkcja do zmiany przezroczystości video
	window.setVideoOpacity = function(opacity) {
		var video = document.getElementById('bg-video');
		if (video) {
			video.style.opacity = opacity;
		}
	};

	// ============================================
	// RESPONSIVE VIDEO HANDLING
	// ============================================

	// Wyłącz video na urządzeniach mobilnych dla wydajności
	breakpoints.on('<=medium', function() {
		var video = document.getElementById('bg-video'); // Twoje ID
		if (video) {
			video.pause();
			video.style.display = 'none';
		}
	});

	breakpoints.on('>medium', function() {
		var video = document.getElementById('bg-video'); // Twoje ID
		if (video) {
			video.style.display = 'block';
			video.play().catch(function(error) {
				console.log('Nie można wznowić video');
			});
		}
	});

	// Popup logic
	setTimeout(function() {
		$('#contact-popup').fadeIn();
	}, 45000); // 45 seconds

	// Close button and outside click handling
	$(document).on('click', function(e) {
		var popup = $('#contact-popup');
		var closeButton = $('.close-button');

		// If the popup is visible
		if (popup.is(':visible')) {
			// If the click is on the close button or outside the popup content
			if ($(e.target).is(closeButton) || !$(e.target).closest('.popup-content').length) {
				popup.fadeOut();
			}
		}
	});

})(jQuery);

// ============================================
// KONSOLA DEBUG - użyj w przeglądarce
// ============================================

// Przykłady komend do wpisania w konsoli:
// setVideoSpeed(0.25);  // Bardzo wolno
// setVideoSpeed(0.5);   // Wolno (domyślne)
// setVideoSpeed(1.0);   // Normalnie
// toggleBackgroundVideo(); // Włącz/wyłącz
// setVideoOpacity(0.5); // Zmień przezroczystość
// togglePingPong();     // Włącz/wyłącz ping-pong effect
