angular.module('timeApp',[])

.controller('timeCont',function($scope, $interval,ddefault){
	this.name = ddefault.getname();
	$scope.current_time = new Date().toLocaleTimeString();
	$interval(function(){
		$scope.current_time = new Date().toLocaleTimeString();
	},1000);
});
