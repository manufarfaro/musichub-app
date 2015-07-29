(function(){
  'use strict';

  angular.module('musicHub')
  .controller('UserCredentialsController', userCredentialsController);

  userCredentialsController.$inject = ['$scope', '$window', '$timeout', '$rootScope', '$state', 'AuthenticationService', 'ProfileService', 'localStorageService'];

  function userCredentialsController($scope, $window, $timeout, $rootScope, $state, AuthenticationService, ProfileService, localStorageService) {
    var vm = this;
    $scope.logout = function() {
      AuthenticationService.logout();
    }
    vm.isLogged = AuthenticationService.isLogged();

    $scope.$watch('currentUser', function(data) {
      vm.isLogged = AuthenticationService.isLogged();
      if($scope.currentUser){
        ProfileService
          .profile()
          .success(profileSuccess);
      }
    });
    function profileSuccess(response) {
      vm.currentUser = response;
    }
  }

})();
