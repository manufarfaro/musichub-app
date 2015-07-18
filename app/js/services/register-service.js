(function(){
  'use strict';

  angular.module('musicHub')
    .factory('RegisterService', registerServiceFactory)
      .run(runBlock);

  registerServiceFactory.$inject = ['$scope', '$http', 'API_URL'];

  function registerServiceFactory($scope, $http, API_URL) {
    return {
      register: register
    }

    function register() {
      $http({
        method: 'GET',
        url: API_URL + '/users/register'
      })
      .success(registerSuccess)
      .error(registerError);

      function registerSuccess() {

      }
      function registerError() {

      }
    }
  }

  function runBlock() {}
})();
