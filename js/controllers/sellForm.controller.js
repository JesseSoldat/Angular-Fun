let SellFormController = function($scope, $firebaseObject) {
	
	var ref = firebase.database().ref();
	
	$scope.data = $firebaseObject(ref);


	// console.log($scope.data);

	function writeUserData( userId, id, name, price, contact, description, url) {
	  	firebase.database().ref('sellers/' + userId).set({
	  	id: id,
	    name: name,
	    price: price,
	    contact: contact,
	    description: description,
	    url: url
  		});
  	}
  	
  	$scope.submitForm = function(obj) {
  		console.log(obj);

  		var id = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()

	
		// console.log(id);

  		writeUserData(id, id, obj.Name, obj.Price, obj.Contact, obj.Description, obj.url);

  		

  	};

 



};

SellFormController.$inject = ['$scope','$firebaseObject'];

export default SellFormController;


