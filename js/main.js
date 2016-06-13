import angular from 'angular';
import 'angular-ui-router';

import HomeController from './controllers/home.controller';

import config from './config';


var test = 'Are you working NOW please?';

console.log(test);

angular
	.module('app', ['ui.router'])
	.config(config)
	.controller('HomeController', HomeController);