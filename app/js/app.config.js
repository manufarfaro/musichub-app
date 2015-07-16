(function() {
  'use strict';

  angular.module('musicHub')
    .config(httpProviderConfig)
    .config(urlRouterProvider)
    .config(locationProvider)
    .config(decoratorProvider);

  httpProviderConfig.$inject = ['$httpProvider'];
  urlRouterProvider.$inject = ['$urlRouterProvider'];
  decoratorProvider.$inject = ['$provide'];

  function httpProviderConfig($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('CsrfCookieService');
  }

  function decoratorProvider($provide) {
  }

  function locationProvider($locationProvider) {
    //$locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');
  }

  function urlRouterProvider($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
})();
