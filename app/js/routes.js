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
      .when('/recoverpassword', {
        templateUrl: 'templates/pages/recover/index.html',
        controller: 'RecoverpasswordController'
      })
      .when('/me', {
        templateUrl: 'templates/pages/me/meform.html',
        controller: 'me/ProfileController'
      })
      .when('/me/bands', {
        templateUrl: 'templates/pages/me/bandsform.html',
        controller: 'me/BandsController'
      })
      .when('/me/propousals', {
        templateUrl: 'templates/pages/me/indexPropousals.html',
        controller: 'me/PropousalsController'
      })
      .when('/a/artistsview', {
        templateUrl: 'templates/pages/artists/index.html',
        controller: 'artist/ArtistViewController'
      })
      .when('/b/bandsview', {
        templateUrl: 'templates/pages/bands/index.html',
        controller: 'artist/BandViewController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
})();
