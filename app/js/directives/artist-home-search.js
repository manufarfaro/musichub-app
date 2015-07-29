(function (){
  'use strict';

  angular.module('musicHub')
    .directive('artistHomeSearch', artistSearch);

  artistSearch.$inject = [];

  function artistSearch() {
    return {
      restrict: 'EA',
      replace: 'true',
      templateUrl: 'templates/directives/artist-home-search.html',
      controller: 'ArtistHomeSearchController',
      controllerAs: 'vm',
      scope: {},
      link: linkFunction,
      bindToController: true
    }
    function linkFunction(scope, element, attrs) {}
  }
})();
