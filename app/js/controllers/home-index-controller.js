(function(){
  'use strict';

  angular.module('musicHub')
    .controller('HomeIndexController', homeIndexController);

  homeIndexController.$inject = ['$sce', '$http', 'VideoService'];

  function homeIndexController($sce, $http, VideoService) {
    var vm = this;
    vm.videos = VideoService.random({limit: 5});
    vm.photos = [
      {
        "class": "com.musichub.Photo",
        "id": 87,
        "fileId": "0B7q228Dq2WUuQWlMVWlEMnZUY2s",
        "title": "bar"
      },
      {
        "class": "com.musichub.Photo",
        "id": 80,
        "fileId": "0B7q228Dq2WUucWZWaXVibXJkRTQ",
        "title": "cover"
      },
      {
        "class": "com.musichub.Photo",
        "id": 95,
        "fileId": "0B7q228Dq2WUuVUlUSUEtR0pkWEk",
        "title": "funny dog 2"
      },
      {
        "class": "com.musichub.Photo",
        "id": 90,
        "fileId": "0B7q228Dq2WUubDREUmVkZzMwQ0E",
        "title": "flyer chuck en rustico"
      },
      {
        "class": "com.musichub.Photo",
        "id": 86,
        "fileId": "0B7q228Dq2WUuSVZSVlNaVnZURGs",
        "title": "bar2"
      },
      {
        "class": "com.musichub.Photo",
        "id": 94,
        "fileId": "0B7q228Dq2WUuNk41QVNLTjBHdW8",
        "title": "funny dog 1"
      },
      {
        "class": "com.musichub.Photo",
        "id": 96,
        "fileId": "0B7q228Dq2WUubloxbjZlX0E0RXc",
        "title": "cover"
      },
      {
        "class": "com.musichub.Photo",
        "id": 88,
        "fileId": "0B7q228Dq2WUuSTJkUnh1OS15enM",
        "title": "lobby"
      }
    ];
  }
})();
