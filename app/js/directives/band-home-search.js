(function (){
  'use strict';

  angular.module('musicHub')
    .directive('bandHomeSearch', bandSearch);

  bandSearch.$inject = [];

  function bandSearch() {
    return {
      restrict: 'EA',
      replace: 'true',
      templateUrl: 'templates/directives/band-home-search.html',
      controller: 'BandHomeSearchController',
      controllerAs: 'vm',
      scope: {},
      link: linkFunction,
      bindToController: true
    }
    function linkFunction(scope, element, attrs) {}
  }
})();
