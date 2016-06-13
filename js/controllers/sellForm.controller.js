let SellFormController = function($scope) {
	
	$scope.submitForm = function(object) {
		console.log(object);
	}
};

SellFormController.$inject = ['$scope'];

export default SellFormController;

