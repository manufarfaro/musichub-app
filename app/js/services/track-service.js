(function(){
  'use strict';

  angular.module('musicHub')
    .factory('TrackService', trackService);

  trackService.$inject = ['$resource', 'API_URL'];

  function trackService($resource, API_URL) {
    return $resource(
      API_URL + '/tracks/:id',
      {},
      {
        'update': {
          method:'PUT'
        }
      }
    );
  }

})();
