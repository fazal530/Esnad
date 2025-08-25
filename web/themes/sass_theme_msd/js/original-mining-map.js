// map-interactions.js
document.addEventListener("DOMContentLoaded", function () {
    const paths = document.querySelectorAll("[data-mining-map-region]");
    const circles = document.querySelectorAll("[data-mining-map-circle]");
    const buttons = document.querySelectorAll(".miningMap__tab");
    const subtitleElement = document.querySelector(".miningMap__subtitle");
    const footElement = document.querySelector(".miningMap__foot");
  
    // Allowed regions (hover highlighting)
    const targetRegions = [
      "riyadh-province",
      "makkah-province",
      "najran-province",
      "tabuk-province",
      "eastern-province",
    ];
  
    /**
     * Utility: deactivate all circles
     */
    function deactivateCircles() {
      circles.forEach(circleGroup => {
        circleGroup.querySelectorAll("circle").forEach(innerCircle => {
          innerCircle.classList.add("inactive");
          innerCircle.setAttribute("fill-opacity", "0.4");
        });
      });
    }
  
    /**
     * Utility: reset paths + buttons
     */
    function resetUI() {
      buttons.forEach(b => b.classList.remove("miningMap__tab--active", "active"));
      paths.forEach(p => {
        p.removeAttribute("data-mining-map-region-active");
        p.style.opacity = "0.5";
      });
    }
  
    /**
     * Activate a region (from circle or path click)
     */
    function activateRegion(region, randomCircle = false) {
      resetUI();
      deactivateCircles();
  
      // Tab
      const tab = document.querySelector(`[data-mining-map-tab="${region}"]`);
      if (tab) {
        tab.classList.add("miningMap__tab--active", "active");
      }
  
      // Path
      const path = document.querySelector(`[data-mining-map-region="${region}"]`);
      if (path) {
        path.setAttribute("data-mining-map-region-active", "true");
        path.style.opacity = "1";
      }
  
      // Circles
      const regionCircles = document.querySelectorAll(`[data-mining-map-circle="${region}"]`);
      let activeCircleGroup = regionCircles[0];
  
      if (randomCircle && regionCircles.length > 0) {
        activeCircleGroup = regionCircles[Math.floor(Math.random() * regionCircles.length)];
      }
  
      if (activeCircleGroup) {
        activeCircleGroup.querySelectorAll("circle").forEach(innerCircle => {
          innerCircle.classList.remove("inactive");
          innerCircle.setAttribute("fill-opacity", "1");
        });
      }
    }
  
    /**
     * Bind events: circle clicks
     */
    circles.forEach(circleGroup => {
      circleGroup.addEventListener("click", function () {
        const region = this.getAttribute("data-mining-map-circle");
        activateRegion(region);
      });
    });
  
    /**
     * Bind events: path clicks
     */
    paths.forEach(path => {
      path.addEventListener("click", function () {
        const region = this.getAttribute("data-mining-map-region");
        activateRegion(region, true); // pick random circle on region click
      });
    });
  
    /**
     * Add custom hover class for selected regions
     */
    targetRegions.forEach(region => {
      const element = document.querySelector(`[data-mining-map-region="${region}"]`);
      if (element) element.classList.add("custom-hover");
    });
  
    /**
     * Hide footer if subtitle empty
     */
    if (subtitleElement && footElement && subtitleElement.innerHTML.trim() === "") {
      footElement.style.display = "none";
    }
  
    /**
     * Default active region: Riyadh
     */
    activateRegion("riyadh-province", true);
  });
  
  


  document.addEventListener('DOMContentLoaded', function() {
    const paths = document.querySelectorAll('[data-mining-map-region]');
    const circles = document.querySelectorAll('[data-mining-map-circle]');
    const buttons = document.querySelectorAll('.miningMap__tab'); 

    // Function to deactivate all circles
    function deactivateCircles() {
        circles.forEach(circleGroup => {
            const innerCircles = circleGroup.querySelectorAll('circle');
            innerCircles.forEach(innerCircle => {
                innerCircle.classList.add('inactive');
                innerCircle.setAttribute('fill-opacity', '0.4'); // default opacity
            });
        });
    }

    // Add click event to each circle group
    circles.forEach(circleGroup => {
        circleGroup.addEventListener('click', function() {

            // Hide all pin wrappers
            document.querySelectorAll(".province-text, .map-description").forEach(province => {
                province.style.display = "none";
            });

            // Deactivate all circles first
            deactivateCircles();

            // Get related region, tab, and path
            const region = this.getAttribute('data-mining-map-circle');
            const correspondingTab = document.querySelector(`[data-mining-map-tab="${region}"]`);
            const correspondingPath = document.querySelector(`[data-mining-map-region="${region}"]`);

            // Reset all tabs
            buttons.forEach(b => b.classList.remove('miningMap__tab--active', 'active'));

            // Reset all paths
            paths.forEach(p => {
                p.removeAttribute('data-mining-map-region-active');
                p.style.opacity = '0.5';
            });

            // Activate related tab
            if (correspondingTab) {
                correspondingTab.classList.add('miningMap__tab--active', 'active');
            }

            // Activate related path
            if (correspondingPath) {
                correspondingPath.setAttribute('data-mining-map-region-active', 'true');
                correspondingPath.style.opacity = '1';
            }

            // Activate clicked circle (make opacity = 1)
            const innerCircles = this.querySelectorAll('circle');
            innerCircles.forEach(innerCircle => {
                innerCircle.classList.remove('inactive');
                innerCircle.setAttribute('fill-opacity', '1');
            });
        });
    });
});
