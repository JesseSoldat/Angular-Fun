let SingleItemController = function($scope, $stateParams) {
	$scope.test = 'TEST';
	console.log($stateParams.name);
};

SingleItemController.$inject = ['$scope', '$stateParams'];

export default SingleItemController;


