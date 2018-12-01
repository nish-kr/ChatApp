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

// var io = require('socket.io');

app.service('chatService', function($location) {

    this.logout = function() {
        alert('Logget Out Successfully!');
        $location.path('/logout');
    }

    // this.sendMessage = function() {

    //     $scope.message = "";
    // }


    var ioSocket = io.connect('http://localhost:3003');

    ioSocket.emit('chat message', "Message sent from client");

});