(function(){
  'use strict';

  angular.module('musicHub')
    .controller('ProfilePropousalsController', profilePropousalsController);

  profilePropousalsController.$inject = ['$scope', '$http', 'ProfileService', 'AuthenticationService', '$rootScope', '$state', 'flash'];

  function profilePropousalsController($scope, $http, ProfileService, AuthenticationService, $rootScope, $state, flash) {
    var vm = this;
    AuthenticationService.checkIsLoggedIn();
    ProfileService
      .postulations()
      .success(profilePropousalsSuccess)
      .error(profilePropousalsError);

    ProfileService
      .postulated()
      .success(profilePostulatedSuccess)
      .error(profilePostulatedError);

      function profilePropousalsSuccess(response) {
        angular.forEach(response, function(propousalData) {
          propousalData.artists = [];
          propousalData.bands = [];
          angular.forEach(propousalData.artistsPostulants, function(artistData) {
            propousalData.artists.push(artistData);
          });
          angular.forEach(propousalData.bandsPostulants, function(bandData) {
            propousalData.bands.push(bandData);
          });
        });
        vm.propousals = response;
      }
      function profilePostulatedSuccess(response) {
        vm.postulateds = response;
      }
      function profilePropousalsError(response) {
        vm.propousals = [];
        if (response.status === 401) {
          AuthenticationService.clearCredentials();
          flash('danger', 'Su sesión ha expirado.');
          $state.go('login');
        }
      }
      function profilePostulatedError(response) {
        vm.postulateds = [];
        if (response.status === 401) {
          AuthenticationService.clearCredentials();
          flash('danger', 'Su sesión ha expirado.');
          $state.go('login');
        }
      }
  }
})();
