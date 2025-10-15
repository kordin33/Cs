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
			
			// SLOW MOTION - ustaw prÄ™dkoĹ›Ä‡ odtwarzania
			backgroundVideo.playbackRate = 0.8; // 0.5 = poĹ‚owa prÄ™dkoĹ›ci
			
			// Upewnij siÄ™ ĹĽe video jest wyciszone i zapÄ™tlone
			backgroundVideo.muted = true;
			backgroundVideo.loop = true; // WĹ‚Ä…cz zwykĹ‚y loop
			
			// PĹ‚ynne uruchomienie po zaĹ‚adowaniu
			backgroundVideo.addEventListener('canplaythrough', function() {
				backgroundVideo.play().catch(function(error) {
					console.log('Autoplay zablokowany przez przeglÄ…darkÄ™');
				});
			});

			// Fallback: sprĂłbuj rozpoczÄ…Ä‡ odtwarzanie po pierwszej interakcji uĹĽytkownika
			['click', 'touchstart'].forEach(function(evt) {
				document.addEventListener(evt, function oncePlay() {
					if (backgroundVideo.paused) {
						backgroundVideo.play().catch(function(){});
					}
					document.removeEventListener(evt, oncePlay);
				});
			});
			
			// INTERAKTYWNE ZMIANY PRÄDKOĹšCI
			$('.wrapper').on('mouseenter', function() {
				if (!browser.mobile) {
					backgroundVideo.playbackRate = 0.7; // Bardzo wolno
				}
			});
			
			$('.wrapper').on('mouseleave', function() {
				if (!browser.mobile) {
					backgroundVideo.playbackRate = 0.8; // PowrĂłt do normalnego slow-mo
				}
			});
		}
	});

	// ============================================
	// DODATKOWE FUNKCJE VIDEO
	// ============================================

	// Funkcja do Ĺ‚atwej zmiany prÄ™dkoĹ›ci video
	window.setVideoSpeed = function(speed) {
		var video = document.getElementById('bg-video');
		if (video && !browser.mobile) {
			video.playbackRate = speed;
		}
	};

	// Funkcja do wĹ‚Ä…czania/wyĹ‚Ä…czania video
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

	// Funkcja do zmiany przezroczystoĹ›ci video
	window.setVideoOpacity = function(opacity) {
		var video = document.getElementById('bg-video');
		if (video) {
			video.style.opacity = opacity;
		}
	};

	// ============================================
	// RESPONSIVE VIDEO HANDLING
	// ============================================

	// WyĹ‚Ä…cz video na urzÄ…dzeniach mobilnych dla wydajnoĹ›ci
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
				console.log('Nie moĹĽna wznowiÄ‡ video');
			});
		}
	});

	// Popup logic
	setTimeout(function() {
		$('#contact-popup').fadeIn();
	}, 45000); // 45 seconds

	// Close button and outside click handling
	$(document).on('click', function(e) {
	var contactPopup = $('#contact-popup');
	var mapPopup = $('#map-popup');
	var closeButton = $('.close-button');

	// Zamknij widoczne popupy na klik poza treĹ›ciÄ… lub na przycisk zamkniÄ™cia
	if ($(e.target).is(closeButton) || !$(e.target).closest('.popup-liquid-glass').length) {
		if (contactPopup.is(':visible')) contactPopup.fadeOut();
		if (mapPopup.is(':visible')) mapPopup.fadeOut();
	}
	});

	// Map popup: otwieranie po klikniÄ™ciu adresu
$("#address-link").on('click', function(e) { e.preventDefault(); e.stopPropagation();
		$('#map-popup').fadeIn();
	});

})(jQuery);

// ============================================
// KONSOLA DEBUG - uĹĽyj w przeglÄ…darce
// ============================================

// PrzykĹ‚ady komend do wpisania w konsoli:
// setVideoSpeed(0.25);  // Bardzo wolno
// setVideoSpeed(0.5);   // Wolno (domyĹ›lne)
// setVideoSpeed(1.0);   // Normalnie
// toggleBackgroundVideo(); // WĹ‚Ä…cz/wyĹ‚Ä…cz
// setVideoOpacity(0.5); // ZmieĹ„ przezroczystoĹ›Ä‡
// togglePingPong();     // WĹ‚Ä…cz/wyĹ‚Ä…cz ping-pong effect

	// Attribution popup logic
	$(document).on('click', '.attribution-icon', function(event) {
		event.stopPropagation();
		$(this).parent().toggleClass('active');
	});

	$(document).on('click', function(event) {
		if (!$(event.target).closest('.attribution').length) {
			$('.attribution').removeClass('active');
		}
	});





