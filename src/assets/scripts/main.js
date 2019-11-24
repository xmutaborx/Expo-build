(function ($) {

  $('document').ready(function() {
    let sectionRequest = document.getElementsByClassName('request')[1];
    sectionRequest.classList.remove('gadget');

    $('.presentation__slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
    });
  });

})(jQuery);
