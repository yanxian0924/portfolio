// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = global.jQuery = require('jquery');
require('throttle-debounce/throttle');
require('throttle-debounce/debounce');
require('fluidbox');

var Menu = require('../_modules/menu/menu');

$(function() {
  new Menu(); // Activate Menu modules logic

  // activate Fluidbox
  $('.fluidbox').fluidbox();

  // Landing page interactions
  $('.landing-link--code').hover(function() {
    $('.landing-image--code').addClass('is-shown');
  }, function() {
    $('.landing-image--code').removeClass('is-shown');
  });

  $('.landing-link--design').hover(function() {
    $('.landing-image--design').addClass('is-shown');
  }, function() {
    $('.landing-image--design').removeClass('is-shown');
  });

  $('.landing-link--art').hover(function() {
    $('.landing-image--art').addClass('is-shown');
  }, function() {
    $('.landing-image--art').removeClass('is-shown');
  });
});
