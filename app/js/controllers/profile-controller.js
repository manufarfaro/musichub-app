(function(){
  'use strict';

  angular.module('musicHub')
  .controller('ProfileController', profileController);

  profileController.$inject = ['$scope', '$state', 'AuthenticationService', 'ProfileService'];

  function profileController($scope, $state, AuthenticationService, ProfileService) {
    var vm = this;
    AuthenticationService.checkIsLoggedIn();
    vm.profile = {};
    ProfileService
      .profile()
      .success(profileSuccess);

    function profileSuccess(response) {
      response.uiSref = $state.href("artist", {id: response.slug});
      vm.profile = response;
    }
  }

})();
