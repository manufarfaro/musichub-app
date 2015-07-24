(function (){
  'use strict';

  angular.module('musicHub')
    .directive('eventsHomeSearch', homeSearch);

  homeSearch.$inject = [];

  function homeSearch() {
    return {
      restrict: 'EA',
      replace: 'true',
      templateUrl: 'templates/directives/events-home-search.html',
      controller: 'EventsHomeSearchController',
      controllerAs: 'vm',
      scope: {},
      link: linkFunction,
      bindToController: true
    }
    function linkFunction($scope, element, attrs) {
    }
  }
})();
