angular.module('musicHub')
  .directive('sidebarMenu', [function(){
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/sidebar-menu.html',
      controller: 'SidebarMenuController',
      scope: {
        visible: '='
      },
      link: function(scope, element, attrs) {

      }
    }
  }]);
