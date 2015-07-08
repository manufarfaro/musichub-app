(function(){
  'use strict';

  angular.module('musicHub.authentication', []);

  // Declare app level module which depends on views, and components
  angular.module(
    'musicHub',
    [
      'musicHub.authentication',
      'ngRoute',
      'ui.router',
      'ui.router.stateHelper',
      'ngResource',
      'ngSanitize',
      'ngCookies',
			'mediaPlayer'
    ])
    .run(run);

    run.$inject = ['$rootScope', '$location', '$cookies', '$http'];

    function run($rootScope, $location, $cookies, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookies.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
/*
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $location.path('/login');
            }
        });*/
    }
})();
