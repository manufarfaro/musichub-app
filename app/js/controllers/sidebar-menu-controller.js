(function(){
  'use strict';

  angular.module('musicHub')
  .controller('SidebarMenuController', sidebarMenuController);

  sidebarMenuController.$inject = ['$scope', 'localStorageService'];

  function sidebarMenuController($scope, localStorageService) {
    var vm = this;
    vm.currentYear = Date.now();
  }
})();
