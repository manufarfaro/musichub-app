(function(){
  'use strict';

  angular.module('musicHub')
    .controller('EventsHomeSearchController', eventsHomeSearchController);

  eventsHomeSearchController.$inject = ['$http', '$filter', 'EventService'];

  function eventsHomeSearchController($http, $filter, EventService) {
    var vm = this;
    vm.originalList = EventService.query();
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
