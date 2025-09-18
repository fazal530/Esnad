(function ($, Drupal) {
  Drupal.behaviors.aosInit = {
    attach: function (context, settings) {
      AOS.init({
        duration: 1000, // animation speed
        once: false      // run only once
      });
    }
  };
})(jQuery, Drupal);

(function ($, Drupal) {
  Drupal.behaviors.scrollAnimate = {
    attach: function (context, settings) {
      var options = { threshold: 0.25 }; // trigger when ~25% visible

      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          var el = entry.target;
          if (entry.isIntersecting) {
            el.classList.add('visible');
          } else {
            el.classList.remove('visible');
          }
        });
      }, options);

      // observe each scrole-content (use once to avoid duplicate observers)
      $('.scrole-content', context).once('scrollAnimate').each(function () {
        observer.observe(this);
      });
    }
  };
})(jQuery, Drupal);
