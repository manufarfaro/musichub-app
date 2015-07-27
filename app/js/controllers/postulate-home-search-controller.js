(function(){
  'use strict';

  angular.module('musicHub')
    .controller('PostulateHomeSearchController', postulateHomeSearchController);

  postulateHomeSearchController.$inject = ['$http', '$state', '$filter', 'PostulateService', 'ArtistService', 'BarService'];

  function postulateHomeSearchController($http, $state, $filter, PostulateService, ArtistService, BarService) {
    var vm = this;
    vm.postulate = PostulateService.query();
    vm.postulate.$promise.then(function(dataPostulate) {
      angular.forEach(dataPostulate, function(value, key) {
        ArtistService.get({id: value.offerer.id}, artistSuccess, artistError);
        BarService.get({id: value.offerer.id}, barSuccess, barError)
        function artistError(response) { return true; }
        function artistSuccess(response) {
          response.uiSref = $state.href("artist", {id: response.slug});
          value.offerer = response;
        }
        function barError(response) { return true; }
        function barSuccess(response) {
          response.uiSref = $state.href("place", {id: response.slug});
          value.offerer = response;
        }
      });
    });
    vm.originalList = vm.postulate;
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
