(function(){
  'use strict';

  angular.module('musicHub')
    .controller('ArtistHomeSearchController', artistHomeSearchController);

  artistHomeSearchController.$inject = ['$http', '$filter', 'ArtistService'];

  function artistHomeSearchController($http, $filter, ArtistService) {
    var vm = this;
    vm.originalList = ArtistService.query();
    vm.filteredList = vm.originalList;
    vm.updateFilteredList = updateFilteredList;

    vm.config = {
      itemsPerPage: 3,
      maxPages: 5,
      fillLastPage: "no"
    };

    function updateFilteredList() {
      vm.filteredList = $filter("filter")(vm.originalList, vm.artistSeachBox);
    };
    return vm;
  }
})();
