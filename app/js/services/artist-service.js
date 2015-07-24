(function(){
  'use strict';

  angular.module('musicHub')
    .factory('ArtistService', artistService);

    artistService.$inject = ['$resource', 'API_URL'];

  function artistService($resource, API_URL) {
    return $resource(
      API_URL + '/artists/:id',
      {},
      {}
    );
  }
})();
