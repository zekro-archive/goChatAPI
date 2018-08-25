const WebSocket = require('ws');
const event = require('events');

class emi extends event {}

class Bot {
    constructor(nickname, url, prefix) {
        //The Nickname of the Bot
        this.nickname = nickname;
        //the url where the Websocket should connect
        this.url = url;
        //Initailaize the new Websocket
        this.ws = new WebSocket(this.url);
        //The new Eventhandler
        this.Emil = new emi();
        //The Prefix of the Bot
        this.prefix = prefix;

        //gets called when the websocket connect to the Server
        this.ws.on('open', function () {
            try {
                this.emit({
                    event: 'username',
                    data: this.nickname
                });
            } catch (error) {
                console.log(error);
            }
        });

        //gets called then the websocket disconnect
        this.ws.on('disconnect', function () {
            this.Emil.emit('Bot_disconnected');
        });

        //gehts called then the websocket has an error
        this.ws.on('error', err => {
            this.Emil.emit('Bot_error', err);
        })

        //this gehts called when data gets to the Client
        //like {event: 'name',
        //     data: 
        //       { color: 'Hex',
        //         message 'Text',
        //         timestamp: 1223423523,
        //         username 'name' }}
        this.ws.on('message', data1 => {
            let data2 = JSON.parse(data1);
            //with the switch I filter the events
            switch (data2.event) {
                //the event when a message comes in
                case 'message':
                    this.Emil.emit('message', data2.data);
                    break;
                    //When a new User join    
                case 'connected':
                    this.Emil.emit('Client_connected', data2.data.name[0]);
                    break;
                    //When a User disconnect
                case 'disconnected':
                    this.Emil.emit('Client_disconnected', data2.data.name[0]);
                    break;
                    //When the Bot connects correctly
                case 'connect_rejected':
                    this.Emil.emit('Bot_loggedin');
                    break;
                default:
                    console.log(data2.event);
                    break;
            }
        });

    }
    //Sends to the Server a event and the event data.
    emit(event, data) {
        let rawData = JSON.stringify(event, data);
        this.ws.send(rawData);
    }
    //Sends a message to the Server, which forward the event/message to the over clients
    send(message) {
        this.emit({
            event: 'message',
            data: message
        })
    }
    //Gets the Nickname of the Bot
    get_Nickname() {
        return this.nickname;
    }
    //Gets the Prefix of the Bot
    get_Prefix() {
        return this.prefix;
    }
    //Sets the Prefix of the Bot
    set_Prefix(Prefix) {
        this.prefix = Prefix;
    }
}

module.exports = Bot;