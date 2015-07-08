(function(){
  'use strict';

  angular.module('musicHub')
    .directive('owlCarouselItem', owlCarouselItem);

  owlCarouselItem.$inject = [];

  function owlCarouselItem() {
    return {
      restrict: 'A',
      transclude: false,
      link: function(scope, element) {
        if(scope.$last) {
          scope.initCarousel(element.parent());
        }
      }
    }
  }
})();
