function EmployeeCtrl ($scope,$location) {

	$scope.employees=[];

	$scope.employees.push({"id":"123123","name":"sdlvkm","location":"dslfkm","dob":"2014-10-31","doj":"2014-11-22"});

	$scope.employees.push(JSON.parse(localStorage.getItem(JSON.parse(localStorage.getItem("list")))));


	$scope.go = function ( path ) {
  		$location.path( path );
		};

	$scope.delete=function(id){
		
	};

	
}