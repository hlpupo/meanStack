(function () {
  'use strict';

  angular
    .module('meanStack')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url : '/',
        templateUrl : 'app/main/main.html',
        controller : 'MainController',
        controllerAs : 'main'
      })
      .state('auth', {
        url : '/auth',
        templateUrl : 'app/auth/auth.html',
        controller : 'AuthController',
        controllerAs : 'auth'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
