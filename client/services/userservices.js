/***********************************************************************************
 *  Purpose: Program file of service to controll requests called by the controller.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   20-11-2018
 ***********************************************************************************/

/**
 * Service of the app module.
 */
app.service('userService', function($http, $location) {

    var userName = "";

    // Defining login() function to login the user based on the request & passing user data.
    this.login = function(data) {

        // Creating a new http post request by passing the user data.
        $http({
            method: 'POST',
            url: 'http://localhost:3003/login',
            data: data
        }).then(

            // Defining successCallback() function to catch success response.
            function successCallback(response) {
                alert("Login Successfull!")
                console.log(response);
                $location.path('/home');
                userName = response.data.un;
                // alert(response.data.un);
            },

            // Defining errorCallback() function to catch error response.
            function errorCallback(response) {
                alert("Invalid Username/Password!")
                console.log(response);
            });
    }

    this.signup = function(data) {

        // Creating a new http post request by passing the user data.
        $http({
            method: 'POST',
            url: 'http://localhost:3003/signup',
            data: data
        }).then(

            // Defining successCallback() function to catch success response.
            function successCallback(response) {
                alert("Signup Successfull! Login Now!")
                console.log(response);
                $location.path('/login');
            },

            // Defining errorCallback() function to catch error response.
            function errorCallback(response) {
                alert("Signup Unseccessful, Some Internal Error")
                console.log(response);
            });
    }

    this.getUn = function() {
        return userName;
    }
});