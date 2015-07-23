(function(){
  'use strict';

  angular.module('musicHub')
    .factory('VideoService', videoService);

  videoService.$inject = ['$resource', 'API_URL'];

  function videoService($resource, API_URL) {
    return $resource(
      API_URL + '/videos/:id',
      {},
      {
        'update': {
          method:'PUT'
        },
        'random': {
          url: API_URL + '/videos/random',
          method: 'GET',
          isArray: true
        }
      }
    );
  }

})();
