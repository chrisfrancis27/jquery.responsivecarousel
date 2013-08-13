/*global jQuery:true,define:true*/
(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function ($) {
  'use strict';
  $.fn.ResponsiveCarousel = function (options) {
    var settings = $.extend({}, $.fn.ResponsiveCarousel.defaults, options);
    console.log(settings);
    return this;
  };
  $.fn.ResponsiveCarousel.defaults = {
    'foo' : 'bar'
  };
}));
