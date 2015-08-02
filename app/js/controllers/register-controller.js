(function(){
  'use strict';

  angular.module('musicHub')
  .controller('RegisterController', registerController);

  registerController.$inject = ['RegisterService'];

  function registerController(RegisterService) {
    var vm = this;
    vm.register = register;
    vm.user = {
      user_type: 'artist'
    };

    function register() {
      vm.dataLoading = true;
      console.log(vm.user);
      RegisterService.register(vm.user);
    }
  }
})();
