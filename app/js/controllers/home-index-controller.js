(function(){
  'use strict';

  angular.module('musicHub')
    .controller('HomeIndexController', homeIndexController);

  homeIndexController.$inject = ['$http', 'VideoService','PhotoService'];

  function homeIndexController($http, VideoService, PhotoService) {
    var vm = this;
    vm.videos = VideoService.random({limit: 5});
    vm.photos = PhotoService.random({limit: 10});
  }
})();
