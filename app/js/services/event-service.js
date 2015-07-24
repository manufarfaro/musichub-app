(function(){
  'use strict';

  angular.module('musicHub')
    .factory('EventService', eventService);

  eventService.$inject = ['$resource', 'API_URL'];

  function eventService($resource, API_URL) {
    return $resource(
      API_URL + '/events/:id',
      {},
      {
        'update': {
          method:'PUT'
        }
      }
    );
  }
})();
