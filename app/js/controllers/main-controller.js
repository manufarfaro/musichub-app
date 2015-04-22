(function(){
  'use strict';

  angular.module('musicHub')
  .controller('MainController', ['$scope', '$route', '$http', function($scope, $route, $http) {
    $scope.$route = $route;
    $scope.menu = true;
  }]);
})();
