let SingleItemController = function($scope, $stateParams, SingleItemService, $firebaseObject) {

	var ref = firebase.database().ref();
	
	$scope.data = $firebaseObject(ref);

	let id = $stateParams.id;
	
	//TEST
	// var results = SingleItemService.getItem(id);
	// console.log(results);

	//   $scope.item = results; 



	//TEST

	var ref = firebase.database().ref('sellers/').on('value', function(snapshot) {

	  	var payload = snapshot.val();

	  	var dataArr = [];

	  	for (var prop in payload) {
	  
		  	if(prop === id) {
		  		// console.log('Match');
		  		dataArr.push(payload[prop]);
		  	}	else {
		  		// console.log('No Match');
		  	}
	  	}
	 	// console.log(dataArr);
	 	let item = dataArr.pop();
	 	var results = {};
	  	results = item;
	  	console.log(results); 
	  	$scope.item = results; 
	});
	  	  
	

};

SingleItemController.$inject = ['$scope', '$stateParams', 'SingleItemService', '$firebaseObject'];

export default SingleItemController;


