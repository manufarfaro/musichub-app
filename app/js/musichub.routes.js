(function(){
  angular.module('musicHub')
    .config(routesConfig);

  routesConfig.$inject = ['$stateProvider'];

  function routesConfig($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'templates/pages/home/index.html',
        controller: 'HomeIndexController',
        controllerAs: 'vm'
      })
      .state('myProfile', {
        url: '/me',
        templateUrl: 'templates/pages/profile/index.html',
        controller: 'ProfileController',
        controllerAs: 'vm'
      })
      .state('myBands', {
        url: '/me/bands',
        templateUrl: 'templates/pages/profile/bands.html',
        controller: 'ProfileBandsController',
        controllerAs: 'vm'
      })
      .state('myPropousals', {
        url: '/me/propousals',
        templateUrl: 'templates/pages/profile/propousals.html',
        controller: 'ProfilePropousalsController',
        controllerAs: 'vm'
      })
      .state('artist', {
        url: '/a/{id:[0-9]{1,4}}',
        templateUrl: 'templates/pages/artist/index.html',
        controller: 'ArtistController',
        controllerAs: 'vm'
      })
      .state('band', {
        url: '/b/{id:[0-9]{1,4}}',
        templateUrl: 'templates/pages/band/index.html',
        controller: 'BandController',
        controllerAs: 'vm'
      })
      .state('place', {
        url: '/p/{id:[0-9]{1,4}}',
        templateUrl: 'templates/pages/place/index.html',
        controller: 'PlaceController',
        controllerAs: 'vm'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/pages/login/index.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'templates/pages/register/index.html',
        controller: 'RecoverPasswordController',
        controllerAs: 'vm'
      })
      .state('recoverPassword', {
        url: '/recover-password',
        templateUrl: 'templates/pages/recover-password/index.html',
        controller: 'RecoverPasswordController',
        controllerAs: 'vm'
      })
  }
})();
