(function(){
  'use strict';

  angular.module('musicHub')
    .controller('PlaceHomeSearchController', placeHomeSearchController);

  placeHomeSearchController.$inject = ['$http', '$filter', 'BarService'];

  function placeHomeSearchController($http, $filter, BarService) {
    var vm = this;
    vm.originalList = BarService.query();
    vm.filteredList = vm.originalList;
    vm.updateFilteredList = updateFilteredList;

    vm.config = {
      itemsPerPage: 3,
      maxPages: 5,
      fillLastPage: "no"
    };

    function updateFilteredList() {
      vm.filteredList = $filter("filter")(vm.originalList, vm.placeSeachBox);
    };
    return vm;
  }
})();
