// featured slider start
$(document).ready(function() {
    $('.featured_slider').slick({
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: false,
      nextArrow: false,
      responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      }, ]
    });
  });
  // featured slider end
  // testimonials slider start
  $(document).ready(function() {
    $('.testimonials_slider').slick({
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: false,
      nextArrow: false,
    });
  });
  // testimonials slider end
// blog slider start
$(document).ready(function() {
    $('.blog_slider').slick({
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 4,
      autoplay: true,
      autoplaySpeed: 2000,
      prevArrow: false,
      nextArrow: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }
      ]
    });
  });
  // blog slider end