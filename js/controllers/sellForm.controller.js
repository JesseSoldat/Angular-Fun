let SellFormController = function($scope, $firebaseObject) {
	
	var ref = firebase.database().ref();
	
	$scope.data = $firebaseObject(ref);

	console.log($scope.data);
};

SellFormController.$inject = ['$scope','$firebaseObject'];

export default SellFormController;


