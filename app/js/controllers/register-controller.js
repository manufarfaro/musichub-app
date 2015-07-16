(function(){
  'use strict';

  angular.module('musicHub.authentication')
  .controller('RegisterController', registerController);

  registerController.$inject = ['$scope', '$http'];

  function registerController($scope, $http) {
    var vm = this;
    vm.register = register;

    function register() {
      vm.dataLoading = true;
    }
  }
})();
