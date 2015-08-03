(function (){
  'use strict';

  angular.module('musicHub')
    .directive('postulateHomeSearch', postulateHomeSearch);

  postulateHomeSearch.$inject = ['$modal'];

  function postulateHomeSearch($modal) {


    return {
      restrict: 'EA',
      replace: 'true',
      templateUrl: 'templates/directives/postulate-home-search.html',
      controller: 'PostulateHomeSearchController',
      controllerAs: 'vm',
      scope: {},
      link: linkFunction,
      bindToController: true
    }

    function linkFunction(scope, element, attrs) {}

    function openPostulate() {
      console.log('open modal');
      var modalInstance = $modal.open({
        templateUrl: 'templates/directives/home-postulate-modal.html',
        controller: 'PostulateHomeSearchController',
        controllerAs: 'vm',
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

    }

  }
})();
