$('.slick-slider').slick({
  infinite: true,
  arrows: false,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 2,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});

