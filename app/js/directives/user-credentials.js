(function (){
  'use strict';

  angular.module('musicHub')
    .directive('userCredentials', userCredentials);

  userCredentials.$inject = ['$state', '$rootScope', '$timeout', 'localStorageService'];

  function userCredentials($state, $rootScope, $timeout, localStorageService) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/user-credentials.html',
      controller: 'UserCredentialsController',
      scope: {
        currentUser: '='
      },
      link: linkFunction,
      controllerAs: 'vm',
    }

    function linkFunction(scope, element, attrs) {
      scope.$watch('currentUser', function() {

        $timeout(function () {
          $rootScope.$apply();
        });
      });
    }
  }
})();
