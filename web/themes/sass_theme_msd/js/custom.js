

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

    // Start
    showText();
