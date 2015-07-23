(function(){
  'use strict';

  angular.module('musicHub')
  .controller('ProfileController', profileController);

  profileController.$inject = ['$scope', '$http', 'AuthenticationService'];

  function profileController($scope, $http, AuthenticationService) {
    var vm = this;
    AuthenticationService.checkIsLoggedIn();
  }

})();
