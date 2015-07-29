(function(){
  'use strict';

  angular.module('musicHub')
    .controller('NonLoggedUserActionsController', nonLoggedUserActionsController);

  nonLoggedUserActionsController.$inject = [];

  function nonLoggedUserActionsController() {
    var vm = this;
  }
})();
