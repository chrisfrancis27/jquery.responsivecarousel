/*global jQuery:true,define:true*/
;(function (factory) {
  'use strict';
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals
    factory(jQuery);
  }
} (function ($) {
  'use strict';

  /** Constructor **/
  function ResponsiveCarousel(element, options) {
    this.element = element;
    this.settings = $.extend({}, $.fn.ResponsiveCarousel.defaults, options);

    console.log('ResponsiveCarousel initialized:', this, 'Options:', options);
  }
  /** Prototype **/
  ResponsiveCarousel.prototype.whatever = function() {};

  /** Add to jQuery namespace **/
  $.fn.ResponsiveCarousel = function(options) {
    return this.each(function() {
      if (!$.data(this, 'plugin_ResponsiveCarousel')) {
        $.data(
          this,
          'plugin_ResponsiveCarousel',
          new ResponsiveCarousel(this, options)
        );
      }
    });
  };
  /** Defaults **/
  $.fn.ResponsiveCarousel.defaults = {
    'foo' : 'bar'
  };

  return $.fn.ResponsiveCarousel;
}));
