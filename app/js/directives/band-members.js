(function(){
  'use strict';

  angular.module('musicHub')
    .directive('bandMembers', bandEdit);

  bandEdit.$inject = ['$http', '$document', 'API_URL', 'ArtistService', '$timeout'];

  function bandEdit($http, $document, API_URL, ArtistService, $timeout) {
    return {
      restrict: 'E',
      controller: 'BandMembersController',
      templateUrl: 'templates/directives/band-members.html',
      scope: {
        artists: '=',
        leader: '='
      },
      link: linkFunction,
    }

    function linkFunction(scope, element, attrs) {
      scope.dataLoaded = false;

      scope.members = [];

      scope.$watch('leader', function(newVal) {
        if(newVal) {
          ArtistService.get(newVal).$promise.then(function (data){
            data.isLeader = true;
            scope.members.push(data);
          });
        }
      });

      scope.$watch('artists', function(newVal) {
        if(newVal) {
          angular.forEach(newVal, function(value, key) {
            ArtistService.get({id: value.id}).$promise.then(function (data){
              if(data.id === scope.leader.id) {
                data.isLeader = true;
              }
              scope.members.push(data);
            });
          });
        }
      }, true);

      $timeout(function () {
        scope.$apply();
      });

    }
  }
})();
