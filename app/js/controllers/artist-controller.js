(function(){
  'use strict';

  angular.module('musicHub')
    .controller('ArtistController', artistController);

  artistController.$inject = ['$scope', '$http', '$sce'];

  function artistController($scope, $http, $sce) {
    var vm = this;
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
    vm.videos = [
      {
        "class": "com.musichub.Video",
        "id": 77,
        "fileId": "dxygkyyloux1oixgvnpf",
        "format": "video/webm",
        "title": "Promo Banda",
        "url": $sce.trustAsResourceUrl("https://res.cloudinary.com/musichub/video/upload/v1436008708/wyyvnciqxwfwzf8szj62.mp4")
      },
      {
        "class": "com.musichub.Video",
        "id": 89,
        "fileId": "dxygkyyloux1oixgvnpf",
        "format": "video/webm",
        "title": "nyan Cat",
        "url": $sce.trustAsResourceUrl("https://s3-sa-east-1.amazonaws.com/static-musichub/videos/f8e7f107-99e5-43e5-84fe-7974a170595b.webm")
      },
      {
        "class": "com.musichub.Video",
        "id": 101,
        "fileId": "dxygkyyloux1oixgvnpf",
        "format": "video/webm",
        "title": "nyan again 30 seconds :",
        "url": $sce.trustAsResourceUrl("https://s3-sa-east-1.amazonaws.com/static-musichub/videos/f8e7f107-99e5-43e5-84fe-7974a170595b.webm")
      },
      {
        "class": "com.musichub.Video",
        "id": 77,
        "fileId": "dxygkyyloux1oixgvnpf",
        "format": "video/webm",
        "title": "Promo Banda",
        "url": $sce.trustAsResourceUrl("https://s3-sa-east-1.amazonaws.com/static-musichub/videos/f8e7f107-99e5-43e5-84fe-7974a170595b.webm")
      },
      {
        "class": "com.musichub.Video",
        "id": 89,
        "fileId": "dxygkyyloux1oixgvnpf",
        "format": "video/webm",
        "title": "nyan Cat",
        "url": $sce.trustAsResourceUrl("https://res.cloudinary.com/musichub/video/upload/v1435740103/dxygkyyloux1oixgvnpf.mp4")
      },
      {
        "class": "com.musichub.Video",
        "id": 101,
        "fileId": "dxygkyyloux1oixgvnpf",
        "format": "video/webm",
        "title": "nyan again 30 seconds :",
        "url": $sce.trustAsResourceUrl("https://s3-sa-east-1.amazonaws.com/static-musichub/videos/f8e7f107-99e5-43e5-84fe-7974a170595b.webm")
      }
    ];
  }

})();
