(function(){
  'use strict';

  angular.module('musicHub')
    .controller('BandCreateController', bandCreateController);

  bandCreateController.$inject = ['$scope', '$http', 'BandService', 'flash'];

  function bandCreateController($scope, $http, BandService, flash) {
    var vm = this;
    $scope.band = {};
    vm.save = bandSaveAction;

    console.log(vm.save);

    function bandSaveAction() {

      vm.dataLoading = true;
      console.log(vm.dataLoading);
      BandService.save($scope.band).$promise.then(bandSuccess, bandFailure);
      function bandSuccess(response) {
        flash('success', 'Tus datos se guardaron correctamente.');
        vm.dataLoading = false;
      }
      function bandFailure(response) {
        flash('danger', 'Ha ocurrido un error en la carga de datos. Intentá mas tarde...');
        vm.dataLoading = false;
      }
    }
  }

})();
