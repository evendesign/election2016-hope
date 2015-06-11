
$('.auto-break-text').macho();

$('.hero-video-bg').YTPlayer();

$('.slick-slider').slick({
  infinite: true,
  arrows: true,
  dots: true,
  slidesToShow: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2
      }
    },{
      breakpoint: 1440,
      settings: {
        slidesToShow: 3
      }
    },{
      breakpoint: 1760,
      settings: {
        slidesToShow: 4
      }
    }
  ]
});

