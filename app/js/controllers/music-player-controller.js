(function(){
  'use strict';

  angular.module('musicHub')
    .controller('MusicPlayerController', musicPlayerController);

  musicPlayerController.$inject = ['$scope', '$sce', '$timeout'];

  function musicPlayerController($scope, $sce, $timeout) {
    var vm = this;
    vm.trackAPI = null;
    vm.onPlayerReady = onPlayerReady;
    vm.onCompleteTrack = onCompleteTrack;
    vm.setTrack = setTrack;
    vm.config = {
      theme: {
        url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
      }
    };
    function onPlayerReady(api) {
      vm.trackAPI = api;
    }
    function onCompleteTrack() {
      vm.trackIsCompleted = true;
      $scope.currentTrack++;
      if ($scope.currentTrack >= $scope.tracks.length) $scope.currentTrack = 0;
      vm.setTrack($scope.currentTrack);
    }
    function setTrack(index) {
      vm.trackAPI.stop();
      $scope.currentTrack = index;
      vm.config.sources = $scope.tracks[index];
      $timeout(vm.trackAPI.play.bind(vm.trackAPI), 100);
    }
  }
})();
