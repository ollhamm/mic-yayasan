document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".homeSwiper", {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 6,
    centeredSlides: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

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
});
