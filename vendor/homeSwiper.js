document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".homeSwiper", {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 1,

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
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
});
