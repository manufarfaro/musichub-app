(function(){
  'use strict';

  angular.module('musicHub')
  .controller('SidebarMenuController', sidebarMenuController);

  sidebarMenuController.$inject = ['$scope', 'AuthenticationService', 'ProfileService'];

  function sidebarMenuController($scope, AuthenticationService, ProfileService) {
    var vm = this;
    vm.currentYear = Date.now();
    vm.isLogged = AuthenticationService.isLogged();

      if(vm.isLogged){
        ProfileService
          .profile()
          .success(profileSuccess);
      }

    function profileSuccess(response) {
      vm.currentUser = response;
    }
  }
})();
