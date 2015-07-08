(function(){
  'use strict';

  angular.module('musicHub')
    .provider("CsrfCookieService", csrfCookieService)
      .config(configBlock);

  get.$inject = ['$cookies'];
  configBlock.$inject = ['$httpProvider'];

  function csrfCookieService() {
    var vm = this;
    var headerName = 'X-XSRF-TOKEN';
    var cookieName = 'XSRF-TOKEN';
    var allowedMethods = ['GET'];

    this.setHeaderName = setHeaderName;
    this.setCookieName = setCookieName;
    this.setAllowedMethods = setAllowedMethods;
    this.$get = get;
  }

  function get($cookies) {
    return {
      request: function(config) {
        if(config.method == 'GET') {
          // do something on success
          config.headers[csrfCookieService.getHeaderName] = $cookies[csrfCookieService.cookieName];
        }
        return config;
      }
    }
  }

  function getHeaderName() {
    return headerName;
  }

  function getCookieName() {
    return cookieName;
  }

  function getAllowedMethods() {
    return allowedMethods;
  }

  function setHeaderName(name) {
    headerName = name;
  }

  function setCookieName(name) {
    cookieName = name;
  }

  function setAllowedMethods(methods) {
    allowedMethods = methods;
  }

  function configBlock($httpProvider) {
    $httpProvider.interceptors.push('CsrfCookieService');
  }
})();
