(function (){
  'use strict';

  angular.module('musicHub')
    .directive('musicPlayer', musicPlayer);

  musicPlayer.$inject = ['$window', '$timeout', '$sce', 'TrackService'];

  function musicPlayer($window, $timeout, $sce,  TrackService) {
    return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'templates/directives/music-player.html',
      controller: 'MusicPlayerController',
      controllerAs: 'vm',
      link: linkFunction,
      scope: {
        discs: '='
      }
    }
    function linkFunction(scope, element, attrs) {
      scope.tracks = [];
      scope.currentIndexTrack = 0;
      scope.track = [];
      scope.$watch('discs', function(discsData) {
        angular.forEach(scope.discs, function (discValue, discKey) {
          angular.forEach(discValue.tracks, function (trackValue, trackKey) {
            TrackService.get({id: trackValue.id}).$promise.then(function(track){
              track.disc = discValue;
              track.src = $sce.trustAsResourceUrl('http://drive.google.com/uc?export=view&id=' + track.fileId);
              track.type = 'audio/mpeg';
              scope.tracks.push(track);
            });
          });
        });
      });

      $timeout(function () {
        scope.track = [scope.tracks[0]];
      }, 10);
    }
  }
})();
