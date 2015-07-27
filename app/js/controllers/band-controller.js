(function(){
  'use strict';

  angular.module('musicHub')
    .controller('BandController', bandController);

  bandController.$inject = ['$scope', '$sce', 'BandService', '$state', '$stateParams', 'ArtistService', '$timeout'];

  function bandController($scope, $sce, BandService, $state, $stateParams, ArtistService, $timeout) {
    var vm = this;
    vm.band = BandService.get({id:$stateParams.id}, bandSuccess, bandError);
    vm.bandHref = $state.href;
    vm.band.$promise.then(function(dataBand) {
      vm.members = dataBand.artists;
    });

    function bandSuccess(response) {
      angular.forEach(response.videos, function(value, key) {
        value.url = $sce.trustAsResourceUrl(value.url);
      });
    }

    function bandError() {
      $state.go('home');
    }
  }

})();
