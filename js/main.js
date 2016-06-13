import angular from 'angular';
import 'angular-ui-router';

import HomeController from './controllers/home.controller';
import SellFormController from './controllers/sellForm.controller';

import config from './config';


var test = 'Are you working NOW?';

console.log(test);

angular
	.module('app', ['ui.router'])
	.config(config)
	.controller('HomeController', HomeController)
	.controller('SellFormController', SellFormController);