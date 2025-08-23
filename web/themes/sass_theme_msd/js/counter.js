(function (Drupal) {
    Drupal.behaviors.counterUp = {
      attach: function (context) {
        const format = new Intl.NumberFormat();
  
        function animateValue(el, start, end, duration) {
          const startTime = performance.now();
          function frame(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out
            const value = Math.round(start + (end - start) * eased);
            el.textContent = format.format(value);
            if (progress < 1) requestAnimationFrame(frame);
          }
          requestAnimationFrame(frame);
        }
  
        function setupCounter(el) {
          const end = parseInt(el.dataset.target.replace(/,/g, ''), 10) || 0;
          const duration = parseInt(el.dataset.duration, 10) || 1200;
          let started = false;
  
          const start = () => {
            if (started) return;
            started = true;
            animateValue(el, 0, end, duration);
          };
  
          if ('IntersectionObserver' in window) {
            const io = new IntersectionObserver(entries => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  start();
                  io.unobserve(el);
                }
              });
            }, { threshold: 0.35 });
            io.observe(el);
          } else {
            start();
          }
        }
  
        once('counter-up', '.counter', context).forEach(setupCounter);
      }
    };
  })(Drupal);
  