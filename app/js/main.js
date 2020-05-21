$(function () {

  $('.productinfo-slider__inner').slick({
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>'
  });

  $(".productinfo-slider__item-rate").rateYo({
    rating: 4.2,
    readOnly: true,
    starWidth: "15px"
  });

  var mixer = mixitup('.products__inner-box');

});