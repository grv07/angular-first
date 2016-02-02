var myApp = angular.module('eventExample', []);
myApp.controller('EventController', ['$scope', function($scope){
   $scope.count = 0;
   $scope.$on('MyEvent', function(){
     $scope.count++;
   });
}]);
