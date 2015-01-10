'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', '$http', [function($http, $log) {
  $http.get('data/achievements.json')
  .success(function (data) {
    $log.debug('Data retreived: ', data);
    $scope.achievements = data;
  })
  .error(function (error) {
    $log.error('An error has occured: ', error);
  });
}]);
