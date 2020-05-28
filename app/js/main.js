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

  $(".products__item-rate").rateYo({
    rating: 4.2,
    readOnly: true,
    starWidth: "14px"
  });

  $(".products__item-rate__list").rateYo({
    rating: 4.2,
    readOnly: true,
    starWidth: "14px"
  });



  $('.product-slider__inner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="product__slick-btn slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="product__slick-btn slick-btn slick-next"></button>',

  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 360,
    from: 30,
    to: 300,
    prefix: "$"
  });

  $('.list-btn').on('click', function () {
    $('.products__item').addClass('content-list');
    $('.list-btn').addClass('active');
    $('.grid-btn').removeClass('active');
  });

  $('.grid-btn').on('click', function () {
    $('.products__item').removeClass('content-list');
    $('.grid-btn').addClass('active');
    $('.list-btn').removeClass('active');
  });

  var mixer = mixitup('.products__inner-box');

});