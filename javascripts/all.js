$('.slick-slider').slick({
  infinite: true,
  arrows: false,
  slidesToShow: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2
      }
    },{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});

