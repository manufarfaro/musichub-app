(function(){
  'use strict';

  angular.module('musicHub')
  .controller('RegisterController', registerController);

  registerController.$inject = ['$state', 'flash', 'RegisterService'];

  function registerController($state, flash, RegisterService) {
    var vm = this;
    vm.register = register;
    vm.user = {
      user_type: 'artist'
    };

    function register() {
      vm.dataLoading = true;
      RegisterService
        .register(vm.user)
        .success(registerSuccess)
        .error(registerError)
      ;
      function registerSuccess(response) {
        flash('success', 'Tu cuenta se creó correctamente, ya podés ingresar con tus datos a Musichub.');
        $state.go('login');
      }

      function registerError(response) {
        flash('danger', 'Se ha producido un error al intentar registrar, por favor intentá mas tarde o no dudes en comunicarte con los administradores.');
        vm.dataLoading = false;
      }
    }
  }
})();
