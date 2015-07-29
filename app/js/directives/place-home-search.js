(function (){
  'use strict';

  angular.module('musicHub')
    .directive('placeHomeSearch', placeSearch);

  placeSearch.$inject = [];

  function placeSearch() {
    return {
      restrict: 'EA',
      replace: 'true',
      templateUrl: 'templates/directives/place-home-search.html',
      controller: 'PlaceHomeSearchController',
      controllerAs: 'vm',
      scope: {},
      link: linkFunction,
      bindToController: true
    }
    function linkFunction(scope, element, attrs) {}
  }
})();
