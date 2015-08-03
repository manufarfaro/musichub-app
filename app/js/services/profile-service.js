(function(){
  'use strict';

  angular.module('musicHub')
    .factory('ProfileService', profileService);

  profileService.$inject = ['$http', 'API_URL'];

  function profileService($http, API_URL) {
    return {
      postulations: getPostulations,
      bands: getBands,
      postulated: getPostulated,
      profile: getProfile,
      putProfile: putProfile
    };

    function getProfile() {
      return $http({
        method: 'GET',
        url: API_URL + '/profile'
      });
    }

    function putProfile(user) {
      return $http({
        method: 'PUT',
        url: API_URL + '/profile',
        params: user
      });
    }

    function getBands() {
      return $http({
        method: 'GET',
        url: API_URL + '/profile/bands'
      });
    }

    function getPostulations() {
      return $http({
        method: 'GET',
        url: API_URL + '/profile/postulations'
      });
    }

    function getPostulated() {
      return $http({
        method: 'GET',
        url: API_URL + '/profile/postulated'
      });
    }

  }
})();
