const Bot = require("../src/app.js");

//This Line of code must be writen befor all Event callings, It takes "Nickname", "Url" and the "Prefix".
const bot1 = new Bot("1firstBot", "ws://zekro.de:7777/ws", '!');


//This Event gets called then the Bot sucessfully logged in.
bot1.Emil.on('Bot_loggedin', function () {
    console.log('logged in');
});

//This Event gets called then the Bot disconnect.
bot1.Emil.on('Bot_disconnected', function () {
    console.log('disconnected,');
});

//This Event gets called everytime the !Websocket! throws an error
bot1.Emil.on('Bot_error', err => {
    console.log("An error ocurred: " + err);
})

//This Event gets called everytime a new User joins the Chat.
bot1.Emil.on('Client_connected', name => {
    //with the function send("message"), you can Send a message to the Chat.
    bot1.send("Hello: " + name)
});

//This Event gets called everytime a User disconnect from the Chat
bot1.Emil.on('Client_disconnected', name => {
    //with the function send("message"), you can Send a message to the Chat.
    bot1.send("Bye: " + name)
});


//This Event gets called everytime a User send something, when you want the message use data.message, for username data.username, for the Color data.color and for the timestamp data.timestamp
bot1.Emil.on('message', data => {
    console.log("I got that message: " + data.message + " from this user: " + data.username + " and he had this color: " + data.color);
});