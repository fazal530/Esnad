(function ($, Drupal) {
  Drupal.behaviors.videoPlay = {
    attach: function (context, settings) {
      const playBtn = once('videoPlay', '.icon img', context).shift();
      const thumbnail = context.querySelector('.thumbnail img');
      const video = context.querySelector('.video video');
      console.log("showme1");

        playBtn.addEventListener("click", function () {
              console.log("showme3");
          thumbnail.style.display = "none";   // Hide thumbnail
          playBtn.style.display = "none";     // Hide play button
          video.play();                       // Start video
        });

        video.addEventListener("ended", function () {
          thumbnail.style.display = "block";
          playBtn.style.display = "block";
        });
      
    }
  };
})(jQuery, Drupal);
