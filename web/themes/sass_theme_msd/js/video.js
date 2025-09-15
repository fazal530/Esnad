(function ($, Drupal) {
  Drupal.behaviors.videoPlay = {
    attach: function (context, settings) {
      const playBtn = once('videoPlay', '.icon img', context).shift();
      const thumbnail = context.querySelector('.thumbnail');
      const video = context.querySelector('.video');
      const real_video = context.querySelector('.video video');
      console.log("showme1");

      if (playBtn && thumbnail && video) {
        // Play button click
        playBtn.addEventListener("click", function () {
          console.log("showme3");
          thumbnail.style.display = "none";
          playBtn.style.display = "none";     // Hide play button
          real_video.play();                       // Start video
        });

        // Clicking video toggles play/pause
        // video.addEventListener("click", function () {
        //   if ( real_video.paused) {
        //     real_video.play();
        //   } else {
        //     real_video.pause();
        //   }
        // });

        // Hide controls while video plays
        video.addEventListener("play", function () {
          real_video.removeAttribute("controls");
        });

        // Show controls again when paused
        video.addEventListener("pause", function () {
          real_video.setAttribute("controls", "controls");
        });

        // Reset when ended
        real_video.addEventListener("ended", function () {
          thumbnail.style.display = "block";
          playBtn.style.display = "block";
          real_video.setAttribute("controls", "controls"); // restore controls
        });
      }
    }
  };
})(jQuery, Drupal);
