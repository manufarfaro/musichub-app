(function(){
  'use strict';

  angular.module('musicHub')
    .factory('PostulateService', postulateService);

  postulateService.$inject = ['$resource', 'API_URL'];

  function postulateService($resource, API_URL) {
    return $resource(
      API_URL + '/postulates/:id',
      {},
      {
        'update': {
          method:'PUT'
        },
        'postulate': {
          method: 'POST',
          url: API_URL + '/postulates/:id/postulate',
          params: {
            id : '@id'
          }
        }
      }
    );
  }

})();
