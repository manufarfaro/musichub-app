(function(){
  'use strict';

  angular.module('musicHub')
  .controller('SidebarMenuController', ['$scope', '$http', function($scope, $http) {
    $scope.time = Date.now();
  }]);
})();
