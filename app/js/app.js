(function(){
  'use strict';

  angular.module('musicHub.authentication', []);

  // Declare app level module which depends on views, and components
  angular.module(
    'musicHub',
    [
      'musicHub.authentication',
      'ngRoute',
      'ui.router',
      'ui.router.stateHelper',
      'ngResource',
      'ngSanitize',
      'ngCookies',
      'LocalStorageModule',
			'mediaPlayer',
      'ui.bootstrap',
      'flash',
      'angularUtils.directives.dirDisqus',
      'ui.gravatar',
      'angular-table',
      'com.2fdevs.videogular',
      'com.2fdevs.videogular.plugins.controls',
      'ngEqualizer',
      'angular.filter',
      'angular-google-analytics'
    ])
    .run(run);

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];

    function run($rootScope, $location, $cookies, $http) {}
})();
