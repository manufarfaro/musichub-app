(function(){
  'use strict';

  angular.module('musicHub')
    .controller('RandomQuotesController', randomQuotesController);

  randomQuotesController.$inject = ['$scope', '$http'];

  function randomQuotesController($scope, $http) {
    var vm = this;
  }
})();
