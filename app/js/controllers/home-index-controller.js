(function(){
  'use strict';

  angular.module('musicHub')
    .controller('HomeIndexController', homeIndexController);

  homeIndexController.$inject = ['$http', '$sce', 'VideoService','PhotoService'];

  function homeIndexController($http, $sce, VideoService, PhotoService) {
    var vm = this;
    vm.videos = VideoService.random({limit: 5}, videoSuccess, videoError);
    vm.photos = PhotoService.random({limit: 10});
    function videoSuccess(response) {
      angular.forEach(response, function(value, key) {
        value.url = $sce.trustAsResourceUrl(value.url);
      });
    }
    function videoError(response) {}
  }
})();
