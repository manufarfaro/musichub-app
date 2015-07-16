(function (){
  'use strict';

  angular.module('musicHub')
    .directive('homeSearch', homeSearch);

  homeSearch.$inject = [];

  function homeSearch() {
    return {
      restrict: 'EA',
      replace: 'true',
      templateUrl: 'templates/directives/home-search.html',
      controller: 'HomeSearchController',
      controllerAs: 'vm',
      scope: {},
      link: linkFunction,
      bindToController: true
    }
    function linkFunction($scope, element, attrs) {
    }
  }
})();
