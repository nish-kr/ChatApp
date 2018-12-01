/********************************************************************************
 *  Purpose: Program file to store all the controllers based on different puposes.
 *
 *  @author  Nishant Kumar
 *  @version 1.0
 *  @since   20-11-2018
 ********************************************************************************/


app.controller('chatCtrl', function($scope, userService, chatService) {

    // var io = require('socket.io-client');
    // import { Socket } from "socket.io-client";
    // $scope.dispUn = userService.getUn();
    // var socket = io.connect('http://localhost/3003/');
    var chats = [];
    var displayChats = [];

    $scope.send = function() {
        console.log("<><<<<<", $scope.usermessage, "<><<<<<");

        if ($scope.usermessage != null || $scope.usermessage != "\s+") {

            var time = new Date().toLocaleString();
            console.log(time);

            var chatObj = {
                un: $scope.dispUn,
                message: $scope.usermessage,
                time: time
            }

            chats.push(chatObj);

            $scope.chats = chats;

            console.log(chats);

            $scope.usermessage = null;

            // chatService.emit('chat message', chatObj);

            // socket.emit('chat message', $scope.chatObj);
            // $scope.usermessage = "";
            // socket.on('chat message', function(msg) {
            //     chats.push(msg.message);
            //     $scope.chats = chats;
            // });

        } else {
            console.log("No message found!!");

        }
    }

    $scope.logout = function() {

        chatService.logout();

    }
})