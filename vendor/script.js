document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    // Basic
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1.1,
    centeredSlides: false,

    // Pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // Navigation
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 1.3,
        spaceBetween: 16,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
    },
  });
  if (window.feather && typeof window.feather.replace === "function") {
    window.feather.replace();
  }

  // NAVBAR: show/hide on scroll (smooth slide from top)
  (function () {
    const nav = document.querySelector(".navbar");
    if (!nav) return;

    // set CSS variable and body padding to avoid content jump
    function refreshNavHeight() {
      const h = nav.offsetHeight || 72;
      document.documentElement.style.setProperty("--navbar-height", h + "px");
      document.body.classList.add("has-fixed-navbar");
    }

    refreshNavHeight();
    window.addEventListener("resize", refreshNavHeight);

    let lastScroll = window.pageYOffset || document.documentElement.scrollTop;
    let ticking = false;

    function onScroll() {
      const current = window.pageYOffset || document.documentElement.scrollTop;

      // always show when near top
      if (current <= 40) {
        nav.classList.remove("navbar-hidden");
        nav.classList.add("navbar-visible");
        lastScroll = current;
        return;
      }

      if (current > lastScroll && current > 80) {
        // scrolling down -> hide
        nav.classList.add("navbar-hidden");
        nav.classList.remove("navbar-visible");
      } else if (current < lastScroll) {
        // scrolling up -> show
        nav.classList.remove("navbar-hidden");
        nav.classList.add("navbar-visible");
      }

      lastScroll = current <= 0 ? 0 : current;
    }

    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(function () {
            onScroll();
            ticking = false;
          });
          ticking = true;
        }
      },
      { passive: true }
    );
  })();
});
