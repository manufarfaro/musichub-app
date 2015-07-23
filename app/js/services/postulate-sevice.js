(function(){
  'use strict';

  angular.module('musicHub')
    .factory('PostulateService', postulateService);

  postulateService.$inject = ['$resource', 'API_URL'];

  function postulateService($resource, API_URL) {
    return $resource(
      API_URL + '/postulate/:id',
      {},
      {
        'update': {
          method:'PUT'
        }
      }
    );
  }

})();
