
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

$('.member-list').slick({
  infinite: false,
  arrows: true,
  autoplay: false,
  slidesToShow: 1,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 560,
      settings: { slidesToShow: 2 }
    },{
      breakpoint: 1024,
      settings: { slidesToShow: 3 }
    },{
      breakpoint: 1420,
      settings: { slidesToShow: 5 }
    }
  ]
});

 if ( $('.add-more-member').length != 0 ) {
  $('.add-more-member').on("click", function(){
    $(this).remove();
  });
 }
if ( $('.gallery-item-inner').length != 0 ) {
  $('.gallery-item-inner').magnificPopup({
    type:'image',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    gallery: {
      enabled: true
    }
  });
}

if ( $('.team-video-play').length != 0 ) {
  $('.team-video-play').magnificPopup({
    type:'iframe',
    removalDelay: 300,
    mainClass: 'mfp-fade'
  });
}