const swiper = new Swiper(".suites .swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000, // (3000ms = 3 segundos)
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  slidesPerView: 3,
  spaceBetween: 30,

  breakpoints: {
    320: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },

  pagination: {
    el: ".swiper-pagination",
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
