angular.module('littlerex', [

])
.controller('MainCtrl', function($scope, $location, $http) {
  $http.get('achievements.json')
    .then(function(res){
      $scope.achievements = res.data;
    });

  $scope.go = function (slug) {
    $location.path(slug);
    return true;
  }

  $scope.clearURL = function () {
    $location.path('');
    return false;
  }
});
