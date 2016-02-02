var hell = angular.module('scopeExample', []);
hell.controller('MyController',['$scope', function($scope){
	$scope.name = 'World';
	$scope.sayHello = function(){
		$scope.greeting = 'Hello '+$scope.hame+'!';
	};
}]);
