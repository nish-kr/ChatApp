/********************************************************************************
 *  Purpose: Program file to store all the controllers based on different puposes.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   20-11-2018
 ********************************************************************************/

/**
 * Controller function of login
 */
app.controller('userCtrl', function($scope, userService) {

    /**
     * Function to login the user.
     */
    $scope.login = function() {

        // Storing user's username & password in details object.
        var details = {
            un: $scope.username,
            pass: $scope.password,
        }

        console.log(details);

        // Passing user details to the userService.login() function.
        userService.login(details);
    }

    /**
     * Function for showing the password to the user.
     */
    $scope.showPass = function() {

        // Getting user input 
        var pass = document.getElementById('pass');

        // Checking if the user has checked the check button
        if (document.getElementById('check').checked) {

            // If yes, then change the password type to text.
            pass.setAttribute('type', 'text');
        } else {

            // else keep the type as password itself.
            pass.setAttribute('type', 'password');
        }
    }

    /**
     * Function to register the user.
     */
    $scope.register = function() {

        // Storing all the user details in details object.
        var details = {
            fn: $scope.firstName,
            ln: $scope.lastName,
            email: $scope.email,
            un: $scope.username,
            pass: $scope.password,
        }

        // Passing user details to the userService.signup() function.
        userService.signup(details);
    }

    /**
     * Function to check the strength of the password.
     */
    $scope.checkStrength = function(password) {

        // Defining the regex for Strong password & Average password strengths.
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

        // Checking if the password matches the regexes
        if (strongRegex.test(password)) {

            // If the password matches strongRegex, show Strong
            $scope.strength = "Strength: Strong";

        } else if (mediumRegex.test(password)) {

            // If the password matches mediumRegex, show Average
            $scope.strength = "Strength: Average";

        } else {

            // Else show weak
            $scope.strength = "Strength: Weak";
        }
    };

});