(function(){
  'use strict';

  angular.module('musicHub')
    .controller('LoginController', loginController);

  loginController.$inject = ['$rootScope', '$window', '$cookies', '$http', '$location', 'AuthenticationService', 'flash'];

  function loginController($rootScope, $window, $cookies, $http, $location, AuthenticationService, flash) {
    var vm = this;
    AuthenticationService.checkIsLoggedIn();
    vm.login = login;

    function login() {
      vm.dataLoading = true;
      AuthenticationService.setCredentials(vm.username, vm.password);
      AuthenticationService.login(vm.username, vm.password, loginSuccessCallback, loginErrorCallback);
    }

    function loginSuccessCallback(response) {
      $location.path('/me');
      $window.location.reload();
    }

    function loginErrorCallback(response) {
      if (response != null) {
        flash('danger', response.message);
      } else {
        flash('danger', 'Usuario y/o Contraseña incorrectos.');
      }
      vm.dataLoading = false;
    }
  }

})();
