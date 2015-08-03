(function(){
  'use strict';

  angular.module('musicHub')
    .controller('PostulateMeModalController', postulateMeModalController);

  postulateMeModalController.$inject = ['$scope', 'flash', '$modalInstance', 'modalData', 'PostulateService', 'BandService'];

  function postulateMeModalController($scope , flash, $modalInstance, modalData, PostulateService, BandService) {
    var vm = this;
    vm.modalData = modalData;
    vm.doPostulate = doPostulate;
    function doPostulate(postulant, postulation_id) {
      if(postulant.class === 'com.musichub.Band') {
        BandService.postulate({band_id: postulant.id , postulate_id: postulation_id, }).$promise.then(postulateSuccess, postulateFailure);
      } else {
        PostulateService.postulate({id: postulation_id}).$promise.then(postulateSuccess, postulateFailure);
      }
      function postulateSuccess (response) {
        flash('success', '¡Se presentó tu postulación con éxito!');
        $modalInstance.dismiss();
      }
      function postulateFailure(response) {
        flash('danger', 'No hemos podido procesar tu postulación, intentalo mas tarde.');
        $modalInstance.dismiss();
      }
    }
  }

})();
