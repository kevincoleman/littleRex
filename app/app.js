angular.module('kid-rpg', [

])
.controller('MainCtrl', function($scope, $http) {
  $http.get('data/achievements.json')
    .then(function(res){
      $scope.achievements = res.data;
    });
});
