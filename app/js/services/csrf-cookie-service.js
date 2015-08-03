(function(){
  'use strict';

  angular.module('musicHub')
    .provider("CsrfCookieService", csrfCookieService);

  function csrfCookieService() {
    var vm = this;
    var headerName = 'X-XSRF-TOKEN';
    var cookieName = 'XSRF-TOKEN';
    var allowedMethods = ['GET'];

    vm.getHeaderName = getHeaderName;
    vm.getCookieName = getCookieName;
    vm.getAllowedMethods = getAllowedMethods;
    vm.setHeaderName = setHeaderName;
    vm.setCookieName = setCookieName;
    vm.setAllowedMethods = setAllowedMethods;
    vm.$get = get;

    get.$inject = ['$cookies'];

    function get($cookies) {
      return {
        request: function(config) {

          if(vm.getAllowedMethods().indexOf(config.method) === -1) {
            config.headers[vm.getHeaderName()] = $cookies[vm.getCookieName()];
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
  }

})();
