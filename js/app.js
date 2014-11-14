angular.module('employeeDetails', []).config(airlineRouter);

function airlineRouter ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/employeelist.html',
		 controller: 'EmployeeCtrl'})
		.when('/edit/:id', {
		 templateUrl: 'partials/employeeInfo.html',
		 controller: 'EmployeeInfoCtrl'
		})
		.when('/add', {
		 templateUrl: 'partials/employeeInfo.html',
		 controller: 'EmployeeInfoCtrl'
		});
}

