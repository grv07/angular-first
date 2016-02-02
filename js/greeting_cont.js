var yApp = angular.module('myApp',[]);
yApp.controller('GreetingController', ['$scope', function($scope) {
	  $scope.greeting = 'Hola!';
	  //This is how you can define a behavior on $scope ... ..
	  $scope.double = function(value){if(value*2 >= 0){return value*2;}else return 0;};	
}]);
