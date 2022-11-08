$( document ).ready(function() {

    // menu-js
    $('.bar').click(function(){
        $('.offcanvas-wrapper').addClass('active');
    });
    $('.close, .offcanvas-menu ul li a').click(function(){
        $('.offcanvas-wrapper').removeClass('active');
    });

    // sticky js
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".site-header").removeClass("sticky");
        } else {
            $(".site-header").addClass("sticky");
        }
    });

    // sticky-icon
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $(".sticky-icon").removeClass("visable");
        } else {
            $(".sticky-icon").addClass("visable");
        }
    });


    $('.ab-faq-title').click(function(event) {
        event.preventDefault();
    });


    // slider-js
    const swiperOne = new Swiper('.who-slide-active', {
        // Optional parameters
        direction: 'horizontal',
        loop: false,
        slidesPerView: 'auto',
        spaceBetween: 46,
        breakpoints: {
            // when window width is >= 320px
            320: {
              spaceBetween: 20
            },
            640: {
              spaceBetween: 46
            }
        }
    });
      
    // wow-js
    var wow = new WOW(
        {
          boxClass:     'wow',      // animated element css class (default is wow)
          animateClass: 'animated', // animation css class (default is animated)
          offset:       100,          // distance to the element when triggering the animation (default is 0)
          mobile:       true,       // trigger animations on mobile devices (default is true)
          live:         true,       // act on asynchronously loaded content (default is true)
          callback:     function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
          },
          scrollContainer: null,    // optional scroll container selector, otherwise use window,
          resetAnimation: true,     // reset animation on end (default is true)
        }
      );
      wow.init();





});