(function(){
  'use strict';

  angular.module('musicHub')
  .controller('ProfileController', profileController);

  profileController.$inject = ['$scope', '$state', 'AuthenticationService', 'ProfileService', 'flash'];

  function profileController($scope, $state, AuthenticationService, ProfileService, flash) {
    var vm = this;
    vm.actualizar = actualizar;
    AuthenticationService.checkIsLoggedIn();
    vm.profile = {};
    ProfileService
      .profile()
      .success(profileSuccess);

    function profileSuccess(response) {
      response.uiSref = $state.href("artist", {id: response.slug});
      vm.profile = response;
    }

    function actualizar() {
      vm.dataLoading = true;
      console.log($scope.me);
      ProfileService
        .putProfile($scope.me)
        .$promise
        .then(meSuccess, meFailure);
      function meSuccess(response) {
        flash('success', 'Tus datos se guardaron correctamente.')
      }
      function meFailure(response) {
        flash('danger', 'Ha ocurrido un error en la carga de datos. Intentá mas tarde...')
      }
    }
  }

})();
