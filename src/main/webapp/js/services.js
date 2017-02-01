'use strict';

/* Services */
var digitalbankingServices = angular.module('digitalbankingServices', [ 'ngResource' ]);

digitalbankingServices.factory('LoginService',['$http','$location','$rootScope', function($http, $location, $rootScope) {
	var service = {};
	service.Login = function(username, password) {
		console.log("In services Login method");
		/*
		return $http.post('/authservice/authenticate', {
			userName : username,
			password : password
		});
		*/
		//return $http.get('/accservices/556678/accounts');
		//return $http.get('/cardservices/556677/cards');
		return $http.get('json/authenticate_success.json');
	};
	service.isLoggedIn = function() {		
		$http.defaults.headers.common.authToken = sessionStorage.authToken;
		return $http.post('webapi/security/isLoggedIn');
	};
	return service;
}]);

digitalbankingServices.factory('User', [function() {
	var sdo = {
		isLogged: false,
		username: '',
		password: ''
	};
	return sdo;
}]);

digitalbankingServices.factory('AccountsService',['$http','$location','$rootScope', '$localStorage', function($http, $location, $rootScope,$localStorage) {

    var service = {};
    service.getAccountSummary = function() {  
    	 return $http.get($localStorage.applicationUrls.accSummaryUrl);
    };

    return service;
}]);

digitalbankingServices.factory('LoanService',['$http','$location','$rootScope', '$localStorage', function($http, $location, $rootScope,$localStorage) {

    var service = {};
    service.getLoanSummary = function() {  
    	 return $http.get($localStorage.applicationUrls.loanSummaryUrl);
    };

    return service;
}]);

digitalbankingServices.factory('TransactionService',['$http','$location','$rootScope', '$localStorage', function($http, $location, $rootScope, $localStorage) {

    var service = {};
    service.getTransactionDetails = function() {  
    	 return $http.get($localStorage.applicationUrls.transactionDetailsUrl);
    };

    return service;
}]);

digitalbankingServices.factory('PayeeService',['$http','$location','$rootScope', '$localStorage', function($http, $location, $rootScope, $localStorage) {

    var service = {};
    service.getPayeeList = function() {  
    	 return $http.get($localStorage.applicationUrls.payeeListUrl);
    };

    return service;
}]);

digitalbankingServices.factory('CardService',['$http','$location','$rootScope', '$localStorage', function($http, $location, $rootScope, $localStorage) {

    var service = {};
    service.getCardSummary = function() {  
    	 return $http.get($localStorage.applicationUrls.cardSummaryUrl);
    };

    return service;
}]);

digitalbankingServices.factory('InvestmentService',['$http','$location','$rootScope', '$localStorage', function($http, $location, $rootScope, $localStorage) {

    var service = {};
    service.getInvestmentSummary = function() {  
    	 return $http.get($localStorage.applicationUrls.investmentSummaryUrl);
    };

    return service;
}]);

digitalbankingServices.factory('RegistrationService',['$http','$location','$rootScope','$q',function($http, $location, $roorScope){
		var service={};
		service.postUserDetails=function(userData){
			return $http.post('/authservices/user/authentication');
		}
		return service;
}]);

digitalbankingServices.factory('ForgotPasswordService',['$http','$location','$rootScope','$q',function($http,$location,$rootScope){
	var service={};
	service.postForgotPasswordDetails=function(userData){
		return $http.post('/authservices/user/forgotPasswordData');
	}
	return service;
}]);
