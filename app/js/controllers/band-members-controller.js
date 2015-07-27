(function(){
  'use strict';

  angular.module('musicHub')
    .controller('BandMembersController', bandMembersController);

  bandMembersController.$inject = ['$scope'];

  function bandMembersController($scope) {
    var vm = this;
  }
})();
