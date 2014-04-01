var http = require('http');

var io = require('socket.io').listen(8080);

// Globals
var rooms = [];
var games = [];

var game = function (str, host) {

    this.name = str;
    this.host = host;
    this.client = undefined;


    host.join(str);

    this.addClient = function (client) {
        this.client = client;
        client.join(this.name);
    }

}

    function addGame(str, socket) {
        rooms.push(str);
        games[str] = new game(str, socket);
    }

    function makeid(len) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < len; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');


// Basic test
io.sockets.on('connection', function (socket) {
    socket.emit('news', {
        message: 'Connected to Game Service!'
    });

    // Join a game
    socket.on('join', function (data) {

        if (!data.name) {
            do {
                var str = makeid(3);
            } while (rooms.indexOf(str) != -1);
            console.log("New Game - ", str);
            data.name = str;
            addGame(str, socket);
        } else if (rooms.indexOf(data.name) != -1 && games[data.name]) {
            games[data.name].addClient(socket);
        }

        console.log("Game Key :", data.name);
        socket.emit('joined', {
            name: data.name
        });

        console.log(games[data.name])

    });

    // communicate in a game
    socket.on('comm', function (data) {
        console.log("Room Data");
        console.log(data);
        socket.broadcast.to(data.name).emit(data.event, data.data);
    })
});