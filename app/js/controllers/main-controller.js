(function(){
  'use strict';

  angular.module('musicHub')
    .controller('MainController', mainController);

  mainController.$inject = ['$scope', '$http'];

  function mainController($scope, $http) {
    $scope.menuVisible = true;
    $scope.config = {
      theme: "../../vendor/videogular-themes-default/videogular.min.css"
    };
  }
})();
