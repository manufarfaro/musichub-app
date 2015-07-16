(function(){
  'use strict';

  angular.module('musicHub')
    .controller('HomeSearchController', homeSearchController);

  homeSearchController.$inject = ['$scope', '$http', 'API_URL'];

  function homeSearchController($scope, $http, API_URL) {
    var vm = this;
    vm.searchOptions = {
      highlight: true
    };

    $http({
      method: 'GET',
      url: API_URL + '/bands?max=99999'
    }).success(function(data, status, headers, config) {
      vm.bands = data
    });

    $http({
      method: 'GET',
      url: API_URL + '/artists?max=99999'
    }).success(function(data, status, headers, config) {
      vm.artists = data
    });

    vm.searchBox = null;

  }

})();
