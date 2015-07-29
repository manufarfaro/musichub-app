(function (){
  'use strict';

  angular.module('musicHub')
    .directive('sidebarMenu', sidebarMenu);

  sidebarMenu.$inject = ['$timeout', '$rootScope', 'localStorageService'];

  function sidebarMenu($timeout, $rootScope, localStorageService) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/sidebar-menu.html',
      controller: 'SidebarMenuController',
      scope: {
        visible: '='
      },
      link: linkFunction,
      controllerAs: 'vm',
      bindToController: true
    }

    function linkFunction(scope, element, attrs) {
      localStorageService.bind(scope, 'globals');
      scope.$watch('scope.globals', function(data) {
      });
      $timeout(function () {
        $rootScope.$apply();
      });
    }
  }
})();
