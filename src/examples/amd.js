/*global require:true */
(function () {
  'use strict';

  var options = {
    paths: {
      'jquery': '../lib/jquery'
    }
  };
  
  require(options, [
    '../jquery.responsivecarousel'
  ], function (ResponsiveCarousel) {
    console.log(ResponsiveCarousel);
  });
}());