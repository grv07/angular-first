var myApp = angular.module('myApp',[])
myApp.controller('tableController', function($scope){
	$scope.student = {
		'firstName': 'Gaurav',
		'lastName': 'Tygai',
		'colg': 'MIT',
		subjects:[{
			'maths':'fav',
			'eng':'dull',
			'hindi':'null',
			'chemistry':'nill',
		},
		{
			'maths':'fav',
			'eng':'dull',
			'hindi':'null',
			'chemistry':'nill',
		},
		{
			'maths':'fav',
			'eng':'dull',
			'hindi':'null',
			'chemistry':'nill',
		},
		{
			'maths':'fav',
			'eng':'dull',
			'hindi':'null',
			'chemistry':'nill',
		}
		]
	};

	$scope.fullName = function(){
		return $scope.student.firstName+' '+$scope.student.lastName
	}

});