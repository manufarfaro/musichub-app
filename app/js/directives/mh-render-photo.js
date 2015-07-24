(function (){
  'use strict';

  angular.module('musicHub')
    .directive('mhRenderPhoto', homeSearch);

  homeSearch.$inject = ['PhotoService'];

  function homeSearch(PhotoService) {
    return {
      restrict: 'E',
      templateUrl: 'templates/directives/mh-render-photo.html',
      controller: 'MhRenderPhotoController',
      controllerAs: 'vm',
      scope: {
        id: '='
      },
      link: linkFunction,
      replace: true
    }
    function linkFunction(scope, element, attrs) {}
  }
})();
