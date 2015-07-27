(function(){
  'use strict';

  angular.module('musicHub')
    .controller('ArtistController', artistController);

  artistController.$inject = ['$scope', '$sce', '$state', '$stateParams', 'ArtistService'];

  function artistController($scope, $sce, $state, $stateParams, ArtistService) {
    var vm = this;
    vm.artist = ArtistService.get({id:$stateParams.id}, artistSuccess, artistError);
    vm.artistHref = $state.href;
    function artistSuccess(response) {
      angular.forEach(response.videos, function(value, key) {
        value.url = $sce.trustAsResourceUrl(value.url);
      });
    }
    function artistError() {
      $state.go('home');
    }
  }

})();
