(function ($, Drupal) {
  Drupal.behaviors.aosInit = {
    attach: function (context, settings) {
      AOS.init({
        duration: 1200,
        once: false, 
        mirror: true,   
      });
    }
  };
})(jQuery, Drupal);
