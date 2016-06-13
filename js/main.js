import angular from 'angular';
import 'angular-ui-router';

import HomeController from './controllers/home.controller';


console.log('Hello World!');

var test = 'Are you working?';

console.log(test);

angular
	.module('app', ['ui.router'])
	.controller('HomeController', HomeController);