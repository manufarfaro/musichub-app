(function(){
  'use strict';

  angular.module('musicHub')
    .controller('MhRenderPhotoController', mhRenderPhotoController);

  mhRenderPhotoController.$inject = ['$scope', 'PhotoService'];

  function mhRenderPhotoController($scope, PhotoService) {
    var vm = this;
    vm.photo = PhotoService.get({id: $scope.id});
  }
})();
