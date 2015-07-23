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
      console.log(scope);
      scope.$watch('vm.id', function (newValue, oldValue) {
        if (oldValue === newValue) {
          return;
        }
        console.log(newValue);
        scope.band = BandService.get({id:newValue})
          //.success(bandQuerySuccess)
          //.error(bandQueryError);
      });
    }
    function bandQuerySuccess(response) {
      console.log(response);
      scope.band = response;
    }
    function bandQueryError(response) {
      scope.band = null;
    }
  }
})();
