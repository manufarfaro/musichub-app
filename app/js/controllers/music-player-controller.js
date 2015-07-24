(function(){
  'use strict';

  angular.module('musicHub')
    .controller('MusicPlayerController', musicPlayerController);

  musicPlayerController.$inject = ['$sce'];

  function musicPlayerController($sce) {
    var vm = this;
    vm.config = {
      sources: [
        {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/audios/videogular.mp3"), type: "audio/mpeg"},
        {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/audios/videogular.ogg"), type: "audio/ogg"}
      ],
      theme: {
        url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
      }
    };
  }
})();
