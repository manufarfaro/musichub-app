(function(){
  'use strict';

  angular.module('musicHub')
    .controller('BandEditController', bandEditController);

    bandEditController.$inject = ['$scope', '$http'];

  function bandEditController($scope, $http) {
    var vm = this;
  }
})();
