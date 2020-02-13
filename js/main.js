AOS.init({
  duration: 800,
  easing: 'slide'
});

(function($) {
  'use strict';

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    }
  };

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

  var fullHeight = function() {
    $('.js-fullheight').css('height', $(window).height());
    $(window).resize(function() {
      $('.js-fullheight').css('height', $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function() {
    setTimeout(function() {
      if ($('#ftco-loader').length > 0) {
        $('#ftco-loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // Scrollax
  $.Scrollax();

  var carousel = function() {
    $('.carousel-testimony').owlCarousel({
      center: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">'
      ],
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
    });

    $('.carousel-speaker').owlCarousel({
      autoplay: true,
      center: true,
      loop: true,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">'
      ],
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
    });
  };
  carousel();

  $('nav .dropdown').hover(
    function() {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass('show');
      $this.find('> a').attr('aria-expanded', true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find('.dropdown-menu').addClass('show');
    },
    function() {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass('show');
      $this.find('> a').attr('aria-expanded', false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find('.dropdown-menu').removeClass('show');
      // }, 100);
    }
  );

  $('#dropdown04').on('show.bs.dropdown', function() {
    console.log('show');
  });

  // scroll
  var scrollWindow = function() {
    $(window).scroll(function() {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $('.ftco_navbar'),
        sd = $('.js-scroll-wrap');

      if (st > 150) {
        if (!navbar.hasClass('scrolled')) {
          navbar.addClass('scrolled');
        }
      }
      if (st < 150) {
        if (navbar.hasClass('scrolled')) {
          navbar.removeClass('scrolled sleep');
        }
      }
      if (st > 350) {
        if (!navbar.hasClass('awake')) {
          navbar.addClass('awake');
        }

        if (sd.length > 0) {
          sd.addClass('sleep');
        }
      }
      if (st < 350) {
        if (navbar.hasClass('awake')) {
          navbar.removeClass('awake');
          navbar.addClass('sleep');
        }
        if (sd.length > 0) {
          sd.removeClass('sleep');
        }
      }
    });
  };
  scrollWindow();

  var isMobile = {
    Android: function() {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
      return (
        isMobile.Android() ||
        isMobile.BlackBerry() ||
        isMobile.iOS() ||
        isMobile.Opera() ||
        isMobile.Windows()
      );
    }
  };

  var counter = function() {
    $('#section-counter, .hero-wrap, .ftco-counter').waypoint(
      function(direction) {
        if (
          direction === 'down' &&
          !$(this.element).hasClass('ftco-animated')
        ) {
          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
            ','
          );
          $('.number').each(function() {
            var $this = $(this),
              num = $this.data('number');
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step
              },
              7000
            );
          });
        }
      },
      { offset: '95%' }
    );
  };
  counter();

  var contentWayPoint = function() {
    var i = 0;
    $('.ftco-animate').waypoint(
      function(direction) {
        if (
          direction === 'down' &&
          !$(this.element).hasClass('ftco-animated')
        ) {
          i++;

          $(this.element).addClass('item-animate');
          setTimeout(function() {
            $('body .ftco-animate.item-animate').each(function(k) {
              var el = $(this);
              setTimeout(
                function() {
                  var effect = el.data('animate-effect');
                  if (effect === 'fadeIn') {
                    el.addClass('fadeIn ftco-animated');
                  } else if (effect === 'fadeInLeft') {
                    el.addClass('fadeInLeft ftco-animated');
                  } else if (effect === 'fadeInRight') {
                    el.addClass('fadeInRight ftco-animated');
                  } else {
                    el.addClass('fadeInUp ftco-animated');
                  }
                  el.removeClass('item-animate');
                },
                k * 50,
                'easeInOutExpo'
              );
            });
          }, 100);
        }
      },
      { offset: '95%' }
    );
  };
  contentWayPoint();

  // navigation
  var OnePageNav = function() {
    $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on(
      'click',
      function(e) {
        e.preventDefault();

        var hash = this.hash,
          navToggler = $('.navbar-toggler');
        $('html, body').animate(
          {
            scrollTop: $(hash).offset().top
          },
          700,
          'easeInOutExpo',
          function() {
            window.location.hash = hash;
          }
        );

        if (navToggler.is(':visible')) {
          navToggler.click();
        }
      }
    );
    $('body').on('activate.bs.scrollspy', function() {
      console.log('nice');
    });
  };
  OnePageNav();

  // magnific popup
  $('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });

  $('.checkin_date, .checkout_date').datepicker({
    format: 'm/d/yyyy',
    autoclose: true
  });

  function makeTimer() {
    var endTime = new Date('21 December 2019 9:56:00 GMT+01:00');
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (hours < '10') {
      hours = '0' + hours;
    }
    if (minutes < '10') {
      minutes = '0' + minutes;
    }
    if (seconds < '10') {
      seconds = '0' + seconds;
    }

    $('#days').html(days + '<span>Days</span>');
    $('#hours').html(hours + '<span>Hours</span>');
    $('#minutes').html(minutes + '<span>Minutes</span>');
    $('#seconds').html(seconds + '<span>Seconds</span>');
  }

  setInterval(function() {
    makeTimer();
  }, 1000);
})(jQuery);

fetch(
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@KonradDaWo'
)
  .then(res => res.json())
  .then(data => {
    // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
    const res = data.items; //This is an array with the content. No feed, no info about author etc..
    const posts = res.filter(item => item.categories.length > 0); // That's the main trick* !

    // Functions to create a short text out of whole blog's content
    function toText(node) {
      let tag = document.createElement('div');
      tag.innerHTML = node;
      node = tag.innerText;
      return node;
    }
    function shortenText(text, startingPoint, maxLength) {
      return text.length > maxLength
        ? text.slice(startingPoint, maxLength)
        : text;
    }

    // Put things in right spots of markup
    let output = '';
    posts.forEach(item => {
      output += `

        
        <div class="blog-entry justify-content-end">
        <a
          href="${item.link}"
          class="block-20"
          style="background-image: url(${item.thumbnail});"
        >
        </a>
        <div class="text p-4 float-right d-block">
          <div class="d-flex align-items-center pt-2 mb-4">
          ${shortenText(item.pubDate, 0, 10)}
          </div>
          <h3 class="heading mt-2">
            <a href="#">${shortenText(item.title, 0, 30) + '...'}</a>
          </h3>
          <p>
            A small river named Duden flows by their place and supplies it
            with the necessary regelialia.
          </p>
        </div>

      </div>`;
    });
    document.querySelector('.medium-blog').innerHTML = output;
  });
