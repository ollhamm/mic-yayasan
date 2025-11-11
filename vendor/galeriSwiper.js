document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".galeriSwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
