(function(){
  'use strict';

  angular.module('musicHub')
    .controller('MhRenderPhotoController', mhRenderPhotoController);

  mhRenderPhotoController.$inject = ['$scope', 'PhotoService'];

  function mhRenderPhotoController($scope, PhotoService) {
    var vm = this;
    PhotoService.get({id: $scope.id}).$promise.then(function(data) {
      vm.photo = data
    });
  }
})();
