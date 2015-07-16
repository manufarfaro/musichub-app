(function() {
  'use strict';

  angular.module('musicHub')
    .constant('API_URL', 'http://api.musichub.com.ar')
    .constant('CDN_URL', 'https://static-musichub.s3.amazonaws.com/');
})();
