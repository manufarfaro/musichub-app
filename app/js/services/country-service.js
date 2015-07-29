(function(){
  'use strict';

  angular.module('musicHub')
    .factory('CountryService', countryService);

  countryService.$inject = ['$resource', 'API_URL'];

  function countryService($resource, API_URL) {
    return $resource(
      API_URL + '/countries/:id',
      {},
      {
        'query': {
          url: API_URL + '/countries?max=:limit',
          method: 'GET',
          isArray: true
        }
      }
    );
  }

})();
