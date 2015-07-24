(function (){
  'use strict';

  angular.module('musicHub')
    .directive('postulateHomeSearch', postulateHomeSearch);

  postulateHomeSearch.$inject = [];

  function postulateHomeSearch() {
    return {
      restrict: 'EA',
      replace: 'true',
      templateUrl: 'templates/directives/postulate-home-search.html',
      controller: 'PostulateHomeSearchController',
      controllerAs: 'vm',
      scope: {},
      link: linkFunction,
      bindToController: true
    }
    function linkFunction(scope, element, attrs) {}
  }
})();
