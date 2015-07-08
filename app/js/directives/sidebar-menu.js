(function (){
  'use strict';

  angular.module('musicHub')
    .directive('sidebarMenu', sidebarMenu);

  sidebarMenu.$inject = [];

  function sidebarMenu() {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/sidebar-menu.html',
      controller: 'SidebarMenuController',
      scope: {
        visible: '='
      },
      link: function(scope, element, attrs) {},
      controllerAs: 'vm',
      bindToController: true
    }
  }
})();
