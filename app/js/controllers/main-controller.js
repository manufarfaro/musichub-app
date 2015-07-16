(function(){
  'use strict';

  angular.module('musicHub')
    .controller('MainController', mainController);

  mainController.$inject = ['$scope', '$http'];

  function mainController($scope, $http) {
    var vm = this;
    vm.menuVisible = true;
  }
})();
