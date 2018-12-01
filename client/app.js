/***********************************************************************************
 *  Purpose: Main Program file to define where the request will be send based on the
 *           url request using routeProvider.
 * 
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   20-11-2018
 ***********************************************************************************/

// Creating an angular module named 'chat' & using 'ngRoute'.
var app = angular.module('chat', ['ngRoute']);

// Defining app.config() function to configure different routes of the user request.
app.config(function($routeProvider) {

    // Using different $routeProvider.when() functions to call different urls.
    $routeProvider
        .when('/', {
            templateUrl: 'template/login.html',
            controller: 'userCtrl'
        })
        .when('/login', {
            templateUrl: 'template/login.html',
            controller: 'userCtrl'
        })
        .when('/signup', {
            templateUrl: 'template/signup.html',
            controller: 'userCtrl'
        })
        .when('/home', {
            templateUrl: 'template/home.html',
            controller: 'chatCtrl'
        })
        .when('/logout', {
            templateUrl: 'template/login.html',
            controller: 'userCtrl'
        })
        .otherwise({
            redirectTo: '/'
        })
})