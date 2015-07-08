(function(){
  'use strict';

  angular.module('musicHub')
    .controller('LoginController', loginController);

  loginController.$inject = ['$rootScope', '$cookies', '$http', '$location', 'AuthenticationService', 'FlashService'];

  function loginController($rootScope, $cookies, $http, $location, AuthenticationService, FlashService) {
    var vm = this;
    AuthenticationService.clearCredentials
    vm.login = login;

    function login() {
      vm.dataLoading = true;
      AuthenticationService.login(vm.username, vm.password, loginCallback);
    }

    function loginCallback(response) {
      var vm = this;
      if(response.success) {
          AuthenticationService.setCredentials(vm.username, vm.password);
          $location.path('/');
      } else {
          FlashService.Error(response.message);
          vm.dataLoading = false;
      }
    }
  }


})();
