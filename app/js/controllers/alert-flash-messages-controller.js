(function(){
  'use strict';

  angular.module('musicHub')
    .controller('AlertFlashMessagesController', AlertFlashMessagesController);

  AlertFlashMessagesController.$inject = ['$scope', '$rootScope'];

  function AlertFlashMessagesController($scope, $rootScope) {
    $rootScope.$on('flash:message', function(_, messages, done) {
      $scope.messages = messages;
      done();
    });
  }

})();
