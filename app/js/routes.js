(function(){
  angular.module('musicHub', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/pages/home/index.html',
        controller: 'HomeIndexController'
      })
      .when('/login', {
        templateUrl: 'templates/pages/login/index.html',
        controller: 'LoginController'
      })
      .when('/register', {
        templateUrl: 'templates/pages/register/index.html',
        controller: 'RegisterController'
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
})();
