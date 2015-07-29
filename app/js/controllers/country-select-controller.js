(function(){
  'use strict';

  angular.module('musicHub')
    .controller('CountrySelectController', countrySelectController);

  countrySelectController.$inject = ['$scope'];

  function countrySelectController($scope) {
    var vm = this;
  }

})();
