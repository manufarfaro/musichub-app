(function (){
  'use strict';

  angular.module('musicHub')
    .directive('postulateMe', postulateMe);

  postulateMe.$inject = ['$timeout', '$rootScope', 'AuthenticationService', 'ProfileService'];

  function postulateMe($timeout, $rootScope, AuthenticationService, ProfileService) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/postulate-me.html',
      controller: 'PostulateMeController',
      scope: {
        postulation: '='
      },
      link: linkFunction,
      controllerAs: 'vm'
    }

    function linkFunction(scope, element, attrs) {
      if(AuthenticationService.isLogged()) {
        ProfileService
          .bands()
          .success(profileBandsSuccess)
          .error(profileBandsError);

        ProfileService
          .profile()
          .success(profileSuccess);

        function profileBandsSuccess(response) {
          scope.bands = response;
        }

        function profileBandsError(response) {
          scope.bands = [];
          if (response.status === 401) {
            AuthenticationService.clearCredentials();
            flash('danger', 'Su sesión ha expirado.');
            $state.go('login');
          }
        }

        function profileSuccess(response) {
          scope.artist = response;
        }
      }
    }
  }
})();
