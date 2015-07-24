(function (){
  'use strict';

  angular.module('musicHub')
    .directive('musicPlayer', musicPlayer);

  musicPlayer.$inject = ['$window'];

  function musicPlayer($window) {
    return {
      restrict: 'E',
      replace: 'true',
      templateUrl: 'templates/directives/music-player.html',
      controller: 'MusicPlayerController',
      controllerAs: 'vm',
      link: linkFunction,
      bindToController: true
    }
    function linkFunction(scope, element, attrs) {
      angular.element($window).bind('resize', function() {
        resizePlayer();
      });
      resizePlayer();

      function resizePlayer() {
        element.find('.mh-playlist .list-group').css({
          height: element.find('img.mh-artwork-img').css('width')
        });
      }
    }
  }
})();
