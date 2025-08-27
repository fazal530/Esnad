(function ($, Drupal) {
  Drupal.behaviors.backgroundSlider = {
    attach: function (context, settings) {
      // Re-initialize Slick on the specific element containing the slider.
      once('mySlickReinit', '[dir="ltr"] .make-carosel', context).forEach((el) => {
        const $carousel = $(el);

        // If it's already initialized, destroy before re-init
        if ($carousel.hasClass('slick-initialized')) {
          $carousel.slick('unslick');
        }

        $carousel.slick({
          slidesToShow: 3.5,
          slidesToScroll: 1,
          arrows: false,
          infinite: false, // <-- important: disable infinite to keep alignment
          autoplay: false,
          speed: 500,
          rtl: false,
          centerMode: false, // makes extra slides appear on the right
          responsive: [
            {
              breakpoint: 1440,
              settings: { slidesToShow: 2 }
            },
            {
              breakpoint: 780,
              settings: { slidesToShow: 1, arrows: false }
            }
          ]
        });
      });

      // Re-initialize Slick on the specific element containing the slider.
      once('mySlickReinit', '[dir="rtl"] .make-carosel', context).forEach((el) => {
        const $carousel = $(el);

        // If it's already initialized, destroy before re-init
        if ($carousel.hasClass('slick-initialized')) {
          $carousel.slick('unslick');
        }

        $carousel.slick({
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          infinite: true,
          autoplay: false,
          autoplaySpeed: 3000,
          speed: 500,
          centerMode: false, // makes extra slides appear on the right
          responsive: [
            {
              breakpoint: 1440,
              settings: { slidesToShow: 2 }
            },
            {
              breakpoint: 780,
              settings: { slidesToShow: 1, arrows: false }
            }
          ]
        });
      });




      // $('[dir="ltr"] .make-slick-carosel', context).each(function () {
      // 	if (!$(this).hasClass('slick-initialized')) {
      // 		$(this).slick({
      // 			slidesToShow: 1,       // 👈 Number of slides (cards) shown at once
      // 			slidesToScroll: 1,     // 👈 Number of slides to move when scrolling/clicking arrow
      // 			arrows: false,          // 👈 Show previous/next arrows
      // 			infinite: true,       // 👈 Loop back to first slide when reaching the end (false = no loop)
      // 			autoplay: true,       // 👈 Automatically scroll through slides
      // 			autoplaySpeed: 3000,   // 👈 Time between auto scrolls (ms), only works if autoplay is true
      // 			speed: 500,
      // 			ltr: true,           // 👈 Transition speed (ms) between slides

      // 			responsive: [          // 👈 Media query breakpoints for responsiveness
      // 				{
      // 					breakpoint: 1440,  // 👈 If screen is 1024px or less
      // 					settings: {
      // 						slidesToShow: 1  // 👈 Show 2 slides
      // 					}
      // 				},
      // 				{
      // 					breakpoint: 780,   // 👈 If screen is 768px or less
      // 					settings: {
      // 						slidesToShow: 1, // 👈 Show 1 slide
      // 						arrows: false    // 👈 Hide arrows on small screens
      // 					}
      // 				}
      // 			]

      // 		});
      // 	}
      // });
      // $('[dir="rtl"] .make-slick-carosel', context).each(function () {
      // 	if (!$(this).hasClass('slick-initialized')) {
      // 		$(this).slick({
      // 			slidesToShow: 1,       // 👈 Number of slides (cards) shown at once
      // 			slidesToScroll: 1,     // 👈 Number of slides to move when scrolling/clicking arrow
      // 			arrows: false,          // 👈 Show previous/next arrows
      // 			infinite: true,       // 👈 Loop back to first slide when reaching the end (false = no loop)
      // 			autoplay: true,       // 👈 Automatically scroll through slides
      // 			autoplaySpeed: 3000,   // 👈 Time between auto scrolls (ms), only works if autoplay is true
      // 			speed: 500,
      // 			rtl: true,         // 👈 Transition speed (ms) between slides

      // 			responsive: [          // 👈 Media query breakpoints for responsiveness
      // 				{
      // 					breakpoint: 1440,  // 👈 If screen is 1024px or less
      // 					settings: {
      // 						slidesToShow: 1  // 👈 Show 2 slides
      // 					}
      // 				},
      // 				{
      // 					breakpoint: 780,   // 👈 If screen is 768px or less
      // 					settings: {
      // 						slidesToShow: 1, // 👈 Show 1 slide
      // 						arrows: false    // 👈 Hide arrows on small screens
      // 					}
      // 				}
      // 			]

      // 		});
      // 	}
      // });



    }
  };
})(jQuery, Drupal);


