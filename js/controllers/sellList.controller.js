let SellListController = function($scope, $firebaseObject) {

	var ref = firebase.database().ref();
	
	$scope.data = $firebaseObject(ref);


	var ref = firebase.database().ref('sellers/').on('value', function(snapshot) {
 
  	var payload = snapshot.val();
  	console.log(payload);
  	var dataArr = [];
  	for (var prop in payload) {
  	dataArr.push(payload[prop]);
}
  console.log(dataArr);
  	$scope.items = dataArr;
});
};


SellListController.$inject = ['$scope','$firebaseObject'];

export default SellListController;