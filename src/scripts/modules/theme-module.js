AppName.Modules.ThemeModule = (function() {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  var _privateMethod = function() {
    // private stuff

    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  };

  var _headerFunction = function() {
    var windowScroll;

    $(window).on('scroll', function() {
      windowScroll = $(window).scrollTop();

      if(windowScroll > 30) {
        $('header').addClass('scrolled');
      } else {
        $('header').removeClass('scrolled');
      }
    });
  }

  var _revealOnScroll = function() {
    var $window = $(window),
        win_height_padded = $window.height() * 1.1;

    $window.on('scroll', function() {
      var scrolled = $window.scrollTop(),
          win_height_padded = $window.height() * 1.1;
  
      // $(".revealOnScroll.up:not(.animated)").each(function () {
      //   var $this = $(this),
      //       offsetTop = $this.offset().top;
  
      //   if (scrolled + win_height_padded > offsetTop) {
      //     if ($this.data('timeout')) {
      //       window.setTimeout(function(){
      //         $this.addClass('animated fadeInUp');
      //       }, parseInt($this.data('timeout'),10));
      //     } else {
      //       $this.addClass('animated fadeInUp');
      //     }
      //   }
      // });

      // $(".revealOnScroll.left:not(.animated)").each(function () {
      //   var $this = $(this),
      //       offsetTop = $this.offset().top;
  
      //   if (scrolled + win_height_padded > offsetTop) {
      //     if ($this.data('timeout')) {
      //       window.setTimeout(function(){
      //         $this.addClass('animated fadeInLeft');
      //       }, parseInt($this.data('timeout'),10));
      //     } else {
      //       $this.addClass('animated fadeInLeft');
      //     }
      //   }
      // });

      $(".revealOnScroll:not(.animated)").each(function () {
        var $this = $(this),
            offsetTop = $this.offset().top;
  
        if (scrolled + win_height_padded > offsetTop) {
          if($this.hasClass("up")) {
            if ($this.data('timeout')) {
              window.setTimeout(function(){
                $this.addClass('animated fadeInUp');
              }, parseInt($this.data('timeout'),10));
            } else {
              $this.addClass('animated fadeInUp');
            }
          } else if ($this.hasClass("left")) {
            if ($this.data('timeout')) {
              window.setTimeout(function(){
                $this.addClass('animated fadeInLeft');
              }, parseInt($this.data('timeout'),10));
            } else {
              $this.addClass('animated fadeInLeft');
            }
          } else if ($this.hasClass("right")) {
            if ($this.data('timeout')) {
              window.setTimeout(function(){
                $this.addClass('animated fadeInRight');
              }, parseInt($this.data('timeout'),10));
            } else {
              $this.addClass('animated fadeInRight');
            }
          }
        }
      });
    });
  }

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function() {
    _privateMethod();
    _headerFunction();
    _revealOnScroll();
  };

  return {
    init: init
  };
})();
