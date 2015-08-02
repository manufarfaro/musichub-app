(function (){
  'use strict';

  angular.module('musicHub')
    .directive('validateUsernameAvailable', validateUsernameAvailable);

  validateUsernameAvailable.$inject = ['$q', 'ArtistService', 'BarService'];

  function validateUsernameAvailable($q, ArtistService, BarService) {
    return {
      restrict: 'A',
      require : 'ngModel',
      scope: {
        userType: '='
      },
      link: linkFunction
    }
    function linkFunction(scope, element, attrs, ngModel) {
      ngModel.$asyncValidators.usernameAvailable = usernameAvailable;

      function usernameAvailable(modelValue, viewValue) {
        var value = modelValue || viewValue;
        if (!scope.userType) return false;
        if(scope.userType == 'bar') {
          return BarService.get({'id': value}).$promise.then(success, failure);
        } else {
          return ArtistService.get({'id': value}).$promise.then(success, failure);
        }
        function success(response) {
          return $q.reject('El usuario se encuentra en uso.');
        }
        function failure(response) {
          return true;
        }
      }
    }
  }
})();
