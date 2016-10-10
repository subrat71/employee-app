var appRoot = angular.module('employeeApp', ['ui.router']);

//route config
appRoot.config(["$urlRouterProvider, $stateProvider", function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise('/');
	$stateProvider.state('login', {
		url: '/login',
		templateUrl: 'partials/login.html',
		controller: 'LoginController'
	})
	.state('registration', {
		url: '/registration',
		templateUrl: 'partials/registration.html',
		controller: 'RegistrationController'
	});
}]);


appRoot.controller('LoginController', ["$scope", function($scope) {
	console.log("LoginController");
}]);

appRoot.controller('RegistrationController', ["$scope", function($scope) {
	console.log("RegistrationController");
}]);