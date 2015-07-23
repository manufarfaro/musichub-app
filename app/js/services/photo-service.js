(function(){
  'use strict';

  angular.module('musicHub')
    .factory('PhotoService', photoService);

  photoService.$inject = ['$resource', 'API_URL'];

  function photoService($resource, API_URL) {
    return $resource(
      API_URL + '/photos/:id',
      {},
      {
        'update': {
          method:'PUT'
        },
        'random': {
          url: API_URL + '/photos/random',
          method: 'GET',
          isArray: true
        }
      }
    );
  }

})();
