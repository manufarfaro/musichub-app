(function(){
  'use strict';

  angular.module('musicHub')
    .factory('AuthenticationService', authenticationServiceFactory)
      .run(runBlock);

  authenticationServiceFactory.$inject = ['$http', '$window', 'localStorageService', '$rootScope', '$state', 'Base64Service', 'API_URL'];
  runBlock.$inject = ['$rootScope', '$location', 'localStorageService', '$http'];

  function authenticationServiceFactory($http,$window, localStorageService, $rootScope, $state, Base64Service, API_URL) {
    return {
      login: login,
      setCredentials: setCredentials,
      clearCredentials: clearCredentials,
      checkIsLoggedIn: checkIsLoggedIn,
      isLogged: isLogged,
      logout: logout
    };

    function login(username, password, callbackSuccess, callbackError) {
      $http({
        method: 'GET',
        url: API_URL + '/profile'
      })
      .success(loginSuccess)
      .error(loginError);

      function loginSuccess(response) {
        console.log("Musichub | login success -> response: " + response.message);
        callbackSuccess(response);
      }

      function loginError(response) {
        console.log("Musichub | login error -> response: " + response.message);
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
      localStorageService.set('globals', $rootScope.globals);
    }

    function clearCredentials() {
      localStorageService.remove('globals');
      if (!$rootScope.globals) {
        $rootScope.globals = {};
      }
      $http.defaults.headers.common.Authorization = 'Basic ';
    }

    function isLogged() {
      return (localStorageService.get('globals') && localStorageService.get('globals').currentUser);
    }

    function checkIsLoggedIn() {
      var allowedPages = ["login", "register", 'resetPassword'];
      if (!localStorageService.get('globals') || !localStorageService.get('globals').currentUser) {
        $state.go('login');
      } else {
        if (allowedPages.indexOf($state.current.name) > -1) {
          $state.go('home');
        }
      }
    }

    function logout() {
      if(this.isLogged()) {
        this.clearCredentials();
        $window.location.reload();
      }
    }
  }

  function runBlock ($rootScope, $location, localStorageService, $http) {
    $rootScope.globals = localStorageService.get('globals') || {};
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common.Authorization = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
    }
  }
})();
