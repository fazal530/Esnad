document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("[data-mining-map-tab]");
    const provinces = document.querySelectorAll("[data-mining-map-content]");
    const circles = document.querySelectorAll("[data-mining-map-circle]");
    console.log("Mining map initialized");
  
    // 0) Hide all pins immediately on load (prevents flash)
    document.querySelectorAll(".pin-wrapper").forEach(pin => {
      pin.style.display = "none";
    });
  
    /**
     * Hide everything (provinces, circles, tabs, pins)
     */
    function hideAllProvinces() {
      provinces.forEach(p => p.classList.remove("is-active"));
      circles.forEach(c => c.removeAttribute("data-mining-map-circle-active"));
      tabs.forEach(t => t.classList.remove("active"));
  
      // Hide all pin wrappers
      document.querySelectorAll(".pin-wrapper").forEach(pin => {
        pin.style.display = "none";
      });
    }
  
    /**
     * Show a specific province by name
     * NOTE: we do NOT show pins here anymore.
     */
    function showProvince(provinceName) {
      hideAllProvinces();
  
      // Show province content
      const provinceContent = document.querySelector(
        `[data-mining-map-content="${provinceName}"]`
      );
      if (provinceContent) {
        provinceContent.classList.add("is-active");

        // Show .province-text inside the province
        const provinceText = provinceContent.querySelector(".province-text");
        const provinceTitle = provinceContent.querySelector(".province-title");

        if (provinceText) {
            provinceText.style.display = "block";
            provinceText.style.opacity = "1";
        }

        // Show global .map-description
        const mapDescription = document.querySelector(".map-description");
        if (mapDescription) {
            mapDescription.style.display = "block";
            mapDescription.style.opacity = "1";
        }

        const miningTitle = document.querySelector(".miningMap__title");
        if (miningTitle) {
            miningTitle.innerHTML = provinceTitle.innerHTML;
        }

        // --- NEW: Reset all paths first ---
        document.querySelectorAll('[data-mining-map-region]').forEach(path => {
            path.removeAttribute("data-mining-map-region-active");
            path.style.opacity = "0.4";
        });

        // --- NEW: Activate selected path ---
        const activePath = document.querySelector(
            `[data-mining-map-region="${provinceName}"]`
        );
        if (activePath) {
            activePath.setAttribute("data-mining-map-region-active", "true");
            activePath.style.opacity = "1";
        }

        // Reset all circles (uncheck/unselect)
        document.querySelectorAll("[data-mining-map-circle]").forEach(circleGroup => {
            circleGroup.querySelectorAll("circle").forEach(c => {
            c.setAttribute("fill-opacity", "0.4");
            });
        });

        // ensure pins remain hidden by default
        provinceContent.querySelectorAll(".pin-wrapper").forEach(pin => {
          pin.style.display = "none";
        });
      }
  
      // Highlight circles on map for this province
      document
        .querySelectorAll(`[data-mining-map-circle="${provinceName}"]`)
        .forEach(c => c.setAttribute("data-mining-map-circle-active", ""));
  
      // Highlight corresponding tab
      const activeTab = document.querySelector(
        `[data-mining-map-tab="${provinceName}"]`
      );
      if (activeTab) {
        activeTab.classList.add("active");
      }
    }
  
    /**
     * Event listeners
     */
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const province = tab.getAttribute("data-mining-map-tab");
        console.log(province);
        showProvince(province); // pins remain hidden until a circle is clicked
      });
    });

    // Attach click events to all SVG paths with data-mining-map-region
    document.querySelectorAll('[data-mining-map-region]').forEach(path => {
        path.addEventListener('click', function () {
        const provinceName = this.getAttribute('data-mining-map-region');
        if (provinceName) {
            showProvince(provinceName);
        }
        });
    });
  
    circles.forEach(circle => {
      circle.addEventListener("click", () => {
        const province = circle.getAttribute("data-mining-map-circle");
        showProvince(province); // switch province (pins still hidden)
  
        // Show only the pin that matches this circle's ID
        const circleId = circle.getAttribute("data-mining-map-circle-id");
        if (circleId !== null) {
          // Hide all pins in this province (redundant safety)
          document
            .querySelectorAll(
              `[data-mining-map-content="${province}"] .pin-wrapper`
            )
            .forEach(pin => (pin.style.display = "none"));
  
          // Show matching pin
          const matchingPin = document.querySelector(
            `[data-mining-map-content="${province}"] .pin-wrapper[data-mining-map-circle-id="${circleId}"]`
          );
          if (matchingPin) {
            matchingPin.style.display = "block";
          }
        }
      });
    });
  
    // Optional: if you want a default province selected on load (pins still hidden):
    showProvince("riyadh-province");
  });
  