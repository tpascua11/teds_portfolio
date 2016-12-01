//Den
(function(){
var app = angular.module('dragon', [ ]);
app.controller('DragonController', function($scope, $http){

  $scope.dragon = 1;
  $scope.whatIsDragon = function(){
    $scope.dragon = 1;
  }

});
})();


