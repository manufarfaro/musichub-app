(function(){
  'use strict';

  angular.module('musicHub')
    .controller('BandEditController', bandEditController);

  bandEditController.$inject = ['$scope', 'BandService', 'flash', '$window'];

  function bandEditController($scope, BandService, flash, $window) {
    var vm = this;
    $scope.band = {};
    vm.actualizate = actualizate;
    function actualizate() {
      vm.dataLoading = true;
      BandService.save($scope.band).$promise.then(bandSuccess, bandFailure);
      function bandSuccess(response) {
        flash('success', 'Tus datos se guardaron correctamente.');
        vm.dataLoading = false;
        $window.location.reload();
      }
      function bandFailure(response) {
        flash('danger', 'Ha ocurrido un error en la carga de datos. Intentá mas tarde...');
        vm.dataLoading = false;
      }
    }
  }
})();
