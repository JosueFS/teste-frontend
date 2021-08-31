const mobileMenu = document.querySelector("menu.menu-btn");
const navbar = document.querySelector("nav.navbar");

const showMobileMenu = () => {
  mobileMenu.classList.toggle('open');
  navbar.classList.toggle('mobile');
  navbar.classList.toggle('open');
};

$(document).ready(function(){
  $("#services .owl-carousel").owlCarousel({
    dots: false,
    nav: false,
    margin: 16,
    stagePadding: 8,
    responsiveClass: true,
    responsiveBaseElement: "#services .owl-carousel",
    responsive: {
        0: {
          items: 1.3,
          center: true,
        },
        600: {
          items: 2,
        },
        800: {
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
    responsiveBaseElement: "#testimonials .owl-carousel",
    responsive: {
        0: {
          items: 1.2,
          center: true
        },
        640: {
          items: 2,
          nav: true
        },
        800: {
          items: 3,
          nav: true
        }
    }
  });
});
