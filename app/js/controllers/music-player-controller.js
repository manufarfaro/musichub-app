(function(){
  'use strict';

  angular.module('musicHub')
    .controller('MusicPlayerController', musicPlayerController);

  musicPlayerController.$inject = ['$scope', '$sce', '$timeout'];

  function musicPlayerController($scope, $sce, $timeout) {
    var vm = this;
    vm.trackAPI = null;
    vm.state = null;
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
      $scope.currentIndexTrack++;
      if ($scope.currentIndexTrack >= $scope.tracks.length) $scope.currentIndexTrack = 0;
      vm.setTrack($scope.currentIndexTrack);
    }
    function setTrack(index) {
      if (vm.trackAPI.currentState === 'play') {
        vm.trackAPI.stop();
      }
      console.log(vm.trackAPI.sources);
      $scope.currentIndexTrack = index;
      $scope.track = [];
      $scope.track.push($scope.tracks[index]);
      $timeout(
        vm.trackAPI.play.bind(vm.trackAPI)
      , 100);
    }
  }
})();
