const mobileMenu = document.querySelector("menu.menu-btn");
const navbar = document.querySelector("nav.navbar");

const showMobileMenu = () => {
  mobileMenu.classList.toggle('open');
  navbar.classList.toggle('mobile');
  navbar.classList.toggle('open');
};

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.owl-carousel' ).owlCarousel();
} );

$(document).ready(function(){
  $("#services .owl-carousel").owlCarousel({
    dots: false,
    nav: false,
    margin: 16,
    stagePadding: 8,
    responsiveClass: true,
    responsive: {
        0: {
          items: 1.3,
          center: true,
        },
        768: {
          items: 2,
        },
        960: {
          items: 3,
        }
    }
  });
});

$(document).ready(function(){
  $("#testimonials .owl-carousel").owlCarousel({
    dots: true,
    nav: false,
    margin: 16,
    stagePadding: 8,
    loop: true,
    responsiveClass: true,
    responsive: {
        0: {
          items: 1.2,
          center: true
        },
        768: {
          items: 2,
          nav: true,
        },
        960: {
          items: 3,
          nav: true
        }
    }
  });
});