(function() {
  'use strict';

  angular.module('musicHub')
    .config(httpProviderConfig);

  httpProviderConfig.$inject = ['$httpProvider'];

  function httpProviderConfig($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
  }
})();
