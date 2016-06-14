import angular from 'angular';
import 'angular-ui-router';

import firebase from 'firebase';
import angularfire from 'angularfire';

import HomeController from './controllers/home.controller';
import SellFormController from './controllers/sellForm.controller';
import SellListController from './controllers/sellList.controller';


import config from './config';


var appConfig = {
    apiKey: "AIzaSyCRo_w0-W7GihV6P5hdy2M6AtknRRf8rEA",
    authDomain: "angularsellers.firebaseapp.com",
    databaseURL: "https://angularsellers.firebaseio.com",
    storageBucket: "",
  };
   firebase.initializeApp(appConfig);


var test = 'Are you working NOW?';

// console.log(test);

angular
	.module('app', ['ui.router', 'firebase'])
	.config(config)

	.controller('HomeController', HomeController)
	.controller('SellFormController', SellFormController)
	.controller('SellListController', SellListController)


	;