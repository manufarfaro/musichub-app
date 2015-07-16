(function(){
  'use strict';

  angular.module('musicHub')
    .factory('AuthenticationService', authenticationServiceFactory)
      .run(runBlock);

  authenticationServiceFactory.$inject = ['$http', '$cookies', '$rootScope', 'Base64Service'];
  runBlock.$inject = ['$rootScope', '$location', '$cookies', '$http'];

  function authenticationServiceFactory($http, $cookies, $rootScope, Base64Service, API_URL) {
    var service = {};
    service.login = login;
    service.setCredentials = setCredentials;
    service.clearCredentials = clearCredentials;
    return service;

    function login(username, password, callbackSuccess, callbackError) {
      $http({
        method: 'GET',
        url: 'http://api.musichub.com.ar/profile'
      })
      .success(loginSuccess)
      .error(loginError);

      function loginSuccess(response) {
        console.log("Musichub | login success -> response: " + response == null ? response.message : 'Undefined');
        callbackSuccess(response);
      }

      function loginError(response) {
        console.log("Musichub | login error -> response: " + response == null ? response.message : 'Undefined');
        callbackError(response);
      }
    }

    function setCredentials(username, password) {
      var authdata = Base64Service.encode(username + ':' + password);
      $rootScope.globals = {
          currentUser: {
              username: username,
              authdata: authdata
          }
      };
      $http.defaults.headers.common.Authorization = 'Basic ' + authdata; // jshint ignore:line
      $cookies.put('globals', $rootScope.globals);
    }

    function clearCredentials($rootScope, $cookies, $http) {
      $rootScope.globals = {};
      $cookies.remove('globals');
      $http.defaults.headers.common.Authorization = 'Basic ';
    }
  }

  function runBlock ($rootScope, $location, $cookies, $http) {
    $rootScope.globals = $cookies.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }
  }
})();
