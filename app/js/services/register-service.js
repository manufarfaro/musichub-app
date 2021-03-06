(function(){
  'use strict';

  angular.module('musicHub')
    .factory('RegisterService', registerServiceFactory)
      .run(runBlock);

  registerServiceFactory.$inject = ['$http', 'API_URL'];

  function registerServiceFactory($http, API_URL) {
    return {
      register: register
    }

    function register(user) {
      return $http({
        method: 'POST',
        url: API_URL + '/users/register',
        params: user
      });
    }
  }

  function runBlock() {}
})();
