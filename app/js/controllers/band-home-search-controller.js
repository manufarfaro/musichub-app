(function(){
  'use strict';

  angular.module('musicHub')
    .controller('BandHomeSearchController', bandHomeSearchController);

  bandHomeSearchController.$inject = ['$http', '$filter', 'BandService'];

  function bandHomeSearchController($http, $filter, BandService) {
    var vm = this;
    vm.originalList = BandService.query();
    vm.filteredList = vm.originalList;
    vm.updateFilteredList = updateFilteredList;

    vm.config = {
      itemsPerPage: 3,
      maxPages: 5,
      fillLastPage: "no"
    };

    function updateFilteredList() {
      vm.filteredList = $filter("filter")(vm.originalList, vm.bandSeachBox);
    };
    return vm;
  }
})();
