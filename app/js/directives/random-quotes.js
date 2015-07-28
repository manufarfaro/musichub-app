(function(){
  'use strict';

  angular.module('musicHub')
    .directive('randomQuotes', randomQuotes);

  randomQuotes.$inject = ['$http', '$document', 'API_URL'];

  function randomQuotes($http, $document, API_URL) {
    return {
      restrict: 'A',
      controller: 'RandomQuotesController',
      controllerAs: 'vm',
      scope: { quote: '=' },
      link: linkFunction,
      bindToController: true
    }

    function linkFunction(scope, element, attrs) {
      $http({
        method: 'GET',
        url: API_URL + '/quotes/random',
        params: {
          limit: '1'
        }
      }).success(quoteSuccess)
      .error(quoteError);

      function quoteSuccess (response) {
        element.css({
          'background-image': 'url(http://drive.google.com/uc?export=view&id=' + response[0].fileId + ')',
        });
        scope.vm.quote = response[0].quote;
      }

      function quoteError(response) {
        element.css('background-image','url(http://drive.google.com/uc?export=view&id=0B3pR1yPz3ddiblBsR1lHSUtsUHc)');
        console.log(element.css('background-image'));
        scope.vm.quote = 'Somos Actores de ese gran escenario que se llama vida, pasiones, amores, traiciones, sueños y mentiras...';
      }
    }
  }
})();
