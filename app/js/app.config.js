(function() {
  'use strict';

  angular.module('musicHub')
    .config(httpProviderConfig)
    .config(urlRouterProvider)
    .config(locationProvider)
    .config(localStorageServiceProvider)
    .config(gravatarServiceProvider)
    .config(analyticsProvider)
    .config(decoratorProvider);

  httpProviderConfig.$inject = ['$httpProvider'];
  urlRouterProvider.$inject = ['$urlRouterProvider'];
  localStorageServiceProvider.$inject = ['localStorageServiceProvider'];
  gravatarServiceProvider.$inject = ['gravatarServiceProvider'];
  analyticsProvider.$inject = ['AnalyticsProvider'];
  decoratorProvider.$inject = ['$provide'];

  function httpProviderConfig($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
    $httpProvider.interceptors.push('CsrfCookieService');
  }

  function decoratorProvider($provide) {}

  function locationProvider($locationProvider) {
    $locationProvider.hashPrefix('!');
    //$locationProvider.html5Mode(true);
  }

  function localStorageServiceProvider(localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('musichub')
      .setStorageType('sessionStorage')
      .setNotify(true, true)
  };

  function gravatarServiceProvider(gravatarServiceProvider) {
    gravatarServiceProvider.defaults = {
      "default": 'mm'  // Mystery man as default for missing avatars
    };
  }

  function analyticsProvider(AnalyticsProvider) {
      AnalyticsProvider.setAccount('UA-65732145-1');
      AnalyticsProvider.trackPages(true);
      AnalyticsProvider.trackUrlParams(true);

  }

  function urlRouterProvider($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
})();
