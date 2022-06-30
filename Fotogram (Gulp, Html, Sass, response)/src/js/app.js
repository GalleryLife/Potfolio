import * as flsFunctions from './modules/functions.js';
import $ from 'jquery';
import 'slick-carousel';

flsFunctions.isWebp()

$('.carousel').slick({
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  prevArrow: '<div class="prev"><button><i class="arrow left"></i></button></div>',
  nextArrow: '<div class="next"><button><i class="arrow right"></i></button></div>',
});

$('.photobook__slider').slick({
  slidesToShow: 1,
  centerMode: true,
  accessibility: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 1000,
  swipe: true,
  variableWidth: true,
  arrows: false
});

$('.slider__carousel').slick({
  slidesToShow: 1,
  fade: true,
  prevArrow: '<div class="prevCollections"><button><i class="arrow left"></i></button></div>',
  nextArrow: '<div class="nextCollections"><button><i class="arrow right"></i></button></div>',
})