/**
 * Main
 * ====
 * This is the main js initialiser for the page
 * it is triggered by the data-main attribute on the
 * require script tag.
 * <script data-main="/js/main" src="/lib/require.js"></script>
 * for more information see <http://requirejs.org>
 */
/*global jQuery:true,require:true */
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