(function(){
  'use strict';

  angular.module('musicHub')
  .controller('SidebarMenuController', sidebarMenuController);

  sidebarMenuController.$inject = [];

  function sidebarMenuController() {
    var vm = this;
    vm.currentYear = Date.now();
  }
})();
