'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', [
    'myApp.config',
    'myApp.security',
    'myApp.home',
    'myApp.account',
    'myApp.chat',
    'myApp.login',
    'myApp.main',
    'myApp.work',
    'myApp.projects'
  ])
  
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({
      redirectTo: '/home'
    });
  }])

  .controller(['$rootScope', function($rootScope){
    
  }])

  .run(['$rootScope', 'Auth', '$location', function($rootScope, Auth, $location) {
    $rootScope.app = {activeTab: 0, clean: true};
    
    $rootScope.$on('$locationChangeStart', function(){
      $rootScope.app.path = $location.path();
      console.log('hi', $rootScope.app.activeTab, $location.path());
      
    });
    // track status of authentication
    Auth.$onAuth(function(user) {
      $rootScope.loggedIn = !!user;
    });
  }]);
