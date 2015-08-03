(function(){
  'use strict';

  angular.module('musicHub')
    .directive('bandEdit', bandEdit);

  bandEdit.$inject = ['$http', '$document', 'API_URL', 'BandService'];

  function bandEdit($http, $document, API_URL, BandService) {
    return {
      restrict: 'E',
      controller: 'BandEditController',
      controllerAs: 'vm',
      templateUrl: 'templates/directives/band-edit.html',
      scope: {
        id: '@'
      },
      link: linkFunction,
      bindToController: true
    }

    function linkFunction(scope, element, attrs) {
      scope.$watch('vm.id', function (newValue, oldValue) {
        if (oldValue === newValue) {
          return;
        }
        scope.band = BandService.get({id:newValue})
      });
      function bandQuerySuccess(response) {
        scope.band = response;
      }
      function bandQueryError(response) {
        scope.band = null;
      }

    }

  }
})();
