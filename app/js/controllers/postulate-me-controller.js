(function(){
  'use strict';

  angular.module('musicHub')
    .controller('PostulateMeController', postulateMeController);

  postulateMeController.$inject = ['$scope', '$state', '$modal', 'flash', 'AuthenticationService', 'ProfileService'];

  function postulateMeController($scope, $state, $modal, flash, AuthenticationService, ProfileService) {
    var vm = this;
    vm.bands = [];
    vm.artist = {};
    vm.openPostulateModal = openPostulateModal;

    function openPostulateModal() {
      AuthenticationService.checkIsLoggedIn();
      if(AuthenticationService.isLogged()) {
        var modalInstance = $modal.open({
          templateUrl: '../../templates/directives/postulate-me-modal.html',
          controller: 'PostulateMeModalController',
          controllerAs: 'vm',
          resolve: {
            modalData: function () {
              return {
                postulation: $scope.postulation,
                bands: $scope.bands,
                artist: $scope.artist
              };
            }
          }
        });
      }
    }
  }
})();
