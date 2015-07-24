(function(){
  'use strict';

  angular.module('musicHub')
    .controller('PostulateHomeSearchController', postulateHomeSearchController);

  postulateHomeSearchController.$inject = ['$http', '$filter', 'PostulateService'];

  function postulateHomeSearchController($http, $filter, PostulateService) {
    var vm = this;
    vm.originalList = PostulateService.query();
    vm.filteredList = vm.originalList;
    vm.updateFilteredList = updateFilteredList;

    vm.config = {
      itemsPerPage: 3,
      maxPages: 5,
      fillLastPage: "no"
    };

    function updateFilteredList() {
      vm.filteredList = $filter("filter")(vm.originalList, vm.eventsSeachBox);
    };
    return vm;
  }
})();
