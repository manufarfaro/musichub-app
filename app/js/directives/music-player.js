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
      scope.onPlayerReady = onPlayerReady;

      scope.$watch('discs', function(discsData) {
        angular.forEach(scope.discs, function (discValue, discKey) {
          angular.forEach(discValue.tracks, function (trackValue, trackKey) {
            TrackService.get({id: trackValue.id}).$promise.then(function(track){
              track.disc = discValue;
              track.src = $sce.trustAsResourceUrl(track.url);
              track.type = track.format;
              scope.tracks.push(track);
            });
          });
        });
      });

      scope.$watch('tracks', function(tracksData, tracksKey) {
        scope.track = [scope.tracks[0]];
      });

      function onPlayerReady(api) {
        scope.trackAPI = api;
      }
    }
  }
})();
