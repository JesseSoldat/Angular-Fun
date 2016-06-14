let config = function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('root', {
			abstract: true,
			templateUrl: 'templates/layout.tpl.html'
		})
		.state('root.home', {
			url: '/',
			controller: 'HomeController',
			templateUrl: 'templates/home.tpl.html'
		})
		.state('test', {
			url: '/test',
			templateUrl: 'templates/test.tpl.html'
		})
		.state('sellform', {
			url: '/sell',
			controller: 'SellFormController',
			templateUrl: 'templates/sellform.tpl.html'
		})
		.state('selllist', {
			url: '/selllist',
			controller: 'SellListController',
			templateUrl: 'templates/forsalelist.tpl.html'
		});

};

config.$inject = ['$stateProvider', '$urlRouterProvider'];

export default config;