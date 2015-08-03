(function(){
  'use strict';

  angular.module('musicHub')
    .controller('BandCreateController', bandCreateController);

  bandCreateController.$inject = ['$scope', '$http', 'BandService', 'flash', '$window'];

  function bandCreateController($scope, $http, BandService, flash, $window) {
    var vm = this;
    $scope.band = {};
    vm.save = function bandSaveAction() {
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
