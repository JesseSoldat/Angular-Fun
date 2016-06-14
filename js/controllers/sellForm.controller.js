let SellFormController = function($scope, $firebaseObject) {
	
	var ref = firebase.database().ref();
	
	$scope.data = $firebaseObject(ref);


	// console.log($scope.data);

	function writeUserData( userId, name, price, contact, description) {
	  	firebase.database().ref('sellers/' + userId).set({
	    name: name,
	    price: price,
	    contact: contact,
	    description: description
  		});
  	}
  	
  	$scope.submitForm = function(obj) {
  		console.log(obj);

  		writeUserData(1, obj.Name, obj.Price, obj.Contact, obj.Description);

  		

  	};

 



};

SellFormController.$inject = ['$scope','$firebaseObject'];

export default SellFormController;


