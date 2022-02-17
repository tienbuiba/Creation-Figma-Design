document.addEventListener('DOMContentLoaded', function () {
  const menuOpen = document.querySelector('.menu-toggle')
    const menuClose = document.querySelector('.menu-close')


  const menu = document.querySelector('.menu')
  if (!menuOpen || !menuClose || !menu) return
  menuOpen.addEventListener('click', function () {
    menu.classList.add('is-active')
  })

  menuClose.addEventListener('click', function () {
    menu.classList.remove('is-active')
  })


})
document.addEventListener('DOMContentLoaded', function () {
  const menuOpen = document.querySelector('.header3--toggle')
  const menuClose = document.querySelector('.menu-close')


  const menu = document.querySelector('.menu')
  if (!menuOpen || !menuClose || !menu) return
  menuOpen.addEventListener('click', function () {
    menu.classList.add('is-active')
  })

  menuClose.addEventListener('click', function () {
    menu.classList.remove('is-active')
  })


})
// 
$(document).ready(function () {
  $(".image-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    draggable: false,
    prevArrow: `<button type='button' class='slick-prev slick-arrow'><ion-icon name="arrow-back-outline"></ion-icon></button>`,
    nextArrow: `<button type='button' class='slick-next slick-arrow'><ion-icon name="arrow-forward-outline"></ion-icon></button>`,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          infinite: false,
        },
      },
    ],
    // autoplay: true,
    // autoplaySpeed: 1000,
  });
});