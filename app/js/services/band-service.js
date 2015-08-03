(function(){
  'use strict';

  angular.module('musicHub')
  .factory('BandService', bandService);

  bandService.$inject = ['$resource', 'API_URL'];

  function bandService($resource, API_URL) {
    return $resource(
      API_URL + '/bands/:id',
      {},
      {
        'update': {
          method:'PUT'
        },
        'postulate': {
          method: 'POST',
          url: API_URL + '/bands/:band_id/postulates/:postulate_id/postulate'
        }
      }
    );
  }

})();
