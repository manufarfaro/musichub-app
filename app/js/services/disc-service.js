(function(){
  'use strict';

  angular.module('musicHub')
    .factory('DiscService', discService);

  discService.$inject = ['$resource', 'API_URL'];

  function discService($resource, API_URL) {
    return $resource(
      API_URL + '/discs/:id',
      {},
      {
        'update': {
          method:'PUT'
        }
      }
    );
  }

})();
