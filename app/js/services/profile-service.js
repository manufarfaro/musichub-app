(function(){
  'use strict';

  angular.module('musicHub')
    .factory('ProfileService', profileService);

  profileService.$inject = ['$http', 'API_URL'];

  function profileService($http, API_URL) {
    return {
      bands: getBands
    };

    function getBands() {
      return $http({
        method: 'GET',
        url: API_URL + '/profile/bands'
      });
    }
  }
})();
