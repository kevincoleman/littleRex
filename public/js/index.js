angular.module('littlerex', [

])
.controller('MainCtrl', function($scope, $http) {
  $http.get('http://localhost:5000/achievements')
    .then(function(res){
      $scope.achievements = res.data;
    });
});
