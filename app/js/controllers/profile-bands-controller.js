(function(){
  'use strict';

  angular.module('musicHub')
    .controller('ProfileBandsController', profileBandsController);

  profileBandsController.$inject = ['$scope', '$http', 'ProfileService', 'AuthenticationService', '$rootScope', '$state', 'flash', '$modal'];

  function profileBandsController($scope, $http, ProfileService, AuthenticationService, $rootScope, $state, flash, $modal) {
    var vm = this;
    AuthenticationService.checkIsLoggedIn();
    ProfileService
      .bands()
      .success(profileBandsSuccess)
      .error(profileBandsError);
    vm.openCreateBand = openCreateBand;

    function profileBandsSuccess(response) {
      vm.bands = response[0];
      vm.bandSelected = null;
    }
    function profileBandsError(response) {
      vm.bands = [];
      if (response.status === 401) {
        AuthenticationService.clearCredentials();
        flash('danger', 'Su sesión ha expirado.');
        $state.go('login');
      }
    }
    function openCreateBand() {
      console.log('open modal');
      var modalInstance = $modal.open({
        templateUrl: '../../templates/pages/profile/band-create-modal.html',
        controller: 'BandCreateController',
        controllerAs: 'vm',
        resolve: {}
      });

    }
  }
})();
