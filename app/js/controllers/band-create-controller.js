(function(){
  'use strict';

  angular.module('musicHub')
    .controller('BandCreateController', bandCreateController);

  bandCreateController.$inject = ['$scope', '$http', 'BandService'];

  function bandCreateController($scope, $http, BandService) {
    var vm = this;
    vm.save = bandSaveAction;
    function bandSaveAction(band) {
      BandService.save(band);
    }
  }

})();
