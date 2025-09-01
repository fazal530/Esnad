(function ($, Drupal) {
  Drupal.behaviors.backgroundSlider = {
    attach: function (context, settings) {

      // carosel rtl
      // carosel rtl
      once('mySlickReinit', '[dir="rtl"] .make-carosel', context).forEach((el) => {
        const $carousel = $(el);
        if ($carousel.hasClass('slick-initialized')) {
          $carousel.slick('unslick');
        }

        $carousel.slick({
          slidesToShow: 3.5,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
          autoplay: true,
          rtl: true,
          speed: 500,
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

      // carosel ltr
      // carosel ltr
      once('mySlickReinit', '[dir="ltr"] .make-carosel', context).forEach((el) => {
        const $carousel = $(el);
        if ($carousel.hasClass('slick-initialized')) {
          $carousel.slick('unslick');
        }

        $carousel.slick({
          slidesToShow: 3.5,
          slidesToScroll: 1,
          arrows: false,
          infinite: false,
          autoplay: true,
          ltr: true,
          speed: 500,
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



      // slider rtl
      // slider rtl
      once('mySlickReinit', '[dir="rtl"] .make-slider', context).forEach((el) => {
        const $carousel = $(el);

        // If it's already initialized, destroy before re-init
        if ($carousel.hasClass('slick-initialized')) {
          $carousel.slick('unslick');
        }

        $carousel.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true, // <-- important: disable infinite to keep alignment
          autoplay: false,
          fade: true,
          rtl: false,
        });
      });

      // slider ltr
      // slider ltr
      once('mySlickReinit', '[dir="ltr"] .make-slider', context).forEach((el) => {
        const $carousel = $(el);

        // If it's already initialized, destroy before re-init
        if ($carousel.hasClass('slick-initialized')) {
          $carousel.slick('unslick');
        }

        $carousel.slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          infinite: true, // <-- important: disable infinite to keep alignment
          autoplay: true,
          fade: true,
          speed: 500,
          ltr: true,
        });
      });

    }
  };
})(jQuery, Drupal);

// Text animation
// Text animation
const texts = ["text1", "text2", "text3"];
let current = 0;
function showText() {
  const el = document.getElementById(texts[current]);

  // Reset previous state
  el.classList.remove("hide", "show");
  el.style.display = "block";

  // Trigger reflow (to restart animation)
  void el.offsetWidth;

  // Drop in
  el.classList.add("show");

  // Drop out after visible duration
  setTimeout(() => {
    el.classList.remove("show");
    el.classList.add("hide");

    // After drop out finishes, clean up and show next
    setTimeout(() => {
      el.classList.remove("hide");
      el.style.display = "none";

      // Move to next text
      current = (current + 1) % texts.length;
      showText();
    }, 800); // dropOut duration
  }, 3000); // visible duration (change to your liking)
}

showText();
