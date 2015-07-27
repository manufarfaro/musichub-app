(function(){
  'use strict';

  angular.module('musicHub')
    .controller('PlaceController', placeController);

  placeController.$inject = ['$scope', 'BarService', '$state', '$stateParams'];

  function placeController($scope, BarService, $state, $stateParams) {
    var vm = this;
    vm.place = BarService.get({id:$stateParams.id}, barSuccess, barError);
    $scope.placeHref = $state.href;
    function barSuccess() {}
    function barError() {
      $state.go('home');
    }
  }

})();
