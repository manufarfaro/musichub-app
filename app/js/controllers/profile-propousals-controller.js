(function(){
  'use strict';

  angular.module('musicHub')
    .controller('ProfilePropousalsController', profilePropousalsController);

  profilePropousalsController.$inject = ['$scope', '$http', 'AuthenticationService'];

  function profilePropousalsController($scope, $http, AuthenticationService) {
    var vm = this;
    AuthenticationService.checkIsLoggedIn();
  }
})();
