(function ($, Drupal) {
  Drupal.behaviors.aosInit = {
    attach: function (context, settings) {
      AOS.init({
        duration: 1200, // speed
        once: false,    // animate every time
        mirror: true    // also on scroll up
      });
    }
  };
})(jQuery, Drupal);
