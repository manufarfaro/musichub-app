(function(){
  'use strict';

  angular.module('musicHub')
  .controller('MainController', ['$scope', '$http', function($scope, $http) {
    $scope.menuVisible = true;
  }]);
})();
