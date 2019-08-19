var owl = $('.mycarousel .owl-carousel');
owl.owlCarousel({
  loop: true,
  margin: 0,
  navSpeed: 800,
  items: 1,
  autoplay: true,
  transitionStyle: "fade",
});

var owlPopular = $('.content-popular .owl-carousel')
owlPopular.owlCarousel({
  loop: true,
  margin: 30,
  dots: false,
  nav: false,
  navText: ["<i class='far fa-chevron-left'></i>", "<i class='far fa-chevron-right'></i>"],
  navSpeed: 800,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})



var owlEvents = $('.event-carousel .owl-carousel')
owlEvents.owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  navSpeed: 800,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})
