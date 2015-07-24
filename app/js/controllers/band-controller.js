(function(){
  'use strict';

  angular.module('musicHub')
    .controller('BandController', bandController);

  bandController.$inject = ['$scope', 'BandService', '$state', '$stateParams'];

  function bandController($scope, BandService, $state, $stateParams) {
    $scope.band = BandService.get({id:$stateParams.id}, bandSuccess, bandError);
    $scope.bandHref = $state.href;
    function bandSuccess() {}
    function bandError() {
      $state.go('home');
    }
  }

})();
