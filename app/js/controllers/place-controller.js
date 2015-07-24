(function(){
  'use strict';

  angular.module('musicHub')
    .controller('PlaceController', placeController);

  placeController.$inject = ['$scope', 'BarService', '$state'];

  function placeController($scope, BarService, $state) {
    $scope.place = BarService.get({id:$stateParams.id}, barSuccess, barError);
    function barSuccess() {}
    function barError() {
      $state.go('home');
    }
  }

})();
