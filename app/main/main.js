(function(angular) {
  "use strict";

  var app = angular.module('myApp.main', ['firebase', 'firebase.utils', 'ngRoute']);

  app.controller('HomeCtrl', ['$scope', 'fbutil', 'user', '$firebaseObject', function ($scope, fbutil, user, $firebaseObject) {
    $scope.user = user;
    
  }]);

  app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/main', {
      templateUrl: 'main/main.html',
      controller: 'MainCtrl',
    });
  }]);

})(angular);

