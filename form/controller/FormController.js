var form_vali = angular.module('formValidator', []);
form_vali.controller('basicController',function($scope){
	$scope.formName = 'Register Form';
	$scope.userOption = {
		'User':'USER',
		'Teacher':'TEACHER',
		'Student':'STUDENT',
	};
});