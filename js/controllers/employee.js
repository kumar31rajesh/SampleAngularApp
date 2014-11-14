function EmployeeInfoCtrl ($scope, $routeParams,$location) {

	$scope.employee={};

	if(typeof($routeParams.id)!="undefined"){
		$scope.employee=JSON.parse(localStorage.getItem($routeParams.id)) ;
	}

	if($location.url()==("/edit/"+$routeParams.id)){
		$scope.mode="Edit" ;
	}
	if($location.url()=="/add"){
		$scope.mode="Add" ;
	}

	$scope.listArray=[];

	$scope.saveRecord=function(){

		localStorage.setItem($scope.employee.id, JSON.stringify($scope.employee));

		//$scope.listArray.push(JSON.parse(localStorage.getItem("list")));
		$scope.listArray.push($scope.employee.id);
		localStorage.setItem("list", JSON.stringify($scope.listArray));
		$location.path("/");

	}
	
}