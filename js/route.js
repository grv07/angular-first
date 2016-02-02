var route_p = angular.module('routeProvider', []);
route_p.controller('hello', function($scope){
	$scope.message = 'Hello gaurav Tyagi';
	var name_obj = {'name':'Gaurav','ct':'Gurgaon'};
	var mn = {'name':'gt'};
	var test = 'gut';
	//$scope.n = angular.merge({},name_obj,mn);
	//$scope.n = angular.extend({},name_obj,mn);
	$scope.n = angular.toJson(test);
});
/*route_p  .config(['$routeProvider',function($routeProvider){
$routeProvider.
	when('/showOrders',{
		templateUrl: 'templets/allOrder.html',
		controller: 'AddOrderController'
	}).
	otherwise({
		redirectTo:'/templets'
	});

}]);
route_p.controller('AddOrderController', function($scope) {
		
		$scope.message = 'This is Add new order screen';
			
});*/
