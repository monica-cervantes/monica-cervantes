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

  /////////////////////
  // Public Methods //
  ///////////////////
  var init = function() {
    _privateMethod();
    _headerFunction();
  };

  return {
    init: init
  };
})();
