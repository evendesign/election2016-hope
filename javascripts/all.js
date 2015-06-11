if( !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {

  var doc = $(document);
  var body = $('body');
  var page = $('.page');
  var desktop_breakpoint = 960;
  body.addClass('scale-content');

  $(window).on('scroll', function(){
    var scrolling = doc.scrollTop();
    var touch_bottom = body.height() - $(window).height();
    if (scrolling >= touch_bottom) {
      var viewport_width = $(window).width();
      if (viewport_width >= desktop_breakpoint) {
        var x = -($(window).height() * 0.8) + 'px';
        page.css('transform', 'translateY('+x+')');
        body.addClass('is-scaled');
      }
    } else {
      body.removeClass('is-scaled');
      page.css('transform', 'translateY(0)');
    }
  });

  $(window).resize(function() {
    var viewport_width = $(window).width();
    if (viewport_width < desktop_breakpoint) {
      body.removeClass('scale-content');
      page.css('transform', 'translateY(0)');
    } else {
      body.addClass('scale-content');
    }
  });

}

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
