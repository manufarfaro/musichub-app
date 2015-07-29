(function (){
  'use strict';

  angular.module('musicHub')
    .directive('countrySelect', countrySelect);

  countrySelect.$inject = ['CountryService'];

  function countrySelect(CountryService) {
    return {
      restrict: 'EA',
      replace: 'true',
      templateUrl: 'templates/directives/country-select.html',
      controller: 'CountrySelectController',
      controllerAs: 'vm',
      scope: {
        region: '='
      },
      link: linkFunction,
      bindToController: true
    }
    function linkFunction(scope, element, attrs) {
      scope.regionCollection = CountryService.query({limit: '9999'});
    }
  }
})();
