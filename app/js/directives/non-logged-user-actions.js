(function (){
  'use strict';

  angular.module('musicHub')
    .directive('nonLoggedUserActions', nonLoggedUserActions);

  nonLoggedUserActions.$inject = ['AuthenticationService'];

  function nonLoggedUserActions(AuthenticationService) {
    return {
      restrict: 'EA',
      replace: 'true',
      templateUrl: 'templates/directives/non-logged-user-actions.html',
      controller: 'NonLoggedUserActionsController',
      controllerAs: 'vm',
      scope: {},
      link: linkFunction,
      bindToController: true
    }
    function linkFunction(scope, element, attrs) {
      scope.isLogged = AuthenticationService.isLogged();
    }
  }
})();
