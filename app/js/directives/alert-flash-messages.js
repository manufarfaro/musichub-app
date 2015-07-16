(function (){
  'use strict';

  angular.module('musicHub')
    .directive('alertFlashMessages', alertFlashMessages);

  alertFlashMessages.$inject = [];

  function alertFlashMessages() {
    return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'templates/directives/alert-flash-messages.html',
      controller: 'AlertFlashMessagesController',
      controllerAs: 'vm',
      bindToController: true,
      scope: {}
    }
  }
})();
