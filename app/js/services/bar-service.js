(function(){
  'use strict';

  angular.module('musicHub')
    .factory('BarService', barService);

  barService.$inject = ['$resource', 'API_URL'];

  function barService($resource, API_URL) {
    return $resource(
      API_URL + '/bars/:id',
      {},
      {}
    );
  }
})();
