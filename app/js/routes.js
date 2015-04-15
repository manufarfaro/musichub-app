angular.module('musicHub', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/pages/home/index.html',
      controller: 'HomeIndexController'
    })
    .when('/me', {
      redirectTo: '/'
    })
    .when('/me/bands', {
      redirectTo: '/'
    })
    .when('/me/propousals', {
      redirectTo: '/'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);
