(function(){
  'use strict';

  angular.module('musicHub')
    .controller('ArtistController', artistController);

  artistController.$inject = ['$scope', '$state', '$stateParams', 'ArtistService'];

  function artistController($scope, $state, $stateParams, ArtistService) {
    $scope.artist = ArtistService.get({id:$stateParams.id}, artistSuccess, artistError);
    console.log($scope.artist);
    $scope.artistHref = $state.href;
    console.log($scope.artistHref);
    function artistSuccess() {}
    function artistError() {
      $state.go('home');
    }
  }

})();
