(function(){
  'use strict';

  angular.module('musicHub')
    .directive("owlCarousel", owlCarousel);

  owlCarousel.$inject = [];

  function owlCarousel() {
    return {
      restrict: 'E',
      transclude: false,
      link: function (scope) {
        scope.initCarousel = function(element) {
          var defaultOptions = {};
          var customOptions = scope.$eval($(element).attr('data-options'));
          for(var key in customOptions) {
            defaultOptions[key] = customOptions[key];
          }
          element.owlCarousel(defaultOptions);
        };
      }
    }
  }

})();
