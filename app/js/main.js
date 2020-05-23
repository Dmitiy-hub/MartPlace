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

  $('.product-slider__inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="product__slick-btn slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="product__slick-btn slick-btn slick-next"></button>',

  });

  var mixer = mixitup('.products__inner-box');

});